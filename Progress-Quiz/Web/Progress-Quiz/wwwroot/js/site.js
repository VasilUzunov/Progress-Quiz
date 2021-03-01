var questions = window.questions;
var correctAnswers = 0;
var wrongAnswers = 0;
var count = 1;

window.onload = function () {
    let history = questions.filter(x => x.category === 'History');
    var item = history[Math.floor(Math.random() * history.length)];

    writeAnswersInParagraph(item);

    var oneMinute = 60,
        display = document.querySelector('#countdown');
    startTimer(oneMinute, display);
};

var btnSubmit = document.getElementsByClassName('answerbutton')[0];
var btnNext = document.getElementsByClassName('answerbutton')[1];

btnSubmit.addEventListener('click', (e) => { submitQuestion(e) });
btnNext.addEventListener('click', (e) => { nextQuestion(e) });

var label = document.querySelectorAll('label input')[1].parentElement;
var clickedLabel;

function submitQuestion(e) {
    var isChecked = document.querySelector('input[name="quiz"]:checked');
    if (isChecked) {
        e.preventDefault();
        clearInterval(stop);

        var btnNext = document.getElementsByClassName('answerbutton')[1];
        btnNext.style.display = "inline";

        clickedLabel = document.querySelector('input[name="quiz"]:checked').parentNode;

        if (clickedLabel.id === 'label2') {
            clickedLabel.style.backgroundColor = 'green';
            correctAnswers++;
        } else {
            clickedLabel.style.backgroundColor = 'red';
            label.style.backgroundColor = 'green';
            wrongAnswers++;
        }

        var btnSubmit = document.getElementsByClassName('answerbutton')[0];
        btnSubmit.style.display = "none";
    }
}

function nextQuestion(e) {
    e.preventDefault();

    var removeCheck = document.querySelector('input[name="quiz"]:checked');
    removeCheck.checked = false;

    if (clickedLabel) {
        clickedLabel.style.backgroundColor = '#ddd';
    }
    label.style.backgroundColor = '#ddd';

    let sports = questions.filter(x => x.category === 'Sport');
    let maths = questions.filter(x => x.category === 'Math');
    let animals = questions.filter(x => x.category === 'Animals');
    let technologies = questions.filter(x => x.category === 'Technology');

    document.querySelectorAll('label').forEach(x => x.removeChild(x.lastChild));

    if (count === 1) {
        var sport = sports[Math.floor(Math.random() * sports.length)];
        writeAnswersInParagraph(sport);
    } else if (count === 2) {
        var math = maths[Math.floor(Math.random() * maths.length)];
        writeAnswersInParagraph(math);
    } else if (count === 3) {
        var animal = animals[Math.floor(Math.random() * animals.length)];
        writeAnswersInParagraph(animal);
    } else if (count === 4) {
        var technology = technologies[Math.floor(Math.random() * technologies.length)];
        writeAnswersInParagraph(technology);
    } else {
        var mainDiv = document.getElementById('all');
        mainDiv.innerHTML = '';

        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);
    }
    count++;
    var oneMinute = 60,
        display = document.querySelector('#countdown');
    startTimer(oneMinute, display);
}

function startTimer(duration, display) {
    btnSubmit.style.display = "inline";
    btnNext.style.display = "none";

    var timer = duration, minutes, seconds;
    var stop = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer === 0) {
            clearInterval(stop);
            display.textContent = '00:00';

            afterTheTimerBecomeZero();
        }
    }, 1000);
}

function afterTheTimerBecomeZero() {
    btnSubmit.style.display = "none";
    btnNext.style.display = "inline";

    label.style.background = 'green';
    label.childNodes[1].checked = true;
    wrongAnswers++;
}

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Type', 'Number'],
        ['Wrong', wrongAnswers],
        ['Correct', correctAnswers],
    ]);

    var options = { 'title': 'Answers', 'width': 550, 'height': 400 };

    var chart = new google.visualization.PieChart(document.getElementById('all'));
    chart.draw(data, options);
}

function addElement(type, content, className) {
    var result = document.createElement(type);
    result.textContent = content;
    if (className) {
        result.className = className;
    }
    return result;
}

function writeAnswersInParagraph(item) {
    var h1 = document.getElementById('category');
    var p = document.getElementById('qtext');
    var labels = document.querySelectorAll('label');

    h1.textContent = item.category;
    p.textContent = item.questionText;

    var p1 = addElement('p', item.wrongAnswers[0].answer);
    var p2 = addElement('p', item.correctAnswer);
    var p3 = addElement('p', item.wrongAnswers[1].answer);
    var p4 = addElement('p', item.wrongAnswers[2].answer);

    labels[0].appendChild(p1);
    labels[1].appendChild(p2);
    labels[2].appendChild(p3);
    labels[3].appendChild(p4);
}
