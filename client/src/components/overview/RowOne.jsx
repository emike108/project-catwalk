/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import StyleInfo from './StyleInfo.jsx'
import MyGallery from './MyGallery.jsx'


const RowOne = ({ productInfo, styleInfo }) => (

  <Container>
    <Row className="ov-main-row1" data-testid="ov-main-row1">
      <MyGallery styleInfo={styleInfo}/>
      <StyleInfo productInfo={productInfo} styleInfo={styleInfo}/>
    </Row>
  </Container>
)

export default RowOne;