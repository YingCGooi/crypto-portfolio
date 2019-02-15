import { createStore, combineReducers } from 'redux';
// import thunk from "redux-thunk";
// import promise from "redux-promise-middleware";

import show from './reducers/showReducer';
import assets from './reducers/assetsReducer';

export default createStore(
  combineReducers({
    show,
    assets,
  }),
  {}
)
// export default createStore(
//     combineReducers({
//         math,
//         user
//     }),
//     {},
//     applyMiddleware(logger(), thunk, promise())
// );
