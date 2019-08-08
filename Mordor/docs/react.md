## React 使用目录

- ### React 常见问题
	
	- [1.1 关于React的生命周期](#article-1.1)
	- [1.2 React组件间如何通信？](#article-1.2)
	- [1.3 props可以改变吗？](#article-1.3)
	- [1.4 props和state的区别？](#article-1.4)

- ### React-router常见问题
    
    - [](#article-2.1)

- ### React-redux常见问题

	- [3.1 React-redux 和 redux 的区别？](#article-3.1)
	- [3.2 React-redux使用大致步骤](#article-3.2)
	- [3.3 Action怎么使用？](#article-3.3)
	- [3.4 Reducer怎么使用？](#article-3.4)
	- [3.5 Connection怎么使用？](#article-3.5)
	- [3.6 Store怎么使用？](#article-3.6)
    - [<Provider store={Store}>的作用？]

- ### 综合问题
	
	- [React,router,redux怎么整合使用？](#article-4.1)

---
<br>

## 正文

- ### React 常见问题
    - #### <span id="article-1.1">1.1 关于React的生命周期</span>
        
        ##### 1）. 组件的生命周期可分成三个状态：
        
        `Mounting`：已插入真实 DOM <br>
        `Updating`：正在被重新渲染 <br>
        `Unmounting`：已移出真实 DOM <br>
        
        ##### 2）. 生命周期的方法有：

        `componentWillMount`: 在渲染前调用,在客户端也在服务端。<br>
        
        `componentDidMount`:  在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。<br>
        
        `componentWillReceiveProps`: 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。<br>
        
        `shouldComponentUpdate`: 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
可以在你确认不需要更新组件时使用。<br>

        `componentWillUpdate`: 在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。<br>
        
        `componentDidUpdate`: 在组件完成更新后立即调用。在初始化时不会被调用。<br>
        
        `componentWillUnmount`:在组件从 DOM 中移除之前立刻被调用。

    - #### <span id="article-1.2">1.2 React组件间如何通信</span>
        在React中，推荐使用 redux 数据流处理（无论大项目还是小项目）！<br>
        
        父子组件间的通信：<br/>
        通过 props 和 store.subscribe()
        props用于父组件向子组件传递数据, store.subscribe用于子组件向父组件传递消息并报告
        
        兄弟组件间的通信：<br/>
        通过 store.getState() 共享数据，通过 store.subscribe 交流通信
    
    - #### <span id="article-1.1">1.3 props可以改变吗？</span>
        React规定 props 不能改变 , 虽然使用变量赋值，我们可以改变它，但是还是按照规范，不修改 props，否则数据的传递就会很混乱。
        
        ```
        如Ant Design提供的栅格系统中的 Col ，我们设置完它的 span 属性值之后，我们就无法再修改它了，如果我们需要动态修改它的宽度怎么办呢？使用 className 属性，在组件类中定义一个 state.xxx 属性并赋值给 className 属性，这样之后我们修改 state.xxx 即可自动动态变化了。（props不能修改，但是state可以修改的）
        
        -------------------------------------------
        更新 : props 是可以修改的，只是当时我没写对而且，
        <Col span={Store.getState().XXX.redux.value}>
        不过这样写感觉不好，还是按下面这样写吧。
        
        class App extends Component{
        
            constructor(props) {
        
                super(props);
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
        
                    <Row>
                        <Col span={"4"} className={this.state.leftViewNarrow} ></Col>
                        <Col span={"20"} className={this.state.rightViewStretch} ></Col>
                    </Row>
                );
            }
        }

        ```
    
    - #### <span id="article-1.1">1.4 props和state的区别？</span>
        props虽然可以改变，但是坚决不能改变，一定想其他办法去解决这个问题，否则数据传递会很混乱。<br>
        
        组件的 state 属性必须使用 this.setState({}) 才能修改
    
- ### React-router常见问题

- ### React-redux常见问题

	- <span id="article-3.1">3.1 React-redux 和 redux 的区别？</span>

	- <span id="article-3.2">3.2 React-redux使用大致步骤</span>

	- <span id="article-3.3">3.3 Action怎么使用？</span>

	- <span id="article-3.4">3.4 Reducer怎么使用？</span>

	- <span id="article-3.5">3.5 Connect怎么使用？</span>

	- <span id="article-3.6">3.6 Store怎么使用？]</span>

    - <span id>需要 connect 多少次？</span>
        是这样的，肯定不会每个组件都 connect 一次，都是当我们的组件数据流通时才connect。

    - <span id="article-1.1"><Provider store={Store}>的作用？</span>
        Provider 是React-redux提供的一个React组件，它只有1个作用，就是把Store提供给它的子组件（通常是整个APP，即把整个<App /> 放到 <Provider>里面）。

    - <span id="">Provider和connect()的关系</span>
        Provider组件只是负责把 redux 的 store 提供给我们，但是这不意味着我们就可以完全使用 store了（只能读store.state数据，无法写！），因此，为了写store中的state，我们把我们的组件和它连接起来，把 redux 的 dispatch 和 state 映射为 react 的 props。

- ### 综合问题
    
    - #### React,router,redux怎么整合使用？
        ```
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
        
        class App extends Component{
        
            constructor(props) {
        
                super(props);
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
        ```