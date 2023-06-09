import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Nev = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Taza Khabar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            
            <NavDropdown title="Category" id="navbarScrollingDropdown">
             <LinkContainer to="/"><NavDropdown.Item  >General</NavDropdown.Item></LinkContainer> 
             <LinkContainer to="/health"><NavDropdown.Item  >Health</NavDropdown.Item></LinkContainer> 
             <LinkContainer to="/science"><NavDropdown.Item  >Science</NavDropdown.Item></LinkContainer> 
             <LinkContainer to="/sports"><NavDropdown.Item  >Sports</NavDropdown.Item></LinkContainer> 
             <LinkContainer to="/business"><NavDropdown.Item  >Business</NavDropdown.Item></LinkContainer> 
             <LinkContainer to="/entertainment"><NavDropdown.Item  >Entertainment</NavDropdown.Item></LinkContainer> 
             <LinkContainer to="/technology"><NavDropdown.Item  >Technology</NavDropdown.Item></LinkContainer> 
              
              
            </NavDropdown>
          </Nav>
    
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Nev
