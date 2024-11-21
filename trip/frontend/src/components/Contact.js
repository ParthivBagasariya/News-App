import React from 'react'
import Base from "./Base";
import img3 from "../imges/i13.jpg"
import Contactform from './Contactform';
import "./Contactform.css"

const Contact = () => {
  return (
    <div><Base
    cName="Contact"
    img={img3}
    title="Contact"
  />
  <Contactform/>
   </div>
  )
}

export default Contact