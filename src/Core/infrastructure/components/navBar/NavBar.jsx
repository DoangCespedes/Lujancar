// import { useRef,useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand>
                        <NavLink to='/'><img src={logo} alt='log' className="logo"/></NavLink>
                    </Navbar.Brand>
                     <Navbar.Toggle aria-controls="basic-navbar-nav"/> 
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <NavLink to='/'><p className='links'>Home</p></NavLink>
                        </Nav.Link>
                        <Nav.Link className='links'>
                            <NavLink to='/contact'><p className='links'>Contact</p></NavLink>
                        </Nav.Link>
                        <Nav.Link className='links'>
                            <NavLink to='/galery'><p className='links'>Galery</p></NavLink>
                        </Nav.Link>
                        <Nav.Link className='links'>
                            <NavLink to='/mywork'><p className='links'>My work</p></NavLink>
                        </Nav.Link>
                        <Nav.Link className='links'>
                            <NavLink to='/about'><p className='links'>About</p></NavLink>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    </>
  )
}
