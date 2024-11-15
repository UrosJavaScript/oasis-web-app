import Button from "../../common/Button";
import Timer from "./timer";
import CloseIcon from "../../assets/icons/close-icon.svg";

import "./style.scss";

const Header = () => {
  return (
    <header>
      <div className="circle circle-1 left"></div>
      <div className="circle circle-2 left"></div>
      <div className="circle circle-3 left"></div>

      <div className="wrapper-header">
        <div className="col-header">
          <span className="text-2xl text1">Black Friday</span>
          <span className="text-2xl text2">Cyber Monday</span>
        </div>

        <Timer duration={7 * 24 * 60 * 60 * 1000} />

        <Button
          title="Shop Now"
          variant="other"
          onClick={() => alert("Shop Now")}
          fontFamily="font-header-secondary"
          padding="8px 16px"
          border="none"
          borderRadius="0"
        />
      </div>

      <button className="header-close-icon">
        <img src={CloseIcon} alt="header-close-icon" />
      </button>

      <div className="circle circle-4 right"></div>
      <div className="circle circle-5 right"></div>
      <div className="circle circle-6 right"></div>
    </header>
  );
};

export default Header;
