import {createStore,combineReducers,applyMiddleware} from 'redux';
// import thunk from "redux-thunk";

const reducer = (prevState = "卖座电影",action = {})=>{
	switch(action.type){
		case 'mytitle' :
			return action.payload;
		default :
			return prevState
	}
}


const store  = createStore(reducer);

export default store