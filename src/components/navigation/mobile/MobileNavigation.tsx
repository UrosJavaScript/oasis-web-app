/* eslint-disable jsx-a11y/anchor-is-valid */
import { useMenuToggle } from "../../../hooks/useMenuToggle ";
import useMediaQuery from "../../../hooks/useMediaQuery";
import NavMenuItem from "./NavMenuItem";
import MenuIcon from "../../../assets/icons/menu-icon.svg";
import Logo from "../../../assets/logo.svg";
import MobileLogo from "../../../assets/mobile-logo.svg";

const MobileNavigation = () => {
  const isMobile = useMediaQuery(768);
  const { menuOpen, toggleMenu } = useMenuToggle();

  return (
    <div className="mobile-nav-wrapper">
      <a href="/">
        <img src={isMobile ? Logo : MobileLogo} alt="logo-oasis" />
      </a>

      <div className="right-col-menu">
        <a href="#" className="text-sm-plus">
          Log in
        </a>

        <button onClick={toggleMenu} className="btn-nav-menu">
          <img src={MenuIcon} alt="menu-icon" />
        </button>
      </div>

      {/* Menu */}
      <div className={`mobile-nav-drawer ${menuOpen ? "open" : ""}`}>
        <NavMenuItem toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default MobileNavigation;
