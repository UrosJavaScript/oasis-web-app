import { FooterItems } from "../../helpers/FooterItems";
import GlobalAgenciesWrapper from "./GlobalAgenciesWrapper";
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <GlobalAgenciesWrapper />

        <div className="container-card-footer">
          {FooterItems.map((item) => (
            <div className="wrapper-card-footer" key={item.id}>
              <div className="flex-card-footer">
                <img src={item.icon} alt="icon-footer" />

                <div>
                  <div className="rating-footer">
                    <img src={item.ratingIcon} alt="rating-icon" />
                    <span className="text-sm">{item.ratingNumber}</span>
                  </div>
                  <span className="name-rating-footer">{item.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
