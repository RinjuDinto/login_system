import React from 'react';
import { Drawer, Image } from 'antd';
import MenuData from './MenuData';
import { ArrowLeftOutlined } from '@ant-design/icons';

import './styles.css'

export default function SideDrawer(props) {
  const { showDrawer, collapsed ,setShowDrawer } = props;

  return(
    <Drawer
      visible={showDrawer}
      onClose={() => setShowDrawer(false)}
      placement="left"
      closable={false}
      bodyStyle={{ padding: 0 }}
      width={300}
    > 
      <div className="left">
        <div className="logo">
          <a href="/">
            <Image
              width={90}
              src="https://emilus.themenate.net/img/logo.png"
              preview={false}
            />
          </a>

          <div>
            <ArrowLeftOutlined 
              onClick={()=> setShowDrawer(false)}
            />
          </div>
        </div>
      </div>

      <MenuData
        collapsed={collapsed}
      />
    </Drawer>
  )
}