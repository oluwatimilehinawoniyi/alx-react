import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import NotificationItem from "./NotificationItem";
import closeIcon from "../assets/close-icon.png";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

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
    const styles = StyleSheet.create({
      notifications: {
        border: "1px solid #ccc",
        padding: "10px",
      },
      menuItem: {
        fontWeight: "bold",
        marginBottom: "10px",
      },
      defaultNotification: {
        color: "blue",
      },
      urgentNotification: {
        color: "red",
      },
    });

    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>
        <div
          className={`${css(styles.notifications)} ${
            displayDrawer ? "show" : ""
          }`}
        >
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
                className={
                  notification.type === "default"
                    ? css(styles.defaultNotification)
                    : css(styles.urgentNotification)
                }
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
