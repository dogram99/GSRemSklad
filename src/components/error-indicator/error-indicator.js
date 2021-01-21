import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span>Что-то пошло не так...</span>
            <span>(Попробуйте перезагрузить страницу)</span>
        </div>
    );
};

export default ErrorIndicator;