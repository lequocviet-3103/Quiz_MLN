"use strict";

const QUIZ_TIME = 20;
const TIMER_CIRCUMFERENCE = 2 * Math.PI * 27;
const ANSWER_LETTERS = ["A", "B", "C", "D"];

const questions = [
  {
    question: "Hội nhập kinh tế quốc tế là gì?",
    answers: [
      "Là quá trình tách biệt nền kinh tế quốc gia khỏi các ảnh hưởng từ bên ngoài.",
      "Là quá trình gắn kết nền kinh tế quốc gia với nền kinh tế thế giới dựa trên sự chia sẻ lợi ích và tuân thủ các chuẩn mực quốc tế chung.",
      "Là việc các nước giàu hỗ trợ vốn vô điều kiện cho các nước nghèo.",
      "Là sự đồng nhất hoàn toàn chính sách chính trị của các quốc gia."
    ],
    correct: 1
  },
  {
    question: "Nhân tố nào là động lực thúc đẩy hội nhập kinh tế quốc tế trở thành xu thế tất yếu khách quan?",
    answers: [
      "Ý muốn chủ quan của các nhà lãnh đạo.",
      "Toàn cầu hóa kinh tế và sự phân công lao động quốc tế.",
      "Sự khan hiếm tài nguyên thiên nhiên của tất cả các nước.",
      "Sự sụp đổ của các rào cản tôn giáo toàn cầu."
    ],
    correct: 1
  },
  {
    question: "Đâu là một trong các mức độ hội nhập kinh tế quốc tế từ thấp đến cao?",
    answers: [
      "Liên minh quân sự.",
      "Hiệp ước tương trợ tư pháp.",
      "Khu vực mậu dịch tự do (FTA) và Liên minh thuế quan (CU).",
      "Diễn đàn văn hóa khu vực."
    ],
    correct: 2
  },
  {
    question: "Tác động tích cực nào của hội nhập giúp Việt Nam chuyển dịch cơ cấu kinh tế theo hướng hiện đại?",
    answers: [
      "Tăng cường nhập khẩu hàng tiêu dùng xa xỉ.",
      "Thu hút vốn đầu tư nước ngoài (FDI) và công nghệ hiện đại.",
      "Tăng số lượng lao động xuất khẩu ra nước ngoài.",
      "Giảm bớt vai trò quản lý kinh tế của Nhà nước."
    ],
    correct: 1
  },
  {
    question: "Hội nhập kinh tế mang lại lợi ích gì trực tiếp cho người tiêu dùng?",
    answers: [
      "Được mua hàng hóa với giá độc quyền cao.",
      "Chỉ được sử dụng hàng nội địa chất lượng thấp.",
      "Tiếp cận sản phẩm đa dạng, chất lượng với giá cả cạnh tranh.",
      "Được Nhà nước bao cấp hoàn toàn mọi nhu cầu tiêu dùng."
    ],
    correct: 2
  },
  {
    question: "Thách thức lớn nhất đối với các doanh nghiệp nội địa khi hội nhập là gì?",
    answers: [
      "Không được phép xuất khẩu hàng hóa ra nước ngoài.",
      "Áp lực cạnh tranh gay gắt từ các tập đoàn nước ngoài có tiềm lực mạnh.",
      "Nhà nước thắt chặt mọi hoạt động kinh doanh.",
      "Phải đóng thuế cao hơn các doanh nghiệp FDI."
    ],
    correct: 1
  },
  {
    question: "Đâu là một tác động tiêu cực về mặt xã hội của hội nhập kinh tế quốc tế?",
    answers: [
      "Làm giảm tỷ lệ thất nghiệp ở mọi vùng miền.",
      "Gia tăng khoảng cách giàu nghèo và bất bình đẳng xã hội.",
      "Làm cho mọi người dân đều có thu nhập bằng nhau.",
      "Loại bỏ hoàn toàn các tệ nạn xã hội xuyên biên giới."
    ],
    correct: 1
  },
  {
    question: "Tại sao hội nhập kinh tế lại có thể đe dọa đến quyền lực Nhà nước?",
    answers: [
      "Vì Nhà nước không còn quyền thu thuế.",
      "Do sự gia tăng phụ thuộc vào các định chế kinh tế quốc tế và rủi ro về chủ quyền quốc gia.",
      "Vì các doanh nghiệp sẽ thay thế hoàn toàn bộ máy chính phủ.",
      "Vì biên giới địa lý giữa các quốc gia sẽ bị xóa bỏ hoàn toàn."
    ],
    correct: 1
  },
  {
    question: "Việc giới trẻ ưu tiên sử dụng Netflix, TikTok và K-Pop hơn các sản phẩm nội địa phản ánh rủi ro nào trong hội nhập?",
    answers: [
      "Thúc đẩy cạnh tranh lành mạnh.",
      "Nguy cơ bản sắc dân tộc và văn hóa truyền thống bị xói mòn.",
      "Tăng cường khả năng tự chủ kinh tế.",
      "Mở rộng thị trường xuất khẩu văn hóa."
    ],
    correct: 1
  },
  {
    question: "Theo lý thuyết, yếu tố nào là “cơ sở” để bảo vệ bản sắc văn hóa dân tộc trong hội nhập?",
    answers: [
      "Đóng cửa hoàn toàn thị trường.",
      "Xây dựng nền kinh tế độc lập, tự chủ.",
      "Cấm sử dụng các nền tảng mạng xã hội nước ngoài.",
      "Ngừng tham gia các tổ chức kinh tế quốc tế."
    ],
    correct: 1
  },
  {
    question: "Các đợt mua sắm Black Friday hay Valentine rầm rộ trên Shopee là minh chứng cho tác động tích cực nào?",
    answers: [
      "Nâng cao năng lực sản xuất nội địa.",
      "Cải thiện tiêu dùng, giúp người dân tiếp cận sản phẩm đa dạng và giá cạnh tranh.",
      "Bảo vệ các ngày lễ truyền thống của Việt Nam.",
      "Giảm sự lệ thuộc của nền kinh tế vào vốn ngoại."
    ],
    correct: 1
  },
  {
    question: "Để các sản phẩm văn hóa Việt Nam không còn “chật vật trên sân nhà”, Nhà nước cần đóng vai trò gì theo phương hướng hội nhập hiệu quả?",
    answers: [
      "Cấp ngân sách vô điều kiện cho mọi nghệ sĩ.",
      "Hoàn thiện thể chế pháp luật, hỗ trợ doanh nghiệp sáng tạo và đào tạo nguồn nhân lực chất lượng cao.",
      "Áp đặt mệnh lệnh hành chính buộc người dân chỉ được xem phim nội.",
      "Thuế hóa tất cả các hoạt động văn hóa truyền thống."
    ],
    correct: 1
  },
  {
    question: "Việt Nam gia nhập tổ chức ASEAN trong khu vực khi nào?",
    answers: [
      "1995",
      "1996",
      "1993",
      "1997"
    ],
    correct: 0
  },
  {
    question: "Việt Nam trở thành thành viên chính thức của Tổ chức Thương mại Thế giới (WTO) khi nào?",
    answers: [
      "2007",
      "2006",
      "2005",
      "2008"
    ],
    correct: 0
  }
];

const elements = {
  startCard: document.querySelector("#startCard"),
  quizCard: document.querySelector("#quizCard"),
  resultCard: document.querySelector("#resultCard"),
  questionText: document.querySelector("#questionText"),
  answers: document.querySelector("#answers"),
  currentQuestion: document.querySelector("#currentQuestion"),
  totalQuestions: document.querySelector("#totalQuestions"),
  progressBar: document.querySelector("#progressBar"),
  progressPercent: document.querySelector("#progressPercent"),
  timer: document.querySelector("#timer"),
  timerValue: document.querySelector("#timerValue"),
  timerProgress: document.querySelector("#timerProgress"),
  feedback: document.querySelector("#feedback"),
  wrongCount: document.querySelector("#wrongCount"),
  completedCount: document.querySelector("#completedCount"),
  playButton: document.querySelector("#playButton"),
  restartButton: document.querySelector("#restartButton"),
  twinkleField: document.querySelector("#twinkleField"),
  celebrationLayer: document.querySelector("#celebrationLayer"),
  soundToggle: document.querySelector("#soundToggle"),
  soundIcon: document.querySelector("#soundIcon"),
  soundLabel: document.querySelector("#soundLabel"),
  volumeControl: document.querySelector("#volumeControl")
};

let currentQuestionIndex = 0;
let timeLeft = QUIZ_TIME;
let timerId = null;
let wrongAttempts = 0;
let isTransitioning = false;
let audioContext = null;
let musicGain = null;
let musicTimerId = null;
let musicNoteIndex = 0;
let isSoundEnabled = true;
let musicVolume = 0.104;
let hasQuizStarted = false;

const musicNotes = [261.63, 329.63, 392, 523.25, 392, 329.63, 293.66, 392];

function ensureAudio() {
  if (!isSoundEnabled) return;

  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    audioContext = new AudioContextClass();
    musicGain = audioContext.createGain();
    musicGain.gain.value = musicVolume;
    musicGain.connect(audioContext.destination);
  }

  if (audioContext.state === "suspended") {
    void audioContext.resume();
  }

  startBackgroundMusic();
}

function startBackgroundMusic() {
  if (!audioContext || !isSoundEnabled || musicTimerId !== null) return;

  playMusicNote();
  musicTimerId = window.setInterval(playMusicNote, 720);
}

function stopBackgroundMusic() {
  if (musicTimerId !== null) {
    window.clearInterval(musicTimerId);
    musicTimerId = null;
  }
}

function playMusicNote() {
  if (!audioContext || !musicGain || !isSoundEnabled) return;

  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const noteGain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = musicNotes[musicNoteIndex % musicNotes.length];
  noteGain.gain.setValueAtTime(0.0001, now);
  noteGain.gain.exponentialRampToValueAtTime(0.75, now + 0.08);
  noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.68);
  oscillator.connect(noteGain);
  noteGain.connect(musicGain);
  oscillator.start(now);
  oscillator.stop(now + 0.72);
  musicNoteIndex += 1;
}

function playTone(frequency, startDelay, duration, volume, type = "sine") {
  if (!audioContext || !isSoundEnabled) return;

  const startAt = audioContext.currentTime + startDelay;
  const oscillator = audioContext.createOscillator();
  const toneGain = audioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startAt);
  toneGain.gain.setValueAtTime(0.0001, startAt);
  toneGain.gain.exponentialRampToValueAtTime(volume, startAt + 0.025);
  toneGain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
  oscillator.connect(toneGain);
  toneGain.connect(audioContext.destination);
  oscillator.start(startAt);
  oscillator.stop(startAt + duration + 0.03);
}

function playCorrectSound() {
  ensureAudio();
  [523.25, 659.25, 783.99, 1046.5].forEach((frequency, index) => {
    playTone(frequency, index * 0.075, 0.28, 0.1, "sine");
  });
}

function playWrongSound() {
  ensureAudio();
  playTone(220, 0, 0.2, 0.075, "triangle");
  playTone(174.61, 0.11, 0.25, 0.07, "triangle");
}

function updateSoundButton() {
  elements.soundToggle.setAttribute("aria-pressed", String(isSoundEnabled));
  elements.soundToggle.setAttribute("aria-label", isSoundEnabled ? "Tắt âm thanh" : "Bật âm thanh");
  elements.soundIcon.textContent = isSoundEnabled ? "🔊" : "🔇";
  elements.soundLabel.textContent = isSoundEnabled ? "Âm thanh" : "Đã tắt";
}

function toggleSound() {
  isSoundEnabled = !isSoundEnabled;

  if (isSoundEnabled && hasQuizStarted) {
    ensureAudio();
  } else {
    stopBackgroundMusic();
  }

  updateSoundButton();
}

function updateMusicVolume(event) {
  const sliderValue = Number(event.currentTarget.value);
  musicVolume = (sliderValue / 100) * 0.16;

  if (musicGain && audioContext) {
    musicGain.gain.setTargetAtTime(musicVolume, audioContext.currentTime, 0.04);
  }

  elements.volumeControl.setAttribute("aria-valuetext", `${sliderValue}%`);
}

function createTwinkles() {
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < 26; index += 1) {
    const star = document.createElement("i");
    const size = 5 + Math.random() * 10;
    star.className = "twinkle";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty("--size", `${size}px`);
    star.style.setProperty("--duration", `${1.8 + Math.random() * 2.6}s`);
    star.style.setProperty("--delay", `${Math.random() * -4}s`);
    fragment.appendChild(star);
  }

  elements.twinkleField.appendChild(fragment);
}

function renderQuestion() {
  const item = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  isTransitioning = false;
  elements.currentQuestion.textContent = currentQuestionIndex + 1;
  elements.totalQuestions.textContent = questions.length;
  elements.progressBar.style.width = `${progress}%`;
  elements.progressPercent.textContent = `${Math.round(progress)}%`;
  elements.questionText.textContent = item.question;
  elements.feedback.textContent = "Chọn đáp án đúng để đi tiếp nhé!";
  elements.feedback.className = "feedback";
  elements.answers.replaceChildren();

  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.dataset.index = index;
    button.setAttribute("aria-label", `Đáp án ${ANSWER_LETTERS[index]}: ${answer}`);
    button.innerHTML = `
      <span class="answer-button__letter" aria-hidden="true">${ANSWER_LETTERS[index]}</span>
      <span class="answer-button__text">${answer}</span>
      <span class="answer-button__status" aria-hidden="true"></span>
    `;
    button.addEventListener("click", handleAnswer);
    elements.answers.appendChild(button);
  });

  elements.quizCard.classList.remove("is-entering");
  void elements.quizCard.offsetWidth;
  elements.quizCard.classList.add("is-entering");
  startTimer();
}

function handleAnswer(event) {
  if (isTransitioning) return;

  const button = event.currentTarget;
  const selectedIndex = Number(button.dataset.index);
  const correctIndex = questions[currentQuestionIndex].correct;

  if (selectedIndex === correctIndex) {
    handleCorrectAnswer(button);
  } else {
    handleWrongAnswer(button);
  }
}

function handleWrongAnswer(button) {
  playWrongSound();
  wrongAttempts += 1;
  button.disabled = true;
  button.classList.add("is-wrong");
  button.querySelector(".answer-button__status").textContent = "×";
  button.setAttribute("aria-label", `${button.getAttribute("aria-label")} — chưa đúng`);
  elements.feedback.textContent = "Chưa đúng rồi! Thử một đáp án khác nhé ✦";
  elements.feedback.className = "feedback is-error";
}

function handleCorrectAnswer(button) {
  playCorrectSound();
  isTransitioning = true;
  stopTimer();
  button.classList.add("is-correct");
  button.querySelector(".answer-button__status").textContent = "✓";
  button.setAttribute("aria-label", `${button.getAttribute("aria-label")} — chính xác`);

  elements.answers.querySelectorAll(".answer-button").forEach((answerButton) => {
    answerButton.disabled = true;
    if (answerButton !== button && !answerButton.classList.contains("is-wrong")) {
      answerButton.classList.add("is-muted");
    }
  });

  elements.feedback.textContent = "Chính xác! Bạn giỏi quá! ★";
  elements.feedback.className = "feedback is-success";
  createStarBurst(button);

  window.setTimeout(() => {
    currentQuestionIndex += 1;
    if (currentQuestionIndex < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 700);
}

function startTimer() {
  stopTimer();
  timeLeft = QUIZ_TIME;
  updateTimer();

  timerId = window.setInterval(() => {
    timeLeft -= 1;
    updateTimer();

    if (timeLeft <= 0) {
      stopTimer();
      elements.feedback.textContent = "Hết giờ! Bình tĩnh chọn tiếp cho đến khi đúng nhé.";
      elements.feedback.className = "feedback is-error";
    }
  }, 1000);
}

function stopTimer() {
  if (timerId !== null) {
    window.clearInterval(timerId);
    timerId = null;
  }
}

function updateTimer() {
  const safeTime = Math.max(timeLeft, 0);
  const offset = TIMER_CIRCUMFERENCE * (1 - safeTime / QUIZ_TIME);

  elements.timerValue.textContent = safeTime;
  elements.timerProgress.style.strokeDashoffset = offset;
  elements.timer.classList.toggle("is-low", safeTime <= 5);
  elements.timer.setAttribute("aria-label", safeTime > 0 ? `Còn ${safeTime} giây` : "Đã hết giờ");
}

function createStarBurst(target) {
  const rect = target.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const colors = ["#ffd75e", "#ffffff", "#67c8ff", "#80e5b4"];

  for (let index = 0; index < 16; index += 1) {
    const angle = (Math.PI * 2 * index) / 16 + Math.random() * 0.25;
    const distance = 55 + Math.random() * 75;
    const star = document.createElement("span");

    star.className = "burst-star";
    star.textContent = index % 3 === 0 ? "★" : "✦";
    star.style.setProperty("--x", `${centerX}px`);
    star.style.setProperty("--y", `${centerY}px`);
    star.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    star.style.setProperty("--dy", `${Math.sin(angle) * distance - 28}px`);
    star.style.setProperty("--rotation", `${Math.round(Math.random() * 220 - 110)}deg`);
    star.style.setProperty("--size", `${12 + Math.random() * 15}px`);
    star.style.setProperty("--color", colors[index % colors.length]);
    elements.celebrationLayer.appendChild(star);
    star.addEventListener("animationend", () => star.remove(), { once: true });
  }
}

function showResult() {
  stopTimer();
  elements.quizCard.hidden = true;
  elements.resultCard.hidden = false;
  elements.completedCount.textContent = `${questions.length}/${questions.length}`;
  elements.wrongCount.textContent = wrongAttempts;
  elements.resultCard.focus?.();
  createFinalCelebration();
}

function createFinalCelebration() {
  const fakeTarget = {
    getBoundingClientRect: () => ({
      left: window.innerWidth / 2 - 50,
      top: window.innerHeight / 2 - 50,
      width: 100,
      height: 100
    })
  };
  createStarBurst(fakeTarget);
}

function startQuiz() {
  hasQuizStarted = true;
  currentQuestionIndex = 0;
  wrongAttempts = 0;
  isTransitioning = false;
  elements.startCard.hidden = true;
  elements.resultCard.hidden = true;
  elements.quizCard.hidden = false;
  ensureAudio();
  renderQuestion();
}

function restartQuiz() {
  currentQuestionIndex = 0;
  wrongAttempts = 0;
  isTransitioning = false;
  elements.resultCard.hidden = true;
  elements.quizCard.hidden = false;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

elements.playButton.addEventListener("click", startQuiz);
elements.restartButton.addEventListener("click", restartQuiz);
elements.soundToggle.addEventListener("click", toggleSound);
elements.volumeControl.addEventListener("input", updateMusicVolume);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopBackgroundMusic();
  } else if (hasQuizStarted && isSoundEnabled && audioContext) {
    startBackgroundMusic();
  }
});
createTwinkles();
