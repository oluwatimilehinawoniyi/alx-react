import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell }) {
  return (
    <tr>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        ) : (
          <th colSpan="2">{textFirstCell}</th>
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
