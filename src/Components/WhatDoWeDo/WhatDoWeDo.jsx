import "./WhatDoWeDo.css";
import small from "../../assets/impk/small.png";
import Rectangle from "../../assets/Rectangle.svg";
const WhatDoWeDo = () => {
  return (
    <div className="container">
      <div className="top-section">
        <img src={small} alt="Image" className="" />
      </div>
      <div>
        <img src={Rectangle} alt="People Picture" className="" />
      </div>
      <div className="content-section">
        <h2>What Do We Do?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default WhatDoWeDo;
