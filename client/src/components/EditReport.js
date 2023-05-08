import React, { useState } from 'react';
import useFetch from '../utils/useFetch'

const EditReport = () => {
const {reports, setReports} = useFetch("/api/reports/byUser")

const handleUpdate = (e) => {
    e.preventDefault();
    console.log(e.target.id); 
//     if (name && pro && con){
//     fetch(`/api/reports/${e.target.id}`, {
//       method: 'PUT',
//       body: JSON.stringify({ name, pro, con }),
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     })
//     .then(res => res.json())
//     .then(data => {
//     console.log(data);
//     setReports([...reports, data])
//     })
//     .catch(err => {
//       console.log(err)
//       alert('failed to update report')
//     })
//   }
  }


  return (
        <>
        <section>
        <p>Employee name: </p>
        <input></input>
        <p>Area of strong performance: </p>
        <textarea></textarea>
        <p>Area requiring improvement: </p>
        <textarea></textarea>
        <button onClick={handleUpdate}>Update</button>
        </section>
        </>
    );
}

export default EditReport;