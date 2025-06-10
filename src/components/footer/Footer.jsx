import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

import Volunteer from "../../assets/images/volunteer.png";
import Logo from "../../assets/images/WWF.png";

export function Footer() {
  const navigate = useNavigate();
  const HandleJoinUs = () => {
    navigate("/volunteer");
  };
  return (
    <section className="FooterMainSec">
      <div className="FooterMainDiv">
        <div className="VolunteerMainDiv">
          <div className="VolunteerDetailsDiv">
            <p className="VolunteerMainTittle medium">
              Become a Volunteer for <br />
              making a better tomorrow
            </p>
            <p className="VolunteerDesc regular">
              We believe in the power of community and collaboration and we
              welcome partnerships with individuals, organizations and student
              leaders who share our vision of a bright future for every child.
            </p>
            <div className="JoinVolunteeringBtnDiv">
              <button onClick={HandleJoinUs}>Join us</button>
            </div>
          </div>
          <div className="VolunteerMainImgDiv">
            <img src={Volunteer} alt="" />
          </div>
        </div>
        <div className="FooterLinksMainDiv">
          <div className="ImageAtFooterDiv">
            <img src={Logo} alt="" />
          </div>
          <div className="LinksAndContactInfoFooterDiv">
            <div className="QuickLinksDivOnly">
              <p className="medium">Quick links</p>
              <Link to="/" className="regular" id="firstAtFooter">
                <FontAwesomeIcon icon={faAngleRight} id="ArrowIconFooter" />
                Home
              </Link>
              <Link to="/about" className="regular">
                <FontAwesomeIcon icon={faAngleRight} id="ArrowIconFooter" />
                About
              </Link>
              <Link to="/causes" className="regular">
                <FontAwesomeIcon icon={faAngleRight} id="ArrowIconFooter" />
                Causes
              </Link>
              <Link to="/contact" className="regular">
                <FontAwesomeIcon icon={faAngleRight} id="ArrowIconFooter" />
                Contact
              </Link>
            </div>
            <div className="GetInTouchFooterDiv">
              <p className="GetInTouchFooterTitleActual medium">Get in touch</p>
              <div className="GetInTouchDisplayColumn regular">
                <div className="GetInTouchDisplay" id="firstAtFooter">
                  <FontAwesomeIcon icon={faPhone} id="ArrowIconFooter" />
                  <div>
                    <p>+254762294119</p>
                    <p>+254799019135</p>
                  </div>

                </div>
                <div className="GetInTouchDisplay">
                  <FontAwesomeIcon icon={faEnvelope} id="ArrowIconFooter" />
                  <p id="LongEmailFooter">watotoniwetufoundation@gmail.com</p>
                </div>
                <p id="LocationFooter">
                  <FontAwesomeIcon icon={faLocationDot} id="ArrowIconFooter" />
                  Uasin Gishu,Eldoret
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="CopyrightMainDiv">
          <p className="regular">
            copyright © {new Date().getFullYear()} Watoto Ni Wetu Foundation.All
            Right Reserved.Built by{" "}
            <a
              href="https://felix-kebaki.github.io/Portfolio/"
              className="italics"
              target="_blank"
              rel="noopener noreferrer"
            >
              felixkebakiTech
            </a>
          </p>
          <div className="FooterSocialIconsDiv">
            <a
              href="https://x.com/WATOTONIWETU?t=LAsQl8NCgW7UrkRpYVQmsQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} id="iconSocials" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61573584983539&mibextid=rS40aB7S9Ucbxw6v"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} id="iconSocials" />
            </a>
            <a
              href="https://www.instagram.com/watotowetufoundation1?igsh=YzljYTk1ODg3Zg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} id="iconSocials" />
            </a>
            <a
              href="https://tiktok.com/@watotowetufoundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} id="iconSocials" />
            </a>
            <a
              href="https://www.youtube.com/@WatotoniWetuFoundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} id="iconSocials" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
