import React, { useState } from "react";
import axios from "axios";
import "./Contactform.css";

const Contactform = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/signup", {
        name,
        email,
        number,
      });
      alert("Thanks for Contact us");
      setname("");
      setemail("");
      setnumber("");
    } catch (error) {
      console.log(error);
      alert("Something is Wrong");
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="row">
          <iframe className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8415367997914!2d72.55042537505246!3d23.02958981606671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85cf241a7445%3A0x80a17b0c0d19a3a9!2sSP%20hostel!5e0!3m2!1sen!2sin!4v1695895604611!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{border:'0'}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <br />
          <form onSubmit={handlesubmit}>
            <h2 className="detail">Details</h2>
            <div className="inputbox">
              <i className="fa-solid fa-user t2"></i>
              <input
                type="text"
                name="uname"
                value={name}
                placeholder="Name"
                onChange={(e) => setname(e.target.value)}
                required
              />
            </div>
            <div className="inputbox">
              <i className="fa-solid fa-envelope t2"></i>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>
            <div className="inputbox">
              <i className="fa-solid fa-phone t2"></i>
              <input
                type="text"
                name="mnumber"
                value={number}
                placeholder="Mobile Number"
                onChange={(e) => setnumber(e.target.value)}
                required
                maxLength={10}
              />
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactform;
