import React from 'react';

import { Link } from 'react-router-dom';

import { Avatar, Card, Typography, Row, Col, Button } from 'antd';
import { LinkOutlined, QuestionOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

function InfluencerHead() {
  return (
    <Card style={{ margin: "1rem 0" }}>
      <Row
        justify="center"
        style={{ alignItems: "center", marginBottom: '1rem' }}
      >
        <Col span={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Link to={"influencer"}>
            <Avatar size={72} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </Link>
        </Col>
        <Col span={16}>
          <Paragraph>
            <Title level={2}>NICKY PARIS</Title>
          </Paragraph>
          <Paragraph>
            <Text>URL: nicky-c.com, www.nicky-c.com</Text>
          </Paragraph>
        </Col>
        <Col span={4} >
          <Paragraph>
            <Title level={4}>Placements past 15 days</Title>
          </Paragraph>
          <Paragraph>
            <Text>247</Text>
          </Paragraph>
        </Col>
      </Row>
      <Row>
        <Col span={12} >
          <Button type="primary" size="large">Add to a list</Button>
        </Col>
        <Col span={12} >
          <Button type="primary" size="large" style={{ float: 'right' }} >VisitWebsite <LinkOutlined /></Button>
        </Col>
      </Row>
    </Card>
  )
}

export default InfluencerHead