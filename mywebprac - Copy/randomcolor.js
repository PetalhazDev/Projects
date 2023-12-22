var result = document.querySelector(".result")
var btn = document.querySelector(".btn")

btn.addEventListener("click",function(){
    var color = Math.random().toString(16).substring(2,8)
    color = "#" + color
    result.innerHTML = color
    document.body.style.backgroundColor = color
})