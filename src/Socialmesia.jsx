import React from "react";

import bannerimage from "./Image/image.png";
import bannerimage2 from "./Image/location.png";
import bannerimage3 from "./Image/social.png";

const Socialmedia = () =>{
    return(
        <>
        
      <div className="banner-flex">
        <div className="banner-img">
          <img src={bannerimage} alt="" />
        </div>
        <div className="banner-text">
          <h1>Social Media</h1> 
          <h2>Marketing for Businesses</h2>
          <p>
            Social media marketing is a powerful way for businesses of all sizes
            to reach prospects and customers. People discover, learn about,
            follow, and shop from brands on social media, so if you’re not on
            platforms like Facebook, Instagram, and LinkedIn, you’re missing
            out! Great marketing on social media can bring remarkable success to
            your business, creating devoted brand advocates and even driving
            leads and sales.
          </p>
          <h3>WE BRING LIFE TO YOUR IDEAS AND DREAMS.</h3>
        </div>
      </div>
      <div className="banner-flex flex-banner">
        <div className="banner-text-2">
          <h1>Audience</h1>
          <h2>our social media target audience</h2>
          <p>
            A social media target audience is a group of people that you've
            identified that you want to appeal to. This can be based on
            demographics such as age, job title, income level, education,
            location, or behavior.
          </p>
        </div>
        <div className="banner-image-2">
          <img src={bannerimage2} alt="" />
        </div>
      </div>
      <div className="banner-flex2">
        <div className="banner-text-3">
            <h1>choice is your</h1>
            <p>we will maintain your business appearance in world.</p>
        </div>
        <div className="banner-image-3">
      <img src={bannerimage3} alt="" />
        </div>
      </div>
      </>
    )
};
export default Socialmedia;