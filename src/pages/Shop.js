import React from 'react';

import { Link } from 'react-router-dom';

import { Tag, Avatar, Card, Typography, Row, Col, Button, Table, Space } from 'antd';
import { MailOutlined, InstagramOutlined, QuestionOutlined, LinkOutlined, CalendarOutlined } from '@ant-design/icons';

import ShopHead from '../components/ShopHead'
const { Title, Text, Paragraph } = Typography;
const { Column } = Table;

const placementTabledata = [
  {
    key: 1,
    country: 'FR',
    infos: 'Kelly.herald',
    date: 'September 6, 2020 11:34 AM',
  },
  {
    key: 2,
    country: 'FR',
    infos: 'Kelly.herald',
    date: 'September 6, 2020 11:34 AM',
  },
];


const PlacementTable = () => {
  return (
    <Table dataSource={placementTabledata}>
      <Column title="#" dataIndex="key" key="key" />
      <Column title="" dataIndex="infos" key="infos"
        render={(text, record) => (
          <Space size="middle">
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Text>{record.infos}</Text>
            <LinkOutlined />
          </Space>
        )} />
      <Column title="COUNTRY" dataIndex="country" key="country" />
      <Column title="DATE" dataIndex="date" key="date" />
      <Column
        title=""
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <Button type="primary">See stories</Button>
            <Button type="primary">Détails du placement</Button>
          </Space>
        )}
      />
    </Table>
  )
}

function Shop() {
  return (
    <div id="Shop">
      <Row style={{ alignItems: "baseline" }}>
        <Title level={1}>Shops / NICKY PARIS</Title>
      </Row>

      <ShopHead />
      <Card style={{ margin: "1rem 0" }}>
        <Row>
          <Col span="14">
            <div

              style={{
                width: '100%',
                height: 'calc(100% + 48px)',
                transform: 'translate(-24px, -24px)',
                position: 'absolute',
                top: 0,
                bottom: 0,
                background: 'url("https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png")',
                backgroundSize: 'cover'
              }}

            ></div>
          </Col>
          <Col span="10">
            <Title level={2}>Details and overview</Title>
            <Title level={4}>SEO</Title>
            <Title level={5}>Soins réparateurs pour Cheveux</Title>
            <Text>Nicky Cosmetics Paris ® vous propose des gammes de soins capillaires professionnels. Adaptés à chaque type de cheveux, trouvez votre gamme et commandez votre pack !</Text>
            <Title level={4}>
              Technology
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </Title>
            <Title level={4}>Trackers used BETA <QuestionOutlined /></Title>
            <Paragraph className="flex-between-center">
              <Text>Google Tag</Text>
              <Text>Pixel Facebook</Text>
            </Paragraph>
          </Col>
        </Row>

      </Card>

      <Card style={{ margin: "1rem 0" }}>
        <Row>
          <Col span={16} >
            <Title level={2}>Statistics</Title>
          </Col>
          <Col span={8} className="period-col" >
            <Text>August 22nd - September 6th <CalendarOutlined /></Text>
          </Col>
        </Row>
        <Row>
          <Col span={12} >
            <Title level={4}>Number of placements <QuestionOutlined /></Title>
            <Text>105</Text>
          </Col>
          <Col span={12} >
            <Title level={4}>Last placement <QuestionOutlined /></Title>
            <Text>57 minutes ago - September 7, 2020 6:24 PM</Text>
          </Col>
          <Title level={3}>Number of placements / day</Title>
        </Row>
      </Card>
      <Card style={{ margin: "1rem 0" }}>
        <Row>
          <Col span={16} >
            <Title level={2}>Markets explored <Button type="primary" size="large">See more</Button></Title>
          </Col>
          <Col span={8} className="period-col" >
            <Text>August 22nd - September 6th <CalendarOutlined /></Text>
          </Col>
        </Row>
        <Row>
          <Col span={12} >
            <Title level={4}>Placements <QuestionOutlined /></Title>
            <Tag>237</Tag>
            <Tag>2</Tag>
          </Col>
          <Col span={12}>
            <Title level={4}>Influencers <QuestionOutlined /></Title>
            <Tag>41</Tag>
            <Tag>4</Tag>
          </Col>
        </Row>
        <Row>
          <Title level={4}>Gender of placed influencers</Title>
        </Row>
      </Card>

      <Card style={{ margin: "1rem 0" }}>
        <Row>
          <Col span={16} >
            <Title level={2}>Most-placed influencers <Button type="primary" size="large">See more</Button></Title>
          </Col>
          <Col span={8} className="period-col" >
            <Text>August 22nd - September 6th <CalendarOutlined /></Text>
          </Col>
        </Row>
      </Card>

      <Row gutter={[16, 16]}>
        <Col span={6} >
          <Card>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Avatar size={48} style={{ minWidth: 48, minHeight: 48 }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <Text>victoria_mehault</Text>
              <Text>695.2K Subscribers FR</Text>
              <Text>2 placements</Text>
            </div>
            <div style={{ width: 'calc(100% + 24px + 24px)', transform: 'translate(-24px,24px)', textAlign: 'center' }}>
              <Link to="shop">More informations</Link>
            </div>
          </Card>
        </Col>
        <Col span={6} >
          <Card>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Avatar size={48} style={{ minWidth: 48, minHeight: 48 }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <Text>victoria_mehault</Text>
              <Text>695.2K Subscribers FR</Text>
              <Text>2 placements</Text>
            </div>
            <div style={{ width: 'calc(100% + 24px + 24px)', transform: 'translate(-24px,24px)', textAlign: 'center' }}>
              <Link to="shop">More informations</Link>
            </div>
          </Card>
        </Col>
        <Col span={6} >
          <Card>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Avatar size={48} style={{ minWidth: 48, minHeight: 48 }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <Text>victoria_mehault</Text>
              <Text>695.2K Subscribers FR</Text>
              <Text>2 placements</Text>
            </div>
            <div style={{ width: 'calc(100% + 24px + 24px)', transform: 'translate(-24px,24px)', textAlign: 'center' }}>
              <Link to="shop">More informations</Link>
            </div>
          </Card>
        </Col>
        <Col span={6} >
          <Card>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Avatar size={48} style={{ minWidth: 48, minHeight: 48 }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <Text>victoria_mehault</Text>
              <Text>695.2K Subscribers FR</Text>
              <Text>2 placements</Text>
            </div>
            <div style={{ width: 'calc(100% + 24px + 24px)', transform: 'translate(-24px,24px)', textAlign: 'center' }}>
              <Link to="shop">More informations</Link>
            </div>
          </Card>
        </Col>
      </Row>

      <Card style={{ margin: "1rem 0" }}>
        <Title level={2}>Placements history <Button type="primary" size="large" >See more</Button></Title>
        <PlacementTable />
      </Card>
    </div>
  )
}

export default Shop;
