import React from "react";
import "./Login.css";

export default function Login() {
    return (
      <>
        <p>Login to access the full dashboard:</p>
        <form action="">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />

          <button>OK</button>
        </form>
      </>
    );
}