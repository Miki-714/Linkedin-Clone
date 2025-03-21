import { useState } from "react";
import { LoginAPI, RegisterAPI, GoogleSignInAPI } from "../api/AuthApi";
import "../Sass/LoginComponent.scss";
import linkedin from "../assets/linkedin.png";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentails, setcredentials] = useState([]);
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In to Linkedin");
      navigate("/home");
    } catch (err) {
      toast.error("please Check your Credentials");
    }
  };
  const googleSignIn = () => {
    let response = GoogleSignInAPI();
    console.log(response);
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
        <GoogleButton className="google-btn" onClick={googleSignIn} />
        <p className="go-to-signup">
          New to Linkedin?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            {" "}
            Join now
          </span>
        </p>
      </div>
    </div>
  );
}
