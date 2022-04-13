import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Banner from '../Banner/Banner';

const Header = () => {
   const{user,logOut}=useAuth()
   const {_id}=useParams()
   console.log(user,logOut)
    return (
        <div>
            
            <Navbar bg="light" variant="light">
    <Container  >
    <Navbar.Brand >Travel With Us See the world</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home" active>Home</Nav.Link>
      <Nav.Link  as={Link} to="/myorder" active>My Order</Nav.Link>
     
    </Nav>
    <Navbar>

  <Container>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    {user?.email?
     <Button onClick={logOut} variant="outline-primary">log out</Button>:
      <Nav.Link as={Link}  to="/login"  >Login</Nav.Link>
        }

  </Container>
  
</Navbar>
    </Container>
  </Navbar>

  <Banner></Banner>
        </div>
    );
};

export default Header;