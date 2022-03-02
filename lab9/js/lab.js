//author: amanda auld
//date: 03.01.2022
//public domain

var targetEl = document.getElementById("output");

var newEl = document.createElement("button");

targetEl.appendChild(newEl);

newEl.innerHTML = "Click me";
newEl.style.backgroundColor = "red";
newEl.style.color = "black";
newEl.style.fontSize = "100px";
newEl.style.width = "200px";
