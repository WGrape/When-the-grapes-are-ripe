import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

// router
import { Link } from 'react-router-dom';

// redux
import PropTypes from 'prop-types';

// 输入框
import { Input } from 'antd';

// connect
import connect from './redux/connect'


// fontawesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
library.add(faBars);


// 需要放到 import 的后面
require("./style.scss");

class NavigationItem extends Component {

    // 不要使用类属性的方法去定义 store 和 state
    // store:{},
    // state:{},

    constructor(props) {

        super(props);
    }

    componentDidMount() {

        // 我试图在 componentDidMount 给类属性赋值，然后让其他方法都能使用到这2个类属性
        // 但是是错误的,为什么,因为试图可能会一直改变,导致这个2个属性也一会有一会没有,
        // 所以正确的方法是：哪里需要用到 state 了，就定义局部变量 let state = this.context.store.getState();
        // 这几句都是都是瞎扯的,都是错误的!!!!!

        // 获取到敖 Store 的一个最重要的作用就是使用 Store 的 subscribe ( 订阅模式 ) 
        // Store 的 subscribe 订阅模式主要用于跨组件间的通信!!!!
        // 在子组件中可以使用this.context.store;获取到整个的APP的Store对象,前提是必须把下面的这段静态赋值写到类中
        // static contextTypes = {
    
        //    store: PropTypes.object,
        // };
        // this.store = this.context.store; // 之后就能获取到Store了
    }

    generateContent() {

        let icon;
        if (this.props.role === "menu") {
           
            const { menuButtonStatus, onClickMenuButton } = this.props;
            icon = <button onClick={onClickMenuButton} className={menuButtonStatus + " btn-menu"} ><FontAwesomeIcon className="icon" icon="bars" size="lg"/></button>;
        
        } else if (this.props.role === "logo") {

            icon = <Link to="/"><div className="logo"><span className="text">CSPAPER</span></div></Link>;
        } else if (this.props.role === "search") {

            icon = <Input.Search  placeholder="input search text" enterButton size="large" onSearch={value => console.log(value)} />;
        } else{


        }

        return icon;
    }

    render() {
        
        return (

            <div className="navigationItem">
              {this.generateContent()}
            </div>

        );
    }

}

// 注意这里 connect !!!!
// connect 的作用主要是这2个
export default connect(NavigationItem);


