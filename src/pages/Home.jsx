import React from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import SideMenu from '../components/SideMenu';
const Home = () => {
  return (
    <div>
      <Row>
        <Col lg="6">
          <Jumbotron>
            <h2>Welcome to the Math Road</h2>
            <p> Pick a Calculator From Side Menu </p>
          </Jumbotron>
        </Col>
        <Col lg="4"><SideMenu/></Col>
      </Row>
    </div>
  )
}

export default Home
