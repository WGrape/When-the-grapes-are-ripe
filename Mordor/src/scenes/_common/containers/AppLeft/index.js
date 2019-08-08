import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import GuideItem from './components/GuideItem/index'
import { BrowserRouter as Router ,Route, Link } from 'react-router-dom';


import { Row, Col } from 'antd';


require('./style.scss');


class AppLeft extends Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (

            <div id="AppLeft">
                <Link to="/history"><GuideItem role="history" /></Link>
                <Link to="/news"><GuideItem role="news" /></Link>
                <Link to="/explore"><GuideItem role="explore" /></Link>
                <div className="hr"></div>
                <GuideItem role="history" />
                <GuideItem role="history" />
                <GuideItem role="history" />
            </div>

        );
    }

}


export default AppLeft;


