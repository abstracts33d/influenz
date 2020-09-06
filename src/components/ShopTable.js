import React from 'react';

import { Link } from 'react-router-dom';

import { Avatar, Typography, Button, Table, Space } from 'antd';
import { LinkOutlined, CloseCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { Column } = Table;

const ShopTable = (props) => {
  return (
    <Table dataSource={props.shopTableData}>
      {props.inDiscover && (
        <Column title="#" dataIndex="key" key="key" />
      )}

      <Column title="" dataIndex="infos" key="infos"
        render={(text, record) => (
          <Space size="middle">
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Text>{record.infos}</Text>
            <LinkOutlined />
          </Space>
        )} />

      <Column title="COUNTRY" dataIndex="country" key="country" />
      <Column title="PLACEMENTS" dataIndex="placements" key="placements" />

      <Column
        title=""
        key="action"
        render={(text, record) => (
          <Space size="middle">
            {props.inDiscover && (
              <Button type="primary">Add to list</Button>
            )}
            <Button type="primary"><Link to="shop">More Informations</Link></Button>
            {!props.inDiscover && (
              <CloseCircleOutlined />
            )}
          </Space>
        )}
      />
    </Table>
  )
}

export default ShopTable