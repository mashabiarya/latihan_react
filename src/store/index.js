import { Provider, connect } from "react-redux";
import { applyMiddleware, createStore, combineReducers, bindActionCreators } from "redux";
const CHANGE_MESSAGE = 'change_message';

//This is the Action Creator
let changeMessage = function(message) { 
 
  let newMessage;
  if(message=='First Message') {
    newMessage = 'Second Message';
  } else {
    newMessage = 'First Message';
  }
  
  //return an action
  return {
    type: CHANGE_MESSAGE,
    payload: newMessage
  }
}

//Our reducer
let messageReducer = function(state={}, action) {

  switch(action.type) {
    case CHANGE_MESSAGE:
   
      return action.payload;
    default:
      return state;
  }
}

//This is the final reducer that gets attached to our store.
const rootReducer = combineReducers ({

  message: messageReducer
});

//create the store
let store = createStore(rootReducer);
const Redux = props => {
    return (
      <Provider store={ store }>
          {props.children}
      </Provider>
    );
  };

export{
    Redux, changeMessage
}