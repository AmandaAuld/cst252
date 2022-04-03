//author: amanda auld
//date: 04.04.2022
//public domain

$("#button").click(function(){
function Vehicle(make, model, year, color, extras) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  this.talk = function(){
    return this.make + this.model + this.year + "is " + this.color + " with " + this.extras;
  }
}

var ford = new Vehicle("Ford ", "Focus ", "2013 ", "Grey", "no extras");
  $("#output").append("<p>"+ ford.talk() + "</p>");

var acura = new Vehicle("Acura ", "TSX ", "1999 ", "Red ", "two doors");
  $("#output").append("<p>"+ acura.talk() + "</p>");
});
