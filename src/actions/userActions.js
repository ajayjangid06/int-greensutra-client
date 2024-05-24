import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from '../constants/userConstants';


export const login = (email, password) => ({
  type: USER_LOGIN_REQUEST,
  payload: { email, password },
});

export const loginSuccess = (data) => ({
  type: USER_LOGIN_SUCCESS,
  payload: data,
});

export const loginFail = (error) => ({
  type: USER_LOGIN_FAIL,
  payload: error,
});



export const register = (username, email, password) => ({
  type: USER_REGISTER_REQUEST,
  payload: { username, email, password },
});

export const registerSuccess = (data) => ({
  type: USER_REGISTER_SUCCESS,
  payload: data,
});

export const registerFail = (error) => ({
  type: USER_REGISTER_FAIL,
  payload: error,
});

export const logout = () => ({
  // localStorage.removeItem('userInfo');
  type: USER_LOGOUT,
  // payload: error,
});


// export const login = (email, password) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_LOGIN_REQUEST });

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const { data } = await axios.post('/api/auth/login', { email, password }, config);

//     dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

//     localStorage.setItem('userInfo', JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: USER_LOGIN_FAIL,
//       payload: error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };

// export const logout = () => (dispatch) => {
//   localStorage.removeItem('userInfo');
//   dispatch({ type: USER_LOGOUT });
// };

// export const register = (username, email, password) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_REGISTER_REQUEST });

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const { data } = await axios.post('/api/auth/register', { username, email, password }, config);

//     dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
//     dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

//     localStorage.setItem('userInfo', JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: USER_REGISTER_FAIL,
//       payload: error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };
