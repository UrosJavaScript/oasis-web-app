import IconGlobalAgencies from "../../assets/icons/customer-footer.svg";
import useMediaQuery from "../../hooks/useMediaQuery";

const GlobalAgenciesWrapper = () => {
  const isTablet = useMediaQuery(1024);

  return (
    <div className="wrapper-global-agencies">
      {isTablet ? (
        <>
          <img src={IconGlobalAgencies} alt="icon-global-agencies" />
          <div>
            <span className="text-2xl">1500 +</span>
            <span className="text-md global-text">GLOBAL AGENCIES</span>
          </div>
        </>
      ) : (
        <p className="over-global-text-footer text-md">
          Over 15, 500 global customers
        </p>
      )}
    </div>
  );
};

export default GlobalAgenciesWrapper;
