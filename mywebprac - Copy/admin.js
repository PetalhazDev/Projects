function myfunc(){
    var password = document.getElementById("password")
    if(password.type == "password"){
        password.type = "text"
    }
    else{
        password.type = "password"
    }
}

function login(){
    var password = document.getElementById("password").value
    var username = document.getElementById("username").value
    if(username == "" || password == ""){
        alert("Field is blank")
    }
    else{
        if(username == "admin" && password =="admin"){
            //document.querySelector("body").innerHTML = "welcome" + " "  + username
        alert("Welcome " + username + " " + "Master Odun")
        }
        else{
            alert("Incorrect Username or Password")
        }
    }
}

let addSum1 = 6
let addSum2 = 26
let addAll = addSum1 + addSum2
alert(addAll)


let name = prompt("What is your name","");
let age = prompt ("How old are you");
let conf = confirm("You must be 18 years old to view this site")

if(age=>18){
    alert(`Welcome! ${name}`);
}
else{
    alert("sorry" + name);
}