import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { Modal, Card } from 'react-bootstrap';
import img1 from '../images/img1.png'


const Homepage = ({setPage, showModalLogin, showModalSignup}) => {

  return (
    <>
    <div className="flex-container">
    <Card className="card-tile" onClick={() => {setPage("New")}}>
      <Card.Img className="card-image" src={img1} alt="add-new-employee" />
      <Card.ImgOverlay className='title'>
        <Card.Title className="card-title">Add New Employee</Card.Title>
      </Card.ImgOverlay>
    </Card>
    <Card className="card-tile" onClick={() => {setPage("Search")}}>
      <Card.Img className="card-image" src={img1} alt="search" />
      <Card.ImgOverlay className='title'>
        <Card.Title>Search</Card.Title>
      </Card.ImgOverlay>
    </Card>
    <Card className="card-tile" onClick={() => {setPage("Report")}}>
      <Card.Img className="card-image" src={img1} alt="performance-report" />
      <Card.ImgOverlay className='title'>
        <Card.Title>Performance Report</Card.Title>
      </Card.ImgOverlay>
    </Card>
    <Card className="card-tile">
      <Card.Img className="card-image" src={img1} alt="login-signup" />
      <Card.ImgOverlay className='title'>
        <Card.Title><button onClick={showModalLogin}> Login</button> | <button onClick={showModalSignup}>Signup</button></Card.Title>
      </Card.ImgOverlay>
    </Card>
    </div>

    </>
  );
}

export default Homepage;