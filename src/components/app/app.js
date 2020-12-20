import React, {Component} from 'react';
import './app.css';
import SwapiService from '../../services/swapi-service';

import Header from "../header";
import Table from '../table';
import ItemStatusFilter from "../item-status-filter";
import Footer from "../footer";


export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false
    }

    render() {

        return (
            <div>
                <Header/>
                <main>
                    <section className="main-table">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 mt-3 mb-4">
                                    <ItemStatusFilter/>
                                </div>
                                <div className="col-12">
                                    <Table/>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer/>
            </div>
        )
    };
};