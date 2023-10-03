// import { useRef,useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {FiPhoneCall} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import logo from '../../../../assets/logo.png';
import "./Style.css";

export const NavBar= () => {
  

  return (
    <>
        <div className="nav-top">
        <p className="red-top"> <span><FiPhoneCall/></span> CALL US: +1.512.782.8523 <span><FiPhoneCall/></span> CALL US: +1.737.587.4010</p>
        </div>
        <header>
            <Navbar expand="lg" >
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt='log' className="logo"/>
                    </Navbar.Brand>
                     <Navbar.Toggle aria-controls="basic-navbar-nav"/> 
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <NavLink to='/'><p className='links'>Home</p></NavLink>
                        </Nav.Link>
                        <Nav.Link className='links'>
                            <NavLink to='/mywork'><p className='links'>My work</p></NavLink>
                        </Nav.Link>
                        <Nav.Link className='links'>
                            <NavLink to='/about'><p className='links'>About</p></NavLink>
                        </Nav.Link>
                        <Nav.Link className='links'>
                            <NavLink to='/contact'><p className='links'>Contact</p></NavLink>
                        </Nav.Link>
                        <Nav.Link className='links'>
                            <NavLink to='/galery'><p className='links'>Galery</p></NavLink>
                        </Nav.Link>

                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    </>
  )
}
