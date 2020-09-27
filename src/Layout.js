import React from 'react';

import {Link} from 'react-router-dom';

import {Avatar, Layout, Menu, Dropdown, Typography, Button, Space} from 'antd';
import {DownOutlined, UserOutlined, ShopOutlined, NotificationOutlined} from '@ant-design/icons';

import LogoIcon from "./Logo.js";
import ArrowIcon from "./Arrow.js";

import Notification from "./assets/notification.svg";

const {Text} = Typography
const {Header, Content, Sider} = Layout;

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


const Arrow = (
  <Button style={{
    borderRadius: '50%!important',
    width: '3rem',
    height: '3rem',
    padding: '0',
    float: 'right'
  }} className="menu-arrow transformed">
    <ArrowIcon size={18} fill="white"/>
  </Button>
)

function AppLayout(props) {
  const {children} = props

  return (
    <React.Fragment>
      <Layout>
        <Sider width={250} className="site-layout-background">
          <div id="brandLogo">
            <LogoIcon size={34} fill="#5644F6"/>
            <span className="text-primary">UpSwipe</span>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{borderRight: 0}}
          >
            <Menu.Item key="1" icon={<NotificationOutlined/>}>
              <Link
                to={"/dashboard"}
              >
                Dashboard
                {Arrow}
              </Link>
            </Menu.Item>
            <Menu.ItemGroup key="g1" title="Your Lists">
              <Menu.Item key="1" icon={<NotificationOutlined/>}>
                <Link
                  to={"/placements"}
                >
                  Placements
                  {Arrow}
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined/>}>
                <Link
                  to={"/influencerList"}
                >
                  Influencers
                  {Arrow}
                </Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<ShopOutlined/>}>
                <Link
                  to={"/shopList"}
                >
                  Shops
                  {Arrow}
                </Link>
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g1" title="Discover">
              <Menu.Item key="2" icon={<UserOutlined/>}>
                <Link
                  to={"/influencers"}
                >
                  Influencers
                  {Arrow}
                </Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<ShopOutlined/>}>
                <Link
                  to={"/shops"}
                >
                  Shops
                  {Arrow}
                </Link>
              </Menu.Item>
            </Menu.ItemGroup>

          </Menu>
        </Sider>

        <Layout>
          <Header className="header">
            <Menu mode="horizontal" style={{float: 'right'}} id="MyAccountMenu">
              <Dropdown overlay={myAccountMenu} trigger={['click']}>
                <div className="flex-center-center">
                  <Button type="danger">
                    <Space size="middle">
                      Add to list
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.33333 3.33333H4.66667V0.666667C4.66667 0.489856 4.59643 0.320286 4.4714 0.195262C4.34638 0.0702379 4.17681 0 4 0C3.82319 0 3.65362 0.0702379 3.5286 0.195262C3.40357 0.320286 3.33333 0.489856 3.33333 0.666667V3.33333H0.666667C0.489856 3.33333 0.320286 3.40357 0.195262 3.5286C0.0702379 3.65362 0 3.82319 0 4C0 4.17681 0.0702379 4.34638 0.195262 4.4714C0.320286 4.59643 0.489856 4.66667 0.666667 4.66667H3.33333V7.33333C3.33333 7.51014 3.40357 7.67971 3.5286 7.80474C3.65362 7.92976 3.82319 8 4 8C4.17681 8 4.34638 7.92976 4.4714 7.80474C4.59643 7.67971 4.66667 7.51014 4.66667 7.33333V4.66667H7.33333C7.51014 4.66667 7.67971 4.59643 7.80474 4.4714C7.92976 4.34638 8 4.17681 8 4C8 3.82319 7.92976 3.65362 7.80474 3.5286C7.67971 3.40357 7.51014 3.33333 7.33333 3.33333Z"
                          fill="white"/>
                      </svg>
                    </Space>
                  </Button>
                  <img src={Notification} className="py-3"/>
                  <Text className="my-1">Cody Fisher</Text>
                  <Avatar size={53} style={{border: 'none'}}
                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4-1Tw2E8d-uY-vctRbO2tc5JigsPBvGR7eA&usqp=CAU'/>
                  <a className="ant-dropdown-link my-1" onClick={e => e.preventDefault()}>
                    <DownOutlined/>
                  </a>
                </div>
              </Dropdown>
            </Menu>
          </Header>
          <Content
            className="site-layout-background"

          >
            {children}
          </Content>
        </Layout>
      </Layout>
      <footer className={"flex-end-center"} style={{paddingRight: "2rem"}}>
        <a>Legal Notice</a>
        <div>All rights reserved 2020</div>
        <div style={{color: "white"}}>
          <LogoIcon size={8} fill="white"/>
          <span>UpSwipe</span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default AppLayout;
