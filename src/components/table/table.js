import React, {Component} from 'react';
import './table.css';
import SwapiService from "../../services/swapi-service";

export default class Table extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false
    }

    render() {
        return (
            // style={{backgroundImage: `url(${HeroBg})`}}
            <table className="table table-dark" id="main-table">
                <thead>
                <tr>
                    <th>Артикль</th>
                    <th>Наименование</th>
                    <th>Количество</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>MGJ83RU/A</td>
                    <td>APPLE iPhone 12 64Gb</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>MRT42RU/A</td>
                    <td>APPLE iMac</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>MV7N2RU/A</td>
                    <td>APPLE AirPods</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>MQD32RU/A</td>
                    <td>APPLE MacBook Air 13</td>
                    <td>4</td>
                </tr>
                </tbody>
            </table>
        )
    };
};