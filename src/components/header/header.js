import React, {Component} from 'react';
import './header.css';
import SwapiService from "../../services/swapi-service";

import logoImage from "./img/logo-img-light.svg";
import Logo from "../logo";
import LightTumbler from "../light-tumbler/light-tumbler";

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
                            <div className="col-12 col-md-6">
                                <Logo/>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="d-flex justify-content-end">
                                    <LightTumbler/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    };
};