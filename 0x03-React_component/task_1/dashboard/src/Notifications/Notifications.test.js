import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications", () => {
  let wrapper;
  let consoleSpy;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
    consoleSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders NotificationItem elements", () => {
    expect(wrapper.find(NotificationItem).length).toEqual(3);
  });

  it("renders the text 'Here is the list of notifications'", () => {
    expect(wrapper.text()).toContain("Here is the list of notifications");
  });

  it("renders the first NotificationItem element with correct HTML", () => {
    const firstNotificationItem = wrapper.find(NotificationItem).first();
    const htmlProp = firstNotificationItem.prop("html");
    expect(htmlProp).toEqual({ __html: "<u>test</u>" });
  });

  it("renders the menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find(".menuItem").exists()).toBe(true);
  });

  it("renders the div.Notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find(".Notifications").exists()).toBe(false);
  });

  it("renders the menu item when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".menuItem").exists()).toBe(true);
  });

  it("renders the div.Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".Notifications").exists()).toBe(true);
  });

  it("renders correctly with an empty array or no listNotifications prop", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders NotificationItems correctly with the right number of NotificationItem", () => {
    const listNotifications = [
      {
        id: 1,
        html: { __html: "New course available" },
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        html: { __html: "New resume available" },
        type: "urgent",
        value: "New resume available",
      },
    ];
    const wrapper = shallow(
      <Notifications listNotifications={listNotifications} />
    );
    expect(wrapper.find(NotificationItem).length).toEqual(
      listNotifications.length
    );
  });

  it('displays "No new notification for now" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain("No new notification for now");
    expect(wrapper.text()).not.toContain("Here is the list of notifications");
  });

  it("calls console.log with correct message when markAsRead is called", () => {
    const id = 1;
    wrapper.instance().markAsRead(id);
    expect(consoleSpy).toHaveBeenCalledWith(
      `Notification ${id} has been marked as read`
    );
  });
});
