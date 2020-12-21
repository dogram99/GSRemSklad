import React, {Component} from 'react';
import './app.css';

import Header from "../header";
import Table from '../table';
import ItemStatusFilter from "../item-status-filter";
import Footer from "../footer";
import SearchPanel from "../search-panel";


export default class App extends Component {

    state = {
        hasError: false,
        light: false,
    }

    updateLightStatus = (status) => {
        this.setState(({light}) => {
                return {
                    light: !light
                }
            }
        )
    }

    render() {
        const {light} = this.state;

        let classNames = 'light-color-theme';

        if (light) {
            classNames = 'dark-color-theme';
        }

        return (
            <div className={classNames} id='inner-app'>
                {this.state.name}
                <Header updateLightStatus={this.updateLightStatus}/>
                <main>
                    <section className="main-table">
                        <div className="container">
                            <div className="row mt-3 mb-4">
                                <div className="col-12 pb-4 pb-md-0 col-md-8">
                                    <ItemStatusFilter/>
                                </div>
                                <div className="col-12 col-md-4">
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