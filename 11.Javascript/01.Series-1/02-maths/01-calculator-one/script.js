
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        alert(parseInt(document.getElementById("op-one").value) + parseInt(document.getElementById("op-two").value));   // perform an addition
    });

    document.getElementById("substraction").addEventListener("click", function() {
        alert(parseInt(document.getElementById("op-one").value) - parseInt(document.getElementById("op-two").value)); // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        alert(parseInt(document.getElementById("op-one").value) * parseInt(document.getElementById("op-two").value));// perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {
        alert(parseInt(document.getElementById("op-one").value) / parseInt(document.getElementById("op-two").value)); // perform an division
    });
})();
