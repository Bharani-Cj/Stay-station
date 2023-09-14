import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { getMenuStyles } from "../../utils/common";
import { Link, NavLink } from "react-router-dom";
import UserLogo from "./../UserLogo/UserLogo";

import "./Header.css";

// eslint-disable-next-line react/prop-types
function Header({ setLoginClick }) {
  const [menuOpened, setMenuOpened] = useState(false);
  const user = window.localStorage.getItem("user");
  return (
    <section className="h-wrapper paddings">
      <div className="h-container flexCenter  innerWidth">
        <Link to="/">
          <img src="img/logo.png" alt="Logo" />
        </Link>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="h-menu flexCenter" style={getMenuStyles(menuOpened)}>
            <NavLink to="/properties">Properties</NavLink>
            <a href="1">Add property</a>
            <a href="mailto:cj.bharani@gmail.com">Contact</a>
            {!user ? (
              <button className="button" onClick={() => setLoginClick(true)}>
                Login
              </button>
            ) : (
              <UserLogo />
            )}
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpened((cur) => !cur)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;
