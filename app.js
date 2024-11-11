const questions = {
    "question1": {
        "q": "Nothing Here",
        "o0": {
            "value": "Ans 1",
            "isCorrect": false
        },
        "o1": {
            "value": "Ans 2",
            "isCorrect": false
        },
        "o2": {
            "value": "Ans 3",
            "isCorrect": true
        },
        "o3": {
            "value": "Ans 4",
            "isCorrect": false
        }
    }
}

const options = document.querySelectorAll('#opt')
const question = document.getElementById('question')
const optionBox = document.querySelectorAll('#option-box')
const scoreTxt = document.getElementById('score')
const qno = document.getElementById('qno')
const progress = document.querySelector('.progress-bar')
const container = document.querySelector('.container')
const finalContainer = document.querySelector('.final-container')
const restart = document.querySelector('.restart')
const finalScoreTxt = document.getElementById('final')

let currentQuestion = 1
let score = 0
let maxQuestion = 3


function assignQuestion(){
    let questionNo = 'question' + currentQuestion
    question.innerText = questions[questionNo].q
    return questionNo
}
function assignOption(questionNo){
    for(let i=0; i<4; i++){
    let optNo = `o${i}`
    options[i].innerText = questions[questionNo][optNo].value
    }
}

function crtOption(questionNo){
    for(let i=0; i<4; i++){
        let optNo = `o${i}`
        options[i].innerText = questions[questionNo][optNo].value
        if(options[i].innerText = questions[questionNo][optNo].isCorrect){
            return optNo
        }
        }
}


function nextWave(){
    if(currentQuestion > maxQuestion)    {
        container.style.display = 'none'
        finalContainer.style.display = 'block'
        finalScoreTxt.innerText = score.toString()
    }
    
    if(currentQuestion <= maxQuestion)    {
        assignQuestion()
    }
let questionNo = 'question' + currentQuestion
let crtNo = crtOption(questionNo)

assignOption(questionNo)
currentQuestion++ 
return crtNo

}



restart.addEventListener('click', () => {

    currentQuestion = 1;
    score = 0;

    // Reset UI elements
    container.style.display = 'block';
    finalContainer.style.display = 'none';
    scoreTxt.innerText = score.toString();
    qno.innerText = `0/${maxQuestion}`;
    progress.style.width = '0px';


    crtNo = nextWave();


});

let crtNo = nextWave()
optionBox.forEach((opt)=>{
    opt.addEventListener('click', ()=>{

        if(opt.className == crtNo){

            opt.style.backgroundColor = 'green'
            score += 10
            scoreTxt.innerText = score.toString()
            qno.innerText =  `${currentQuestion-1}/${maxQuestion}`
            progress.style.width = `${(currentQuestion-1) * 30}px`

        }
        else{
            opt.style.backgroundColor = 'red'
            qno.innerText =  `${currentQuestion-1}/${maxQuestion}`
            progress.style.width = `${(currentQuestion-1) * 30}px`

        } 
        setTimeout(()=>{
            opt.style.backgroundColor = 'antiquewhite'
            crtNo = nextWave()
        }, 1000)  
        

    })
})





