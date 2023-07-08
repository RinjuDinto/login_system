import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home/Home';
import Login from './Login/Login';
import DashBoard from './DashBoard/DashBoard'

import AuthenticatedRouting from './AuthenticatedRouting'

function Routing(props) {
  const { isAuthenticated } = props;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={  isAuthenticated ?<Navigate to="/dashboard" /> : <Login />}/>
        <Route path='/dashBoard' element={
          <AuthenticatedRouting isAuthenticated={isAuthenticated}>
              <DashBoard />
          </AuthenticatedRouting>
            } />      
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated, // Access the counter state from Redux store
  };
};

export default connect(mapStateToProps)(Routing);
