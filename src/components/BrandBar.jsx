import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../img/rubik.png';
import { Link } from 'react-router-dom';
const BrandBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Link to="/" >
          <Navbar.Brand >
            <img
              alt=""
              src={logo}
              width="32"
            />{' '}
      Math Road
    </Navbar.Brand>
        </Link>
        <Nav>
        <Nav.Link href="https://github.com/brkunver">Github</Nav.Link>

        </Nav>

      </Navbar>
    </div>
  )
}

export default BrandBar
