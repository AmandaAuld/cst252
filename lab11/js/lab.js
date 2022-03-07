//author: amanda auld
//date: 03.07.2022
//public domain

//jQuery button push
$("#output").html("<button id=my-button>Press Me");

// this creates the alert
$("button").click(function(){
    alert('You pushed my button!')
});

//this makes the button green
$("button").css("background-color", "#3CB371");
