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
            To uplift and empower vulnerable children by providing access to education, basic needs, and mental well-being support, ensuring they have a strong foundation for a brighter future.
            </p>
          </div>
        </div>
        <div className="EachDivAtMissionVission">
          <img src={VissionBackground} alt="" />
          <div className="EachDivMainContentAtMissionVission">
            <p id="VissionMissionTitle" className="medium">Vission <FontAwesomeIcon icon={faEye} id="MissionVissionIcon"/></p>
            <p id="VissionMissionDesc" className="regular">
            To make Africa a mother of all opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
