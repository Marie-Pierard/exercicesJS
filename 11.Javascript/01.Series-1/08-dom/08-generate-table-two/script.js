// 06-dom/08-generate-table-two/script.js - 6.8: creating a table (2)

(() => {

    // your code here
    const target = document.getElementById("target");
    const newTable = document.createElement("table");
    target.appendChild(newTable);
    for (let i = 0; i < 10; i++) {
        let newRow = newTable.insertRow(i)//créé les dix lignes
        for (let j = 0; j < 10; j++) {
            let newCell = newRow.insertCell(j);// dans chaque ligne, créé les dix colonnes(cases)
            newCell.innerHTML = (i + 1) * (j + 1);//dans chaque case multiplier la valeur de i+1 par j+1 (sachant que pour la premiere boucle (case), i et j =0)
        }
    }
})();
