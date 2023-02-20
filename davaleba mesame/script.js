// შექმენით h1 თეგი და ღილაკი. ღილაკზე დაჭერისას h1 თეგი უნდა ივსებოდეს თქვენი სახელით.

// const btn = document.getElementById('btn1');
// const sat = document.getElementById('sat1');

// btn.addEventListener('click', () => {
//         sat.innerHTML = "soso kantaria";
// });

// Შექმენით 6 ცალი ღილაკის ელემენტი რომლებიც იქნებიან დასტილული შემდეგნაირად , 
// width:300px; height:300px; border:1px solid steelblue; background-color:steelblue, 
// ასევე დაამატეთ ერთი ღილაკი ამ ღილაკების ზემოთ რომელზე დაჭერის შემთხვევაშიც მიენიჭებათ
//  ქვემოთ მოცემულ ღილაკებს რენდომული background ფერები.

// const mainBtn = document.getElementById('mainBtn');
// const secondaryBtn = document.querySelectorAll('.btn');

// mainBtn.addEventListener('click', () => {
//     secondaryBtn.forEach(button => {
//         button.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
        
//     });
// })


// შექმენით პარაგრაფი, რომელშიც ჩაწერთ მნიშვნელობა 0ს. შემ შექმენით ორი ღილაკი, 
// + და -. თითოეულზე დაჭერისას ეს რიცხვი გაზარდე ან დააპატარევე. 

// const para = document.getElementById('para');
// const btn1 = document.querySelector('.btn1');
// const btn2 = document.querySelector('.btn2');


// btn1.addEventListener('click', () => {
//         para.innerHTML = Number(para.innerHTML) + 1 ;
// })


// btn2.addEventListener('click', () => {
//     para.innerHTML = Number(para.innerHTML) - 1 ;
// })