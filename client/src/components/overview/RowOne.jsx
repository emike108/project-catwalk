import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import StyleInfo from './StyleInfo.jsx'
import ImageGallery from './ImageGallery.jsx'


const RowOne = () => (

  <Container>
    <Row className="ov-main-row1">
      <ImageGallery />
      <StyleInfo />
    </Row>
  </Container>
)

export default RowOne;