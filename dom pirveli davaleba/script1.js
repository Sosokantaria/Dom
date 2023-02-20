// 1. Შექმენით ცალი ღილაკის ელემენტი , ამოიღეთ is js ში და მიაბით ფუნქცია რომელიც
// გამოიძახება მათზე დაჭერის შემთხვევაში, ფუნქციამ უნდა შეუცვალოთ ღილაკებს background
//  ფერი და უნდა მიანიჭოს რენდომული background ფერი.

const button=document.getElementById("btn1");
button.addEventListener("click",()=>{
    button.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
})

// 2.ახლა შემქენით 10 ღილაკი და თითოეულზე გააკეთეთ იგივე. (ანუ რომელიმეზე დაჭერისას უნდა შევუცვალოთ მას ფერი)

const buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    buttons[i].style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  });
}
// 3.Შექმენით 5 ცალი ღილაკი , ამოიღეთ ღილაკები js ში და მიანიჭეთ მათ ტექსტის მნიშვნელობად რენდომული რიცხვითი
// მნიშნელობები, ღილაკებს მიანიჭეთ ფუნქცია რომელიც გამოიძახება მათზე დაჭერის შემთხვევაში და ეს ფუფნქცია გამოიტანს
// alert დიალოგური ფანჯრის მეშვეობით თითოეულ ღილაკში ჩაწერილი რიცხვის გამყოფების რაოდენობას

const buttonArray = document.querySelectorAll(".btn2");

buttonArray.forEach((button) => {
  button.innerHTML = Math.floor(Math.random() * 100);
  button.addEventListener("click", () => {
    let counter = 0;
    for (let j = 0; j <= Number(button.innerHTML); j++) {
      if (Number(button.innerHTML) % j === 0) counter++;
    }
    alert("this is a gamkofebis raodenoba " + counter);
  });
});
