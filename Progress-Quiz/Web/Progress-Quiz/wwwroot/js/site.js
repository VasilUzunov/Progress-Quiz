var questions = window.questions;
console.log(questions);

let history = questions.filter(x => x.category === 'History');
var item = history[Math.floor(Math.random() * history.length)];

var correctAnswers = 0;
var WrongAnswers = 0;
document.getElementsByClassName('answerbutton')[0].addEventListener('click', (e) => { submitQuestion(e) });
document.getElementsByClassName('answerbutton')[1].addEventListener('click', (e) => { nextQuestion(e) });


function submitQuestion(e) {
    e.preventDefault();
    var btnNext = document.getElementsByClassName('answerbutton')[1];
    btnNext.style.display = "inline";

    var labels = document.querySelectorAll('label input');

    var clickedLabel = document.querySelector('input[name="quiz"]:checked').parentNode;

    if (clickedLabel.textContent === item.correctAnswers) {
        clickedLabel.style.background = 'green';
    } else {
        clickedLabel.style.background = 'red';
        labels.filter(x=>x.textContent===item.correctAnswer).style.background ='green'
    }
}

function nextQuestion(e) {
    e.preventDefault();
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer === 0) {
            display.style.display = 'none';

            afterTheTimerBecomeZero();
        }

    }, 1000);
}

window.onload = function () {
    var h1 = document.getElementById('category');
    var p = document.getElementById('qtext');
    var labels = document.querySelectorAll('label');

    var test = document.createElement('input');
    test.type = 'radio';
    var span = document.createElement('span');
    span.className = 'chekmark';

    labels[0].textContent += item.wrongAnswers[0].answer;
    labels[0].appendChild(test);
    labels[0].appendChild(span);
    labels[1].textContent += item.correctAnswer;
    labels[1].appendChild(test);
    labels[2].textContent += item.wrongAnswers[1].answer;
    labels[2].appendChild(test);
    labels[3].textContent += item.wrongAnswers[2].answer;
    labels[3].appendChild(test);

    h1.textContent += item.category;
    p.textContent += item.questionText;

    var oneMinute = 60,
        display = document.querySelector('#countdown');
    startTimer(oneMinute, display);
};

function afterTheTimerBecomeZero(parameters) {
    var labels = document.querySelectorAll('label input');
    console.log(labels);
}
