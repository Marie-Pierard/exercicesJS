// 06-dom/09-match-password-one/script.js - 6.9: password verification (1)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        let passwordOne = document.getElementById("pass-one").value;
        let passwordTwo = document.getElementById("pass-two").value;
        
        if (passwordOne !== passwordTwo) {
            document.getElementById("pass-one").style.borderColor = "red";
            document.getElementById("pass-two").style.borderColor = "red";
        }
    })
})();
