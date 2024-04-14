import React from "react";
import { getFullYear, getFooterCopy } from "../utilis/utils";
import "./Footer.css";

export default function Footer() {
    return (
      <footer className="App-footer">
            <p>{getFooterCopy(true)}</p>
            <p>{getFullYear()}</p>
      </footer>
    );
}