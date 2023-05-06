import {useState, useEffect}  from 'react'


const Search = ({setPage}) => {

  const [reports, setReports] = useState([])

  useEffect(() => {
    fetch("/api/reports/byUser")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setReports(data)
    })
  })

  useEffect(() => {
    fetch("/api/reports/byUser")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setReports(data)
    })
  })

    return (
      

        <>
        <section>
        <p>Employee name: {reports[0]?.name}</p>
        <p>Area of strong performance: {reports[0]?.pro}</p>
        <p>Area requiring improvement: {reports[0]?.con}</p>
        <button>Edit</button>
        <button>Delete</button>
        <p>Posted on {reports[0]?.createdAt} by First Last name</p>
        </section>
        </>
    
      )
}

export default Search;