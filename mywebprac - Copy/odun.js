let result = document.querySelector(".result");
let inc = document .querySelector(".inc");
let reset = document.querySelector(".reset");
let dec = document.querySelector(".dec");

inc.addEventListener("click", function(){
    result.innerHTML++;
})
reset.addEventListener("click", function(){
    result.innerHTML = 0;
})
dec.addEventListener("click", function(){
    result.innerHTML--;
})