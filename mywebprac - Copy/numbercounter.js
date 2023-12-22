var result = document.querySelector(".result");
var inc = document.querySelector(".inc");
var reset = document.querySelector(".reset");
var dec = document.querySelector(".dec");

dec.addEventListener("click",function(){
    result.innerHTML--
})

reset.addEventListener("click",function(){
    result.innerHTML = 0
})

inc.addEventListener("click",function(){
    result.innerHTML++
})

/*let num = 0;
result.textContent = num;
if(num > 0){
    result.style.color = "green"
}
else if (num < 0){
    result.style.color = "red"
}

else{
    result.style.color = "black"
}*/