import React from 'react';
import './footer.css';
import Clock from "../clock";
import ErrorBoundary from "../error-boundary";
import ErrorButton from "../error-button";

const Footer = () => {
    return (
        <ErrorBoundary>
            <footer className="page-footer">
                <div className="page-footer__wrapper">
                    <div className="container">
                        <div className="page-footer__bottom">
                            <div className="row">
                                <div className="col-4 col-md-6">
                                    <div className="d-flex align-items-center h-100">
                                        {<Clock/>}
                                    </div>
                                </div>
                                <div className="col-8 col-md-6">
                                    <div className="copyright">
                                        <div className="d-flex align-items-center justify-content-end">
                                            <ErrorButton/>
                                            <span className="mr-4"><a href="mailto:rewq_gol_47@mail.ru">Техническая поддержка</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </ErrorBoundary>
    )
};

export default Footer;