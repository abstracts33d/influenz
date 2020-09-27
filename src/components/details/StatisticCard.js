import React from 'react';

import {Card, Row, Col} from 'antd';


const StatisticsCard = (props) => {
    return (
        <Card style={{margin: "1rem 0"}} className={`statistic-card card-${props.color}`}>
            <Row>
                <Col span="4">
                    <div className="circle">
                        {props.icon ? props.icon : props.number}
                    </div>
                </Col>
                <Col span="20">
                    <div className="flex-start-center flex-col" style={{height: '100%'}}>
                        <div><strong>{props.text}</strong></div>
                        <div>{props.subtext}</div>
                    </div>
                </Col>
            </Row>
        </Card>
    )
}

export default StatisticsCard
