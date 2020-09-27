import {Avatar, Button, Card, Col, Row, Typography} from "antd";
import {Link} from "react-router-dom";
import React, {useState} from "react";

import InfluencerDetailPopup from "./InfluencerDetailPopup";

const {Text, Paragraph} = Typography;

function CommonCard(props) {
  const [showModal, setShowModal] = useState(false)
  return (
        <Card style={{margin: ".3rem 0"}} className="hover-card">
            <Row
                style={{alignItems: "center"}}
                justify="center">
                <Col span={2} style={{alignItems: 'center', display: 'flex'}}>
                    {props.type === 'placement' && (
                        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21.5" cy="21.5" r="21.5" fill="#5644F6" fill-opacity="0.1"/>
                            <path
                                d="M25 13C23.7 13 22.4 13.5 21.5 14.5L20.3 15.6C19.9 16 19.9 16.6 20.3 17C20.7 17.4 21.3 17.4 21.7 17L22.9 15.8C24 14.7 26 14.7 27.1 15.8C27.7 16.4 28 17.2 28 18C28 18.8 27.7 19.6 27.1 20.1L26 21.3C25.6 21.7 25.6 22.3 26 22.7C26.2 22.9 26.5 23 26.7 23C26.9 23 27.2 22.9 27.4 22.7L28.6 21.5C29.5 20.6 30 19.3 30 18C30 16.7 29.5 15.4 28.5 14.5C27.6 13.5 26.3 13 25 13Z"
                                fill="#5644F6"/>
                            <path
                                d="M22.3 25L21.1 26.2C20 27.3 18 27.3 16.9 26.2C16.3 25.6 16 24.8 16 24C16 23.2 16.3 22.4 16.9 21.9L18 20.7C18.4 20.3 18.4 19.7 18 19.3C17.6 18.9 17 18.9 16.6 19.3L15.5 20.5C14.5 21.4 14 22.7 14 24C14 25.3 14.5 26.6 15.5 27.5C16.4 28.5 17.7 29 19 29C20.3 29 21.6 28.5 22.5 27.5L23.7 26.3C24.1 25.9 24.1 25.3 23.7 24.9C23.3 24.5 22.7 24.6 22.3 25Z"
                                fill="#5644F6"/>
                            <path
                                d="M23.4004 18.2L19.2004 22.4C18.8004 22.8 18.8004 23.4 19.2004 23.8C19.4004 24 19.7004 24.1 19.9004 24.1C20.1004 24.1 20.4004 24 20.6004 23.8L24.8004 19.6C25.2004 19.2 25.2004 18.6 24.8004 18.2C24.4004 17.8 23.8004 17.8 23.4004 18.2Z"
                                fill="#5644F6"/>
                        </svg>

                    ) || (
                        <Link to={"/influencer"}>
                            <Avatar size={64}
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4-1Tw2E8d-uY-vctRbO2tc5JigsPBvGR7eA&usqp=CAU'/>
                        </Link>
                    )}
                </Col>
                <Col span={21}>
                    <Paragraph>
                        <Link to={"/influencer"}><Text strong>Hélène Legastel</Text></Link>
                        <Text> made a placement of <strong>1</strong> stories for </Text>
                        {props.type !== 'placement' && (
                            <Link
                                to={"https://www.monblogdefille.com/blog/1-000-videos-et-12-ans-sur-you-tube-et-bientot-15-ans-de-blog/"}>www.monblogdefille.com</Link>
                        )}
                    </Paragraph>
                    <Paragraph>
                        {props.type === 'placement' && (
                            <Link
                                to={"it.purelei.com/discount/ciao-federicaa?redirect=&utm_source=instagram&utm_medium=influencer&utm_campaign=store-launch&utm_content=ciao-federicaa&utm_term=federicaa_spano"}>it.purelei.com/discount/ciao-federicaa?redirect=&utm_source=instagram&utm_medium=influencer&utm_campaign=store-launch&utm_content=ciao-federicaa&utm_term=federicaa_spano</Link>
                        ) || (
                            <React.Fragment>

                                <Text>25 minutes ago</Text>
                                <Text> - September 6, 2020 9:13 AM</Text>
                            </React.Fragment>

                        )}

                    </Paragraph>
                </Col>
                <Col span={1}>
                    <Button style={{
                        width: '2rem',
                        height: '2rem',
                        padding: '0'
                    }} shape="circle">
                        <Link to={ props.type === 'influencer' ? "#" : "/placement"} className="flex-center-center"
                          onClick={(e) => {
                            if (props.type === 'influencer') {
                              e.preventDefault()
                              setShowModal(true)
                            }
                          }
                          }
                        >
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
          <InfluencerDetailPopup showModal={showModal} setShowModal={setShowModal}/>
        </Card>
    )
}

export default CommonCard;
