// Find the largest palindrome made from the product of two digit and 3-digit numbers.
// function to check the numbers for palindrome
function isNumPalindrome(num) {
  if (num === parseInt(num.toString().split("").reverse().join(""))) {
    return true;
  }
  return false;
}
$("#btnOF-Q17").click(function () {
  let startValue = $("#firstInp-Q17").val();
  let endValue = $("#secondInp-Q17").val();
  let resultOfQ17 = $("#resultOf-Q17");
  let largeValue = 0;
  let iValue = 0;
  let jValue = 0;
  let answerOfQ17 = false;
  if (!isNaN(startValue) && !isNaN(endValue)) {
    for (let i = startValue; i < endValue; i++) {
      for (let j = endValue; j > startValue; j--) {
        let multipleValue = i * j;
        if (isNumPalindrome(multipleValue) && multipleValue > largeValue) {
          largeValue = multipleValue;
          iValue = i;
          jValue = j;
          answerOfQ17 = true;
        }
      }
    }
  }
  if (answerOfQ17) {
    resultOfQ17.text(
      `largest palindrome is ${largeValue} with the multiple of ${iValue} and ${jValue}`
    );
  } else {
    resultOfQ17.text(`Please enter numbers only`);
  }
});

//parseInt(document.getElementById("firstInp-Q17").value)
// parseInt(document.getElementById("secondInp-Q17").value)
// let largPalind = 0;
// let iValue = 0;
// let jValue = 0;
// for (let i = 10; i < 100; i++) {
//   for (let j = 100; j < 1000; j++) {
//     let multipleAns = i * j;
//     if (multipleAns === reverseNum(multipleAns) && multipleAns > largPalind) {
//       largPalind = multipleAns;
//       iValue = i;
//       jValue = j;
//     }
//   }
// }
// console.log(
//   `largest palindrome is ${largPalind} with the multiple of ${iValue} and ${jValue}`
// );
