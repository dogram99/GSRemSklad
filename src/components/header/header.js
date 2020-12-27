import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
                            <div className="col-8">
                                <Logo/>
                            </div>
                            <div className="col-4">
                                <div className="d-flex justify-content-end align-content-center h-100 ">
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

Header.propTypes = {
    updateLightStatus: PropTypes.func
};