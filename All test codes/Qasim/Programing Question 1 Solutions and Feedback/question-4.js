// Question No 4.\
function largestNumberQ_4() {
  let inputByUser = document.getElementById("userNumbersQ-4").value;
  inputByUser = inputByUser.replaceAll(" ", "");
  let newArr = inputByUser.split(",").sort((a, b) => b - a); // Desending Sort
  console.log(newArr);
  const resultOFQ = document.getElementById("resultOFQ-4");
  if (newArr[0] > newArr[1] * 1.2) {
    resultOFQ.innerHTML = `The third and last largest numbers in array are ${newArr[2]} and ${newArr[0]}`;
  } else {
    resultOFQ.innerHTML = "First number is not greater than 20%";
  }
}
// Wrong Answer, Comments : We should count remove the duplicates First
