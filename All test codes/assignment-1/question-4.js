// Question No 4.\
function largestNumberQ_4() {
  let inputByUser = document.getElementById("userNumbersQ-4").value;
  inputByUser = inputByUser.replaceAll(" ", "");
  let newArr = inputByUser.split(",").sort((a, b) => b - a);
  console.log(newArr);
  if (newArr[0] > newArr[1] * 1.2) {
    document.getElementById(
      "resultOFQ-4"
    ).innerHTML = `The third and last largest numbers in array are ${newArr[2]} and ${newArr[0]}`;
  } else {
    document.getElementById("resultOFQ-4").innerHTML =
      "First number is not greater than 20%";
  }
}
