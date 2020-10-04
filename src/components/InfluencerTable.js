import React from 'react';

import {useHistory} from 'react-router-dom';


import {Avatar, Typography, Button, Table, Space, Checkbox} from 'antd';
import {SubscriberIcon,RetentionIcon,PlacementIcon} from './SVG'

const {Text} = Typography;
const {Column} = Table;

const InfluencerTable = (props) => {
  const history = useHistory();


  const onRow = (record) => {
    return {
      onClick: event => {
        history.push('influencer')
      }
    }
  }

  return (
        <Table
          dataSource={props.influencerTableData}
          onRow={onRow}
        >
            {props.inDiscover && (
                <Column title="#" dataIndex="key" key="key"/>
            )}
            <Column title="Name" dataIndex="infos" key="infos"
                    render={(text, record) => (
                        <Space size="middle">
                            <Avatar size={48}
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4-1Tw2E8d-uY-vctRbO2tc5JigsPBvGR7eA&usqp=CAU'/>
                            <Text>{record.infos}</Text>
                        </Space>
                    )}/>

            <Column title="Subscribers" dataIndex="subscribers" key="subscribers"
                    render={(text, record) => (
                        <Space size="middle">
                            <SubscriberIcon/>
                            <Text>{record.subscribers}</Text>
                        </Space>
                    )}/>
            <Column title="Retention" dataIndex="retention" key="retention"
                    render={(text, record) => (
                        <Space size="middle">
                            <RetentionIcon/>
                            <Text>{record.retention}</Text>
                        </Space>
                    )}/>
            <Column title="Placements" dataIndex="placements" key="placements"
                    render={(text, record) => (
                        <Space size="middle">
                            <PlacementIcon/>

                            <Text>{record.placements}</Text>
                        </Space>
                    )}/>
            <Column title="Country" dataIndex="country" key="country"
                    render={(text, record) => (
                        <Space size="middle">
                            <Text>{record.country}</Text>
                        </Space>
                    )}/>

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

export default InfluencerTable
