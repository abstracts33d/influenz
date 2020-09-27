import React from 'react';

import { Typography, Row, Col  } from 'antd';

const { Title } = Typography;

const SubNav = (props) => {
  return (
    <div id="SubNav" style={{ marginBottom: "3rem"}}>
        <Row style={{ marginTop: "1rem"}}>
            <Col span={11} push={1}>
              <Title level={3}>{props.title}</Title>
            </Col>
            <Col span={11} push={1}>
              <div className="filters">
                {props.children}
              </div>
            </Col>
        </Row>
    </div>
  )
}


export default SubNav
