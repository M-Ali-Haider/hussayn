import "./AboutUsHeader.css";
import circle from "../../assets/circle.svg";
import phone from "../../assets/impk/phone.png";
const AboutUsHeader = () => {
  return (
    <div className="about-us-header">
      <div className="header-container">
        <div className="logo">
          <img src={phone} alt="" />
          <span>MakaanSaz.com</span>
        </div>
        <div className="nav-links">
          <span>Find Agents</span>
          <span>Find Properties</span>
          <span>About Us</span>
          <span>Contact Us</span>
          <div className="account-link">
            <span>Account</span>
            <img src={circle} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeader;
