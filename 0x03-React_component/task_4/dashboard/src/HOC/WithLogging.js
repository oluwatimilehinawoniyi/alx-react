import React, { Component } from "react";

const WithLogging = (WrappedComponent) => {
  class HOC extends Component {
    componentDidMount() {
      console.log(
        `Component ${this.getDisplayName(WrappedComponent)} is mounted`
      );
    }

    componentWillUnmount() {
      console.log(
        `Component ${this.getDisplayName(WrappedComponent)} is going to unmount`
      );
    }

    getDisplayName(WrappedComponent) {
      return (
        WrappedComponent.displayName || WrappedComponent.name || "Component"
      );
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  HOC.displayName = `WithLogging(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return HOC;
};

export default WithLogging;
