import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";

describe("BodySection Component", () => {
  it("renders correctly with children and title", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Check if h2 element includes the correct title
    expect(wrapper.find("h2").text()).toEqual("test title");

    // Check if p element includes the correct children node
    expect(wrapper.find("p").text()).toEqual("test children node");
  });
});
