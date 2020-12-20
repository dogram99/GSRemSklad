import React from 'react';

const filterButtons = [
    {name: 'all', label: 'Аккумулятор'},
    {name: 'active', label: 'Ориг Дисплей'},
    {name: 'done', label: 'Копия Дисплей'}
];

const ItemStatusFilter = ({filter, onFilterChange = () => {}}) => {

    const buttons = filterButtons.map(({name, label}) => {
        const isActive = name === filter;
        const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

        return (
            <button key={name}
                    type="button"
                    onClick={() => onFilterChange(name)}
                    className={classNames} className="btn btn-primary mr-2">{label}</button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};

export default ItemStatusFilter;
