import React from "react";
import "./hero.css";
import { useNavigate } from "react-router-dom";

import HeroImg from "../../assets/images/heroImg.jpg";
import profile1 from "../../assets/images/profile1.jpg";
import profile2 from "../../assets/images/profile2.jpg";
import profile3 from "../../assets/images/profile3.jpg";
import profile4 from "../../assets/images/profile4.png";

export function Hero() {
  const navigate = useNavigate();
  const HandleVolunteerClick = () => {
    navigate("/volunteer");
  };
  const HandleExploreClick = () => {
    navigate("/causes");
  };
  return (
    <section className="HeroMainSec">
      <div className="FirstHeroColor"></div>
      <div className="SecondHeroColor"></div>
      <div className="HeroContentMainDiv">
        <div className="HeroMainWordingHero">
          <p id="SloganText" className="italics">
            to make Africa a mother of opportunities
          </p>
          <div className="MainTittleAndDescMainDiv">
            <p className="MainTittleOnHero medium">
              Empowering children,
              <br />
              is inspiring hope
            </p>
            <p className="MainDescOnHero regular">
              Watoto Ni Wetu Foundation empowers children by providing
              education, healthcare and mentorship, fostering confidence, skills
              and opportunities.We nurture their potential, ensuring a brighter
              and self-sustaining future for every child.
            </p>
            <div className="MainHeroButtonDiv">
              <button
                className="ExploreCauseBtnAtHero"
                onClick={HandleExploreClick}
              >
                Explore causes
              </button>
              <button
                className="VolunteerBtnAtHero"
                onClick={HandleVolunteerClick}
              >
                Volunteer
              </button>
            </div>
            <div className="TargetedChildrenMainDiv">
              <div className="ProfileImagesDivOnly">
                <img src={profile1} alt="" />
                <img src={profile2} alt="" id="pr" />
                <img src={profile3} alt="" id="pr" />
                <img src={profile4} alt="" id="pr" />
              </div>
              <p className="regular">
                10k+ <br />
                targeted children this year
              </p>
            </div>
          </div>
        </div>
        <div className="HeroImgMainDiv">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </section>
  );
}
