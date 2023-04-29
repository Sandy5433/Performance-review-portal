import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { Modal, Card } from 'react-bootstrap';
import img1 from '../images/img1.png'
// import Link from

const Homepage = () => {
  const [showSignup, setShowSignup] = useState(false);
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  

  return (
    <>
    <Card className="w3-card-4 bg-dark text-white">
      <Card.Img className="tiles" src={img1} alt="add-new-employee" />
      <Card.ImgOverlay>
        <Card.Title>Add New Employee</Card.Title>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white">
      <Card.Img className="tiles" src={img1} alt="search" />
      <Card.ImgOverlay>
        <Card.Title>Search</Card.Title>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white">
      <Card.Img className="tiles" src={img1} alt="performance-report" />
      <Card.ImgOverlay>
        <Card.Title>Performance Report</Card.Title>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white">
      <Card.Img className="tiles" src={img1} alt="login-signup" />
      <Card.ImgOverlay>
        <Card.Title><button onClick={handleShowLogin}> Login</button> | <button onClick={handleShowSignup}>Signup</button></Card.Title>
      </Card.ImgOverlay>
    </Card>
    {console.log(showSignup)}
    <Modal show={showSignup} onHide={handleCloseSignup}>
      <SignupForm show={showSignup} handleClose={handleCloseSignup}/>
    </Modal>
    <Modal show={showLogin} onHide={handleCloseLogin}>
      <LoginForm show={showLogin} handleClose={handleCloseLogin}/>
    </Modal>

    </>
  );
}

export default Homepage;