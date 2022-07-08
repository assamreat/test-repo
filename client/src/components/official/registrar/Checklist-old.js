import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createChecklist, getChecklist } from '../../../actions/checklist';

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
    });

    const {
        appealNum,
        complaintNum,
        appellant,
        respondent,
        sectionNum,
        isAppealCompetent,
        isNameAddressCorrect,
        isOrdercopyAttached,
        dateOfOrder,
        dateOfCommunication,
        dateOfApplication,
        dateOnCopyReady,
        dateOfReceipt,
        dateOfFiling,
        dateOfSubmissionHardcopy,
        isDelayOnSubmission,
        amountOfDelayOnSubmission,
        isAppealFiledWithinLimitation,
        isDelayInFiling,
        amountOfDelayInFiling,
        isCondonationOfDelayFiled,
        objectionForCondonation,
        isFeesPaid,
        dateOfPayment,
        copyOfReceipt,
        isPaginationCorrect,
        legibleDocs,
        isAppealMemoAnnexed,
        isServedByPost,
        isAuthStamped,
        isEmailPhoneOnRecord,
    } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { id } = match.params;
        createChecklist(
            { appealNum, appellant, complaintNum, respondent },
            id,
            history
        );
    };

    if (checklist) {
        return (
            <div className="container-fluid">
                <h1 className="h3 mb-2 text-gray-800">Checklist - FORM A</h1>
                <p className="mb-4">Checklist for Scrutiny Appeal</p>
                <div className="card shadow mb-4">
                    <div className="card-header py-3"></div>
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col-12">
                                <h4>
                                    <label htmlFor="FORM A">
                                        <b>FORM A</b>
                                    </label>
                                </h4>
                            </div>

                            <div className="col-12">
                                <h4>
                                    <label htmlFor="CHECKLIST FOR SECURITY APPEAL">
                                        <b>CHECKLIST FOR SCRUTINY APPEAL</b>
                                    </label>
                                </h4>
                            </div>

                            <form
                                className="row g-4"
                                onSubmit={(e) => onSubmit(e)}
                            >
                                <div className="col-md-2">
                                    <label
                                        htmlFor="appealNum"
                                        className="form-label"
                                    >
                                        <b>Appeal No.</b>
                                    </label>
                                </div>

                                <div className="col-md-4">
                                    <h6>{checklist.appeal_num}</h6>
                                </div>

                                <div className="col-md-2">
                                    <label
                                        htmlFor="complaintNum"
                                        className="form-label"
                                    >
                                        <b>Complaint No.</b>
                                    </label>
                                </div>

                                <div className="col-md-4">
                                    <h6>{checklist.complaint_num}</h6>
                                </div>

                                <div className="col-md-2">
                                    <label className="form-label">
                                        <b>Parties:</b>
                                    </label>
                                </div>

                                <div className="col-md-10">
                                    <h6>{checklist.appellant}</h6>
                                </div>

                                <div className="col-md-2">
                                    <label className="form-label">
                                        <b>Vs</b>
                                    </label>
                                </div>

                                <div className="col-md-10">
                                    <h6>{checklist.respondent}</h6>
                                </div>

                                <div className="col-12">
                                    <button className="btn btn-primary btn-icon-split">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-flag"></i>
                                        </span>
                                        <span className="text">
                                            Edit Form A
                                        </span>
                                    </button>
                                    <div className="my-2"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Checklist - FORM A</h1>
            <p className="mb-4">Checklist for Scrutiny Appeal</p>
            <div className="card shadow mb-4">
                <div className="card-header py-3"></div>
                <div className="card-body">
                    <div className="row g-3">
                        <div className="col-12">
                            <h4>
                                <label htmlFor="FORM A">
                                    <b>FORM A</b>
                                </label>
                            </h4>
                        </div>

                        <div className="col-12">
                            <h4>
                                <label htmlFor="CHECKLIST FOR SECURITY APPEAL">
                                    <b>CHECKLIST FOR SCRUTINY APPEAL</b>
                                </label>
                            </h4>
                        </div>

                        <form className="row g-4" onSubmit={(e) => onSubmit(e)}>
                            <div className="col-md-2">
                                <label
                                    htmlFor="appealNum"
                                    className="form-label"
                                >
                                    <b>Appeal No.</b>
                                </label>
                            </div>

                            <div className="col-md-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="appealNum"
                                    name="appealNum"
                                    value={appealNum}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className="col-md-2">
                                <label
                                    htmlFor="complaintNum"
                                    className="form-label"
                                >
                                    <b>Complaint No.</b>
                                </label>
                            </div>

                            <div className="col-md-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="complaintNum"
                                    name="complaintNum"
                                    value={complaintNum}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className="col-md-2">
                                <label className="form-label">
                                    <b>Parties:</b>
                                </label>
                            </div>

                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Appellants"
                                    name="appellant"
                                    value={appellant}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className="col-md-2">
                                <label className="form-label">
                                    <b>Vs</b>
                                </label>
                            </div>

                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Respondent"
                                    name="respondent"
                                    value={respondent}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className="col-md-6">
                                <label
                                    htmlFor="legalProvisions"
                                    className="form-label"
                                >
                                    1. Legal Provisions:U/sec.
                                </label>
                            </div>

                            <div className="col-md-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="legalProvisions"
                                    name="sectionNum"
                                    value={sectionNum}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="legalProvisions">
                                    of RERA ACT
                                </label>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    2. Whether the appeal is competent
                                </label>
                            </div>

                            <div className="col-md-3">
                                <input
                                    className="yes1"
                                    type="radio"
                                    name="competentAppeal"
                                    id="yes1"
                                />
                                <label className="yes1" htmlFor="yes1">
                                    {' '}
                                    Yes{' '}
                                </label>
                            </div>
                            <div className="col-md-3">
                                <input
                                    className="no1"
                                    type="radio"
                                    name="competentAppeal"
                                    id="no1"
                                />
                                <label className="no1" htmlFor="no1">
                                    {' '}
                                    No{' '}
                                </label>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    3. Whether the name of the parties and their
                                    addresses are properly mentioned in the
                                    Appeal Memo
                                </label>
                            </div>

                            <div className="col-md-3">
                                <input
                                    className="yes2"
                                    type="radio"
                                    name="partiesAppealMemo"
                                    id="yes2"
                                />
                                <label className="yes2" htmlFor="yes2">
                                    {' '}
                                    Yes{' '}
                                </label>
                            </div>
                            <div className="col-md-3">
                                <input
                                    className="no2"
                                    type="radio"
                                    name="partiesAppealMemo"
                                    id="no2"
                                />
                                <label className="no2" htmlFor="no2">
                                    {' '}
                                    No{' '}
                                </label>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    4. Whether the copy of impugned
                                    order/Judgement is filed with the appeal
                                </label>
                            </div>

                            <div className="col-md-3">
                                <input
                                    className="yes3"
                                    type="radio"
                                    name="impugned"
                                    id="yes3"
                                />
                                <label className="yes3" htmlFor="yes3">
                                    {' '}
                                    Yes{' '}
                                </label>
                            </div>
                            <div className="col-md-3">
                                <input
                                    className="no3"
                                    type="radio"
                                    name="impugned"
                                    id="no3"
                                />
                                <label className="no3" htmlFor="no3">
                                    {' '}
                                    No{' '}
                                </label>
                            </div>

                            <div className="col-12">
                                <label className="form-label">
                                    5. What is the
                                </label>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="dateOfOrder"
                                    className="form-label"
                                >
                                    a. Date of order
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateOfOrder"
                                />
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="dateOfCommunication"
                                    className="form-label"
                                >
                                    b. Date of communication to the party by
                                    RERA
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateOfCommunication"
                                />
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="dateOfApplication"
                                    className="form-label"
                                >
                                    c. Date of application for the certified
                                    copy
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateOfApplication"
                                />
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="dateOfCopy"
                                    className="form-label"
                                >
                                    d. Date on which the copy was ready
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateOfCopy"
                                />
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="dateOfReceipt"
                                    className="form-label"
                                >
                                    e. Date of receipt of certified copy
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateOfReceipt"
                                />
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="dateOfOnline"
                                    className="form-label"
                                >
                                    f. Date of online filling of appeal
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateOfOnline"
                                />
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="dateOfSubmersion"
                                    className="form-label"
                                >
                                    g. Date of submission of hard copy of Appeal
                                    Memo
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateOfSubmersion"
                                />
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    h. Whether there is any delay in submission
                                    of hard copy of Appeal Memo:
                                </label>
                            </div>

                            <div className="col-md-3">
                                <input
                                    className="yes4"
                                    type="radio"
                                    name="hardCopy"
                                    id="yes4"
                                />
                                <label className="yes4" htmlFor="yes4">
                                    {' '}
                                    Yes{' '}
                                </label>
                            </div>
                            <div className="col-md-3">
                                <input
                                    className="no4"
                                    type="radio"
                                    name="hardCopy"
                                    id="no4"
                                />
                                <label className="no4" htmlFor="no4">
                                    {' '}
                                    No{' '}
                                </label>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label htmlFor="days" className="form-label">
                                    if yes,how many days
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="days"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    6. Is appeal filed within limitation(60)
                                    days (from the date of receipt of order)
                                </label>
                            </div>

                            <div className="col-md-3">
                                <input
                                    className="yes3"
                                    type="radio"
                                    name="appealFiled"
                                    id="yes3"
                                />
                                <label className="yes3" htmlFor="yes3">
                                    {' '}
                                    Yes{' '}
                                </label>
                            </div>
                            <div className="col-md-3">
                                <input
                                    className="no3"
                                    type="radio"
                                    name="appealFiled"
                                    id="no3"
                                />
                                <label className="no3" htmlFor="no3">
                                    {' '}
                                    No{' '}
                                </label>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    7. Where there is any delay in filing of
                                    appeal
                                </label>
                            </div>

                            <div className="col-md-3">
                                <input
                                    className="yes3"
                                    type="radio"
                                    name="delayFiling"
                                    id="yes3"
                                />
                                <label className="yes3" htmlFor="yes3">
                                    {' '}
                                    Yes{' '}
                                </label>
                            </div>
                            <div className="col-md-3">
                                <input
                                    className="no3"
                                    type="radio"
                                    name="delayFiling"
                                    id="no3"
                                />
                                <label className="no3" htmlFor="no3">
                                    {' '}
                                    No{' '}
                                </label>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="delayDays"
                                    className="form-label"
                                >
                                    if yes,how many days
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="days"
                                    className="form-control"
                                    id="delayDays"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    8. Whether application for condonation of
                                    delay is filed with appeal
                                </label>
                            </div>

                            <div className="col-md-3">
                                <input
                                    className="yes3"
                                    type="radio"
                                    name="condonation"
                                    id="yes3"
                                />
                                <label className="yes3" htmlFor="yes3">
                                    {' '}
                                    Yes{' '}
                                </label>
                            </div>
                            <div className="col-md-3">
                                <input
                                    className="no3"
                                    type="radio"
                                    name="condonation"
                                    id="no3"
                                />
                                <label className="no3" htmlFor="no3">
                                    {' '}
                                    No{' '}
                                </label>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="objection"
                                    className="form-label"
                                >
                                    If not, raise its objection
                                </label>
                            </div>

                            <div className="col-md-6">
                                <textarea
                                    className="form-control"
                                    id="objection"
                                    rows="3"
                                ></textarea>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    9. Whether requisite fees paid
                                </label>
                            </div>

                            <div className="col-md-3">
                                <input
                                    className="yes3"
                                    type="radio"
                                    name="requisite"
                                    id="yes3"
                                />
                                <label className="yes3" htmlFor="yes3">
                                    {' '}
                                    Yes{' '}
                                </label>
                            </div>
                            <div className="col-md-3">
                                <input
                                    className="no3"
                                    type="radio"
                                    name="requisite"
                                    id="no3"
                                />
                                <label className="no3" htmlFor="no3">
                                    {' '}
                                    No{' '}
                                </label>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="dateOfPayment"
                                    className="form-label"
                                >
                                    if yes,date of payment
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="dateOfPayment"
                                />
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="copyOfReceipt"
                                    className="form-label"
                                >
                                    copy of receipt
                                </label>
                            </div>

                            <div className="col-md-6">
                                <div className="custom-file mb-3">
                                    <input
                                        type="file"
                                        className="custom-file-input"
                                        id="customFile"
                                        // onChange={(e) => onFileChange(e)}
                                    />
                                    <label
                                        className="custom-file-label"
                                        htmlFor="customFile"
                                    >
                                        Choose File{/* {filename} */}
                                    </label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    10. Whether the required documents are
                                    filled with Index & Pagination
                                </label>
                            </div>

                            <div className="col-md-3">
                                <input
                                    className="yes3"
                                    type="radio"
                                    name="indexPagination"
                                    id="yes3"
                                />
                                <label className="yes3" htmlFor="yes3">
                                    {' '}
                                    Yes{' '}
                                </label>
                            </div>
                            <div className="col-md-3">
                                <input
                                    className="no3"
                                    type="radio"
                                    name="indexPagination"
                                    id="no3"
                                />
                                <label className="no3" htmlFor="no3">
                                    {' '}
                                    No{' '}
                                </label>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label htmlFor="legible" className="form-label">
                                    If yes, whether the documents are legible
                                </label>
                            </div>

                            <div className="col-md-6">
                                <textarea
                                    className="form-control"
                                    id="legible"
                                    rows="3"
                                ></textarea>
                            </div>

                            <div className="col-12">
                                <label htmlFor="11.">11.</label>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    i. Whether copy of Appeal Memo is annexed
                                    for giving the same to the other side
                                </label>
                            </div>

                            <div className="col-md-3">
                                <input
                                    className="yes3"
                                    type="radio"
                                    name="annexed"
                                    id="yes3"
                                />
                                <label className="yes3" htmlFor="yes3">
                                    {' '}
                                    Yes{' '}
                                </label>
                            </div>
                            <div className="col-md-3">
                                <input
                                    className="no3"
                                    type="radio"
                                    name="annexed"
                                    id="no3"
                                />
                                <label className="no3" htmlFor="no3">
                                    {' '}
                                    No{' '}
                                </label>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    ii. Or served to other side by post/courier
                                </label>
                            </div>

                            <div className="col-md-3">
                                <input
                                    className="yes3"
                                    type="radio"
                                    name="served"
                                    id="yes3"
                                />
                                <label className="yes3" htmlFor="yes3">
                                    {' '}
                                    Yes{' '}
                                </label>
                            </div>
                            <div className="col-md-3">
                                <input
                                    className="no3"
                                    type="radio"
                                    name="served"
                                    id="no3"
                                />
                                <label className="no3" htmlFor="no3">
                                    {' '}
                                    No{' '}
                                </label>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    12. Whether Vakalatnama/ Authorization is
                                    filed and properly stamped
                                </label>
                            </div>

                            <div className="col-md-3">
                                <input
                                    className="yes3"
                                    type="radio"
                                    name="stamped"
                                    id="yes3"
                                />
                                <label className="yes3" htmlFor="yes3">
                                    {' '}
                                    Yes{' '}
                                </label>
                            </div>
                            <div className="col-md-3">
                                <input
                                    className="no3"
                                    type="radio"
                                    name="stamped"
                                    id="no3"
                                />
                                <label className="no3" htmlFor="no3">
                                    {' '}
                                    No{' '}
                                </label>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    13. Whether e-mail/phone/Mobile No. is on
                                    record
                                </label>
                            </div>

                            <div className="col-md-3">
                                <input
                                    className="yes3"
                                    type="radio"
                                    name="record"
                                    id="yes3"
                                />
                                <label className="yes3" htmlFor="yes3">
                                    {' '}
                                    Yes{' '}
                                </label>
                            </div>
                            <div className="col-md-3">
                                <input
                                    className="no3"
                                    type="radio"
                                    name="record"
                                    id="no3"
                                />
                                <label className="no3" htmlFor="no3">
                                    {' '}
                                    No{' '}
                                </label>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-success btn-icon-split">
                                    <span className="icon text-white-50">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    <span className="text">Submit Form A</span>
                                </button>
                                <div className="my-2"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { checklist: state.checklist };
};

export default connect(mapStateToProps, { createChecklist, getChecklist })(
    withRouter(Checklist)
);
