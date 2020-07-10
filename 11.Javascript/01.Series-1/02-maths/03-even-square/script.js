
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        let squareNumbers = [];
        
        for(let i = 1; i <= 21; i++ ){
                squareNumbers.push(Math.pow(i, 2));
            
        }
        alert(squareNumbers);
    });

})();
