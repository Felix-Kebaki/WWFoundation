import React from "react";
import "./causeExplore.css";
import { useNavigate } from "react-router-dom";

import education from "../../assets/images/education.jpg";
import basics from '../../assets/images/basics.jpg'
import mental from '../../assets/images/mental.jpg'

export function CauseExplore() {
  const navigate=useNavigate();

  const HandleClickCauses=()=>{
    navigate("/causes")
  }
  return (
    <section className="CauseExploreMainSec">
      <div className="CauseExploreMainDiv">
        <p className="OurActivitiesTittle italics">Our activities</p>
        <div className="OurActivityIntroDiv">
          <p className="ExploreTittleActy medium">Explore our Causes</p>
          <p className="ExploreActivityDesc regular">
            Discover our causes and join us in empowering children through
            education, healthcare and mentorship, creating brighter futures and
            stronger communities.
          </p>
          <div className="AllCausesDivAtActBtn">
            <button className="italics" onClick={HandleClickCauses}>All Causes</button>
          </div>
        </div>
        <div className="FewActivitiesInTheirMainDiv">
          <div className="EachActivitiesInTheirDiv">
            <img src={education} alt="" />
            <div className="CauseHomeOverlay"></div>
            <div className="EachActivitiesTextMainDiv">
              <p id="EachActivityMainTittle" className="medium">Education</p>
              <p  id="EachActivityMainDesc" className="regular">We provide education sponsorship, supporting children from primary to high school, ensuring they learn, grow and achieve their dreams.</p>
            </div>
          </div>
          <div className="EachActivitiesInTheirDiv">
            <img src={basics} alt="" />
            <div className="CauseHomeOverlay"></div>
            <div className="EachActivitiesTextMainDiv">
              <p id="EachActivityMainTittle" className="medium">Basic Needs</p>
              <p id="EachActivityMainDesc" className="regular">We collect donations from well-wishers to provide essential needs to children in orphanages, ensuring their comfort and well-being.</p>
            </div>
          </div>
          <div className="EachActivitiesInTheirDiv">
            <img src={mental} alt="" />
            <div className="CauseHomeOverlay"></div>
            <div className="EachActivitiesTextMainDiv">
              <p id="EachActivityMainTittle" className="medium">Mental Well-being</p>
              <p  id="EachActivityMainDesc" className="regular">We support children's mental well-being through counseling, mentorship and emotional support, fostering resilience, confidence and a positive outlook.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
