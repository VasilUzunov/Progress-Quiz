var questions = window.questions;
console.log(questions);

var count = 1;

window.onload = function () {
    let history = questions.filter(x => x.category === 'History');
    var item = history[Math.floor(Math.random() * history.length)];

    var h1 = document.getElementById('category');
    var p = document.getElementById('qtext');
    var labels = document.querySelectorAll('label');

    h1.textContent = item.category;
    p.textContent = item.questionText;

    var p1 = document.createElement('p');
    p1.textContent = item.wrongAnswers[0].answer;
    var p2 = document.createElement('p');
    p2.textContent = item.correctAnswer;
    var p3 = document.createElement('p');
    p3.textContent = item.wrongAnswers[1].answer;
    var p4 = document.createElement('p');
    p4.textContent = item.wrongAnswers[2].answer;

    labels[0].appendChild(p1);
    labels[1].appendChild(p2);
    labels[2].appendChild(p3);
    labels[3].appendChild(p4);

    var oneMinute = 60,
        display = document.querySelector('#countdown');
    startTimer(oneMinute, display);
};

var correctAnswers = 0;
var WrongAnswers = 0;


document.getElementsByClassName('answerbutton')[0].addEventListener('click', (e) => { submitQuestion(e) });
document.getElementsByClassName('answerbutton')[1].addEventListener('click', (e) => { nextQuestion(e) });

var chekedLabels = document.querySelectorAll('label input');
var label = chekedLabels[1].parentElement;

var clickedLabel; 

function submitQuestion(e) {
    e.preventDefault();
    var btnNext = document.getElementsByClassName('answerbutton')[1];
    btnNext.style.display = "inline";

    clickedLabel = document.querySelector('input[name="quiz"]:checked').parentNode;

    if (clickedLabel.id === 'label2') {
        clickedLabel.style.background = 'green';
    } else {
        clickedLabel.style.background = 'red';
        label.style.background = 'green';
    }
}

function nextQuestion(e) {
    e.preventDefault();

    var span = clickedLabel.children[1];
    //span.style.backgroundColor = 'white';
    clickedLabel.style.backgroundColor = '#ddd';
    label.style.backgroundColor = '#ddd';
    span.className = 'checkmark';


    let sports = questions.filter(x => x.category === 'Sport');
    let maths = questions.filter(x => x.category === 'Math');
    let animals = questions.filter(x => x.category === 'Animals');
    let technologies = questions.filter(x => x.category === 'Technology');

    labels.forEach(x => x.removeChild(x.lastChild));

    if (count === 1) {
        var sport = sports[Math.floor(Math.random() * sports.length)];

        h1.textContent = sport.category;
        p.textContent = sport.questionText;

        var p1 = document.createElement('p');
        p1.textContent = sport.wrongAnswers[0].answer;
        var p2 = document.createElement('p');
        p2.textContent = sport.correctAnswer;
        var p3 = document.createElement('p');
        p3.textContent = sport.wrongAnswers[1].answer;
        var p4 = document.createElement('p');
        p4.textContent = sport.wrongAnswers[2].answer;

        labels[0].appendChild(p1);
        labels[1].appendChild(p2);
        labels[2].appendChild(p3);
        labels[3].appendChild(p4);
    } else if (count === 2) {
        var math = maths[Math.floor(Math.random() * maths.length)];

        h1.textContent = math.category;
        p.textContent = math.questionText;

        var p1 = document.createElement('p');
        p1.textContent = math.wrongAnswers[0].answer;
        var p2 = document.createElement('p');
        p2.textContent = math.correctAnswer;
        var p3 = document.createElement('p');
        p3.textContent = math.wrongAnswers[1].answer;
        var p4 = document.createElement('p');
        p4.textContent = math.wrongAnswers[2].answer;

        labels[0].appendChild(p1);
        labels[1].appendChild(p2);
        labels[2].appendChild(p3);
        labels[3].appendChild(p4);
        count++;
    } else if (count === 3) {
        var animal = animals[Math.floor(Math.random() * animals.length)];

        h1.textContent = animal.category;
        p.textContent = animal.questionText;

        var p1 = document.createElement('p');
        p1.textContent = animal.wrongAnswers[0].answer;
        var p2 = document.createElement('p');
        p2.textContent = animal.correctAnswer;
        var p3 = document.createElement('p');
        p3.textContent = animal.wrongAnswers[1].answer;
        var p4 = document.createElement('p');
        p4.textContent = animal.wrongAnswers[2].answer;

        labels[0].appendChild(p1);
        labels[1].appendChild(p2);
        labels[2].appendChild(p3);
        labels[3].appendChild(p4);
    } else if (count === 4) {
        var technology = technologies[Math.floor(Math.random() * technologies.length)];

        h1.textContent = technology.category;
        p.textContent = technology.questionText;

        var p1 = document.createElement('p');
        p1.textContent = technology.wrongAnswers[0].answer;
        var p2 = document.createElement('p');
        p2.textContent = technology.correctAnswer;
        var p3 = document.createElement('p');
        p3.textContent = technology.wrongAnswers[1].answer;
        var p4 = document.createElement('p');
        p4.textContent = technology.wrongAnswers[2].answer;

        labels[0].appendChild(p1);
        labels[1].appendChild(p2);
        labels[2].appendChild(p3);
        labels[3].appendChild(p4);
    }
    count++;
    var oneMinute = 60,
        display = document.querySelector('#countdown');
    startTimer(oneMinute, display);
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

function afterTheTimerBecomeZero(parameters) {
    var btnSubmit = document.getElementsByClassName('answerbutton')[0];
    btnSubmit.style.display = "none";
    var btnNext = document.getElementsByClassName('answerbutton')[1];
    btnNext.style.display = "inline";

    var labels = document.querySelectorAll('label input');
    console.log(labels);
}
