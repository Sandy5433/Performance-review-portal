import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { Modal, Card } from 'react-bootstrap';
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.jpg'

const Homepage = ({setPage, showModalLogin, showModalSignup}) => {

  return (
    <>
    <div className="flex-container">
    <Card className="card-tile" onClick={() => {setPage("New")}}>
      <Card.Img style={{ width: "280px", height: "200px" }} className="card-image" src={img1} alt="add-new-employee" />
      <Card.ImgOverlay className='title'>
        <Card.Title className="card-title">Add New Employee</Card.Title>
      </Card.ImgOverlay>
    </Card>
    <Card className="card-tile" onClick={() => {setPage("Search")}}>
      <Card.Img style={{ width: "280px", height: "200px" }} className="card-image" src={img2} alt="search" />
      <Card.ImgOverlay className='title'>
        <Card.Title>Search</Card.Title>
      </Card.ImgOverlay>
    </Card>
    <Card className="card-tile" onClick={() => {setPage("Report")}}>
      <Card.Img style={{ width: "280px", height: "200px" }} className="card-image" src={img3} alt="performance-report" />
      <Card.ImgOverlay className='title'>
        <Card.Title>Performance Report</Card.Title>
      </Card.ImgOverlay>
    </Card>
    <Card className="card-tile">
      <Card.Img style={{ width: "280px", height: "200px" }} className="card-image" src={img4} alt="login-signup" />
      <Card.ImgOverlay className='title'>
        <Card.Title><button onClick={showModalLogin}> Login</button> | <button onClick={showModalSignup}>Signup</button></Card.Title>
      </Card.ImgOverlay>
    </Card>
    </div>

    </>
  );
}

export default Homepage;