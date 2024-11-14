/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../../assets/logo.svg";
import Button from "../../common/Button";
import "./style.scss";

const Navigation = () => {
  return (
    <nav>
      <div className="nav-top">
        <a href="#" className="text-sm-plus">Log in</a>
        <a href="#" className="text-sm-plus ">Sign Up</a>
      </div>

      <div className="nav-item">
        <a href="/">
          <img src={Logo} alt="logo-oasis" />
        </a>

        <div></div>
        <Button
          title="Book a Demo"
          variant="secondary"
          onClick={() => alert("Book a Demo")}
          padding="12px 60px"
        />
      </div>
    </nav>
  );
};

export default Navigation;
