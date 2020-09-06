import React from 'react';

import { Link } from 'react-router-dom';

import { Avatar, Layout, Menu, Dropdown, Typography } from 'antd';
import { DownOutlined, UserOutlined, ShopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Title } = Typography;
const { Header, Content, Sider } = Layout;

const myAccountMenu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

function AppLayout(props) {
  const { children } = props

  return (

    <Layout>
      <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%', background: 'white', paddingLeft: 0 }}>
        <div id="brandLogo">INFLUENZ</div>
        <Menu mode="horizontal" style={{ float: 'right' }} id="MyAccountMenu">
          <Dropdown overlay={myAccountMenu}>
            <div>

              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                My account <DownOutlined />
              </a>
            </div>
          </Dropdown>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background"
          style={{
            height: 'calc(100vh - 64px)',
            position: 'fixed',
            top: '64px'
          }}>


          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<NotificationOutlined />}>
              <Link
                to={"/placements"}
              > Placements</Link>
            </Menu.Item>
            <Menu.ItemGroup key="g1" title="Your Lists">
              <Menu.Item key="2" icon={<UserOutlined />}>
                <Link
                  to={"/influencerList"}
                >Influencers</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<ShopOutlined />}>
                <Link
                  to={"/shopList"}
                >Shops</Link>
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g1" title="Discover">
              <Menu.Item key="2" icon={<UserOutlined />}>
                <Link
                  to={"/influencers"}
                >Influencers</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<ShopOutlined />}>
                <Link
                  to={"/shops"}
                >Shops</Link>
              </Menu.Item>
            </Menu.ItemGroup>

          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>

          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              width: 'calc(100vw - 200px)',
              position: 'absolute',
              right: 0,
              top: 64,
              minHeight: 'calc(100vh - 64px)'
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout >
    </Layout >
  );
}

export default AppLayout;
