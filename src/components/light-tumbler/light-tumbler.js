import React, {Component} from "react";
import './light-tumbler.css';

export default class LightTumbler extends Component {

    state = {
        light: true
    }

    onCheckboxChange = (e) => {
        this.setState({
            light: false
        })
    };

    render() {
        return (
            <div className="pr-2">
                <input className="light-tumbler"
                       id="light-tumbler"
                       type="checkbox"
                       onChange={this.onCheckboxChange}
                />
            </div>
        );
    }
}
