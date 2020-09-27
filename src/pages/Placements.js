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
            </Row>
            <Row>
                <Col span={20} push={2}>
                    <Card style={{margin: ".3rem 0"}} className="hover-card">
                        <Row
                            style={{alignItems: "center"}}
                            justify="center">
                            <Col span={2}>
                                <Link to={"/influencer"}>
                                    <Avatar size={64}
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4-1Tw2E8d-uY-vctRbO2tc5JigsPBvGR7eA&usqp=CAU'/>
                                </Link>
                            </Col>
                            <Col span={21}>
                                <Paragraph>
                                    <Link to={"/influencer"}><Text strong>Hélène Legastel</Text></Link>
                                    <Text> made a placement of <strong>1</strong> stories for </Text>
                                    <Link
                                        to={"https://www.monblogdefille.com/blog/1-000-videos-et-12-ans-sur-you-tube-et-bientot-15-ans-de-blog/"}>www.monblogdefille.com</Link>
                                </Paragraph>
                                <Paragraph>
                                    <Text>25 minutes ago</Text>
                                    <Text> - September 6, 2020 9:13 AM</Text>
                                </Paragraph>
                            </Col>
                            <Col span={1}>
                                <Button style={{
                                    borderRadius: '50%!important',
                                    width: '2rem',
                                    height: '2rem',
                                    padding: '0'
                                }}>
                                    <Link to={"/placement"} className="flex-center-center">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0)">
                                                <path d="M2.13647 8.13638H14.8637" stroke="#5644F6" stroke-width="2"
                                                      stroke-miterlimit="10" stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path d="M10.4092 3.68182L14.8637 8.13637L10.4092 12.5909"
                                                      stroke="#5644F6" stroke-width="2" stroke-miterlimit="10"
                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="15.2727" height="15.2727" fill="white"
                                                          transform="translate(0.545654 0.181824)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </Link>
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Placements;
