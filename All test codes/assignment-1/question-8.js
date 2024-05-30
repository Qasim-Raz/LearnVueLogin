//Question No 8.

function findLongestWord() {
  const vowelss = ["a", "e", "i", "o", "u"]; // to find vowels in the string
  let sen = document.getElementById("stringOFQ-8").value;
  let countPalindromeVowels = 0; // to count vowels
  let countPalindromes = 0;
  let storedPalindromes = [];
  let strSplit = sen.split(" "); // to convert string into array
  for (let i = 0; i < strSplit.length; i++) {
    // check every word, is it  palindrome  or not
    if (strSplit[i] === strSplit[i].split("").reverse().join("")) {
      countPalindromes++; // is a palidrome

      let palindromHasVovel = false;

      for (let singleVowel of strSplit[i]) {
        // to check palindorme has vowels or not
        if (vowelss.includes(singleVowel)) {
          // Str has Vovel
          palindromHasVovel = true;
          countPalindromeVowels++;
        }
      }
      if (palindromHasVovel) {
        storedPalindromes.push(strSplit[i] + " ");
      }
    }
    if (countPalindromeVowels >= 3 && countPalindromes >= 2) {
      document.getElementById("FourthResultOFQ-8").innerHTML =
        "last condition is met, we have " +
        countPalindromes +
        " palindromes and " +
        countPalindromeVowels +
        " vowels";
      break;
    }
  }
  document.getElementById("SecondResultOFQ-8").innerHTML =
    "the palindrom words contain vowels are " +
    storedPalindromes +
    "and there are " +
    countPalindromeVowels +
    " vowels in the palindrome " +
    storedPalindromes;
  strSplit.sort((a, b) => b.length - a.length);
  document.getElementById("FirstResultOFQ-8").innerHTML =
    "the longest word in the string is " + strSplit[0];
}
