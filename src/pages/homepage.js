import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { Modal, Card } from 'react-bootstrap';
import img1 from '../images/img1.png'
// import Link from

const Homepage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
    <Card className="bg-dark text-white">
      <Card.Img src={img1} alt="add-new-employee" />
      <Card.ImgOverlay>
        <Card.Title>Add New Employee</Card.Title>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white">
      <Card.Img src={img1} alt="search" />
      <Card.ImgOverlay>
        <Card.Title>Search</Card.Title>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white">
      <Card.Img src={img1} alt="performance-report" />
      <Card.ImgOverlay>
        <Card.Title>Performance Report</Card.Title>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white">
      <Card.Img src={img1} alt="login-signup" />
      <Card.ImgOverlay>
        <Card.Title><button onClick={handleShow}> Login</button> | <button onClick={handleShow}>Signup</button></Card.Title>
      </Card.ImgOverlay>
    </Card>
    {console.log(show)}
    <Modal show={show} onHide={handleClose}>
      <SignupForm/>
      {/* <LoginForm/> */}
   
      
    </Modal>
    </>
  );
}

export default Homepage;