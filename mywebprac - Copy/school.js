
var students = document.getElementById("students")
var staff = document.getElementById("staff")
var colleges = document.getElementById("colleges")

var x = 0
var studentsInterval = setInterval(() =>{
    x+= 20
    students.innerHTML = x
    if(x=="1000"){
        clearInterval(studentsInterval)
    }
},100)


var y = 0
var staffInterval = setInterval(() =>{
    y+= 5
    staff.innerHTML = y
    if(y=="100"){
        clearInterval(staffInterval)
    }
},100)

var z = 0
var collegesInterval = setInterval(() =>{
    z+= 1
    colleges.innerHTML = z
    if(z=="10"){
        clearInterval(collegesInterval)
    }
},100)


