import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import Logo from "../logo";
import LightTumbler from "../light-tumbler/light-tumbler";
import ErrorBoundary from "../error-boundary";
import ErrorButton from "../error-button";

const Header = ({updateLightStatus}) => {
    return (
        <ErrorBoundary>
            <header className="page-header">
                <div className="page-header__wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <Logo/>
                            </div>
                            <div className="col-4">
                                <div className="d-flex justify-content-end align-content-center h-100 ">
                                    <ErrorButton/>
                                    <LightTumbler updateLightStatus={updateLightStatus}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </ErrorBoundary>
    )
};

export default Header;

Header.propTypes = {
    updateLightStatus: PropTypes.func
};