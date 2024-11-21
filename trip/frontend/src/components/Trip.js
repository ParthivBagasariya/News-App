import "./Trip.css";
import Tripdata from "./Tripdata";
import img1 from "../imges/i9.jpg";
import img4 from "../imges/i11.jpg";
import img2 from "../imges/i2.jpg";
import React from "react";

const Trip = () => {
  return (
    <div>
      <h1 className="rh">Recent Trips</h1>
      <p className="rt">You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
      <Tripdata
          image={img1}
          heading="Philippiness"
          text="Philippiness, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux's ancient cave drawings, Lyon's Roman theater and the vast Palace of Versailles attest to its rich history."
        ></Tripdata>
        <Tripdata
          image={img2}
          heading="Africa"
          text="Africa, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Malay Peninsula and the island of Borneofor its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux's ancient cave drawings, Lyon's Roman theater and the vast Palace of Versailles attest to its rich history."
        ></Tripdata>
        <Tripdata
          image={img4}
          heading="Malaysiya"
          text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. The capital, Kuala Lumpur, is home to colonial buildings, busy shopping districts such as Bukit Bintang and skyscrapers such as the iconic, 451m-tall Petronas Twin Towers. "
        ></Tripdata>
      </div>
    </div>
  );
};

export default Trip;
