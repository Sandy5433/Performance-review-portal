import './App.css';
import Homepage from './pages/homepage';
import Navigation from './components/Navigation';
import Report from './pages/report';
import Search from './pages/search';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import { Modal, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [showSignup, setShowSignup] = useState(false);
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [currentPage, setCurrentPage] = useState("Homepage")

  function renderPage () {
    if(currentPage == "Homepage") {
      return <Homepage setPage={setCurrentPage} showModalLogin={handleShowLogin} showModalSignup={handleShowSignup}/>
    } else if(currentPage == "Report") {
      return <Report/>
    } else if(currentPage == "Search") {
      return <Search />
    } 
  }

  return (
    <div>
      <Navigation setPage={setCurrentPage} handleShow={handleShowLogin}/>
      
      <Container>
        {renderPage()}
      </Container>

      {console.log(showSignup)}
      <Modal show={showSignup} onHide={handleCloseSignup}>
      <SignupForm show={showSignup} handleClose={handleCloseSignup}/>
      </Modal>
      <Modal show={showLogin} onHide={handleCloseLogin}>
      <LoginForm show={showLogin} handleClose={handleCloseLogin}/>
      </Modal>
    </div>
  );
}

export default App;
