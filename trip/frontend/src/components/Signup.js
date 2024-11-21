import React, { useState } from "react";
import "./Signup.css";
import axios from 'axios'

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/login", {
        username,
        password,
      });
      alert("Signup successful.");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Enter Valid Data...");
    }
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div
            className="row d-flex align-items-center justify-content-center "
            style={{ marginTop: "5rem" }}
          >
            <div className="col-md-8 col-lg-7 col-xl-6 ">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handlelogin}>
                <h3 className="h3">Signup</h3>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form1Example13"
                    className="form-control form-control-lg field"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg field"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={8}
                  ></input>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      checked
                      style={{ fontSize: "1rem" }}
                    />
                    <label
                      className="form-check-label"
                      for="form1Example3"
                      style={{ fontSize: "1rem" }}
                    >
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-lg bt">
                  Sign in
                </button>

                <div
                  className="divider d-flex align-items-center "
                  style={{ marginBottom: "1.5rem", marginTop: "1.5rem" }}
                >
                  <p className="text-center  mx-3 mb-0 text-muted">OR</p>
                </div>

                <a
                  className="btn btn-primary btn-lg sub"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#"
                >
                  <i className="fab fa-facebook-f "></i> Continue with Facebook
                </a>
                <a
                  className="btn btn-primary btn-lg sub"
                  style={{ backgroundColor: "#55acee", marginTop: "1rem" }}
                  href="#"
                >
                  <i className="fab fa-twitter "></i> Continue with Twitter
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
