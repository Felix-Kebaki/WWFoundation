import React from "react";
import './missionVission.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {faRocket} from '@fortawesome/free-solid-svg-icons'

import MissionBackground from "../../assets/images/topCause.jpg";
import VissionBackground from '../../assets/images/backgroundImg.jpg'

export function MissionVission() {
  return (
    <section className="MissionVissionMainSec">
      <div className="MissionVissionMainDiv">
        <div className="EachDivAtMissionVission">
          <img src={MissionBackground} alt="" />
          <div className="EachDivMainContentAtMissionVission">
            <p id="VissionMissionTitle" className="medium">Mission <FontAwesomeIcon icon={faRocket} id="MissionVissionIcon"/></p>
            <p id="VissionMissionDesc" className="regular">
              To uplift vulnerable children in rural communities by providing
              them with essential support in education, food, clothing, shelter,
              and mental recovery.
            </p>
          </div>
        </div>
        <div className="EachDivAtMissionVission">
          <img src={VissionBackground} alt="" />
          <div className="EachDivMainContentAtMissionVission">
            <p id="VissionMissionTitle" className="medium">Vission <FontAwesomeIcon icon={faEye} id="MissionVissionIcon"/></p>
            <p id="VissionMissionDesc" className="regular">
            To create a thriving future where every vulnerable child in Africa’s rural communities has access to education, nourishment, shelter and emotional well-being, empowering them to reach their full potential and break the cycle of poverty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
