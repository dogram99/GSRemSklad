import React, {Component} from 'react';
import './logo.css';

import logoImage from "./logo.svg";

const Logo = () => {
    return (
        <a href="/">
            <img className="logo" src={logoImage} alt="Great Steve"/>
        </a>
    );
};

export default Logo;