import React from 'react'
import img1 from "../imges/i17.jpg";
import Base from "./Base";
import Destination from './Destination';
import Trip from './Trip';


const Home = () => {
  return (
    <div>
   <Base
        cName="Base"
        img={img1} 
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttontext="Plan"
        url="Service"
        btnClass="show"
      />
      <Destination/>
      <Trip/>
    </div>
  )
}

export default Home