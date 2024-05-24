import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBlogs } from '../actions/blogActions';
import BlogList from '../components/BlogList';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Blogs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <BlogList blogs={blogs} />
      )}
    </>
  );
};

export default HomeScreen;
