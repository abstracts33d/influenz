import React from 'react';

import {Link} from 'react-router-dom';

import {Avatar, Typography, Button, Table, Space, Checkbox} from 'antd';

const {Text} = Typography;
const {Column} = Table;

const ShopTable = (props) => {
    return (
        <Table dataSource={props.shopTableData}>
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


            <Column title="Website" dataIndex="website" key="website"
                    render={(text, record) => (
                        <Space size="middle">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="18" height="18" rx="4" fill="#5644F6"/>
                                <path
                                    d="M6.46984 11.514C6.53934 11.5838 6.62193 11.6392 6.71288 11.6769C6.80384 11.7147 6.90135 11.7342 6.99984 11.7342C7.09833 11.7342 7.19584 11.7147 7.2868 11.6769C7.37775 11.6392 7.46034 11.5838 7.52984 11.514L11.5298 7.514C11.6015 7.44485 11.6587 7.36211 11.698 7.27063C11.7374 7.17915 11.7581 7.08074 11.759 6.98116C11.7599 6.88157 11.741 6.78281 11.7033 6.69062C11.6657 6.59843 11.61 6.51466 11.5396 6.44421C11.4693 6.37376 11.3855 6.31803 11.2934 6.28027C11.2012 6.24252 11.1025 6.2235 11.0029 6.22431C10.9033 6.22513 10.8049 6.24578 10.7134 6.28504C10.6218 6.3243 10.5391 6.3814 10.4698 6.453L6.46984 10.453C6.40014 10.5226 6.34486 10.6053 6.30714 10.6964C6.26942 10.7874 6.25 10.885 6.25 10.9835C6.25 11.082 6.26942 11.1796 6.30714 11.2706C6.34486 11.3616 6.40014 11.4443 6.46984 11.514Z"
                                    fill="white"/>
                            </svg>
                            <Text>{record.website}</Text>
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
            <Column title="Country" dataIndex="country" key="country"/>

            <Column
                title=""
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                        {props.inDiscover && (
                            <Button type="primary">Add to list</Button>
                        )}
                        <Link to="shop">
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

export default ShopTable
