import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';



class GuideTitle extends Component{

    constructor(props) {

        super(props);
        this.state = {date:new Date()};
    }

    render(){

        return (

            <div id="appLeftGuideTitle">
                <p>appLeftGuideTitle</p>
            </div>

        );
    }

}


export default GuideTitle;


