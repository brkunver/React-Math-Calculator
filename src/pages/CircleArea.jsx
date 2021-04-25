import React from 'react';
import SideMenu from '../components/SideMenu';
import { Row, Col, Alert, Form, Button } from "react-bootstrap";
import { useState } from "react"

const CircleArea = () => {
  const [radius, setradius] = useState(null)
  const [alert, setalert] = useState("Please Enter radius of a circle")
  const [alertColor, setalertColor] = useState("info")

  let calculate = () => {
    if (radius == null || radius <= 0) {
      setalert("Please enter valid value")
      setalertColor("warning")
    }
    else {
      let area = Math.PI * Math.pow(radius , 2)
      setalert(`Area is ${area}`)
      setalertColor("success")
    }
  }

  return (
    <div className="pages">
      <Row>
        <Col lg="6" >
          <h3>Find area of a circle</h3>
          <Alert variant={alertColor}>{alert}</Alert>
          <Row>
            <Col md={{ span: 5, offset: 1 }} >
              <Form.Group >
                <Form.Control onChange={(e) => setradius(e.target.value)} type="number" placeholder="Radius" />
              </Form.Group>
            </Col>
            <Col md={{ span: 5, offset: 1 }} xs={{ span: 1, offset: 4 }} >
              <Button className="calculators" onClick={calculate} variant="primary">Calculate</Button>
            </Col>
          </Row>
        </Col>
        <Col lg="4"><SideMenu /></Col>
      </Row>
    </div>
  )
}

export default CircleArea;