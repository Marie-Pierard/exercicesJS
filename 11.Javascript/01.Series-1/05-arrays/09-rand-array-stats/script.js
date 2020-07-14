// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    function randomNumbers(){
        return parseInt(Math.random() * (100 - 1) + 1); //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
    }

    document.getElementById("run").addEventListener('click', function(){
        let newArray = [];
        let numbers = ["n-1" ,"n-2","n-3","n-4","n-5","n-6" ,"n-7","n-8","n-9","n-10"];
        for(let i = 0; i<10; i++){
           newArray.push(randomNumbers());   
        }
        for(let i = 0; i < newArray.length; i++){
            document.getElementById(numbers[i]).innerHTML = newArray[i];
        }
        //https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
        let min = Math.min(...newArray);
        let max = Math.max(...newArray);
        let sum = newArray.reduce((a,b) => a + b, 0);
        let average = sum/newArray.length;
        
        document.getElementById("max").innerHTML = max;
        document.getElementById("min").innerHTML = min;
        document.getElementById("average").innerHTML = average;
        document.getElementById("sum").innerHTML = sum;

    
    })
    
})();
