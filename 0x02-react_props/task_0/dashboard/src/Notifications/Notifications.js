import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utilis/utils";

function Notifications() {
  const handleButtonClick = () => {
    console.log("Close button has been clicked");
  };
  return (
    <div className="Notifications">
      <button
        style={{ float: "right" }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        <img src={closeIcon} alt="Close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          data-priority="urgent"
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
