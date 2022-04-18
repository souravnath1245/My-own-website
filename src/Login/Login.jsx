import { faFacebook, faGithub, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react/cjs/react.development";
// import React, { useState } from "react";
import React from 'react';
import useFirebase from "../hook/useFirebase";
import "./Login.css";

const Login = () => {
  const { user, error, signInWithGoogle } = useFirebase();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };
  return (
    <div className="login--Section">
      <div className="login--divition">
        <div className="login__Content ">
          <h3>Login</h3>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-4">
                <form id="loginform" onSubmit={loginSubmit}>
                  {/* {user?.email ? (
                    <Alert severity="success">Login Successfully!</Alert>
                  ) : (
                    <Alert severity="error">{error}</Alert>
                  )} */}
                  {user?.email? <p>login successfully</p> : <p>{error}</p>}
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="EmailInput"
                      name="EmailInput"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <small id="emailHelp" className="text-danger form-text">
                      {emailError}
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <small id="passworderror" className="text-danger form-text">
                      {passwordError}
                    </small>
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label">Check me out</label>
                  </div>
                  <button type="submit" className="submit__button">
                    Submit
                  </button>
                </form>
                  

                <div className="anotherProvider">
                  <p className="providerBtn" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} /></p>
                  <p className="providerBtn" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faTwitter} /></p>
                  <p className="providerBtn" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faFacebook} /></p>
                  <p className="providerBtn" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGithub} /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

