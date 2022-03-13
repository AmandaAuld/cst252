//author: amanda auld
//date: 03.12.2022
//public domain

//find the challenge button
$("#challenge-button").click(function(){
//remove the challenge 2 class
  $("#challenges").removeClass("challenge2");
//toggle challenge 1 for css change
  $("#challenges").toggleClass("challenge1");
});

//find the problem button
$("#problem-button").click(function(){
  //remove the problem 2 class
  $("#problem").removeClass("problem2");
  //toggle problem 1 for css change
  $("#problem").toggleClass("problem1");
});

//find the results button
$("#results-button").click(function() {
//remove the result 2 class
  $("#results").removeClass("result2");
//toggle the result 1 class for css change
  $("#results").toggleClass("result1");

});
