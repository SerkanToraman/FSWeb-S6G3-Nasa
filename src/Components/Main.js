
import React from "react"


const Main = ({info}) => {
    return (
      <div>
        <p>{info.date}</p>
        <p>{info.explanation}</p>
        <img
          src={info.hdurl}
          alt={info.explanation}
        />
        <p>
          {info.media_type}
          {info.service_version}
        </p>
  
        <div>
          {info.title}
          <img
            src={info.url}
            alt={info.explanation}
          />
        </div>
      </div>
    );
  };

export default Main;
