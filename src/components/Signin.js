import {Button, Modal} from 'react-bootstrap'
import Form from "react-bootstrap/Form";
import React, { useState } from 'react';


const Signin = () =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }


return(<div>
    <li className="nav-item">
        <button  className="nav-link" onClick={handleShow}>Sign In</button>
    </li>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
    <Modal.Title>Login</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div className="Login">
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </Form.Group>
        </Form>
        </div>
        
    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={handleClose} disabled={!validateForm()}>
    Sign In
    </Button>
    <Button variant="primary" onClick={handleClose}>
    Close
    </Button>
    </Modal.Footer>
    </Modal>
    </div>
)}

export default Signin;