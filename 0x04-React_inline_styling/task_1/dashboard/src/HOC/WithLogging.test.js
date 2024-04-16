import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import WithLogging from "./WithLogging";

// Mock console.log
const mockedConsoleLog = jest
  .spyOn(console, "log")
  .mockImplementation(() => {});

// Test for pure HTML element
test('console.log called on mount and unmount with "Component" for pure HTML element', () => {
  const WrappedComponent = () => <p>Hello, world!</p>;
  const WithLoggingWrappedComponent = WithLogging(WrappedComponent);

  act(() => {
    render(<WithLoggingWrappedComponent />, document.createElement("div"));
  });
  expect(mockedConsoleLog).toHaveBeenCalledWith("Component is mounted");

  act(() => {
    unmountComponentAtNode(document.createElement("div"));
  });
  expect(mockedConsoleLog).toHaveBeenCalledWith(
    "Component is going to unmount"
  );
});

// Test for Login component
test("console.log called on mount and unmount with component name for Login component", () => {
  const Login = () => <div>Login component</div>;
  Login.displayName = "Login"; // Setting displayName for the component
  const WithLoggingLogin = WithLogging(Login);

  act(() => {
    render(<WithLoggingLogin />, document.createElement("div"));
  });
  expect(mockedConsoleLog).toHaveBeenCalledWith("Component Login is mounted");

  act(() => {
    unmountComponentAtNode(document.createElement("div"));
  });
  expect(mockedConsoleLog).toHaveBeenCalledWith(
    "Component Login is going to unmount"
  );
});

// Restore the mocked console.log
afterEach(() => {
  mockedConsoleLog.mockRestore();
});
