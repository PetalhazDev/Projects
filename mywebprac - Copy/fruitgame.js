var fruits = ['apple','banana', 'orange', 'grape','pineapple', 'cherry', 'watermelon', 'mango', 'pawpaw',
'guava', 'tangerine', 'lime']

var randomFruitNumber = Math.floor(Math.random()*fruits.length)
console.log(randomFruitNumber)

function myfunc(){
    var guess = document.getElementById("guess").value
    var randomFruit = fruits[randomFruitNumber]
    if(guess==randomFruit){
        alert("You are correct")
    }

    else{
        alert("Your guess was wrong." + "The correct guess should be " + randomFruit)
    }
}

var color = ['red', 'green', 'blue', 'orange', 'purple', 'black']
var randomColorNumber = Math.floor(Math.random()*color.length)
console.log(color)






    

    
    
    
    


    





