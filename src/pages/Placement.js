import React from 'react';
import {Link} from 'react-router-dom';


import { Typography, Row, Col, Button } from 'antd';

import ShowHead from "../components/ShowHead";
import CommonCard from "../components/CommonCard";
import StatisticsCard from "../components/details/StatisticCard";
import SideCard from "../components/details/SideCard";

const { Title } = Typography;

function Placement() {
  return (
    <div id="Placement">
    <Row style={{marginBottom: '1.5rem'}}>
        <Col span={22} push={1}>
          <ShowHead type='placement'/>
        </Col>
      </Row>

      <Row>
        <Col span={22} push={1}>
          <Row>
            <Col span={17}>
              <Row>
                <Title level={3}>Placement for <Link>www.statholdings.com</Link></Title>
              </Row>
              <Row style={{marginBottom: '1.5rem'}}>
                <Col span={24}>
                  <Row>
                    <Col span={12}>
                      <div style={{marginRight: '1rem'}}>
                        <StatisticsCard color='warning'
                                        text='Number of single story for this placement '
                                        number={553}/>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div style={{marginLeft: '1rem'}}>
                        <StatisticsCard color='success'
                                        text='Number of single links for this placement '
                                        number={553}/>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <div style={{marginRight: '1rem'}}>
                        <StatisticsCard color='danger' text='Placement start date' subtext='September 6, 2020 11:34 AM'
                                        icon={<svg width="16" height="16" viewBox="0 0 16 16"
                                                   fill="none"
                                                   xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M11 16C10.7348 15.9999 10.4805 15.8945 10.293 15.707L8.29297 13.707L9.70697 12.293L11 13.586L14.293 10.293L15.707 11.707L11.707 15.707C11.5195 15.8945 11.2652 15.9999 11 16Z"
                                              fill="#DC5B59"/>
                                          <path
                                              d="M7 14H2V5H14V9H16V3C16 2.73478 15.8946 2.48043 15.7071 2.29289C15.5196 2.10536 15.2652 2 15 2H13V0H11V2H9V0H7V2H5V0H3V2H1C0.734784 2 0.48043 2.10536 0.292893 2.29289C0.105357 2.48043 0 2.73478 0 3L0 15C0 15.2652 0.105357 15.5196 0.292893 15.7071C0.48043 15.8946 0.734784 16 1 16H7V14Z"
                                              fill="#DC5B59"/>
                                        </svg>
                                        }/>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div style={{marginLeft: '1rem'}}>
                        <StatisticsCard color='danger' text='End date of placement ' subtext='September 6, 2020 11:34 AM'
                                        icon={<svg width="16" height="16" viewBox="0 0 16 16"
                                                   fill="none"
                                                   xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M15 2H13V0H11V2H9V0H7V2H5V0H3V2H1C0.734784 2 0.48043 2.10536 0.292893 2.29289C0.105357 2.48043 0 2.73478 0 3L0 15C0 15.2652 0.105357 15.5196 0.292893 15.7071C0.48043 15.8946 0.734784 16 1 16H15C15.2652 16 15.5196 15.8946 15.7071 15.7071C15.8946 15.5196 16 15.2652 16 15V3C16 2.73478 15.8946 2.48043 15.7071 2.29289C15.5196 2.10536 15.2652 2 15 2ZM14 14H2V5H14V14Z"
                                              fill="#DC5B59"/>
                                          <path d="M11 11H7V7H9V9H11V11Z" fill="#DC5B59"/>
                                        </svg>
                                        }/>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Title level={3}>Details of the links in the 4 stories</Title>
              </Row>
              <Row style={{marginBottom: '1.5rem'}}>
                <Col span={24}>
                  <CommonCard type='placement'/>
                  <CommonCard type='placement'/>
                  <CommonCard type='placement'/>
                  <CommonCard type='placement'/>
                </Col>
              </Row>
            </Col>
            <Col span={6} push={1}>
              <Row className='flex-between-center'>
                <Title level={3}>
                  Similar <br/>influencers
                </Title>
                <Button style={{float: 'right', marginBottom: '.5rem'}} ghost type='primary'>Show all</Button>
              </Row>
              <Row>
                <Col span={24}>
                  <SideCard link='influencer'/>
                  <SideCard link='influencer'/>
                  <SideCard link='influencer'/>
                  <SideCard link='influencer'/>
                  <SideCard link='influencer'/>
                  <SideCard link='influencer'/>
                  <SideCard link='influencer'/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Placement;
