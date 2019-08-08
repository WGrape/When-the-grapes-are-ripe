import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';


class Clock extends Component {

    constructor(props) {

        super(props);
        this.state = {date: new Date()};
    }


    componentDidMount() {

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }


    componentWillUnmount() {

        clearInterval(this.timerID);
    }

    render() {
        return (

            <p>现在是 {this.state.date.toLocaleTimeString()} </p>

        );
    }


    tick() {

        this.setState({

            date: new Date()
        });
    }

}

export default Clock;
