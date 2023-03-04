import React, { useRef } from "react";
import "../style/JoinUs.css";
import emailjs from '@emailjs/browser';

const JoinUs = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rznx8fi', 'template_j1q1zex', form.current, 'L2JiESiCt2YkZmjx7')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="outline-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="outline-text"> WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name="usermail" placeholder="Enter your email address"/>
            <button className=" btn-join">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
