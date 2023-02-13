import React from 'react';
import Logo from '../logo/Logo';
import "./topbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Topbar() {
    return (
        <Navbar className="topbar">
            <Container className="topbarContainer">
                <Navbar.Brand href="#home" className="me-auto my-2 my-lg-0"><Logo /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end topLinks">
                    <Nav.Link style={{ color: "#404040" }}>My Booking</Nav.Link>
                    <Nav.Link className="blueFont">Login / Sign In</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
