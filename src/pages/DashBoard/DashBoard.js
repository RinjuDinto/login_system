import React, { useEffect, useState } from 'react';
import { Layout, Grid } from 'antd';
import { connect } from 'react-redux';
import GlobalHeader from '../../components/Header/GlobalHeader';
import { handlelogout } from '../../redux/Login/Actions'
import SiderMenu from '../../components/sideMenu/SideMenu';
import SideDrawer from '../../components/sideMenu/SideDrawer';

import'./DashBoard.css'

const { Content } = Layout;
const { useBreakpoint } = Grid;
  
function Dashboard(props) {
  const { userName, handlelogout } = props;
  const [collapsed, setCollapsed] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [marginLeft, setMarginLeft] = useState(0);
  const screens = useBreakpoint();

  useEffect(()=> {
    setShowDrawer(false);
    setCollapsed(false);
    
    if (!screens.xs) {
      setMarginLeft(200);
    } else {
      setMarginLeft(0);
    }
  }, [screens])

  const toggleMenu = () => {
    if(screens.xs) {
      setShowDrawer(!showDrawer);
      setCollapsed(false);
    } else {
      if (!collapsed) {
        setMarginLeft(80);
      } else {
        setMarginLeft(200);
      }
      setCollapsed(!collapsed);
    }
  };

  return (
    <Layout>
      {screens.xs && (
        <SideDrawer
          showDrawer={showDrawer}
          collapsed={collapsed}
          setShowDrawer={setShowDrawer}
        />
      )}

      {!screens.xs && (
        <SiderMenu
          collapsed={collapsed}
        />
      )}

      <Layout className="site-layout" style={{ marginLeft: marginLeft }}>
        <GlobalHeader 
          userName={userName}
          collapsed={collapsed}
          toggleMenu={toggleMenu}
          handlelogout={handlelogout}
        />

        <Content className="dashBoardContent">
           welcome to DashBoard
        </Content>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlelogout: () => { dispatch(handlelogout()) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
