function sortAlphabetically() {
  let stringToSorted = document.getElementById("userStringQ-9").value;
  stringToSorted = stringToSorted.split(" ");
  for (let i = 0; i < stringToSorted.length; i++) {
    stringToSorted[i] = stringToSorted[i].split("").sort().join("");
  }
  document.getElementById("resultOFQ-9").innerHTML = stringToSorted.join(" ");
}
// Should Sorf Capitals and Small Letters in the same way
// E.g ka and KA  should return     AaKk.
