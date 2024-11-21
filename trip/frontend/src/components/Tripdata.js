import "./Trip.css"
import React from 'react'

const Tripdata = (props) => {
  return (
    <div>
    <div className="t-card">
        <div className="t-image">
            <img src={props.image} alt="img" ></img>
        </div> 
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>

    </div>
  )
}

export default Tripdata