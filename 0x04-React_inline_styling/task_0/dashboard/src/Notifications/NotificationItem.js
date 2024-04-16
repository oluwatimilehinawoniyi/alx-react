import React from "react";
import PropTypes from "prop-types";

const NotificationItem = React.memo(({ type, value, html, markAsRead }) => {
  return (
    <li data-testid="notification-item" onClick={() => markAsRead(value)}>
      {html ? <div dangerouslySetInnerHTML={html}></div> : value} {" "}
      {type && <span>{type}</span>}{" "}
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
