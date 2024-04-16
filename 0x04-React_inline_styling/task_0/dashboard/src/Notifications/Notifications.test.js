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

  // Existing tests...

  it("should not rerender when updating props with the same list", () => {
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
    const shouldComponentUpdateSpy = jest.spyOn(
      Notifications.prototype,
      "shouldComponentUpdate"
    );

    // Update props with the same list
    wrapper.setProps({ listNotifications });

    expect(shouldComponentUpdateSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.find(NotificationItem).length).toEqual(
      listNotifications.length
    );

    shouldComponentUpdateSpy.mockRestore();
  });

  it("should rerender when updating props with a longer list", () => {
    const listNotifications = [
      {
        id: 1,
        html: { __html: "New course available" },
        type: "default",
        value: "New course available",
      },
    ];
    const longerListNotifications = [
      ...listNotifications,
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
    const shouldComponentUpdateSpy = jest.spyOn(
      Notifications.prototype,
      "shouldComponentUpdate"
    );

    // Update props with a longer list
    wrapper.setProps({ listNotifications: longerListNotifications });

    expect(shouldComponentUpdateSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.find(NotificationItem).length).toEqual(
      longerListNotifications.length
    );

    shouldComponentUpdateSpy.mockRestore();
  });
});
