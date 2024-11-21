import React,{useState} from 'react'
import "../components/Book.css";
import axios from "axios";

const Peris = () => {
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
              src="https://cdn-imgix.headout.com/tour/29272/TOUR-IMAGE/4c1f2429-aa57-4776-b5f6-e1697ed4a6b3-15636-athens-temple-of-poseidon-and-cape-sounion-sunset-tour-from-athens-with-audio-guide-01.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
              className="img-responsive"
              alt="img"
            />
          </div>

          <div className="gallery_product filter sprinkle">
            <img
              src="https://cdn-imgix.headout.com/media/images/1235a1f68aaff056f62c4cafe7ee4dbf-10296-berlin-berlin-welcomecard--public-transport--zones-ab----discounts-02.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
              className="img-responsive"
              alt="img"
            />
          </div>

          <div className="gallery_product  filter hdpe">
            <img
              src="https://cdn-imgix.headout.com/tour/23153/TOUR-IMAGE/20c96b39-4040-4323-8da2-79131d4ae756-12061-lisbon-lisbon-card--05.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
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
              src="https://cdn-imgix.headout.com/media/images/baad97e324a4b814f0a40d426ca5ca64-21392--phuket-phuket-fantasea---round-trip-shared-transfer-with-optional-dinner-04.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
              className="img-responsive"
              alt="img"
            />
          </div>

          <div className="gallery_product filter sprinkle">
            <img
              src="https://cdn-imgix.headout.com/media/images/585f4552cea9f6d6e8a94b34741f368b-20465-granada-granada-hop-on-hop-off-03.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
              className="img-responsive"
              alt="img"
            />
          </div>

          <div className="gallery_product  filter hdpe">
            <img
              src="https://cdn-imgix.headout.com/tour/23468/TOUR-IMAGE/a6636171-7a5c-461c-a228-9643f887e71f-12237-bali-bali-zoo-combo--breakfast-with-orangutans---elephant-mud-fun-01.jpg?w=490.5&h=306&auto=compress%2Cformat&crop=faces&fit=min"
              className="img-responsive"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div  className="container-fluid" >
        <p className="b-text">
        Indonesia, country located off the coast of mainland Southeast Asia in the Indian and Pacific oceans. It is an archipelago that lies across the Equator and spans a distance equivalent to one-eighth of Earth’s circumference. Its islands can be grouped into the Greater Sunda Islands of Sumatra (Sumatera), Java (Jawa), the southern extent of Borneo (Kalimantan), and Celebes (Sulawesi); the Lesser Sunda Islands (Nusa Tenggara) of Bali and a chain of islands that runs eastward through Timor; the Moluccas (Maluku) between Celebes and the island of New Guinea; and the western extent of New Guinea (generally known as Papua). The capital, Jakarta, is located near the northwestern coast of Java. In the early 21st century Indonesia was the most populous country in Southeast Asia and the fourth most populous in the world.
        </p>
        <h3>Days:3</h3>
        <h3>Nigths:4</h3>
        <h3 className="cost">Cost:210$ /<span style={{fontSize:"1.1rem " , color:"gray"}}>person </span></h3>
      
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
};

export default Peris;
