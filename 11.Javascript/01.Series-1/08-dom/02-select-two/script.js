// 06-dom/02-select-two/script.js - 6.2: select by css selector


(() => {

    // your code here
    let x = document.getElementsByClassName("material")[0] // pour explications [0] voir https://www.w3schools.com/jsref/met_element_getelementsbytagname.asp
    let y = x.getElementsByTagName("p")[0];
    y.innerHTML = "owned";
})();
