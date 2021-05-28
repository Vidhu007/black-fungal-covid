import React from 'react'
import "./Header.css"
import { Navbar, Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
function Header() {
    return (
        <div className="header">
  <Navbar bg="dark" variant="dark">            
  <Navbar.Brand > <h1>Black Fungal </h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home" className="header__tags">Home</Nav.Link>
      <Nav.Link href="#home" className="header__tags">Blogs</Nav.Link>
      <Nav.Link href="#home" className="header__tags">News</Nav.Link>
      <Nav.Link href="#home" className="header__tags">Maps</Nav.Link>
      <NavDropdown title="Fungal Type" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Black</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Yellow</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">White</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Covid</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="success">Success</Button>{' '}
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header
