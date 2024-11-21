import "./Navbar.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import About from "../components/About";
import Service from "../components/Service";
import Signup from "../components/Signup";
import France from "../routes/France";
import Peris from "../routes/Peris";
import Germany from "../routes/Germany";
import Italy from "../routes/Italy";
import Srilanka from "../routes/Srilanka";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated } = useAuth0();
  return (
    <>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1
              className="navbar-brand"
              href="#"
              style={{ fontSize: 35, fontWeight: 700 }}
            >
              Trippy
            </h1>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav  ">
                <li className="nav-item active " style={{ padding: 10 }}>
                  <Link to="/" className="item">
                    <i className="fa-solid fa-house"></i> Home
                  </Link>
                </li>
                <li className="nav-item" style={{ padding: 10 }}>
                  <Link to="/Service" className="item">
                    <i className="fa-solid fa-briefcase"></i> Service
                  </Link>
                </li>
                <li className="nav-item" style={{ padding: 10 }}>
                  <Link to="/Contact" className="item">
                    <i className="fa-solid fa-address-book"></i> Contact
                  </Link>
                </li>
                <li className="nav-item" style={{ padding: 10 }}>
                  <Link to="/About" className="item">
                    <i className="fa-sharp fa-solid fa-circle-info"></i> About
                  </Link>
                </li>
                <li className="nav-item1">
                  <Link to="/Signup" className="item1">
                    <i class="fa-solid fa-user-plus"></i> Signup
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sign" style={{ marginRight: "0" }}>
              {isAuthenticated ? (
                <button
                  className="signup"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              ) : (
                <button className="signup" onClick={() => loginWithRedirect()}>
                  Log In
                </button>
              )}
              <a
                className="signup"
                href="Signup"
                style={{ marginLeft: "1rem" }}
              >
                Sign-up
              </a>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Service" element={<Service />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="France" element={<France />} />
          <Route path="Peris" element={<Peris />} />
          <Route path="Germany" element={<Germany />} />
          <Route path="Italy" element={<Italy />} />
          <Route path="Srilanka" element={<Srilanka />} />
          <Route path="Indonesia" element={<Peris />} />
          <Route path="Spain" element={<Srilanka />} />
          <Route path="Australia" element={<Italy />} />
          <Route path="Rusia" element={<Germany />} />
        </Routes>
      </Router>
    </>
  );
};
export default Navbar;
