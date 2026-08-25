// ── 데이터 (로그인 후 Supabase에서 비동기 로드) ──
let THEORIES = [];
let QUESTIONS = [];
window.setData = function (theories, questions) {
  THEORIES = theories;
  QUESTIONS = questions;
};

// ── Progress Storage ─────────────────────────
function loadProgress() {
  return JSON.parse(localStorage.getItem('studyProgress') || '{"초급":{"read":[],"correct":0,"total":0},"중급":{"read":[],"correct":0,"total":0},"고급":{"read":[],"correct":0,"total":0}}');
}
function saveProgress(p) { localStorage.setItem('studyProgress', JSON.stringify(p)); }

function loadWrongNote() { return JSON.parse(localStorage.getItem('wrongNote') || '[]'); }
function saveWrongNote(w) { localStorage.setItem('wrongNote', JSON.stringify(w)); }

function loadBookmarks() { return JSON.parse(localStorage.getItem('treeBookmarks') || '[]'); }
function saveBookmarks(b) { localStorage.setItem('treeBookmarks', JSON.stringify(b)); }
function isBookmarked(theoryId) { return loadBookmarks().includes(theoryId); }

// ── D-day & 연속 학습일(스트릭) ──────────────────
const EXAM_DATE_KEY = 'treeExamDate';
const STUDY_DATES_KEY = 'treeStudyDates';
function loadExamDate() { return localStorage.getItem(EXAM_DATE_KEY) || null; }
function saveExamDate(d) { if (d) localStorage.setItem(EXAM_DATE_KEY, d); else localStorage.removeItem(EXAM_DATE_KEY); }
function markStudyToday() {
  const dates = JSON.parse(localStorage.getItem(STUDY_DATES_KEY) || '[]');
  const today = todayISO();
  if (!dates.includes(today)) {
    dates.push(today);
    localStorage.setItem(STUDY_DATES_KEY, JSON.stringify(dates));
  }
}
function promptExamDate() {
  const cur = loadExamDate();
  const input = prompt('시험 날짜를 YYYY-MM-DD 형식으로 입력하세요 (예: 2027-02-27).\n지우려면 빈 칸으로 두고 확인을 누르세요.', cur || '');
  if (input === null) return;
  const trimmed = input.trim();
  if (trimmed === '') { saveExamDate(null); renderHome(); return; }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) { showToast('YYYY-MM-DD 형식으로 입력해주세요 (예: 2027-02-27)'); return; }
  saveExamDate(trimmed);
  renderHome();
}
function computeStreak() {
  const dates = new Set(JSON.parse(localStorage.getItem(STUDY_DATES_KEY) || '[]'));
  const today = todayISO();
  const cursor = new Date();
  if (!dates.has(today)) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (true) {
    const iso = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, '0')}-${String(cursor.getDate()).padStart(2, '0')}`;
    if (dates.has(iso)) { streak++; cursor.setDate(cursor.getDate() - 1); }
    else break;
  }
  return streak;
}

// ── 진도 백업/복원 ────────────────────────────
function exportProgressData() {
  const data = {
    site: '나무의사',
    exportedAt: new Date().toISOString(),
    progress: loadProgress(),
    wrongNote: loadWrongNote(),
    bookmarks: loadBookmarks(),
    examDate: loadExamDate(),
    studyDates: JSON.parse(localStorage.getItem(STUDY_DATES_KEY) || '[]')
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `나무의사_진도백업_${todayISO()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('진도를 파일로 내보냈어요 💾');
}
function importProgressData(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    let data;
    try { data = JSON.parse(e.target.result); }
    catch { showToast('파일을 읽을 수 없어요. 올바른 백업 파일인지 확인해주세요.'); return; }
    if (!data || typeof data !== 'object' || !data.progress) {
      showToast('올바른 백업 파일이 아니에요.');
      return;
    }
    if (!confirm('현재 진도를 백업 파일 내용으로 덮어쓸까요? 되돌릴 수 없어요.')) return;
    saveProgress(data.progress || loadProgress());
    saveWrongNote(data.wrongNote || []);
    saveBookmarks(data.bookmarks || []);
    saveExamDate(data.examDate || null);
    localStorage.setItem(STUDY_DATES_KEY, JSON.stringify(data.studyDates || []));
    showToast('진도를 불러왔어요! ✅');
    renderHome();
  };
  reader.readAsText(file);
}

// ── 에빙하우스 망각곡선 기반 SRS(간격 반복) ──────
const SRS_INTERVALS = [1, 3, 7, 14, 30]; // 일 단위 복습 간격
function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function addDaysISO(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function computeDueWrongNote() {
  const today = todayISO();
  return loadWrongNote().filter(w => !w.mastered && (w.nextReview || today) <= today);
}
// 오답 발생(신규/재발) - 복습 사이클을 처음(1일 뒤)으로 리셋
function upsertWrongNote(q, selectedText, correctText) {
  const wrongNote = loadWrongNote();
  const existing = wrongNote.findIndex(w => w.questionId === q.id);
  const entry = {
    questionId: q.id, subject: q.subject, level: q.level,
    topic: q.topic,
    question: q.question,
    selectedAnswer: selectedText,
    correctAnswer: correctText,
    date: new Date().toLocaleDateString('ko-KR'),
    count: existing >= 0 ? (wrongNote[existing].count || 1) + 1 : 1,
    srsStage: 0,
    nextReview: addDaysISO(1),
    mastered: false
  };
  if (existing >= 0) wrongNote[existing] = entry;
  else wrongNote.unshift(entry);
  saveWrongNote(wrongNote);
}
// 복습 중 정답 - 다음 단계로 승급(간격이 길어짐), 마지막 단계 통과시 마스터 처리
function advanceWrongNoteStage(questionId) {
  const wrongNote = loadWrongNote();
  const idx = wrongNote.findIndex(w => w.questionId === questionId);
  if (idx < 0) return;
  const entry = wrongNote[idx];
  const nextStage = (entry.srsStage || 0) + 1;
  if (nextStage >= SRS_INTERVALS.length) {
    entry.mastered = true;
    entry.srsStage = SRS_INTERVALS.length;
    entry.nextReview = null;
  } else {
    entry.srsStage = nextStage;
    entry.nextReview = addDaysISO(SRS_INTERVALS[nextStage]);
  }
  wrongNote[idx] = entry;
  saveWrongNote(wrongNote);
}

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
  return { '수목병리학': '🦠', '수목해충학': '🐛', '수목생리학': '🌱', '산림토양학': '🌍', '수목관리학': '✂️' }[s] || '📚';
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
  const totalTheoryAll = THEORIES.length;
  const totalQAll = QUESTIONS.length;
  const readAll = levels.reduce((s, l) => s + loadProgress()[l].read.length, 0);
  const correctAll = levels.reduce((s, l) => s + loadProgress()[l].correct, 0);
  document.getElementById('stat-row').innerHTML = `
    <div class="stat-tile"><div class="stat-label">전체 진행률</div><div class="stat-value accent">${allPct}%</div></div>
    <div class="stat-tile"><div class="stat-label">이론 학습</div><div class="stat-value">${readAll}<span style="font-size:14px;color:var(--text-light)">/${totalTheoryAll}</span></div></div>
    <div class="stat-tile"><div class="stat-label">문제 정답</div><div class="stat-value">${correctAll}<span style="font-size:14px;color:var(--text-light)">/${totalQAll}</span></div></div>
  `;

  // 오늘의 복습(에빙하우스 SRS) 위젯
  const dueCount = computeDueWrongNote().length;
  const totalWrongActive = loadWrongNote().filter(w => !w.mastered).length;
  document.getElementById('review-widget').innerHTML = dueCount > 0
    ? `<div class="review-card due">
         <div class="review-card-icon">🔥</div>
         <div class="review-card-body">
           <div class="review-card-title">오늘의 복습 ${dueCount}개</div>
           <div class="review-card-desc">에빙하우스 망각곡선 기준 복습일이에요. 지금 안 하면 다시 처음부터!</div>
         </div>
         <button class="review-card-btn" onclick="startTodayReview()">복습 시작 →</button>
       </div>`
    : `<div class="review-card clear">
         <div class="review-card-icon">✅</div>
         <div class="review-card-body">
           <div class="review-card-title">오늘 복습할 문제 없음</div>
           <div class="review-card-desc">${totalWrongActive > 0 ? `대기 중인 복습 ${totalWrongActive}개는 예정일에 알려드려요.` : '오답노트가 깨끗해요. 계속 문제를 풀어보세요!'}</div>
         </div>
       </div>`;

  // D-day · 연속 학습일 · 진도 백업
  const examDate = loadExamDate();
  const streak = computeStreak();
  let dDayHtml;
  if (examDate) {
    const diff = Math.ceil((new Date(examDate) - new Date(todayISO())) / 86400000);
    dDayHtml = diff >= 0
      ? `<div class="dday-value">D-${diff}</div><div class="dday-label">${examDate} 시험까지</div>`
      : `<div class="dday-value">D+${Math.abs(diff)}</div><div class="dday-label">${examDate} 시험 이후</div>`;
  } else {
    dDayHtml = `<div class="dday-empty">시험일을 등록하면<br>남은 날짜를 보여드려요</div>`;
  }
  document.getElementById('study-manage-widget').innerHTML = `
    <div class="manage-card">
      <div class="manage-col">
        ${dDayHtml}
        <button class="manage-mini-btn" onclick="promptExamDate()">${examDate ? '변경' : '📅 시험일 등록'}</button>
      </div>
      <div class="manage-col">
        <div class="streak-value">🔥 ${streak}일</div>
        <div class="dday-label">연속 학습</div>
      </div>
      <div class="manage-col">
        <button class="manage-mini-btn" onclick="exportProgressData()">💾 백업 내보내기</button>
        <button class="manage-mini-btn" onclick="document.getElementById('import-file-input').click()">📂 백업 불러오기</button>
      </div>
    </div>
  `;

  const grid = document.getElementById('stages-grid');
  const rows = levels.map(level => {
    const pct = stageCompletion(level);
    const unlocked = isStageUnlocked(level);
    const p = loadProgress()[level];
    const totalT = THEORIES.filter(t => t.level === level).length;
    const totalQ = QUESTIONS.filter(q => q.level === level).length;
    const stageName = level === '초급' ? '나무의사 입문' : level === '중급' ? '핵심 개념 마스터' : '실전 완성';

    return `
      <tr class="${unlocked ? '' : 'locked'}">
        <td>
          <div class="stage-name-cell">${icons[level]} ${level}${unlocked ? '' : ' 🔒'}</div>
          <div style="font-size:11px;color:var(--text-light);margin-top:2px">${stageName}</div>
        </td>
        <td data-label="이론">${p.read.length}/${totalT}</td>
        <td data-label="문제">${p.total > 0 ? p.correct + '/' + Math.min(p.total, totalQ) : '0/' + totalQ}</td>
        <td data-label="완료율">
          <span class="mini-bar"><span class="mini-bar-fill" style="width:${pct}%"></span></span>${pct}%
        </td>
        <td data-label="학습">
          <button class="table-btn primary" onclick="startStageTheory('${level}')" ${unlocked ? '' : 'disabled'}>이론</button>
          <button class="table-btn secondary" onclick="startStageQuiz('${level}')" ${unlocked ? '' : 'disabled'}>문제</button>
          ${!unlocked ? `<div style="font-size:11px;color:var(--text-light);margin-top:4px">${level === '중급' ? '초급' : '중급'} 60% 이상 시 해제</div>` : ''}
        </td>
      </tr>`;
  }).join('');

  grid.innerHTML = `
    <div class="stage-table-wrap">
      <table class="stage-table">
        <thead><tr><th>단계</th><th>이론</th><th>문제</th><th>완료율</th><th>학습</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
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
  `).join('')
    + `<button class="filter-btn ${theoryState.filter === 'all' ? 'active' : ''}" onclick="setTheoryFilter('all')">전체</button>`
    + `<button class="filter-btn ${theoryState.filter === 'bookmark' ? 'active' : ''}" onclick="setTheoryFilter('bookmark')">⭐ 즐겨찾기</button>`;

  // 이론 목록
  const p = loadProgress();
  const bookmarks = loadBookmarks();
  const list = document.getElementById('theory-list');
  const filtered = theoryState.filter === 'all' ? THEORIES
    : theoryState.filter === 'bookmark' ? THEORIES.filter(t => bookmarks.includes(t.id))
    : THEORIES.filter(t => t.level === theoryState.filter);

  if (theoryState.filter === 'bookmark' && !filtered.length) {
    list.innerHTML = `<div class="wrong-note-empty"><div class="empty-icon">⭐</div><p>즐겨찾기한 이론이 없어요!<br>이론 상세 화면에서 별표를 눌러 추가해보세요.</p></div>`;
  } else {
    list.innerHTML = filtered.map(t => {
      const isRead = p[t.level] && p[t.level].read.includes(t.id);
      const marked = bookmarks.includes(t.id);
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
          <button class="bookmark-star-btn" onclick="toggleBookmark('${t.id}', event)" title="즐겨찾기">${marked ? '⭐' : '☆'}</button>
          <span class="read-badge">${isRead ? '✅' : '›'}</span>
        </div>`;
    }).join('');
  }

  document.getElementById('theory-list-view').style.display = '';
  document.getElementById('theory-detail-view').style.display = 'none';
}

function toggleBookmark(theoryId, evt) {
  if (evt) evt.stopPropagation();
  let b = loadBookmarks();
  if (b.includes(theoryId)) b = b.filter(id => id !== theoryId);
  else b.push(theoryId);
  saveBookmarks(b);
  if (document.getElementById('theory-detail-view').style.display !== 'none') {
    viewTheory(theoryId);
  } else {
    renderTheory();
  }
}

function setTheoryFilter(f) {
  theoryState.filter = f;
  renderTheory();
}

function viewTheory(id) {
  const t = THEORIES.find(x => x.id === id);
  if (!t) return;

  markStudyToday();

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

  const marked = isBookmarked(t.id);
  detail.innerHTML = `
    <button class="back-btn" onclick="closeTheoryDetail()">← 목록으로</button>
    <div class="theory-detail-card">
      <div class="theory-detail-meta">
        <span class="level-tag ${t.level}">${t.level}</span>
        <span class="subject-tag-small">${subjectIcon(t.subject)} ${t.subject} · ${t.topic}</span>
        <button id="detail-bookmark-btn" class="bookmark-toggle-btn" onclick="toggleBookmark('${t.id}')">${marked ? '⭐ 즐겨찾기 해제' : '☆ 즐겨찾기 추가'}</button>
      </div>
      <div class="theory-detail-title">${t.title}</div>
      ${t.acronym ? `<div class="acronym-box">🔤 <strong>두문자 암기</strong><br>${t.acronym}</div>` : ''}
      ${t.mnemonic ? `<div class="mnemonic-box">💡 <strong>연상 암기</strong><br>${t.mnemonic}</div>` : ''}
      ${t.illustration ? `<div class="illustration-wrap">${t.illustration}</div>` : ''}
      ${t.content}
      ${relQ.length > 0 ? `<button class="related-quiz-btn" onclick="startRelatedQuiz('${id}')">📝 관련 문제 ${relQ.length}개 풀기</button>` : ''}
    </div>`;
  window.scrollTo(0, 0);
}

// ══════════════════════════════════════════════
// 암기 카드 (플래시카드)
// ══════════════════════════════════════════════
let flashcardState = { level: '전체', pool: [], index: 0, flipped: false };

function renderFlashcardPage() {
  const bar = document.getElementById('flashcard-filter-bar');
  const levels = ['전체', '초급', '중급', '고급'];
  bar.innerHTML = levels.map(l => `<button class="filter-btn ${flashcardState.level === l ? 'active' : ''}" onclick="setFlashcardFilter('${l}')">${l}</button>`).join('');
  buildFlashcardPool();
  renderFlashcardCard();
}
function setFlashcardFilter(level) {
  flashcardState.level = level;
  flashcardState.index = 0;
  flashcardState.flipped = false;
  renderFlashcardPage();
}
function buildFlashcardPool() {
  const src = flashcardState.level === '전체' ? THEORIES : THEORIES.filter(t => t.level === flashcardState.level);
  flashcardState.pool = src;
  if (flashcardState.index >= src.length) flashcardState.index = 0;
}
function renderFlashcardCard() {
  const area = document.getElementById('flashcard-area');
  const pool = flashcardState.pool;
  if (!pool.length) { area.innerHTML = '<div class="flashcard-empty">이 단계에는 카드가 없어요.</div>'; return; }
  const t = pool[flashcardState.index];
  area.innerHTML = `
    <div class="flashcard-wrap">
      <div class="flashcard-progress">${flashcardState.index + 1} / ${pool.length} · ${subjectIcon(t.subject)} ${t.subject}</div>
      <div class="flashcard ${flashcardState.flipped ? 'flipped' : ''}" onclick="flipFlashcard()">
        <div class="flashcard-inner">
          <div class="flashcard-front">
            <span class="level-tag ${t.level}">${t.level}</span>
            <div class="flashcard-title">${t.title}</div>
            <div class="flashcard-hint">👆 탭해서 암기법 보기</div>
          </div>
          <div class="flashcard-back">
            <div class="flashcard-title" style="font-size:14px;margin-bottom:10px">${t.title}</div>
            ${t.acronym ? `<div class="acronym-line">🔤 <strong>두문자 암기</strong><br>${t.acronym}</div>` : ''}
            ${t.mnemonic ? `<div class="mnemonic-line">💡 <strong>연상 암기</strong><br>${t.mnemonic}</div>` : ''}
            <div class="flashcard-hint">👆 다시 탭해서 앞면으로</div>
          </div>
        </div>
      </div>
      <div class="flashcard-controls">
        <button class="flashcard-nav-btn" onclick="event.stopPropagation();prevFlashcard()">← 이전</button>
        <button class="flashcard-shuffle-btn" onclick="event.stopPropagation();shuffleFlashcards()">🔀 섞기</button>
        <button class="flashcard-nav-btn" onclick="event.stopPropagation();nextFlashcard()">다음 →</button>
      </div>
    </div>`;
}
function flipFlashcard() {
  flashcardState.flipped = !flashcardState.flipped;
  if (flashcardState.flipped) markStudyToday();
  renderFlashcardCard();
}
function nextFlashcard() {
  flashcardState.index = (flashcardState.index + 1) % flashcardState.pool.length;
  flashcardState.flipped = false;
  renderFlashcardCard();
}
function prevFlashcard() {
  flashcardState.index = (flashcardState.index - 1 + flashcardState.pool.length) % flashcardState.pool.length;
  flashcardState.flipped = false;
  renderFlashcardCard();
}
function shuffleFlashcards() {
  flashcardState.pool = shuffle(flashcardState.pool);
  flashcardState.index = 0;
  flashcardState.flipped = false;
  renderFlashcardCard();
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
    pool = shuffle(src).slice(0, 10);
  } else if (quizState.mode === 'all') {
    const src = level === '전체' ? QUESTIONS : QUESTIONS.filter(q => q.level === level);
    pool = shuffle(src);
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
  markStudyToday();

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

  const selectedText = q.type === 'ox' ? (idx === 0 ? 'O (맞다)' : 'X (틀리다)') : q.choices[idx];
  const correctText = q.type === 'ox' ? (q.answer === 0 ? 'O (맞다)' : 'X (틀리다)') : q.choices[q.answer];
  if (!isCorrect) {
    upsertWrongNote(q, selectedText, correctText);
  } else if (quizState.mode === 'review') {
    advanceWrongNoteStage(q.id);
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
    document.getElementById('wrong-count-badge').textContent = '';
    list.innerHTML = `<div class="wrong-note-empty"><div class="empty-icon">🎉</div><p>오답노트가 비어 있어요!<br>문제를 풀면 틀린 문제가 자동으로 저장돼요.</p></div>`;
    return;
  }

  const today = todayISO();
  const active = wrongNote.filter(w => !w.mastered);
  const dueCount = active.filter(w => (w.nextReview || today) <= today).length;
  const masteredCount = wrongNote.length - active.length;

  document.getElementById('wrong-count-badge').textContent = active.length + '개';
  list.innerHTML = `
    <div class="srs-summary-bar">
      <div class="srs-stat"><span class="srs-stat-num due">${dueCount}</span><span class="srs-stat-label">오늘 복습</span></div>
      <div class="srs-stat"><span class="srs-stat-num">${Math.max(0, active.length - dueCount)}</span><span class="srs-stat-label">대기중</span></div>
      <div class="srs-stat"><span class="srs-stat-num mastered">${masteredCount}</span><span class="srs-stat-label">🏆 마스터</span></div>
    </div>
    <div class="wrong-tools">
      <button class="retry-btn" onclick="startTodayReview()">🔥 오늘의 복습(${dueCount}) 시작</button>
      <button class="clear-wrong-btn" onclick="clearWrongNote()">🗑️ 오답노트 초기화</button>
    </div>
    ${wrongNote.map((w, i) => {
      const due = !w.mastered && (w.nextReview || today) <= today;
      const daysLeft = (!w.mastered && w.nextReview) ? Math.round((new Date(w.nextReview) - new Date(today)) / 86400000) : null;
      const badge = w.mastered ? `<span class="srs-badge mastered">🏆 마스터</span>`
        : due ? `<span class="srs-badge due">🔥 오늘 복습</span>`
        : `<span class="srs-badge upcoming">D-${daysLeft}</span>`;
      return `
      <div class="wrong-note-card ${w.mastered ? 'mastered' : ''}">
        <div class="wrong-note-meta">
          <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
            <span class="wrong-note-subject">${w.subject}</span>
            ${w.level ? `<span class="level-tag ${w.level}" style="font-size:10px">${w.level}</span>` : ''}
            ${badge}
          </div>
          <span class="wrong-note-date">${w.date}${w.count > 1 ? ` · ${w.count}번 틀림` : ''}</span>
        </div>
        <div class="wrong-note-q">Q. ${w.question}</div>
        <div class="wrong-note-answers">
          내 답: <span style="color:var(--wrong);font-weight:700">${w.selectedAnswer}</span><br>
          정답: <span style="color:var(--correct);font-weight:700">${w.correctAnswer}</span>
        </div>
        ${!w.mastered ? `<button class="retry-btn" onclick="retryWrongSingle(${i})">↩ 다시 풀기</button>` : ''}
      </div>`;
    }).join('')}`;
}

function retryWrongSingle(idx) {
  const wrongNote = loadWrongNote();
  const w = wrongNote[idx];
  const q = QUESTIONS.find(x => x.id === w.questionId);
  if (!q) { showToast('문제를 찾을 수 없어요'); return; }
  goTo('quiz');
  quizState.mode = 'review';
  beginQuiz([q], q.level);
}

function startTodayReview() {
  const due = computeDueWrongNote();
  if (!due.length) { showToast('오늘 복습할 문제가 없어요! 🎉'); return; }
  const ids = new Set(due.map(w => w.questionId));
  const pool = shuffle(QUESTIONS.filter(q => ids.has(q.id)));
  if (!pool.length) { showToast('복습할 문제를 찾을 수 없어요'); return; }
  goTo('quiz');
  quizState.mode = 'review';
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
      if (page === 'flashcard') renderFlashcardPage();
      if (page === 'quiz') renderQuizSetup();
      if (page === 'wrong') renderWrongNote();
    });
  });

  document.getElementById('quiz-next-btn').addEventListener('click', nextQuestion);
  const importInput = document.getElementById('import-file-input');
  if (importInput) {
    importInput.addEventListener('change', (e) => {
      if (e.target.files[0]) importProgressData(e.target.files[0]);
      e.target.value = '';
    });
  }
  window.startApp = function () {
    renderHome();
    goTo('home');
  };
});
