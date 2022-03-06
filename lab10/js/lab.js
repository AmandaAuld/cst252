//author: amanda auld
//date: 03.06.2022
//public domain


function reorderUserName(word) {
  var wordArray = word.toLowerCase().split('');
  var newArray = shuffleArray(wordArray);
  return newArray.join('');
}


function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}


buttonEl = document.getElementById("my-button");
console.log("button element:", buttonEl);

inputEl = document.getElementById("user-name");
console.log("input element:", inputEl);

outputEl = document.getElementById("output");
console.log("output element:", outputEl);

buttonEl.addEventListener("click", function(){

var userName = inputEl.value;
