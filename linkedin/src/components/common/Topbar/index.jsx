import "./index.scss";
import LinkedinLogo from "../../../assets/linkedin.png";
import user from "../../../assets/user.png";
import { useNavigate } from "react-router-dom";
import { BsBriefcase } from "react-icons/bs";
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiTwotoneBell,
} from "react-icons/ai";
function Topbar() {
  let navigate = useNavigate();
  const goToRoute = (router) => {
    navigate(router);
  };
  return (
    <div className="topbar-main">
      {" "}
      <img className="linkedinLogo" src={LinkedinLogo} alt="LinkedinLogo" />
      <div className="react-icons">
        <AiOutlineSearch size={28} className="react-icon" />
        <AiOutlineHome
          size={30}
          className="react-icon"
          onClick={() => goToRoute("/home")}
        />
        <AiOutlineUserSwitch
          size={30}
          className="react-icon"
          onClick={() => goToRoute("/profile")}
        />
        <BsBriefcase size={30} className="react-icon" />
        <AiOutlineMessage size={30} className="react-icon" />
        <AiTwotoneBell size={30} className="react-icon" />
      </div>
      <img className="user-logo" src={user} alt="user" />
    </div>
  );
}

export default Topbar;
