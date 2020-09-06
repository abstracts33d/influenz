import React from 'react';


import { Card, Typography, Input } from 'antd';

import InfluencerTable from '../components/InfluencerTable'

const { Title, Text } = Typography;
const { Search } = Input;

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

function Influencers() {
  return (
    <div id="Influencers">
      <Title level={1}>Discover</Title>
      <Card style={{ margin: "1rem 2rem" }}>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}
        />
        TODO FILTERS
      </Card >
      <Card style={{ margin: "1rem 0" }}>
        <InfluencerTable influencerTableData={influencerTableData} inDiscover />
      </Card>
    </div >
  )
}

export default Influencers;
