import React from 'react';

import InfluencerListLogo from '../../assets/influencer-list.svg'
import ShopListLogo from '../../assets/shop-list.svg'

import {Avatar, Card, Typography, Button, Space} from 'antd';

const {Title, Text} = Typography;

const ListSider = (props) => {
    return (
        <div id="ListSider">
            <Card style={{margin: "3rem 0"}}>
                <div style={{flexDirection: "column"}} className="flex-center-start">
                    <img style={{transform: 'translate(0px, calc(-3rem - 24px))', position: 'absolute'}}
                         src={props.name === 'shop' ? ShopListLogo : InfluencerListLogo} alt=""/>
                    <Title level={4} className="text-center" style={{paddingTop: '6rem'}}>Create a new {props.name}s
                        list</Title>
                    <Button type="danger">Add a new list</Button>
                </div>
            </Card>
            <Title level={3}>My Lists</Title>

            <Card style={{margin: "1rem 0"}}>
                <div className="flex-center-start" style={{width: '100%', flexDirection: 'row'}}>
                    <Space size="middle">

                        <div className="avatars-stacked">
                            <Avatar style={{border: 'none'}}
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4-1Tw2E8d-uY-vctRbO2tc5JigsPBvGR7eA&usqp=CAU'/>
                            <Avatar style={{border: 'none'}}
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4-1Tw2E8d-uY-vctRbO2tc5JigsPBvGR7eA&usqp=CAU'/>
                            <Avatar style={{border: 'none'}}
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4-1Tw2E8d-uY-vctRbO2tc5JigsPBvGR7eA&usqp=CAU'/>
                        </div>

                        <Text>Beauty</Text>
                    </Space>
                    <div style={{flexGrow: '1'}} className="flex-end-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9 10.836C9 10.232 8.735 9.657 8.262 9.282C7.539 8.708 6.285 8 4.5 8C2.715 8 1.461 8.708 0.738 9.282C0.265 9.657 0 10.232 0 10.836V12H9V10.836Z"
                                fill="#6BD5A4"/>
                            <path
                                d="M4.5 7C5.88071 7 7 5.88071 7 4.5C7 3.11929 5.88071 2 4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88071 3.11929 7 4.5 7Z"
                                fill="#6BD5A4"/>
                            <path
                                d="M11.5 7C12.8807 7 14 5.88071 14 4.5C14 3.11929 12.8807 2 11.5 2C10.1193 2 9 3.11929 9 4.5C9 5.88071 10.1193 7 11.5 7Z"
                                fill="#6BD5A4"/>
                            <path
                                d="M15.262 9.282C14.539 8.708 13.285 8 11.5 8C10.939 8 10.437 8.075 9.98096 8.189C10.625 8.909 11 9.836 11 10.836V12H16V10.836C16 10.232 15.735 9.657 15.262 9.282Z"
                                fill="#6BD5A4"/>
                        </svg>
                        <Text type='success' strong style={{paddingLeft: '.3rem'}}>29</Text>
                    </div>
                </div>

            </Card>
        </div>
    )
}

export default ListSider
