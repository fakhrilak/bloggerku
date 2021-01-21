import React from "react";
import "./Profile.css";
import avatar from "../img/profile1.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faTransgender,
  faPhone,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-desc">
          <div className="profile-data">
            <h2>Profile</h2>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="profile-details">
              <span>Fullname</span>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                Fakhril AK
              </span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="profile-details">
              <span>Email</span>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                fakhrilak23@gmail.com
              </span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <FontAwesomeIcon icon={faTransgender} />
            </div>
            <div className="profile-details">
              <span>Gender</span>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                Male
              </span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="profile-details">
              <span>Phone</span>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                081299243859
              </span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <FontAwesomeIcon icon={faLocationArrow} />
            </div>
            <div className="profile-details">
              <span>Address</span>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                Bojonegoro
              </span>
            </div>
          </div>
        </div>
        <div className="profile-img">
          <img src={avatar} alt="avatar" className="profile-avatar" />
        </div>
      </div>
    </div>
  );
};

export default Profile;