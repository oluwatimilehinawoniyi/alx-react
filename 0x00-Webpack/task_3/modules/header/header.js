import $ from "jquery";
import "./header.css";

$("body").prepend("<header><h1>Holberton Dashboard</h1></header>");
$("#logo").appendTo("header");
console.log("Init header");
