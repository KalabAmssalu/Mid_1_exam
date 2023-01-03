
import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'

function App() {

const [data,setData] = useState()


  const fetch=()=>{
    axios.get("http://127.0.0.1:8000/student/stud/")
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
  }


  useEffect(fetch,[])


  return (
    <div className="App">
           {data?.map((data)=>{
          return(
            <div key={data.id}>
              <p> ID: {data.id} </p>
              <p>Name: {data.StudentName}</p>
              <p>Grade: {data.Grade}</p>
              <hr/>
            </div>
          )
        })}
    </div>
  );
}

export default App;
