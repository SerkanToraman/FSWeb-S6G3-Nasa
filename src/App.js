import React,{useState,useEffect} from "react";
import Main from "./Components/Main";
import axios from 'axios';

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap";




function App() {
  const [info,setInfo]=useState('');
  const [loaded, setLoaded] = useState(false);
  const [currentDate,setCurrentDate] =useState(new Date().toISOString().split("T")[0])
  const [order,setOrder]=useState(0);
  


  const collectData = (dateParam)=>{
  axios
    .get('https://api.nasa.gov/planetary/apod',{
      params:{
        api_key:"2cQFS5jouOt5ElpazgwbuVJe33dhHjiIgQk6bjCH",
        date: dateParam,
        thumbs: true,
      }
    })
    .then((result)=>{
      setInfo(result.data);
      setLoaded(true);
   })
   .catch(function (error) {
    setLoaded(false);
  })
  .finally(function () {
    
  });
  }
  useEffect(() => {
    collectData(currentDate);
  }, [currentDate]);

  function dateChangeHandler(e) {
    console.log('dateChangeHandler >',e.target.value);
    setCurrentDate(e.target.value);
  }

  return (
    <>
  {!loaded && <p>"Yükleniyor...." </p>}
    {loaded && (
      < Main 
        info={info}
        dateChangeHandler ={dateChangeHandler}
        currenDate={currentDate}

      />
    )}
    </>

     
  

  
  //   <div className="App">
  //   {!loaded && <p>"Yükleniyor...." </p>}
  //   {loaded &&
  //     <>
  //       <label htmlFor="info">Enter a Date:</label>
  //       <input
  //         onChange={(e) => dateChangeHandler(e)}
  //         type="date"
  //         value={currentDate}
  //         name="infoDate"
  //       ></input>
  //       < Main info={info} />
  //     </>
  //   }
  // </div> 
 

  )
}

export default App;
