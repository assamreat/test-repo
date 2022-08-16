import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createChecklist, getChecklist } from '../../../actions/checklist';

import ChecklistForm from './ChecklistForm';
import ChecklistShow from './ChecklistShow';

const Checklist = ({
    createChecklist,
    getChecklist,
    match,
    history,
    checklist: { checklist },
}) => {
    useEffect(() => {
        const { id } = match.params;
        getChecklist(id);
    }, [getChecklist]);

    const [formData, setFormData] = useState({
        appealNum: '',
        complaintNum: '',
        appellant: '',
        respondent: '',
        sectionNum: '',
        isAppealCompetent: false,
        isNameAddressCorrect: false,
        isOrdercopyAttached: false,
        dateOfOrder: '',
        dateOfCommunication: '',
        dateOfApplication: '',
        dateOnCopyReady: '',
        dateOfReceipt: '',
        dateOfFiling: '',
        dateOfSubmissionHardcopy: '',
        isDelayOnSubmission: '',
        amountOfDelayOnSubmission: '',
        isAppealFiledWithinLimitation: false,
        isDelayInFiling: false,
        amountOfDelayInFiling: '',
        isCondonationOfDelayFiled: false,
        objectionForCondonation: '',
        isFeesPaid: false,
        dateOfPayment: new Date(0),
        copyOfReceipt: '',
        isPaginationCorrect: '',
        legibleDocs: '',
        isAppealMemoAnnexed: false,
        isServedByPost: false,
        isAuthStamped: false,
        isEmailPhoneOnRecord: false,
    });

    const [formError, setFormError] = useState({});

    const validate = (values) => {
        const errors = {};

        if (!values.appealNum) {
            errors.appealNum = 'Appeal No. can not be empty';
        }

        if (!values.complaintNum) {
            errors.complaintNum = 'Complaint No. can not be empty';
        }
        if (!values.appellant) {
            errors.appellant = 'Appellants field can not be empty';
        }
        if (!values.respondent) {
            errors.respondent = 'Respondent field can not be empty';
        }

        if (!values.sectionNum) {
            errors.sectionNum = 'Section number can not be empty';
        }
        if (!values.dateOfOrder) {
            errors.dateOfOrder = 'Date of order can not be empty';
        }
        if (!values.dateOfCommunication) {
            errors.dateOfCommunication =
                'Date of communication can not be empty';
        }
        if (!values.dateOfApplication) {
            errors.dateOfApplication = 'Date of application can not be empty';
        }
        if (!values.dateOnCopyReady) {
            errors.dateOnCopyReady =
                'Date on which the copy was ready field can not be empty';
        }
        if (!values.dateOfReceipt) {
            errors.dateOfReceipt = 'Date of receipt can not be empty';
        }
        if (!values.dateOfFiling) {
            errors.dateOfFiling = 'Date of online filling can not be empty';
        }
        if (!values.dateOfSubmissionHardcopy) {
            errors.dateOfSubmissionHardcopy =
                'Date of submission of hard copy can not be empty';
        }

        if (values.isDelayOnSubmission && !values.amountOfDelayOnSubmission) {
            errors.amountOfDelayOnSubmission = 'This Field can not be empty';
        }

        if (values.isDelayInFiling && !values.amountOfDelayInFiling) {
            errors.amountOfDelayInFiling = 'This Field can not be empty';
        }

        if (
            !values.isCondonationOfDelayFiled &&
            !values.objectionForCondonation
        ) {
            errors.objectionForCondonation = 'This Field can not be empty';
        }

        if (values.isFeesPaid && !values.dateOfPayment) {
            errors.dateOfPayment = 'This Field can not be empty';
        }

        if (values.isPaginationCorrect && !values.legibleDocs) {
            errors.legibleDocs = 'This Field can not be empty';
        }

        return errors;
    };

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheck = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.checked });
    };
    const onSubmit = (e) => {
        e.preventDefault();

        setFormError(validate(formData));

        const err = Object.keys(validate(formData));

        if (err.length) {
            let input =
                document.querySelector(`input[name=${err[0]}]`) ||
                document.querySelector(`select[name=${err[0]}]`) ||
                document.querySelector(`textarea[name=${err[0]}]`);

            input.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'start',
            });
        }

        if (Object.keys(validate(formData)).length === 0) {
            const { id } = match.params;
            createChecklist(formData, id, history);
        }
    };

    if (checklist) {
        return <ChecklistShow checklist={checklist} />;
    }
    return (
        <ChecklistForm
            formData={formData}
            onChange={onChange}
            handleCheck={handleCheck}
            onSubmit={onSubmit}
            formError={formError}
            setFormData={setFormData}
        />
    );
};

const mapStateToProps = (state) => {
    return { checklist: state.checklist };
};

export default connect(mapStateToProps, { createChecklist, getChecklist })(
    withRouter(Checklist)
);
