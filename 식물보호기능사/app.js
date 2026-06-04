// ── Progress Storage ─────────────────────────
function loadProgress() {
  return JSON.parse(localStorage.getItem('plantStudyProgress') || '{"초급":{"read":[],"correct":0,"total":0},"중급":{"read":[],"correct":0,"total":0},"고급":{"read":[],"correct":0,"total":0}}');
}
function saveProgress(p) { localStorage.setItem('plantStudyProgress', JSON.stringify(p)); }

function loadWrongNote() { return JSON.parse(localStorage.getItem('plantWrongNote') || '[]'); }
function saveWrongNote(w) { localStorage.setItem('plantWrongNote', JSON.stringify(w)); }

// ── Helpers ──────────────────────────────────
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
  setTimeout(() => t.classList.remove('show'), 2200);
}

function levelColor(level) {
  return { '초급': 'var(--beginner)', '중급': 'var(--intermediate)', '고급': 'var(--advanced)' }[level] || 'var(--green-mid)';
}

function subjectIcon(s) {
  return { '식물병리학': '🍄', '농업해충학': '🐛', '잡초방제학': '🌿', '농약학': '🧪' }[s] || '📚';
}

function sampleFrom(arr, n) {
  if (!arr.length || n <= 0) return [];
  return shuffle(arr).slice(0, Math.min(n, arr.length));
}

function buildBalancedPool(source, total, levelRatio = { '초급': 0.3, '중급': 0.45, '고급': 0.25 }) {
  if (!source.length) return [];

  const byLevel = {
    '초급': source.filter(q => q.level === '초급'),
    '중급': source.filter(q => q.level === '중급'),
    '고급': source.filter(q => q.level === '고급')
  };

  const want = {
    '초급': Math.round(total * levelRatio['초급']),
    '중급': Math.round(total * levelRatio['중급']),
    '고급': Math.round(total * levelRatio['고급'])
  };

  let picked = [];
  ['초급', '중급', '고급'].forEach(level => {
    picked = picked.concat(sampleFrom(byLevel[level], want[level]));
  });

  if (picked.length < total) {
    const remain = shuffle(source.filter(q => !picked.find(p => p.id === q.id)));
    picked = picked.concat(remain.slice(0, total - picked.length));
  }

  return shuffle(picked).slice(0, total);
}

function buildExamPool(level) {
  const src = QUESTIONS.filter(q => q.type === 'multiple' && (level === '전체' ? true : q.level === level));
  if (!src.length) return [];

  const subjects = ['식물병리학', '농업해충학', '잡초방제학', '농약학'];
  const target = level === '전체' ? 80 : 60;
  const perSubject = Math.floor(target / subjects.length);
  let pool = [];

  subjects.forEach(s => {
    const subjectSet = src.filter(q => q.subject === s);
    const picked = level === '전체'
      ? buildBalancedPool(subjectSet, perSubject, { '초급': 0.2, '중급': 0.45, '고급': 0.35 })
      : sampleFrom(subjectSet, perSubject);
    pool = pool.concat(picked);
  });

  if (pool.length < target) {
    const remain = shuffle(src.filter(q => !pool.find(p => p.id === q.id)));
    pool = pool.concat(remain.slice(0, target - pool.length));
  }

  return shuffle(pool);
}

function buildWeakTopicPool(level, total = 30) {
  const wrong = loadWrongNote();
  if (!wrong.length) return [];

  const weighted = {};
  wrong.forEach(w => {
    const key = `${w.subject || '기타'}::${w.topic || '기타'}`;
    weighted[key] = (weighted[key] || 0) + (w.count || 1);
  });

  const topKeys = Object.keys(weighted)
    .sort((a, b) => weighted[b] - weighted[a])
    .slice(0, 4);

  let source = [];
  topKeys.forEach(k => {
    const [subject, topic] = k.split('::');
    const subset = QUESTIONS.filter(q =>
      q.subject === subject &&
      (topic === '기타' || q.topic === topic) &&
      (level === '전체' ? true : q.level === level)
    );
    source = source.concat(subset);
  });

  const wrongIds = new Set(wrong.map(w => w.questionId));
  const wrongOnly = QUESTIONS.filter(q => wrongIds.has(q.id) && (level === '전체' ? true : q.level === level));
  source = source.concat(wrongOnly);

  const dedup = [];
  const seen = new Set();
  source.forEach(q => {
    if (!seen.has(q.id)) {
      dedup.push(q);
      seen.add(q.id);
    }
  });

  if (dedup.length < total) {
    const backup = QUESTIONS.filter(q => !seen.has(q.id) && (level === '전체' ? true : q.level === level));
    dedup.push(...sampleFrom(backup, total - dedup.length));
  }

  return shuffle(dedup).slice(0, total);
}

// ── Stage Completion % ────────────────────────
function stageCompletion(level) {
  const p = loadProgress()[level];
  const totalTheories = THEORIES.filter(t => t.level === level).length;
  const totalQuestions = QUESTIONS.filter(q => q.level === level).length;
  if (totalTheories === 0 && totalQuestions === 0) return 0;
  const readPct = totalTheories > 0 ? (p.read.length / totalTheories) * 50 : 50;
  const quizPct = totalQuestions > 0 && p.total > 0 ? (p.correct / Math.min(p.total, totalQuestions)) * 50 : 0;
  return Math.min(100, Math.round(readPct + quizPct));
}

function isStageUnlocked(level) {
  if (level === '초급') return true;
  if (level === '중급') return stageCompletion('초급') >= 60;
  if (level === '고급') return stageCompletion('중급') >= 60;
  return false;
}

// ── Navigation ───────────────────────────────
let currentPage = 'home';

function goTo(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav button[data-page]').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  const btn = document.querySelector(`nav button[data-page="${page}"]`);
  if (btn) btn.classList.add('active');
  window.scrollTo(0, 0);
}

// ══════════════════════════════════════════════
// HOME
// ══════════════════════════════════════════════
function renderHome() {
  const levels = ['초급', '중급', '고급'];
  const icons = { '초급': '🌱', '중급': '🌿', '고급': '🌳' };
  const subtitles = { '초급': '기초 용어와 대표 병해충 이해', '중급': '원인·증상·방제 흐름 마스터', '고급': '유사 개념 비교와 실전 대비' };
  const classes = { '초급': 'beginner', '중급': 'intermediate', '고급': 'advanced' };

  // 전체 진행률
  const allPct = Math.round(levels.reduce((s, l) => s + stageCompletion(l), 0) / 3);
  document.getElementById('total-progress-fill').style.width = allPct + '%';
  document.getElementById('total-progress-pct').textContent = allPct + '%';

  const grid = document.getElementById('stages-grid');
  grid.innerHTML = levels.map(level => {
    const pct = stageCompletion(level);
    const unlocked = isStageUnlocked(level);
    const p = loadProgress()[level];
    const totalT = THEORIES.filter(t => t.level === level).length;
    const totalQ = QUESTIONS.filter(q => q.level === level).length;
    const cls = classes[level];
    const prevLevel = level === '중급' ? '초급' : '초급';
    const prevPrevLevel = level === '고급' ? '중급' : null;
    const unlockLevel = prevPrevLevel || prevLevel;

    return `
      <div class="stage-card ${cls} ${unlocked ? '' : 'locked'}">
        <div class="stage-header">
          <span class="stage-icon">${icons[level]}</span>
          <div class="stage-info">
            <span class="stage-badge">${level}</span>
            <div class="stage-title">${level === '초급' ? '나무의사 입문' : level === '중급' ? '핵심 개념 마스터' : '실전 완성'}</div>
            <div class="stage-desc">${subtitles[level]}</div>
          </div>
          ${unlocked ? '' : '<span class="stage-lock-icon">🔒</span>'}
        </div>
        <div class="stage-body">
          <div class="stage-progress-bar">
            <div class="stage-progress-fill" style="width:${pct}%"></div>
          </div>
          <div class="stage-stats">
            <span>📖 이론 ${p.read.length}/${totalT}</span>
            <span>📝 문제 ${p.total > 0 ? p.correct + '/' + Math.min(p.total, totalQ) : '0/' + totalQ}</span>
            <span>✅ ${pct}% 완료</span>
          </div>
          <div class="stage-actions">
            <button class="stage-btn primary-btn" onclick="startStageTheory('${level}')" ${unlocked ? '' : 'disabled'}>
              📖 이론 학습
            </button>
            <button class="stage-btn secondary-btn" onclick="startStageQuiz('${level}')" ${unlocked ? '' : 'disabled'}>
              📝 문제 풀기
            </button>
          </div>
          ${!unlocked ? `<div class="unlock-hint">🔒 ${level === '중급' ? '초급' : '중급'} 60% 이상 완료 시 해제돼요</div>` : ''}
        </div>
      </div>`;
  }).join('');
}

function startStageTheory(level) {
  theoryState.filter = level;
  goTo('theory');
  renderTheory();
}

function startStageQuiz(level) {
  quizState.selectedLevel = level;
  quizState.mode = 'level';
  goTo('quiz');
  renderQuizSetup();
  // 자동 시작
  const pool = shuffle(QUESTIONS.filter(q => q.level === level));
  if (pool.length === 0) { showToast('문제가 없어요!'); return; }
  beginQuiz(pool, level);
}

// ══════════════════════════════════════════════
// THEORY
// ══════════════════════════════════════════════
const theoryState = { filter: '초급', viewing: null };

function renderTheory() {
  // 필터 바
  const bar = document.getElementById('theory-filter-bar');
  const levels = ['초급', '중급', '고급'];
  bar.innerHTML = levels.map(l => `
    <button class="filter-btn level-btn-${l} ${theoryState.filter === l ? 'active' : ''}"
            onclick="setTheoryFilter('${l}')">${l === '초급' ? '🌱 초급' : l === '중급' ? '🌿 중급' : '🌳 고급'}</button>
  `).join('') + `<button class="filter-btn ${theoryState.filter === 'all' ? 'active' : ''}" onclick="setTheoryFilter('all')">전체</button>`;

  // 이론 목록
  const p = loadProgress();
  const list = document.getElementById('theory-list');
  const filtered = theoryState.filter === 'all' ? THEORIES : THEORIES.filter(t => t.level === theoryState.filter);

  list.innerHTML = filtered.map(t => {
    const isRead = p[t.level] && p[t.level].read.includes(t.id);
    return `
      <div class="theory-card level-${t.level}" onclick="viewTheory('${t.id}')">
        <div class="theory-card-info">
          <div class="theory-card-meta">
            <span class="level-tag ${t.level}">${t.level}</span>
            <span class="subject-tag-small">${subjectIcon(t.subject)} ${t.subject}</span>
          </div>
          <div class="theory-card-title">${t.title}</div>
          <div class="theory-card-summary">${t.summary}</div>
          <div class="theory-card-keywords">
            ${t.keywords.slice(0, 4).map(k => `<span class="keyword-tag">${k}</span>`).join('')}
          </div>
        </div>
        <span class="read-badge">${isRead ? '✅' : '›'}</span>
      </div>`;
  }).join('');

  document.getElementById('theory-list-view').style.display = '';
  document.getElementById('theory-detail-view').style.display = 'none';
}

function setTheoryFilter(f) {
  theoryState.filter = f;
  renderTheory();
}

function viewTheory(id) {
  const t = THEORIES.find(x => x.id === id);
  if (!t) return;

  // 읽음 표시
  const p = loadProgress();
  if (!p[t.level].read.includes(id)) {
    p[t.level].read.push(id);
    saveProgress(p);
  }

  document.getElementById('theory-list-view').style.display = 'none';
  const detail = document.getElementById('theory-detail-view');
  detail.style.display = '';

  const relQ = QUESTIONS.filter(q => t.relatedQuestions && t.relatedQuestions.includes(q.id));

  detail.innerHTML = `
    <button class="back-btn" onclick="closeTheoryDetail()">← 목록으로</button>
    <div class="theory-detail-card">
      <div class="theory-detail-meta">
        <span class="level-tag ${t.level}">${t.level}</span>
        <span class="subject-tag-small">${subjectIcon(t.subject)} ${t.subject} · ${t.topic}</span>
      </div>
      <div class="theory-detail-title">${t.title}</div>
      ${t.illustration ? `<div class="illustration-wrap">${t.illustration}</div>` : ''}
      ${t.content}
      ${relQ.length > 0 ? `<button class="related-quiz-btn" onclick="startRelatedQuiz('${id}')">📝 관련 문제 ${relQ.length}개 풀기</button>` : ''}
    </div>`;
  window.scrollTo(0, 0);
}

function closeTheoryDetail() {
  document.getElementById('theory-list-view').style.display = '';
  document.getElementById('theory-detail-view').style.display = 'none';
  renderTheory();
}

function startRelatedQuiz(theoryId) {
  const t = THEORIES.find(x => x.id === theoryId);
  const pool = QUESTIONS.filter(q => t.relatedQuestions && t.relatedQuestions.includes(q.id));
  if (!pool.length) return;
  goTo('quiz');
  beginQuiz(pool, t.level);
}

// ══════════════════════════════════════════════
// QUIZ
// ══════════════════════════════════════════════
const quizState = { selectedLevel: '초급', mode: null, pool: [], current: 0, answered: false, score: 0, level: '초급' };

function renderQuizSetup() {
  document.getElementById('quiz-setup').style.display = '';
  document.getElementById('quiz-player').classList.remove('active');
  document.getElementById('quiz-finish').classList.remove('active');

  // 레벨 탭 업데이트
  document.querySelectorAll('.quiz-level-tab').forEach(btn => {
    const l = btn.dataset.level;
    btn.className = 'quiz-level-tab' + (l === quizState.selectedLevel ? ` sel-${l}` : '');
    const cnt = l === '전체' ? QUESTIONS.length : QUESTIONS.filter(q => q.level === l).length;
    btn.querySelector('.tab-count').textContent = `${cnt}문제`;
  });
}

function selectQuizLevel(level) {
  quizState.selectedLevel = level;
  renderQuizSetup();
}

function selectQuizMode(mode, el) {
  quizState.mode = mode;
  document.querySelectorAll('.quiz-mode-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('start-quiz-btn').disabled = false;
}

function startQuiz() {
  const level = quizState.selectedLevel;
  let pool;
  if (quizState.mode === 'random') {
    const src = level === '전체' ? QUESTIONS : QUESTIONS.filter(q => q.level === level);
    pool = level === '전체' ? buildBalancedPool(src, 20) : shuffle(src).slice(0, 20);
  } else if (quizState.mode === 'balanced') {
    const src = level === '전체' ? QUESTIONS : QUESTIONS.filter(q => q.level === level);
    pool = level === '전체' ? buildBalancedPool(src, 40) : shuffle(src).slice(0, 40);
  } else if (quizState.mode === 'all') {
    const src = level === '전체' ? QUESTIONS : QUESTIONS.filter(q => q.level === level);
    pool = level === '전체' ? buildBalancedPool(src, Math.min(src.length, 180)) : shuffle(src);
  } else if (quizState.mode === 'exam') {
    pool = buildExamPool(level);
    if (!pool.length) { showToast('실전 모드 문제를 만들 수 없어요'); return; }
  } else if (quizState.mode === 'weak') {
    pool = buildWeakTopicPool(level, 30);
    if (!pool.length) { showToast('취약주제 데이터가 부족해요. 먼저 오답을 쌓아주세요!'); return; }
  } else if (quizState.mode === 'wrong') {
    const wrongNote = loadWrongNote();
    const wrongIds = wrongNote.map(w => w.questionId);
    pool = shuffle(QUESTIONS.filter(q => wrongIds.includes(q.id)));
    if (!pool.length) { showToast('오답노트가 비어 있어요!'); return; }
  } else {
    showToast('모드를 선택해주세요!');
    return;
  }
  beginQuiz(pool, level === '전체' ? null : level);
}

function beginQuiz(pool, level) {
  quizState.pool = pool;
  quizState.current = 0;
  quizState.answered = false;
  quizState.score = 0;
  quizState.level = level;

  document.getElementById('quiz-setup').style.display = 'none';
  document.getElementById('quiz-finish').classList.remove('active');
  document.getElementById('quiz-player').classList.add('active');
  renderQuestion();
}

function renderQuestion() {
  const { pool, current } = quizState;
  if (current >= pool.length) { showFinish(); return; }

  const q = pool[current];
  quizState.answered = false;

  const pct = (current / pool.length) * 100;
  document.getElementById('quiz-progress-fill').style.width = pct + '%';
  document.getElementById('quiz-num').textContent = `${current + 1} / ${pool.length}`;
  document.getElementById('quiz-subject-tag').textContent = `${subjectIcon(q.subject)} ${q.subject}`;

  const levelTagEl = document.getElementById('quiz-level-tag');
  levelTagEl.textContent = q.level;
  levelTagEl.className = `quiz-level-tag-small ${q.level}`;

  document.getElementById('quiz-question-text').textContent = q.question;

  const choicesEl = document.getElementById('quiz-choices');
  if (q.type === 'ox') {
    choicesEl.innerHTML = `
      <div class="ox-choices">
        <button class="ox-btn ox-o" onclick="selectAnswer(0)" data-idx="0">O</button>
        <button class="ox-btn ox-x" onclick="selectAnswer(1)" data-idx="1">X</button>
      </div>`;
  } else {
    choicesEl.innerHTML = `<div class="choices">${q.choices.map((c, i) => `
      <button class="choice-btn" onclick="selectAnswer(${i})" data-idx="${i}">
        <span class="choice-num">${i + 1}</span><span>${c}</span>
      </button>`).join('')}</div>`;
  }

  document.getElementById('quiz-result-panel').className = 'quiz-result-panel';
  document.getElementById('quiz-result-panel').innerHTML = '';
  document.getElementById('quiz-action-row').style.display = 'none';
  document.getElementById('quiz-next-btn').textContent = current + 1 < pool.length ? '다음 문제 →' : '결과 보기';
}

function selectAnswer(idx) {
  if (quizState.answered) return;
  quizState.answered = true;

  const q = quizState.pool[quizState.current];
  const isCorrect = idx === q.answer;
  if (isCorrect) quizState.score++;

  // 버튼 상태 업데이트
  const buttons = document.querySelectorAll('[data-idx]');
  buttons.forEach(btn => {
    btn.disabled = true;
    const i = parseInt(btn.dataset.idx);
    if (i === q.answer) btn.classList.add('correct');
    else if (i === idx && !isCorrect) btn.classList.add('wrong');
  });

  // 결과 패널
  const panel = document.getElementById('quiz-result-panel');
  panel.className = 'quiz-result-panel active ' + (isCorrect ? 'correct' : 'wrong');
  panel.innerHTML = `
    <div class="result-label ${isCorrect ? 'correct' : 'wrong'}">${isCorrect ? '✅ 정답!' : '❌ 오답'}</div>
    <div class="result-explanation">${q.explanation}</div>`;

  document.getElementById('quiz-action-row').style.display = 'flex';

  // 이론 보기 버튼
  const theoryBtn = document.getElementById('view-theory-btn');
  if (q.linkedTheory) {
    theoryBtn.style.display = '';
    theoryBtn.onclick = () => { goTo('theory'); viewTheory(q.linkedTheory); };
  } else {
    theoryBtn.style.display = 'none';
  }

  // 오답 저장 & 진행상황 업데이트
  const p = loadProgress();
  const level = q.level;
  p[level].total = (p[level].total || 0) + 1;
  if (isCorrect) p[level].correct = (p[level].correct || 0) + 1;
  saveProgress(p);

  if (!isCorrect) {
    const wrongNote = loadWrongNote();
    const existing = wrongNote.findIndex(w => w.questionId === q.id);
    const entry = {
      questionId: q.id, subject: q.subject, level: q.level,
      topic: q.topic,
      question: q.question,
      selectedAnswer: q.type === 'ox' ? (idx === 0 ? 'O (맞다)' : 'X (틀리다)') : q.choices[idx],
      correctAnswer: q.type === 'ox' ? (q.answer === 0 ? 'O (맞다)' : 'X (틀리다)') : q.choices[q.answer],
      date: new Date().toLocaleDateString('ko-KR'),
      count: 1
    };
    if (existing >= 0) { entry.count = wrongNote[existing].count + 1; wrongNote[existing] = entry; }
    else { wrongNote.unshift(entry); }
    saveWrongNote(wrongNote);
  }
}

function nextQuestion() {
  quizState.current++;
  renderQuestion();
}

function showFinish() {
  document.getElementById('quiz-player').classList.remove('active');
  const finish = document.getElementById('quiz-finish');
  finish.classList.add('active');
  const { score, pool } = quizState;
  const total = pool.length;
  const pct = Math.round((score / total) * 100);
  document.getElementById('finish-score').textContent = `${score}/${total}`;
  document.getElementById('finish-pct').textContent = `정답률 ${pct}%`;
  let msg = pct === 100 ? '완벽합니다! 이 단계는 완전히 마스터했어요 🌟'
    : pct >= 80 ? '훌륭해요! 조금만 더 하면 완벽해요 👏'
    : pct >= 60 ? '양호해요. 틀린 문제를 이론과 함께 복습해 보세요 📖'
    : '오답노트로 틀린 개념을 꼭 다시 확인하세요 💪';

  if (quizState.mode === 'exam') {
    msg += ' 실전 모드는 5지선다 중심으로 구성됩니다.';
  }
  if (quizState.mode === 'weak') {
    msg += ' 취약주제 재시험으로 약점을 집중 보완했어요.';
  }
  document.getElementById('finish-msg').textContent = msg;
  renderHome(); // 홈 진행률 업데이트
}

function retryQuiz() {
  quizState.current = 0;
  quizState.score = 0;
  quizState.answered = false;
  quizState.pool = shuffle(quizState.pool);
  document.getElementById('quiz-finish').classList.remove('active');
  document.getElementById('quiz-player').classList.add('active');
  renderQuestion();
}

// ══════════════════════════════════════════════
// WRONG NOTE
// ══════════════════════════════════════════════
function renderWrongNote() {
  const wrongNote = loadWrongNote();
  const list = document.getElementById('wrong-note-list');

  if (!wrongNote.length) {
    list.innerHTML = `<div class="wrong-note-empty"><div class="empty-icon">🎉</div><p>오답노트가 비어 있어요!<br>문제를 풀면 틀린 문제가 자동으로 저장돼요.</p></div>`;
    return;
  }

  document.getElementById('wrong-count-badge').textContent = wrongNote.length + '개';
  list.innerHTML = `
    <div class="wrong-tools">
      <button class="retry-btn" onclick="startWeakTopicFromWrong(20)">🔥 취약주제 20문제</button>
      <button class="retry-btn" onclick="startWeakTopicFromWrong(40)">🎯 취약주제 40문제</button>
      <button class="clear-wrong-btn" onclick="clearWrongNote()">🗑️ 오답노트 초기화</button>
    </div>
    ${wrongNote.map((w, i) => `
      <div class="wrong-note-card">
        <div class="wrong-note-meta">
          <div style="display:flex;gap:6px;align-items:center">
            <span class="wrong-note-subject">${w.subject}</span>
            ${w.level ? `<span class="level-tag ${w.level}" style="font-size:10px">${w.level}</span>` : ''}
          </div>
          <span class="wrong-note-date">${w.date}${w.count > 1 ? ` · ${w.count}번 틀림` : ''}</span>
        </div>
        <div class="wrong-note-q">Q. ${w.question}</div>
        <div class="wrong-note-answers">
          내 답: <span style="color:var(--wrong);font-weight:700">${w.selectedAnswer}</span><br>
          정답: <span style="color:var(--correct);font-weight:700">${w.correctAnswer}</span>
        </div>
        <button class="retry-btn" onclick="retryWrongSingle(${i})">↩ 다시 풀기</button>
      </div>`).join('')}`;
}

function retryWrongSingle(idx) {
  const wrongNote = loadWrongNote();
  const w = wrongNote[idx];
  const q = QUESTIONS.find(x => x.id === w.questionId);
  if (!q) { showToast('문제를 찾을 수 없어요'); return; }
  goTo('quiz');
  beginQuiz([q], q.level);
}

function startWeakTopicFromWrong(size) {
  const pool = buildWeakTopicPool('전체', size);
  if (!pool.length) { showToast('취약주제 문제를 만들 수 없어요'); return; }
  goTo('quiz');
  quizState.mode = 'weak';
  beginQuiz(pool, null);
}

function clearWrongNote() {
  if (!confirm('오답노트를 모두 지울까요?')) return;
  saveWrongNote([]);
  renderWrongNote();
  showToast('오답노트를 초기화했어요');
}

// ── Init ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
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

  document.getElementById('quiz-next-btn').addEventListener('click', nextQuestion);
  renderHome();
  goTo('home');
});
