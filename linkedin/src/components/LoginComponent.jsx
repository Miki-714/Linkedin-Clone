import { useState } from "react";
import { RegisterAPI } from "../api/AuthApi";
import "../Sass/LoginComponent.scss";
import linkedin from "../assets/linkedin.png";
import GoogleButton from "react-google-button";
export default function LoginComponent() {
  const [credentails, setcredentials] = useState([]);
  const login = () => {
    try {
      let res = RegisterAPI(credentails.email, credentails.password);
    } catch (err) {}
  };
  return (
    <div className="login-wrapper">
      <img src={linkedin} className="linkedinLogo" />
      <div className="login-wrapper-innter">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay updated on your professional word</p>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setcredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setcredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Enter your Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <GoogleButton
          className="google-btn"
          onClick={() => console.log("hdf")}
        />
      </div>
    </div>
  );
}
