import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import "./App.css";

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <hr />
        <body className="App-body">
          <Login />
        </body>
        <Footer />
        <hr />
      </div>
    </>
  );
}
export default App;
