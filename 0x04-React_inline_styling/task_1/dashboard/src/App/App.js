import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";

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

class App extends Component {
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
        <div className={css(styles.app)}>
          <Header />
          <hr className={css(styles.hr)} />
          <BodySectionWithMarginBottom title="Course list">
            {isLoggedIn ? <CourseList listCourses={listCourses} /> : null}
          </BodySectionWithMarginBottom>
          <BodySectionWithMarginBottom title="Log in to continue">
            {!isLoggedIn ? <Login /> : null}
          </BodySectionWithMarginBottom>
          <BodySection title="News from the School">
            <p>Some random text goes here...</p>
          </BodySection>
          <Footer className={css(styles.footer)} />
          <hr className={css(styles.hr)} />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;

const styles = StyleSheet.create({
  app: {
    fontSize: "1.3rem",
  },
  hr: {
    border: "2px solid rgb(230, 62, 62)",
  },
  body: {
    minHeight: "100vh",
    padding: "2rem",
  },
  footer: {
    textAlign: "center",
  },
});
