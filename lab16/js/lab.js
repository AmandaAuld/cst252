//author: amanda auld
//date: 04.04.2022
//public domain

//create an object constructor called Vehicle that takes "make",
//"model", "year", "color", and "extras" as parameters and stores this
$("#button").click(function(){
function Vehicle(make, model, year, color, extras) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  //add method talk() that prints the vehicle's details
  this.talk = function(){
    return this.make + this.model + this.year + "is " + this.color + " with " + this.extras;
  }
}

//create ford object
var ford = new Vehicle("Ford ", "Focus ", "2013 ", "Grey", "no extras");
//reference the tlak method
  $("#output").append("<p>"+ ford.talk() + "</p>");


//create acura object
var acura = new Vehicle("Acura ", "TSX ", "1999 ", "Red ", "two doors");
//reference the talk method
  $("#output").append("<p>"+ acura.talk() + "</p>");
});
