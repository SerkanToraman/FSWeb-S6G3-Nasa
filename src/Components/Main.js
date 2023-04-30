
import React from "react"

const Main = ({info,dateChangeHandler,currentDate}) => {
    return (
      <div className="Page_Container">
<div className="Main_Container">
  <div className="Side_Bar"></div>
  <div className="Main_Part grow1">
    <div className="Header"></div>
    <div className="Content_Img grow1">
      <div className="Content_part grow1">
        <div className="Content_Header"style={{ fontSize: 26 ,color: 'white',display: "flex",justifyContent: 'center', alignItems:"center"}} >{info.title}</div>
        <div className="Content" style={{ fontSize: 12,color: 'white',justifyContent: 'center', alignItems:"center"} }>{info.explanation}</div>
        <div className="date_arrow">
          <div className="date" style={{ display: "flex",justifyContent: 'center', alignItems:"center"}}>
              <input
              onChange={(e) => dateChangeHandler(e)}
              type="date"
              value={currentDate}
              name="infoDate"
              ></input>
          </div>
          <div className="arrow" style={{ display: "flex",justifyContent: 'center', alignItems:"center"}}>
          <button >+</button>
          <button >-</button>
          </div>
        </div>
        <div className="footer grow1" style={{ display: "flex" ,fontSize: 10 ,color: 'white', justifyContent: 'flex-start', alignItems:"flex-end"}}>
          Apod.nasa@gov
        </div>
      </div>
      <div className="Img_Part">
          <img 
              src={info.hdurl}
              alt={info.explanation}
            />
      </div>
      <div className="Right_Side_Bar" style={{ display: "flex" ,fontSize: 10 ,color: 'white', justifyContent: 'flex-start', alignItems:"flex-end"}}> Facebook <br/>
      Instagram  <br/>Twitter</div>
    </div>
</div>
</div>
</div> 

    );
  };

export default Main;

      // <div>
      //   <p>{info.date}</p>
      //   <p>{info.explanation}</p>
      //   <img
      //     src={info.hdurl}
      //     alt={info.explanation}
      //   />
      //   <p>
      //     {info.media_type}
      //     {info.service_version}
      //   </p>
  
      //   <div>
      //     {info.title}
      //     <img
      //       src={info.url}
      //       alt={info.explanation}
      //     />
      //   </div>
      // </div>