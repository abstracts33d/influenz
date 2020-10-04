import React from 'react';

import {Link} from 'react-router-dom';

import {Avatar, Typography, Row, Col} from 'antd';
import {CloseIcon,RetentionIcon,PlacementIcon} from './SVG'

const {Text, Paragraph} = Typography;

function InfluencerDetailPopup(props) {
  return (
    <div id="InfluencerDetailPopup" style={{display: `${props.showModal ? 'block' : 'none'}`}}>
      <div className="modal"
           style={{backgroundImage: "url(https://i.ebayimg.com/images/g/wPIAAOSw-09dXGsS/s-l300.jpg)"}}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
          onClick={(e) => {
          props.setShowModal(false)
        }}>
        <path
          d="M15 0C12.0333 0 9.13319 0.879735 6.66645 2.52796C4.19972 4.17618 2.27713 6.51886 1.14181 9.25975C0.00649929 12.0006 -0.290551 15.0166 0.288228 17.9264C0.867006 20.8361 2.29562 23.5088 4.3934 25.6066C6.49119 27.7044 9.16394 29.133 12.0737 29.7118C14.9834 30.2906 17.9994 29.9935 20.7403 28.8582C23.4811 27.7229 25.8238 25.8003 27.472 23.3336C29.1203 20.8668 30 17.9667 30 15C29.9885 11.0253 28.4044 7.2167 25.5939 4.40615C22.7833 1.5956 18.9747 0.0115424 15 0V0ZM21.1875 19.42L19.42 21.1875L15 16.7675L10.58 21.1875L8.81251 19.42L13.2325 15L8.81251 10.58L10.58 8.8125L15 13.2325L19.42 8.8125L21.1875 10.58L16.7675 15L21.1875 19.42Z"
          fill="white"/>
      </svg>

        <div className="content">
             <Row>
          <Col span={6}>
            <Avatar size={80}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4-1Tw2E8d-uY-vctRbO2tc5JigsPBvGR7eA&usqp=CAU'/>
          </Col>
          <Col span={18}>
            <Paragraph>
              <Link to={"/influencer"}><Text strong>Hélène Legastel</Text></Link>
            </Paragraph>
            <Paragraph>
              <Text>25 minutes ago</Text>
              <Text> - September 6, 2020 9:13 AM</Text>
            </Paragraph>
          </Col>

        </Row>


        <Row>
          <div className="split-btn small">
            <div className="btn btn-warning">
              <div className="left">
                <PlacementIcon/>
              </div>

              <span className="right"><strong>969k Suscribers</strong></span>
            </div>
            <div className="btn btn-success">
              <div className="left">
                <RetentionIcon/>
              </div>

              <span className="right"><strong>35,7% retention</strong></span>
            </div>
          </div>
        </Row>
        </div>
      </div>
    </div>
  )
}

export default InfluencerDetailPopup;
