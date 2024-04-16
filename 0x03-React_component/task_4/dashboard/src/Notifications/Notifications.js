import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import closeIcon from "../assets/close-icon.png";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Compare the length of listNotifications between current and next props
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
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
            {listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                markAsRead={this.markAsRead}
              />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
