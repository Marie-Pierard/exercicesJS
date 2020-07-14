// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    document.getElementById("run").addEventListener('click', function(){
    //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Set
    console.log("The Set contains " + people.size + " people.");
        console.log("Someone in the group is named Alexandre. " + people.has("Alexandre"));
    });
})();
