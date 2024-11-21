import "./Destination";
import React from 'react'



const Destinationdata = (props) => {
     return (
    <div>
       <div className={props.className}>
        <div className="des-text">
          <h2>{props.heading}</h2>
          <p>
            {props.text}
          </p>
        </div>

        <div className="ima">
      < img alt="img" src={props.img1}></img>
      < img alt="img" src={props.img2}></img>
        </div>
      </div>


    </div>
  )

}

export default Destinationdata