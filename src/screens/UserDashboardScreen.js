import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogList from '../components/BlogList';
import { listBlogs } from '../actions/blogActions';

const UserDashboardScreen = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;
  
  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

  return (
    <>
      <h1>Welcome, {userInfo.username}</h1>
      <BlogList blogs={blogs} />
    </>
  );
};

export default UserDashboardScreen;
