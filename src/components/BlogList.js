import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteBlog } from '../actions/blogActions';
import { useDispatch, useSelector } from 'react-redux';

const BlogList = ({ blogs }) => {

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const deleteHandler = (e, id) => {
    console.log('hyy');
    dispatch(deleteBlog({token: userInfo.token, id: id}));
  };

  return (
    <>
      {blogs?.map((blog) => (
        <Card key={blog._id} className="my-3 p-3 rounded">
          <Card.Body>
            <Card.Title as="div">
              <strong>{blog.title}</strong>
            </Card.Title>
            <Card.Text as="div">
              <div className="my-3">{blog.content.substring(0, 100)}...</div>
            </Card.Text>
            <Button variant="link" onClick={(e)=>deleteHandler(e, blog._id)}>Delete</Button>
            {/* <Link to={`/blog/${blog._id}`}>
              <Button variant="primary">Read More</Button>
            </Link> */}
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default BlogList;
