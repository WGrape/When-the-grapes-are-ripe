import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

require("./style.scss");

class GuideItem extends Component{

    constructor(props) {

        super(props);
        this.state = {date:new Date()};
    }

    generateContent() {

        let icon;
        if (this.props.role === "history") {
           
            icon = <div><i className="fas fa-history icon"></i><span className="text">历史记录</span></div>
        } else if (this.props.role === "news") {

            icon = <div><i className="fas fa-newspaper icon"></i><span className="text">新闻资讯</span></div>
        } else if (this.props.role === "explore") {

            icon = <div><i className="fas fa-book-open icon"></i><span className="text">文章探索</span></div>
        } else{

        }

        return icon;
    }

    render(){

        return (

            <div className="guideItem">
                {this.generateContent()}
            </div>

        );
    }

}


export default GuideItem;


