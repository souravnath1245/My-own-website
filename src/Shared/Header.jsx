import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(true);
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
              <Link className="nav-link" to="/prePortfolio">
                {" "}
                Portfolio{" "}
              </Link>
            </li>
            <li>
              n
              <Link className="nav-link" to="/blogs">
                {" "}
                Blogs{" "}
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
