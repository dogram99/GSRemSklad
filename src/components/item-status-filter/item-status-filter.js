import React from 'react';
import PropTypes from 'prop-types';

const filterButtons = [
    {name: 'all', label: 'Все'},
    {name: 'battery', label: 'Аккумулятор'},
    {name: 'original_display', label: 'Ориг Дисплей'},
    {name: 'copy_display', label: 'Копия Дисплей'}
];

const ItemStatusFilter = ({filter, light, onFilterChange = () => {}}) => {

    const buttons = filterButtons.map(({name, label}) => {
        // const isActive = name === filter;
        const classNames = 'btn ' + (light ? 'btn-dark' : 'btn-primary');

        return (
            <button key={name}
                    type="button"
                    onClick={() => onFilterChange(name)}
                    className={classNames}>{label}</button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};


ItemStatusFilter.propTypes = {
    filter: PropTypes.string,
    light: PropTypes.bool,
    onFilterChange: PropTypes.func

};

export default ItemStatusFilter;