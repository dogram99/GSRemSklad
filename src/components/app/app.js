import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import Table from '../table';
import Footer from "../footer";

export default class App extends Component {

    state = {
        hasError: false,
        light: true,
        items: [
            {id: 1, label: 'Apple Power Bank 12000mAh', article: 'MGJ29RU/A', category: 'battery', quantity: 4},
            {id: 2, label: 'Apple iPhone 7 64Gb', article: 'MGJ33RU/A', category: 'copy_display', quantity: 2},
            {id: 3, label: 'Apple iMac 21.5', article: 'MRT42RU/A', category: 'original_display', quantity: 0},
            {id: 4, label: 'Apple Power Bank 5000mAh', article: 'MGJ85RU/A', category: 'battery', quantity: 9},
            {id: 5, label: 'Apple Power Bank 1000mAh', article: 'MGJ96RU/A', category: 'battery', quantity: 2},
            {id: 6, label: 'Apple iPhone 8 128Gb', article: 'MGJ45RU/A', category: 'copy_display', quantity: 0},
            {id: 7, label: 'Apple iPhone 6 32Gb', article: 'MGJ812RU/A', category: 'copy_display', quantity: 6},
            {id: 8, label: 'Apple MacBook Air 13', article: 'MQD32RU/A', category: 'original_display', quantity: 1},
            {id: 9, label: 'Apple iPhone 11 128Gb', article: 'MGJ83RU/A', category: 'original_display', quantity: 3},
            {id: 10, label: 'Apple Power Bank 800mAh', article: 'MGJ85RU/A', category: 'battery', quantity: 0},
            {id: 11, label: 'Apple iPhone 12 64Gb', article: 'MGJ83RU/A', category: 'original_display', quantity: 6},
            {id: 12, label: 'Apple iPhone 6 32Gb', article: 'MGJ812RU/A', category: 'copy_display', quantity: 7},
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
                <Header updateLightStatus={this.updateLightStatus}/>
                <main>
                    <section className="main-table">
                        <div className="container">
                            <div className="row mt-3 mb-4">
                                <div className="col-12 pb-4 pb-md-0 col-md-8">
                                    <ItemStatusFilter
                                        light={light}
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