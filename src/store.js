import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { blogListReducer, blogCreateReducer, blogDeleteReducer } from './reducers/blogReducers';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import rootSaga from './sagas';

const reducer = combineReducers({
  blogList: blogListReducer,
  blogCreate: blogCreateReducer,
  blogDelete: blogDeleteReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  reducer,
  initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export default store;
