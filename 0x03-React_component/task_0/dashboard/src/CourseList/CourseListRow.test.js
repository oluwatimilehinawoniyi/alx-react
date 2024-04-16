import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow", () => {
  it("renders one cell with colspan=2 when textSecondCell does not exist", () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Header" isHeader={true} />
    );
    expect(wrapper.find("th").prop("colSpan")).toEqual("2");
  });

  it("renders two cells when textSecondCell is present", () => {
    const wrapper = shallow(
      <CourseListRow
        textFirstCell="Header"
        textSecondCell="Second Header"
        isHeader={true}
      />
    );
    expect(wrapper.find("th").length).toEqual(2);
  });

  it("renders correctly two td elements within a tr element", () => {
    const wrapper = shallow(
      <CourseListRow
        textFirstCell="First Cell"
        textSecondCell="Second Cell"
        isHeader={false}
      />
    );
    expect(wrapper.find("td").length).toEqual(2);
  });
});
