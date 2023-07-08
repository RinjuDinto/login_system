import React from 'react';
import { Layout, Image } from 'antd';

import MenuData from './MenuData';
import './styles.css'
const { Sider } = Layout;

export default function SiderMenu(props) {
  const { collapsed} = props;

  return (
    <Sider
        theme="light"
        trigger={null}
        collapsed={collapsed}
        collapsedWidth={ 80}
        width={200}
        className="sider"
      >
         <div className="left">
          <div className="logo">
          <a href="/">
            <Image
              width={collapsed? 40: 90}
              src={
                !collapsed?
                "https://emilus.themenate.net/img/logo.png"
                : "https://emilus.themenate.net/img/logo-sm.png"
              }
              preview={false}
            />
          </a>
          </div>
        </div>
        
        <MenuData
          collapsed={collapsed}
        />
      </Sider>
  )
}