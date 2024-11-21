import React,{useState} from 'react'
import "../components/Book.css";
import axios from "axios";

const Italy = () => {
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
                  src="https://cdn-imgix.headout.com/tour/34210/TOUR-IMAGE/3a3a2409-9f9a-421d-8e86-7e3c2e317459-17919-carrani-capri---anacapri-with-blue-grotto-from-sorrento-with-meeting-point-04.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
                  className="img-responsive"
                  alt="img"
                />
              </div>
    
              <div className="gallery_product filter sprinkle">
                <img
                  src="https://cdn-imgix.headout.com/tour/23406/TOUR-IMAGE/876a6a82-12b5-456f-a67b-39f3dbfa62b7-12203-milan-lake-maggiore-half-day-tour-from-milan-04.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
                  className="img-responsive"
                  alt="img"
                />
              </div>
    
              <div className="gallery_product  filter hdpe">
                <img
                  src="https://cdn-imgix.headout.com/media/images/3f525c3e712406f7b40dce49024222d4-13597-MuseodiCapodimonte-ReservedEntranceTicket---002.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
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
                  src="https://cdn-imgix.headout.com/collection-card-image/3247/image/96eba41ff1bce9289acc5a4941b6c8fd-3247-rimini-01-riminiitalia-in-miniatura-02.jpg?w=270&h=360&auto=compress%2Cformat&crop=faces&fit=min"
                  className="img-responsive"
                  alt="img"
                />
              </div>
    
              <div className="gallery_product filter sprinkle">
                <img
                  src="https://cdn-imgix.headout.com/category/2206/image/da9f535b-0577-4151-8a53-b90d45596c50-2206-seville-04-seville--attractions_ita%CC%81lica-01.jpeg?w=270&h=360&auto=compress%2Cformat&crop=faces&fit=min"
                  className="img-responsive"
                  alt="img"
                />
              </div>
    
              <div className="gallery_product  filter hdpe">
                <img
                  src="https://cdn-imgix.headout.com/media/images/bb1fb750039bbb303232925191d41623-15074-tivoli-villa-d-este--skip-the-line-admission-tickets-06.jpeg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
                  className="img-responsive"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div  className="container-fluid" >
            <p className="b-text">
            Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo's "David" and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy's fashion capital.
            </p>
            <h3>Days:3</h3>
        <h3>Nigths:4</h3>
            <h3 className="cost">Cost:445$ /<span style={{fontSize:"1.1rem " , color:"gray"}}>person </span></h3>
           
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

export default Italy