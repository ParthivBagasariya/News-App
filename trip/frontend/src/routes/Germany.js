import React,{useState} from 'react'
import "../components/Book.css";
import axios from "axios";


const Germany = () => {
  const [name, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [person,setperson]=useState("")
  const [date,setdate]=useState("")
  const hb = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5002/book", {
        name,
        email,person,date
      });
      alert("Booking successful..! We will Contact You Soon");
      setUsername("");
      setemail("");
      setperson("");
      setdate("");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Enter Valid Data...");
    }
  };
    return (
        <div >
          <div className="row">
            <div className="filter-gal-par">
              <div className="gallery_product filter hdpe">
                <img
                  src="https://cdn-imgix.headout.com/tour/29594/TOUR-IMAGE/c61fd367-2a30-4a31-b54f-9a493e4aea05-15818-krakow-auschwitz---birkenau--tour-with-individual-entrance-01-1-.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
                  className="img-responsive"
                  alt="img"
                />
              </div>
    
              <div className="gallery_product filter sprinkle">
                <img
                  src="https://cdn-imgix.headout.com/media/images/75508ebf8fd902c1b4b53fc084686da7-22278-munich-romantic-road-rothenburg-and-harburg-01.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
                  className="img-responsive"
                  alt="img"
                />
              </div>
    
              <div className="gallery_product  filter hdpe">
                <img
                  src="https://cdn-imgix.headout.com/tour/28685/TOUR-IMAGE/36cc77ec-c026-4f69-92d9-ac15d3527195-15270-munich-munich-bike-tour-01-1-.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
                  className="img-responsive"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "0" }}>
            <div className="filter-gal-par">
              <div className="gallery_product filter hdpe">
                <img
                  src="https://cdn-imgix.headout.com/media/images/2d9d06569646b180fe5dc74b77cede00-21231-frankfurt-am-main-1-hour-panorama-cruise-in-frankfurt-01.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
                  className="img-responsive"
                  alt="img"
                />
              </div>
    
              <div className="gallery_product filter sprinkle">
                <img
                  src="https://cdn-imgix.headout.com/tour/29693/TOUR-IMAGE/c39af6e1-7dc1-444a-8f8e-3ad0f783c4c1-15883-salzburg-hop-on-hop-off-city-tour-salzburg--yellow-line-01-1-.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
                  className="img-responsive"
                  alt="img"
                />
              </div>
    
              <div className="gallery_product  filter hdpe">
                <img
                  src="https://cdn-imgix.headout.com/tour/34678/TOUR-IMAGE/5ddf6a15-b3a2-47fb-965c-324c0ec737c7-18160-berlin-3-hr-explore-berlin-tour-01.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
                  className="img-responsive"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div  className="container-fluid" >
            <p className="b-text">
            Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank
            </p>
            <h3>Days:3</h3>
        <h3>Nigths:4</h3>
            <h3 className="cost">Cost:180$ /<span style={{fontSize:"1.1rem " , color:"gray"}}>person </span></h3>
           
            <div >
            <form action="#" method="post" className="form">
            <label for="name" className="label">
              Name:
            </label>
            <input type="text" value={name} name="name" onChange={(e)=>{setUsername(e.target.value)}} required className="bi" />

            <label for="email" className="label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              className="bi"
              onChange={(e)=>{setemail(e.target.value)}}
            />

            <label for="email" className="label">
              Person:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              value={person}
              onChange={(e)=>{setperson(e.target.value)}}
              className="bi"
            />

            <label for="date" className="label">
              Tour Date:
            </label>
            <input type="date" id="date" name="date" required className="bi" value={date}  onChange={(e)=>{setdate(e.target.value)}} />

            <button type="submit" className="book2" onClick={hb}>
              Book Now
            </button>
          </form>
            </div>
          </div>
        </div>
      );
}

export default Germany