// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener('click', function(){
    //https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
        const uniqueSet = new Set(fruits);

        const backToArray = [...uniqueSet];
        console.log(backToArray);
    });
})();
