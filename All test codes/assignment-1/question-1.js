// Question No 1

function firEvenNum() {
  for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
      // console.log(i);
      let evenNum = document.getElementById("evenNum");
      evenNum.innerHTML += i + " ";
    }
  }
}
