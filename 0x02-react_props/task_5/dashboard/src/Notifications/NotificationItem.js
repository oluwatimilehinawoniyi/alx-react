import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";

export default function NotificationItem({ type = "default", html, value }) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>
      {value}
    </li>
  );
}
NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};