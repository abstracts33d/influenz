import React from 'react';

import {Typography, Row, Col, Button, Dropdown, Space} from 'antd';
import {Link} from "react-router-dom";

import SideCard from "../components/details/SideCard";
import InfluencerTable from "../components/InfluencerTable";
import InfluencerDetail from "../components/InfluencerDetail";
import {DownOutlined} from "@ant-design/icons";
import Filter from "../components/menus/Filter";
import ArrowIcon from "../Arrow.js";

const {Title, Text} = Typography;

const Filters = (
    <Dropdown overlay={Filter} trigger={['click']}>
        <Button className="ant-dropdown-link">
            Sort by<DownOutlined/>
        </Button>
    </Dropdown>
)


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

function Dashboard() {
    return (
        <div id="Dashboard">
            <Row style={{margin: '1.5rem 0'}}>
                <Col span={22} push={1}>
                    <Row>
                        <Title level={3} style={{width: '100%'}}>
                            Top placements
                            <div style={{float: 'right'}}>
                                <Space>
                                    {Filters}
                                    <Button ghost type='primary'>Show all</Button>
                                </Space>
                            </div>
                        </Title>
                    </Row>
                </Col>
            </Row>
            <Row style={{margin: '1.5rem 0'}}>
                <Col span={23} push={1}>
                    <Row>
                        <div id="Card-row" style={{overflow: 'hidden'}}>
                            <div className="overlay"></div>
                            <div className="arrow">
                                <Link to="#" className="flex-center-center"
                                      onClick={(e) => {
                                      }}
                                      style={{
                                          width: '3rem',
                                          height: '3rem',
                                          padding: '0',
                                          background: 'white'
                                      }}
                                >
                                    <ArrowIcon size={18} fill="white"/>
                                </Link>
                            </div>
                            <Row style={{marginBottom: '1.5rem'}} style={{width: 'fit-content', flexWrap: 'nowrap'}}>
                                <InfluencerDetail/>
                                <InfluencerDetail/>
                                <InfluencerDetail/>
                                <InfluencerDetail/>
                                <InfluencerDetail/>
                                <InfluencerDetail/>
                                <InfluencerDetail/>
                                <InfluencerDetail/>
                                <InfluencerDetail/>
                                <InfluencerDetail/>
                            </Row>
                        </div>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col span={22} push={1}>
                    <Row>
                        <Col span={17}>
                            <Row>
                                <Title level={3} style={{width: '100%'}}>
                                    Top influencers
                                    <div style={{float: 'right'}}>
                                        <Space>
                                            {Filters}
                                            <Button ghost type='primary'>Show all</Button>
                                        </Space>
                                    </div>
                                </Title>
                            </Row>
                            <Row style={{marginBottom: '1.5rem'}}>
                                <Col span={24}>
                                    {influencerTableData.length && (
                                        <React.Fragment>
                                            <div>
                                                <InfluencerTable influencerTableData={influencerTableData}/>
                                            </div>
                                        </React.Fragment>
                                    ) || (
                                        <React.Fragment>
                                            <Title level={3}>Lists are great to classify Influencers</Title>
                                            <Text>Gather influencers for a campaign, calculate the total number of
                                                followers and
                                                placements.</Text>
                                        </React.Fragment>
                                    )}
                                </Col>
                            </Row>
                        </Col>
                        <Col span={6} push={1}>
                            <Row className='flex-between-center'>
                                <Title level={3}>
                                    Top shops
                                </Title>
                                <Button style={{float: 'right', marginBottom: '.5rem'}} ghost type='primary'>Show
                                    all</Button>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <SideCard type='influencer' link='shop'/>
                                    <SideCard type='influencer' link='shop'/>
                                    <SideCard type='influencer' link='shop'/>
                                    <SideCard type='influencer' link='shop'/>
                                    <SideCard type='influencer' link='shop'/>
                                    <SideCard type='influencer' link='shop'/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    )
}

export default Dashboard;
