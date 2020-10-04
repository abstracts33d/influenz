import React from 'react';

import {Link} from 'react-router-dom';

import {Avatar, Card, Typography, Row, Col, Dropdown, Button, Space} from 'antd';
import {DownOutlined} from '@ant-design/icons';

import CommonCard from '../components/CommonCard.js'
import SubNav from "../components/SubNav.js"

import Countries from "../components/menus/Countries.js"
import Categories from "../components/menus/Categories.js"

const {Title, Text, Paragraph} = Typography;

function Placements() {
    return (
        <div id="Placements">
            <SubNav title="Product placement in real-time">
                <div className="flex-end-center">
                    <Space size="middle">
                        <Text>
                            Filter by
                        </Text>
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
                <Col span={20} push={2}>
                    <CommonCard/>
                </Col>
                <Col span={20} push={2}>
                    <CommonCard/>
                </Col>
                <Col span={20} push={2}>
                    <CommonCard/>
                </Col>
            </Row>
        </div>
    )
}

export default Placements;
