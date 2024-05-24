import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { login } from '../actions/userActions';
import { createBlog } from '../actions/blogActions';

const PostBlogScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createBlog({token: userInfo.token, blogData: {title, content}}));
  };

  return (
    <Row>
      <Col md={6}>
        <h1>Post Blog</h1>
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="title"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control
              type="content"
              placeholder="Enter content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Post blog
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default PostBlogScreen;
