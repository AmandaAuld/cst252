//author: amanda auld
//date: 02.22.2022
//public domain


//sortUserName - a function user input that sorts the letters
// of their name

function sortUserName(){
  var username = window.prompt("Hi! Please tell me your name so I can fix it!");
  console.log("userName=", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray=", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort=", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted=", nameSorted);
  return nameSorted;
}

//Output
document.writeln("Oh hey! I fixed your name: ",
sortUserName(), "</br>");
