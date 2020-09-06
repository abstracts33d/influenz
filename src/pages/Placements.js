import React from 'react';

import { Link } from 'react-router-dom';

import { Avatar, Card, Typography, Row, Col, Menu, Dropdown, Tag } from 'antd';
import { ArrowRightOutlined, DownOutlined, GlobalOutlined, ReloadOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const countriesMenu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        France
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        ...
      </a>
    </Menu.Item>
  </Menu>
);


const qualityMenu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        On
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Off
      </a>
    </Menu.Item>
  </Menu>
);

function Placements() {
  return (
    <div id="placements" style={{ maxWidth: 800, margin: 'auto' }}>
      <Row style={{ alignItems: "baseline" }}>
        <Title level={1}>Product placement in real-time</Title>
        <ReloadOutlined style={{ lineHeight: 1.35, padding: '0 0.5rem' }} />
        <Text style={{ lineHeight: 1.35 }}>a few seconds ago</Text>
      </Row>


      <Card >
        <Tag icon={<GlobalOutlined />}>
          World
        </Tag>
        <Menu mode="horizontal">
          <Menu.Item>
            <Dropdown overlay={countriesMenu}>
              <div>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  Countries<DownOutlined />
                </a>
              </div>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown overlay={qualityMenu}>
              <div>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  Quality Filter<DownOutlined />
                </a>
              </div>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Card>

      <Card style={{ margin: "1rem 0" }}>
        <Row
          style={{ alignItems: "center" }}
          justify="center">
          <Col span={2}>
            <Link to={"/influencer"}>
              <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </Link>
          </Col>
          <Col span={21}>
            <Paragraph>
              <Link to={"/influencer"}>Hélène Legastel</Link>
              <Text> made a placement of <strong>1</strong> stories for </Text>
              <Link to={"https://www.monblogdefille.com/blog/1-000-videos-et-12-ans-sur-you-tube-et-bientot-15-ans-de-blog/"}>www.monblogdefille.com</Link>
            </Paragraph>
            <Paragraph>
              <Link to={"/placement"}>25 minutes ago</Link>
              <Text> - September 6, 2020 9:13 AM</Text>
            </Paragraph>
          </Col>
          <Col span={1} >
            <Link to={"/placement"}><ArrowRightOutlined /></Link>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default Placements;
