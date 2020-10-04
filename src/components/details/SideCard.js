import React from 'react';
import {Link} from 'react-router-dom';

import {Card, Row, Col, Avatar, Typography, Space} from 'antd';

const {Text} = Typography;

const SideCard = (props) => {
  return (
  <Link to={props.link}>
    <Card style={{margin: "1rem 0"}} className='side-card'>
      <Row>
        <Col span="8">
          <Avatar size={48} style={{border: 'none'}}
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4-1Tw2E8d-uY-vctRbO2tc5JigsPBvGR7eA&usqp=CAU'/>
        </Col>
        {props.type === 'influencer' && (
          <Col span="16">
            <Row>
              <Col span="15">
                <Text>Darlene Robertson</Text>
              </Col>
              <Col span="9">
                <div className="flex-center-between">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.79294 2.793L0.585938 9L1.99994 10.414L8.20694 4.207L10.9999 7V0H3.99994L6.79294 2.793Z"
                      fill="#6BD5A4"/>
                  </svg>

                  <Text type='success'>+34%</Text>
                </div>
              </Col>
            </Row>
            <Row className='placements-count' style={{verticalAlign: 'baseline'}}>
              <div className='count'><strong>545</strong></div>
              <div>placements</div>
            </Row>
          </Col>
        ) || (
          <Col span="16">
            <Row>
              <Col span="24">
                <Text>Darlene Robertson</Text>
              </Col>
            </Row>
            <Row>
              <Col span="10">
                <Space size="middle">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <rect width="18" height="18" rx="4" fill="#F09B39"/>
                    <path
                      d="M11.9524 9.1575C11.6698 9.70724 11.249 10.1739 10.7313 10.5116C10.2136 10.8493 9.61686 11.0463 8.99987 11.0833C8.38288 11.0463 7.78616 10.8493 7.26845 10.5116C6.75075 10.1739 6.32991 9.70724 6.04737 9.1575C5.06544 9.87158 4.3782 10.9198 4.11487 12.105C4.09739 12.1859 4.10439 12.2701 4.13496 12.347C4.16553 12.4239 4.2183 12.4899 4.28654 12.5367C5.67356 13.4898 7.31694 14 8.99987 14C10.6828 14 12.3262 13.4898 13.7132 12.5367C13.7814 12.4899 13.8342 12.4239 13.8648 12.347C13.8953 12.2701 13.9023 12.1859 13.8849 12.105C13.6215 10.9198 12.9343 9.87158 11.9524 9.1575Z"
                      fill="white"/>
                    <path
                      d="M9 4C8.33696 4 7.70107 4.26339 7.23223 4.73223C6.76339 5.20107 6.5 5.83696 6.5 6.5C6.5 7.8425 7.55 9.83333 9 9.83333C10.45 9.83333 11.5 7.8425 11.5 6.5C11.5 5.83696 11.2366 5.20107 10.7678 4.73223C10.2989 4.26339 9.66304 4 9 4V4Z"
                      fill="white"/>
                  </svg>
                  <Text>85k</Text>
                </Space>
              </Col>
              <Col span="10">
                <Space size="middle">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <rect width="18" height="18" rx="4" fill="#4C9E66"/>
                    <g clip-path="url(#clip0)">
                      <path
                        d="M13.8167 4.0717C13.7603 4.03355 13.6954 4.00981 13.6277 4.00255C13.56 3.99528 13.4915 4.00472 13.4283 4.03003L9.33333 5.6667H6.08333C5.5308 5.6667 5.00089 5.88619 4.61019 6.27689C4.21949 6.66759 4 7.1975 4 7.75003C4 8.30257 4.21949 8.83247 4.61019 9.22317C5.00089 9.61387 5.5308 9.83336 6.08333 9.83336H9.33333L13.425 11.47C13.4884 11.4961 13.5572 11.5061 13.6254 11.4992C13.6936 11.4922 13.759 11.4686 13.8158 11.4304C13.8727 11.3921 13.9193 11.3405 13.9514 11.2799C13.9835 11.2194 14.0002 11.1519 14 11.0834V4.4167C14 4.34859 13.9832 4.28152 13.9513 4.22138C13.9193 4.16123 13.8731 4.10984 13.8167 4.0717Z"
                        fill="white"/>
                      <path
                        d="M9.09596 10.6667H6.4043L7.42263 13.2142C7.54573 13.522 7.7861 13.7684 8.09085 13.8991C8.39559 14.0297 8.73976 14.0339 9.04763 13.9108C9.3555 13.7877 9.60186 13.5474 9.73251 13.2426C9.86316 12.9379 9.8674 12.5937 9.7443 12.2858L9.09596 10.6667Z"
                        fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="10" height="10" fill="white" transform="translate(4 4)"/>
                      </clipPath>
                    </defs>
                  </svg>

                  <Text>48</Text>
                </Space>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    </Card>
  </Link>
  )
}

export default SideCard
