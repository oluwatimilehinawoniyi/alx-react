import React from "react";
import logo from "../assets/Holberton_logo.jpg";
import "./Header.css";

export default function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>School dashboard</h1>
        </header>
    )
}