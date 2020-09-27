import React, { useState } from 'react';


import { Card, Typography, Row, Space, Button, Input } from 'antd';
import { UnorderedListOutlined, BorderOutlined } from '@ant-design/icons';

import ShopCard from '../components/ShopCard'
import ShopTable from '../components/ShopTable'

const { Title } = Typography;
const { Search } = Input;

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

function Shops() {
  const [isListView, setIsListView] = useState(false);

  return (
    <div id="Shpos">
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

      <Row className="flex-center-center">
        <Space size="large">
          <Button type="link" onClick={() => { setIsListView(true) }}><UnorderedListOutlined /> List view</Button>
          <Button type="link" onClick={() => { setIsListView(false) }}><BorderOutlined /> Detailed view</Button>
        </Space>
      </Row>

      {!isListView && (
        < React.Fragment >
          <ShopCard />
          <ShopCard />
        </React.Fragment>
      ) || (
          < React.Fragment >
            < Card style={{ margin: "1rem 0" }}>
              <div>
                <ShopTable shopTableData={shopTableData} inDiscover />
              </div>
            </Card >
          </React.Fragment>
        )}

    </div >
  )
}

export default Shops;
