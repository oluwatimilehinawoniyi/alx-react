import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import "./App.css";

function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <hr />
        <body className="App-body">
          {isLoggedIn ? <CourseList /> : <Login />}
        </body>
        <Footer />
        <hr />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default App;
