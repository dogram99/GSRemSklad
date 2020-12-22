import React from 'react';

const filterButtons = [
    {name: 'all', label: 'Все'},
    {name: 'battery', label: 'Аккумулятор'},
    {name: 'original_display', label: 'Ориг Дисплей'},
    {name: 'copy_display', label: 'Копия Дисплей'}
];

const ItemStatusFilter = ({filter, onFilterChange = () => {}}) => {

    const buttons = filterButtons.map(({name, label}) => {
        const isActive = name === filter;
        const classNames = 'btn btn-primary mr-2 ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

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

export default ItemStatusFilter;
