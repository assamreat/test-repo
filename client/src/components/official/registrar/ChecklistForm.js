import React from 'react';

const ChecklistForm = ({
    formData,
    onChange,
    handleCheck,
    onSubmit,
    formError,
    setFormData,
}) => {
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

                            <p style={{ color: '#d88' }}>
                                (* Check the checkboxes for Yes and leave it
                                unchecked for No)
                            </p>
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
                                <p className="invalid-feedback d-block">
                                    {formError.appealNum}
                                </p>
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
                                <p className="invalid-feedback d-block">
                                    {formError.complaintNum}
                                </p>
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
                                <p className="invalid-feedback d-block">
                                    {formError.appellant}
                                </p>
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
                                <p className="invalid-feedback d-block">
                                    {formError.respondent}
                                </p>
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
                                <p className="invalid-feedback d-block">
                                    {formError.sectionNum}
                                </p>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="legalProvisions">
                                    of RERA ACT
                                </label>
                            </div>

                            <div className="col-md-6">
                                <label
                                    className="form-label"
                                    htmlFor="isAppealCompetent"
                                >
                                    2. Whether the appeal is competent
                                </label>
                            </div>

                            <div className="col-md-6 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="isAppealCompetent"
                                    name="isAppealCompetent"
                                    value={isAppealCompetent}
                                    checked={isAppealCompetent}
                                    onChange={(e) => handleCheck(e)}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    3. Whether the name of the parties and their
                                    addresses are properly mentioned in the
                                    Appeal Memo
                                </label>
                            </div>

                            <div className="col-md-6 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="isNameAddressCorrect"
                                    name="isNameAddressCorrect"
                                    value={isNameAddressCorrect}
                                    checked={isNameAddressCorrect}
                                    onChange={(e) => handleCheck(e)}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    4. Whether the copy of impugned
                                    order/Judgement is filed with the appeal
                                </label>
                            </div>

                            <div className="col-md-6 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="isOrdercopyAttached"
                                    name="isOrdercopyAttached"
                                    value={isOrdercopyAttached}
                                    checked={isOrdercopyAttached}
                                    onChange={(e) => handleCheck(e)}
                                />
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
                                    name="dateOfOrder"
                                    value={dateOfOrder}
                                    onChange={(e) => onChange(e)}
                                />
                                <p className="invalid-feedback d-block">
                                    {formError.dateOfOrder}
                                </p>
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
                                    name="dateOfCommunication"
                                    value={dateOfCommunication}
                                    onChange={(e) => onChange(e)}
                                />
                                <p className="invalid-feedback d-block">
                                    {formError.dateOfCommunication}
                                </p>
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
                                    name="dateOfApplication"
                                    value={dateOfApplication}
                                    onChange={(e) => onChange(e)}
                                />
                                <p className="invalid-feedback d-block">
                                    {formError.dateOfApplication}
                                </p>
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
                                    name="dateOnCopyReady"
                                    value={dateOnCopyReady}
                                    onChange={(e) => onChange(e)}
                                />
                                <p className="invalid-feedback d-block">
                                    {formError.dateOnCopyReady}
                                </p>
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
                                    name="dateOfReceipt"
                                    value={dateOfReceipt}
                                    onChange={(e) => onChange(e)}
                                />
                                <p className="invalid-feedback d-block">
                                    {formError.dateOfReceipt}
                                </p>
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
                                    name="dateOfFiling"
                                    value={dateOfFiling}
                                    onChange={(e) => onChange(e)}
                                />
                                <p className="invalid-feedback d-block">
                                    {formError.dateOfFiling}
                                </p>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="dateOfSubmissionHardcopy"
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
                                    id="dateOfSubmissionHardcopy"
                                    name="dateOfSubmissionHardcopy"
                                    value={dateOfSubmissionHardcopy}
                                    onChange={(e) => onChange(e)}
                                />
                                <p className="invalid-feedback d-block">
                                    {formError.dateOfSubmissionHardcopy}
                                </p>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    h. Whether there is any delay in submission
                                    of hard copy of Appeal Memo:
                                </label>
                            </div>

                            <div className="col-md-6 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="isDelayOnSubmission"
                                    name="isDelayOnSubmission"
                                    value={isDelayOnSubmission}
                                    checked={isDelayOnSubmission}
                                    onChange={(e) => {
                                        handleCheck(e);
                                        if (isDelayOnSubmission) {
                                            setFormData({
                                                ...formData,
                                                isDelayOnSubmission:
                                                    e.target.checked,
                                                amountOfDelayOnSubmission: '',
                                            });
                                        }
                                    }}
                                />
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
                                    disabled={!isDelayOnSubmission}
                                    name="amountOfDelayOnSubmission"
                                    value={amountOfDelayOnSubmission}
                                    onChange={(e) => onChange(e)}
                                />
                                <p className="invalid-feedback d-block">
                                    {formError.amountOfDelayOnSubmission}
                                </p>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    6. Is appeal filed within limitation(60)
                                    days (from the date of receipt of order)
                                </label>
                            </div>

                            <div className="col-md-6 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="isAppealFiledWithinLimitation"
                                    name="isAppealFiledWithinLimitation"
                                    value={isAppealFiledWithinLimitation}
                                    checked={isAppealFiledWithinLimitation}
                                    onChange={(e) => handleCheck(e)}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    7. Where there is any delay in filing of
                                    appeal
                                </label>
                            </div>

                            <div className="col-md-6 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="isDelayInFiling"
                                    name="isDelayInFiling"
                                    value={isDelayInFiling}
                                    checked={isDelayInFiling}
                                    onChange={(e) => {
                                        handleCheck(e);
                                        if (isDelayInFiling) {
                                            setFormData({
                                                ...formData,
                                                isDelayInFiling:
                                                    e.target.checked,
                                                amountOfDelayInFiling: '',
                                            });
                                        }
                                    }}
                                />
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
                                    type="text"
                                    className="form-control"
                                    id="delayDays"
                                    disabled={!isDelayInFiling}
                                    name="amountOfDelayInFiling"
                                    value={amountOfDelayInFiling}
                                    onChange={(e) => onChange(e)}
                                />
                                <p className="invalid-feedback d-block">
                                    {formError.amountOfDelayInFiling}
                                </p>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    8. Whether application for condonation of
                                    delay is filed with appeal
                                </label>
                            </div>

                            <div className="col-md-6 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="isCondonationOfDelayFiled"
                                    name="isCondonationOfDelayFiled"
                                    value={isCondonationOfDelayFiled}
                                    checked={isCondonationOfDelayFiled}
                                    onChange={(e) => {
                                        handleCheck(e);
                                        if (!isCondonationOfDelayFiled) {
                                            setFormData({
                                                ...formData,
                                                isCondonationOfDelayFiled:
                                                    e.target.checked,
                                                objectionForCondonation: '',
                                            });
                                        }
                                    }}
                                />
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
                                    disabled={isCondonationOfDelayFiled}
                                    name="objectionForCondonation"
                                    value={objectionForCondonation}
                                    onChange={(e) => onChange(e)}
                                ></textarea>
                                <p className="invalid-feedback d-block">
                                    {formError.objectionForCondonation}
                                </p>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    9. Whether requisite fees paid
                                </label>
                            </div>

                            <div className="col-md-6 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="isFeesPaid"
                                    name="isFeesPaid"
                                    value={isFeesPaid}
                                    checked={isFeesPaid}
                                    onChange={(e) => {
                                        handleCheck(e);
                                        if (isFeesPaid) {
                                            setFormData({
                                                ...formData,
                                                isFeesPaid: e.target.checked,
                                                dateOfPayment: new Date(0),
                                            });
                                        }
                                    }}
                                />
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
                                    type="date"
                                    className="form-control"
                                    id="dateOfPayment"
                                    disabled={!isFeesPaid}
                                    name="dateOfPayment"
                                    value={dateOfPayment}
                                    onChange={(e) => onChange(e)}
                                />
                                <p className="invalid-feedback d-block">
                                    {formError.dateOfPayment}
                                </p>
                            </div>

                            {/* <div className="col-md-1"></div> */}

                            {/* <div className="col-md-5">
                                <label
                                    htmlFor="copyOfReceipt"
                                    className="form-label"
                                >
                                    copy of receipt
                                </label>
                            </div> */}

                            {/* <div className="col-md-6">
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
                                        Choose File{filename}
                                    </label>
                                </div>
                            </div> */}

                            <div className="col-md-6">
                                <label className="form-label">
                                    10. Whether the required documents are
                                    filled with Index & Pagination
                                </label>
                            </div>

                            <div className="col-md-6 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="isPaginationCorrect"
                                    name="isPaginationCorrect"
                                    value={isPaginationCorrect}
                                    checked={isPaginationCorrect}
                                    onChange={(e) => {
                                        handleCheck(e);
                                        if (isPaginationCorrect) {
                                            setFormData({
                                                ...formData,
                                                isPaginationCorrect:
                                                    e.target.checked,
                                                legibleDocs: '',
                                            });
                                        }
                                    }}
                                />
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
                                    disabled={!isPaginationCorrect}
                                    name="legibleDocs"
                                    value={legibleDocs}
                                    onChange={(e) => onChange(e)}
                                ></textarea>
                                <p className="invalid-feedback d-block">
                                    {formError.legibleDocs}
                                </p>
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

                            <div className="col-md-6 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="isAppealMemoAnnexed"
                                    name="isAppealMemoAnnexed"
                                    value={isAppealMemoAnnexed}
                                    checked={isAppealMemoAnnexed}
                                    onChange={(e) => handleCheck(e)}
                                />
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    ii. Or served to other side by post/courier
                                </label>
                            </div>

                            <div className="col-md-6 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="isServedByPost"
                                    name="isServedByPost"
                                    value={isServedByPost}
                                    checked={isServedByPost}
                                    onChange={(e) => handleCheck(e)}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    12. Whether Vakalatnama/ Authorization is
                                    filed and properly stamped
                                </label>
                            </div>

                            <div className="col-md-6 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="isAuthStamped"
                                    name="isAuthStamped"
                                    value={isAuthStamped}
                                    checked={isAuthStamped}
                                    onChange={(e) => handleCheck(e)}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    13. Whether e-mail/phone/Mobile No. is on
                                    record
                                </label>
                            </div>

                            <div className="col-md-6 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="isEmailPhoneOnRecord"
                                    name="isEmailPhoneOnRecord"
                                    value={isEmailPhoneOnRecord}
                                    checked={isEmailPhoneOnRecord}
                                    onChange={(e) => handleCheck(e)}
                                />
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

export default ChecklistForm;
