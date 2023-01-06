

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link"
//import { Link } from 'react-router-dom';
//import { Switch, Route, LinkTo } from 'react-router-dom';

export default function Header() {
    return (
      <div>
        <Navbar expand="lg" className="navCustom">
          <Container fluid>         
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/todos" className="nav-link">Todo List</Link>
                <Link href="/slider" className="nav-link">Slider</Link>
                <Link href="/masonry" className="nav-link">Masonry</Link>
                <Link href="/contato" className="nav-link">Contato</Link>
                <Link href="/upload" className="nav-link">Upload</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }