import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const LoginForm = ({show, handleClose}) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

 
  const handleChange = (e) => {
    // if (e.target.name === "email") {
    //   const isValid = validateEmail(e.target.value);
    //   if (!isValid) {
    //     setErrorMessage("Please enter a valid email");
    //   } else {
    //     setErrorMessage("");
    //   }
    // } else if (e.target.name === "password") {
    //   const pwLength = e.target.value.length;
    //   if (pwLength < 8) {
    //     setErrorMessage("Password must contain 8 or more characters");
    //   } else {
    //     setErrorMessage("");
    //   }
    // } 
  
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
    setErrorMessage("")

    if (!errorMessage) {
      console.log('Submit Form', formState);
      fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: formState.email,
          password: formState.password
        })
      })
      .then(res => {
        console.log(res.status)
        if(res.status == "200") {
          handleClose()
        } else {
          setErrorMessage("Login error")
        }
      })
      // .then(res => res.json())
      // .then(data => {
      //   console.log(data)
      //   //store into local storage
      //   //redirect to homepage

      //   if(data.message) {
      //     setErrorMessage(data.message)
      //   } else {
      //     handleClose();
      //   }
      // })
    } else  {
      // setErrorMessage("Please complete all required field")
    }

   
  };
  return (
    <>
         <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Login
          </Button>
        </Modal.Footer>
    </>
  );
};

export default LoginForm;