// Question No 3.
function addVowelsQ_3() {
  let firstArr = document.getElementById("firstArrayQ-3").value;
  let secArr = document.getElementById("SecArrayQ-3").value;
  // NOTE: Redundant / Un-nessary Code
  // let firstArrVowel = [];
  // let secArrVowel = [];
  let thirdArr = [];
  for (let char1 of firstArr) {
    if (vowels.includes(char1.toLowerCase())) {
      thirdArr.push(char1.toLowerCase());
    }
  }
  for (let char2 of secArr) {
    if (vowels.includes(char2.toLowerCase())) {
      thirdArr.push(char2.toLowerCase());
    }
  }
  // NOTE: Redundant / Un-nessary Code
  // thirdArr = firstArrVowel.concat(secArrVowel);
  // for (i = 0; i < combinedArr.length; i++) {
  //   thirdArr.push(combinedArr[i]);
  // }
  thirdArr = thirdArr
    .sort()
    .filter((item, index) => thirdArr.indexOf(item) === index);
  document.getElementById("resultOFQ-3").innerHTML = thirdArr;
}
