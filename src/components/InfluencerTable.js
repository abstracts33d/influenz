import React from 'react';

import { Link } from 'react-router-dom';

import { Avatar, Typography, Button, Table, Space } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { Column } = Table;

const InfluencerTable = (props) => {
  return (
    <Table dataSource={props.influencerTableData}>
      {props.inDiscover && (
        <Column title="#" dataIndex="key" key="key" />
      )}
      <Column title="" dataIndex="infos" key="infos"
        render={(text, record) => (
          <Space size="middle">
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Text>{record.infos}</Text>
            <CheckCircleOutlined />
          </Space>
        )} />

      <Column title="COUNTRY" dataIndex="country" key="country" />
      <Column title="RETENTION" dataIndex="retention" key="retention" />
      <Column title="PLACEMENTS" dataIndex="placements" key="placements" />
      <Column title="SUBSCRIBERS" dataIndex="subscribers" key="subscribers" />

      <Column
        title=""
        key="action"
        render={(text, record) => (
          <Space size="middle">
            {props.inDiscover && (
              <Button type="primary">Add to list</Button>
            )}
            <Button type="primary"><Link to="influencer">More Informations</Link></Button>
            {!props.inDiscover && (
              <CloseCircleOutlined />
            )}
          </Space>
        )}
      />
    </Table>
  )
}

export default InfluencerTable