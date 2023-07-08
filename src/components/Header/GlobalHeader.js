import React from 'react';
import { Layout, Menu, Button, Avatar,Dropdown, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import './style.css'

const { Header } = Layout;

export default function GlobalHeader(props) {
  const { userName, collapsed, toggleMenu, handlelogout } = props;
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    if (key === 'logout') {
      try {
        localStorage.clear();
        handlelogout();
        
        message.success("Logout successfully");
        navigate("/login")
      } catch (e) {
        console.log("error in logout", e);
        message.error("something went wrong");
      }
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ padding: 0 }}>
      <div className="header">
        <Button
          onClick={()=> toggleMenu()}
          className="menuButton"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        />

        <div className="headerRight">
          <Dropdown overlay={menu}>
            <div className="user-info">
              <Avatar icon={<UserOutlined />} />
              <span className="username">{userName}</span>
            </div>
          </Dropdown>
        </div> 
      </div>
    </Header>
  );
};
