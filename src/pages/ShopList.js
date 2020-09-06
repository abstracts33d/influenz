import React from 'react';

import { Card, Typography, Row, Col, Button } from 'antd';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';

import ShopTable from '../components/ShopTable'

const { Title, Text } = Typography;

const shopTableData = [
  {
    key: 1,
    infos: "nicky-c.com",
    country: 'FR',
    placements: "37",
  },
  {
    key: 2,
    infos: "Ashlee Nichols",
    country: 'GB',
    placements: "109",
  },
];

function ShopList() {
  return (
    <div id="ShopList">
      <Row style={{ alignItems: "baseline" }}>
        <Title level={1} >Test <EditOutlined /></Title>
      </Row>
      <Row>
        <Col span={18}>
          <Card >
            {shopTableData.length && (
              <React.Fragment>
                <div className="flex-between-center">
                  <Title level={2} >Shops : {shopTableData.length}</Title>
                  <Text>Settings <SettingOutlined /></Text>
                </div>
                <div style={{ overflowX: "scroll" }}>
                  <ShopTable shopTableData={shopTableData} />
                </div>
              </React.Fragment>
            ) || (
                <React.Fragment>
                  <Text>Monitor your competitors, analyze a group of stores or collect the products that interest you!</Text>
                </React.Fragment>
              )}
          </Card>
        </Col>
        <Col span={5} push={1}>
          <Card >
            <Button type="primary">Create List</Button>
            <div>
              <Text>Test: {shopTableData.length}</Text>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ShopList;
