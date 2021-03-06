import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useFirebase from "../hook/useFirebase";

const Header = () => {
  // const { user, logOut } = useFirebase();
  const [toggle, setToggle] = useState(true);

  //   console.log(user)
  // const handleLogOut = () => {
  //   logOut();
  //   console.log("button is click...")
  // };

  function handleToggle() {
    console.log("handle is clicked.. ", toggle);
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }
  return (
    <div className="navigation">
      <div className="secContainer">
        <nav className="main-navbar">
          <div className="navbarBrand">
            <div className="brandContent">
              <span>
                <Link className="brandName" to="/">
                  Sourav
                </Link>
              </span>
              <p className="nameTitle">Mern Stack Developer</p>
            </div>
            <div className="">
              <span className="toggle-Button" onClick={handleToggle}>
                {toggle === true ? (
                  <FontAwesomeIcon icon={faBars} />
                ) : (
                  <FontAwesomeIcon icon={faBarsStaggered} />
                )}
              </span>
            </div>
          </div>
          <ul
            className={
              toggle === false ? "unorderList " : " unorderList += displayItem "
            }
          >
            <li>
              <Link className="nav-link" to="/home">
                {" "}
                <i class="fa-solid fa-house"></i> Home{" "}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/portfolio">
                {" "}
                Portfolio{" "}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/blogs">
                {" "}
                Blogs{" "}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/resume">
                {" "}
                Resume{" "}
              </Link>
            </li>
          
            <li>
              <Link className="nav-link" to="/service">
                {" "}
                Service{" "}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                {" "}
                Contact{" "}
              </Link>
            </li>
            {/* {user?.email ? (
              <p style={{color: "white"}}>
                Signed in as: <a href="#login">{user?.displayName}</a>
              </p>
            ) : (
              <p></p>
            )} */}
            {/* {user.email? (
             
            ) : (
              <button className="loginBtn" onClick={handleLogOut}>
                LogOut
              </button>
            )} */}
            <button>
              <Link className="loginBtn" to="/login">
                Login
              </Link>
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
