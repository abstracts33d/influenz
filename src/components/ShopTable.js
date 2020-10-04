import React from 'react';

import {useHistory} from 'react-router-dom';

import {Avatar, Typography, Button, Table, Space} from 'antd';
import {WebsiteIcon,PlacementIcon} from './SVG'


const {Text} = Typography;
const {Column} = Table;

const ShopTable = (props) => {

  const history = useHistory();

  const onRow = (record) => {
    return {
      onClick: event => {
        history.push('shop')
      }
    }
  }

  return (
    <Table
      dataSource={props.shopTableData}
      onRow={onRow}
    >
        <Column title="Name" dataIndex="infos" key="infos"
                render={(text, record) => (
                  <Space size="middle">
                    <Avatar size={48}
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4-1Tw2E8d-uY-vctRbO2tc5JigsPBvGR7eA&usqp=CAU'/>
                    <Text>{record.infos}</Text>
                  </Space>
                )}/>


        <Column title="Website" dataIndex="website" key="website"
                render={(text, record) => (
                  <Space size="middle">
                    <WebsiteIcon/>
                    <Text>{record.website}</Text>
                  </Space>
                )}/>
        <Column title="Placements" dataIndex="placements" key="placements"
                render={(text, record) => (
                  <Space size="middle">
                    <PlacementIcon/>

                    <Text>{record.placements}</Text>
                  </Space>
                )}/>
        <Column title="Country" dataIndex="country" key="country"/>

        <Column
          title=""
          key="action"
          render={(text, record) => (
            <Space size="middle">
              {props.inDiscover && (
                <Button type="primary">Add to list</Button>
              )}
            </Space>
          )}
        />
    </Table>
  )
}

export default ShopTable
