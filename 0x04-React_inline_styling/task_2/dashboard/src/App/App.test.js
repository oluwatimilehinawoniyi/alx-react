import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { StyleSheetTestUtils } from "aphrodite";


StyleSheetTestUtils.suppressStyleInjection();
describe("App Component", () => {
  let wrapper;
  let logOutMock;

  beforeEach(() => {
    logOutMock = jest.fn();
    wrapper = shallow(<App logOut={logOutMock} />);
  });

  it("contains the Notifications component", () => {
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it("contains the Header component", () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it("contains the Login component", () => {
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it("contains the Footer component", () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it("renders CourseList is not displayed", () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.contains(<CourseList />)).toBe(false);
  });

  describe("when isLoggedIn is true", () => {
    it("renders the CourseList component", () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.contains(<CourseList />)).toBe(true);
    });

    it("does not include the Login component", () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.contains(<Login />)).toBe(false);
    });
  });

  describe("key press event", () => {
    beforeEach(() => {
      wrapper.instance().handleKeyDown = jest.fn(
        wrapper.instance().handleKeyDown.bind(wrapper.instance())
      );
      wrapper.update();
    });

    it("calls logOut function and displays alert when pressing control + h", () => {
      const event = { ctrlKey: true, key: "h" };
      wrapper.instance().handleKeyDown(event);
      expect(logOutMock).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith("Logging you out");
    });
  });
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});