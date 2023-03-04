import Header from "./Header";
import "../style/MainPage.css";
import gym_pose from "../assests/gym_pose.png";
import calories from "../assests/calories.png";
import heart from "../assests/heart.png";
import back_image from "../assests/back_image.png";
import { motion } from "framer-motion";

const MainPage = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <>
      <div className="page">
        <div className="blur page-blur"></div>
        <div className="left-p">
          <Header />
          <div className="ad">
            <motion.div
              initial={{ left: mobile ? "135px" : "210px" }}
              whileInView={{ left: "8px" }}
              transition={{ ...transition, type: "tween" }}
            ></motion.div>
            <span>The best fitness gym in the city</span>
          </div>

          {/* Heading */}
          <div className="ad-text">
            <div>
              <span className="outline-text">Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in nulla fringilla, lobortis ipsum consequat, rhoncus est.
              </span>
            </div>
          </div>

          {/* Figures */}
          <div className="figures">
            <div>
              <span>+100</span>
              <span>Expert Coaches</span>
            </div>
            <div>
              <span>+1000</span>
              <span>members joined</span>
            </div>
            <div>
              <span>+50</span>
              <span>fitness programs</span>
            </div>
          </div>

          {/* buttons */}
          <div className="buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>

        <div className="right-p">
          <button className="btn">Join Now</button>

          <motion.div
            initial={{ right: "-1rem" }}
            whileInView={{ right: "4rem" }}
            transition={transition}
            className="heart-rate"
          >
            <img src={heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>

          {/* gym posing img */}
          <img src={gym_pose} alt="" className="gym-pose" />

          <motion.img
            initial={{ right: "11rem" }}
            whileInView={{ right: "20rem" }}
            transition={transition}
            src={back_image}
            alt=""
            className="back-img"
          />

          {/* Calories */}
          <div className="track">
            <img src={calories} alt="" />
            <div>
              <span>Calories Burned</span>
              <span>200 kcal</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
