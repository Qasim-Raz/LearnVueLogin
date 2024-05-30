// Question No 6.
function match_duplicate() {
  let arr1 = [document.getElementById("firstNumbersQ-6").value];
  let arr2 = [document.getElementById("secondNumbersQ-6").value];
  let countMatch = 0; //to count matching numbers btw two arrays
  let finalNewArr = []; //to change values of arrays if count is >= to total length of arrays
  if (arr1[0] === arr2[0] && arr1[arr1.length - 1] === arr2[arr2.length - 1]) {
    countMatch = +4;
    document.getElementById("FirstResultOFQ-6").innerHTML =
      "True both first and last elements are equal";
  } else if (arr1[0] === arr2[0]) {
    countMatch = +2;
    document.getElementById("FirstResultOFQ-6").innerHTML =
      "True only first element is matched";
  } else if (arr1[arr1.length - 1] === arr2[arr2.length - 1]) {
    countMatch = +2;
    document.getElementById("FirstResultOFQ-6").innerHTML =
      "True only last element is matched";
  } else {
    document.getElementById("FirstResultOFQ-6").innerHTML =
      "condition is not met";
  }
  document.getElementById("SecondResultOFQ-6").innerHTML =
    "The count of matching elements are" + " " + countMatch;

  if (countMatch >= arr1.concat(arr2).length) {
    finalNewArr = arr1;
    arr1 = arr2;
    arr2 = finalNewArr;
    document.getElementById("ThirdResultOFQ-6").innerHTML =
      "new arrays wil be" + " " + arr1 + "," + arr2;
  }
}
