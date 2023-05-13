import React, { useEffect, useState } from 'react';
import useFetch from '../utils/useFetch'

const EditReport = ({currentReport}) => {
const {reports, setReports} = useFetch("/api/reports/byUser")

const handleUpdate = (e) => {
    e.preventDefault();
    console.log(e.target.id); 
    if (formData.name && formData.pro && formData.con){
    fetch(`/api/reports/${formData.id}`, {
      method: 'PUT',
      body: JSON.stringify({
         name: formData.name, 
         pro: formData.pro, 
         con: formData.con }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(data => {
    console.log(data);
    setReports([...reports, data])
    })
    .catch(err => {
      console.log(err)
      alert('failed to update report')
    })
  }
  }

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    pro: "",
    con: ""
  })

  useEffect(() => {
    setFormData({
        id: currentReport._id,
        name: currentReport.name, 
        pro: currentReport.pro,
        con: currentReport.con
    })
  }, [currentReport])

  function handleChange(event) {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value
    })

    console.log(formData)
  }

  return (
        <>
        <section>
        <p>Employee name: </p>
        <input type="text" value={formData.name} name="name" onChange={handleChange}></input>
        <p>Area of strong performance: </p>
        <textarea value={formData.pro} name="pro"  onChange={handleChange}></textarea>
        <p>Area requiring improvement: </p>
        <textarea value={formData.con} name="con"  onChange={handleChange}></textarea>
        <button onClick={handleUpdate}>Update</button>
        </section>
        </>
    );
}

export default EditReport;