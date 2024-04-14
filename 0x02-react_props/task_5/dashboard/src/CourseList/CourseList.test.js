import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList", () => {
  it("renders CourseList component without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the 5 different rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow).length).toEqual(5);
  });

  it("renders correctly with an empty array or no listCourses prop", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders courses correctly when listCourses is passed", () => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find("tr").length).toEqual(listCourses.length);
  });
});
