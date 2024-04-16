import React from "react";
import logo from "../assets/Holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";


export default function Header() {
  const styles = StyleSheet.create({
    appHeader: {
      display: "flex",
      alignItems: "center",
      fontSize: "calc(10px + 2vmin)",
      color: "rgb(230, 62, 62)",
    },
    appLogo: {
      height: "40vmin",
      pointerEvents: "none",
    },
  });

  return (
    <header className={css(styles.appHeader)}>
      <img src={logo} className={css(styles.appLogo)} alt="logo" />
      <h1 className={css(styles.headerTitle)}>School dashboard</h1>
    </header>
  );
}