import React, {Component} from 'react';
import './header.css';

import Logo from "../logo";
import LightTumbler from "../light-tumbler/light-tumbler";

export default class Header extends Component {

    state = {
        hasError: false
    }

    render() {
        const {updateLightStatus} = this.props;

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
                                    <LightTumbler updateLightStatus={updateLightStatus}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    };
};