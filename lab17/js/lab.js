// author: amanda auld
// date: 04.06.2022
// public domain
//

//produces info through button
$("#button").click(function(){
  class Vehicle{
    //stating the different values
    constructor(make, model, year, color, extras)
    {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.extras = extras;
    }
    //returns the info
    info(){
      return this.make + this.model + this.year + "is " + this.color + " with " + this.extras;

  }
}
//the specific JavaScript class is summoned during the click with the right info.
ford = new Vehicle("Ford ", "Focus ", "2013 ", "Grey", "no extras");
  $("#output").append("<p>"+ ford.info() + "</p>");

acura = new Vehicle("Acura ", "TSX ", "1999 ", "Red ", "two doors");
  $("#output").append("<p>"+ acura.info() + "</p>");
});
