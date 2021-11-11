import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Menubar.css';

const Menubar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="menubar">
            <Navbar className="py-4" bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand>
                        <NavLink
                            style={{
                                textDecoration: "none",
                                fontSize: "20px",
                                marginLeft: "15px",
                                color: "#234262"
                            }}
                            to="/home"
                        >
                            <img className="w-50" src="http://g5p6r6b9.stackpathcdn.com/travlio/wp-content/uploads/2020/08/logo.png" alt="" />
                        </NavLink>
                        {/* <img src={logo} alt="" /> */}


                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink
                                to="/home"
                                style={{
                                    textDecoration: "none",
                                    fontSize: "20px",
                                    marginLeft: "15px",
                                    color: "#234262"
                                }}
                                activeStyle={{

                                    color: "#FF5722"
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                style={{
                                    textDecoration: "none",
                                    fontSize: "20px",
                                    marginLeft: "15px",
                                    color: "#234262"
                                }}
                                activeStyle={{

                                    color: "#FF5722"
                                }}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/contact"
                                style={{
                                    textDecoration: "none",
                                    fontSize: "20px",
                                    marginLeft: "15px",
                                    color: "#234262"
                                }}
                                activeStyle={{

                                    color: "#FF5722"
                                }}
                            >
                                Contact
                            </NavLink>
                            {
                                user.email ?
                                    <button className="btn btn-outline-primary mx-3" onClick={logOut}>Logout</button>
                                    : <NavLink
                                        to="/login"
                                        style={{
                                            textDecoration: "none",
                                            fontSize: "20px",
                                            marginLeft: "15px",
                                            color: "tomato"
                                        }}
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "#3FCE92"
                                        }}
                                    >
                                        Login
                                    </NavLink>
                            }

                            {user.email && <span>Hello {user.displayName}</span>}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;