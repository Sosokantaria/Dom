// const topButton = document.querySelector(".btn-top");
// const bottomButton = document.querySelector(".btn-bottom");
// const leftButton = document.querySelector(".btn-left");
// const rightButton = document.querySelector(".btn-right");
// const box = document.querySelector(".box");
// topButton.addEventListener("click", () => {
//   box.style.marginTop = Number(box.style.marginTop.split("px")[0]) - 100 + "px";
//   // ‘100px’.split(‘px’) = [100, ‘px’]
// });
// bottomButton.addEventListener("click", () => {
//   box.style.marginBottom =
//     Number(box.style.marginBottom.split("px")[0]) - 100 + "px";
//   // ‘100px’.split(‘px’) = [100, ‘px’]
// });
// leftButton.addEventListener("click", () => {
//   box.style.marginLeft =
//     Number(box.style.marginLeft.split("px")[0]) - 100 + "px";
//   // ‘100px’.split(‘px’) = [100, ‘px’]
// });
// rightButton.addEventListener("click", () => {
//   box.style.marginRight =
//     Number(box.style.marginRight.split("px")[0]) - 100 + "px";
//   // ‘100px’.split(‘px’) = [100, ‘px’]
// });

// გადაუარეთ ამ ბათონების მასივს, და თითოეულის innerTextის მეშვეობით,
// switch ქეისით შესაბამისად გადაადგილეთ ბოქსი.

// const buttons = document.querySelectorAll(".btn");
// const box = document.getElementById("box");

//   buttons.forEach((button)=>{
//     button.addEventListener("click", () => {
//     switch (button.innerHTML) {
//       case  "Top":
//         box.style.marginTop =
//           Number(box.style.marginTop.split("px")[0]) - 100 + "px";
//         break;
//       case  "Bottom":
//         box.style.marginBottom =
//           Number(box.style.marginBottom.split("px")[0]) - 100 + "px";
//         break;
//       case  "Left":
//         box.style.marginLeft =
//           Number(box.style.marginLeft.split("px")[0]) - 100 + "px";
//         break;
//       case  "Right":
//         box.style.marginRight =
//           Number(box.style.marginRight.split("px")[0]) - 100 + "px";
//         break;
//     }
//   })
// }
// ) 