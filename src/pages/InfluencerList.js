import React from 'react';

import { Card, Typography, Row, Col, Button } from 'antd';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';

import InfluencerTable from '../components/InfluencerTable'

const { Title, Text } = Typography;

const influencerTableData = [
  {
    key: 1,
    infos: "Ashlee Nichols",
    country: 'GB',
    retention: '35.7%',
    placements: "37",
    subscribers: '428.84K',
  },
  {
    key: 2,
    infos: "Ashlee Nichols",
    country: 'GB',
    retention: '35.7%',
    placements: "37",
    subscribers: '428.84K',
  },
];

function InfluencerList() {
  return (
    <div id="InfluencerList">
      <Row style={{ alignItems: "baseline" }}>
        <Title level={1} >Test <EditOutlined /></Title>
      </Row>
      <Row>
        <Col span={18}>
          <Card >
            {influencerTableData.length && (
              <React.Fragment>
                <div className="flex-between-center">
                  <Title level={2} >Influencers :{influencerTableData.length}</Title>
                  <Text>Settings <SettingOutlined /></Text>
                </div>
                <div style={{ overflowX: "scroll" }}>
                  <InfluencerTable influencerTableData={influencerTableData} />
                </div>
              </React.Fragment>
            ) || (
                <React.Fragment>
                  <Title level={3}>Lists are great to classify Influencers</Title>
                  <Text>Gather influencers for a campaign, calculate the total number of followers and placements.</Text>
                </React.Fragment>
              )}
          </Card>
        </Col>
        <Col span={5} push={1}>
          <Card >
            <Button type="primary">Create List</Button>
            <div>
              <Text>Test: {influencerTableData.length}</Text>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default InfluencerList;
