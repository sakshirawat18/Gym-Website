import { React, useState } from "react";
import { Link } from "react-scroll";
import logo from "../assests/logo.png";
import bars from "../assests/bars.png";
import "../style/Header.css";

const mobile = window.innerWidth <= 768 ? true : false;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header" id="home">
      <img src={logo} alt="" className="logo" />
      {menuOpen == false && mobile == true ? (
        <div
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
            backgroundColor: "var(--darkGrey)",
          }}
          onClick={() => setMenuOpen(true)}
        >
          <img
            src={bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-nav">
          <li>
            <p className="list">
              <Link
                onClick={() => setMenuOpen(false)}
                activeClass='active'
                to="header"
                spy={true}
                smooth={true}
              >
                Home
              </Link>
            </p>
          </li>
          <li>
            <p className="list">
              <Link
                onClick={() => setMenuOpen(false)}
                to="programs"
                spy={true}
                smooth={true}
              >
                Programs
              </Link>
            </p>
          </li>
          <li>
            <p className="list">
              <Link
                onClick={() => setMenuOpen(false)}
                to="plans"
                spy={true}
                smooth={true}
              >
                Plans
              </Link>
            </p>
          </li>
          <li>
            <p className="list">
              <Link
                onClick={() => setMenuOpen(false)}
                to="reasons"
                spy={true}
                smooth={true}
              >
                Why us
              </Link>
            </p>
          </li>
          <li>
            <p className="list">
              <Link
                onClick={() => setMenuOpen(false)}
                to="Testimonials"
                spy={true}
                smooth={true}
              >
                Testimonials
              </Link>
            </p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
