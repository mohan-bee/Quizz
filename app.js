const questions = {
    "question1": {
        "q": "Why is it important to understand what happens 'below the surface' of a program?",
        "o0": {
            "value": "To learn advanced application development techniques",
            "isCorrect": false
        },
        "o1": {
            "value": "To make high-level programming easier",
            "isCorrect": false
        },
        "o2": {
            "value": "To understand how the program is transformed into low-level instructions",
            "isCorrect": true
        },
        "o3": {
            "value": "To improve performance optimization",
            "isCorrect": false
        }
    },
    "question2": {
        "q": "With the smartphones that we use on a daily basis to get our work done, we cannot see what is happening behind the applications. Which OOPS concept does this real-life scenario represent?",
        "o0": {
            "value": "Inheritance",
            "isCorrect": false
        },
        "o1": {
            "value": "Abstraction",
            "isCorrect": true
        },
        "o2": {
            "value": "Encapsulation",
            "isCorrect": false
        },
        "o3": {
            "value": "None of the options",
            "isCorrect": false
        }
    },
    "question3": {
        "q": "Which data structure uses the principle of LIFO (Last-in First-out)?",
        "o0": {
            "value": "Stack",
            "isCorrect": true
        },
        "o1": {
            "value": "Queue",
            "isCorrect": false
        },
        "o2": {
            "value": "Array",
            "isCorrect": false
        },
        "o3": {
            "value": "None of the options",
            "isCorrect": false
        }
    },
    "question4": {
        "q": "1, 2, 3, 4, and 5 are inserted in a queue one by one. After that, two elements were removed and 6, 7 were also inserted into the queue. What will the queue look like after these operations?",
        "o0": {
            "value": "2, 3, 4, 5, 6",
            "isCorrect": false
        },
        "o1": {
            "value": "3, 4, 5, 6, 7",
            "isCorrect": true
        },
        "o2": {
            "value": "1, 2, 3, 6, 7",
            "isCorrect": false
        },
        "o3": {
            "value": "None of the options",
            "isCorrect": false
        }
    },
    "question5": {
        "q": "Ten elements are present in a queue initially. Three elements were removed, and then two more elements were removed, and then 1 element was added and then 2 more elements were removed. What will be the final length of the queue?",
        "o0": {
            "value": "6",
            "isCorrect": false
        },
        "o1": {
            "value": "5",
            "isCorrect": true
        },
        "o2": {
            "value": "4",
            "isCorrect": false
        },
        "o3": {
            "value": "10",
            "isCorrect": false
        }
    },
    "question6": {
        "q": "What does the Pythagorean theorem help compute in the Point class example?",
        "o0": {
            "value": "The angle between two points",
            "isCorrect": false
        },
        "o1": {
            "value": "The area of a triangle formed by the points",
            "isCorrect": false
        },
        "o2": {
            "value": "The midpoint of two points",
            "isCorrect": false
        },
        "o3": {
            "value": "The distance between two points",
            "isCorrect": true
        }
    },
    "question7": {
        "q": "I’m a pointer pointing to a memory location that has been deleted or freed. Who am I?",
        "o0": {
            "value": "Void Pointer",
            "isCorrect": false
        },
        "o1": {
            "value": "Wild Pointer",
            "isCorrect": false
        },
        "o2": {
            "value": "Dangling Pointer",
            "isCorrect": true
        },
        "o3": {
            "value": "None of the options",
            "isCorrect": false
        }
    },
    "question8": {
        "q": "What is the main advantage of using a virtual machine (VM) in the context of Java?",
        "o0": {
            "value": "It speeds up the compilation process.",
            "isCorrect": false
        },
        "o1": {
            "value": "It eliminates the need for a compiler.",
            "isCorrect": false
        },
        "o2": {
            "value": "It allows the program to run on multiple platforms without modification.",
            "isCorrect": true
        },
        "o3": {
            "value": "It provides direct access to the hardware.",
            "isCorrect": false
        }
    },
    "question9": {
        "q": "What is a significant benefit of breaking down the compilation process into two tiers?",
        "o0": {
            "value": "It reduces the overall execution time of programs.",
            "isCorrect": false
        },
        "o1": {
            "value": "It simplifies the development of compilers by dividing a complex task into simpler ones.",
            "isCorrect": true
        },
        "o2": {
            "value": "It allows for direct execution on hardware without additional translation.",
            "isCorrect": false
        },
        "o3": {
            "value": "It eliminates the need for multiple versions of the code.",
            "isCorrect": false
        }
    },
    "question10": {
        "q": "How can high-level programmers ignore issues such as program execution, function call and return, handling loops (do, while), class functions, operating system intricacies, etc.?",
        "o0": {
            "value": "They treat the high-level language as an abstraction.",
            "isCorrect": true
        },
        "o1": {
            "value": "They focus solely on hardware intricacies to overlook programming challenges.",
            "isCorrect": false
        },
        "o2": {
            "value": "They rely on low-level language features to mitigate complex programming tasks.",
            "isCorrect": false
        },
        "o3": {
            "value": "They avoid using abstraction and prefer direct implementation for each software function.",
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





