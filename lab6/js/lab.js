//author: amanda auld
//date: 02.20.2022
//public domain

//Define Variables
myTransport = ["Ford Focus", "Monterey-Salinas Transit", "Walking", "Uber"
];

myMainRide = {
  make : "Ford",
  model : "Focus",
  color : "grey",
  year : 2013,
  age : function() {
    return 2022 - age;
  }
}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My main ride: <pre>",
JSON.stringify(myMainRide, null, '\t'), "</pre>");
