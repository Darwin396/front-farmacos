import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <header>
      <div className="container flex justify-space-between align-center">
        <Link to="/" className="logo">
          <i class="fa-solid fa-pills" style={{color: '#192e5a'}}></i>
          GestionFARMA
        </Link>
        <div className="flex flex.align-center">
          <Navigation></Navigation>
          <button className="btn btn-menu-responsive" onClick={handleOpenMenu}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <div className={menuOpened ? "menu-responsive open" : "menu-responsive"}>
        <Menu></Menu>
      </div>
    </header>
  );
}

export default Header;