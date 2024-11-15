import Button from "../../../common/Button";

const FooterNavMenu = () => {
  return (
    <div className="footer-nav-menu">
      <Button
        title="Sign Up"
        variant="outline"
        onClick={() => alert("Sign Up")}
      />
      <Button
        title="Book a Demo"
        variant="secondary"
        onClick={() => alert("Book a Demo")}
      />
    </div>
  );
};

export default FooterNavMenu;
