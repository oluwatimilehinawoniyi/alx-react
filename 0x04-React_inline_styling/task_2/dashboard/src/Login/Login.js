import React from "react";
import { StyleSheet, css } from "aphrodite";


export default function Login() {
  const styles = StyleSheet.create({
    formContainer: {
      display: "flex",
      gap: "0.5rem",
    },
    label: {
      marginBottom: "0.5rem",
    },
  });

  return (
    <>
      <p>Login to access the full dashboard:</p>
      <form className={css(styles.formContainer)} action="">
        <label className={css(styles.label)} htmlFor="email">
          Email:
        </label>
        <input type="email" id="email" />

        <label className={css(styles.label)} htmlFor="password">
          Password:
        </label>
        <input type="password" id="password" />

        <button>OK</button>
      </form>
    </>
  );
}