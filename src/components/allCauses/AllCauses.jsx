import React from "react";
import "./allCauses.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

import { allCauses } from "../../constants";

export function AllCauses() {
  const navigate=useNavigate()
  const HandleContactClick=()=>{
    navigate("/contact")
  }
  return (
    <section className="AllCausesMainSec">
      <div className="AllCausesMainDiv">
        <p className="italics" id="AllCausesMainTitle">
          All causes
        </p>
        <p id="IntroToAllCausesTitle" className="medium">
          Explore our causes and discover how we empower children through
          education, mentorship and essential support for a brighter future.
        </p>
        <div className="AllCausesDisplayDiv">
          {allCauses &&
            allCauses.map((cause) => (
              <div className="EachCauseCausePageMainDiv" key={cause.id}>
                <div className="causeName medium">{cause.topTopic}</div>
                <div className="EachCauseCausePageDiv">
                  <p className="EachCauseCausePgMainTittle medium">
                    {cause.activityName}
                  </p>
                  <div className="EachCauseAllDesc regular">
                  <p>
                    {cause.activityDesc}
                  </p>
                  </div>
                  <img src={cause.image} id="EachCauseImgCausePage" alt="" />
                  <div className="EachCauseAtCausePgMainBtnDiv">
                    <button onClick={HandleContactClick}>
                      Inquire{" "}
                      <FontAwesomeIcon
                        icon={faSquareArrowUpRight}
                        id="inquireIcon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
