// 06-dom/12-change-event-input-two/script.js - 6.12: change event (2)


(() => {

    // your code here
    let passOne = document.getElementById("pass-one");
    let conditions = new RegExp("[0-9].*[0-9]");//https://stackoverflow.com/questions/32534109/javascript-password-validation-at-least-2-number-digits
    let validity = document.getElementById("validity");
    passOne.addEventListener("input", function() {
    if (passOne.value.length >= 8  && passOne.value.match(conditions)) {//https://www.w3schools.com/jsref/jsref_match.asp
    validity.innerHTML = "ok";
    }else {
        validity.innerHTML = "Wrong password";
    };

    });
})();
