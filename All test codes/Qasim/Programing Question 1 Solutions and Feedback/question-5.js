function ifPalindrome(strInput) {
  if (strInput === strInput.split("").reverse().join("")) {
    return true;
  }
  return false;

  if (str === str.split("").reverse().join("")) return true; // is we have a single line in if, we'll not use brackets
  return false;

  return str === str.split("").reverse().join(""); // Best Approach
}
function generateCopies(wordToCopy, number) {
  let genName = "";
  for (let i = 1; i <= number; i++) {
    genName += wordToCopy;
  }
  return genName;
}

// console.log(generateCopies("Qasim", 2));

function larger_genCopies() {
  let string = document.getElementById("userStringQ-5").value;
  let num = 2;
  let largerStrArr = string.split(" ");
  let palindromCopies = null;
  // let palindromCondition = false;

  for (let i = 0; i < largerStrArr.length; i++) {
    if (ifPalindrome(largerStrArr[i])) {
      // largerStrArr[i].sort((a, b) => b.length - a.length);
      palindromCopies = generateCopies(largerStrArr[i], num);
      // palindromCondition = true;
    }
  }
  if (palindromCopies) {
    document.getElementById("resultOFQ-5").innerHTML =
      "the largest and plaindrome word" + " " + palindromCopies;
    // console.log({ palindromCopies });
  } else {
    let reversedString = largerStrArr.reverse().join(" ");
    document.getElementById("resultOFQ-5").innerHTML = generateCopies(
      reversedString,
      num
    );
  }
}
