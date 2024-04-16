import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});

const NotificationItem = React.memo(({ type, value, html, markAsRead }) => {
  return (
    <li
      className={css(type === "urgent" ? styles.urgent : styles.default)}
      data-testid="notification-item"
      onClick={() => markAsRead(value)}
    >
      {html ? <div dangerouslySetInnerHTML={html}></div> : value}
    </li>
  );
});

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: null,
};

export default NotificationItem;