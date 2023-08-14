import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { getMenuStyles } from "../../utils/common";

import "./Header.css";

// eslint-disable-next-line react/prop-types
function Header({ setLoginClick }) {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="img/logo.png" alt="Logo" />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="h-menu flexCenter" style={getMenuStyles(menuOpened)}>
            <a href="1">Add property</a>
            <a href="2">Property</a>
            <a href="3">Contact</a>
            <button className="button" onClick={() => setLoginClick(true)}>
              login
            </button>
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
