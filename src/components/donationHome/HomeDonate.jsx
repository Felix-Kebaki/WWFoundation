import React from "react";
import "./homeDonate.css";
import { useNavigate } from "react-router-dom";
import BackgroundDonate from "../../assets/images/backgroundImg.jpg";

export function HomeDonate() {
  const navigate=useNavigate()
  const HandleDonateClick=()=>{
    navigate("/WWFoundation/donate")
  }
  return (
    <section className="HomeDonateMainSec">
      <div className="HomeDonateBackgroundImg">
        <img src={BackgroundDonate} alt="" id="BackgroundDonate" />
      </div>
      <div className="HomeDonateMainDiv">
        <p className="HomeDonateMainTitle medium">Help us Send Children to School</p>
        <p className="HomeDonateMainDesc regular">Help transform lives! Support our foundation in sending African children to school. Your generosity provides education, hope and a brighter future. Make a difference today!</p>
        <div className="HomeDonateMainBtnDiv">
            <button onClick={HandleDonateClick}>Donate Now</button>
        </div>
      </div>
    </section>
  );
}
