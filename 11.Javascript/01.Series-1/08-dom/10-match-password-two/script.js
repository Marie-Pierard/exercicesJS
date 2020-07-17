// 06-dom/10-match-password-two/script.js - 6.10: password verification (2)


(() => {

    // your code here

    document.getElementById("run").addEventListener("click", function() {
        let passwordOne = document.getElementById("pass-one").value;
        let passwordTwo = document.getElementById("pass-two").value;
        let passOne = document.getElementById("pass-one");
        let passTwo = document.getElementById("pass-two");
        
        if (passwordOne !== passwordTwo) {
            passOne.classList.add("error");
            passTwo.classList.add("error");
            document.getElementById('pass-one').value = "Error";
            document.getElementById('pass-two').value = "Error";
        }else{
                
                document.getElementById('pass-one').value = "All good!";
                document.getElementById('pass-two').value = "All good!";
        }
    })

})();