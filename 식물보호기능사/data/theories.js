const THEORIES = [
  // ═══════════════════════════════════════
  // 초급
  // ═══════════════════════════════════════
  {
    id: "t001", level: "초급", subject: "식물병리학", topic: "병의 기초",
    title: "식물병이란? (기초)",
    summary: "식물이 왜 병에 걸리는지, 어떤 종류가 있는지 기본 개념 잡기",
    keywords: ["식물병", "병원체", "병삼각형", "전염성", "비전염성"],
    illustration: `<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px">
      <rect width="340" height="190" fill="#fffbeb" rx="12"/>
      <circle cx="170" cy="88" r="38" fill="#d97706"/>
      <text x="170" y="84" text-anchor="middle" font-size="12" fill="white" font-weight="bold" font-family="sans-serif">식물병</text>
      <text x="170" y="100" text-anchor="middle" font-size="10" fill="white" font-family="sans-serif">3요소</text>
      <circle cx="62" cy="60" r="30" fill="#059669"/>
      <text x="62" y="56" text-anchor="middle" font-size="11" fill="white" font-weight="bold" font-family="sans-serif">기주</text>
      <text x="62" y="70" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif">식물</text>
      <circle cx="278" cy="60" r="30" fill="#dc2626"/>
      <text x="278" y="56" text-anchor="middle" font-size="11" fill="white" font-weight="bold" font-family="sans-serif">병원체</text>
      <text x="278" y="70" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif">균·세균 등</text>
      <circle cx="170" cy="155" r="30" fill="#2563eb"/>
      <text x="170" y="151" text-anchor="middle" font-size="11" fill="white" font-weight="bold" font-family="sans-serif">환경</text>
      <text x="170" y="165" text-anchor="middle" font-size="9" fill="white" font-family="sans-serif">온·습도 등</text>
      <line x1="90" y1="72" x2="132" y2="82" stroke="#999" stroke-width="1.5"/>
      <line x1="248" y1="72" x2="208" y2="82" stroke="#999" stroke-width="1.5"/>
      <line x1="170" y1="126" x2="170" y2="112" stroke="#999" stroke-width="1.5"/>
    </svg>`,
    content: `<div class="theory-section"><h4>식물병 3요소 (병삼각형)</h4><ul><li><strong>기주</strong>: 병에 걸리는 식물</li><li><strong>병원체</strong>: 곰팡이, 세균, 바이러스, 선충 등</li><li><strong>환경</strong>: 온도, 습도, 바람 등 발병 조건</li></ul><p>세 가지가 동시에 맞아야 병이 생겨요!</p></div>
    <div class="theory-section"><h4>전염성 병 vs 비전염성 병</h4><table class="compare-table"><tr><th>구분</th><th>전염성 병</th><th>비전염성 병</th></tr><tr><td>원인</td><td>병원체 (곰팡이, 세균 등)</td><td>환경, 영양, 물리적 요인</td></tr><tr><td>전파</td><td>다른 식물로 전파 가능</td><td>전파 안 됨</td></tr><tr><td>예시</td><td>역병, 탄저병, 흰가루병</td><td>동해, 가뭄, 영양 결핍</td></tr></table></div>`,
    relatedQuestions: ["q001", "q002"]
  },
  {
    id: "t002", level: "초급", subject: "식물병리학", topic: "곰팡이병",
    title: "역병 (Phytophthora)",
    summary: "채소류에서 가장 무서운 병 - 빠르게 번지는 물곰팡이병",
    keywords: ["역병", "Phytophthora", "물곰팡이", "고추", "토마토", "고온다습"],
    illustration: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
      <rect width="300" height="180" fill="#fff5f5" rx="12"/>
      <ellipse cx="80" cy="80" rx="50" ry="65" fill="#16a34a"/>
      <ellipse cx="72" cy="65" rx="22" ry="28" fill="#7f1d1d" opacity="0.85"/>
      <ellipse cx="88" cy="90" rx="25" ry="30" fill="#991b1b" opacity="0.8"/>
      <ellipse cx="68" cy="100" rx="18" ry="22" fill="#7f1d1d" opacity="0.75"/>
      <text x="80" y="162" text-anchor="middle" font-size="11" fill="#991b1b" font-weight="bold" font-family="sans-serif">잎·줄기 갈변·수침상</text>
      <rect x="170" y="20" width="110" height="148" rx="10" fill="#f0fdf4"/>
      <text x="225" y="42" text-anchor="middle" font-size="11" fill="#166534" font-weight="bold" font-family="sans-serif">발생 조건</text>
      <text x="178" y="62" font-size="10" fill="#555" font-family="sans-serif">🌡 고온 (25~30°C)</text>
      <text x="178" y="80" font-size="10" fill="#555" font-family="sans-serif">💧 다습 (장마철)</text>
      <text x="178" y="98" font-size="10" fill="#555" font-family="sans-serif">🌱 배수 불량</text>
      <text x="178" y="120" font-size="10" fill="#166534" font-weight="bold" font-family="sans-serif">주요 피해 작물</text>
      <text x="178" y="138" font-size="10" fill="#555" font-family="sans-serif">• 고추, 토마토</text>
      <text x="178" y="153" font-size="10" fill="#555" font-family="sans-serif">• 감자, 오이</text>
    </svg>`,
    content: `<div class="theory-section"><h4>한 줄 요약</h4><p>고온다습한 조건에서 <strong>빠르게 번지는</strong> 물곰팡이병. 채소 농가 최대 피해 병해.</p></div>
    <div class="theory-section"><h4>병원균</h4><p><strong>Phytophthora capsici</strong> (고추 역병 등) — 난균류(물곰팡이)</p></div>
    <div class="theory-section"><h4>병징</h4><ul><li>잎·줄기에 <strong>수침상(물에 젖은 듯한) 병반</strong> → 갈변·고사</li><li>과실은 급격히 썩음</li><li>지제부 줄기가 잘록해지며 쓰러짐 (입고병)</li></ul></div>
    <div class="theory-section"><h4>발생 조건</h4><ul><li>고온(25~30°C) + 다습 → 장마철 집중 발생</li><li>배수 불량 토양에서 심화</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li>배수 개선, 이랑 높이기</li><li>이병 식물 즉시 제거</li><li>메타락실·만코제브 등 살균제 살포</li><li>저항성 품종 사용</li></ul></div>`,
    relatedQuestions: ["q003", "q004"]
  },
  {
    id: "t003", level: "초급", subject: "식물병리학", topic: "곰팡이병",
    title: "탄저병",
    summary: "과실에 검은 동심원 무늬가 생기는 고온다습성 곰팡이병",
    keywords: ["탄저병", "Colletotrichum", "동심원", "과실", "고온다습"],
    illustration: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px">
      <rect width="280" height="170" fill="#fef9f0" rx="12"/>
      <ellipse cx="100" cy="85" rx="70" ry="65" fill="#ef4444" opacity="0.9"/>
      <ellipse cx="100" cy="85" rx="48" ry="44" fill="#dc2626"/>
      <ellipse cx="100" cy="85" rx="30" ry="28" fill="#991b1b"/>
      <ellipse cx="100" cy="85" rx="14" ry="13" fill="#7f1d1d"/>
      <text x="100" y="162" text-anchor="middle" font-size="11" fill="#7f1d1d" font-weight="bold" font-family="sans-serif">동심원 무늬 병반</text>
      <text x="210" y="40" text-anchor="middle" font-size="11" fill="#92400e" font-weight="bold" font-family="sans-serif">주요 피해</text>
      <text x="180" y="58" font-size="10" fill="#555" font-family="sans-serif">• 고추, 사과</text>
      <text x="180" y="74" font-size="10" fill="#555" font-family="sans-serif">• 포도, 딸기</text>
      <text x="180" y="90" font-size="10" fill="#555" font-family="sans-serif">• 수박, 참외</text>
      <text x="210" y="115" text-anchor="middle" font-size="11" fill="#92400e" font-weight="bold" font-family="sans-serif">핵심 특징</text>
      <text x="180" y="133" font-size="10" fill="#555" font-family="sans-serif">🌡 고온다습</text>
      <text x="180" y="149" font-size="10" fill="#555" font-family="sans-serif">⭕ 동심원 무늬</text>
    </svg>`,
    content: `<div class="theory-section"><h4>핵심 특징</h4><ul><li>과실·잎에 <strong>동심원 무늬(타깃 무늬)</strong> 병반 형성</li><li>병원균: <strong>Colletotrichum</strong>속 곰팡이</li><li>고온다습 조건에서 발생 → 여름~초가을 집중</li></ul></div>
    <div class="theory-section"><h4>주요 피해 작물</h4><p>고추, 사과, 포도, 딸기, 수박, 참외, 토마토 등 광범위</p></div>
    <div class="theory-section"><h4>병징</h4><ul><li>초기: 작은 갈색 반점</li><li>진행: 반점 확대, 동심원 무늬 형성</li><li>심화: 과실 전체 부패, 분홍색~주황색 포자 덩어리(점질 포자) 형성</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li>이병 과실·잎 즉시 제거</li><li>통풍 개선, 밀식 재배 금지</li><li>만코제브, 디페노코나졸 등 살균제 예방 살포</li></ul></div>`,
    relatedQuestions: ["q005"]
  },
  {
    id: "t004", level: "초급", subject: "농업해충학", topic: "해충 기초",
    title: "농업해충의 분류",
    summary: "씹는입·찌르는입·기타로 나뉘는 해충 구분과 대표 해충 익히기",
    keywords: ["식엽해충", "흡즙해충", "잠식해충", "씹는 입", "찌르는 입"],
    illustration: `<svg viewBox="0 0 340 195" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px">
      <rect width="340" height="195" fill="#f0fdf4" rx="12"/>
      <rect x="8" y="25" width="100" height="155" rx="10" fill="#dcfce7"/>
      <text x="58" y="48" text-anchor="middle" font-size="24" font-family="sans-serif">🐛</text>
      <text x="58" y="68" text-anchor="middle" font-size="11" fill="#166534" font-weight="bold" font-family="sans-serif">식엽해충</text>
      <text x="58" y="84" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">잎을 갉아먹음</text>
      <text x="58" y="102" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">배추흰나비</text>
      <text x="58" y="116" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">파밤나방</text>
      <text x="58" y="130" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">거세미나방</text>
      <text x="58" y="168" text-anchor="middle" font-size="8" fill="#888" font-family="sans-serif">씹는 입(저작구)</text>
      <rect x="120" y="25" width="100" height="155" rx="10" fill="#fef3c7"/>
      <text x="170" y="48" text-anchor="middle" font-size="24" font-family="sans-serif">🦟</text>
      <text x="170" y="68" text-anchor="middle" font-size="11" fill="#92400e" font-weight="bold" font-family="sans-serif">흡즙해충</text>
      <text x="170" y="84" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">수액을 빨아먹음</text>
      <text x="170" y="102" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">진딧물</text>
      <text x="170" y="116" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">응애</text>
      <text x="170" y="130" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">총채벌레</text>
      <text x="170" y="168" text-anchor="middle" font-size="8" fill="#888" font-family="sans-serif">찌르는 입(구침)</text>
      <rect x="232" y="25" width="100" height="155" rx="10" fill="#ede9fe"/>
      <text x="282" y="48" text-anchor="middle" font-size="24" font-family="sans-serif">🐜</text>
      <text x="282" y="68" text-anchor="middle" font-size="11" fill="#5b21b6" font-weight="bold" font-family="sans-serif">잠식해충</text>
      <text x="282" y="84" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">잎 속·뿌리 가해</text>
      <text x="282" y="102" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">굴파리</text>
      <text x="282" y="116" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">고자리파리</text>
      <text x="282" y="130" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">뿌리응애</text>
      <text x="282" y="168" text-anchor="middle" font-size="8" fill="#888" font-family="sans-serif">잠식·굴착</text>
    </svg>`,
    content: `<div class="theory-section"><h4>식엽해충 (씹는 입)</h4><ul><li>잎·줄기를 직접 갉아먹음</li><li>대표: 배추흰나비 유충, 파밤나방, 거세미나방, 담배나방</li><li>피해: 잎에 구멍, 심하면 잎맥만 남음</li></ul></div>
    <div class="theory-section"><h4>흡즙해충 (찌르는 입)</h4><ul><li>구침으로 수액을 빨아먹음</li><li>대표: 진딧물, 응애, 총채벌레, 온실가루이</li><li>피해: 잎 황화·위축, 바이러스병 매개</li></ul></div>
    <div class="theory-section"><h4>잠식·기타 해충</h4><ul><li>잎 속, 뿌리, 과실 속 등을 가해</li><li>대표: 굴파리류(잎 속), 고자리파리(뿌리), 복숭아순나방(과실)</li></ul></div>`,
    relatedQuestions: ["q006", "q007"]
  },
  {
    id: "t005", level: "초급", subject: "농업해충학", topic: "대표 해충",
    title: "진딧물",
    summary: "가장 흔한 흡즙해충 - 바이러스 매개·그을음병 유발까지 피해 범위가 넓어요",
    keywords: ["진딧물", "흡즙", "바이러스 매개", "그을음병", "천적"],
    illustration: `<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
      <rect width="300" height="170" fill="#f0fdf4" rx="12"/>
      <ellipse cx="100" cy="80" rx="68" ry="55" fill="#86efac"/>
      <ellipse cx="88" cy="68" rx="8" ry="6" fill="#16a34a" opacity="0.9"/>
      <ellipse cx="100" cy="72" rx="7" ry="5" fill="#15803d" opacity="0.9"/>
      <ellipse cx="112" cy="68" rx="7" ry="5" fill="#16a34a" opacity="0.85"/>
      <ellipse cx="85" cy="82" rx="7" ry="5" fill="#15803d" opacity="0.9"/>
      <ellipse cx="100" cy="85" rx="8" ry="6" fill="#166534" opacity="0.9"/>
      <ellipse cx="115" cy="82" rx="7" ry="5" fill="#15803d" opacity="0.85"/>
      <ellipse cx="92" cy="95" rx="6" ry="5" fill="#16a34a" opacity="0.8"/>
      <ellipse cx="108" cy="95" rx="6" ry="5" fill="#16a34a" opacity="0.8"/>
      <text x="100" y="152" text-anchor="middle" font-size="11" fill="#166534" font-weight="bold" font-family="sans-serif">군집으로 집단 가해</text>
      <rect x="182" y="25" width="108" height="130" rx="10" fill="#fef9c3"/>
      <text x="236" y="46" text-anchor="middle" font-size="10" fill="#854d0e" font-weight="bold" font-family="sans-serif">진딧물 피해</text>
      <text x="190" y="64" font-size="9" fill="#555" font-family="sans-serif">① 직접 흡즙 → 위축</text>
      <text x="190" y="80" font-size="9" fill="#555" font-family="sans-serif">② 바이러스병 매개</text>
      <text x="190" y="96" font-size="9" fill="#555" font-family="sans-serif">③ 감로 → 그을음병</text>
      <text x="190" y="116" font-size="9" fill="#16a34a" font-weight="bold" font-family="sans-serif">천적</text>
      <text x="190" y="132" font-size="9" fill="#555" font-family="sans-serif">무당벌레, 풀잠자리</text>
      <text x="190" y="146" font-size="9" fill="#555" font-family="sans-serif">기생봉류</text>
    </svg>`,
    content: `<div class="theory-section"><h4>기본 특징</h4><ul><li>크기 1~3mm, 군집으로 집단 가해</li><li>구침으로 체관부 수액 흡즙</li><li>유시충(날개 있음)과 무시충(날개 없음) 모두 존재</li></ul></div>
    <div class="theory-section"><h4>3가지 피해</h4><ul><li>① <strong>직접 피해</strong>: 수액 흡즙 → 잎 황화·위축·기형</li><li>② <strong>바이러스 매개</strong>: 오이모자이크바이러스(CMV) 등 전파</li><li>③ <strong>감로 분비</strong>: 그을음병 유발</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li>천적 이용: 무당벌레, 풀잠자리, 기생봉</li><li>황색 끈끈이트랩 (유시충 포살)</li><li>이미다클로프리드, 아세타미프리드 등 침투성 살충제</li><li>은박 멀칭 (날아오는 진딧물 혼란)</li></ul></div>`,
    relatedQuestions: ["q008"]
  },
  {
    id: "t006", level: "초급", subject: "잡초방제학", topic: "잡초 기초",
    title: "잡초란? 기초 분류",
    summary: "잡초가 왜 문제인지, 어떻게 나뉘는지 기본 개념 익히기",
    keywords: ["잡초", "1년생", "다년생", "화본과", "광엽잡초"],
    illustration: `<svg viewBox="0 0 320 185" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px">
      <rect width="320" height="185" fill="#f0fdf4" rx="12"/>
      <text x="160" y="22" text-anchor="middle" font-size="12" fill="#166534" font-weight="bold" font-family="sans-serif">잡초 분류</text>
      <rect x="10" y="32" width="140" height="140" rx="10" fill="#dcfce7"/>
      <text x="80" y="52" text-anchor="middle" font-size="11" fill="#166534" font-weight="bold" font-family="sans-serif">생존기간</text>
      <text x="22" y="72" font-size="10" fill="#555" font-family="sans-serif">🌱 1년생</text>
      <text x="22" y="88" font-size="9" fill="#777" font-family="sans-serif">  씨앗으로 월동</text>
      <text x="22" y="104" font-size="9" fill="#777" font-family="sans-serif">  예: 바랭이, 쇠비름</text>
      <text x="22" y="124" font-size="10" fill="#555" font-family="sans-serif">🌿 다년생</text>
      <text x="22" y="140" font-size="9" fill="#777" font-family="sans-serif">  뿌리·지하경으로 월동</text>
      <text x="22" y="156" font-size="9" fill="#777" font-family="sans-serif">  예: 쑥, 띠, 올방개</text>
      <rect x="170" y="32" width="140" height="140" rx="10" fill="#fef9c3"/>
      <text x="240" y="52" text-anchor="middle" font-size="11" fill="#92400e" font-weight="bold" font-family="sans-serif">잎 형태</text>
      <text x="182" y="72" font-size="10" fill="#555" font-family="sans-serif">🌾 화본과(단자엽)</text>
      <text x="182" y="88" font-size="9" fill="#777" font-family="sans-serif">  잎이 가늘고 평행맥</text>
      <text x="182" y="104" font-size="9" fill="#777" font-family="sans-serif">  예: 바랭이, 강아지풀</text>
      <text x="182" y="124" font-size="10" fill="#555" font-family="sans-serif">🍀 광엽(쌍자엽)</text>
      <text x="182" y="140" font-size="9" fill="#777" font-family="sans-serif">  넓은 잎, 그물맥</text>
      <text x="182" y="156" font-size="9" fill="#777" font-family="sans-serif">  예: 명아주, 쑥</text>
    </svg>`,
    content: `<div class="theory-section"><h4>잡초가 문제인 이유</h4><ul><li>작물과 <strong>광·수분·양분 경쟁</strong>으로 수량 감소</li><li>병해충의 중간 기주 역할</li><li>농작업 방해</li><li>일부는 독성 물질 분비 (타감작용)</li></ul></div>
    <div class="theory-section"><h4>생존 기간에 따른 분류</h4><table class="compare-table"><tr><th>구분</th><th>특성</th><th>대표 잡초</th></tr><tr><td>1년생</td><td>봄 발아, 가을 결실 후 고사</td><td>바랭이, 쇠비름, 명아주</td></tr><tr><td>월년생</td><td>가을 발아, 봄~여름 결실</td><td>별꽃, 냉이</td></tr><tr><td>다년생</td><td>뿌리·지하경으로 다년간 생존</td><td>쑥, 띠, 올방개, 토끼풀</td></tr></table></div>
    <div class="theory-section"><h4>잎 형태에 따른 분류 (제초제 선택 기준!)</h4><ul><li><strong>화본과(단자엽)</strong>: 가늘고 긴 잎, 평행맥 → 화본과 전용 제초제 사용</li><li><strong>광엽(쌍자엽)</strong>: 넓고 그물맥 → 광엽 전용 제초제 사용</li><li><strong>사초과</strong>: 줄기 단면이 삼각형 → 예: 올방개, 너도방동사니</li></ul></div>`,
    relatedQuestions: ["q009", "q010"]
  },
  {
    id: "t007", level: "초급", subject: "농약학", topic: "농약 기초",
    title: "농약의 종류와 기본 개념",
    summary: "살균제·살충제·제초제·살비제 등 농약의 종류와 올바른 사용법 기초",
    keywords: ["살균제", "살충제", "제초제", "농약", "안전 사용"],
    illustration: `<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px">
      <rect width="340" height="190" fill="#fefce8" rx="12"/>
      <text x="170" y="22" text-anchor="middle" font-size="12" fill="#854d0e" font-weight="bold" font-family="sans-serif">농약의 종류</text>
      <rect x="8" y="32" width="72" height="140" rx="8" fill="#fee2e2"/>
      <text x="44" y="55" text-anchor="middle" font-size="20" font-family="sans-serif">🍄</text>
      <text x="44" y="74" text-anchor="middle" font-size="10" fill="#991b1b" font-weight="bold" font-family="sans-serif">살균제</text>
      <text x="44" y="90" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif">곰팡이·</text>
      <text x="44" y="102" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif">세균 방제</text>
      <text x="44" y="122" text-anchor="middle" font-size="8" fill="#777" font-family="sans-serif">만코제브</text>
      <text x="44" y="136" text-anchor="middle" font-size="8" fill="#777" font-family="sans-serif">보르도액</text>
      <rect x="88" y="32" width="72" height="140" rx="8" fill="#dcfce7"/>
      <text x="124" y="55" text-anchor="middle" font-size="20" font-family="sans-serif">🐛</text>
      <text x="124" y="74" text-anchor="middle" font-size="10" fill="#166534" font-weight="bold" font-family="sans-serif">살충제</text>
      <text x="124" y="90" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif">해충</text>
      <text x="124" y="102" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif">방제</text>
      <text x="124" y="122" text-anchor="middle" font-size="8" fill="#777" font-family="sans-serif">이미다클로</text>
      <text x="124" y="136" text-anchor="middle" font-size="8" fill="#777" font-family="sans-serif">프리드</text>
      <rect x="168" y="32" width="72" height="140" rx="8" fill="#fef9c3"/>
      <text x="204" y="55" text-anchor="middle" font-size="20" font-family="sans-serif">🌿</text>
      <text x="204" y="74" text-anchor="middle" font-size="10" fill="#854d0e" font-weight="bold" font-family="sans-serif">제초제</text>
      <text x="204" y="90" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif">잡초</text>
      <text x="204" y="102" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif">방제</text>
      <text x="204" y="122" text-anchor="middle" font-size="8" fill="#777" font-family="sans-serif">글리포세이트</text>
      <text x="204" y="136" text-anchor="middle" font-size="8" fill="#777" font-family="sans-serif">파라콰트</text>
      <rect x="248" y="32" width="84" height="140" rx="8" fill="#ede9fe"/>
      <text x="290" y="55" text-anchor="middle" font-size="20" font-family="sans-serif">🕷</text>
      <text x="290" y="74" text-anchor="middle" font-size="10" fill="#5b21b6" font-weight="bold" font-family="sans-serif">살비·살선충제</text>
      <text x="290" y="90" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif">응애·선충</text>
      <text x="290" y="102" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif">방제</text>
      <text x="290" y="122" text-anchor="middle" font-size="8" fill="#777" font-family="sans-serif">아바멕틴</text>
      <text x="290" y="136" text-anchor="middle" font-size="8" fill="#777" font-family="sans-serif">페나자퀸</text>
    </svg>`,
    content: `<div class="theory-section"><h4>농약의 정의</h4><p>농작물을 해치는 균, 해충, 잡초 등을 방제하거나 농작물 생장 조절에 사용하는 약제</p></div>
    <div class="theory-section"><h4>방제 대상에 따른 분류</h4><table class="compare-table"><tr><th>종류</th><th>방제 대상</th><th>주요 약제</th></tr><tr><td>살균제</td><td>곰팡이, 세균</td><td>만코제브, 보르도액, 프로피코나졸</td></tr><tr><td>살충제</td><td>해충</td><td>이미다클로프리드, 아세타미프리드, 클로르피리포스</td></tr><tr><td>제초제</td><td>잡초</td><td>글리포세이트, 파라콰트, 2,4-D</td></tr><tr><td>살비제</td><td>응애</td><td>아바멕틴, 페나자퀸, 헥시티아족스</td></tr><tr><td>살선충제</td><td>선충</td><td>카보퓨란, 포스티아제이트</td></tr></table></div>
    <div class="theory-section"><h4>농약 안전 사용 원칙</h4><ul><li>안전사용기준(수확 전 사용 가능일수) 반드시 준수</li><li>보호장구 착용 (마스크, 장갑, 보호복)</li><li>적정 희석 배수 준수 (진하게 쓰면 약해 발생)</li><li>바람 부는 날, 고온 시 살포 금지</li></ul></div>`,
    relatedQuestions: ["q011", "q012"]
  },

  // ═══════════════════════════════════════
  // 중급
  // ═══════════════════════════════════════
  {
    id: "t008", level: "중급", subject: "식물병리학", topic: "바이러스병",
    title: "바이러스병 (모자이크병)",
    summary: "진딧물이 매개하는 바이러스병 - 치료 불가, 예방이 전부",
    keywords: ["바이러스병", "모자이크", "CMV", "TMV", "진딧물 매개", "치료 불가"],
    content: `<div class="theory-section"><h4>바이러스병 특징</h4><ul><li>치료제 없음 → <strong>예방이 전부</strong></li><li>주요 전파 경로: 진딧물·총채벌레(매개충), 즙액 접촉, 종자</li><li>전신 감염 (한번 걸리면 식물 전체로 퍼짐)</li></ul></div>
    <div class="theory-section"><h4>주요 바이러스병</h4><table class="compare-table"><tr><th>병명</th><th>병원바이러스</th><th>매개충</th><th>주요 피해 작물</th></tr><tr><td>오이모자이크병</td><td>CMV</td><td>진딧물</td><td>오이, 호박, 고추</td></tr><tr><td>담배모자이크병</td><td>TMV</td><td>즙액 접촉</td><td>토마토, 고추, 담배</td></tr><tr><td>토마토황화잎말림병</td><td>TYLCV</td><td>담배가루이</td><td>토마토</td></tr></table></div>
    <div class="theory-section"><h4>병징</h4><ul><li>모자이크: 잎에 황록색 얼룩무늬</li><li>잎이 쪼그라들거나 기형 (위축, 奇形)</li><li>과실 기형, 착색 불량</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li>매개충(진딧물 등) 철저히 방제</li><li>이병 식물 즉시 제거</li><li>작업 도구 소독</li><li>저항성 품종 사용</li><li>은박 멀칭으로 매개충 기피</li></ul></div>`,
    relatedQuestions: ["q013"]
  },
  {
    id: "t009", level: "중급", subject: "식물병리학", topic: "세균병",
    title: "무름병 (연부병)",
    summary: "채소류 저장·유통 중 잘 생기는 세균성 부패병",
    keywords: ["무름병", "연부병", "Erwinia", "세균병", "악취", "저장병"],
    content: `<div class="theory-section"><h4>핵심 정보</h4><ul><li>병원균: <strong>Pectobacterium carotovorum</strong> (구 Erwinia carotovora)</li><li>펙틴 분해 효소를 분비해 조직을 물러지게 함</li><li>특징: <strong>악취</strong>를 동반한 수침상 부패</li></ul></div>
    <div class="theory-section"><h4>주요 피해 작물</h4><p>배추, 무, 감자, 양파, 당근, 고추 등 거의 모든 채소류</p></div>
    <div class="theory-section"><h4>발생 조건</h4><ul><li>고온다습, 상처 부위를 통해 침입</li><li>저장 중 환기 불량, 과습 시 급격히 확산</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li>상처 나지 않도록 수확·운반 주의</li><li>저장 전 건조·소독</li><li>저장고 환기, 적정 온도(0~4°C) 유지</li><li>이병 식물체 즉시 제거</li></ul></div>`,
    relatedQuestions: ["q014"]
  },
  {
    id: "t010", level: "중급", subject: "농업해충학", topic: "대표 해충",
    title: "응애 (점박이응애)",
    summary: "잎 뒷면에서 수액을 빨아먹는 미소 해충 - 고온건조기 급증",
    keywords: ["응애", "점박이응애", "잎 뒷면", "고온건조", "살비제", "천적"],
    content: `<div class="theory-section"><h4>기본 특징</h4><ul><li>크기 0.3~0.5mm (육안 관찰 어려움)</li><li>거미줄 같은 실을 치며 집단 가해</li><li>잎 뒷면에서 수액 흡즙 → 잎 표면에 <strong>흰색 반점(퇴색)</strong></li><li>해충이 아닌 <strong>절지동물(거미류)</strong> → 일반 살충제 효과 없음!</li></ul></div>
    <div class="theory-section"><h4>발생 조건</h4><ul><li><strong>고온건조</strong> 조건에서 폭발적 증가 (7~8월 집중 발생)</li><li>천적이 줄어들 때 (살충제 남용 후)</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li><strong>살비제</strong>(acaricide) 사용 (살충제와 다름!)</li><li>아바멕틴, 헥시티아족스, 페나자퀸 등</li><li>천적: 칠레이리응애, 긴털이리응애</li><li>저항성 발달 빠름 → 계통 다른 약제 교호 살포</li></ul></div>`,
    relatedQuestions: ["q015"]
  },
  {
    id: "t011", level: "중급", subject: "농업해충학", topic: "대표 해충",
    title: "총채벌레 (꽃노랑총채벌레)",
    summary: "꽃·과실을 가해하고 바이러스까지 매개하는 까다로운 해충",
    keywords: ["총채벌레", "꽃노랑총채벌레", "TSWV", "바이러스 매개", "꽃 가해"],
    content: `<div class="theory-section"><h4>기본 특징</h4><ul><li>크기 1~2mm, 몸이 길고 날개에 털</li><li>꽃·어린 잎·과실 표면 흡즙</li><li><strong>토마토반점위조바이러스(TSWV)</strong> 매개</li></ul></div>
    <div class="theory-section"><h4>피해 증상</h4><ul><li>꽃·과실 표면에 은백색 반점·상흔</li><li>어린 잎 기형·위축</li><li>TSWV 감염 시 과실·잎에 괴저반점 형성</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li>청색 끈끈이트랩 이용 (총채벌레는 청색 선호)</li><li>스피노사드, 아세타미프리드 등 살충제</li><li>시설 내 방충망 설치</li><li>천적: 오이이리응애, 아이소갈마진디벌</li></ul></div>`,
    relatedQuestions: ["q016"]
  },
  {
    id: "t012", level: "중급", subject: "잡초방제학", topic: "제초제",
    title: "제초제의 종류와 선택",
    summary: "선택성·비선택성, 접촉형·이행형으로 나뉘는 제초제 완벽 정리",
    keywords: ["선택성 제초제", "비선택성 제초제", "접촉형", "이행형", "글리포세이트"],
    content: `<div class="theory-section"><h4>선택성 vs 비선택성</h4><table class="compare-table"><tr><th>구분</th><th>선택성</th><th>비선택성</th></tr><tr><td>특성</td><td>특정 식물만 방제</td><td>모든 식물 방제</td></tr><tr><td>사용 시기</td><td>작물 생육 중 사용 가능</td><td>파종·이식 전 또는 비경작지</td></tr><tr><td>예</td><td>2,4-D (광엽 방제), 그라목손</td><td>글리포세이트, 파라콰트</td></tr></table></div>
    <div class="theory-section"><h4>접촉형 vs 이행형</h4><table class="compare-table"><tr><th>구분</th><th>접촉형</th><th>이행형(침투이행형)</th></tr><tr><td>작용</td><td>약제 닿은 부위만 고사</td><td>식물체 내 이동, 뿌리까지 고사</td></tr><tr><td>다년생 효과</td><td>낮음 (뿌리 살아있음)</td><td>높음 (뿌리까지 고사)</td></tr><tr><td>예</td><td>파라콰트</td><td>글리포세이트</td></tr></table></div>
    <div class="theory-section"><h4>처리 시기에 따른 분류</h4><ul><li><strong>토양처리제</strong>: 잡초 발아 전 토양에 처리 (잡초 예방)</li><li><strong>경엽처리제</strong>: 잡초 발아 후 잎에 직접 처리</li></ul></div>`,
    relatedQuestions: ["q017", "q018"]
  },
  {
    id: "t013", level: "중급", subject: "농약학", topic: "농약 작용",
    title: "살충제의 작용 기작",
    summary: "신경계·호흡계 등 작용 기작에 따른 살충제 분류와 저항성 관리",
    keywords: ["유기인계", "카바메이트계", "피레스로이드계", "네오니코티노이드계", "저항성"],
    content: `<div class="theory-section"><h4>주요 살충제 계통</h4><table class="compare-table"><tr><th>계통</th><th>작용 기작</th><th>대표 약제</th></tr><tr><td>유기인계</td><td>콜린에스테라제 저해</td><td>클로르피리포스, 디메토에이트</td></tr><tr><td>카바메이트계</td><td>콜린에스테라제 저해</td><td>카보퓨란, 메티오카브</td></tr><tr><td>피레스로이드계</td><td>신경 Na채널 교란</td><td>사이퍼메트린, 델타메트린</td></tr><tr><td>네오니코티노이드계</td><td>니코틴성 수용체 자극</td><td>이미다클로프리드, 아세타미프리드</td></tr><tr><td>스피노신계</td><td>니코틴성 수용체 교란</td><td>스피노사드</td></tr></table></div>
    <div class="theory-section"><h4>저항성 관리 (중요!)</h4><ul><li>동일 계통 약제의 반복 사용 → 저항성 해충 발생</li><li><strong>교호 살포</strong>: 작용 기작이 다른 약제를 번갈아 사용</li><li>적정 희석 배수 준수</li><li>천적 보호를 위해 필요 최소한으로 사용</li></ul></div>`,
    relatedQuestions: ["q019"]
  },
  {
    id: "t014", level: "중급", subject: "농약학", topic: "농약 안전",
    title: "농약 안전 사용과 독성",
    summary: "농약 독성 구분, PHI(수확 전 안전일수), 개인보호장구까지 실기 대비",
    keywords: ["독성", "PHI", "수확 전 안전일수", "보호구", "ALS", "LD50"],
    content: `<div class="theory-section"><h4>농약 독성 구분 (LD50 기준)</h4><table class="compare-table"><tr><th>독성 등급</th><th>LD50 (mg/kg)</th><th>표시 색</th></tr><tr><td>맹독성</td><td>50 이하</td><td>적색</td></tr><tr><td>고독성</td><td>50~500</td><td>적색</td></tr><tr><td>보통독성</td><td>500~5000</td><td>황색</td></tr><tr><td>저독성</td><td>5000 이상</td><td>녹색</td></tr></table></div>
    <div class="theory-section"><h4>PHI (Pre-Harvest Interval)</h4><p>수확 전 마지막으로 농약을 사용할 수 있는 날수. 예: "수확 7일 전까지" → 수확 7일 이전에만 살포 가능</p></div>
    <div class="theory-section"><h4>개인보호장구</h4><ul><li>방제복, 방제모 착용</li><li>방독마스크 (증기압 높은 약제)</li><li>고무장갑, 방제화</li><li>바람을 등지고 살포</li><li>살포 후 30분 이상 환기, 비누로 손·얼굴 세척</li></ul></div>`,
    relatedQuestions: ["q020"]
  },

  // ═══════════════════════════════════════
  // 고급
  // ═══════════════════════════════════════
  {
    id: "t015", level: "고급", subject: "식물병리학", topic: "병 종합",
    title: "병원체별 방제 전략 비교",
    summary: "곰팡이·세균·바이러스·선충별 적합한 방제법과 약제 선택 원칙",
    keywords: ["살균제", "항생제", "바이러스", "선충", "방제 전략"],
    content: `<div class="theory-section"><h4>병원체별 방제 전략</h4><table class="compare-table"><tr><th>병원체</th><th>방제약</th><th>핵심 전략</th></tr><tr><td>곰팡이</td><td>살균제 (예방+치료)</td><td>예방 중심, 비오기 전 살포</td></tr><tr><td>세균</td><td>항생제, 동제</td><td>상처 통해 침입 → 상처 관리</td></tr><tr><td>바이러스</td><td>치료제 없음</td><td>매개충 방제, 이병주 제거</td></tr><tr><td>선충</td><td>살선충제, 훈증제</td><td>토양 처리, 저항성 품종</td></tr></table></div>
    <div class="theory-section"><h4>살균제 분류 (보호살균제 vs 치료살균제)</h4><table class="compare-table"><tr><th>구분</th><th>작용</th><th>대표 약제</th></tr><tr><td>보호살균제</td><td>병원균 침입 전 예방</td><td>만코제브, 보르도액, 클로로탈로닐</td></tr><tr><td>치료살균제</td><td>침입 후 방제 가능</td><td>베노밀, 트리플록시스트로빈</td></tr><tr><td>침투이행성</td><td>식물 체내 이동</td><td>프로피코나졸, 테부코나졸</td></tr></table></div>`,
    relatedQuestions: ["q021", "q022"]
  },
  {
    id: "t016", level: "고급", subject: "농업해충학", topic: "해충 종합",
    title: "IPM - 종합적 해충 관리",
    summary: "화학·생물·물리·경종적 방제를 통합한 현대적 해충 관리 전략",
    keywords: ["IPM", "경제적 피해 허용 수준", "천적", "생물적 방제", "저항성 관리"],
    content: `<div class="theory-section"><h4>IPM이란?</h4><p>Integrated Pest Management. 경제적 피해 수준 이하로 해충을 관리하기 위해 여러 방제법을 통합·활용하는 전략.</p></div>
    <div class="theory-section"><h4>방제 방법 통합 순서 (우선순위)</h4><ol style="padding-left:18px;font-size:14px;line-height:2;color:#40514e"><li><strong>경종적 방제</strong>: 저항성 품종, 윤작, 재배 시기 조절</li><li><strong>물리적 방제</strong>: 방충망, 끈끈이트랩, 열처리</li><li><strong>생물적 방제</strong>: 천적, 미생물 농약 (Bt제, 핵다각체병바이러스)</li><li><strong>화학적 방제</strong>: 최후 수단 (선택성 농약, 최소량)</li></ol></div>
    <div class="theory-section"><h4>경제적 피해 허용 수준 (ETL)</h4><p>방제 비용과 피해 손실이 같아지는 해충 밀도. ETL 이하면 방제 불필요. 불필요한 농약 살포를 줄이는 핵심 개념.</p></div>`,
    relatedQuestions: ["q023"]
  },
  {
    id: "t017", level: "고급", subject: "잡초방제학", topic: "잡초방제 심화",
    title: "작물별 잡초방제 전략",
    summary: "논·밭·과수원별 주요 잡초와 방제법 차이 이해하기",
    keywords: ["논잡초", "밭잡초", "물리적 방제", "생물적 방제", "윤작"],
    content: `<div class="theory-section"><h4>논 잡초 vs 밭 잡초</h4><table class="compare-table"><tr><th>구분</th><th>논 잡초</th><th>밭 잡초</th></tr><tr><td>환경</td><td>담수(물대기) 조건</td><td>건조~중간 조건</td></tr><tr><td>대표 잡초</td><td>피, 올방개, 너도방동사니, 물달개비</td><td>바랭이, 쇠비름, 명아주, 쑥</td></tr><tr><td>방제 특이사항</td><td>담수 상태 제초제 처리</td><td>작물 선택성 중요</td></tr></table></div>
    <div class="theory-section"><h4>비화학적 방제법</h4><ul><li><strong>경운·중경</strong>: 잡초 기계적 제거</li><li><strong>피복·멀칭</strong>: 흑색 필름, 볏짚으로 빛 차단</li><li><strong>윤작</strong>: 작물 교체로 특정 잡초 억제</li><li><strong>밀식 재배</strong>: 작물이 잡초보다 빨리 피복</li></ul></div>`,
    relatedQuestions: ["q024"]
  },
  {
    id: "t018", level: "고급", subject: "농약학", topic: "농약 심화",
    title: "농약 저항성과 교호 살포",
    summary: "저항성 발달 원리와 교호 살포 전략 - 고급 문제 단골 출제",
    keywords: ["저항성", "교호 살포", "IRAC", "작용 기작", "MoA"],
    content: `<div class="theory-section"><h4>저항성 발달 원인</h4><ul><li>동일 계통 약제의 반복·연속 사용</li><li>해충 집단 내 저항성 개체 선발·증식</li><li>응애·진딧물 등 세대가 짧은 해충에서 빠르게 발달</li></ul></div>
    <div class="theory-section"><h4>교호 살포 원칙 (IRAC 기준)</h4><ul><li>작용 기작(MoA)이 다른 그룹의 약제를 번갈아 사용</li><li>예: 네오니코티노이드계(그룹4A) → 피레스로이드계(그룹3) → 스피노신계(그룹5) 순환</li><li>같은 계통이면 약제명이 달라도 교호 살포 효과 없음</li></ul></div>
    <div class="theory-section"><h4>저항성 관리 실천</h4><ul><li>적정 약량·희석 배수 준수</li><li>천적 보호 (선택성 농약 우선)</li><li>비화학적 방제와 병행</li><li>저항성 모니터링 결과 참고</li></ul></div>`,
    relatedQuestions: ["q025"]
  }
];
