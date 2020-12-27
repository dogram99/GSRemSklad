import React from 'react';
import './table-item.css';
import PropTypes from "prop-types";

const TableItem = ({label, article, quantity}) => {

    return (
        <React.Fragment>
            <td>{article}</td>
            <td>{label}</td>
            <td>{quantity}</td>
        </React.Fragment>
    );
};

TableItem.propTypes = {
    label: PropTypes.string,
    article: PropTypes.string,
    quantity: PropTypes.number
};

export default TableItem;