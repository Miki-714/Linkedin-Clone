import LoginComponent from "../components/LoginComponent";
import { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";
function Login() {
  const [loading, setloading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/home");
      } else {
        setloading(false);
      }
    });
  }, []);
  return loading ? <Loader /> : <LoginComponent />;
}

export default Login;
