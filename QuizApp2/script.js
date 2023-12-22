
let Data=[
    {
    questionnbr:"1: html stands for",
    choice1:"Hypertext markup language",
    choice2:"hyper and text markup language",
    choice3:"high multimedia language",
    correct:"choice1"
   },

{questionnbr:"2:what css stands for",
choice1:"computer style sheets",
choice2:"cascading style sheets",
choice3:"creative style sheets",
correct:"choice2"
}, 

{
questionnbr:"3:what MDN",
choice1:"MOZILLA DEVELOPER NETWORK",
choice2:"MULTIPLE DEVELOPER NETWORK",
choice3:"MOZILLLA DEVELOPER FOR NETWORK",
correct:"choice1"
},

{questionnbr:"4:what css stands for",
 choice1:"computer style sheets",
 choice2:"cascading style sheets",
 choice3:"creative style sheets",
 correct:"choice2"
}


];


let dateobj=new Date();
let month=dateobj.getUTCMonth()+1;
let day=dateobj.getUTCDate();
let year=dateobj.getUTCFullYear();
let fulldate=year+"/"+month+"/"+day;

const date=document.getElementById("date").innerHTML=fulldate;




const question1=document.getElementById("question");

const choice1 =document.getElementById("choice1_text");
const choice2 =document.getElementById("choice2_text");
const choice3 =document.getElementById("choice3_text");
// next button
const nextbtn=document.querySelector("#btn");
// score
const correctanswer=document.getElementById("score");

let score=0;
let currentquestion=0;




const loadquestion=()=>{
    // here is method to remove checked on radio when next button is clicked
    // removechecked()

    const currentquestionData=Data[currentquestion];

    // here we are taking array of question to h3
    question1.innerHTML = currentquestionData.questionnbr + "  /2 marks";

    choice1.innerText=currentquestionData.choice1;
    choice2.innerHTML=currentquestionData.choice2;
    choice3.innerHTML=currentquestionData.choice3;
    // currentquestion++;

    // console.log(currentquestion);
    //       console.log(Data.length-1);
          if (currentquestion==Data.length-1) {
            // console.log("submit");
            nextbtn.setAttribute("value","Submit");
          }
   
};
// function to call every time when next
loadquestion();







// loop over radios to get selected radio
let selected_answer=document.querySelectorAll(".radio");
function selectedradio(){
   
    let array_length=selected_answer.length;
    let answer="";



    for (let  i =0; i<array_length;i++) {
     if (selected_answer[i].checked) {
          // do whatever you want with the checked radio
         answer=selected_answer[i].id;
        // console.log(answer);
       return answer;
     }
     // console.log(selected_answer[i].checked);
    }
     // in case no ansuer selected
     return undefined;

  

}





// remove checkoption when next clicked
function removechecked(){
    // by using for each metho as i did by for loop inside selected()
    
    selected_answer.forEach(selectedradio=> {
       selectedradio.checked=false;
    });

}


//       function for restart

      function refreshPage(){
    window.location.href = window.location.href;
}


// here we are going to add eventlistener to btn

nextbtn.addEventListener("click",function(){
    //  check to see the answer
    let answer=selectedradio();
    console.log(answer);


    if (answer) {
        // cs answeris now checking or log id so here am gonna to compare
        // selected id with correct in  Data array the score++
        if(answer=== Data[currentquestion].correct){
          score=score+2;
        }
         
      

        // if we have an answer we have to increase current quiz
        currentquestion++;
        if (currentquestion<Data.length) {
            // console.log(nextbtn.value);
            loadquestion(); 
            removechecked();
        }
        else{
           
            // here am gonna to display score
            let  result=
                 `<div>
                <h3>you got ${score} /${Data.length*2}</h3>

                <button class="button" onclick="refreshPage()">Restart</button>
      
                </div>
                `;
            
            correctanswer.innerHTML=result;

            // here i want ro hide all question
            const hide=document.querySelectorAll(".display");

            hide.forEach((i)=>{
               i.classList.add("hiding");
            });



        }
    }
      
});


