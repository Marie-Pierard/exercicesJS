
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let num = document.getElementById("number").value;
        /*Explications détaillées ici : 
        https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/*/
        function factorialize(num) {
            if (num < 0) 
                  return -1;
            else if (num === 0) 
                return 1;
            else {
                return (num * factorialize(num - 1));
            }
          }
          alert(factorialize(num));
    });

})();
