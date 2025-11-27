let inner = document.querySelector("#inner");
let outer = document.querySelector("#outer");
outer.addEventListener("click", function(e) {
    console.log("outer clicked");
    e.stopPropagation();
}, true);
inner.addEventListener("click", function() {
    console.log("Inner clicked");
    

},true);