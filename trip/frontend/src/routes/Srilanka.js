import React,{useState} from 'react'
import "../components/Book.css";
import axios from "axios";

const Srilanka = () => {
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
                  src="https://cdn-imgix.headout.com/media/images/0291eda5af60b36884947250b6e16322-19688-pattaya-columbia-pictures-aquaverse-pattaya-01.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
                  className="img-responsive"
                  alt="img"
                />
              </div>
    
              <div className="gallery_product filter sprinkle">
                <img
                  src="https://cdn-imgix.headout.com/media/images/8c366245d614681086d4106bd8c5fadc-19688-pattaya-columbia-pictures-aquaverse-pattaya-03.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
                  className="img-responsive"
                  alt="img"
                />
              </div>
    
              <div className="gallery_product  filter hdpe">
                <img
                  src="https://cdn-imgix.headout.com/media/images/42e9e897b059b370e0938e7dd0245ff1-19688-pattaya-columbia-pictures-aquaverse-pattaya-04.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
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
                  src="https://cdn-imgix.headout.com/media/images/bb820bec07c7d1befb15e6ce516d92ae-Dino%20Park%20Yanbaru%20Subtropical%20Forest%20card%20image.jpg?w=270&h=360&auto=compress%2Cformat&crop=faces&fit=min"
                  className="img-responsive"
                  alt="img"
                />
              </div>
    
              <div className="gallery_product filter sprinkle">
                <img
                  src="https://cdn-imgix.headout.com/media/images/b42a705a3e6ff9315152e86f3f34a6a7-19650-hokkaido-mt.-moiwa-ropeway-ticket-01.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
                  className="img-responsive"
                  alt="img"
                />
              </div>
    
              <div className="gallery_product  filter hdpe">
                <img
                  src="https://cdn-imgix.headout.com/tour/32348/TOUR-IMAGE/ce3e30c1-70fd-4d13-b760-b9ed14a0552e-17105-langkawi-langkawi-mangrove-kayaking-adventure-tour-02.png?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
                  className="img-responsive"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div  className="container-fluid" >
            <p className="b-text">
            Sri Lanka, historically known as Ceylon and officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia. It lies in the Indian Ocean, southwest of the Bay of Bengal, separated from the Indian peninsula by the Gulf of Mannar and the Palk Strait.
            </p>
            <h3>Days: 3</h3>
        <h3>Nigths: 4</h3>
            <h3 className="cost">Cost:176$ /<span style={{fontSize:"1.1rem " , color:"gray"}}>person </span></h3>
            
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

export default Srilanka