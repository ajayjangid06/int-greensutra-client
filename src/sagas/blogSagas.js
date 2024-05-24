import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_SUCCESS,
  BLOG_CREATE_FAIL,
  BLOG_DELETE_SUCCESS,
  BLOG_DELETE_FAIL,
  BLOG_DELETE_REQUEST,
} from '../constants/blogConstants';

function* fetchBlogs() {
  try {
    const { data } = yield call(axios.get, 'http://localhost:5000/api/blogs');
    yield put({ type: BLOG_LIST_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: BLOG_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
}

function* createBlog(action) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${action.payload.token}`,
      },
    };
    const { data } = yield call(axios.post, 'http://localhost:5000/api/blogs', action.payload.blogData, config);
    yield put({ type: BLOG_CREATE_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: BLOG_CREATE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
}


function* deleteBlog(action) {
  console.log(action.payload.token, 'action');
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${action.payload.token}`,
      },
    };
    const { data } = yield call(axios.delete, `http://localhost:5000/api/blogs/${action.payload.id}`, config);
    yield put({ type: BLOG_DELETE_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: BLOG_DELETE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
}

function* blogSagas() {
  yield takeEvery(BLOG_LIST_REQUEST, fetchBlogs);
  yield takeEvery(BLOG_CREATE_REQUEST, createBlog);
  yield takeEvery(BLOG_DELETE_REQUEST, deleteBlog);
}

export default blogSagas;
