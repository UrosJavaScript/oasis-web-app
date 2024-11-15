/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from "../../common/Button";
import MobileNavigation from "./mobile/MobileNavigation";
import useMediaQuery from "../../hooks/useMediaQuery";
import DesktopNavMenu from "./DesktopNavMenu";
import Logo from "../../assets/logo.svg";
import "./style.scss";

const Navigation = () => {
  const isTablet = useMediaQuery(1280);

  return (
    <nav>
      {isTablet ? (
        <>
          <div className="nav-top">
            <a href="#" className="text-sm-plus">
              Log in
            </a>

            <a href="#" className="text-sm-plus ">
              Sign Up
            </a>
          </div>

          <div className="nav-item">
            <a href="/">
              <img src={Logo} alt="logo-oasis" />
            </a>

            <DesktopNavMenu />

            <Button
              title="Book a Demo"
              variant="secondary"
              onClick={() => alert("Book a Demo")}
              padding="12px 60px"
            />
          </div>
        </>
      ) : (
        <MobileNavigation />
      )}
    </nav>
  );
};

export default Navigation;
