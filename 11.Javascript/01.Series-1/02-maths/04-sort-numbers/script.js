// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here

            let numbers2 = document.getElementById("numbers").value.split(","); 
            /*"," signifie qu'il doit examniner les éléments séparés par une virgule
             dans le segment html. Si je remplace la virugle dans le html par "/" il
              faudra écrire dans js .split (",")*/

            let sortedNumbers = numbers2.sort(function(a, b){return a-b});
    
            alert(sortedNumbers);
            
        });

})();
