import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

export default function AuthenticatedRouting( props) {
  const {children, isAuthenticated} = props

  const navigate = useNavigate();
  const [userLoginStatus, setUserLoginStatus] = useState(false);
  const handleUserLoginCheck = () => {
      if (!isAuthenticated) {
        setUserLoginStatus(false);
          return navigate('/login');
      }
      setUserLoginStatus(true);
  }
  useEffect(() => {
    handleUserLoginCheck();
  }, [userLoginStatus]);

  return (
      <React.Fragment>
          {
              userLoginStatus && children
          }
      </React.Fragment>
  );
}