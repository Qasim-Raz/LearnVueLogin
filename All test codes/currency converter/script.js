const currAPI = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies`;
let dropDown = document.querySelectorAll(".dropdown  select");
const button = document.querySelector("form button");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
for (let select of dropDown) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    // if (select.name === "from" && currCode === "USD") {
    //   newOption.selected = "selected";
    // } else if (select.name === "to" && currCode === "PKR") {
    //   newOption.selected = "selected";
    // }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    flagChange(evt.target);
  });
}
let flagChange = (element) => {
  let currCode = element.value;
  let contCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${contCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};
button.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amountVal = amount.value;
  if (amountVal === "" || amountVal < 1) {
    amountVal = 1;
    amount.value = "1";
  }
  let url = `${currAPI}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(url);
  console.log(response);
  let data = response.json;
  console.log(data);
});
