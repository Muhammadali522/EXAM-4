let form1 = document.querySelector('.form__satrt');
let btn1 = document.querySelector('.btn__start')
let btn3 = document.querySelector('.btn__RESTART')

let form2 = document.querySelector('.form__input')
let question = document.querySelector('.question')
let input = document.querySelector('.input')
let btn2 = document.querySelector('.btn__input')
let p2 = document.querySelector('.input__text')

let Try = 0;

let questions = [
    {
        question: "2 + 2 = ?",
        correctAnswer: "4"
    },
    {
        question: "5 * 8 = ?",
        correctAnswer: "40"
    },
    {
        question: "60 / 2 = ?",
        correctAnswer: "30"
    },
    {
        question: "20 - 19",
        correctAnswer: "1"
    },
    {
        question: "5^2 = ?",
        correctAnswer: "25"
    }
];


btn1.addEventListener('click', (evt) => {
    evt.preventDefault();
    form1.style.display = 'none';
    form2.style.display = 'block';
    alert("Let's get started")
    Question()
});

btn3.addEventListener('click', (evt) => {
    evt.preventDefault();
    Try = 0;
    form1.style.display = 'none';
    form2.style.display = 'block';
    alert("Let's get started")
    Question()
});

function Question() {
    if (Try < questions.length) {
        question.textContent = questions[Try].question;
    } else {
        alert("Вы завершили все вопросы!");
        form2.style.display = "none";
        form1.style.display = "block";
        btn3.style.display = "block";
        btn1.style.display = "none";
    }
}

form2.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let userAnswer = input.value.trim();
    if (userAnswer === questions[Try].correctAnswer) {
        p2.textContent = "Ответ правильный!";
        Try++;
        setTimeout(() => {
            Question();
            p2.textContent = "";
        }, 2000); 
    } else {
        p2.textContent = "Неправильный ответ. Попробуйте снова.";
        console.log(`Правильный ответ на этот вопрос: ${questions[Try].correctAnswer}`);
        setTimeout(() => {
            p2.textContent = "";
        }, 2000); 
    }
    input.value = "";
})

