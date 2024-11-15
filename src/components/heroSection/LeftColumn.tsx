import Button from "../../common/Button";
import useMediaQuery from "../../hooks/useMediaQuery";

const LeftColumn = () => {
  const isTablet = useMediaQuery(1024);

  return (
    <div className="hero-left-column">
      <span className="left-column-label text-sm-plus">
        White label booking software for agencies
      </span>

      <span className="text-6xl sell-oasis-left-text">
        Sell Oasis’s
        <span className="green-color"> brandable scheduling platform</span> as
        your own
      </span>

      <span className="text-xl oasis-left-description">
        Oasis White Label is the perfect solution for digital agencies and web
        developers working with clients who need a powerful booking system for
        their operation.
      </span>

      <div className="left-button-wrapper">
        <div>
          <Button
            title="Get started for free"
            variant="primary"
            onClick={() => alert("Get started for free")}
            padding="12px 58px"
            style={{ height: "42px", whiteSpace: "nowrap", width: "100%" }}
          />
          <span className="text-sm no-credit-text">
            {!isTablet && <span>✓</span>} No credit card required
          </span>
        </div>
        <Button
          title="Book a demo"
          variant="outline"
          onClick={() => alert("Book a demo")}
          padding="12px 77px"
          style={{ height: "42px", whiteSpace: "nowrap" }}
        />
      </div>
    </div>
  );
};

export default LeftColumn;
