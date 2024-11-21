import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div id="container" style={{marginTop:10}}>
        <div id="part1">
          <div id="companyinfo">
            <a id="sitelink" href="#">
              Trippy
            </a>
            <p id="title">Enjoy Your Trip With Trippy</p>
            <p id="detail">
              In every walk with nature one receives far more than he seeks.
            </p>
          </div>
          <div id="explore">
            <p id="txt1">Explore</p>
            <a className="link" href="/">
              Home
            </a>
            <a className="link" href="Service">
              Service
            </a>
            <a className="link" href="Contact">
              Contact
            </a>
            <a className="link" href="About">
              About
            </a>
          </div>
          <div id="visit">
            <p id="txt2">Visit</p>
            <p className="text">Sp Boys Hostel </p>
            <p className="text">Gulbaitekra road </p>
            <p className="text">Ahmedabad 398 002 </p>
            <p className="text">Phone: (+91) 9875125301 </p>
            <p className="text">Fax: (22) 2363-0350 </p>
          </div>
          <div id="legal">
            <p id="txt3">Legal</p>
            <a className="link1" href="#">
              Terms and Conditions
            </a>
            <a className="link1" href="#">
              Private Policy
            </a>
          </div>
          <div id="connect">
            <p id="txt5" >Connect With US </p>
            <div className="icon">
            <a class="fa-brands fa-facebook fa-beat t1" style={{color: "#3269c8",fontSize:30,marginLeft:20}}></a>
            <a class="fa-brands fa-instagram fa-beat t1" style={{color: "#ea10d8",fontSize:30,marginLeft:20}}></a>
            <a class="fa-brands fa-youtube fa-beat t1" style={{color: "#e1141e",fontSize:30,marginLeft:20}}></a>
            <a class="fa-brands fa-telegram fa-beat t1" style={{color: "#23b2e1",fontSize:30,marginLeft:20}}></a>
            </div>
          </div>
        </div>
      </div>
      <div id="part2">
        <p id="txt6">&#169; copyright 2023 Trippy - All right reserved</p>
      </div>

    </>
  );
};

export default Footer;
