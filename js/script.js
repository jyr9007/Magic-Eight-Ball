const responses = [
    "It is certain.",
    "You may rely on it.",
    "Yes, absolutely!",
    "Better not tell you now",
    "Signs point to yes.",
    "Don't count on it.",
    "It is certain.",
    "Very doubtful."
];


const questionInput = document.getElementById('question');
const magicWindow = document.getElementById('magicWindow');
const shakeBtn = document.getElementById('shakeBtn');
const stopBtn = document.getElementById('stopBtn');

function shakeBall() {
    const question = questionInput.value.trim();

 
    if (!question) {
        alert('Please enter a question!');
        return;
    }


    const randomIndex = Math.floor(Math.random() * responses.length);
    const answer = responses[randomIndex];

    magicWindow.textContent = answer;
    questionInput.value = '';
}

function stopGame() {
    magicWindow.textContent = "Thank you for playing the Magic Eight Ball.";

    questionInput.disabled = true;
    shakeBtn.disabled = true;
    stopBtn.disabled = true;
}

shakeBtn.addEventListener('click', shakeBall);
stopBtn.addEventListener('click', stopGame);
