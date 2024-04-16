import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("NotificationItem Component", () => {
  it("renders without crashing", () => {
    shallow(<NotificationItem />);
  });

  it("renders correct type and value props", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.props()["data-notification-type"]).toEqual("default");
    expect(wrapper.text()).toEqual("test");
  });

  it("renders correct HTML when html prop is provided", () => {
    const htmlProp = { __html: "<u>test</u>" };
    const wrapper = shallow(<NotificationItem html={htmlProp} />);
    expect(wrapper.html()).toContain("<u>test</u>");
  });

  it("calls markAsRead with correct ID when clicked", () => {
    const markAsReadMock = jest.fn();
    const id = 1;
    const wrapper = shallow(
      <NotificationItem value="test" markAsRead={markAsReadMock} />
    );
    wrapper.find("[data-testid='notification-item']").simulate("click");
    expect(markAsReadMock).toHaveBeenCalledWith("test");
  });
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});