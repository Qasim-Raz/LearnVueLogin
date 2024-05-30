// const baseURL = `https://dev.windshieldhub.com/order/vue/getReviews`;
// const reviewSection = document.querySelector(".review-section");

// const getReviews = async (no_of_review = 6, page_no = 1) => {
//   let formData = new FormData();
//   formData.append("no_of_review", no_of_review);
//   formData.append("page_no", page_no);
//   let response = await axios.post(`${baseURL}`, formData);
//   let data = response.data.data;
//   console.log(data.length);
//   let htmlBody = "";
//   for (let i = 0; i < data.length; i++) {
//     htmlBody += `
//     <div class="col-md-6 col-sm-12 mt-4">
//         <div class="card review-card-section">
//             <span class="font-style1"><i class="fa-solid fa-quote-left fa-2xl"
//                     style="color: #74C0FC;"></i></span>
//             <div class="card-body cardBody-2">
//                 <h5 class="card-title "> ${data[i].name}</h5>
//                 <p class="card-text">${data[i].message}</p>
//                 <a class="city mt-5">${data[i].city}</a>
//             </div>
//             <span class="font-style"><i class="fa-solid fa-quote-right fa-2xl"
//                     style="color: #74C0FC;"></i></span>
//         </div>
//     </div>`;
//     // firstCardBody[i].innerHTML = htmlBody;
//     reviewSection.innerHTML = htmlBody;
//     // reviewSection.appendChild(htmlBody);
//   }
// };
// getReviews();

// // setInterval(() => {
// //   getReviews(10, 3);
// // }, 6 * 1000);
const addReviewURL = `https://dev.windshieldhub.com/order/vue/addReview`;
const userMessage = document.querySelector("textarea");
const userNameInput = document.getElementById("userNameInput");
const userCityInput = document.getElementById("userCityInput");
let userRatingValue = "";
const userRating = document.querySelector("#rating");
userRating.addEventListener("change", (evt) => {
  userRatingValue += evt.target.value;
});

document.querySelector("button").addEventListener("click", async (evt) => {
  evt.preventDefault();
  let formData = new FormData();
  formData.append("message", userMessage.value);
  formData.append("name", userNameInput.value);
  formData.append("city", userCityInput.value);
  formData.append("rating", userRatingValue);
  let response = await axios.post(`${addReviewURL}`, formData);
  console.log(response.data.data);
});
