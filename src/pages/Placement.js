import React from 'react';


import { Card, Typography, Row, Col, Button, Space } from 'antd';
import { LinkOutlined, QuestionOutlined } from '@ant-design/icons';

import InfluencerHead from '../components/InfluencerHead'

const { Title, Text, Paragraph } = Typography;

function Placement() {
  return (
    <div id="Placement">
      <Row style={{ alignItems: "baseline" }}>
        <Title level={1}>Influencers / Federica! / Placements / September 6, 2020 11:34 AM </Title>
      </Row>

      <InfluencerHead />

      <Card style={{ margin: "1rem 0" }}>
        <Title level={2}>
          <Space size="middle">
            Placement for it.purelei.com
            <Button type="primary" size="large" >See the stories</Button>
            <Button type="primary" size="large" ghost >Shop available</Button>
          </Space>
        </Title>
        <Row>
          <Col span={12} >
            <Title level={4}>Number of single story for this placement <QuestionOutlined /></Title>
            <Text>5</Text>
          </Col>
          <Col span={12} >
            <Title level={4}>Number of single links for this placement <QuestionOutlined /></Title>
            <Text>1</Text>
          </Col>
        </Row>
        <Row>
          <Col span={12} >
            <Title level={4}>Placement start date <QuestionOutlined /></Title>
            <Text>September 6, 2020 11:34 AM</Text>
          </Col>
          <Col span={12} >
            <Title level={4}>End date of placement <QuestionOutlined /></Title>
            <Text>September 6, 2020 11:41 AM</Text>
          </Col>
        </Row>
      </Card>

      <Card style={{ margin: "1rem 0" }}>
        <Title level={2}>
          Details of the links in the 4 Story
        </Title>
        <Row>
          <Col span={23} >
            <Text>it.purelei.com/discount/ciao-federicaa?redirect=&utm_source=instagram&utm_medium=influencer&utm_campaign=store-launch&utm_content=ciao-federicaa&utm_term=federicaa_spano</Text>
          </Col>
          <Col span={1} className="flex-center-center" >
            <LinkOutlined />
          </Col>
        </Row>
      </Card>

    </div>
  )
}

export default Placement;
