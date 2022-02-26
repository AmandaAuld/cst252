//author: amanda auld
//date: 02.23.2022
//public domain

function isEven(x){
  return (x % 2 == 0);
}

//test function
console.log("Is 1 even?", isEven(1));
console.log("Is 2 even?", isEven(2));

array = [50, 23, 6, 24, 18, 200, 900]
console.log("My array", array);

var result = array.map(isEven);
// should return
console.log("Test of evenness of array:", result);

var result = array.map(function(x){
  return x ** 0.5;
})
//should return
console.log("Squareroot of array:", result);
