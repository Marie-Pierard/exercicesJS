// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.getElementById("run").addEventListener('click', function(){
        const randBird = birds[Math.floor(Math.random() * birds.length)];
        let Adj = Array.from(adjectives);//https://stackoverflow.com/questions/42739256/how-get-random-item-from-es6-map-or-set
        const randAdj = Adj[Math.floor(Math.random() * Adj.length)];

        if (randBird.fem === true) {
            document.getElementById("target").innerHTML = "La " + randBird.name + " " + randAdj + "e";
        } else {
            document.getElementById("target").innerHTML = "Le " + randBird.name + " " + randAdj;
        }
    })
    })();
