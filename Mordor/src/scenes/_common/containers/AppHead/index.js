import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import NavigationItem from "./components/NavigationItem/index";

import { Row, Col } from 'antd';

// 引入自己组件的样式
require("./style.scss");

class AppHead extends Component{

    constructor(props) {

        super(props);
    }

    render(){

        return (

            <div id="AppHead">
                <Row>

                    <Col span={4} >
                        <Col span={7} ><NavigationItem role="menu" /></Col>
                        <Col span={17} ><NavigationItem role="logo" /></Col>
                    </Col>

                    <Col span={20} >
                      <Col span={13} ><NavigationItem role="search" /></Col>
                      <Col span={11} ><NavigationItem /></Col>
                    </Col>
                </Row>
            </div>

        );
    }

}


export default AppHead;


