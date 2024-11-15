import Button from "../../common/Button";

const DemoSection = () => {
  return (
    <div className="demo-section">
      <div className="demo-wrapper">
        <span className="text-sm-plus demo-first-text">
          Can't find your industry?
        </span>
        <span className="text-sm demo-second-text">
          Book a demo to see if we're a match!
        </span>
      </div>
      <Button
        title="Book a Demo"
        variant="outline"
        onClick={() => alert("Book a Demo")}
        padding="12px 77px"
      />
    </div>
  );
};

export default DemoSection;
