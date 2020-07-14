// 05-arrays/04-walk-two/script.js - 5.4: walk through the list (2)


(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    document.getElementById("run").addEventListener('click', function() {
        fruits.forEach(function(element) {
            console.log(element);
        })
            
    })

})();
