import IconGlobalAgencies from "../../assets/icons/customer-footer.svg";

const GlobalAgenciesWrapper = () => {
  return (
    <div className="wrapper-global-agencies">
      <img src={IconGlobalAgencies} alt="icon-global-agencies" />
      <div>
        <span className="text-2xl">1500 +</span>
        <span className="text-md global-text">GLOBAL AGENCIES</span>
      </div>
    </div>
  );
};

export default GlobalAgenciesWrapper;
