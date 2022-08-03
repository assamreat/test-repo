import React from 'react';
import { Link } from 'react-router-dom';

const AppealItem = ({ appeal: { id, fullname, res_fullname } }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{`${fullname}`}</td>
            <td>{`${res_fullname}`}</td>
            <td>
                <Link
                    to={`/official/receptionist/appeals/${id}`}
                    className="btn btn-sm btn-primary"
                    style={{ fontSize: '.7rem', padding: '0 .2rem' }}
                >
                    <i className="fa-solid fa-hurricane"></i> view
                </Link>
            </td>
            <td>
                <Link
                    to={`/official/receptionist/appeals/${id}/upload`}
                    className="btn btn-sm btn-info"
                    style={{ fontSize: '.7rem', padding: '0 .2rem' }}
                >
                    <i className="fa-solid fa-upload"></i> upload
                </Link>
            </td>
            <td>
                <Link
                    to={`/official/receptionist/appeals/${id}/forward`}
                    className="btn btn-sm btn-success"
                    style={{ fontSize: '.7rem', padding: '0 .2rem' }}
                >
                    <i className="fa-solid fa-angles-right"></i> Forward
                </Link>
            </td>
        </tr>
    );
};

export default AppealItem;
