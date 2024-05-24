import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand>BlogApp</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {userInfo ? (
                <>
                  <Nav.Link onClick={()=>navigate('/dashboard')} >
                    <i className="fas fa-user"></i> Dashboard
                  </Nav.Link>
                  {
                    // userInfo.role === 'admin' && (
                    // )
                  }
                  <Nav.Link onClick={()=>navigate('/postBlog')} >
                    <i className="fas fa-user"></i> Post Blog
                  </Nav.Link>
                  <Nav.Link onClick={logoutHandler}>
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link onClick={()=>navigate('/login')} >
                    <i className="fas fa-user"></i> Login
                  </Nav.Link>
                  <Nav.Link onClick={()=>navigate('/register')} >
                    <i className="fas fa-user-plus"></i> Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
