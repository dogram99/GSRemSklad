import React, {Component} from "react";
import './light-tumbler.css';

export default class LightTumbler extends Component {

    state = {
        light: true
    }

    render() {
        const {updateLightStatus} = this.props;

        return (
            <div className="pr-2">
                <input className="light-tumbler"
                       id="light-tumbler"
                       type="checkbox"
                       onChange={() => {
                           updateLightStatus(this.state.light)
                       }}
                />
            </div>
        );
    }
}
