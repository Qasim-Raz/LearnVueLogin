const baseURL = `https://dev.windshieldhub.com/order/vue`;
const yearSelect = document.querySelector("#yearSelect");
const makeSelect = document.querySelector("#makeSelect");
const modelSelect = document.querySelector("#modelSelect");
const styleSelect = document.querySelector("#styleSelect");

const getYears = async () => {
  let response = await fetch(`${baseURL}/getYears`);
  let responseResult = await response.json();
  let arrayData = responseResult.data.allYears;
  for (let i = 0; i < arrayData.length; i++) {
    let singleObj = arrayData[i];
    let newOption = document.createElement("option");
    newOption.text = singleObj.Text;
    newOption.value = singleObj.Value;
    yearSelect.appendChild(newOption);
  }
  yearSelect.addEventListener("change", (evt) => {
    makeSelect.disabled = false;
    getMakes(evt.target);
  });
};
window.onload = getYears();

const resetSelectOptions = (elmId) => {
  const elm = document.getElementById(elmId);
  if (elm) {
    for (let i = elm.options.length - 1; i > 0; i--) {
      elm.options[i].remove();
    }
    elm.selectedIndex = -1;
  }
};
const getMakes = async (evt) => {
  resetSelectOptions("makeSelect");
  resetSelectOptions("modelSelect");
  resetSelectOptions("styleSelect");
  let formData = new FormData();
  formData.append("year_id", evt.value);
  let response = await fetch(`${baseURL}/getMakes`, {
    method: "POST",
    body: formData,
  });
  let responseResult2 = await response.json();
  let arrayData2 = responseResult2.data;
  for (let i = 0; i < arrayData2.length; i++) {
    let singleObj = arrayData2[i];
    let newOption = document.createElement("option");
    newOption.text = singleObj.Text;
    newOption.value = singleObj.Value;
    makeSelect.appendChild(newOption);
  }
  makeSelect.addEventListener("change", (evt) => {
    modelSelect.disabled = false;
    getModel(evt.target);
  });
};

const getModel = async (evt) => {
  resetSelectOptions("modelSelect");
  resetSelectOptions("styleSelect");
  let formData = new FormData();
  formData.append("make_id", evt.value);
  let response = await fetch(`${baseURL}/getModels`, {
    method: "POST",
    body: formData,
  });
  let responseResult3 = await response.json();
  let arrayData3 = responseResult3.data;
  for (let i = 0; i < arrayData3.length; i++) {
    let singleObj = arrayData3[i];
    let newOption = document.createElement("option");
    newOption.text = singleObj.Text;
    newOption.value = singleObj.Value;
    modelSelect.appendChild(newOption);
  }
  modelSelect.addEventListener("change", (evt) => {
    styleSelect.disabled = false;
    getStyles(evt.target);
  });
};

const getStyles = async (evt) => {
  let formData = new FormData();
  formData.append("model_id", evt.value);
  let response = await fetch(`${baseURL}/getStyles`, {
    method: "POST",
    body: formData,
  });
  let responseResult4 = await response.json();
  let arrayData4 = responseResult4.data;
  for (let i = 0; i < arrayData4.length; i++) {
    let singleObj = arrayData4[i];
    let newOption = document.createElement("option");
    newOption.text = singleObj.Text;
    newOption.value = singleObj.Value;
    styleSelect.appendChild(newOption);
  }
};
const formError = (id, error) => {
  let elementError = document.getElementById(id);
  elementError.innerHTML = error;
};
function validateDropdowns() {
  const yearSelect = document.getElementById("yearSelect");
  const makeSelect = document.getElementById("makeSelect");
  const modelSelect = document.getElementById("modelSelect");
  const styleSelect = document.getElementById("styleSelect");

  // Check if any dropdown has a value (meaning an option is selected)
  return (
    yearSelect.value &&
    makeSelect.value &&
    modelSelect.value &&
    styleSelect.value
  );
}

const formSubmit = (event) => {
  let returnVal = true;
  const zipCode = document.querySelector("#zipCode").value;
  const mobileNo = document.querySelector("#mobileNo").value;

  if (!validateDropdowns() && zipCode === "" && mobileNo === "") {
    event.preventDefault();
    formError("zipCodeError", "Please enter valid zip-code");
    formError("mobilError", "Please enter valid mobile No");
    swal.fire({
      title: "Please fill all required data",
      customClass: "small-popup",
      buttons: false,
    });
  } else if (!validateDropdowns()) {
    event.preventDefault();
    alert("please fill all dropdowns");
  } else if (
    (zipCode === "" && mobileNo === "") ||
    (zipCode.length < 5 && mobileNo.length < 11)
  ) {
    formError("zipCodeError", "Please enter valid zip-code");
    formError("mobilError", "Please enter valid mobile No");
    returnVal = false;
  } else if (
    isNaN(zipCode) ||
    zipCode === 0 ||
    zipCode === "" ||
    zipCode.length < 5
  ) {
    formError("zipCodeError", "Please enter valid zip-code");
    returnVal = false;
  } else if (isNaN(mobileNo) || mobileNo.length < 9 || mobileNo === 0) {
    formError("mobilError", "Please enter valid mobile No");
    returnVal = false;
  } else {
    returnVal = true;
  }
  if (!returnVal) {
    event.preventDefault(); // In Case Of Errors
  }
  return returnVal;
};

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", formSubmit);
// (() => {
//   "use strict";

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   const forms = document.querySelectorAll(".needs-validation");

//   // Loop over them and prevent submission
//   Array.from(forms).forEach((form) => {
//     form.addEventListener(
//       "submit",
//       (event) => {
//         if (!form.checkValidity()) {
//           event.preventDefault();
//           event.stopPropagation();
//         }

//         form.classList.add("was-validated");
//       },
//       false
//     );
//   });
// })();
