import React from "react";
import "./About.css";
import aboutimg from "./Image/laptop-men.png";

const About = () => {
  return (
    <>
      <div className="aboutcontainer">
        <div className="abouttext">
          <div className="abouttext2">
            <h1>ABOUT US</h1>
            <p>
              It is a world class group which offers experience, equipment, and
              overall know-how of what is needed to build a business from
              scratch. with years of experience, required facilities and
              resources under one roof fh provides one step solution to all its
              clients which not only saves time and energy but the creative
              output that is unlikely to be found elsewhere.
            </p>
            <h2>WE BRING LIFE TO YOUR IDEAS AND DREAMS.</h2>
          </div>
          <form action="">
            <input type="text" name="text" placeholder="share your email" />
            <button>SEND</button>
          </form>
        </div>
        <div className="aboutimage">
          <img src={aboutimg} alt="" />
        </div>
      </div>
      <div className="aboutpara">
        <p>
          The dream team targets audience through visibility on electronic and
          print media offering services of product commercial shoot, animation
          and documentary according to the requirement of the client bolstering
          sales and revenue with diverse ideas. Thus fulfilling the promise of
          less investment and more return.
        </p>
        <p>
          It is a group builds up, promotes and makes profitable new ventures
          with out of the box market competitive guerilla strategies making
          visible the product not only on the digital arena with top notch
          catchy content, slogans , taglines, on all social media platforms &
          website but also maximizes viewer attention and retention by creating
          brand logo, 3d design, web and mobile application.
        </p>
      </div>
    </>
  );
};

export default About;
