import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";

describe("BodySectionWithMarginBottom Component", () => {
  it("renders correctly with BodySection component and props passed correctly", () => {
    const title = "test title";
    const children = <p>test children node</p>;

    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>{children}</BodySectionWithMarginBottom>
    );

    // Check if BodySection component is rendered
    expect(wrapper.find(BodySection)).toHaveLength(1);

    // Check if props are passed correctly to the BodySection component
    expect(wrapper.find(BodySection).prop("title")).toEqual(title);
    expect(wrapper.find(BodySection).contains(children)).toEqual(true);
  });
});
