import React from "react";
import "./Destination.css";
import Destinationdata from "./Destinationdata";
import img1 from "../imges/i10.jpg";
import img2 from "../imges/i3.jpg";
import img3 from "../imges/i7.jpg";
import img4 from "../imges/i8.jpg";

const Destination = () => {
  return (
    
    <div className="destination">
      
      <h1 className="ph">Popular Destinations</h1>
      <p className="pp">
        Tours give you the oppartunity to see a lot,within a time frame.{" "}
      </p>
      <Destinationdata
      className="first-des"
        heading="Vietnam"
        text="Vietnam is a Southeast Asian country known for its beaches, rivers,
            Buddhist pagodas and bustling cities. Hanoi, the capital, pays
            homage to the nation's iconic Communist-era leader, Ho Chi Minh, via
            a huge marble mausoleum. Ho Chi Minh City (formerly Saigon) has
            French colonial landmarks, plus Vietnamese War history museums."
        img1={img1}
        img2={img2}
      />

      <Destinationdata
      className="first-des-rev"
        heading="Munnar ,Town in Kerala"
        text="Munnar is a town in the Western Ghats mountain range in India's Kerala state. A hill station and former resort for the British Raj elite, it's surrounded by rolling hills dotted with tea plantations established in the late 19th century. Eravikulam National Park, a habitat for the endangered mountain goat Nilgiri tahr, is home to the Lakkam Waterfalls, hiking trails and 2,695m-tall Anamudi Peak"
        img1={img3}
        img2={img4}
      />
    </div>
  );
};

export default Destination;
