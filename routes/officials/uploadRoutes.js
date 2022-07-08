const express = require('express');
const router = express.Router();

// Middlewares
const auth = require('../../middleware/auth');
const isReceptionist = require('../../middleware/isReceptionist');

// Model
const AppealDoc = require('../../models/AppealDoc');

// @route POST api/upload/:id
// @desc  Upload files for an appeal
// @access Private
router.post('/:id', auth, isReceptionist, async (req, res) => {
    try {
        const doc = req.file;

        if (!doc) {
            return res.status(422).json({ msg: 'Attached file is not a PDF' });
        }
        const docURL = doc.path;

        // See if doc exists
        const existingDoc = await AppealDoc.findOne({
            where: { appealId: req.params.id },
        });

        if (existingDoc) {
            const appealDoc = await AppealDoc.update(
                {
                    docURL: docURL,
                    appealId: req.params.id,
                },
                {
                    where: { appealId: req.params.id },
                }
            );

            return res.json({ docURL: docURL });
        }

        const appealDoc = AppealDoc.build({
            docURL: docURL,
            appealId: req.params.id,
        });
        await appealDoc.save();

        res.json({ docURL: docURL });
    } catch (err) {
        console.log(err);
        res.status(500).send('SERVER ERROR');
    }
});

module.exports = router;
