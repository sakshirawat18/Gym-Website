import "../style/Reasons.css";
import image1 from "../assests/image1.png";
import girl_treadmill from "../assests/girl_treadmill.png";
import image3 from "../assests/image3.png";
import image4 from "../assests/image4.png";
import adidas from "../assests/adidas.png";
import nike from "../assests/nike.png";
import nb from "../assests/nb.png";
import tick from "../assests/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={girl_treadmill} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>

      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="outline-text">why</span>
          <span> choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>OVER 140+ EXPERT COACHES</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
