import React from 'react';

import { Space, Typography, Row, Col, Button, Dropdown } from 'antd';

import {DownOutlined} from '@ant-design/icons';

import SubNav from "../components/SubNav.js"
import ListSider from "../components/lists/ListSider";

import InfluencerTable from '../components/InfluencerTable'


import Countries from "../components/menus/Countries.js"
import Categories from "../components/menus/Categories.js"
import Placements from "../components/menus/Placements"
import Subscribers from "../components/menus/Subscribers"

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
      <SubNav title="Influencers">
          <div className="flex-end-center">
                    <Space size="middle">
                        <Text>
                            Filter by
                        </Text>
                      <Dropdown overlay={Subscribers} trigger={['click']}>
                        <Button className="ant-dropdown-link">
                          Subscriber<DownOutlined/>
                        </Button>
                      </Dropdown>
                      <Dropdown overlay={Placements} trigger={['click']}>
                        <Button className="ant-dropdown-link">
                          Placement<DownOutlined/>
                        </Button>
                      </Dropdown>
                        <Dropdown overlay={Countries} trigger={['click']}>
                            <Button className="ant-dropdown-link">
                                Country<DownOutlined/>
                            </Button>
                        </Dropdown>
                        <Dropdown overlay={Categories} trigger={['click']}>
                            <Button className="ant-dropdown-link">
                                Categoty<DownOutlined/>
                            </Button>
                        </Dropdown>
                    </Space>
                </div>
        </SubNav>
      <Row>
        <Col span={16} push={1}>
            {influencerTableData.length && (
              <React.Fragment>
                <div>
                  <InfluencerTable influencerTableData={influencerTableData} />
                </div>
              </React.Fragment>
            ) || (
                <React.Fragment>
                  <Title level={3}>Lists are great to classify Influencers</Title>
                  <Text>Gather influencers for a campaign, calculate the total number of followers and placements.</Text>
                </React.Fragment>
              )}
        </Col>
        <Col span={5} push={2}>
          <ListSider name="influencer"/>
        </Col>
      </Row>

    </div>
  )
}

export default InfluencerList;
