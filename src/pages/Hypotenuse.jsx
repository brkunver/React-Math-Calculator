import React from 'react';
import SideMenu from '../components/SideMenu';
import { Row, Col, Alert, Form, Button } from "react-bootstrap";
import { useState } from "react"

const Hypotenuse = () => {
  const [sideA, setsideA] = useState(null)
  const [sideB, setsideB] = useState(null)
  const [alert, setalert] = useState("Please Enter two sides of right triangle")
  const [alertColor, setalertColor] = useState("info")
  let calculate = () => {
    if (sideA == null || sideB == null || sideA <= 0 || sideB <= 0) {
      setalert("Please enter valid values")
      setalertColor("warning")
    }
    else {
      let hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))
      setalert(`Hypotenuse is ${hypotenuse}`)
      setalertColor("success")
    }

  }

  return (
    <div>
      <Row>
        <Col lg="6">
          <h3>Find Hypotenuse</h3>
          <Alert variant={alertColor}>{alert}</Alert>
          <Row>
            <Col md={{ span: 3, offset: 1 }} >
              <Form.Group >
                <Form.Control onChange={(e) => setsideA(e.target.value)} type="number" placeholder="Side A" />
              </Form.Group>
            </Col>
            <Col md={{ span: 3, offset: 1 }} >
              <Form.Group >
                <Form.Control onChange={(e) => setsideB(e.target.value)} type="number" placeholder="Side B" />
              </Form.Group>
            </Col>
            <Col md={{ span: 3, offset: 1 }} xs={{ span: 1, offset: 4 }} >
              <Button onClick={calculate} variant="primary">Calculate</Button>
            </Col>
          </Row>
        </Col>
        <Col lg="4"><SideMenu /></Col>
      </Row>
    </div>
  )
}

export default Hypotenuse;
