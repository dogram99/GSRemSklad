import React, {Component} from 'react';

export default class Clock extends Component {

    state = {time: new Date().toLocaleString()};

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString(),
        });
    }

    render() {
        return (<p className="App-clock ml-3">{this.state.time} </p>);
    }
}