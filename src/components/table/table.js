import React, {Component} from 'react';
import './table.css';
import SwapiService from "../../services/swapi-service";
import TableItem from "../table-item";

export default class Table extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false
    }

    render() {
        const {items} = this.props;

        const elements = items.map((item) => {
            const {id, ...itemProps} = item;
            let trClasses = '';

            trClasses += (itemProps.quantity < 3) ? 'warning-quantity' : '';
            trClasses += (itemProps.quantity <= 0) ? ' empty-quantity' : '';

            return (
                <tr key={id} className={trClasses}>
                    <TableItem{...itemProps}/>
                </tr>
            );
        });

        return (
            <table className="table" id="main-table">
                <thead>
                <tr>
                    <th>Артикль</th>
                    <th>Наименование</th>
                    <th>Количество</th>
                </tr>
                </thead>
                <tbody>
                {elements}
                </tbody>
            </table>
        )
    };
};