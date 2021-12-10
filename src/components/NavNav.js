import{Link} from "react-router-dom";
// Joa
import {Button, Modal} from 'react-bootstrap'
import React, { useState } from 'react';



const NavNav = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light ">
<a className="navbar-brand" href="/">Ciclo 5</a>
<ul className="navbar-nav m-auto">
    <li className="nav-item active">
        <Link to="/" className="nav-link">Home<span class="sr-only"></span> </Link>
    </li>
    <li className="nav-item">
        <Link to="/about" className="nav-link">About</Link>
    </li>
    <li className="nav-item">
        <Link to="/contact" className="nav-link">Contact</Link>
    </li>
    <li className="nav-item">
        <Link to="/service" className="nav-link">Service</Link>
    </li>
</ul>			    
<ul className="navbar-nav ml-auto">
    <li>
        <Button variant="primary" onClick={handleShow}>
            Launch demo modal
        </Button>
    </li>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    <li className="nav-item">
        <a href="" role="button" className="nav-link" data-toggle="modal">Sign in</a>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/register">Sign up</Link>
    </li>
</ul>
</nav>

 )};

export default NavNav;