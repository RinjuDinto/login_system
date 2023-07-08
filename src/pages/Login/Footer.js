import React from 'react';
import { Row, Col, Divider, Button } from 'antd';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import './style.css'

export default function Footer() {
  return(
    <Row style={{marginTop: 10, marginBottom: 20 }}>
      <Col span={24}>
        <Row>
          <Col span={24}>
            <Divider>
              <span className="connectWithButton">
                 or connect with 
              </span>
            </Divider>
          </Col>
        </Row>

        <Row 
         className="connectButtonContainer"
        >
          <Col>
            <Button icon={<GoogleOutlined />} block>
              Google
            </Button>
          </Col>

          <Col>
            <Button icon={<FacebookOutlined />} block>
              Facebook
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}