import React from 'react';
import './table-item.css';

const TableItem = ({label, article, quantity}) => {


    return (
        <React.Fragment>
            <td>{article}</td>
            <td>{label}</td>
            <td>{quantity}</td>
        </React.Fragment>
    );
};

export default TableItem;