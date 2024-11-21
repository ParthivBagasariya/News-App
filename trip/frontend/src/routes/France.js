import React,{useState} from "react";
import "../components/Book.css";
import axios from "axios";

const France = () => {

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
    <div>
      <div className="row">
        <div className="filter-gal-par">
          <div className="gallery_product filter hdpe">
            <img
              src="https://cdn-imgix.headout.com/media/images/caf6a846b4d7ffde9b8a1349da3a9653-OperaGarnier.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
              className="img-responsive"
              alt="img"
            />
          </div>

          <div className="gallery_product filter sprinkle">
            <img
              src="https://cdn-imgix.headout.com/tour/35488/TOUR-IMAGE/434ca02a-f201-4fc0-8e42-d8bfe9e0773d-18569-paris-arc-de-triomphe-entry-and-mini-walking-tour-06.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
              className="img-responsive"
              alt="img"
            />
          </div>

          <div className="gallery_product  filter hdpe">
            <img
              src="https://cdn-imgix.headout.com/media/images/0627823db36c07c8653996839d0cb5b1-23503-mont-saint-michel-full-day-mont-saint-michel-guided-tour-05.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
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
              src="https://cdn-imgix.headout.com/tour/14633/TOUR-IMAGE/06e375b3-db8e-4a47-95a9-a6849e181776-8008-paris-priority-access-to-sainte-chapelle-and-conciergerie-01.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
              className="img-responsive"
              alt="img"
            />
          </div>

          <div className="gallery_product filter sprinkle">
            <img
              src="https://cdn-imgix.headout.com/media/images/9f5ca4edf486aac495bef0da429344bd-21517-seoul-nami-island-and-mount-seorak-day-trip-01.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
              className="img-responsive"
              alt="img"
            />
          </div>

          <div className="gallery_product  filter hdpe">
            <img
              src="https://cdn-imgix.headout.com/tour/32804/TOUR-IMAGE/13d55f16-21bd-43ae-9fea-eb5e2eadee96-17362-loire-valley-puy-du-fou-ticket-entrance-04.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
              className="img-responsive"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <p className="b-text">
          France, in Western Europe, encompasses medieval cities, alpine
          villages and Mediterranean beaches. Paris, its capital, is famed for
          its fashion houses, classical art museums including the Louvre and
          monuments like the Eiffel Tower. The country is also renowned for its
          wines and sophisticated cuisine. Lascaux's ancient cave drawings,
          Lyon's Roman theater and the vast Palace of Versailles attest to its
          rich history
        </p>
        <h3>Days:3</h3>
        <h3>Nigths:4</h3>
        <h3 className="cost">
          Cost:225$ /
          <span style={{ fontSize: "1.1rem ", color: "gray" }}>person </span>
        </h3>
       
        <div>
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
};

export default France;
