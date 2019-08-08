import {CLICK_MENU_BUTTON} from './actions'

// 个 state 赋初始值
let _state = {

	redux : {

		menuButtonStatus : '',
	    leftViewNarrow : '',
    	rightViewStretch : '',
	}
};

// 参数和默认值不能同名
// reducer 是一个纯函数，我们不能直接修改 state ，必须以副本的形式修改( 修改 state 的 副本)
export default function navigationItemReducer(state = _state, action) {

  switch (action.type) {
  
    case CLICK_MENU_BUTTON:

		if(state.redux.menuButtonStatus === 'active'){

			// 保护state的纯净，不直接修改，而是以副本的形式修改并返回state副本
			return Object.assign({}, state, {redux: { menuButtonStatus : '', leftViewNarrow: '' , rightViewStretch:'' }});
			state.redux.menuButtonStatus = "";
		}else{

			// 保护state的纯净，不直接修改，而是以副本的形式修改并返回state副本
			return Object.assign({}, state, {redux: { menuButtonStatus : 'active', leftViewNarrow: 'leftViewNarrow', rightViewStretch:'rightViewStretch'  }});
		}

    default:
      return state
  }
  
} ;

