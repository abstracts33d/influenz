import React from 'react';

import {Typography, Row, Col} from 'antd';

import SubNav from "../components/SubNav.js"
import ListSider from "../components/lists/ListSider";

import ShopTable from '../components/ShopTable'

const { Text} = Typography;
const shopTableData = [
    {
        key: 1,
        infos: "Vicky c",
        website: "nicky-c.com",
        country: 'FR',
        placements: "37",
    },
    {
        key: 1,
        infos: "Vicky c",
        website: "nicky-c.com",
        country: 'FR',
        placements: "37",
    },
];

function ShopList() {
    return (
        <div id="ShopList">
            <SubNav title="Shops"/>
            <Row style={{alignItems: "baseline"}}>

            </Row>
            <Row>
                <Col span={16} push={1}>
                    {shopTableData.length && (
                        <React.Fragment>
                            <div>
                                <ShopTable shopTableData={shopTableData}/>
                            </div>
                        </React.Fragment>
                    ) || (
                        <React.Fragment>
                            <Text>Monitor your competitors, analyze a group of stores or collect the products that
                                interest you!</Text>
                        </React.Fragment>
                    )}
                </Col>
                <Col span={5} push={2}>
                    <ListSider name="shop"/>
                </Col>
            </Row>
        </div>
    )
}

export default ShopList;
