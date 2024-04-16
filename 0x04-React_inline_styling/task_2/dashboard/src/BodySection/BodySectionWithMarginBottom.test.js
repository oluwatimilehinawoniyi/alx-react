import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("BodySectionWithMarginBottom Component", () => {
  it("renders correctly with BodySection component and props passed correctly", () => {
    const title = "test title";
    const children = <p>test children node</p>;

    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );

    expect(wrapper.find(BodySection)).toHaveLength(1);

    expect(wrapper.find(BodySection).prop("title")).toEqual(title);
    expect(wrapper.find(BodySection).contains(children)).toEqual(true);
  });
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});