import React, {Component} from 'react';
import './app.css';
import SwapiService from '../../services/swapi-service';

import Header from "../header";
import Table from '../table';
import ItemStatusFilter from "../item-status-filter";
import Footer from "../footer";
import SearchPanel from "../search-panel";


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
                            <div className="row mt-3 mb-4">
                                <div className="col-12 col-md-6">
                                    <ItemStatusFilter/>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="search-panel">
                                        <SearchPanel/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
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