import React from 'react';

import { Link } from 'react-router-dom';

import { Avatar, Card, Typography, Button, Image, Row, Col } from 'antd';
import { LinkOutlined, CloseCircleOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const ShopCard = (props) => {
  return (
    <Card style={{ margin: "3rem 0", position: 'relative' }}>
      <Row>
        <Col span="11">
          <div

            style={{
              width: '100%',
              height: 'calc(100% + 48px)',
              transform: 'translate(-24px, -24px)',
              position: 'absolute',
              top: 0,
              bottom: 0,
              background: 'url("https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png")',
              backgroundSize: 'cover'
            }}

          >
          </div>
        </Col>
        <Col span="13">
          <Row className="flex-between-center" style={{ marginBottom: '1rem' }}>
            <div>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{ marginRight: '0.5rem' }} />
              <Text>soniatlev.fr</Text>
            </div>

            <Text>FR</Text>
          </Row>
          <Row className="flex-between-center">
            <Text level={3}>6 placements</Text>
            <Text level={4}>shopify</Text>
          </Row>
          <Paragraph>
            <Text>Sonia TLEV</Text>
          </Paragraph>
          <Paragraph style={{ height: 100, maxHeight: 100 }}>
            <Text>Secret Teint Précieux, le Véritable Savon Masque au Lait de Chèvre: Formule exclus</Text>
          </Paragraph>
          <Row className="flex-between-center">
            <Button type="primary" size="large" style={{ float: 'right' }} >Add to a list</Button>
            <Button type="primary" size="large"><Link to="shop">More Informations</Link></Button>
          </Row>
        </Col>
      </Row>

    </Card>
  )
}

export default ShopCard