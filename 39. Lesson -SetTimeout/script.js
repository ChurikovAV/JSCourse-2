// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;


//     const id = setInterval(frame, 10);
//     function frame() {
//         if(pos === 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }


// btn.addEventListener('click', myAnimation);

// // function logger() {
// //     if(i === 3) {
// //         clearInterval(timerId);
// //     }
// //     console.log('text');
// //     i++;
// // }


// // let id = setTimeout(function log (){
// //     console.log('Hello');
// //     id = setTimeout(log, 500);
// // }, 500);

// ****** 40 lesson ***********

'use strict';

const now = new Date();
// new Date.parse('2020-05-01');



// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());
// console.log(now.setHours(18));
// console.log(now);

let start = new Date();

for (let i = 0; i < 10000000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} милисекунд`);