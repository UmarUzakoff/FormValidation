let form = document.querySelector("#form");
let nameInput = document.getElementById("name-input");
let surnameInput = document.getElementById("surname-input");
let emailInput = document.getElementById("email-input");
let passwordInput = document.getElementById("password-input");
let errorMessage = document.querySelector(".error-msg");
let errorMessage1 = document.querySelector(".error-msg1");
let errorMessage2 = document.querySelector(".error-msg2");
let errorMessage3 = document.querySelector(".error-msg3");

let result = document.getElementById("resultat")

var $result1 = document.getElementById("result1");
var $result2 = document.getElementById("result2");
var $result3 = document.getElementById("result3");
var $result4 = document.getElementById("result4");

form.addEventListener('submit', function(e){
    e.preventDefault();

})

nameInput.addEventListener("input", function(e){
    let inputValue = e.target.value;
    if (inputValue.length < 4) {
        errorMessage.classList.remove("error-msg--hidden")
    } else if (inputValue.length >= 4) {
        errorMessage.classList.add("error-msg--hidden")
    } else {

    }
})

surnameInput.addEventListener("input", function(e){
    let inputValue = e.target.value;
    if (inputValue.length < 4) {
        errorMessage1.classList.remove("error-msg--hidden1")
    } else if (inputValue.length >= 4) {
        errorMessage1.classList.add("error-msg--hidden1")
    } else {

    }
})

emailInput.addEventListener("input", function(e){
    let inputValue = e.target.value;
    if (inputValue.length < 4) {
        errorMessage2.classList.remove("error-msg--hidden2")
    } else if (inputValue.length >= 4) {
        errorMessage2.classList.add("error-msg--hidden2")
    } else {

    }
})

passwordInput.addEventListener("input", function(e){
    let inputValue = e.target.value;
    if (inputValue.length < 4) {
        errorMessage3.classList.remove("error-msg--hidden3")
    } else if (inputValue.length >= 4) {
        errorMessage3.classList.add("error-msg--hidden3")
    } else {

    }
})

form.addEventListener("submit", function (e) {
    e.preventDefault();

    result.classList.add("result");

    result1.textContent = `Your name: ${nameInput.value}`;
    result2.textContent = `Your surname: ${surnameInput.value}`;
    result3.textContent = `Your email: ${emailInput.value}`;
    result4.textContent = `Your password: ${passwordInput.value}`;
  });