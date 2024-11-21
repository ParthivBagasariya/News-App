import React from 'react'
import "./Pakages.css"


const Pakagesdata = (props) => {

  return (
    
    <div>
      <div className="t-card">
        <div className="t-image">
            <img src={props.image} alt="img" ></img>
        </div> 
         <h4> <i class="fa-sharp fa-solid fa-location-dot"></i> {props.heading}</h4>
         <p className='id'>{props.id}</p>
        <p>{props.text}</p>
        <div className='ch'>
        <p className='price'>{props.price} </p><span className='price2'>{props.price2}</span></div>
        <a className='book' href={props.href} >Details</a>
    </div>
    </div>
  )
}

export default Pakagesdata