// 06-dom/11-change-event-input-one/script.js - 6.11: change event (1)


(() => {

    // your code here
let passOne = document.getElementById("pass-one");
let counter = document.getElementById("counter");

passOne.addEventListener("input", function() {//https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/input_event
passOne.setAttribute("maxlength", 10);//https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/password
counter.innerHTML = passOne.value.length + "/10";
})
})();
