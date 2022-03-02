//author: amanda auld
//date: 03.01.2022
//public domain

//first button
var targetEl = document.getElementById("output");

var oneEl = document.createElement("button");
oneEl.id = "redbutton"

targetEl.appendChild(oneEl);

oneEl.innerHTML = "Click me";
oneEl.style.backgroundColor = "red";
oneEl.style.color = "black";
oneEl.style.fontSize = "100px";


//second button
var twoEl = document.createElement("button");
twoEl.id = "bluebutton"

targetEl.appendChild(twoEl);

twoEl.innerHTML = "Click me";
twoEl.style.backgroundColor = "blue";
twoEl.style.color = "black";
twoEl.style.fontSize = "100px";
