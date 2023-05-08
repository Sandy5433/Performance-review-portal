import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { validateEmail } from "../utils/helpers";
import Auth from "../utils/auth";

const SignupForm = ({show, handleClose}) => {

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",

  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else if (e.target.name === "password") {
      const pwLength = e.target.value.length;
      if (pwLength < 4) {
        setErrorMessage("Password must contain more than 4 characters");
      } else {
        setErrorMessage("");
      }
    } else if (e.target.name === "firstName") {
      const validFirstName = e.target.value.trim();
      if (!validFirstName) {
        setErrorMessage("First name is required");
      } else {
        setErrorMessage("");
      }
    } else if (e.target.name === "lastName") {
      const validLastName = e.target.value.trim();
      if (!validLastName) {
        setErrorMessage("Last name is required");
      } else {
         setErrorMessage("");
      }
    } 
    console.log(formState)
    if (!errorMessage) {
      setFormState({
      ...formState,
      [e.target.name]: e.target.value
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errorMessage) {
      console.log('Submit Form', formState);
      fetch("/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          password: formState.password
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // Auth.login(token)
        //store into local storage
        //redirect to homepage
        handleClose();
      })
    } else  {
      setErrorMessage("Please complete all required field")
    }

   
  


    // console.log(formState)

   
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
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last name"
              autoFocus
              onChange={handleChange}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              autoFocus
              onChange={handleChange}

            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Your password"
              autoFocus
              onChange={handleChange}

            />
          </Form.Group>
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} closeButton>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Sign Up
        </Button>
      </Modal.Footer>
      {/* </Modal> */}
    </>
  );
};

export default SignupForm;
