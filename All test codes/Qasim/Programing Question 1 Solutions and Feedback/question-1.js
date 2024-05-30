// Question No 1
// Generic Approaches
function firEvenNum({ start = 1, end = 50, isEven = true }) {
  for (let i = start; i <= end; i++) {
    if (isEven && i % 2 == 0) {
      // console.log(i);
      let evenNum = document.getElementById("evenNum");
      evenNum.innerHTML += i + " ";
    } else if (!isEven && i % 2 !== 0) {
      let evenNum = document.getElementById("evenNum");
      evenNum.innerHTML += i + " ";
    }
  }
}
