import React from 'react';

import {Link} from 'react-router-dom';

import {Avatar, Typography, Row, Col} from 'antd';

const {Text, Paragraph} = Typography;

function InfluencerDetail(props) {
    return (
        <div id="InfluencerDetail">
            <div className="img-wrapper">
                <Avatar size={70}
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4-1Tw2E8d-uY-vctRbO2tc5JigsPBvGR7eA&usqp=CAU'/>
            </div>
            <div className="detail-card"
                 style={{backgroundImage: "url(https://i.ebayimg.com/images/g/wPIAAOSw-09dXGsS/s-l300.jpg)"}}>
                <Row></Row>
                <div className="content">
                    <Paragraph>
                        <Text strong>Hélène Legastel</Text>
                    </Paragraph>
                    <Paragraph className='flex-between-center'>
                        <Text  className='flex-center-center'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" style={{marginRight: '.4rem'}}>
                                <g clip-path="url(#clip0)">
                                    <path
                                        d="M5.99998 1C2.42298 1 0.199978 5.367 0.104978 5.553C0.0356193 5.6918 -0.000488281 5.84484 -0.000488281 6C-0.000488281 6.15516 0.0356193 6.3082 0.104978 6.447C0.199978 6.633 2.42298 11 5.99998 11C9.57698 11 11.8 6.633 11.9 6.447C11.9693 6.3082 12.0054 6.15516 12.0054 6C12.0054 5.84484 11.9693 5.6918 11.9 5.553C11.8 5.367 9.57698 1 5.99998 1ZM5.99998 9C4.31598 9 2.82898 7.129 2.14798 6.006C2.71798 5.076 4.19298 3 5.99998 3C7.68398 3 9.17098 4.872 9.85198 5.994C9.28198 6.924 7.80698 9 5.99998 9Z"
                                        fill="white"/>
                                    <path
                                        d="M6 7.5C6.82843 7.5 7.5 6.82843 7.5 6C7.5 5.17157 6.82843 4.5 6 4.5C5.17157 4.5 4.5 5.17157 4.5 6C4.5 6.82843 5.17157 7.5 6 7.5Z"
                                        fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="12" height="12" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            252k</Text>
                        <Text className='flex-center-center'>il ya 12h</Text>
                    </Paragraph>
                </div>
            </div>
        </div>
    )
}

export default InfluencerDetail;
