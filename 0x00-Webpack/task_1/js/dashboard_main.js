import $ from "jquery";

$(function () {
	$("body").append("<p>Holberton Dashboard</p>");
	$("body").append("<p>Dashboard data for the students</p>");
	$("body").append(
		'<button id="getStartedButton">Click here to get started</button>'
	);
	$("body").append('<p id="count"></p>');
	$("body").append("<p>Copyright - Holberton School</p>");
});

let count = 0;
function updateCounter() {
	count += 1;
	$("#count").text(`${count} clicks on the button`);
}

$("#startButton").on("click", _.debounce(updateCounter, 200));
