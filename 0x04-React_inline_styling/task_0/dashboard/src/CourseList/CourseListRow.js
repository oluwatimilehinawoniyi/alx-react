import React from "react";
import PropTypes from "prop-types";

const rowStyle = {
  backgroundColor: "#f5f5f5ab",
};

const headerRowStyle = {
  backgroundColor: "#deb5b545",
};

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell }) {
  return (
    <tr style={isHeader ? headerRowStyle : rowStyle}>
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
