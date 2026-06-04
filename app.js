// ── State ──────────────────────────────────────────────
const state = {
  currentPage: 'home',
  theory: { filter: 'all', viewingId: null },
  quiz: {
    mode: null,
    subjectFilter: null,
    pool: [],
    current: 0,
    answered: false,
    score: 0,
    wrongInSession: []
  },
  wrongNote: JSON.parse(localStorage.getItem('wrongNote') || '[]')
};

// ── Helpers ────────────────────────────────────────────
function saveWrongNote() {
  localStorage.setItem('wrongNote', JSON.stringify(state.wrongNote));
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}

function subjectColor(subject) {
  const map = {
    '수목병리학': '#e74c3c',
    '수목해충학': '#e67e22',
    '수목생리학': '#27ae60',
    '산림토양학': '#8e44ad',
    '수목관리학': '#2980b9'
  };
  return map[subject] || '#40916c';
}

function subjectIcon(subject) {
  const map = {
    '수목병리학': '🦠',
    '수목해충학': '🐛',
    '수목생리학': '🌱',
    '산림토양학': '🌍',
    '수목관리학': '✂️'
  };
  return map[subject] || '📚';
}

// ── Navigation ─────────────────────────────────────────
function goTo(page) {
  state.currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  const btn = document.querySelector(`nav button[data-page="${page}"]`);
  if (btn) btn.classList.add('active');
  window.scrollTo(0, 0);
}

// ── Home ───────────────────────────────────────────────
function renderHome() {
  const total = QUESTIONS.length;
  const wrongCount = state.wrongNote.length;
  const uniqueSubjects = [...new Set(QUESTIONS.map(q => q.subject))];
  const theoryCount = THEORIES.length;

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-theory').textContent = theoryCount;
  document.getElementById('stat-wrong').textContent = wrongCount;

  const subjectGrid = document.getElementById('subject-grid');
  const subjects = [...new Set(THEORIES.map(t => t.subject))];
  subjectGrid.innerHTML = subjects.map(s => {
    const cnt = THEORIES.filter(t => t.subject === s).length;
    return `
      <button class="subject-btn" onclick="goToTheorySubject('${s}')">
        <span class="subject-icon">${subjectIcon(s)}</span>
        ${s}
        <div class="subject-count">이론 ${cnt}개</div>
      </button>`;
  }).join('');
}

function goToTheorySubject(subject) {
  state.theory.filter = subject;
  goTo('theory');
  renderTheory();
}

// ── Theory ─────────────────────────────────────────────
const SUBJECTS = ['all', '수목병리학', '수목해충학', '수목생리학', '산림토양학', '수목관리학'];
const SUBJECT_LABELS = { all: '전체', '수목병리학': '수목병리학', '수목해충학': '수목해충학', '수목생리학': '수목생리학', '산림토양학': '산림토양학', '수목관리학': '수목관리학' };

function renderTheory() {
  // Filter buttons
  const filterBar = document.getElementById('theory-filter-bar');
  filterBar.innerHTML = SUBJECTS.map(s => `
    <button class="filter-btn ${state.theory.filter === s ? 'active' : ''}"
            onclick="setTheoryFilter('${s}')">${SUBJECT_LABELS[s]}</button>
  `).join('');

  // Theory list
  const list = document.getElementById('theory-list');
  const filtered = state.theory.filter === 'all'
    ? THEORIES
    : THEORIES.filter(t => t.subject === state.theory.filter);

  list.innerHTML = filtered.map(t => `
    <div class="theory-card" onclick="viewTheory('${t.id}')">
      <div class="theory-card-info">
        <div class="theory-card-subject" style="color:${subjectColor(t.subject)}">${subjectIcon(t.subject)} ${t.subject}</div>
        <div class="theory-card-title">${t.title}</div>
        <div class="theory-card-summary">${t.summary}</div>
        <div class="theory-card-keywords">
          ${t.keywords.slice(0, 4).map(k => `<span class="keyword-tag">${k}</span>`).join('')}
        </div>
      </div>
      <div class="theory-arrow">›</div>
    </div>
  `).join('');

  // Hide detail
  document.getElementById('theory-list-view').style.display = '';
  document.getElementById('theory-detail-view').style.display = 'none';
}

function setTheoryFilter(f) {
  state.theory.filter = f;
  renderTheory();
}

function viewTheory(id) {
  const t = THEORIES.find(x => x.id === id);
  if (!t) return;
  state.theory.viewingId = id;

  document.getElementById('theory-list-view').style.display = 'none';
  const detail = document.getElementById('theory-detail-view');
  detail.style.display = '';

  const relQ = QUESTIONS.filter(q => t.relatedQuestions.includes(q.id));

  detail.innerHTML = `
    <button class="back-btn" onclick="closeTheoryDetail()">← 목록으로</button>
    <div class="theory-detail-card">
      <div class="theory-detail-subject" style="color:${subjectColor(t.subject)}">${subjectIcon(t.subject)} ${t.subject} · ${t.topic}</div>
      <div class="theory-detail-title">${t.title}</div>
      ${t.content}
      ${relQ.length > 0 ? `
        <button class="related-questions-btn" onclick="startRelatedQuiz('${id}')">
          📝 관련 문제 ${relQ.length}개 풀기
        </button>
      ` : ''}
    </div>
  `;
  window.scrollTo(0, 0);
}

function closeTheoryDetail() {
  document.getElementById('theory-list-view').style.display = '';
  document.getElementById('theory-detail-view').style.display = 'none';
  renderTheory();
}

function startRelatedQuiz(theoryId) {
  const t = THEORIES.find(x => x.id === theoryId);
  if (!t) return;
  const relQ = QUESTIONS.filter(q => t.relatedQuestions.includes(q.id));
  if (relQ.length === 0) return;
  state.quiz.pool = relQ;
  state.quiz.mode = 'related';
  state.quiz.current = 0;
  state.quiz.answered = false;
  state.quiz.score = 0;
  state.quiz.wrongInSession = [];
  goTo('quiz');
  startQuizPlayer();
}

// ── Quiz ───────────────────────────────────────────────
function renderQuizSetup() {
  document.getElementById('quiz-setup').style.display = '';
  document.getElementById('quiz-player').classList.remove('active');
  document.getElementById('quiz-finish').classList.remove('active');
}

function selectQuizMode(mode, el) {
  state.quiz.mode = mode;
  document.querySelectorAll('.quiz-mode-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('start-quiz-btn').disabled = false;
}

function startQuiz() {
  const mode = state.quiz.mode;
  let pool;
  if (mode === 'random') {
    pool = shuffle(QUESTIONS).slice(0, 10);
  } else if (mode === 'wrong') {
    const wrongIds = state.wrongNote.map(w => w.questionId);
    pool = shuffle(QUESTIONS.filter(q => wrongIds.includes(q.id)));
    if (pool.length === 0) { showToast('오답노트가 비어 있어요!'); return; }
  } else if (mode === 'all') {
    pool = shuffle(QUESTIONS);
  } else {
    // subject mode
    pool = shuffle(QUESTIONS.filter(q => q.subject === mode));
  }
  state.quiz.pool = pool;
  state.quiz.current = 0;
  state.quiz.answered = false;
  state.quiz.score = 0;
  state.quiz.wrongInSession = [];
  startQuizPlayer();
}

function startQuizPlayer() {
  document.getElementById('quiz-setup').style.display = 'none';
  document.getElementById('quiz-finish').classList.remove('active');
  document.getElementById('quiz-player').classList.add('active');
  renderQuestion();
}

function renderQuestion() {
  const { pool, current } = state.quiz;
  if (current >= pool.length) { showFinish(); return; }

  const q = pool[current];
  state.quiz.answered = false;

  const total = pool.length;
  const pct = (current / total) * 100;
  document.getElementById('quiz-progress-fill').style.width = pct + '%';
  document.getElementById('quiz-num').textContent = `${current + 1} / ${total}`;
  document.getElementById('quiz-subject-tag').textContent = `${subjectIcon(q.subject)} ${q.subject}`;
  document.getElementById('quiz-question-text').textContent = q.question;

  const choicesEl = document.getElementById('quiz-choices');
  choicesEl.innerHTML = q.choices.map((c, i) => `
    <button class="choice-btn" onclick="selectAnswer(${i})" data-idx="${i}">
      <span class="choice-num">${i + 1}</span>
      <span>${c}</span>
    </button>
  `).join('');

  const panel = document.getElementById('quiz-result-panel');
  panel.className = 'quiz-result-panel';
  panel.innerHTML = '';

  document.getElementById('quiz-next-btn').textContent = current + 1 < total ? '다음 문제 →' : '결과 보기';
  document.getElementById('quiz-action-row').style.display = 'none';
}

function selectAnswer(idx) {
  if (state.quiz.answered) return;
  state.quiz.answered = true;

  const q = state.quiz.pool[state.quiz.current];
  const isCorrect = idx === q.answer;
  if (isCorrect) state.quiz.score++;

  const buttons = document.querySelectorAll('.choice-btn');
  buttons.forEach(btn => {
    btn.disabled = true;
    const i = parseInt(btn.dataset.idx);
    if (i === q.answer) btn.classList.add('correct');
    else if (i === idx && !isCorrect) btn.classList.add('wrong');
  });

  const panel = document.getElementById('quiz-result-panel');
  panel.className = 'quiz-result-panel active ' + (isCorrect ? 'correct' : 'wrong');
  panel.innerHTML = `
    <div class="result-label ${isCorrect ? 'correct' : 'wrong'}">${isCorrect ? '✅ 정답!' : '❌ 오답'}</div>
    <div class="result-explanation">${q.explanation}</div>
  `;

  const actionRow = document.getElementById('quiz-action-row');
  actionRow.style.display = 'flex';

  const wrongSaveBtn = document.getElementById('wrong-save-btn');
  if (!isCorrect) {
    wrongSaveBtn.style.display = '';
    state.quiz.wrongInSession.push(q.id);
    addToWrongNote(q, idx);
  } else {
    wrongSaveBtn.style.display = 'none';
  }

  const theoryBtn = document.getElementById('view-theory-btn');
  if (q.linkedTheory) {
    theoryBtn.style.display = '';
    theoryBtn.onclick = () => {
      goTo('theory');
      viewTheory(q.linkedTheory);
    };
  } else {
    theoryBtn.style.display = 'none';
  }
}

function addToWrongNote(q, selectedIdx) {
  const existing = state.wrongNote.findIndex(w => w.questionId === q.id);
  const entry = {
    questionId: q.id,
    subject: q.subject,
    question: q.question,
    selectedAnswer: q.choices[selectedIdx],
    correctAnswer: q.choices[q.answer],
    date: new Date().toLocaleDateString('ko-KR'),
    count: 1
  };
  if (existing >= 0) {
    entry.count = state.wrongNote[existing].count + 1;
    state.wrongNote[existing] = entry;
  } else {
    state.wrongNote.unshift(entry);
  }
  saveWrongNote();
}

function nextQuestion() {
  state.quiz.current++;
  renderQuestion();
}

function showFinish() {
  document.getElementById('quiz-player').classList.remove('active');
  const finish = document.getElementById('quiz-finish');
  finish.classList.add('active');
  const total = state.quiz.pool.length;
  const score = state.quiz.score;
  const pct = Math.round((score / total) * 100);
  document.getElementById('finish-score').textContent = `${score}/${total}`;
  document.getElementById('finish-pct').textContent = `정답률 ${pct}%`;

  let msg = '';
  if (pct === 100) msg = '완벽합니다! 이 파트는 확실히 마스터했어요 🌟';
  else if (pct >= 80) msg = '훌륭해요! 조금만 더 하면 완벽합니다 👏';
  else if (pct >= 60) msg = '양호해요. 틀린 문제를 다시 복습해 보세요 📖';
  else msg = '오답노트로 틀린 개념을 꼭 다시 확인하세요 💪';
  document.getElementById('finish-msg').textContent = msg;

  updateHomeStats();
}

function retryQuiz() {
  state.quiz.current = 0;
  state.quiz.score = 0;
  state.quiz.answered = false;
  state.quiz.wrongInSession = [];
  state.quiz.pool = shuffle(state.quiz.pool);
  startQuizPlayer();
}

// ── Wrong Note ─────────────────────────────────────────
function renderWrongNote() {
  const list = document.getElementById('wrong-note-list');
  if (state.wrongNote.length === 0) {
    list.innerHTML = `
      <div class="wrong-note-empty">
        <div class="empty-icon">🎉</div>
        <p>오답노트가 비어 있어요!<br>문제를 풀면 틀린 문제가 여기 저장됩니다.</p>
      </div>`;
    return;
  }

  document.getElementById('wrong-count-badge').textContent = `${state.wrongNote.length}개`;

  list.innerHTML = `
    <button class="clear-wrong-btn" onclick="clearWrongNote()">🗑️ 오답노트 초기화</button>
    ${state.wrongNote.map((w, i) => `
      <div class="wrong-note-card">
        <div class="wrong-note-meta">
          <span class="wrong-note-subject">${w.subject}</span>
          <span class="wrong-note-date">${w.date}${w.count > 1 ? ` · ${w.count}번 틀림` : ''}</span>
        </div>
        <div class="wrong-note-q">Q. ${w.question}</div>
        <div class="wrong-note-answers">
          내 답: <span style="color:var(--wrong)">${w.selectedAnswer}</span><br>
          정답: <span style="color:var(--correct)">${w.correctAnswer}</span>
        </div>
        <button class="retry-btn" onclick="retryWrongSingle(${i})">↩ 이 문제 다시 풀기</button>
      </div>
    `).join('')}
  `;
}

function retryWrongSingle(idx) {
  const w = state.wrongNote[idx];
  const q = QUESTIONS.find(x => x.id === w.questionId);
  if (!q) { showToast('문제를 찾을 수 없어요'); return; }
  state.quiz.pool = [q];
  state.quiz.mode = 'single';
  state.quiz.current = 0;
  state.quiz.answered = false;
  state.quiz.score = 0;
  state.quiz.wrongInSession = [];
  goTo('quiz');
  startQuizPlayer();
}

function clearWrongNote() {
  if (!confirm('오답노트를 모두 지울까요?')) return;
  state.wrongNote = [];
  saveWrongNote();
  renderWrongNote();
  updateHomeStats();
  showToast('오답노트를 초기화했어요');
}

// ── Update stats ────────────────────────────────────────
function updateHomeStats() {
  document.getElementById('stat-wrong').textContent = state.wrongNote.length;
}

// ── Init ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Nav
  document.querySelectorAll('nav button[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = btn.dataset.page;
      goTo(page);
      if (page === 'home') renderHome();
      if (page === 'theory') renderTheory();
      if (page === 'quiz') renderQuizSetup();
      if (page === 'wrong') renderWrongNote();
    });
  });

  // Quiz subject filters
  document.getElementById('quiz-subject-filter').innerHTML =
    ['수목병리학', '수목해충학', '수목생리학', '산림토양학', '수목관리학']
      .map(s => `<option value="${s}">${subjectIcon(s)} ${s}</option>`)
      .join('');

  // Next btn
  document.getElementById('quiz-next-btn').addEventListener('click', nextQuestion);

  renderHome();
  goTo('home');
});
