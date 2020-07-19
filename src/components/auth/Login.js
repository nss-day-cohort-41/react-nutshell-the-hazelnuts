import React, { useState } from "react"

const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "", id:1 });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    /*
        For now, just store the email and password that
        the customer enters into session storage.
        ...Let's just trust the user... That's a good idea, right????
    */
    // sessionStorage.setItem(
    //   "credentials",
    //   JSON.stringify(credentials)
    // );
    props.setUser(credentials);
    props.history.push("/");
  }

  return (
    <div className="limiter">
      <div className="loginBoxContainer">
        <div className="loginBox">
          <div className="loginLogo">
            <img src="./nutshell2logo.png" alt="logo" />
          </div>


          <form onSubmit={handleLogin}>
            <span className="loginHeader">
              Welcome
            </span>

            <div className="form-input">
              <input onChange={handleFieldChange} className="inputField" type="text" name="email"/>
              <span className="focus-inputField" data-placeholder="Email"></span>
            </div>

            <div className="form-input">
              <input onChange={handleFieldChange} className="inputField" type="password" name="pass"/>
              <span className="focus-inputField" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <div className="wrap-login-form-btn">
                <div className="login-form-bgbtn"></div>
                <button type="submit" className="login-form-btn">
                  Login
                </button>
              </div>
            </div>

            <div className="registerAcct">
              <span className="registerAcct__text">
                Don’t have an account?
              </span>

              <a className="registerAcct__link">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
	  </div>
  );
};

export default Login;