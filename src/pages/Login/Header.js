import React from 'react';
import { Row, Col, Image } from 'antd';
import "./style.css";

export default function Header(props) {
  return (
    <Row className="headerContainer">
      <Col>
        <Row className="justifyCenter">
          <Col>
            <Image
              preview={false}
              src="https://emilus.themenate.net/img/logo.png"
            />
          </Col>
        </Row>

        <Row>
          <Col>
             <p className="signupText"> Don't have an account yet?  
               <a href="" > Sign Up</a>  </p> 
          </Col>
        </Row>
      </Col>
    </Row>
  )
}