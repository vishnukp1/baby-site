import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
import {  ShoppingCart, User } from 'phosphor-react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate, } from 'react-router-dom';
import { babyshop } from '../context';



function NavbarTop() {
  const data=useContext(babyshop)
  const {state}=data
 const navigate = useNavigate()

  return (
    <div> 
      <header>
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  onClick={() => navigate("/babydress")}>Babydress</Nav.Link>
            <Nav.Link onClick={() => navigate("/babytoys")}>Babytoys</Nav.Link>
            <Nav.Link onClick={() => navigate("/babyfood")}>Babyfood</Nav.Link>
            
          </Nav>
         < Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>

          <Nav>
         <ShoppingCart size={32}  onClick={() => navigate('/cartitem')} />
          <User  onClick={() => navigate("/signup")} size={32} />
          </Nav>
      
    
        
        </Container>
        
      </Navbar>
     
   
      </header>
   
     
    </div>
  )
}

export default NavbarTop;