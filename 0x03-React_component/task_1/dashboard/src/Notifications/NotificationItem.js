import React, { Component } from "react";
import PropTypes from "prop-types";

class NotificationItem extends Component {
  render() {
    const { type, value, html, markAsRead } = this.props;
    return (
      <li data-testid="notification-item" onClick={() => markAsRead(value)}>
        {html ? <div dangerouslySetInnerHTML={html}></div> : value}
        {type && <span>{type}</span>}
      </li>
    );
  }
}

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
