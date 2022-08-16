module.exports = function (pdfDoc, checklist) {
    pdfDoc.font('Times-Roman');
    pdfDoc.fontSize(12).text('FORM A', { align: 'center' }).moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('CHECKLIST FOR SCRUTINY OF APPEAL', { align: 'center' })
        .moveDown(2.0);
    pdfDoc
        .fontSize(12)
        .text(
            'Appeal No.________________________       Complaint No.________________________',
            {
                align: 'left',
            }
        )
        .moveDown(2.0);
    pdfDoc
        .fontSize(12)
        .text(
            'Parties_______________________________vs.___________________________________',
            {
                align: 'left',
            }
        )
        .moveDown(1.5);
    pdfDoc
        .fontSize(12)
        .text(
            '1    Legal provisions:U/sec.                             of RERA Act ',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('2    Whether the appeal is competent                      ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '3    Whether the name of the parties and their addresses are properly mentioned in the Appeal    Memo ',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '4    Whether certified copy of impugned Order/Judgment is filed with the appeal ',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('5    What is the :', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('     a)   Date of the order :-  ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '     b)   Date of its communication to the party by RERA  :-  ',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('     c)   Date of application for certified copy :-  ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('     d)   Date on which copy was ready :-  ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('     e)   Date of receipt of certified copy :-  ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('     f)   Date of Online filing of appeal :-  ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('     g)   Date of submission of hard copy of Appeal Memo :-  ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '     h)   Whether there is any delay in submission of hard copy of Appeal Memo :  ',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('     If yes, how many days :-     ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('6   Is appeal filed within limitation ( 60 days ) :-  ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('     (from the date of receipt of order) ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('7   Whether there is any delay in filing of appeal :  ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('     If yes, how many days :-     ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '8   Whether application for condonation of delay is filed with appeal :  ',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('     If not, raise its objection. ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('9   Whether requisite fees paid :-  ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('     If yes, copy of the receipt & date of payment :- ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '10   Whether the required documents are filed with Index & pagination :-  ',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('     If yes, whether the documents are legible :-  ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '11   i) Whether copy of appeal memo is annexed for giving the same to other side :  ',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('      ii) Or served to other side by post/ courier : ', {
            align: 'left',
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            '12   Whether Vakalatnama/ Authorization is filed and properly stamped :  ',
            {
                align: 'left',
            }
        )
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text('13   Whether e-mail / phone / Mobile No. is on record : ', {
            align: 'left',
        })
        .moveDown(3.5);
    pdfDoc
        .fontSize(12)
        .text('Signature of the Clerk, Scrutiny Branch', {
            align: 'left',
        })
        .moveDown(3.5);
    pdfDoc
        .fontSize(12)
        .text('Submission :', {
            align: 'left',
            underline: true,
        })
        .moveDown(0.5);
    pdfDoc
        .fontSize(12)
        .text(
            "     Matter be placed before Hon'ble Chairperson for seeking Allotment Order. ",
            {
                align: 'left',
            }
        )
        .moveDown(3.5);
    pdfDoc
        .fontSize(12)
        .text('Registrar, Assam REAT ', {
            align: 'right',
        })
        .moveDown(0.5);
};
