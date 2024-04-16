import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import "./App.css";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

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
  {
    id: 3,
    html: { __html: "New notification" },
    type: "urgent",
    value: "New notification",
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />
          <hr />
          <BodySectionWithMarginBottom title="Course list">
            {isLoggedIn ? <CourseList listCourses={listCourses} /> : null}
          </BodySectionWithMarginBottom>
          <BodySectionWithMarginBottom title="Log in to continue">
            {!isLoggedIn ? <Login /> : null}
          </BodySectionWithMarginBottom>
          <BodySection title="News from the School">
            <p>Some random text goes here...</p>
          </BodySection>
          <Footer />
          <hr />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func.isRequired,
};
