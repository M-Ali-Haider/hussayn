import "./AboutUsBanner.css";
import Capture from "../../assets/Capture.png";
const AboutUsBanner = () => {
  return (
    <div className="about-us-banner">
      <div className="banner-image">
        <img src={Capture} alt="" />
      </div>
      <div className="banner-content">
        <div className="banner-title">
          <span>About Us</span>
        </div>
        <div className="banner-text">
          <span>MakaanSaz.com is Online Real Estate Portal</span>
          <span>Connecting Buyers with Renters within</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
