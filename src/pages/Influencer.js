import React from 'react';

import { Link } from 'react-router-dom';

import { Avatar, Card, Typography, Row, Col, Button, Table, Space } from 'antd';
import { MailOutlined, InstagramOutlined, QuestionOutlined, LinkOutlined, CalendarOutlined } from '@ant-design/icons';

import InfluencerHead from '../components/InfluencerHead'
const { Title, Text, Paragraph } = Typography;
const { Column } = Table;

const placementTabledata = [
  {
    key: 1,
    infos: 'it.purelei.com',
    date: 'September 6, 2020 11:34 AM',
  },
  {
    key: 2,
    infos: 'it.purelei.com',
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
      <Column title="date" dataIndex="date" key="date" />
      <Column
        title=""
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <Button>See stories</Button>
            <Button>Détails du placement</Button>
          </Space>
        )}
      />
    </Table>
  )
}

function Influencer() {
  return (
    <div id="Influencer">
      <Row style={{ alignItems: "baseline" }}>
        <Title level={1}>Influencers / Federica!</Title>
      </Row>

      <InfluencerHead />

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
          </Col>
          <Col span={12} >
            <Title level={4}>Last placement <QuestionOutlined /></Title>
          </Col>
          <Title level={3}>Number of placements / day</Title>
        </Row>
      </Card>

      <Card style={{ margin: "1rem 0" }}>
        <Title level={2}>Placements history <Button type="primary" size="large" >See more</Button></Title>
        <Row>
          <Col span={12} >
            <Title level={4}>Number of placements <QuestionOutlined /></Title>
            <Text>5</Text>
          </Col>
          <Col span={12} >
            <Title level={4}>Last placement <QuestionOutlined /></Title>
            <Text>an hour ago - September 6, 2020 11:34 AM</Text>
          </Col>
          <Title level={3}>Number of placements / day</Title>
        </Row>
        <PlacementTable />
      </Card>

      <Card style={{ margin: "1rem 0" }}>
        <Row>
          <Col span={16} >
            <Title level={2}>Most-placed shops <Button type="primary" size="large">See more</Button></Title>
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
              <Text>hellobody</Text>
              <Text>DE</Text>
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
              <Text>hellobody</Text>
              <Text>DE</Text>
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
              <Text>hellobody</Text>
              <Text>DE</Text>
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
              <Text>hellobody</Text>
              <Text>DE</Text>
              <Text>2 placements</Text>
            </div>
            <div style={{ width: 'calc(100% + 24px + 24px)', transform: 'translate(-24px,24px)', textAlign: 'center' }}>
              <Link to="shop">More informations</Link>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Influencer;
