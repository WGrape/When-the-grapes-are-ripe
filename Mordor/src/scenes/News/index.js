import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

import {alertMsg} from './redux/actions';

import { Row, Col } from 'antd';

class News extends Component{

    constructor(props) {

        super(props);
    }

    render(){

        return (

            <div id="Route-to-News">
                <p>News</p>
            </div>

        );
    }

}


export default News;
