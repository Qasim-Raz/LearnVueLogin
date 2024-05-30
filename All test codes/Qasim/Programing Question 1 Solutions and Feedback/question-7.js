// Question NO 7.

function addition_Q7() {
  let a = document.getElementById("firstNumbersQ-7").value;
  a = parseInt(a);
  let b = document.getElementById("secondNumbersQ-7").value;
  b = parseInt(b);
  let c = document.getElementById("thirdNumbersQ-7").value;
  c = parseInt(c);
  let finalArr = [];
  const minValue = Math.min(a, b, c);

  if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    if (a === b && b === c) {
      finalArr.push(a, b, c);
      document.getElementById("FirstResultOFQ-7").innerHTML = 0;
    } else if (a === b) {
      finalArr.push(a - minValue, b - minValue, c - minValue);
      document.getElementById("FirstResultOFQ-7").innerHTML = c;
    } else if (a === c) {
      finalArr.push(a - minValue, b - minValue, c - minValue);
      document.getElementById("FirstResultOFQ-7").innerHTML = b;
    } else if (b === c) {
      finalArr.push(a - minValue, b - minValue, c - minValue);
      document.getElementById("FirstResultOFQ-7").innerHTML = a;
    } else {
      document.getElementById("FirstResultOFQ-7").innerHTML = a + b + c;
    }
  } else {
    document.getElementById("FirstResultOFQ-7").innerHTML =
      "plz enter a valid number";
  }
  document.getElementById("SecondResultOFQ-7").innerHTML = finalArr.sort(
    (a, b) => b - a
  );
}
