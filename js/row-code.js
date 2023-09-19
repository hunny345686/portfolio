// // Turn Page When Click Next Or Prev Page
// const pageTurnBtn = document.querySelectorAll(".next-prev-btn");
// pageTurnBtn.forEach(function (element, index) {
//   element.onclick = () => {
//     console.log(index);
//     const pageTurnId = element.getAttribute("data-page");
//     const pageTurn = document.getElementById(pageTurnId);

//     if (pageTurn.classList.contains("turn")) {
//       pageTurn.classList.remove("turn");
//       setTimeout(function () {
//         pageTurn.style.zIndex = 20 - index;
//       }, 500);
//     } else {
//       pageTurn.classList.add("turn");
//       setTimeout(function () {
//         pageTurn.style.zIndex = 20 + index;
//       }, 500);
//     }
//   };
// });

// // Contact me Bottom when clicked
// const pages = document.querySelectorAll(".book-page.page-right");
// const contactBtn = document.querySelector(".contact-me");
// contactBtn.onclick = () => {
//   pages.forEach((page, index) => {
//     setTimeout(() => {
//       page.classList.add("turn");
//       setTimeout(() => {
//         page.style.zIndex = 20 + index;
//       }, 500);
//     }, (index + 1) * 200 + 100);
//   });
// };

// // Revers Index Fuction
// let totalPages = pages.length;
// let pageNo = 0;
// function reversIndex() {
//   pageNo--;
//   if (pageNo < 0) {
//     pageNo = totalPages - 1;
//   }
// }

// // Back to Prifile when Clicked
// const backToProfile = document.querySelector(".back-profile");
// backToProfile.onclick = () => {
//   pages.forEach((_, index) => {
//     setTimeout(() => {
//       reversIndex();
//       pages[pageNo].classList.remove("turn");
//       setTimeout(() => {
//         reversIndex();
//         pages[pageNo].style.zIndex = 10 + index;
//       }, 500);
//     }, (index + 1) * 200 + 100);
//   });
// };

// // Opning Animation

// const coverRight = document.querySelector(".cover.cover-right");
// const pageLeft = document.querySelector(".book-page.page-left");
// //Opning Animation ( cover right animation )
// setTimeout(() => {
//   coverRight.classList.add("turn");
// }, 2100);

// setTimeout(() => {
//   coverRight.style.zIndex = -1;
// }, 2800);

// //Opning Animation ( cover left animation )
// setTimeout(() => {
//   pageLeft.style.zIndex = 20;
// }, 3200);

// // opning animation   All pages right animation
// pages.forEach((_, index) => {
//   setTimeout(() => {
//     reversIndex();
//     pages[pageNo].classList.remove("turn");
//     setTimeout(() => {
//       reversIndex();
//       pages[pageNo].style.zIndex = 10 + index;
//     }, 500);
//   }, (index + 1) * 200 + 2100);
// });
