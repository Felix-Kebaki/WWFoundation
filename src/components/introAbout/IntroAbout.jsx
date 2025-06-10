import React from "react";
import "./introAbout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import AboutImg from "../../assets/images/aboutImg.jpg";
import integrity from "../../assets/images/integrity.png";
import empower from "../../assets/images/empower.png";

export function IntroAbout() {
  const navigate=useNavigate()
  const HandleDonateClick=()=>{
    navigate("/donate")
  }
  return (
    <section className="IntroAboutMainSec">
      <div className="IntroAboutMainDiv">
        <div className="IntroAboutMainDiv1">
          <div className="AboutMainImgDiv">
            <img src={AboutImg} alt="" id="AboutMainImg" />
          </div>
          <div className="AboutMainContentDiv">
            <p id="AboutMainWittyTitle" className="medium">
              Driven by Purpose,
              <br />
              Powered by Compassion
            </p>
            <p id="AboutMainWittyDec1" className="regular">
              Watoto Ni Wetu Foundation is an African-based organization
              dedicated to uplifting underprivileged children by providing
              education, healthcare, and essential amenities. We support
              children up to high school, ensuring they have access to quality
              learning, medical care, and basic needs. Our mission is to break
              the cycle of poverty by equipping young minds with the tools to
              succeed and thrive in their communities.
            </p>
            <p id="AboutMainWittyDec1" className="regular">
              We rely on the generosity of well-wishers and donors to make a
              lasting impact. Through their support, we visit orphanages and
              vulnerable children, offering essential supplies, mentorship, and
              hope for a brighter future. Every contribution helps us create
              meaningful change, empowering the next generation to build a
              stronger, self-sustaining Africa.
            </p>

            <div className="AboutUsPageDonteBtnDiv">
              <button onClick={HandleDonateClick}>Donate Now</button>
            </div>
          </div>
        </div>
        <div className="IntroAboutMainDiv2">
          <div className="IntroAboutIconSideMainDiv Div1">
            <div className="AboutIconOrImageDiv">
              <img src={empower} alt="" />
            </div>
            <div>
              <p id="AboutValueAndDescMainTittle" className="medium">
                Empowerment
              </p>
              <p id="AboutValueAndDescActualDisc" className="regular">
                We equip children with education, skills and support to build a
                brighter future.
              </p>
            </div>
          </div>
          <div className="IntroAboutIconSideMainDiv Div2">
            <div className="AboutIconOrImageDiv DifferentBackground">
              <FontAwesomeIcon icon={faHeart} id="HeartIconAtAbout" />
            </div>
            <div className="AboutValueAndDescDiv">
              <p id="AboutValueAndDescMainTittle" className="medium">
                Compassion{" "}
              </p>
              <p id="AboutValueAndDescActualDisc" className="regular">
                We nurture every child with care, love and understanding.
              </p>
            </div>
          </div>
          <div className="IntroAboutIconSideMainDiv Div3">
            <div className="AboutIconOrImageDiv">
              <img src={integrity} alt="" />
            </div>
            <div>
              <p id="AboutValueAndDescMainTittle" className="medium">
                Integrity{" "}
              </p>
              <p id="AboutValueAndDescActualDisc" className="regular">
                We uphold honesty, transparency and commitment in all our
                efforts to impact children’s lives positively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
