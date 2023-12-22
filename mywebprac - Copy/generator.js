var quotes=[{
        quote:"I am shining fine.",
        author:"Samuel James"
},
{quote:"Come here.",
author:"Mike Sturridge"
},

{quote:"Keep on practicing.",
author:"Hay Chealsea"
},

{quote:"What a shining day.",
author:"King Dapo"
},

{quote:"Lagos, the commercial city of Nigeria.",
author:"Samuel Peter"
},

{quote:"Colombia is a cool city in North America.",
author:"Cole"
},

{quote:"Arise and shine for your light has come.",
author:"Adams"
},

{quote:"The world belongs to the thinkers.",
author:"David Mark"
},

{quote:"Nothing stops in the hands of thanksgivers.",
author:"John"
},

{quote:"Live is a beautiful thing.",
author:"Socrates"
},

{quote:"WE move forward.",
author:"Akeem"
},

{quote:"God has lifted me up.",
author:"Comfort"
},

{quote:"Iam sounding great.",
author:"George King"
}



]

var RandomQuoteNumber = Math.floor(Math.random()* quotes.length)

var btn = document.getElementById("btn")
btn.addEventListener("click",function(){
        var message = document.getElementById("message")
        message.innerHTML = quotes[RandomQuoteNumber].quote + "<br>" + quotes[RandomQuoteNumber].author
})