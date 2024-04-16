import React from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

const BodySectionWithMarginBottom = ({ title, children }) => {
  const styles = StyleSheet.create({
    bodySectionWithMargin: {
      marginBottom: "40",
    },
  });

  return (
    <div className={css(styles.bodySectionWithMargin)}>
      <BodySection title={title}>{children}</BodySection>
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom;
