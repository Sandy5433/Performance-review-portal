import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Auth from '../utils/auth';

const Report = ({ setPage }) => {
  const [reportData, setReportData] = useState({
    name: "",
    pro: "",
    con: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData({ ...reportData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    const createReport = ({name, pro, con}) => {
      return fetch("/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, pro, con}),
      });
    };

    try {
      const response = await createReport(reportData);
      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      debugger
      const data = await response.json();
      console.log(data);
      // Auth.login(token);
    } catch (err) {
      console.error(err);
    }

    setReportData({
        name: '',
        pro: '',
        con: '',
    })
    
    // if (!errorMessage) {
    //   console.log('Submit Form', formState);
    // fetch("/api/report", {
    //     method: 'POST',
    //     body: JSON.stringify({
    // name: formState.name,
    // pro: formState.pro,
    // con: formState.con
    //      }),
    //     headers: {
    //       "Content-Type": 'application/json',
    //     },
    //   })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //   })

    // }
  };

  return (
    <>
      <h5>Performance report</h5>
      <Form noValidate validated={validated} className="form" id="report-form" onSubmit={handleSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='name'>Employee Name:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Employee Name'
            name='name'
            onChange={handleChange}
            value={reportData.name}
            required
          />
          <Form.Control.Feedback type='invalid'>Employee Name is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='pro'>Area of strong performance:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your feedback'
            name='pro'
            onChange={handleChange}
            value={reportData.pro}
            required
          />
          <Form.Control.Feedback type='invalid'>Feedback is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='con'>Area requiring improvement:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your feedback'
            name='con'
            onChange={handleChange}
            value={reportData.con}
            required
            rows="3"
          />
          <Form.Control.Feedback type='invalid'>Feedback is required!</Form.Control.Feedback>
        </Form.Group>

        {/* <div className="field">
          <label htmlFor="name">Employee Name:</label>
        </div>
        <div className="input">
          <input type="text" name="name" onBlur={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="pro">Area of strong performance:</label>
        </div>
        <div className="input">
          <textarea name="pro" rows="3" onBlur={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="con">Area requiring improvement:</label>
        </div>
        <div className="input">
          <textarea name="con" rows="3" onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button> */}
        <Button
          disabled={!(reportData.name && reportData.pro && reportData.con)}
          type='submit'
          variant='success'>
          Submit
        </Button>

      </Form>
    </>
  );
};

export default Report;
