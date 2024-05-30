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
  let int = 2;
  let largerStr = string.split(" ");
  let palindromCopies = "";
  let palindromCondition = false;

  for (let i = 0; i < largerStr.length; i++) {
    if (ifPalindrome(largerStr[i])) {
      // largerStr[i].sort((a, b) => b.length - a.length);
      palindromCopies = generateCopies(largerStr[i], int);
      palindromCondition = true;
    }
  }
  if (palindromCondition) {
    document.getElementById("resultOFQ-5").innerHTML =
      "the largest and plaindrome word" + " " + palindromCopies;
    // console.log({ palindromCopies });
  } else {
    let reversedString = largerStr.reverse().join(" ");
    document.getElementById("resultOFQ-5").innerHTML = generateCopies(
      reversedString,
      int
    );
  }
}
