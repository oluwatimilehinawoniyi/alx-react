import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from "aphrodite";

function CourseList({ listCourses }) {
  const styles = StyleSheet.create({
    courseList: {
      width: "100%",
      borderCollapse: "collapse",
      border: "1px solid #dddddd",
    },
    tableHeaderCell: {
      border: "1px solid #dddddd",
      padding: "8px",
      textAlign: "left",
    },
  });

  return (
    <table className={css(styles.courseList)}>
      <thead>
        <CourseListRow
          textFirstCell="Available courses"
          isHeader={true}
          customStyles={styles.tableHeaderCell}
        />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
          customStyles={styles.tableHeaderCell}
        />
      </thead>
      <tbody>
        {listCourses.map((course) => (
          <CourseListRow
            key={course.id}
            textFirstCell={course.name}
            textSecondCell={course.credit}
          />
        ))}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape).isRequired,
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
