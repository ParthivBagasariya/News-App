import React from "react";
import "./Base.css";
import "../routes/Router"

const Base = (props) => {
  return (
  < div>
      <div className={props.cName}>
        <img
          alt="img"
          src={props.img}
          className="img"
          style={{ marginTop: 105 }}
        ></img>
        <div  style={{justifyContent:"center"}} className="container">
          <div className="base-text">
            <h1 >{props.title}</h1>
            <p style={{ marginLeft:"13%"}}>{props.text}</p>
            <a href={props.url} className={props.btnClass}>
              {props.buttontext}{" "}
            </a>
          </div>
        </div>
      </div>
      </div>

  );
};

export default Base;
