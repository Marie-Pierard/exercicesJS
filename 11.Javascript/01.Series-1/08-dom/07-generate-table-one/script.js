// 06-dom/07-generate-table-one/script.js - 6.7: creating a table (1)


(() => {

    // your code here

    let target = document.getElementById("target");
    let newTable = document.createElement("table");
    target.appendChild(newTable);//https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild
    for (let i = 0; i < 10; i++) {
        newTable.insertRow(0).insertCell(0);
    }

})();
