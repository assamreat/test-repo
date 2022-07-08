import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Message from '../../common/Message';
import ProgressBar from '../../common/ProgressBar';
import { upload, getFiles } from '../../../actions/files';

const UploadDoc = ({ match, upload, getFiles, files }) => {
    useEffect(() => {
        const { id } = match.params;
        getFiles(id);
    }, [getFiles]);

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [errorFlag, setErrorFlag] = useState(false);

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const { id } = match.params;
        upload(id, file, setMessage, setUploadPercentage, setErrorFlag);
        // const config = {
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //     },
        //     onUploadProgress: (progressEvent) => {
        //         setUploadPercentage(
        //             parseInt(
        //                 Math.round(
        //                     (progressEvent.loaded * 100) / progressEvent.total
        //                 )
        //             )
        //         );

        //         // Clear percentage
        //         // setTimeout(() => setUploadPercentage(0), 10000);
        //     },
        // };

        // const formData = new FormData();
        // formData.append('file', file);

        // try {
        //     await axios.post(`/api/upload/${id}`, formData, config);

        //     setMessage('File Uploaded');
        // } catch (err) {
        //     if (err.response.status === 500) {
        //         setMessage('there was a problem with the server');
        //     } else {
        //         setMessage(err.response.data.msg);
        //     }
        // }
    };

    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Upload Documents</h1>
            <p className="mb-4">
                Upload the appeal related documents in a single pdf
            </p>

            <div className="row">
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Upload documents
                            </h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {message ? (
                                    <Message
                                        msg={message}
                                        errorFlag={errorFlag}
                                    />
                                ) : null}
                                <div className="col-lg-12">
                                    <form onSubmit={(e) => onSubmit(e)}>
                                        <div className="custom-file mb-3">
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                id="customFile"
                                                onChange={(e) =>
                                                    onFileChange(e)
                                                }
                                            />
                                            <label
                                                className="custom-file-label"
                                                htmlFor="customFile"
                                            >
                                                {filename}
                                            </label>
                                        </div>
                                        {uploadPercentage === 0 ? null : (
                                            <ProgressBar
                                                percentage={uploadPercentage}
                                                errorFlag={errorFlag}
                                            />
                                        )}
                                        <div className="d-grid gap-2">
                                            <input
                                                type="submit"
                                                value="Upload"
                                                className="btn btn-primary mt-4"
                                            />
                                        </div>
                                    </form>
                                    <div className="my-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Files Status
                            </h6>
                        </div>
                        <div className="card-body">
                            <p>
                                {files && files.docURL
                                    ? 'Documents are uploaded for this appeal.'
                                    : 'No documents uploaded for this appeal. please upload documents'}
                            </p>

                            <div className="my-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        files: state.files,
    };
};

export default connect(mapStateToProps, { upload, getFiles })(UploadDoc);
