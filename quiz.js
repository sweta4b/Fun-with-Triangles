const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit");
const output = document.querySelector("#output");

const correctAnswer = ["90°", "right-angled"];


submitBtn.addEventListener("click", calculateScore);

function calculateScore() {
    let score = 0;
    let index = 0;

    const quizResult = new FormData(quizForm);

    for (let value of quizResult.values()) {
        if (value === correctAnswer[index]) {
            score = score + 1;
        }
        index = index + 1;
    }

    output.innerText = "Your Score is: " + score;


}