// Question No 2.
// program count Vowels in the strings and return vowels in reverse order if vowels are more than 3 and are the 2 among 5 vowels in sequence.

function countVowels() {
  let userStringFor2 = document.getElementById("Q_2userInput").value;
  let count = 0;
  let vowelsInSeq = [];
  for (let char of userStringFor2) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
      vowelsInSeq.push(char.toLowerCase());
    }
  }
  let same = false;
  if (vowelsInSeq.length > 3) {
    for (let i = 0; i < vowelsInSeq.length; i++) {
      if (vowelsInSeq[i] === vowelsInSeq[i + 1]) {
        same = true;
        break;
      }
    }
  }
  const resultOFQ_2 = document.getElementById("resultOFQ-2");
  if (same) {
    resultOFQ_2.innerHTML =
      "vowels are >3 and same among 5" + " " + vowelsInSeq;
  } else {
    resultOFQ_2.innerHTML =
      "vowels are >3 but different among 5" + " " + vowelsInSeq.reverse();
  }
  document.getElementById("countOFQ-2").innerHTML = count;
}
