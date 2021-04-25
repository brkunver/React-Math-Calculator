import React from 'react';
import { ListGroup } from "react-bootstrap";
import {Link} from 'react-router-dom'

const SideMenu = () => {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li">
      <Link to="/hypotenuse">Find Hypotenuse</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li">
      <Link to="/circle-area">Area of a circle</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li">
      <Link to="/sphere-area">Area of a sphere</Link>
      </ListGroup.Item>
      
    </ListGroup>
  )
}

export default SideMenu
