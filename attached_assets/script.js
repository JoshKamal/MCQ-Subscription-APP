questions.push(...anatomyData);

let currentQuestionIndex = 0;
let incorrectAnswers = [];
let correctCount = 0;
let totalAnswered = 0;
let inReviewMode = false;
let lastPracticeIndex = 0;
let activeQuestions = [...questions]; // mutable copy
let practiceQuestions = []; // backup of active practice set

const STORAGE_KEY = 'anatomyProgress';
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackBox = document.getElementById("feedback-box");
const progressBar = document.getElementById("progress-bar");
const select = document.getElementById("question-select");
const reviewControls = document.getElementById("review-controls");

// Score box
const scoreContainer = document.createElement("div");
scoreContainer.className = "score-box-container";
const scoreFill = document.createElement("div");
scoreFill.className = "score-box-fill";
const scoreLabel = document.createElement("div");
scoreLabel.className = "score-box-label";
scoreFill.appendChild(scoreLabel);
scoreContainer.appendChild(scoreFill);
document.querySelector(".question-box").appendChild(scoreContainer);

function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function renderQuestion() {
  const currentList = inReviewMode ? activeQuestions : activeQuestions;

if (currentUser) {
    const progress = getProgress();
    const answered = Object.keys(progress).length;
    const correct = Object.values(progress).filter(v => v === 'correct').length;
    document.getElementById("user-stats").style.display = "block";
    document.getElementById("stats-summary").innerText = `You've answered ${answered} questions — ${correct} correct.`;
  }

  if (currentList.length === 0) {
    questionText.innerText = "No questions available to show.";
    optionsContainer.innerHTML = "";
    feedbackBox.style.display = "none";
    return;
  }

  if (!currentList[currentQuestionIndex]) {
    console.warn("Invalid question index:", currentQuestionIndex);
    return;
  }

  const q = currentList[currentQuestionIndex];
  questionText.innerText = `Q${currentQuestionIndex + 1}: ${q.question}`;
  optionsContainer.innerHTML = "";
  feedbackBox.style.display = "none";
  feedbackBox.innerHTML = "";

  const optionData = q.options.map((text, index) => ({ text, index }));
  shuffleQuestions(optionData);

  q.shuffledOptions = optionData;
  q.shuffledCorrectIndex = optionData.findIndex(opt => opt.index === q.correctIndex);

  optionData.forEach((optionObj, index) => {
    const btn = document.createElement("button");
    btn.innerText = optionObj.text;
    btn.disabled = false;
    btn.style.opacity = "1.0";
    btn.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(btn);
  });

  updateProgress();
  updateDropdown();
  updateScore();
}

function checkAnswer(selectedIndex) {
  const q = activeQuestions[currentQuestionIndex];
  const isCorrect = selectedIndex === q.shuffledCorrectIndex;

  if (!q.hasBeenAnswered) {
    totalAnswered++;
    if (isCorrect) correctCount++;
    q.hasBeenAnswered = true;
  }

  if (!isCorrect && !incorrectAnswers.some(item => item.question === q.question)) {
    incorrectAnswers.push({ ...q, selectedIndex });
  }

  feedbackBox.style.display = "block";
  feedbackBox.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  feedbackBox.innerHTML = `<strong>${isCorrect ? "Correct!" : "Incorrect."}</strong><br><br>`;
  feedbackBox.innerHTML += `<div class="explanations">` +
  q.explanations.map((exp, idx) => {
    const isCorrect = exp.startsWith("Correct:");
    const label = isCorrect ? `<strong>Correct:</strong>` : `<strong>Incorrect:</strong>`;
    const explanationText = exp.replace(/^Correct:|^Incorrect:/, "").trim();
    return `
      <div style="margin-bottom: 12px;">
        <strong>${q.options[idx]}</strong><br>
        ${label} ${explanationText}
      </div>
    `;
  }).join("") +
  `</div>`;
  feedbackBox.innerHTML += `<p><em>Source: ${q.slideLink}</em></p>`;

  updateScore();
  saveQuestionStatus(q.originalIndex ?? currentQuestionIndex, isCorrect);

  if (currentQuestionIndex === activeQuestions.length - 1) {
    reviewControls.style.display = incorrectAnswers.length ? "flex" : "none";
  }
}

function nextQuestion() {
  if (currentQuestionIndex < activeQuestions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  if (!inReviewMode) lastPracticeIndex = currentQuestionIndex;
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  if (!inReviewMode) lastPracticeIndex = currentQuestionIndex;
  }
}

function goToQuestion(index) {
  currentQuestionIndex = parseInt(index);
  renderQuestion();
}

function updateDropdown() {
  select.innerHTML = "";
  activeQuestions.forEach((q, idx) => {
    const option = document.createElement("option");
    option.value = idx;
    option.text = `Q${idx + 1}`;
    if (idx === currentQuestionIndex) option.selected = true;
    select.appendChild(option);
  });
}

function updateProgress() {
  const percent = ((currentQuestionIndex + 1) / activeQuestions.length) * 100;
  progressBar.style.width = `${percent}%`;
}

function updateScore() {
  if (totalAnswered === 0 || inReviewMode) {
    scoreFill.style.width = "0%";
    scoreLabel.innerText = "";
    return;
  }

  const percent = Math.round((correctCount / totalAnswered) * 100);
  scoreFill.style.width = `${percent}%`;
  scoreLabel.innerText = `${correctCount}/${totalAnswered} correct (${percent}%)`;

  if (percent >= 80) {
    scoreFill.style.backgroundColor = "#38a169";
  } else if (percent >= 50) {
    scoreFill.style.backgroundColor = "#ed8936";
  } else {
    scoreFill.style.backgroundColor = "#e53e3e";
  }
}

function startReview(filterType = 'incorrect') {
  const progress = getProgress();
  const filtered = questions
    .map((q, i) => ({ ...q, originalIndex: i }))
    .filter(q => progress[q.originalIndex] === filterType);

  if (filtered.length === 0) {
    alert(`No ${filterType} questions to review.`);
    return;
  }

  // ✅ Save the current shuffled practice set before reviewing
  practiceQuestions = [...activeQuestions];
  lastPracticeIndex = currentQuestionIndex;

  inReviewMode = true;
  activeQuestions = filtered;
  currentQuestionIndex = 0;
  document.getElementById("return-controls").style.display = "flex";
  renderQuestion();
}

function exitReview() {
  inReviewMode = false;

  if (practiceQuestions.length > 0) {
    activeQuestions = [...practiceQuestions]; // ✅ Restore previous shuffled list
  } else {
    const progress = getProgress();
    activeQuestions = questions
      .map((q, i) => ({ ...q, originalIndex: i }))
      .filter(q => !progress[q.originalIndex]);
    shuffleQuestions(activeQuestions); // fallback shuffle
  }

  currentQuestionIndex = lastPracticeIndex;
  document.getElementById("return-controls").style.display = "none";
  renderQuestion();
}

let currentUser = null; // will hold the entered username

// Prompt for a username and log them in locally
function loginUser() {
  const username = prompt("Enter your username:");
  if (!username) return;

  currentUser = username;
  const key = `${currentUser}_progress`;
  const existing = localStorage.getItem(key);

  if (existing) {
    alert(`Welcome back, ${username}! Your previous progress will be loaded.`);
  } else {
    alert(`Hello ${username}, let's get started!`);
  }

  document.getElementById("auth-section").style.display = "none";
  document.getElementById("app-container").style.display = "block";
  document.getElementById("auth-status").innerText = `Signed in as ${username}`;
  document.getElementById("logout-btn").style.display = "block";

  const progress = getProgress();
  activeQuestions = questions
    .map((q, i) => ({ ...q, originalIndex: i }))
    .filter(q => !progress[q.originalIndex]);

  shuffleQuestions(activeQuestions);
  switchTab('quiz');
  renderQuestion();
}

function registerUser() {
  // Just re-use loginUser since we’re not storing credentials
  loginUser();
}

function logoutUser() {
  currentUser = null;
  document.getElementById("auth-section").style.display = "block";
  document.getElementById("app-container").style.display = "none";
  document.getElementById("auth-status").innerText = "";
  document.getElementById("logout-btn").style.display = "none";
}

// LocalStorage-based progress per username
function getProgress() {
  if (!currentUser) return {};
  const key = `${currentUser}_progress`;
  return JSON.parse(localStorage.getItem(key)) || {};
}

function saveQuestionStatus(index, isCorrect) {
  if (!currentUser) return;
  const key = `${currentUser}_progress`;
  const progress = JSON.parse(localStorage.getItem(key)) || {};
  progress[index] = isCorrect ? 'correct' : 'incorrect';
  localStorage.setItem(key, JSON.stringify(progress));
}

function resetProgress() {
  if (currentUser && confirm("Are you sure you want to reset all your progress?")) {
    localStorage.removeItem(`${currentUser}_progress`);
    location.reload();
  }
}
// FOR EDUCATIONAL SUMMARIES
function switchTab(tab) {
  const quizSection = document.getElementById("quiz-section");
  const eduSection = document.getElementById("educational-section");
  const conditionsSection = document.getElementById("conditions-section");

  quizSection.style.display = "none";
  eduSection.style.display = "none";
  conditionsSection.style.display = "none";

  if (tab === "quiz") {
    quizSection.style.display = "block";
  } else if (tab === "education") {
    eduSection.style.display = "block";
  } else if (tab === "conditions") {
    conditionsSection.style.display = "block";
  }
}


window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".summary-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });

  const progress = getProgress();
  activeQuestions = questions
    .map((q, i) => ({ ...q, originalIndex: i }))
    .filter(q => !progress[q.originalIndex]); // only show unseen

  shuffleQuestions(activeQuestions);
  switchTab('quiz')
  renderQuestion();
}
