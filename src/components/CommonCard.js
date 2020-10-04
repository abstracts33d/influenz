import {Avatar, Button, Card, Col, Row, Typography} from "antd";
import {Link} from "react-router-dom";
import React from "react";
import ArrowIcon from "../Arrow.js";
import {LinkIcon} from './SVG'

const {Text, Paragraph} = Typography;

function CommonCard(props) {
  return (
        <Card style={{margin: ".3rem 0"}} className="hover-card">
            <Row
                style={{alignItems: "center"}}
                justify="center">
                <Col span={4} style={{alignItems: 'center', display: 'flex'}}>
                    {props.type === 'placement' && (
                        <LinkIcon/>
                    ) || (
                        <Link to={"/influencer"}>
                            <Avatar size={64}
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4-1Tw2E8d-uY-vctRbO2tc5JigsPBvGR7eA&usqp=CAU'/>
                        </Link>
                    )}
                </Col>
                <Col span={19}>
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
                        <Link to="/placement" className="flex-center-center">
                            <ArrowIcon size={18} fill="white"/>
                        </Link>
                    </Button>
                </Col>
            </Row>
        </Card>
    )
}

export default CommonCard;
