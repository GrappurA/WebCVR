const quizData = [
    {
        question: "Як звати песика?",
        options: ["Луна", "Жучка", "Руна", "Шарік"],
        answer: "Руна"
    },
    {
        question: "Яка порода Руни?",
        options: ["Маліноа", "Пітбуль", "Шпіц", "Амстафф"],
        answer: "Амстафф"
    },
    {
        question: "Скільки Руні років?",
        options: ["1", "2", "3", "4"],
        answer: "3"
    },
    {
        question: "Скільки команд знає Руна?",
        options: ["10", "5", "100", "15"],
        answer: "10"
    },
];

let score = 0;
let current = 0;
const result = "some result";

const questionBox = document.getElementById("questionBox");
const optionsBox = document.getElementById("optionsBox");
const nextButton = document.getElementById("nextButton");

function loadQuestion() {
    const q = quizData[current];
    questionBox.textContent = q.question;
    optionsBox.textContent = "";

    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(btn);
        btn.className = "rounded-[90px] border-2 border-[#5d8aa8] transition-transform duration-350 hover:scale-110 p-2"

        optionsBox.appendChild(btn);
    });
}

function celebrateQuiz() {
    const container = document.getElementById("runa-heads");
    let headNumber = score * 30;
    if (headNumber === 0) {
        headNumber = 30;
    }
    for (let i = 0; i < headNumber; i++) {
        const img = document.createElement("img");
        img.src = "img/runa-head.png";
        img.className = "runa-head";

        img.style.top = Math.random() * 90 + "%";
        img.style.left = Math.random() * 90 + "%";
        img.style.setProperty("--x", `${(Math.random() - 0.5) * 100}px`);
        // random rotation
        img.style.setProperty("--r", `${Math.random() * 360}deg`);

        container.appendChild(img);

        img.addEventListener("animationend", () => img.remove());
    }
}

function checkAnswer(optBtn) {
    const buttons = optionsBox.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    if (optBtn.textContent === quizData[current].answer) {
        score++;
        optBtn.className += " bg-[#00ff00]";
    }
    else {
        optBtn.className += " bg-[#ff0000]";
    }
    
    if (current >= quizData.length-1) {
        questionBox.style.fontSize = "20px";
        questionBox.textContent = `Ви вгадали ${score}/${quizData.length} !`;       
        optionsBox.innerHTML = "";

        celebrateQuiz();
        return;
    }
    
    current++;
    setTimeout(loadQuestion, 800);
}

loadQuestion();