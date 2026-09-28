const questions = [
    {
        category: "HTML",
        question: "Vad används HTML främst till?",
        answers: [
            "Skapa strukturen på en webbsida",
            "Ändra färger på en webbsida",
            "Skapa databaser",
            "Redigera bilder"
        ],
        correct: 0
    },

    {
        category: "CSS",
        question: "Vad används CSS främst till?",
        answers: [
            "Skapa innehållet på en webbsida",
            "Ändra design och utseende",
            "Lagra information",
            "Skapa mappar"
        ],
        correct: 1
    },

    {
        category: "JavaScript",
        question: "Vad kan JavaScript användas till på en webbsida?",
        answers: [
            "Göra sidan interaktiv",
            "Skapa en CSS-fil",
            "Byta namn på HTML-filen",
            "Installera en webbläsare"
        ],
        correct: 0
    },

    {
        category: "Python",
        question: "Vad är Python?",
        answers: [
            "En webbläsare",
            "Ett programmeringsspråk",
            "En CSS-egenskap",
            "En HTML-tagg"
        ],
        correct: 1

        },

        {
    category: "HTML",
    question: "Vilken HTML-tagg används för att skapa en länk?",
    answers: [
        "<a>",
        "<p>",
        "<h1>",
        "<img>"
    ],
    correct: 0
},

{
    category: "CSS",
    question: "Vilken CSS-egenskap används för att skapa mellanrum inuti ett element, mellan innehållet och kanten?",
    answers: [
        "margin",
        "padding",
        "border",
        "gap"
    ],
    correct: 1
},


   {
    category: "Webbdesign",
    question: "Vad menas med responsiv webbdesign?",
    answers: [
        "Att webbsidan anpassar sig efter olika skärmstorlekar",
        "Att webbsidan alltid har mörkt tema",
        "Att webbsidan saknar bilder",
        "Att webbsidan bara fungerar på datorer"
    ],
    correct: 0
},

{
    category: "HTML",
    question: "Vilken HTML-tagg används för den största rubriken?",
    answers: [
        "<p>",
        "<h1>",
        "<div>",
        "<a>"
    ],
    correct: 1
},

{
    category: "CSS",
    question: "Hur väljer man ett element med klassen 'button' i CSS?",
    answers: [
        "#button",
        ".button",
        "button#",
        "*button"
    ],
    correct: 1
},

{
    category: "Programmering",
    question: "Vad är en variabel inom programmering?",
    answers: [
        "En plats där man kan lagra ett värde",
        "En typ av webbläsare",
        "En HTML-tagg",
        "En bild på en webbsida"
    ],
    correct: 0
}
    ];
let currentQuestion = 0;
let score = 0;
let answered = false;

const questionElement = document.getElementById("question");
const categoryElement = document.getElementById("category");
const currentQuestionElement = document.getElementById("current-question");
const scoreElement = document.getElementById("score");
const progressElement = document.getElementById("progress");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const answerButtons = document.querySelectorAll(".answer-button");


function showQuestion() {

    answered = false;

    const question = questions[currentQuestion];

    categoryElement.textContent = question.category;
    questionElement.textContent = question.question;
    currentQuestionElement.textContent = currentQuestion + 1;

    progressElement.style.width =
        ((currentQuestion + 1) / questions.length * 100) + "%";

    feedbackElement.textContent = "";

    nextButton.style.display = "none";

    answerButtons.forEach((button, index) => {

        button.textContent = question.answers[index];

        button.classList.remove("correct", "wrong");

        button.disabled = false;

        button.onclick = function () {
            checkAnswer(index);
        };

    });
}


function checkAnswer(index) {

    if (answered) {
        return;
    }

    answered = true;

    const question = questions[currentQuestion];

    answerButtons.forEach(button => {
        button.disabled = true;
    });


    if (index === question.correct) {

        score++;

        scoreElement.textContent = score;

        answerButtons[index].classList.add("correct");

        feedbackElement.textContent = "Rätt svar! 🎉";

    } else {

        answerButtons[index].classList.add("wrong");

        answerButtons[question.correct].classList.add("correct");

        feedbackElement.textContent =
            "Inte riktigt. Det gröna alternativet är rätt.";

    }

    nextButton.style.display = "block";
}


nextButton.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        document.querySelector(".question-box").innerHTML = `
            <div class="quiz-result">

                <p class="small-title">
                    RESULTAT
                </p>

                <h2>
                    Du fick <span>${score}/${questions.length}</span> rätt!
                </h2>

                <p>
                    Bra jobbat! Du har slutfört CodeMap-quizet.
                </p>

                <button class="quiz-next" onclick="location.reload()">
                    Gör om quizet
                </button>

            </div>
            {
    
}
        `;

    }

    

});


showQuestion();

