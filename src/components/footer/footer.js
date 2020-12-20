import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './footer.css';

export default class Footer extends Component {

    state = {
        hasError: false
    }

    render() {

        return (
            <footer className="page-footer">
                <div className="page-footer__wrapper">
                    <div className="container">
                        <div className="page-footer__bottom">
                            <div className="row">
                                <div className="col-4 col-md-6">
                                    <div className="d-flex align-items-center h-100">
                                        <span
                                            className="ml-3"> {new Date().toLocaleTimeString()}</span> {/* TODO: Допилить автообновление времени */}
                                    </div>
                                </div>
                                <div className="col-8 col-md-6">
                                    <div className="copyright">
                                        <span className="mr-4"><a href="mailto:rewq_gol_47@mail.ru">Техническая поддержка</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    };
};

function tick() {
    const element = (
        <time className="ml-4">
            {new Date().toLocaleTimeString()}
        </time>
    );

    ReactDOM.render(
        element,
        document.getElementById('#time')
    );

}