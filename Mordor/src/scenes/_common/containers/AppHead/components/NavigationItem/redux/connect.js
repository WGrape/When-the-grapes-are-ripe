import {connect as reduxConnect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {clickMenuButtonAction} from './actions.js'


// state到props的映射
// 我们在 reducer 定义的 state 都会被传到这个函数中
// 这个函数会把我们的 state 映射成 此组件上面的 props属性, 
// 这样，在组件类中，我们就能使用 this.props 获取到这些 state 了。
function mapStateToProps(state) {

  return {

    menuButtonStatus: state.navigationItemReducer.redux.menuButtonStatus,
    leftViewNarrow:   state.navigationItemReducer.redux.leftViewNarrow,
    rightViewStretch:  state.navigationItemReducer.redux.rightViewStretch,
  }
}

// dispatch到props的映射
function mapDispatchToProps(dispatch) {

  // clickMenuButtonAction 必须写成调用函数的形式 clickMenuButtonAction()
  return {

    onClickMenuButton: () => dispatch(clickMenuButtonAction())
  }
}


// 1个组件对应1个 connect ，多个action，1个 reducer
export default function connect(component){

	return reduxConnect(
  
	  // 需要2个参数,但不是必传的
		// mapStateToProps(state)
		// mapDispatchToProps(dispatch)
    // 当然这2个参数可以根据我们的具体需求去选择是否传入
		mapStateToProps,
		mapDispatchToProps
	)(component);
};
