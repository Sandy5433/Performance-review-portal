import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { validateEmail } from "../utils/helpers";
import Auth from '../utils/auth';

const SignupForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if  (!isValid) {
            setErrorMessage('Please enter a valid email');
        } else {
            setErrorMessage('')
        }
    } else if (e.target.name === 'password') {
        const pwLength = e.target.value.length
        var password1 = e.target.value
        if (pwLength < 8) {
            setErrorMessage('Password must contain 8 or more characters');
        } else {
            setErrorMessage('')
        }
    } else if (e.target.name === 'password2') {
        const password2 = e.target.value
        if (password1 !== password2) {
            setErrorMessage('Passwords do not match');
        } else {
            setErrorMessage('')
        }
    } else if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required`);
        } else {
            setErrorMessage('')
        }
    if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }
  };
    

  return (
    <>

      {/* <Modal show={show} onHide={handleClose}> */}
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First name:</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First name"
                // defaultValue={firstName}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Your password"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInpit1"
            >
              <Form.Label>Re-type Password</Form.Label>
              <Form.Control 
                type="password"
                name="password2"
                placeholder="Your password"
                autoFocus />
            </Form.Group>
            <div>
            <p className="error-text">{errorMessage}</p>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sign Up
          </Button>
        </Modal.Footer>
      {/* </Modal> */}
    </>
  );
};

export default SignupForm;