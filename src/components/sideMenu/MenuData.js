import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

import {
  DashboardOutlined,
  HomeOutlined
} from '@ant-design/icons';

export default function MenuData(props) {
  const { collapsed } = props;
  const navigate = useNavigate();

  return (
    <Menu theme="light" mode="vertical" defaultSelectedKeys={['1']}>
      <Menu.Item 
        key="1" 
        icon={<DashboardOutlined />} 
        onClick={()=> navigate('/dashboard')}
      >
        {!collapsed && <span>Dashboard</span>}
      </Menu.Item>
      <Menu.Item 
        key="2" 
        icon={<HomeOutlined />} 
        onClick={() => navigate('/')}
      >
        {!collapsed && <span>Home</span>}
      </Menu.Item>
    </Menu>
  )
}