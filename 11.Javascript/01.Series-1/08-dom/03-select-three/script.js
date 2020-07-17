// 06-dom/03-select-three/script.js - 6.3: select multiple elements by css selector


(() => {

    // your code here
    // voir https://www.w3schools.com/jsref/met_document_queryselectorall.asp
    let element = document.querySelectorAll(".target");
    let i;
    for (i = 0; i < element.length; i++) {
        element[i].innerHTML = "owned";
    }
    
})();
