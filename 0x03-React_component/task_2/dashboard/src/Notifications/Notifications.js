import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utilis/utils";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer } = this.props;
    return (
      <>
        <div className="menuItem">Your notifications</div>
        <div className={`Notifications ${displayDrawer ? "show" : ""}`}>
          <button
            style={{ float: "right" }}
            aria-label="Close"
            onClick={() => console.log("Close button has been clicked")}
          >
            <img src={closeIcon} alt="Close" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem
              type="default"
              value="New course available"
              markAsRead={this.markAsRead}
            />
            <NotificationItem
              type="urgent"
              value="New resume available"
              markAsRead={this.markAsRead}
            />
            <NotificationItem
              type="urgent"
              html={{ __html: getLatestNotification() }}
              markAsRead={this.markAsRead}
            />
          </ul>
        </div>
      </>
    );
  }
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
