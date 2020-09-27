import React from 'react';

import {Link} from 'react-router-dom';

import {Avatar, Typography, Button, Table, Space, Checkbox} from 'antd';

const {Text} = Typography;
const {Column} = Table;

const InfluencerTable = (props) => {
    return (
        <Table dataSource={props.influencerTableData}>
            {props.inDiscover && (
                <Column title="#" dataIndex="key" key="key"/>
            )}
            <Column title="Name" dataIndex="infos" key="infos"
                    render={(text, record) => (
                        <Space size="middle">
                            <Checkbox></Checkbox>
                            <Avatar size={48}
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4-1Tw2E8d-uY-vctRbO2tc5JigsPBvGR7eA&usqp=CAU'/>
                            <Text>{record.infos}</Text>
                        </Space>
                    )}/>

            <Column title="Subscribers" dataIndex="subscribers" key="subscribers"
                    render={(text, record) => (
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
                            <Text>{record.subscribers}</Text>
                        </Space>
                    )}/>
            <Column title="Retention" dataIndex="retention" key="retention"
                    render={(text, record) => (
                        <Space size="middle">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="17" height="17" rx="3.5" fill="#5644F6" stroke="#5644F6"/>
                                <path
                                    d="M8.99984 4.00001C8.02682 3.99986 7.07491 4.28362 6.26078 4.8165C5.44666 5.34938 4.80571 6.10822 4.4165 7.00001L5.94317 7.66667C6.20272 7.07198 6.63019 6.56596 7.17316 6.2107C7.71612 5.85543 8.35097 5.66636 8.99984 5.66667C9.43314 5.66804 9.8619 5.75502 10.2615 5.92263C10.6611 6.09024 11.0236 6.33517 11.3282 6.64334L9.729 8.22667L13.9998 8.69917V4.00001L12.524 5.46001C12.0624 4.99554 11.5132 4.62732 10.9083 4.3767C10.3033 4.12608 9.65465 3.99804 8.99984 4.00001Z"
                                    fill="white"/>
                                <path
                                    d="M9 12.3333C8.5667 12.332 8.13793 12.245 7.73836 12.0774C7.33878 11.9098 6.97627 11.6648 6.67167 11.3567L8.27083 9.77334L4 9.30084V14L5.47583 12.54C5.93741 13.0045 6.48659 13.3727 7.09155 13.6233C7.6965 13.8739 8.34519 14.002 9 14C9.97301 14.0002 10.9249 13.7164 11.7391 13.1835C12.5532 12.6506 13.1941 11.8918 13.5833 11L12.0567 10.3333C11.7971 10.928 11.3696 11.4341 10.8267 11.7893C10.2837 12.1446 9.64886 12.3337 9 12.3333Z"
                                    fill="white"/>
                            </svg>
                            <Text>{record.retention}</Text>
                        </Space>
                    )}/>
            <Column title="Placements" dataIndex="placements" key="placements"
                    render={(text, record) => (
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

                            <Text>{record.placements}</Text>
                        </Space>
                    )}/>
            <Column title="Country" dataIndex="country" key="country"
                    render={(text, record) => (
                        <Space size="middle">
                            <Text>{record.country}</Text>
                        </Space>
                    )}/>

            <Column
                title=""
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                        {props.inDiscover && (
                            <Button type="primary">Add to list</Button>
                        )}
                        <Link to="influencer">
                            <svg width="12" height="4" viewBox="0 0 12 4" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6 3.5C6.82843 3.5 7.5 2.82843 7.5 2C7.5 1.17157 6.82843 0.5 6 0.5C5.17157 0.5 4.5 1.17157 4.5 2C4.5 2.82843 5.17157 3.5 6 3.5Z"
                                    fill="#BDBDBD"/>
                                <path
                                    d="M10.5 3.5C11.3284 3.5 12 2.82843 12 2C12 1.17157 11.3284 0.5 10.5 0.5C9.67157 0.5 9 1.17157 9 2C9 2.82843 9.67157 3.5 10.5 3.5Z"
                                    fill="#BDBDBD"/>
                                <path
                                    d="M1.5 3.5C2.32843 3.5 3 2.82843 3 2C3 1.17157 2.32843 0.5 1.5 0.5C0.671573 0.5 0 1.17157 0 2C0 2.82843 0.671573 3.5 1.5 3.5Z"
                                    fill="#BDBDBD"/>
                            </svg>
                        </Link>
                    </Space>
                )}
            />
        </Table>
    )
}

export default InfluencerTable
