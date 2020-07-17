// 06-dom/05-hover-image/script.js - 6.5: image hover


(() => {

    // your code here


var image = document.querySelector(".material img");
var oldImgSource = "../../_shared/img/kiss.svg" 
var newImgSource = image.getAttribute("data-hover");

image.addEventListener("mouseover", function() {
    image.setAttribute("src", newImgSource);
})
image.addEventListener("mouseout", function() {
    image.setAttribute("src", oldImgSource);
})
})();