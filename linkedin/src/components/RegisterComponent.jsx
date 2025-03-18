import { useState } from "react";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthApi";
import "../Sass/LoginComponent.scss";
import linkedin from "../assets/linkedin.png";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentails, setcredentials] = useState([]);
  const Register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);
      toast.success("Account created!");
      navigate("/home");
    } catch (err) {
      toast.error("Cannot Create your Account");
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
        <h1 className="heading">Make the most of your profational life</h1>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setcredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone number"
          />
          <input
            onChange={(event) =>
              setcredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password (6 or more characters)"
          />
        </div>
        <button onClick={Register} className="login-btn">
          Agree & Join
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <GoogleButton className="google-btn" onClick={googleSignIn} />
        <p className="go-to-signup">
          Already on Linkedin?{" "}
          <span className="join-now" onClick={() => navigate("/")}>
            {" "}
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
