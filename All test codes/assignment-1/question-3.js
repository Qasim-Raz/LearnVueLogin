// Question No 3.
function addVowelsQ_3() {
  let firstArr = document.getElementById("firstArrayQ-3").value;
  let secArr = document.getElementById("SecArrayQ-3").value;
  let firstArrVowel = [];
  let secArrVowel = [];
  let thirdArr = [];
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char1 of firstArr) {
    if (vowels.includes(char1.toLowerCase())) {
      firstArrVowel.push(char1.toLowerCase());
    }
  }
  for (let char2 of secArr) {
    if (vowels.includes(char2.toLowerCase())) {
      secArrVowel.push(char2.toLowerCase());
    }
  }
  let combinedArr = firstArrVowel.concat(secArrVowel);
  for (i = 0; i < combinedArr.length; i++) {
    thirdArr.push(combinedArr[i]);
  }
  thirdArr = thirdArr
    .sort()
    .filter((item, index) => thirdArr.indexOf(item) === index);
  document.getElementById("resultOFQ-3").innerHTML = thirdArr;
}
