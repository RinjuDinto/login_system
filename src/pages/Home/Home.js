import React from 'react';
import { Card, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';


function Home(props){
  const { isAuthenticated } = props;
  const navigate = useNavigate();

  return(
    <Space wrap className="containerDiv">
       <Card
          bordered={false}
        >
      <div> 
        {!isAuthenticated && (
          <Button 
            type="primary" 
            onClick={()=> {
              navigate("/login")
            }}
          > 
              Go to Login
          </Button>
        )}
        
        {isAuthenticated && (
          <Button 
            type="primary"
            onClick={()=> {
              navigate("/dashboard")
            }}
          >
            Go to Dashboard
          </Button>
        )}
      </div>
      </Card>
    </Space>
  )
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated, // Access the counter state from Redux store
  };
};

export default connect(mapStateToProps)(Home);