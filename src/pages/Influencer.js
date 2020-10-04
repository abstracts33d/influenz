import React from 'react';

import {Typography, Row, Col, Button} from 'antd';

import ShowHead from '../components/ShowHead'
import CommonCard from '../components/CommonCard.js'
import StatisticsCard from "../components/details/StatisticCard";
import SideCard from "../components/details/SideCard";

const {Title} = Typography;

function Influencer() {
    return (
        <div id="Influencer">
            <Row style={{marginBottom: '1.5rem'}}>
                <Col span={22} push={1}>
                    <ShowHead/>
                </Col>
            </Row>

            <Row>
                <Col span={22} push={1}>
                    <Row>
                        <Col span={17}>
                            <Row>
                                <Title level={3}>Statistics</Title>
                            </Row>
                            <Row style={{marginBottom: '1.5rem'}}>
                                <Col span={24}>
                                    <Row>
                                        <Col span={12}>
                                            <div>
                                                <StatisticsCard color='warning' text='Number of placements'
                                                                number={553}/>
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <div style={{marginLeft: '1rem'}}>
                                                <StatisticsCard color='success' text='Number of placements / day'
                                                                number={553}/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Title level={3} style={{width: '100%'}}>
                                  Placements history
                                  <Button style={{float: 'right'}} ghost type='primary'>Show all</Button>
                                </Title>
                            </Row>
                            <Row style={{marginBottom: '1.5rem'}}>
                                <Col span={24}>
                                    <CommonCard type='influencer'/>
                                    <CommonCard type='influencer'/>
                                    <CommonCard type='influencer'/>
                                    <CommonCard type='influencer'/>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={6} push={1}>
                          <Row className='flex-between-center'>
                            <Title level={3}>
                              Most-placed <br/>shops
                            </Title>
                            <Button style={{float: 'right', marginBottom: '.5rem'}} ghost type='primary'>Show all</Button>
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

export default Influencer;
