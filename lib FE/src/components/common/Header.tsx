import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap'
// import './Header.css'

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand='lg'
                // className='navbar'
            >
            
        
                <NavbarBrand href='/' 
                >
                    <h2 >pushtakalaya</h2>
                </NavbarBrand>
                {/* <NavbarToggler aria-controls="basic-navbar-nav" /> */}
                {/* <Collapse > */}
                <Nav className="">
                    {/* <NavItem> */}
                    <NavLink to="/" exact className="nav-link" >
                        Home
                        </NavLink>
                    {/* </NavItem> */}
                    {/* <NavItem> */}
                    <NavLink to="/books" className="nav-link" >
                        Books
                        </NavLink>
                    {/* </NavItem> */}
                    {/* <NavItem> */}
                    <NavLink to="/e-Library" className="nav-link" >
                        E-Library
                        </NavLink>
                    {/* </NavItem> */}
                    {/* <NavItem> */}
                    <NavLink to="/members" className="nav-link" >
                        Members
                        </NavLink>
                    {/* </NavItem> */}
                </Nav>
                {/* </Collapse> */}
            </Navbar>
        );
    }
}

export default Header;