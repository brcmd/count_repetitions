var numList = [1, 1, 1, 5, 5, 8, 8, 8, 13, 0, 0, 0, 0];
var num = parseInt(prompt("Write a number"));
var count = 0;

for (var i = 0; i < numList.length; i++) {
  if (num == numList[i]) {
    count++;
  }
}
alert("Your number is repated " + count + " times");
