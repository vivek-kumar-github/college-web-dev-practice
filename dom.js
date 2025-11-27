var nam = document.querySelector("#hii")
console.log(nam);
nam.innerHTML = "Hello ";
nam.addEventListener("click", function() {
    nam.style.color = "blue";
    nam.innerHTML = "Clicked";
})