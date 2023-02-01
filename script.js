const quizData=[  
    {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
];

const a_text=document.getElementbById('a_text');
const b_text=document.getElementbById('b_text');
const c_text=document.getElementbById('c_text');
const d_text=document.getElementbById('d_text');

let currentQuestion=0;


loadQuiz();

function loadQuiz(){
    const currentQuizData=quizData[currentquestion];
    questionEl.innerHTML=quizData[currentQuestion]


    currentQuestion++;

};