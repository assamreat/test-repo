import React from 'react';

const CreateAppealConfirm = ({ prevStep, values, onSubmit }) => {
    return (
        <div className="container mb-5 mt-5 d-flex flex-column align-items-center">
            <div>
                <div className="particulars-appellant mb-5">
                    <p className="fw-bold">1. Particulars of the Appellants:</p>
                    <p>
                        <span className="fw-bold">
                            (i) Name of the appellant:
                        </span>
                        <span>{` ${values.first_name} ${values.last_name} `}</span>
                    </p>
                    <p>
                        <span className="fw-bold">
                            (ii) Address of the Existing Office/ Residence of
                            the Appellant:
                        </span>
                        <span>
                            {` ${values.ar_line1}, ${values.ar_line2}, 
                                                     ${values.ar_landmark}, ${values.ar_city},
                                                     ${values.ar_district}, ${values.ar_state},
                                                      ${values.ar_country}, ${values.ar_pin}`}
                        </span>
                    </p>
                    <p>
                        <span className="fw-bold">
                            (iii) Address for Service of all Notices:
                        </span>
                        <span>
                            {` ${values.as_line1}, ${values.as_line2}, 
                                                     ${values.as_landmark}, ${values.as_city},
                                                     ${values.as_district}, ${values.as_state},
                                                      ${values.as_country}, ${values.as_pin}`}
                        </span>
                    </p>
                    <p>
                        <span className="fw-bold">(iv) Contact Details:</span>
                        <span className="fw-bold">&nbsp;Phone Number:</span>
                        <span>{` ${values.appellant_mobile_no} `}</span>;
                        <span className="fw-bold">&nbsp;Email Address:</span>
                        <span>{` ${values.appellant_email_id} `}</span>
                    </p>
                </div>

                <div className="particulars-respondent mb-5">
                    <p className="fw-bold">
                        2. Particulars of the Respondents:
                    </p>
                    <p>
                        <span className="fw-bold">
                            (i) Name(s) of Respondent:
                        </span>
                        <span>{` ${values.res_first_name} ${values.res_last_name} `}</span>
                    </p>
                    <p>
                        <span className="fw-bold">
                            (ii) Office Address of the Respondent:
                        </span>
                        <span>
                            {` ${values.res_ao_line1}, ${values.res_ao_line2}, 
                                                     ${values.res_ao_landmark}, ${values.res_ao_city},
                                                     ${values.res_ao_district}, ${values.res_ao_state},
                                                      ${values.res_ao_country}, ${values.res_ao_pin}`}
                        </span>
                    </p>
                    <p>
                        <span className="fw-bold">
                            (iii) Address for Service of all Notices:
                        </span>
                        <span>
                            {` ${values.res_as_line1}, ${values.res_as_line2}, 
                                                     ${values.res_as_landmark}, ${values.res_as_city},
                                                     ${values.res_as_district}, ${values.res_as_state},
                                                      ${values.res_as_country}, ${values.res_as_pin}`}
                        </span>
                    </p>
                    <p>
                        <span className="fw-bold">(iv) Contact Details:</span>
                        <span className="fw-bold">&nbsp;Phone Number:</span>
                        <span>{` ${values.res_mobile_no} `}</span>;
                        <span className="fw-bold">&nbsp;Email Address:</span>
                        <span>{` ${values.res_email_id} `}</span>
                    </p>
                </div>

                <div className="jurisdiction mb-5">
                    <p className="fw-bold">
                        3. Jurisdiction of the Appellant Tribunal:
                    </p>
                    <p>
                        <span className="fw-bold">
                            (a) The appellant declares that the subject matter
                            of the appeal falls within the jurisdiction of the
                            Appellate Tribunal:
                        </span>

                        <span>
                            {values.is_within_jurisdiction ? ' Yes ' : ' No'}
                        </span>
                    </p>
                    <p>
                        <span className="fw-bold">
                            Project Registration Number:&nbsp;
                        </span>
                        <span>{values.reg_num}</span>
                    </p>
                </div>

                <div className="limitation mb-5">
                    <p className="fw-bold">4. Limition:</p>
                    <p>
                        <span className="fw-bold">
                            The appellant declares that the appeal is within the
                            limitation specified in sub-section (2) of section
                            44:
                        </span>

                        <span>
                            {values.is_limitation_specified ? ' Yes ' : ' No'}
                        </span>
                    </p>
                    <p className="text-center">OR</p>
                    <div>
                        <span className="fw-bold">
                            If the appeal is filed after the expiry of the
                            limitation period specified under sub-section (2) of
                            section 44 specify reasons for delay:
                        </span>
                        <p>
                            {values.reason_for_delay
                                ? values.reason_for_delay
                                : ''}
                        </p>
                    </div>
                </div>

                <div className="facts-of-case mb-5">
                    <p className="fw-bold">5. Facts of the case :</p>
                    <p className="fw-bold">
                        Give concise statement of facts and grounds of appeal
                        against the specific order of the Authority of the
                        Adjudicating Officer, as the case may be passed under:
                    </p>
                    <div>
                        <p
                            style={{
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            {` ${values.facts_of_case} `}
                        </p>
                    </div>
                </div>

                <div className="grounds-of-appeal mb-5">
                    <p className="fw-bold">6. Grounds of Appeal :</p>

                    <div>
                        <p
                            style={{
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            {` ${values.ground_of_appeal} `}
                        </p>
                    </div>
                </div>

                <div className="reliefs-sought mb-5">
                    <p className="fw-bold">7. Relief(s) sought:</p>

                    <p className="fw-bold">
                        In view of the facts mentioned in paragraph 5 above, the
                        appellant prays for the following relief(s) [Specify
                        below the relief(s) sought explaining the grounds of
                        relief(s) and the legal provisions(if any) relied upon]:
                    </p>

                    <div>
                        <p
                            style={{
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            {` ${values.reliefs_sought} `}
                        </p>
                    </div>
                </div>

                <div className="interim-order mb-5">
                    <p className="fw-bold">8. Interim order, if prayed for:</p>

                    <p className="fw-bold">
                        Pending final decision on the appeal, the appellant
                        seeks issue of the following interim order: [Give here
                        the nature of the interim order prayed for with
                        reasons]:
                    </p>

                    <div>
                        <p
                            style={{
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            {` ${values.interim_order} `}
                        </p>
                    </div>
                </div>

                <div className="pending-matter mb-5">
                    <p className="fw-bold">
                        9. Matter not pending with any other court, etc:
                    </p>

                    <p>
                        <span className="fw-bold">
                            The appellant further declares that the matter
                            regarding which this appeal has been made, is not
                            pending before any court of law or any other
                            authority or any other Tribunal(s):
                        </span>
                        <span>
                            {values.is_matter_pending ? ' Yes ' : ' No'}
                        </span>
                    </p>
                </div>
            </div>
            <div>
                <button
                    className="btn btn-outline-success mr-3"
                    onClick={onSubmit}
                >
                    confirm and submit
                </button>
                <button
                    onClick={prevStep}
                    className="btn btn-outline-secondary"
                >
                    previous
                </button>
            </div>
        </div>
    );
};

export default CreateAppealConfirm;
