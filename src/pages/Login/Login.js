import React, { useEffect } from 'react';
import { Card, Row, Col, Form, Input, message } from 'antd';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { handleSuccessLogin} from '../../redux/Login/Actions'
import Header from './Header';
import Footer from './Footer';
import SaveButton from './SaveButton';
import'./style.css'

const { Item: FormItem } =  Form;

function Login(props) {
  const { handleSuccessLogin } = props
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleLogin = (values, err) => {
    try {
      if(!err) {
        const {userName, password} = values;
  
        if (userName === 'admin' && password === 'password') {
          const user = { userName: 'admin', isAuthenticated: true };
          handleSuccessLogin(user);

          localStorage.clear();
          localStorage.setItem('isAuthenticated', true);
          localStorage.setItem('userName', 'admin');
          
          navigate('/dashboard');
  
          message.success("Successfully Logined")
        } else {
          message.error("invalid user Name or Password");
        }
      } else {
        message.error("something went wrong");
      }
    } catch(e) {
      console.log("error in login", e)
      message.error("something went wrong");
    }
  };

  return(
    <Row className="containerDiv">
      <Col xs={20} sm={20} md={20} lg={6}>
        <Card
          bordered={false}
        >
          <Header />

          <Row className="loginFormContainer">
            <Col xs={24} sm={24} md={20} lg={20}>
              <Form
                form={form}
                layout="vertical"
                onFinish={(values, err) => handleLogin(values, err)}
              >
                <Row>
                  <Col span={24} >
                    <FormItem
                      name="userName" 
                      label="User Name"
                      rules={[{ required: true, message: 'User name is required' }]}
                    >  
                      <Input 
                        size="large"
                        placeholder="User Name" 
                        prefix={<UserOutlined />} 
                      />
                    </FormItem>
                  </Col>
                </Row>

                <Row>
                  <Col span={24}>
                    <FormItem
                      name="password" 
                      label="Password"
                      rules={[{ required: true, message: 'Password is required' }]}
                    >  
                      <Input.Password
                        size="large"
                        prefix={<LockOutlined />} 
                        placeholder="Password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                      />
                    </FormItem>
                  </Col>
                </Row>

                <Row 
                  className="loginFormContainer"
                >
                  <Col span={24}>
                    <SaveButton
                      formSubmit={() => {
                        form.submit()
                      }}
                    />
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>

          <Row className="justifyCenter">
            <Col xs={24} sm={24} md={20} lg={20}>
              <Footer />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSuccessLogin: (user) => {
      dispatch(handleSuccessLogin(user))
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);