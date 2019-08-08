// 使用 jsx 必须引入 React
import React, {Component} from 'react';

// APP的 布局
import AppLeft from '../../scenes/_common/containers/AppLeft/index'
import AppHead from "../../scenes/_common/containers/AppHead/index";
import Home from "../../scenes/Home/index";
import News from "../../scenes/News/index";
import { Row, Col } from 'antd';


// APP的 router
import { BrowserRouter as Router ,Route, Link } from 'react-router-dom';


// APP的 redux
import { Provider } from 'react-redux';
import Store from './combineReducers';


// 引入 APP 样式
require("./style.scss");


class App extends Component{

    constructor(props) {

        super(props);

        // 为当前的App组件的state赋初始值
        // 注各个组件的state是互不干扰的, 是完全隔离的, App组件的state和子组件的state完全是隔离的
        this.state={

            leftViewNarrow:'leftViewNarrow',
            rightViewStretch:'rightViewStretch'
        };

        // 跨组件间的通信采用 订阅 模式
        Store.subscribe(()=>{

            if(Store.getState().navigationItemReducer.redux.menuButtonStatus===''){

                this.setState({

                    leftViewNarrow:'leftViewNarrow',
                    rightViewStretch:'rightViewStretch'
                });
            }else{

               this.setState({

                    leftViewNarrow:'',
                    rightViewStretch:''
                });
            }
        });
       
    }

    render(){

        // 因为写了 <Provider store={Store}> , 此时 Store 已经注入到整个 APP 中了
        // 如果想要在APP的子组件中使用到 Store
        return (

            <Provider store={Store}>
                <Router >
                  <div id="App">
                        <AppHead />
                        <div id="AppMain" >
                            <Row>
                                <Col span={4} className={this.state.leftViewNarrow} ><AppLeft /></Col>
                                <Col span={20} className={this.state.rightViewStretch} >
                                    <div>
                                        <Route path="/" exact component={Home} />
                                        <Route path="/home" component={Home} />
                                        <Route path="/news" component={News} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;