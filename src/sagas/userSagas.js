import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';

function* loginUser(action) {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = yield call(axios.post, 'http://localhost:5000/api/auth/login', action.payload, config);
    yield put({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    yield put({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
}

function* registerUser(action) {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = yield call(axios.post, 'http://localhost:5000/api/auth/register', action.payload, config);
    yield put({ type: USER_REGISTER_SUCCESS, payload: data });
    yield put({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    yield put({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
}


function* logoutUser() {
  yield
  localStorage.removeItem('userInfo');
}

function* userSagas() {
  yield takeEvery(USER_LOGIN_REQUEST, loginUser);
  yield takeEvery(USER_REGISTER_REQUEST, registerUser);
  yield takeEvery(USER_LOGOUT, logoutUser);
}

export default userSagas;
