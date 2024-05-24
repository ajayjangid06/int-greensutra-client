import {
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_SUCCESS,
  BLOG_CREATE_FAIL,
  BLOG_DELETE_REQUEST,
  BLOG_DELETE_SUCCESS,
  BLOG_DELETE_FAIL,
} from '../constants/blogConstants';


export const listBlogs = () => ({
  type: BLOG_LIST_REQUEST,
  // payload: { username, password },
});

export const listBlogsSuccess = (data) => ({
  type: BLOG_LIST_SUCCESS,
  payload: data,
});

export const listBlogsFail = (error) => ({
  type: BLOG_LIST_FAIL,
  payload: error,
});



export const createBlog = (data) => (
  // console.log(data, 'data')
  {
  type: BLOG_CREATE_REQUEST,
  payload: data,
}
);

export const createBlogSuccess = (data) => ({
  type: BLOG_CREATE_SUCCESS,
  payload: data,
});

export const createBlogFail = (error) => ({
  type: BLOG_CREATE_FAIL,
  payload: error,
});



export const deleteBlog = (data) => (
  // console.log(data, 'data')
  {
  type: BLOG_DELETE_REQUEST,
  payload: data,
}
);

export const deleteBlogSuccess = (data) => ({
  type: BLOG_DELETE_SUCCESS,
  payload: data,
});

export const deleteBlogFail = (error) => ({
  type: BLOG_DELETE_FAIL,
  payload: error,
});
// export const listBlogs = () => async (dispatch) => {
//   try {
//     dispatch({ type: BLOG_LIST_REQUEST });

//     const { data } = await axios.get('/api/blogs');

//     dispatch({ type: BLOG_LIST_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: BLOG_LIST_FAIL,
//       payload: error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };

// export const createBlog = (blogData, token) => async (dispatch) => {
//   try {
//     dispatch({ type: BLOG_CREATE_REQUEST });

//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const { data } = await axios.post('/api/blogs', blogData, config);

//     dispatch({ type: BLOG_CREATE_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: BLOG_CREATE_FAIL,
//       payload: error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };
