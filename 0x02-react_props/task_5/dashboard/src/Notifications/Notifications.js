import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utilis/utils";
import NotificationItemShape from "./NotificationItemShape";

function Notifications({ displayDrawer }) {
  const handleButtonClick = () => {
    console.log("Close button has been clicked");
  };
  return (
    <>
      <div className="menuItem">Your notifications</div>
      <div className={`Notifications ${displayDrawer ? "show" : ""}`}>
        <button
          style={{ float: "right" }}
          aria-label="Close"
          onClick={handleButtonClick}
        >
          <img src={closeIcon} alt="Close" />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem
            type="urgent"
            html={{ __html: getLatestNotification() }}
          />
        </ul>
      </div>
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;
