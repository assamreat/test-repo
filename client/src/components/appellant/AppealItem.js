import React from 'react';
import { Link } from 'react-router-dom';

const AppealItem = ({ appeal: { id, fullname, res_fullname } }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{`${fullname} `}</td>
            <td>{`${res_fullname} `}</td>
            <td>
                <Link
                    to={`/appellant/appeals/${id}`}
                    className="btn btn-sm btn-primary"
                    style={{ fontSize: '.7rem', padding: '0 .2rem' }}
                >
                    view
                </Link>
            </td>
        </tr>
    );
};

export default AppealItem;
