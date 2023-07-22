var btnClick = document.querySelector("#btn-click")

// btnClick.onclick = function () {
//     alert("Hello World");
// }

// btnClick.addEventListener("click", function () {
//     alert("Sắp được nghỉ rồi, ahihi");
// })


// btnClick.onclick = function () {
//     console.log(1);
// }
// btnClick.onclick = function () {
//     console.log(2);
// }


// btnClick.addEventListener("click", function () {
//     console.log(1);
// })
// btnClick.addEventListener("click", function () {
//     console.log(2);
// })

var moneyForm = document.querySelector("#money-form")
var myMoney = document.querySelector("#my-money")
var luckyNumber = document.querySelector("#lucky-number")

// moneyForm.onsubmit = function (event) {
//     event.preventDefault();
//     // console.log("My money:", myMoney.value);
//     // console.log("My luckyNumber:", luckyNumber.value);
//     var total = myMoney.value * luckyNumber.value;
//     console.log("Tiền đi nhậu tối nay: ", total);
// }

var btnSubmit = document.querySelector("#btn-submit")

btnSubmit.onclick = function (event) {
    event.preventDefault();
    // console.log("My money:", myMoney.value);
    // console.log("My luckyNumber:", luckyNumber.value);
    var total = myMoney.value * luckyNumber.value;
    console.log("Tiền đi nhậu tối nay: ", total);
}