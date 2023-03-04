import "../style/Plans.css";
import { plansData } from "../data/plansData";
import whiteTick from "../assests/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-containers">
      <div className="blur blur-1"></div> 
      <div className="blur blur-2"></div> 
      <div className="plan-header">
        <span className="outline-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="outline-text">NOW WITH US</span>
      </div>

      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>₹ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits -> </span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
