// Find the sum of all the multiples of 3 or 5 below 1000.
$("#btnOF-Q15").click(function () {
  let userLimit = $("#userInp-Q15").val();
  let sum = 0;
  let errorResult = false;
  if (!isNaN(userLimit)) {
    for (let i = 1; i < userLimit; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
        errorResult = true;
      }
    }
    if (errorResult) {
      $("#resultOf-Q15").text(
        `the total sum of multiples of 3 and 5 below ${userLimit} is ${sum}`
      );
    } else {
      $("#resultOf-Q15").text("Please enter only number");
    }
  }
});
