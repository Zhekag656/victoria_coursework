import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from "../images/logo.png"

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-secondary">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Хрест Вікторії
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/about">Про сайт</Nav.Link>
                        <Nav.Link href="/gallery">Галерея картинок</Nav.Link>
                        <Nav.Link href="/news">Новини</Nav.Link>
                        <Nav.Link href="/contacts">Контакти</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
