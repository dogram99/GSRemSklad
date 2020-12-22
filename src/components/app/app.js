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
        items: [
            {id: 1, label: 'APPLE iPhone 12 64Gb', article: 'MGJ83RU/A', category: 'battery', quantity: 6},
            {id: 2, label: 'APPLE iMac 21.5', article: 'MRT42RU/A', category: 'original_display', quantity: 3},
            {id: 3, label: 'Apple AirPods Pro', article: 'MV7N2RU/A', category: 'copy_display', quantity: 4},
            {id: 4, label: 'APPLE MacBook Air 13', article: 'MQD32RU/A', category: 'battery', quantity: 2}
        ],
        filter: 'all',
        search: ''
    }

    updateLightStatus = (status) => {
        this.setState(({light}) => {
                return {
                    light: !light
                }
            }
        )
    }

    onFilterChange = (filter) => {
        this.setState({filter});
    };

    onSearchChange = (search) => {
        this.setState({search});
    };

    filterItems(items, filter) {
        if (filter === 'all') {
            return items;
        } else if (filter === 'battery') {
            return items.filter((item) => (item.category === 'battery'));
        } else if (filter === 'original_display') {
            return items.filter((item) => item.category === 'original_display');
        } else if (filter === 'copy_display') {
            return items.filter((item) => item.category === 'copy_display');
        }
    }

    searchItems(items, search) {
        if (search.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
    }

    render() {
        const {light, filter, items, search} = this.state;
        const visibleItems = this.searchItems(this.filterItems(items, filter), search);

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
                                    <ItemStatusFilter
                                        filter={filter}
                                        onFilterChange={this.onFilterChange}/>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="search-panel">
                                        <SearchPanel
                                            onSearchChange={this.onSearchChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Table items={visibleItems}/>
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