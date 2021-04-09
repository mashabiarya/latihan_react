import { Provider, connect } from "react-redux";
import { applyMiddleware, createStore, combineReducers, bindActionCreators } from "redux";
import carouselData from './database/dataCarousel.json'
import recentPostData from './database/recentPostData.json'


//Our reducer
let carouselReducer = function(state={
  data: carouselData
}, action) {

  switch(action.type) {
    
    default:
      return state;
  }
}

let recentPostReducer = function(state={
  data: recentPostData
}, action) {

  switch(action.type) {
    
    default:
      return state;
  }
}

//This is the final reducer that gets attached to our store.
const rootReducer = combineReducers ({
  carousel: carouselReducer,
  recentPost: recentPostReducer,
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
    Redux
}