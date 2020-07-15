// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Map
    //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/fromEntries
    document.getElementById("run").addEventListener("click", function(){
        const map = new Map([ [keys], [values] ]);
        const obj = Object.fromEntries(map);
        console.log(obj);
    });
    })();

