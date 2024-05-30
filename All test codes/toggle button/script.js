function getData(dataId, getNewData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      if (getNewData) {
        getNewData();
      }
    }, 2000);
  });
}

getData(1).then((res) => {
  console.log(res);
  getData(2).then((res) => {
    console.log(res);
  });
});

// getData(2, () => {
//   console.log("getting data 3");
//   getData(3, () => {
//     console.log("getting data 4");
//     getData(4, () => {
//       console.log("getting data 5");
//       getData(5);
//     });
//   });
// });

// function fetchData1(fetchData2) {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("timout");
//       if (fetchData2) {
//         fetchData2();
//       }
//     }, 2000);
//   });
// }
// function fetchData2() {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("timout2");
//     }, 2000);
//   });
// }

// fetchData1(fetchData2);

// let mode = document.querySelector("#mode");
// let body = document.querySelector("body");
// let  currMode = "light";
// mode.addEventListener("click", () => {
//     if(currMode === "light") {
//         currMode = "dark";
//         body.style.backgroundColor = "black";
//     }
//     else {
//         currMode = "light";
//         body.style.backgroundColor = "white";
//     }
//     // console.log(currMode)
// })
