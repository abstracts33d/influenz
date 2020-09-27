import React from 'react';

import {Link} from 'react-router-dom';

import {Avatar, Typography, Row, Col} from 'antd';

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
                <svg width="15" height="15" viewBox="0 0 15 15" fill="white"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.9286 7.73624C11.5047 8.56085 10.8735 9.26088 10.0969 9.7674C9.32037 10.2739 8.42529 10.5695 7.4998 10.625C6.57432 10.5695 5.67924 10.2739 4.90268 9.7674C4.12613 9.26088 3.49487 8.56085 3.07105 7.73624C1.59816 8.80736 0.567297 10.3797 0.172303 12.1575C0.146092 12.2788 0.156584 12.4051 0.202443 12.5205C0.248301 12.6358 0.327449 12.7348 0.429803 12.805C2.51034 14.2346 4.97542 15 7.4998 15C10.0242 15 12.4893 14.2346 14.5698 12.805C14.6722 12.7348 14.7513 12.6358 14.7972 12.5205C14.843 12.4051 14.8535 12.2788 14.8273 12.1575C14.4323 10.3797 13.4014 8.80736 11.9286 7.73624Z"
                    fill="white"/>
                  <path
                    d="M7.5 0C6.50544 0 5.55161 0.395088 4.84835 1.09835C4.14509 1.80161 3.75 2.75544 3.75 3.75C3.75 5.76375 5.325 8.75 7.5 8.75C9.675 8.75 11.25 5.76375 11.25 3.75C11.25 2.75544 10.8549 1.80161 10.1517 1.09835C9.44839 0.395088 8.49456 0 7.5 0V0Z"
                    fill="white"/>
                </svg>
              </div>

              <span className="right"><strong>969k Suscribers</strong></span>
            </div>
            <div className="btn btn-success">
              <div className="left">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="white"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.5 2.94564e-06C6.04048 -0.000218205 4.6126 0.425421 3.39142 1.22474C2.17024 2.02406 1.20881 3.16233 0.625 4.5L2.915 5.5C3.30432 4.60796 3.94553 3.84894 4.75998 3.31604C5.57443 2.78314 6.5267 2.49953 7.5 2.5C8.14996 2.50205 8.7931 2.63253 9.39246 2.88394C9.99182 3.13536 10.5356 3.50275 10.9925 3.965L8.59375 6.34L15 7.04875V2.94564e-06L12.7863 2.19C12.0939 1.4933 11.2701 0.940978 10.3627 0.565045C9.45525 0.189113 8.48222 -0.00294656 7.5 2.94564e-06Z"
                    fill="white"/>
                  <path
                    d="M7.5 12.5C6.85004 12.498 6.2069 12.3675 5.60754 12.1161C5.00818 11.8647 4.46441 11.4973 4.0075 11.035L6.40625 8.66001L0 7.95126V15L2.21375 12.81C2.90611 13.5067 3.72989 14.059 4.63732 14.435C5.54475 14.8109 6.51778 15.003 7.5 15C8.95952 15.0002 10.3874 14.5746 11.6086 13.7753C12.8298 12.976 13.7912 11.8377 14.375 10.5L12.085 9.50001C11.6957 10.3921 11.0545 11.1511 10.24 11.684C9.42557 12.2169 8.4733 12.5005 7.5 12.5Z"
                    fill="white"/>
                </svg>
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
