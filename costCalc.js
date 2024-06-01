let totalCost = 0;
let selectedOptions = {};

function nextQuestion(questionNumber, cost, element) {
    document.querySelectorAll(`#question${questionNumber} button`).forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
    selectedOptions[`question${questionNumber}`] = {
        cost: cost,
        elementId: element.id
    };
    totalCost = Object.values(selectedOptions).reduce((sum, option) => sum + option.cost, 0);
    document.getElementById(`question${questionNumber}`).classList.remove('active');
    if (questionNumber < 5) {
        document.getElementById(`question${questionNumber + 1}`).classList.add('active');
    } else {
        document.getElementById('result').style.display = 'block';
        document.getElementById('totalCost').innerText = totalCost;
        showContent('content1');
    }
}

function previousQuestion(questionNumber) {
    document.getElementById(`question${questionNumber + 1}`).classList.remove('active');
    document.getElementById(`question${questionNumber}`).classList.add('active');
    let selectedOption = selectedOptions[`question${questionNumber}`];
    if (selectedOption) {
        document.getElementById(selectedOption.elementId).classList.add('selected');
    }
}
function showContent(contentId) {
    document.querySelectorAll('.result-content').forEach(content => content.classList.remove('active'));
    document.getElementById(contentId).classList.add('active');
}