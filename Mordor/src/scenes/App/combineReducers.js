import { createStore,combineReducers } from 'redux';

import navigationItemReducer from "../_common/containers/AppHead/components/NavigationItem/redux/reducers"

// 负责 把 所有的 reducer 全部 combine 到一起

// 通过注入不同的reducer ， 创建整个APP的 Store 对象
let Store = createStore(combineReducers({
    
    // 引入所有的 reducers
	navigationItemReducer
}));


export default Store;

