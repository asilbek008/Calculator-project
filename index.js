"use strict";
const buttons = document.querySelectorAll(".button");
const input = document.querySelector(".input");
let str = "";
buttons?.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.textContent === "=") {
      str = eval(str);
      input.value = str;
    } else if (e.target.textContent === "CE") {
      str = "";
      input.value = str;
    } else if (e.target.textContent === "DE") {
      str = str.slice(1, str.length);
      input.value = str;
      // } else if (e.target.textContent === "/") {
      //   str = str.slice(0, -1);
      //   input.value = str;
    } else {
      str += e.target.textContent;
      input.value = str;
    }
  });
});

// const display = document.querySelector(".value");
// const incBtn = document.querySelector(".increment");
// const decBtn = document.querySelector(".decrement");

// const buttons = document.querySelectorAll(".button");
// const inputDisplay = document.querySelector(".display");
// let str = "";
// buttons?.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.textContent === "=") {
//       str = eval(str);
//       inputDisplay.value = str;
//     } else if (e.target.textContent === "C") {
//       str = "";
//       inputDisplay.value = str;
//     } else if (e.target.textContent === "DE") {
//       str = str.slice(0, str.length - 1);
//       inputDisplay.value = str;
//     } else {
//       str += e.target.textContent;
//       inputDisplay.value = str;
//     }
//   });
// });
