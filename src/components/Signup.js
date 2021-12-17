import {Button, Modal} from 'react-bootstrap'
import Form from "react-bootstrap/Form";
import React, { useState } from 'react';
import axios from 'axios';


const Signup = () =>{
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const send = () =>{
        handleClose2()

        let headersList = {
            "Content-Type": "application/json" 
           }
           
           let reqOptions = {
             url: "http://localhost:5000/users/signup",
             method: "POST",
             headers: headersList,
             data: JSON.stringify(
                {
                    username: name,
                    email:email,
                    password: password
                    
                }
             ),
           }
           
           axios.request(reqOptions).then(function (response) {
             console.log(response.data);
           })
    }
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function validateForm2() {
        return name.length > 0  && email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }



return(
    <div>
        <li className="nav-item">
            <button  className="nav-link" onClick={handleShow2}>Sign Up</button>
        </li>

        <Modal show={show2} onHide={handleClose2}>

            <Modal.Header closeButton>
                <Modal.Title><h2 variant="secondary" className="mt-1">Sign up</h2></Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="form-group">
                    <Form onSubmit={handleSubmit}>

                        <Form.Group size="lg" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            autoFocus
                            type="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        </Form.Group>

                        <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
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
                <Button variant="secondary" onClick={send} disabled={!validateForm2()}>
                Sign Up
                </Button>
                <Button variant="primary" onClick={handleClose2}>
                Close
                </Button>
            </Modal.Footer>

        </Modal>
    </div>
)}

export default Signup;