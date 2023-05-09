import React, {useState, useEffect}  from 'react'
import useFetch from '../utils/useFetch'


const Search = ({setPage}) => {

  // const [reports, setReports] = useState([])

  // useEffect(() => {
  //   fetch("/api/reports/byUser")
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     setReports(data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }, [])

  const {reports, setReports} = useFetch("/api/reports/byUser") 
  
  // const updateReport = ({name, pro, con}) => {
  //   return fetch(`/api/reports/${event.target.id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify({ name, pro, con }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   })
  // };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(e.target.id); 
  //   if (name && pro && con){
  //   fetch(`/api/reports/${e.target.id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify({ name, pro, con }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //   console.log(data);
  //   // setReports(data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     alert('failed to update report')
  //   })
  // } 
  }

  const handleDelete = (event) => {
    event.preventDefault();
      console.log(event.target.id);    
      console.log(reports)
    fetch(`/api/reports/${event.target.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
    console.log(data);
    window.location.reload(true)
    // setReports([...reports, data])
    })
    .catch(err => {
      console.log(err)
      alert('failed to delete report')
    })
  
    console.log(event)
   
  }
  
    return (
        <>
        {reports.map((input) => (
          // console.log(input)
          <div className='report'>
          <p>Employee name: {input.name}</p>
          <p>Area of strong performance: {input.pro}</p>
          <p>Area requiring improvement: {input.con}</p>
          <button className='button' id={input._id} onClick={()=>{setPage("EditReport")}}>Edit</button>
          {/* <button id={input._id} onClick={handleUpdate}>Update</button> */}
          <button className='button' id={input._id} onClick={handleDelete}>Delete</button>
          <p>Posted on {input.createdAt}</p>
          </div>
        ))
        }

        </>
      )
}

export default Search;