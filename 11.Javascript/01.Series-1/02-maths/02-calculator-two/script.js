
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation

        switch (operation) {
            case "addition":
                alert(parseInt(document.getElementById("op-one").value) + parseInt(document.getElementById("op-two").value));
                break;
            case "substraction":
                alert(parseInt(document.getElementById("op-one").value) - parseInt(document.getElementById("op-two").value));
                break;
            case "multiplication":
                alert(parseInt(document.getElementById("op-one").value) * parseInt(document.getElementById("op-two").value));
                break;
            case "division":
                alert(parseInt(document.getElementById("op-one").value) / parseInt(document.getElementById("op-two").value));
                break;
            default:
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
