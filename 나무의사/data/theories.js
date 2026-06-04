const THEORIES = [
  // ═══════════════════════════════════════
  // 초급
  // ═══════════════════════════════════════
  {
    id: "t001", level: "초급", subject: "수목병리학", topic: "병의 기초",
    title: "수목병이란?",
    summary: "수목이 왜 병에 걸리는지, 병의 종류는 어떻게 나뉘는지 이해하기",
    keywords: ["수목병", "병원체", "기주", "생물적 원인", "비생물적 원인"],
    illustration: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px">
      <rect width="340" height="200" fill="#f0faf3" rx="12"/>
      <!-- 중앙 원: 수목병 -->
      <circle cx="170" cy="100" r="36" fill="#2d6a4f"/>
      <text x="170" y="96" text-anchor="middle" font-size="13" fill="white" font-weight="bold" font-family="sans-serif">수목병</text>
      <text x="170" y="112" text-anchor="middle" font-size="11" fill="white" font-family="sans-serif">원인</text>
      <!-- 왼쪽: 생물적 -->
      <circle cx="60" cy="70" r="28" fill="#40916c"/>
      <text x="60" y="66" text-anchor="middle" font-size="11" fill="white" font-weight="bold" font-family="sans-serif">생물적</text>
      <text x="60" y="80" text-anchor="middle" font-size="10" fill="white" font-family="sans-serif">원인</text>
      <line x1="88" y1="80" x2="134" y2="95" stroke="#2d6a4f" stroke-width="2" marker-end="url(#arr)"/>
      <!-- 오른쪽: 비생물적 -->
      <circle cx="280" cy="70" r="28" fill="#74c69d"/>
      <text x="280" y="66" text-anchor="middle" font-size="11" fill="white" font-weight="bold" font-family="sans-serif">비생물적</text>
      <text x="280" y="80" text-anchor="middle" font-size="10" fill="white" font-family="sans-serif">원인</text>
      <line x1="252" y1="80" x2="206" y2="95" stroke="#74c69d" stroke-width="2"/>
      <!-- 생물적 하위 -->
      <text x="22" y="120" font-size="10" fill="#2d6a4f" font-family="sans-serif">• 곰팡이</text>
      <text x="22" y="134" font-size="10" fill="#2d6a4f" font-family="sans-serif">• 세균</text>
      <text x="22" y="148" font-size="10" fill="#2d6a4f" font-family="sans-serif">• 바이러스</text>
      <text x="22" y="162" font-size="10" fill="#2d6a4f" font-family="sans-serif">• 선충</text>
      <!-- 비생물적 하위 -->
      <text x="240" y="120" font-size="10" fill="#40916c" font-family="sans-serif">• 온도</text>
      <text x="240" y="134" font-size="10" fill="#40916c" font-family="sans-serif">• 수분</text>
      <text x="240" y="148" font-size="10" fill="#40916c" font-family="sans-serif">• 영양결핍</text>
      <text x="240" y="162" font-size="10" fill="#40916c" font-family="sans-serif">• 대기오염</text>
    </svg>`,
    content: `<div class="theory-section"><h4>수목병이란?</h4><p>수목이 정상적인 생리 기능을 수행하지 못하고 외관·기능이 변화하는 상태를 말해요.</p></div>
    <div class="theory-section"><h4>병의 3요소 (병삼각형)</h4><ul><li><strong>기주(Host)</strong>: 병에 걸리는 나무</li><li><strong>병원체(Pathogen)</strong>: 병을 일으키는 원인</li><li><strong>환경(Environment)</strong>: 발병을 돕는 조건</li></ul><p>세 가지가 동시에 맞아 떨어질 때 병이 생겨요!</p></div>
    <div class="theory-section"><h4>생물적 원인 (전염성 병)</h4><ul><li>곰팡이(균류): 흰가루병, 녹병, 잿빛곰팡이병 등 → 가장 많음</li><li>세균: 불마름병, 뿌리혹병 등</li><li>바이러스: 모자이크병 등</li><li>선충: 소나무재선충병</li></ul></div>
    <div class="theory-section"><h4>비생물적 원인 (비전염성 병)</h4><ul><li>온도 피해: 동해, 열해</li><li>수분 피해: 가뭄, 과습</li><li>영양 결핍/과잉</li><li>대기오염, 제초제 피해</li></ul></div>`,
    relatedQuestions: ["q001", "q002"]
  },
  {
    id: "t002", level: "초급", subject: "수목병리학", topic: "곰팡이병",
    title: "흰가루병 (핵심 정리)",
    summary: "잎 표면에 흰색 가루가 생기는 가장 유명한 곰팡이병",
    keywords: ["흰가루병", "흰색 가루", "분말상", "균사", "건조"],
    illustration: `<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px">
      <rect width="320" height="190" fill="#f0faf3" rx="12"/>
      <!-- 잎 모양 -->
      <path d="M160,20 Q240,75 220,145 Q160,175 100,145 Q80,75 160,20Z" fill="#52b788"/>
      <!-- 중앙 잎맥 -->
      <line x1="160" y1="25" x2="160" y2="165" stroke="#2d6a4f" stroke-width="2.5"/>
      <!-- 측맥 -->
      <line x1="160" y1="65" x2="120" y2="95" stroke="#2d6a4f" stroke-width="1.2" opacity="0.7"/>
      <line x1="160" y1="85" x2="200" y2="110" stroke="#2d6a4f" stroke-width="1.2" opacity="0.7"/>
      <line x1="160" y1="110" x2="125" y2="132" stroke="#2d6a4f" stroke-width="1.2" opacity="0.7"/>
      <line x1="160" y1="125" x2="195" y2="142" stroke="#2d6a4f" stroke-width="1.2" opacity="0.7"/>
      <!-- 흰가루 반점들 -->
      <ellipse cx="148" cy="60" rx="20" ry="11" fill="white" opacity="0.88"/>
      <ellipse cx="175" cy="88" rx="24" ry="13" fill="white" opacity="0.82"/>
      <ellipse cx="140" cy="112" rx="18" ry="10" fill="white" opacity="0.78"/>
      <ellipse cx="172" cy="132" rx="16" ry="9" fill="white" opacity="0.75"/>
      <!-- 설명 텍스트 -->
      <text x="160" y="183" text-anchor="middle" font-size="12" fill="#555" font-family="sans-serif">잎 표면 흰색 분말상 균사</text>
    </svg>`,
    content: `<div class="theory-section"><h4>한 줄 요약</h4><p>잎 <strong>표면</strong>에 <strong>흰색 가루(분말상 균사)</strong>가 생기는 곰팡이병이에요.</p></div>
    <div class="theory-section"><h4>주요 병징</h4><ul><li>처음엔 흰색 작은 반점 → 점점 퍼져 잎 전체 덮음</li><li>심하면 잎이 뒤틀리거나 조기에 낙엽</li><li>병든 잎을 만지면 가루가 묻어남</li></ul></div>
    <div class="theory-section"><h4>발생 조건 (시험 포인트!)</h4><ul><li><strong>건조</strong>하고 통풍이 나쁠 때 잘 발생해요</li><li>온도 17~25°C</li><li>다른 병은 습한 조건을 좋아하는데, 흰가루병은 <strong>건조</strong>할 때 잘 생겨요 → 시험에 자주 나와요!</li></ul></div>
    <div class="theory-section"><h4>잘 걸리는 나무</h4><p>장미, 단풍나무, 참나무류, 배롱나무, 사과나무</p></div>`,
    relatedQuestions: ["q003", "q004"]
  },
  {
    id: "t003", level: "초급", subject: "수목병리학", topic: "수간병",
    title: "소나무재선충병 (핵심만!)",
    summary: "소나무를 당해에 죽이는 무서운 병 - 매개충과 증상 중심으로 기억하기",
    keywords: ["재선충", "솔수염하늘소", "급격한 시들음", "고사", "매개충"],
    illustration: `<svg viewBox="0 0 340 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px">
      <rect width="340" height="210" fill="#fff8f0" rx="12"/>
      <text x="170" y="22" text-anchor="middle" font-size="13" fill="#8B4513" font-weight="bold" font-family="sans-serif">소나무재선충 전파 사이클</text>
      <!-- 원형 화살표 사이클 -->
      <!-- 건강한 소나무 -->
      <rect x="130" y="35" width="80" height="32" rx="8" fill="#52b788"/>
      <text x="170" y="53" text-anchor="middle" font-size="11" fill="white" font-weight="bold" font-family="sans-serif">🌲 건강한 소나무</text>
      <!-- 화살표 오른쪽 아래 -->
      <path d="M210,60 Q270,60 270,100" stroke="#e67e22" stroke-width="2" fill="none" marker-end="url(#arrowO)"/>
      <text x="262" y="82" font-size="9" fill="#e67e22" font-family="sans-serif">매개충</text>
      <text x="262" y="93" font-size="9" fill="#e67e22" font-family="sans-serif">후식·전파</text>
      <!-- 감염목 -->
      <rect x="220" y="105" width="80" height="32" rx="8" fill="#e74c3c"/>
      <text x="260" y="120" text-anchor="middle" font-size="11" fill="white" font-weight="bold" font-family="sans-serif">🍂 감염목</text>
      <text x="260" y="132" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif">급격히 고사</text>
      <!-- 화살표 아래 왼쪽 -->
      <path d="M220,130 Q170,160 130,145" stroke="#c0392b" stroke-width="2" fill="none" marker-end="url(#arrowR)"/>
      <text x="155" y="162" font-size="9" fill="#c0392b" font-family="sans-serif">산란·번데기</text>
      <!-- 매개충 -->
      <rect x="30" y="105" width="80" height="32" rx="8" fill="#e67e22"/>
      <text x="70" y="120" text-anchor="middle" font-size="11" fill="white" font-weight="bold" font-family="sans-serif">🪲 솔수염</text>
      <text x="70" y="132" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif">하늘소 성충</text>
      <!-- 화살표 왼쪽 위 -->
      <path d="M90,105 Q90,60 130,55" stroke="#e67e22" stroke-width="2" fill="none" marker-end="url(#arrowO)"/>
      <text x="68" y="82" font-size="9" fill="#e67e22" font-family="sans-serif">우화</text>
      <text x="68" y="93" font-size="9" fill="#e67e22" font-family="sans-serif">탈출</text>
      <!-- 재선충 감염 표시 -->
      <text x="170" y="192" text-anchor="middle" font-size="10" fill="#8B4513" font-family="sans-serif">재선충이 매개충 몸속에 있다가 후식 시 전파!</text>
      <defs>
        <marker id="arrowO" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3Z" fill="#e67e22"/></marker>
        <marker id="arrowR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3Z" fill="#c0392b"/></marker>
      </defs>
    </svg>`,
    content: `<div class="theory-section"><h4>핵심 3가지만 기억하세요!</h4><ul><li>병원체: <strong>소나무재선충</strong> (Bursaphelenchus xylophilus)</li><li>매개충: <strong>솔수염하늘소</strong>, 북방수염하늘소</li><li>특징: 감염되면 <strong>당해 연도 내 급격히 고사</strong></li></ul></div>
    <div class="theory-section"><h4>증상</h4><ul><li>7~9월에 잎이 갑자기 시들고 적갈색으로 변함</li><li>수지(송진) 분비가 뚝 끊김</li><li>나무 전체가 빠르게 갈변 후 고사</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li>감염목 즉시 벌채 → 소각 또는 파쇄</li><li>예방 수간주사 (아바멕틴계 약제)</li><li>매개충 우화 시기(6~8월) 항공 방제</li></ul></div>`,
    relatedQuestions: ["q005", "q006"]
  },
  {
    id: "t004", level: "초급", subject: "수목해충학", topic: "해충 분류",
    title: "해충의 3가지 종류",
    summary: "식엽·흡즙·천공해충이 어떻게 다른지 기본 개념 잡기",
    keywords: ["식엽해충", "흡즙해충", "천공해충", "가해 방식"],
    illustration: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px">
      <rect width="340" height="200" fill="#fff9f0" rx="12"/>
      <!-- 식엽해충 -->
      <rect x="10" y="30" width="96" height="140" rx="10" fill="#27ae60" opacity="0.15"/>
      <text x="58" y="55" text-anchor="middle" font-size="28" font-family="sans-serif">🐛</text>
      <text x="58" y="78" text-anchor="middle" font-size="12" fill="#1a5c2e" font-weight="bold" font-family="sans-serif">식엽해충</text>
      <text x="58" y="96" text-anchor="middle" font-size="10" fill="#555" font-family="sans-serif">잎을 갉아 먹음</text>
      <text x="58" y="112" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">미국흰불나방</text>
      <text x="58" y="126" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">텐트나방</text>
      <text x="58" y="140" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">솔나방</text>
      <text x="58" y="160" text-anchor="middle" font-size="9" fill="#888" font-family="sans-serif">피해: 잎 소실</text>
      <!-- 흡즙해충 -->
      <rect x="122" y="30" width="96" height="140" rx="10" fill="#e67e22" opacity="0.15"/>
      <text x="170" y="55" text-anchor="middle" font-size="28" font-family="sans-serif">🦟</text>
      <text x="170" y="78" text-anchor="middle" font-size="12" fill="#8B4513" font-weight="bold" font-family="sans-serif">흡즙해충</text>
      <text x="170" y="96" text-anchor="middle" font-size="10" fill="#555" font-family="sans-serif">수액을 빨아먹음</text>
      <text x="170" y="112" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">솔껍질깍지벌레</text>
      <text x="170" y="126" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">진딧물</text>
      <text x="170" y="140" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">응애</text>
      <text x="170" y="160" text-anchor="middle" font-size="9" fill="#888" font-family="sans-serif">피해: 수세 약화</text>
      <!-- 천공해충 -->
      <rect x="234" y="30" width="96" height="140" rx="10" fill="#8e44ad" opacity="0.12"/>
      <text x="282" y="55" text-anchor="middle" font-size="28" font-family="sans-serif">🪲</text>
      <text x="282" y="78" text-anchor="middle" font-size="12" fill="#5b2c6f" font-weight="bold" font-family="sans-serif">천공해충</text>
      <text x="282" y="96" text-anchor="middle" font-size="10" fill="#555" font-family="sans-serif">줄기에 구멍을 뚫음</text>
      <text x="282" y="112" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">솔수염하늘소</text>
      <text x="282" y="126" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">광릉긴나무좀</text>
      <text x="282" y="140" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">버들바구미</text>
      <text x="282" y="160" text-anchor="middle" font-size="9" fill="#888" font-family="sans-serif">피해: 줄기 고사</text>
    </svg>`,
    content: `<div class="theory-section"><h4>식엽해충</h4><ul><li>잎을 갉아먹는 해충</li><li>대표: 미국흰불나방, 솔나방, 텐트나방</li><li>피해: 잎이 없어져 광합성 못 함 → 수세 약화</li></ul></div>
    <div class="theory-section"><h4>흡즙해충</h4><ul><li>구침(바늘 입)으로 수액을 빨아먹는 해충</li><li>대표: 깍지벌레류, 진딧물, 응애</li><li>피해: 잎 황화, 그을음병 유발, 수세 약화</li></ul></div>
    <div class="theory-section"><h4>천공해충</h4><ul><li>줄기나 가지에 구멍을 뚫고 목질부를 가해</li><li>대표: 솔수염하늘소, 하늘소류, 나무좀류</li><li>피해: 줄기 고사, 재선충 전파</li><li>발견이 어렵고 피해가 심각함</li></ul></div>`,
    relatedQuestions: ["q007", "q008"]
  },
  {
    id: "t005", level: "초급", subject: "수목해충학", topic: "식엽해충",
    title: "미국흰불나방",
    summary: "거미줄 망으로 잎을 싸고 집단 가해하는 대표 식엽해충",
    keywords: ["미국흰불나방", "거미줄 망", "집단 가해", "잡식성", "외래해충"],
    illustration: `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px">
      <rect width="320" height="180" fill="#f0f8f0" rx="12"/>
      <!-- 나뭇가지 -->
      <rect x="20" y="80" width="280" height="8" rx="4" fill="#8B4513"/>
      <!-- 잎들 -->
      <ellipse cx="80" cy="55" rx="28" ry="18" fill="#52b788"/>
      <ellipse cx="130" cy="48" rx="28" ry="18" fill="#52b788"/>
      <ellipse cx="180" cy="55" rx="28" ry="18" fill="#52b788"/>
      <ellipse cx="230" cy="48" rx="28" ry="18" fill="#52b788"/>
      <!-- 거미줄 망 (흰불나방 집) -->
      <ellipse cx="155" cy="58" rx="75" ry="35" fill="rgba(255,255,255,0.6)" stroke="white" stroke-width="1.5"/>
      <!-- 망 선들 -->
      <line x1="100" y1="35" x2="210" y2="80" stroke="white" stroke-width="0.8" opacity="0.7"/>
      <line x1="90" y1="60" x2="220" y2="55" stroke="white" stroke-width="0.8" opacity="0.7"/>
      <line x1="110" y1="80" x2="200" y2="35" stroke="white" stroke-width="0.8" opacity="0.7"/>
      <line x1="155" y1="25" x2="155" y2="90" stroke="white" stroke-width="0.8" opacity="0.7"/>
      <!-- 유충들 -->
      <text x="130" y="58" font-size="14" font-family="sans-serif">🐛🐛🐛</text>
      <!-- 라벨 -->
      <text x="160" y="118" text-anchor="middle" font-size="12" fill="#2d6a4f" font-weight="bold" font-family="sans-serif">거미줄 망으로 집단 가해</text>
      <text x="160" y="135" text-anchor="middle" font-size="10" fill="#555" font-family="sans-serif">1세대: 7월 / 2세대: 9월</text>
      <text x="160" y="150" text-anchor="middle" font-size="10" fill="#555" font-family="sans-serif">외래해충 (북미 원산)</text>
    </svg>`,
    content: `<div class="theory-section"><h4>핵심 특징</h4><ul><li><strong>거미줄 같은 망</strong>으로 잎을 싸고 집단으로 가해 → 쉽게 눈에 띔</li><li>북미 원산 외래해충</li><li>300여 종 활엽수를 가해하는 잡식성</li></ul></div>
    <div class="theory-section"><h4>생활사</h4><ul><li><strong>1년 2세대</strong>: 1세대(7월), 2세대(9월)</li><li>번데기로 수피 틈에서 월동</li><li>성충 산란 → 유충 집단 가해 → 번데기</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li>피해 가지 발견 즉시 제거·소각</li><li>유충 초기에 Bt제 등 살충제 살포</li><li>페로몬 트랩으로 성충 유인</li></ul></div>`,
    relatedQuestions: ["q009"]
  },
  {
    id: "t006", level: "초급", subject: "수목생리학", topic: "광합성",
    title: "광합성 기초",
    summary: "나무가 어떻게 스스로 양분을 만드는지 기본 원리 이해하기",
    keywords: ["광합성", "이산화탄소", "산소", "엽록소", "포도당"],
    illustration: `<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px">
      <rect width="320" height="190" fill="#f0faf3" rx="12"/>
      <!-- 태양 -->
      <circle cx="160" cy="35" r="22" fill="#f39c12"/>
      <text x="160" y="41" text-anchor="middle" font-size="20" font-family="sans-serif">☀️</text>
      <!-- 빛 에너지 화살표 -->
      <line x1="160" y1="57" x2="160" y2="80" stroke="#f39c12" stroke-width="2.5" marker-end="url(#sun)"/>
      <!-- 잎 -->
      <ellipse cx="160" cy="100" rx="55" ry="30" fill="#52b788"/>
      <text x="160" y="105" text-anchor="middle" font-size="11" fill="white" font-weight="bold" font-family="sans-serif">엽록체 (광합성)</text>
      <!-- CO2 입력 -->
      <text x="45" y="85" text-anchor="middle" font-size="13" font-family="sans-serif">CO₂</text>
      <text x="45" y="100" text-anchor="middle" font-size="10" fill="#555" font-family="sans-serif">이산화탄소</text>
      <line x1="85" y1="97" x2="105" y2="100" stroke="#555" stroke-width="2" marker-end="url(#gray)"/>
      <!-- H2O 입력 -->
      <text x="45" y="120" text-anchor="middle" font-size="13" font-family="sans-serif">H₂O</text>
      <text x="45" y="135" text-anchor="middle" font-size="10" fill="#555" font-family="sans-serif">물</text>
      <line x1="80" y1="120" x2="105" y2="110" stroke="#3498db" stroke-width="2" marker-end="url(#blue)"/>
      <!-- 출력 -->
      <line x1="215" y1="97" x2="240" y2="90" stroke="#27ae60" stroke-width="2" marker-end="url(#green)"/>
      <text x="268" y="85" text-anchor="middle" font-size="13" font-family="sans-serif">O₂</text>
      <text x="268" y="99" text-anchor="middle" font-size="10" fill="#555" font-family="sans-serif">산소</text>
      <line x1="215" y1="108" x2="240" y2="115" stroke="#e67e22" stroke-width="2" marker-end="url(#orange)"/>
      <text x="275" y="113" text-anchor="middle" font-size="10" font-family="sans-serif">포도당</text>
      <text x="275" y="126" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">(양분)</text>
      <!-- 공식 -->
      <text x="160" y="158" text-anchor="middle" font-size="11" fill="#2d6a4f" font-weight="bold" font-family="sans-serif">6CO₂ + 12H₂O + 빛 → 포도당 + 6O₂</text>
      <defs>
        <marker id="sun" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3Z" fill="#f39c12"/></marker>
        <marker id="gray" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3Z" fill="#555"/></marker>
        <marker id="blue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3Z" fill="#3498db"/></marker>
        <marker id="green" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3Z" fill="#27ae60"/></marker>
        <marker id="orange" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3Z" fill="#e67e22"/></marker>
      </defs>
    </svg>`,
    content: `<div class="theory-section"><h4>광합성이란?</h4><p>나무가 <strong>빛 에너지</strong>를 이용해 이산화탄소와 물로 포도당(양분)을 만드는 과정이에요.</p></div>
    <div class="theory-section"><h4>반응 공식</h4><p class="formula">6CO₂ + 12H₂O + 빛에너지 → 포도당(C₆H₁₂O₆) + 6O₂ + 6H₂O</p></div>
    <div class="theory-section"><h4>광합성이 잘 되려면?</h4><ul><li>빛이 충분해야 함 (광도)</li><li>이산화탄소 농도가 적당해야 함</li><li>온도가 적합해야 함 (너무 덥거나 추우면 감소)</li><li>수분이 충분해야 함</li></ul></div>
    <div class="theory-section"><h4>광합성 vs 호흡</h4><table class="compare-table"><tr><th>구분</th><th>광합성</th><th>호흡</th></tr><tr><td>장소</td><td>엽록체 (잎)</td><td>미토콘드리아 (전 세포)</td></tr><tr><td>시간</td><td>낮 (빛 있을 때)</td><td>24시간 항상</td></tr><tr><td>결과</td><td>양분 생산, O₂ 방출</td><td>에너지 생산, CO₂ 방출</td></tr></table></div>`,
    relatedQuestions: ["q010"]
  },
  {
    id: "t007", level: "초급", subject: "산림토양학", topic: "토양 기초",
    title: "토양 삼상 (고상·액상·기상)",
    summary: "토양이 3가지로 이루어진다는 기본 개념 - 비율도 함께 기억하기",
    keywords: ["토양삼상", "고상", "액상", "기상", "공극"],
    illustration: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px">
      <rect width="320" height="200" fill="#faf5e4" rx="12"/>
      <!-- 토양 단면 직사각형 -->
      <rect x="40" y="20" width="240" height="130" rx="6" fill="white" stroke="#ccc" stroke-width="1.5"/>
      <!-- 고상 50% -->
      <rect x="40" y="20" width="120" height="130" rx="0" fill="#8B6914" opacity="0.7"/>
      <rect x="40" y="20" width="6" height="130" rx="6 0 0 6" fill="#8B6914" opacity="0.7"/>
      <!-- 액상 25% -->
      <rect x="160" y="20" width="60" height="130" fill="#3498db" opacity="0.55"/>
      <!-- 기상 25% -->
      <rect x="220" y="20" width="60" height="130" fill="#87ceeb" opacity="0.6"/>
      <rect x="274" y="20" width="6" height="130" rx="0 6 6 0" fill="#87ceeb" opacity="0.6"/>
      <!-- 구분선 -->
      <line x1="160" y1="20" x2="160" y2="150" stroke="white" stroke-width="2"/>
      <line x1="220" y1="20" x2="220" y2="150" stroke="white" stroke-width="2"/>
      <!-- 라벨 -->
      <text x="100" y="82" text-anchor="middle" font-size="14" fill="white" font-weight="bold" font-family="sans-serif">고상</text>
      <text x="100" y="98" text-anchor="middle" font-size="20" font-weight="bold" fill="white" font-family="sans-serif">50%</text>
      <text x="100" y="114" text-anchor="middle" font-size="10" fill="white" font-family="sans-serif">무기물+유기물</text>
      <text x="190" y="82" text-anchor="middle" font-size="13" fill="white" font-weight="bold" font-family="sans-serif">액상</text>
      <text x="190" y="98" text-anchor="middle" font-size="17" font-weight="bold" fill="white" font-family="sans-serif">25%</text>
      <text x="190" y="114" text-anchor="middle" font-size="10" fill="white" font-family="sans-serif">토양수</text>
      <text x="250" y="82" text-anchor="middle" font-size="13" fill="#1a5276" font-weight="bold" font-family="sans-serif">기상</text>
      <text x="250" y="98" text-anchor="middle" font-size="17" font-weight="bold" fill="#1a5276" font-family="sans-serif">25%</text>
      <text x="250" y="114" text-anchor="middle" font-size="10" fill="#1a5276" font-family="sans-serif">토양공기</text>
      <!-- 하단 설명 -->
      <text x="160" y="172" text-anchor="middle" font-size="11" fill="#555" font-family="sans-serif">이상적인 토양 비율: 고상 50% / 액상+기상 각 25%</text>
      <text x="160" y="188" text-anchor="middle" font-size="10" fill="#888" font-family="sans-serif">액상+기상 공간 = 공극 (공극률 약 50%)</text>
    </svg>`,
    content: `<div class="theory-section"><h4>토양 삼상이란?</h4><p>토양은 <strong>3가지 상태</strong>가 섞여 있어요. 이 비율이 수목 생육에 큰 영향을 줘요.</p></div>
    <div class="theory-section"><h4>삼상 구성</h4><ul><li><strong>고상</strong> (약 50%): 토양 입자 = 무기물(모래·미사·점토) + 유기물</li><li><strong>액상</strong> (약 25%): 토양수 = 뿌리가 흡수하는 물</li><li><strong>기상</strong> (약 25%): 토양 공기 = 뿌리 호흡에 필요한 산소</li></ul></div>
    <div class="theory-section"><h4>왜 중요한가요?</h4><ul><li>액상이 너무 많으면 (과습) → 뿌리 호흡 불가 → 뿌리 썩음</li><li>기상이 너무 많으면 (건조) → 수분 부족</li><li>고상이 너무 많으면 (단단한 토양) → 뿌리 신장 어려움</li></ul></div>`,
    relatedQuestions: ["q011"]
  },

  // ═══════════════════════════════════════
  // 중급
  // ═══════════════════════════════════════
  {
    id: "t008", level: "중급", subject: "수목병리학", topic: "곰팡이병 비교",
    title: "헷갈리는 곰팡이병 3종 비교",
    summary: "흰가루병 vs 녹병 vs 그을음병 - 시험에 자주 나오는 비교 문제 완벽 정리",
    keywords: ["흰가루병", "녹병", "그을음병", "병징 비교", "발생 부위"],
    illustration: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px">
      <rect width="340" height="200" fill="#f8f8f8" rx="12"/>
      <!-- 흰가루병 잎 -->
      <ellipse cx="60" cy="80" rx="42" ry="55" fill="#52b788"/>
      <ellipse cx="52" cy="65" rx="15" ry="8" fill="white" opacity="0.9"/>
      <ellipse cx="68" cy="82" rx="18" ry="10" fill="white" opacity="0.85"/>
      <ellipse cx="55" cy="98" rx="13" ry="7" fill="white" opacity="0.8"/>
      <text x="60" y="150" text-anchor="middle" font-size="11" fill="#333" font-weight="bold" font-family="sans-serif">흰가루병</text>
      <text x="60" y="164" text-anchor="middle" font-size="9" fill="#666" font-family="sans-serif">흰색 분말</text>
      <text x="60" y="176" text-anchor="middle" font-size="9" fill="#666" font-family="sans-serif">잎 표면</text>
      <!-- 녹병 잎 -->
      <ellipse cx="170" cy="80" rx="42" ry="55" fill="#52b788"/>
      <!-- 뒷면 표현을 위해 뒤집힌 느낌 -->
      <ellipse cx="162" cy="90" rx="12" ry="7" fill="#e67e22" opacity="0.9"/>
      <ellipse cx="178" cy="75" rx="10" ry="6" fill="#e67e22" opacity="0.85"/>
      <ellipse cx="168" cy="108" rx="9" ry="5" fill="#e67e22" opacity="0.8"/>
      <ellipse cx="183" cy="95" rx="8" ry="5" fill="#d4ac0d" opacity="0.8"/>
      <text x="170" y="150" text-anchor="middle" font-size="11" fill="#333" font-weight="bold" font-family="sans-serif">녹병</text>
      <text x="170" y="164" text-anchor="middle" font-size="9" fill="#666" font-family="sans-serif">황색·녹슨색</text>
      <text x="170" y="176" text-anchor="middle" font-size="9" fill="#666" font-family="sans-serif">잎 뒷면 주로</text>
      <!-- 그을음병 잎 -->
      <ellipse cx="280" cy="80" rx="42" ry="55" fill="#52b788"/>
      <ellipse cx="275" cy="70" rx="20" ry="12" fill="#2c3e50" opacity="0.75"/>
      <ellipse cx="288" cy="90" rx="22" ry="13" fill="#2c3e50" opacity="0.7"/>
      <ellipse cx="272" cy="105" rx="18" ry="10" fill="#2c3e50" opacity="0.65"/>
      <text x="280" y="150" text-anchor="middle" font-size="11" fill="#333" font-weight="bold" font-family="sans-serif">그을음병</text>
      <text x="280" y="164" text-anchor="middle" font-size="9" fill="#666" font-family="sans-serif">검은 그을음</text>
      <text x="280" y="176" text-anchor="middle" font-size="9" fill="#666" font-family="sans-serif">잎 표면</text>
    </svg>`,
    content: `<div class="theory-section"><h4>3종 비교표 (시험 핵심!)</h4><table class="compare-table"><tr><th>구분</th><th>흰가루병</th><th>녹병</th><th>그을음병</th></tr><tr><td>병징 색</td><td>흰색 가루</td><td>황색·녹슨색</td><td>검은색</td></tr><tr><td>발생 부위</td><td>잎 표면</td><td>잎 뒷면 주로</td><td>잎 표면</td></tr><tr><td>병원균</td><td>자낭균</td><td>담자균</td><td>곰팡이</td></tr><tr><td>특이사항</td><td>건조할 때 발생</td><td>중간기주 필요</td><td>해충 배설물 기반</td></tr><tr><td>방제 약제</td><td>황제 살균제</td><td>만코제브</td><td>해충 방제 선행</td></tr></table></div>
    <div class="theory-section"><h4>그을음병 특이점</h4><p>그을음병은 직접 식물을 침해하기보다 진딧물·깍지벌레 등 흡즙해충의 <strong>배설물(감로)</strong>에 곰팡이가 자라는 거예요. 따라서 해충 방제가 먼저!</p></div>
    <div class="theory-section"><h4>녹병 특이점</h4><p>녹병균은 <strong>중간기주</strong>가 필요한 경우가 많아요. 예: 배나무 적성병은 향나무가 중간기주.</p></div>`,
    relatedQuestions: ["q012", "q013"]
  },
  {
    id: "t009", level: "중급", subject: "수목병리학", topic: "세균병",
    title: "불마름병 (화상병)",
    summary: "불에 탄 것처럼 가지가 검게 말라 죽는 장미과 수목의 세균병",
    keywords: ["불마름병", "화상병", "Erwinia amylovora", "장미과", "검역병"],
    illustration: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
      <rect width="300" height="180" fill="#fff5f5" rx="12"/>
      <!-- 나뭇가지 -->
      <line x1="50" y1="160" x2="150" y2="80" stroke="#8B4513" stroke-width="6" stroke-linecap="round"/>
      <line x1="150" y1="80" x2="220" y2="50" stroke="#8B4513" stroke-width="4" stroke-linecap="round"/>
      <line x1="150" y1="80" x2="200" y2="100" stroke="#8B4513" stroke-width="3" stroke-linecap="round"/>
      <!-- 정상 잎 (아래쪽) -->
      <ellipse cx="80" cy="130" rx="20" ry="12" fill="#52b788" transform="rotate(-30,80,130)"/>
      <ellipse cx="100" cy="148" rx="18" ry="11" fill="#52b788" transform="rotate(10,100,148)"/>
      <!-- 불마름 피해 잎/가지 (위쪽 - 검게 탄 것처럼) -->
      <ellipse cx="210" cy="45" rx="18" ry="10" fill="#2c3e50" transform="rotate(-15,210,45)"/>
      <ellipse cx="230" cy="58" rx="15" ry="9" fill="#4a235a" transform="rotate(20,230,58)"/>
      <ellipse cx="195" cy="65" rx="16" ry="9" fill="#2c3e50" transform="rotate(-5,195,65)"/>
      <!-- 구부러진 가지 끝 -->
      <path d="M220,50 Q245,42 248,55 Q250,65 238,68" stroke="#2c3e50" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- 경계선 화살표 -->
      <line x1="155" y1="85" x2="155" y2="115" stroke="#e74c3c" stroke-width="1.5" stroke-dasharray="4"/>
      <text x="160" y="102" font-size="9" fill="#e74c3c" font-family="sans-serif">← 병 진행</text>
      <!-- 라벨 -->
      <text x="80" y="30" font-size="11" fill="#27ae60" font-weight="bold" font-family="sans-serif">정상</text>
      <text x="218" y="25" font-size="11" fill="#e74c3c" font-weight="bold" font-family="sans-serif">불마름</text>
      <text x="150" y="170" text-anchor="middle" font-size="10" fill="#555" font-family="sans-serif">가지 끝이 갈고리처럼 구부러짐 (목동 지팡이)</text>
    </svg>`,
    content: `<div class="theory-section"><h4>핵심 정보</h4><ul><li>병원균: <strong>Erwinia amylovora</strong> (세균)</li><li>피해 수종: 사과나무, 배나무, 모과나무 등 <strong>장미과</strong></li><li><strong>법정 식물검역 대상</strong> 병해 (발견 즉시 신고!)</li></ul></div>
    <div class="theory-section"><h4>병징</h4><ul><li>꽃·잎·어린 가지가 불에 탄 것처럼 검게 마름</li><li>가지 끝이 <strong>갈고리(목동 지팡이) 모양</strong>으로 구부러짐 → 시험 포인트!</li><li>습한 날씨에 세균 점액 분비</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li>감염 가지를 건전부 30cm 아래까지 절단</li><li>전정 도구 소독 필수 (70% 알코올)</li><li>옥시테트라사이클린 등 항생제 살포</li></ul></div>`,
    relatedQuestions: ["q014"]
  },
  {
    id: "t010", level: "중급", subject: "수목병리학", topic: "뿌리병",
    title: "뿌리혹병 (근두암종병)",
    summary: "뿌리와 지제부에 혹이 생기는 세균병 - 병원균 이름과 원리 함께 기억하기",
    keywords: ["근두암종병", "Agrobacterium", "Ti 플라스미드", "혹", "장미"],
    illustration: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
      <rect width="300" height="180" fill="#faf5e4" rx="12"/>
      <!-- 지면 -->
      <rect x="0" y="105" width="300" height="75" rx="0 0 12 12" fill="#c8a96e" opacity="0.4"/>
      <line x1="0" y1="105" x2="300" y2="105" stroke="#8B6914" stroke-width="2"/>
      <!-- 줄기 -->
      <rect x="138" y="20" width="24" height="90" rx="6" fill="#8B4513"/>
      <!-- 잎 -->
      <ellipse cx="100" cy="40" rx="30" ry="15" fill="#52b788" transform="rotate(-20,100,40)"/>
      <ellipse cx="200" cy="50" rx="30" ry="15" fill="#52b788" transform="rotate(15,200,50)"/>
      <ellipse cx="150" cy="25" rx="22" ry="12" fill="#74c69d"/>
      <!-- 뿌리 -->
      <path d="M150,107 Q130,130 115,150" stroke="#6b3a2a" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M150,107 Q170,125 180,150" stroke="#6b3a2a" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M150,107 Q145,135 140,155" stroke="#6b3a2a" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- 혹들 -->
      <circle cx="148" cy="108" r="14" fill="#8B4513" opacity="0.7"/>
      <circle cx="140" cy="102" r="10" fill="#6b3a2a" opacity="0.8"/>
      <circle cx="158" cy="105" r="9" fill="#7d3c2b" opacity="0.75"/>
      <circle cx="118" cy="132" r="8" fill="#7d3c2b" opacity="0.7"/>
      <!-- 라벨 -->
      <text x="185" y="112" font-size="10" fill="#c0392b" font-weight="bold" font-family="sans-serif">← 혹(암종)</text>
      <text x="150" y="175" text-anchor="middle" font-size="10" fill="#555" font-family="sans-serif">뿌리·지제부에 불규칙한 혹 형성</text>
    </svg>`,
    content: `<div class="theory-section"><h4>핵심 정보</h4><ul><li>병원균: <strong>Agrobacterium tumefaciens</strong> (세균)</li><li>발생 부위: 뿌리, 지제부, 줄기</li><li>병징: 불규칙한 <strong>혹(암종)</strong> 형성</li></ul></div>
    <div class="theory-section"><h4>발병 원리</h4><p>세균이 <strong>Ti 플라스미드</strong>를 식물 세포에 주입 → 세포 이상 증식 → 혹 형성</p><p>이 원리는 유전공학 연구에도 활용돼요!</p></div>
    <div class="theory-section"><h4>방제</h4><ul><li>건전 묘목 사용 (감염 묘목 반입 금지)</li><li>토양 소독</li><li><em>Agrobacterium radiobacter</em> K84 균주 이용한 생물적 방제</li></ul></div>`,
    relatedQuestions: ["q015"]
  },
  {
    id: "t011", level: "중급", subject: "수목해충학", topic: "흡즙해충",
    title: "솔껍질깍지벌레",
    summary: "소나무 수피 밑에서 수액을 빨아먹는 깍지벌레 - 방제 시기가 핵심!",
    keywords: ["솔껍질깍지벌레", "흡즙", "수피", "소나무", "약충"],
    illustration: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
      <rect width="300" height="180" fill="#f5f0e8" rx="12"/>
      <!-- 소나무 줄기 단면 -->
      <rect x="80" y="20" width="140" height="140" rx="8" fill="#8B4513"/>
      <!-- 수피 -->
      <rect x="80" y="20" width="30" height="140" rx="8 0 0 8" fill="#6b3a2a"/>
      <rect x="190" y="20" width="30" height="140" rx="0 8 8 0" fill="#6b3a2a"/>
      <!-- 수피 무늬 -->
      <rect x="82" y="35" width="26" height="4" rx="2" fill="#7d4a3a" opacity="0.5"/>
      <rect x="82" y="55" width="26" height="4" rx="2" fill="#7d4a3a" opacity="0.5"/>
      <rect x="82" y="75" width="26" height="4" rx="2" fill="#7d4a3a" opacity="0.5"/>
      <!-- 목질부 -->
      <text x="150" y="95" text-anchor="middle" font-size="11" fill="white" font-family="sans-serif" opacity="0.8">목질부</text>
      <!-- 깍지벌레들 (수피 안쪽) -->
      <ellipse cx="95" cy="50" rx="8" ry="5" fill="#d4a017" opacity="0.9"/>
      <ellipse cx="95" cy="70" rx="7" ry="4" fill="#d4a017" opacity="0.85"/>
      <ellipse cx="95" cy="90" rx="8" ry="5" fill="#d4a017" opacity="0.9"/>
      <ellipse cx="95" cy="110" rx="6" ry="4" fill="#d4a017" opacity="0.8"/>
      <!-- 흰색 분비물 -->
      <ellipse cx="82" cy="50" rx="5" ry="3" fill="white" opacity="0.8"/>
      <ellipse cx="82" cy="70" rx="4" ry="3" fill="white" opacity="0.75"/>
      <ellipse cx="82" cy="90" rx="5" ry="3" fill="white" opacity="0.8"/>
      <!-- 라벨 -->
      <text x="30" y="58" font-size="9" fill="#d4a017" font-weight="bold" font-family="sans-serif">깍지벌레</text>
      <text x="30" y="70" font-size="9" fill="#555" font-family="sans-serif">수피 아래</text>
      <text x="150" y="170" text-anchor="middle" font-size="10" fill="#555" font-family="sans-serif">수피 밑에서 수액 흡즙 → 수세 약화</text>
    </svg>`,
    content: `<div class="theory-section"><h4>기본 정보</h4><ul><li>가해 수종: 소나무, 해송 등 소나무류</li><li>피해: 수피 밑에서 수액 흡즙 → 수세 약화 → 고사</li><li>외부에서 흰색 분비물로 확인 가능</li></ul></div>
    <div class="theory-section"><h4>생활사</h4><ul><li>1년 1세대</li><li>약충으로 월동 → 봄에 이동 → 여름 성충 → 산란</li></ul></div>
    <div class="theory-section"><h4>방제 (시기가 핵심!)</h4><ul><li><strong>4~5월 약충 이동 시기</strong>에 살충제 살포 (이 시기 놓치면 수피 속으로 들어가 방제 어려움)</li><li>수간주사: 이미다클로프리드</li><li>천적: 기생봉 이용 생물적 방제</li></ul></div>`,
    relatedQuestions: ["q016"]
  },
  {
    id: "t012", level: "중급", subject: "수목해충학", topic: "천공해충",
    title: "솔수염하늘소 (재선충 매개충)",
    summary: "소나무재선충을 전파하는 핵심 매개충 - 생활사와 전파 메커니즘 완벽 이해",
    keywords: ["솔수염하늘소", "재선충 매개", "후식", "우화", "6~8월"],
    content: `<div class="theory-section"><h4>핵심 역할</h4><p><strong>소나무재선충의 주요 매개충</strong>이에요. 재선충이 이 곤충을 통해서만 건강한 나무에 전파돼요.</p></div>
    <div class="theory-section"><h4>재선충 전파 메커니즘</h4><ol style="padding-left:18px;font-size:14px;line-height:2;color:#40514e"><li>고사목에서 번데기로 있을 때 재선충이 몸속으로 침입</li><li>6~8월 성충으로 우화(탈출)</li><li>건강한 소나무 신초를 갉아먹는 <strong>후식</strong> 행동 시 재선충 전파</li><li>재선충 감염 → 소나무 고사</li><li>고사목에 산란 → 유충이 목질부 가해 → 번데기</li></ol></div>
    <div class="theory-section"><h4>생활사 (시험 포인트)</h4><table class="compare-table"><tr><th>시기</th><th>상태</th><th>행동</th></tr><tr><td>가을~봄</td><td>유충</td><td>목질부 내부 가해</td></tr><tr><td>봄~여름</td><td>번데기</td><td>재선충 침입</td></tr><tr><td>6~8월</td><td>성충</td><td>우화·후식·전파</td></tr></table></div>
    <div class="theory-section"><h4>방제</h4><ul><li>6~8월 성충 우화 시기 항공·지상 약제 살포</li><li>감염목 즉시 벌채 (성충 탈출 전)</li><li>페로몬 트랩 설치</li></ul></div>`,
    relatedQuestions: ["q017"]
  },
  {
    id: "t013", level: "중급", subject: "수목생리학", topic: "수분생리",
    title: "수분 이동과 증산작용",
    summary: "뿌리에서 잎까지 물이 올라가는 원리와 기공의 역할",
    keywords: ["증산작용", "삼투압", "수분퍼텐셜", "응집력-장력설", "기공"],
    illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
      <rect width="300" height="200" fill="#e8f4fd" rx="12"/>
      <!-- 나무 전체 -->
      <!-- 잎 -->
      <ellipse cx="150" cy="40" rx="50" ry="30" fill="#52b788"/>
      <!-- 줄기 -->
      <rect x="138" y="68" width="24" height="80" rx="4" fill="#8B4513"/>
      <!-- 뿌리 -->
      <path d="M150,148 Q125,165 110,185" stroke="#6b3a2a" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M150,148 Q175,165 190,185" stroke="#6b3a2a" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M150,148 Q148,170 147,188" stroke="#6b3a2a" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- 물 이동 화살표 (파란색, 위로) -->
      <line x1="145" y1="185" x2="145" y2="75" stroke="#3498db" stroke-width="2.5" marker-end="url(#blueUp)" stroke-dasharray="6,3"/>
      <!-- 증산 화살표 (잎에서 대기로) -->
      <line x1="175" y1="35" x2="200" y2="15" stroke="#87ceeb" stroke-width="2" marker-end="url(#skyBlue)"/>
      <line x1="185" y1="40" x2="215" y2="28" stroke="#87ceeb" stroke-width="2" marker-end="url(#skyBlue)"/>
      <!-- 토양수 흡수 -->
      <text x="100" y="190" font-size="10" fill="#3498db" font-family="sans-serif">토양수</text>
      <text x="200" y="15" font-size="10" fill="#5dade2" font-family="sans-serif">증산</text>
      <text x="155" y="120" font-size="9" fill="#2471a3" font-weight="bold" font-family="sans-serif">물관</text>
      <text x="155" y="132" font-size="9" fill="#2471a3" font-family="sans-serif">(도관)</text>
      <defs>
        <marker id="blueUp" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto"><path d="M0,6 L4,0 L8,6Z" fill="#3498db"/></marker>
        <marker id="skyBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3Z" fill="#87ceeb"/></marker>
      </defs>
      <text x="150" y="175" text-anchor="middle" font-size="0" fill="none"/>
    </svg>`,
    content: `<div class="theory-section"><h4>수분 이동 경로</h4><p>토양수 → 뿌리털 → 피층 → 내피 → 물관 → 줄기 물관 → 잎 → 기공 → 대기</p></div>
    <div class="theory-section"><h4>응집력-장력설 (주요 이론)</h4><ul><li>잎에서 증산이 일어나면 물이 부족해짐</li><li>물 분자들의 응집력(수소결합)으로 아래 물이 함께 당겨 올라옴</li><li>즉 증산이 물을 끌어올리는 엔진 역할!</li></ul></div>
    <div class="theory-section"><h4>증산에 영향하는 요인</h4><table class="compare-table"><tr><th>요인</th><th>증가 조건</th></tr><tr><td>온도</td><td>높을수록 증산 증가</td></tr><tr><td>습도</td><td>낮을수록 증산 증가</td></tr><tr><td>바람</td><td>강할수록 증산 증가</td></tr><tr><td>광도</td><td>강할수록 기공 열림 → 증가</td></tr></table></div>`,
    relatedQuestions: []
  },
  {
    id: "t014", level: "중급", subject: "산림토양학", topic: "토양 화학성",
    title: "토양 pH와 영양소",
    summary: "토양 산도에 따른 영양소 가용성 변화와 결핍 증상",
    keywords: ["pH", "산성 토양", "알칼리성", "질소", "인산", "칼륨", "결핍"],
    content: `<div class="theory-section"><h4>수목 적합 pH</h4><ul><li>대부분 수목: <strong>pH 5.5~6.5</strong> 적합</li><li>산성 강하면 (pH 4 이하): Al, Mn 독성 증가</li><li>알칼리성: Fe, Mn, Cu, Zn 불용화 → 결핍</li></ul></div>
    <div class="theory-section"><h4>3대 필수 영양소 (NPK)</h4><table class="compare-table"><tr><th>원소</th><th>역할</th><th>결핍 증상</th><th>특징</th></tr><tr><td>질소 (N)</td><td>단백질·엽록소 합성</td><td>잎 황화 (하위엽부터)</td><td>이동성 높음</td></tr><tr><td>인산 (P)</td><td>에너지 대사·뿌리</td><td>자색~적자색 (하위엽)</td><td>이동성 보통</td></tr><tr><td>칼륨 (K)</td><td>삼투조절·효소</td><td>잎 가장자리 황화·갈변</td><td>이동성 높음</td></tr></table></div>
    <div class="theory-section"><h4>미량원소 결핍 증상</h4><ul><li>철 (Fe): 신엽(어린잎)부터 황화 → pH 높을 때 주로 발생</li><li>마그네슘 (Mg): 잎맥 사이 황화, 오래된 잎부터</li><li>칼슘 (Ca): 신엽 끝부터 갈변</li></ul></div>`,
    relatedQuestions: ["q018"]
  },
  {
    id: "t015", level: "중급", subject: "수목관리학", topic: "이식",
    title: "수목 이식 방법",
    summary: "뿌리돌림부터 식재 후 관리까지 이식의 전 과정",
    keywords: ["이식", "뿌리돌림", "굴취", "뿌리분", "활착"],
    content: `<div class="theory-section"><h4>이식 순서</h4><p>뿌리돌림 → 굴취 → 운반 → 식재 → 사후관리</p></div>
    <div class="theory-section"><h4>뿌리돌림</h4><ul><li>이식 <strong>1~3년 전</strong> 실시</li><li>목적: 세근(잔뿌리) 발달 유도</li><li>굵은 뿌리는 절단, 가는 뿌리는 보존</li></ul></div>
    <div class="theory-section"><h4>뿌리분 크기</h4><p>직경 = 근원직경의 <strong>4~6배</strong></p></div>
    <div class="theory-section"><h4>적정 이식 시기</h4><table class="compare-table"><tr><th>시기</th><th>평가</th><th>이유</th></tr><tr><td>이른 봄 (새잎 전)</td><td>최적</td><td>저장 양분 풍부, 증산 적음</td></tr><tr><td>가을 (낙엽 후)</td><td>양호</td><td>휴면 상태, 뿌리 성장 가능</td></tr><tr><td>장마철</td><td>상록수 가능</td><td>습도 높아 증산 억제</td></tr><tr><td>한여름·한겨울</td><td>피해야 함</td><td>증산 과다 or 동해 위험</td></tr></table></div>`,
    relatedQuestions: ["q019"]
  },

  // ═══════════════════════════════════════
  // 고급
  // ═══════════════════════════════════════
  {
    id: "t016", level: "고급", subject: "수목병리학", topic: "유사 병징 감별",
    title: "유사 병징 감별법 (종합)",
    summary: "시험에서 헷갈리는 병징들을 정확히 구분하는 고급 감별 포인트",
    keywords: ["유사 병징", "감별", "진단 포인트", "비교"],
    content: `<div class="theory-section"><h4>잎에 반점이 생기는 병 비교</h4><table class="compare-table"><tr><th>병명</th><th>반점 색</th><th>위치</th><th>핵심 키워드</th></tr><tr><td>흰가루병</td><td>흰색 분말</td><td>잎 표면</td><td>건조, 자낭균</td></tr><tr><td>녹병</td><td>황색~녹슨색</td><td>잎 뒷면 주로</td><td>중간기주, 담자균</td></tr><tr><td>그을음병</td><td>검은색</td><td>잎 표면</td><td>해충 배설물</td></tr><tr><td>점무늬병류</td><td>갈색~황갈색</td><td>잎 어디든</td><td>황색 운무, 낙엽</td></tr><tr><td>탄저병</td><td>갈색, 동심원</td><td>잎 끝·가장자리</td><td>동심원, 고온다습</td></tr></table></div>
    <div class="theory-section"><h4>줄기/가지 피해 비교</h4><table class="compare-table"><tr><th>증상</th><th>병명/원인</th><th>핵심</th></tr><tr><td>가지가 불에 탄 듯 검게 마름</td><td>불마름병</td><td>세균, 장미과</td></tr><tr><td>수피에 수지 흘러내림</td><td>수지병·피목지의고병</td><td>곰팡이</td></tr><tr><td>줄기에 흰 분비물</td><td>깍지벌레 피해</td><td>해충</td></tr><tr><td>줄기 구멍+톱밥</td><td>천공해충 피해</td><td>하늘소류</td></tr></table></div>
    <div class="theory-section"><h4>뿌리 피해 비교</h4><table class="compare-table"><tr><th>증상</th><th>원인</th></tr><tr><td>뿌리에 혹 형성</td><td>뿌리혹병 (세균)</td></tr><tr><td>뿌리 썩음, 흰 균사</td><td>리지나뿌리썩음병 (곰팡이)</td></tr><tr><td>뿌리 피층 썩음</td><td>역병 (Phytophthora)</td></tr></table></div>`,
    relatedQuestions: ["q020", "q021"]
  },
  {
    id: "t017", level: "고급", subject: "수목생리학", topic: "광합성 심화",
    title: "양수와 음수의 광합성 특성",
    summary: "광보상점·광포화점으로 양수와 음수를 구분하고 생태적 의미 이해하기",
    keywords: ["광보상점", "광포화점", "양수", "음수", "광합성 효율"],
    illustration: `<svg viewBox="0 0 340 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px">
      <rect width="340" height="210" fill="#f0faf3" rx="12"/>
      <text x="170" y="20" text-anchor="middle" font-size="12" fill="#2d6a4f" font-weight="bold" font-family="sans-serif">광합성-광도 반응 곡선</text>
      <!-- 축 -->
      <line x1="40" y1="165" x2="310" y2="165" stroke="#333" stroke-width="1.5"/>
      <line x1="40" y1="20" x2="40" y2="165" stroke="#333" stroke-width="1.5"/>
      <!-- 축 라벨 -->
      <text x="175" y="185" text-anchor="middle" font-size="10" fill="#555" font-family="sans-serif">광도 →</text>
      <text x="15" y="100" font-size="10" fill="#555" font-family="sans-serif" transform="rotate(-90,15,100)">순광합성량 →</text>
      <!-- 호흡량 선 -->
      <line x1="40" y1="148" x2="310" y2="148" stroke="#999" stroke-width="1" stroke-dasharray="4"/>
      <text x="315" y="151" font-size="9" fill="#999" font-family="sans-serif">호흡량</text>
      <!-- 음수 곡선 (초록, 먼저 포화) -->
      <path d="M40,148 Q80,90 120,62 Q160,48 200,45 Q240,44 310,43" stroke="#52b788" stroke-width="2.5" fill="none"/>
      <!-- 양수 곡선 (진초록, 나중에 포화) -->
      <path d="M40,148 Q100,120 150,90 Q210,58 260,42 Q290,35 310,33" stroke="#2d6a4f" stroke-width="2.5" fill="none"/>
      <!-- 음수 광보상점 -->
      <line x1="72" y1="165" x2="72" y2="148" stroke="#52b788" stroke-width="1.5" stroke-dasharray="3"/>
      <text x="72" y="175" text-anchor="middle" font-size="9" fill="#52b788" font-family="sans-serif">음수</text>
      <text x="72" y="185" text-anchor="middle" font-size="8" fill="#52b788" font-family="sans-serif">보상점</text>
      <!-- 양수 광보상점 -->
      <line x1="108" y1="165" x2="108" y2="148" stroke="#2d6a4f" stroke-width="1.5" stroke-dasharray="3"/>
      <text x="108" y="175" text-anchor="middle" font-size="9" fill="#2d6a4f" font-family="sans-serif">양수</text>
      <text x="108" y="185" text-anchor="middle" font-size="8" fill="#2d6a4f" font-family="sans-serif">보상점</text>
      <!-- 범례 -->
      <line x1="170" y1="195" x2="195" y2="195" stroke="#52b788" stroke-width="2.5"/>
      <text x="198" y="198" font-size="9" fill="#52b788" font-family="sans-serif">음수</text>
      <line x1="230" y1="195" x2="255" y2="195" stroke="#2d6a4f" stroke-width="2.5"/>
      <text x="258" y="198" font-size="9" fill="#2d6a4f" font-family="sans-serif">양수</text>
    </svg>`,
    content: `<div class="theory-section"><h4>핵심 개념 정의</h4><ul><li><strong>광보상점</strong>: 광합성량 = 호흡량인 광도 → 이 이상이어야 성장 가능</li><li><strong>광포화점</strong>: 이 이상 빛이 강해져도 광합성 증가 안 되는 광도</li></ul></div>
    <div class="theory-section"><h4>양수 vs 음수 비교</h4><table class="compare-table"><tr><th>구분</th><th>양수</th><th>음수</th></tr><tr><td>광보상점</td><td>높음</td><td>낮음</td></tr><tr><td>광포화점</td><td>높음</td><td>낮음</td></tr><tr><td>약한 빛에서</td><td>생장 어려움</td><td>생장 가능</td></tr><tr><td>강한 빛에서</td><td>왕성한 생장</td><td>광 저해 가능</td></tr><tr><td>대표 수종</td><td>소나무, 은행나무, 자작나무, 낙엽송</td><td>전나무, 주목, 비자나무, 가문비나무</td></tr></table></div>
    <div class="theory-section"><h4>생태적 의미</h4><ul><li>음수는 숲 속 그늘에서도 생존 가능 → 천이 후기 종</li><li>양수는 햇빛이 잘 드는 공간에서 빠르게 성장 → 천이 초기 종</li></ul></div>`,
    relatedQuestions: ["q022"]
  },
  {
    id: "t018", level: "고급", subject: "수목관리학", topic: "전정",
    title: "전정의 종류와 시기 (심화)",
    summary: "전정 방법별 차이와 수종별 적정 시기 - 고급 문제 대비",
    keywords: ["솎음 전정", "절단 전정", "강전정", "낙엽수", "상록수", "개화 수종"],
    content: `<div class="theory-section"><h4>전정 방법 비교</h4><table class="compare-table"><tr><th>방법</th><th>내용</th><th>효과</th><th>주의</th></tr><tr><td>솎음 전정</td><td>분기점에서 통째로 제거</td><td>자연스러운 수형 유지</td><td>큰 상처 남음</td></tr><tr><td>절단 전정</td><td>가지 중간을 자름</td><td>도장지 발생 촉진</td><td>도장지 처리 필요</td></tr><tr><td>강전정</td><td>굵은 가지까지 대폭 제거</td><td>수형 재구성</td><td>수세 약한 나무엔 금물</td></tr></table></div>
    <div class="theory-section"><h4>수종별 전정 시기</h4><table class="compare-table"><tr><th>구분</th><th>적기</th><th>이유</th></tr><tr><td>낙엽수 일반</td><td>낙엽 후~이른 봄</td><td>저장 양분 유지, 수형 확인 용이</td></tr><tr><td>개화 수종 (봄꽃)</td><td>꽃 진 직후</td><td>이듬해 꽃눈 보호</td></tr><tr><td>상록수</td><td>6월 신초 후, 또는 가을</td><td>생장 안정 시기</td></tr><tr><td>수액 이동 왕성기</td><td>피해야 함</td><td>과다 수액 손실</td></tr></table></div>
    <div class="theory-section"><h4>전정 상처 처리</h4><ul><li>굵은 가지 절단 후 도포제 처리 (병원균 침입 방지)</li><li>절단면은 수직보다 약간 경사지게 (빗물 배수)</li><li>전정 도구 소독 필수 (불마름병 등 전파 방지)</li></ul></div>`,
    relatedQuestions: ["q023"]
  },
  {
    id: "t019", level: "고급", subject: "산림토양학", topic: "토양 물리성",
    title: "토양 입자와 토성 (심화)",
    summary: "토양 입자 크기 기준과 토성에 따른 수목 생육 특성 차이",
    keywords: ["토성", "모래", "미사", "점토", "양토", "사양토", "공극률"],
    content: `<div class="theory-section"><h4>토양 입자 크기 (국제기준 암기!)</h4><table class="compare-table"><tr><th>구분</th><th>직경</th><th>특성</th></tr><tr><td>자갈</td><td>2mm 이상</td><td>공극 큼, 보수력 낮음</td></tr><tr><td>모래 (조~세)</td><td>0.02~2mm</td><td>배수 좋음, 보비력 낮음</td></tr><tr><td>미사 (실트)</td><td>0.002~0.02mm</td><td>중간 특성</td></tr><tr><td>점토</td><td>0.002mm 이하</td><td>보수·보비력 높음, 배수 나쁨</td></tr></table></div>
    <div class="theory-section"><h4>토성과 수목 생육</h4><table class="compare-table"><tr><th>토성</th><th>특성</th><th>수목 생육</th></tr><tr><td>사토(모래 많음)</td><td>배수 극히 양호, 보수력 낮음</td><td>건조 피해 우려</td></tr><tr><td>양토·사양토</td><td>균형잡힌 물리성</td><td>최적</td></tr><tr><td>식토(점토 많음)</td><td>배수 불량, 보수력 과다</td><td>뿌리 호흡 장해</td></tr></table></div>
    <div class="theory-section"><h4>이상적 산림 토양</h4><ul><li>토성: 양토~사양토</li><li>공극률: 50% 이상</li><li>pH: 5.5~6.5</li><li>유기물: 풍부 (부식층 발달)</li><li>배수: 양호하면서도 적당한 보수력</li></ul></div>`,
    relatedQuestions: ["q024"]
  },
  {
    id: "t020", level: "고급", subject: "수목관리학", topic: "수목 진단",
    title: "수목 진단 절차와 방제 전략",
    summary: "현장에서 수목 피해를 진단하는 체계적 절차와 방제 방법 선택 기준",
    keywords: ["수목 진단", "병력 조사", "생물적 방제", "화학적 방제", "물리적 방제"],
    content: `<div class="theory-section"><h4>수목 진단 절차</h4><ol style="padding-left:18px;font-size:14px;line-height:2;color:#40514e"><li><strong>문진</strong>: 언제부터, 어떤 변화가 있었나 (병력 조사)</li><li><strong>육안 진단</strong>: 전체적 수형·색깔·잎 상태 관찰</li><li><strong>상세 관찰</strong>: 병징·충해 흔적 확인 (루페 활용)</li><li><strong>토양 조사</strong>: pH, 배수, 뿌리 상태 확인</li><li><strong>실험실 진단</strong>: 병원균 분리 동정, PCR 검사</li><li><strong>방제 계획 수립</strong></li></ol></div>
    <div class="theory-section"><h4>방제 방법 비교</h4><table class="compare-table"><tr><th>방제법</th><th>내용</th><th>장점</th><th>단점</th></tr><tr><td>화학적 방제</td><td>살균·살충제 살포</td><td>빠른 효과, 광범위</td><td>저항성, 환경오염</td></tr><tr><td>생물적 방제</td><td>천적·미생물 이용</td><td>친환경, 지속성</td><td>효과 느림, 조건 까다로움</td></tr><tr><td>물리적 방제</td><td>포살·차단·열처리</td><td>약제 불필요</td><td>대규모 적용 어려움</td></tr><tr><td>임업적 방제</td><td>건강한 숲 조성</td><td>근본적 예방</td><td>장기간 필요</td></tr></table></div>
    <div class="theory-section"><h4>IPM (종합적 병해충 관리)</h4><p>여러 방제 방법을 통합하여 경제적 피해 수준 이하로 병해충을 관리하는 현대적 접근법. 화학적 방제는 최후 수단으로 사용.</p></div>`,
    relatedQuestions: ["q025"]
  }
];
