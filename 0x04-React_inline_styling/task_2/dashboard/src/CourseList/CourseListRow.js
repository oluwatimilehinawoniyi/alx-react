import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#f5f5f5ab",
  },
  headerRow: {
    backgroundColor: "#deb5b545",
  },
  headerCell: {
    border: "1px solid #dddddd",
    padding: "8px",
    textAlign: "left",
  },
});

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell }) {
  return (
    <tr className={css(isHeader ? styles.headerRow : styles.row)}>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th className={css(styles.headerCell)}>{textFirstCell}</th>
            <th className={css(styles.headerCell)}>{textSecondCell}</th>
          </>
        ) : (
          <th className={css(styles.headerCell)} colSpan="2">
            {textFirstCell}
          </th>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  textSecondCell: null,
};

export default CourseListRow;
