import React from "react";
import Pakagesdata from "./Pakagesdata.js";
import img1 from "../imges/i14.jpg";
import img4 from "../imges/i5.jpg";
import img2 from "../imges/i7.jpg";
import "./Pakages.css";



const Pakages = () => {
  return (
    <div>
      <h1 className="head">
        <span>p</span>
        <span>a</span>
        <span>k</span>
        <span>a</span>
        <span>g</span>
        <span>e</span>
        <span>s</span>
      </h1>
      <div className="tripcard" style={{ marginTop: "0rem" }} >
        <Pakagesdata 
          image="https://cdn-imgix.headout.com/tour/14341/TOUR-IMAGE/77eca2ad-4a23-4dd6-b41d-4043f7b6bf9c-TrelloFixes-1-.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
          heading="France"
          text="France, in Western Europe, encompasses medieval cities, villages and Mediterranean beaches.."
          price="$225.00"
          price2="$375.00"
          id="1"
          href="France" >
          </Pakagesdata>
          <Pakagesdata
          image="https://cdn-imgix.headout.com/media/images/19a92d860e7ad9d31cd466b7acd5171e-592-rome-3-rome-%7C-rome-101_-vatican_st-peter's-basilica-02.jpg?w=270&h=360&auto=compress%2Cformat&crop=faces&fit=min"
          heading="Indonesia"
          text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and   "
          price="$210.00"
          price2="$300.00"
          id="5"
          href="Indonesia"
        ></Pakagesdata>
        <Pakagesdata
          image="https://cdn-imgix.headout.com/tour/21971/TOUR-IMAGE/1974c3d3-8de5-440b-8af5-d868956cdf5d-4.jpeg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
          heading="Germany"
          text="Germany, in Western Europe, encompasses medival cities, villages and Mediterranean beaches.."
          price="$180.00"
          price2="$225.00"
          id="3"
          href="Germany"
        ></Pakagesdata>
      </div>
      <div className="tripcard" style={{ marginTop: "-5rem" }}>
        <Pakagesdata
          image="https://cdn-imgix.headout.com/media/images/967dc9c470a0f1848633b0028e2dc633-20730-langkawi-jet-ski-experience-at-paradise-101-01.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
          heading="Srilanka"
          text="Srilanka, in Western Asisa, encompasses medieval cities, alpine villageshshs beaches.."
          price="$176.00"
          price2="$200.00"
          id="4"
          href="Srilanka"
        ></Pakagesdata>
        <Pakagesdata
          image="https://cdn-imgix.headout.com/tour/30717/TOUR-IMAGE/2206dbe9-6d87-4fd6-a306-683734af53f7-theatre-of-marcellus-1980.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
          heading="Rome"
          text="Rome is a Southeast Asian country occupying parts of the Malay Peninsula and   "
          price="$250.00"
          price2="$320.00"
          id="5"
          href="Indonesia"
        ></Pakagesdata>
        <Pakagesdata
          image="https://cdn-imgix.headout.com/media/images/16633e73201c45f4cec10301850e43b1-13091-rome-castel-sant-angelo-skip-the-line-tickets-05.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
          heading="Italy"
          text="Italy is  country occupying parts of the Malay  best Peninsula and the island of Borneo.  "
          price="$450.00"
          price2="$650.00"
          id="6"
          href="Italy"
        ></Pakagesdata>
      </div>
      <div className="tripcard" style={{ marginTop: "-5rem" }}>
        <Pakagesdata
          image="https://cdn-imgix.headout.com/media/images/1722ad82dd152739525f6eb5b0ddfb63-23481-perth-pinnacles-day-tour-01.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
          heading="Australia"
          text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches.."
          price="$230.00"
          price2="$260.00"
          id="7"
          href="Australia"
        ></Pakagesdata>
        <Pakagesdata
          image="https://cdn-imgix.headout.com/tour/29150/TOUR-IMAGE/c2f6eea9-f226-44fe-8c98-e30fd0409129-15562-hobart-iron-pot-cruise-02.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
          heading="Rusia"
          text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. "
          price="$135.00"
          price2="$155.00"
          id="8"
          href="Rusia"
        ></Pakagesdata>
        <Pakagesdata
          image="https://cdn-imgix.headout.com/media/images/aa02bb2e31a6c9f5b3a490090aa9f9e3-BranCastle.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
          heading="Spain"
          text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo.  "
          price="$185.00"
          price2="$220.00"
          id="9"
          href="Spain"
        ></Pakagesdata>


     
      </div> 


      <div className="box-container">
        <div className="box">
        <i class="fa-sharp fa-solid fa-hotel"></i>
        <h3>Affordabel Hotel</h3>
        <p>
        Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo.  
        </p>
        </div>
        <div className="box">
        <i class="fa-solid fa-utensils"></i>
        <h3>Food and Drinks</h3>
        <p>
        Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo.  
        </p>
        </div>
        <div className="box">
        <i class="fa-solid fa-user-shield"></i>
        <h3>Saftey Guids</h3>
        <p>
        Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo.  
        </p>
        </div>
        <div className="box">
        <i class="fa-solid fa-earth"></i>
        <h3>Aroud The World</h3>
        <p>
        Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo.  
        </p>
        </div>
        <div className="box">
        <i class="fa-solid fa-plane"></i>
        <h3>Fastest Travle</h3>
        <p>
        Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo.  
        </p>
        </div>
        <div className="box">
        <i class="fa-solid fa-person-hiking"></i>
        <h3>Adventures</h3>
        <p>
        Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo.  
        </p>
        </div>
      </div>
    </div>

  );
};

export default Pakages;
