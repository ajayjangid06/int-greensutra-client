import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UserDashboardScreen from './screens/UserDashboardScreen';
import PostBlogScreen from './screens/PostBlogScreen';

const App = () => {

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route
              path="/dashboard"
              element={userInfo ? <UserDashboardScreen /> : <LoginScreen />}
            />
            <Route
              path="/postBlog"
              element={userInfo ? <PostBlogScreen /> : <LoginScreen />}
            />
          </Routes>
        </Container>
      </main>
    </Router>
  );
};

export default App;

// npm install axios redux redux-saga react-redux react-router-dom bootstrap react-bootstrap react-redux http-proxy-middleware redux-saga redux redux-devtools-extension react-router-bootstrap
