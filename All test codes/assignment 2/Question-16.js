// write a program which should display largest possible sum out of 100 values
let givenList = [20, 40, 45, 82, 88, 88, 88, 63, 51, 74, 88, 63, 33];
givenList = givenList.sort();
let possibleSum = 0;
for (let i = 0; i < givenList.length; i++) {
  if (givenList[i] + givenList[i + 1] > possibleSum) {
    possibleSum = givenList[i] + givenList[i + 1];
  }
}
$("#resultOf-Q16").text(
  `largest possible sum is ${possibleSum} for given list [${givenList}]`
);
