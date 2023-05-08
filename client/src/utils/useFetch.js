import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [reports, setReports] = useState([])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setReports(data)
        })
        .catch(err => {
          console.log(err)
        })
      }, [url]);

      return {reports, setReports}
}

export default useFetch;