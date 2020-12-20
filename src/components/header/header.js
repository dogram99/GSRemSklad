import React, {Component} from 'react';
import './header.css';
import SwapiService from "../../services/swapi-service";

import logoImage from "./img/logo-img-light.svg";

export default class Header extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false
    }

    render() {

        return (
            <header className="page-header">
                <div className="page-header__wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <a href="/">
                                    <img className="logo" src={logoImage} alt="Great Steve"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    };
};