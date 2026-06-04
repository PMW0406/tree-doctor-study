const THEORIES = [
  // ═══════════════════════════════════════
  // 초급
  // ═══════════════════════════════════════
  {
    id:"t001",level:"초급",subject:"식물병리학",topic:"병의 기초",
    title:"식물병이란? (기초)",
    summary:"식물이 왜 병에 걸리는지, 어떤 종류가 있는지 기본 개념 잡기",
    keywords:["식물병","병원체","병삼각형","전염성","비전염성"],
    illustration:`<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px">
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
    content:`<div class="theory-section"><h4>식물병 3요소 (병삼각형)</h4><ul><li><strong>기주</strong>: 병에 걸리는 식물</li><li><strong>병원체</strong>: 곰팡이, 세균, 바이러스, 선충 등</li><li><strong>환경</strong>: 온도, 습도, 바람 등 발병 조건</li></ul><p>세 가지가 동시에 맞아야 병이 생겨요!</p></div>
    <div class="theory-section"><h4>전염성 병 vs 비전염성 병</h4><table class="compare-table"><tr><th>구분</th><th>전염성 병</th><th>비전염성 병</th></tr><tr><td>원인</td><td>병원체 (곰팡이, 세균 등)</td><td>환경, 영양, 물리적 요인</td></tr><tr><td>전파</td><td>다른 식물로 전파 가능</td><td>전파 안 됨</td></tr><tr><td>예시</td><td>역병, 탄저병, 흰가루병</td><td>동해, 가뭄, 영양 결핍</td></tr></table></div>
    <div class="theory-section"><h4>병원체 종류별 특징</h4><table class="compare-table"><tr><th>병원체</th><th>특징</th><th>대표 병</th></tr><tr><td>곰팡이(진균)</td><td>가장 많은 비율(70% 이상)</td><td>역병, 탄저병, 도열병</td></tr><tr><td>세균</td><td>세포벽 있음, 항생제로 방제</td><td>무름병, 불마름병</td></tr><tr><td>바이러스</td><td>가장 작음, 치료 불가</td><td>모자이크병, CMV</td></tr><tr><td>선충</td><td>동물계, 뿌리 주로 피해</td><td>뿌리혹선충병</td></tr></table></div>`,
    relatedQuestions:["q001","q002","q003"]
  },
  {
    id:"t002",level:"초급",subject:"식물병리학",topic:"곰팡이병",
    title:"역병 (Phytophthora)",
    summary:"채소류에서 가장 무서운 병 - 빠르게 번지는 물곰팡이병",
    keywords:["역병","Phytophthora","물곰팡이","고추","토마토","고온다습"],
    illustration:`<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
      <rect width="300" height="180" fill="#fff5f5" rx="12"/>
      <ellipse cx="80" cy="80" rx="50" ry="65" fill="#16a34a"/>
      <ellipse cx="72" cy="65" rx="22" ry="28" fill="#7f1d1d" opacity="0.85"/>
      <ellipse cx="88" cy="90" rx="25" ry="30" fill="#991b1b" opacity="0.8"/>
      <text x="80" y="162" text-anchor="middle" font-size="11" fill="#991b1b" font-weight="bold" font-family="sans-serif">잎·줄기 갈변·수침상</text>
      <rect x="148" y="20" width="140" height="148" rx="10" fill="#f0fdf4"/>
      <text x="218" y="42" text-anchor="middle" font-size="11" fill="#166534" font-weight="bold" font-family="sans-serif">발생 조건</text>
      <text x="158" y="62" font-size="10" fill="#555" font-family="sans-serif">🌡 고온 (25~30°C)</text>
      <text x="158" y="80" font-size="10" fill="#555" font-family="sans-serif">💧 다습 (장마철)</text>
      <text x="158" y="98" font-size="10" fill="#555" font-family="sans-serif">🌱 배수 불량</text>
      <text x="158" y="120" font-size="10" fill="#166534" font-weight="bold" font-family="sans-serif">주요 피해 작물</text>
      <text x="158" y="138" font-size="10" fill="#555" font-family="sans-serif">• 고추, 토마토</text>
      <text x="158" y="153" font-size="10" fill="#555" font-family="sans-serif">• 감자, 오이</text>
    </svg>`,
    content:`<div class="theory-section"><h4>한 줄 요약</h4><p>고온다습 조건에서 <strong>빠르게 번지는</strong> 물곰팡이병. 채소 농가 최대 피해 병해.</p></div>
    <div class="theory-section"><h4>병원균</h4><p><strong>Phytophthora capsici</strong> (고추 역병) — 난균류(물곰팡이, 진균이 아님에 주의!)</p></div>
    <div class="theory-section"><h4>병징</h4><ul><li>잎·줄기에 <strong>수침상(물에 젖은 듯한) 병반</strong> → 갈변·고사</li><li>지제부 줄기가 잘록해지며 쓰러짐 (입고병 증상)</li><li>흰색 균사가 표면에 보이기도 함</li></ul></div>
    <div class="theory-section"><h4>발생 조건</h4><ul><li>고온(25~30°C) + 다습 → 장마철 집중 발생</li><li>배수 불량 토양에서 심화</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li>배수 개선, 이랑 높이기</li><li>이병 식물 즉시 제거</li><li>메타락실, 만코제브 등 살균제</li><li>저항성 품종 사용</li></ul></div>`,
    relatedQuestions:["q004","q005","q006"]
  },
  {
    id:"t003",level:"초급",subject:"식물병리학",topic:"곰팡이병",
    title:"탄저병",
    summary:"과실에 검은 동심원 무늬가 생기는 고온다습성 곰팡이병",
    keywords:["탄저병","Colletotrichum","동심원","과실","고온다습","포자"],
    content:`<div class="theory-section"><h4>핵심 특징</h4><ul><li>과실·잎에 <strong>동심원(타깃) 무늬</strong> 병반 형성</li><li>병원균: <strong>Colletotrichum</strong>속 곰팡이</li><li>고온다습(25~30°C) 조건, 여름~초가을 집중</li><li>병반 위에 <strong>분홍~주황색 포자 덩어리</strong>(점질 포자) 형성 → 빗물에 퍼짐</li></ul></div>
    <div class="theory-section"><h4>주요 피해 작물</h4><p>고추, 사과, 포도, 딸기, 수박, 참외, 토마토, 강낭콩 등 광범위</p></div>
    <div class="theory-section"><h4>방제</h4><ul><li>이병 과실·잎 즉시 제거</li><li>통풍 개선, 밀식 재배 금지</li><li>만코제브, 디페노코나졸 등 살균제 예방 살포</li><li>과실 상처 방지 (상처 통해 침입)</li></ul></div>`,
    relatedQuestions:["q007","q008"]
  },
  {
    id:"t004",level:"초급",subject:"식물병리학",topic:"곰팡이병",
    title:"잿빛곰팡이병 (회색곰팡이병)",
    summary:"저온다습 조건에서 발생하는 곰팡이병 - 시설재배에서 특히 문제",
    keywords:["잿빛곰팡이병","Botrytis","회색곰팡이","저온다습","시설재배"],
    content:`<div class="theory-section"><h4>핵심 특징</h4><ul><li>병원균: <strong>Botrytis cinerea</strong></li><li><strong>저온다습</strong> 조건 (15~20°C, 높은 습도) — 역병·탄저병과 반대!</li><li>시설(하우스) 재배에서 특히 많이 발생</li></ul></div>
    <div class="theory-section"><h4>병징</h4><ul><li>잎·꽃·과실에 <strong>회색(잿빛) 곰팡이</strong> 발생</li><li>조직이 수침상으로 썩으며 재색 포자 덩어리 형성</li><li>꽃잎에서 시작해 과실로 확산</li></ul></div>
    <div class="theory-section"><h4>주요 피해 작물</h4><p>딸기, 토마토, 오이, 장미, 포도, 상추 등</p></div>
    <div class="theory-section"><h4>방제</h4><ul><li>시설 내 환기 철저 (습도 낮추기)</li><li>이병 조직 즉시 제거</li><li>이프로디온, 플루디옥소닐, 사이프로디닐 등 살균제</li><li>과도한 질소 비료 금지</li></ul></div>`,
    relatedQuestions:["q009","q010"]
  },
  {
    id:"t005",level:"초급",subject:"식물병리학",topic:"곰팡이병",
    title:"노균병 (露菌病)",
    summary:"잎 뒷면에 노란색~회색 곰팡이가 생기는 병 - 오이·배추에 흔해요",
    keywords:["노균병","Peronospora","Plasmopara","잎 뒷면","황색","물곰팡이"],
    content:`<div class="theory-section"><h4>핵심 특징</h4><ul><li>병원균: <strong>Peronospora</strong>속, <strong>Plasmopara</strong>속 (물곰팡이, 난균류)</li><li><strong>잎 앞면</strong>: 황색~연한 갈색 반점</li><li><strong>잎 뒷면</strong>: 회색~자줏빛 곰팡이 (노균) 형성 → 핵심 병징!</li><li>서늘하고 다습한 조건 (15~20°C)</li></ul></div>
    <div class="theory-section"><h4>주요 피해 작물</h4><p>오이, 배추, 시금치, 양파, 포도, 상추</p></div>
    <div class="theory-section"><h4>헷갈리는 병 비교 (시험 빈출!)</h4><table class="compare-table"><tr><th>구분</th><th>노균병</th><th>흰가루병</th></tr><tr><td>발생 위치</td><td>잎 뒷면에 회색 곰팡이</td><td>잎 표면에 흰색 가루</td></tr><tr><td>발생 조건</td><td>서늘하고 다습</td><td>건조하고 통풍 불량</td></tr><tr><td>병원균 분류</td><td>난균류(물곰팡이)</td><td>자낭균</td></tr></table></div>
    <div class="theory-section"><h4>방제</h4><ul><li>만코제브, 메타락실, 사이목사닐 등 살균제</li><li>통풍 개선, 과습 방지</li></ul></div>`,
    relatedQuestions:["q011","q012"]
  },
  {
    id:"t006",level:"초급",subject:"식물병리학",topic:"벼 병해",
    title:"벼 도열병",
    summary:"벼의 가장 중요한 병 - 잎·이삭 어디서나 발생하는 곰팡이병",
    keywords:["도열병","Magnaporthe","벼","이삭도열병","잎도열병","방추형"],
    content:`<div class="theory-section"><h4>핵심 정보</h4><ul><li>병원균: <strong>Magnaporthe oryzae</strong> (불완전균류)</li><li>벼의 가장 중요한 병해, 전국 발생</li><li>서늘하고 다습한 조건 (20~25°C, 안개·이슬 많을 때)</li></ul></div>
    <div class="theory-section"><h4>병징 (발생 부위별)</h4><table class="compare-table"><tr><th>종류</th><th>병징</th></tr><tr><td>잎도열병</td><td>잎에 방추형(마름모꼴) 회갈색 병반, 가장자리 황색</td></tr><tr><td>이삭도열병</td><td>이삭목·가지가 갈변 → 등숙 불량, 흰 이삭(백수)</td></tr><tr><td>마디도열병</td><td>줄기 마디가 갈변·잘록해짐</td></tr></table></div>
    <div class="theory-section"><h4>발생 조건</h4><ul><li><strong>질소 비료 과다</strong> 시 급격히 심해짐 (시험 자주 출제!)</li><li>서늘하고 흐린 날씨, 안개 잦은 지역</li><li>밀식 재배, 침관수 피해 후</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li>저항성 품종 사용</li><li>질소 비료 적정 시비 (과다 금지)</li><li>트리사이클라졸, 이소프로티올란 등 살균제 예방 살포</li><li>적기 물떼기로 과습 방지</li></ul></div>`,
    relatedQuestions:["q013","q014","q015"]
  },
  {
    id:"t007",level:"초급",subject:"농업해충학",topic:"해충 기초",
    title:"농업해충의 분류",
    summary:"씹는입·찌르는입으로 나뉘는 해충 구분과 대표 해충 익히기",
    keywords:["식엽해충","흡즙해충","잠식해충","씹는 입","찌르는 입"],
    illustration:`<svg viewBox="0 0 340 195" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px">
      <rect width="340" height="195" fill="#f0fdf4" rx="12"/>
      <rect x="8" y="25" width="100" height="155" rx="10" fill="#dcfce7"/>
      <text x="58" y="48" text-anchor="middle" font-size="24" font-family="sans-serif">🐛</text>
      <text x="58" y="68" text-anchor="middle" font-size="11" fill="#166534" font-weight="bold" font-family="sans-serif">식엽해충</text>
      <text x="58" y="84" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">잎을 갉아먹음</text>
      <text x="58" y="102" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">배추흰나비</text>
      <text x="58" y="116" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">파밤나방</text>
      <text x="58" y="130" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">이화명나방</text>
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
      <text x="282" y="102" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">굴파리류</text>
      <text x="282" y="116" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">고자리파리</text>
      <text x="282" y="130" text-anchor="middle" font-size="9" fill="#555" font-family="sans-serif">뿌리응애</text>
      <text x="282" y="168" text-anchor="middle" font-size="8" fill="#888" font-family="sans-serif">잠식·굴착</text>
    </svg>`,
    content:`<div class="theory-section"><h4>식엽해충 (씹는 입, 저작구)</h4><ul><li>잎·줄기를 직접 갉아먹음</li><li>대표: 배추흰나비 유충, 파밤나방, 거세미나방, 담배나방, 이화명나방</li><li>피해: 잎에 구멍, 심하면 잎맥만 남음</li></ul></div>
    <div class="theory-section"><h4>흡즙해충 (찌르는 입, 구침)</h4><ul><li>구침으로 수액을 빨아먹음</li><li>대표: 진딧물, 응애, 총채벌레, 온실가루이, 벼멸구, 애멸구</li><li>피해: 잎 황화·위축, 바이러스병 매개</li></ul></div>
    <div class="theory-section"><h4>벌레 입의 종류 (구기 분류)</h4><table class="compare-table"><tr><th>구기</th><th>해당 해충</th><th>특징</th></tr><tr><td>저작구 (씹는 입)</td><td>나방류 유충, 딱정벌레류</td><td>잎에 구멍, 결손 발생</td></tr><tr><td>흡수구 (빠는 입)</td><td>진딧물, 노린재, 매미</td><td>수액 흡즙, 잎 황화</td></tr><tr><td>천자흡수구</td><td>응애, 총채벌레</td><td>찌르고 빨아먹음</td></tr></table></div>`,
    relatedQuestions:["q016","q017","q018"]
  },
  {
    id:"t008",level:"초급",subject:"농업해충학",topic:"대표 해충",
    title:"진딧물",
    summary:"가장 흔한 흡즙해충 - 바이러스 매개·그을음병 유발까지 피해 범위가 넓어요",
    keywords:["진딧물","흡즙","바이러스 매개","그을음병","천적","황색 트랩"],
    illustration:`<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px">
      <rect width="300" height="170" fill="#f0fdf4" rx="12"/>
      <ellipse cx="100" cy="80" rx="68" ry="55" fill="#86efac"/>
      <ellipse cx="88" cy="68" rx="8" ry="6" fill="#16a34a" opacity="0.9"/>
      <ellipse cx="100" cy="72" rx="7" ry="5" fill="#15803d" opacity="0.9"/>
      <ellipse cx="112" cy="68" rx="7" ry="5" fill="#16a34a" opacity="0.85"/>
      <ellipse cx="85" cy="82" rx="7" ry="5" fill="#15803d" opacity="0.9"/>
      <ellipse cx="100" cy="85" rx="8" ry="6" fill="#166534" opacity="0.9"/>
      <ellipse cx="115" cy="82" rx="7" ry="5" fill="#15803d" opacity="0.85"/>
      <text x="100" y="152" text-anchor="middle" font-size="11" fill="#166534" font-weight="bold" font-family="sans-serif">군집으로 집단 가해</text>
      <rect x="182" y="22" width="108" height="132" rx="10" fill="#fef9c3"/>
      <text x="236" y="42" text-anchor="middle" font-size="10" fill="#854d0e" font-weight="bold" font-family="sans-serif">진딧물 피해</text>
      <text x="190" y="60" font-size="9" fill="#555" font-family="sans-serif">① 직접 흡즙 → 위축</text>
      <text x="190" y="76" font-size="9" fill="#555" font-family="sans-serif">② 바이러스병 매개</text>
      <text x="190" y="92" font-size="9" fill="#555" font-family="sans-serif">③ 감로 → 그을음병</text>
      <text x="190" y="112" font-size="9" fill="#16a34a" font-weight="bold" font-family="sans-serif">방제</text>
      <text x="190" y="128" font-size="9" fill="#555" font-family="sans-serif">황색 끈끈이 트랩</text>
      <text x="190" y="144" font-size="9" fill="#555" font-family="sans-serif">무당벌레(천적)</text>
    </svg>`,
    content:`<div class="theory-section"><h4>기본 특징</h4><ul><li>크기 1~3mm, 군집으로 집단 가해</li><li>구침으로 체관부 수액 흡즙</li><li>단위생식(무성생식)으로 빠르게 증식</li><li>유시충(날개 있음)이 다른 포장으로 이동하며 전파</li></ul></div>
    <div class="theory-section"><h4>3가지 피해 (시험 자주 출제!)</h4><ul><li>① <strong>직접 피해</strong>: 수액 흡즙 → 잎 황화·위축·기형</li><li>② <strong>바이러스 매개</strong>: CMV(오이모자이크바이러스), PVY 등 전파</li><li>③ <strong>감로 분비</strong>: 그을음병 유발</li></ul></div>
    <div class="theory-section"><h4>주요 종류</h4><ul><li>복숭아혹진딧물: 가장 많은 작물에 피해, 바이러스 매개</li><li>목화진딧물: 면화, 오이, 박과류</li><li>배추진딧물: 배추, 무 등 십자화과</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li>천적: 무당벌레, 풀잠자리, 기생봉</li><li><strong>황색</strong> 끈끈이트랩 (유시충 포살)</li><li>이미다클로프리드, 아세타미프리드 등 침투성 살충제</li><li>은박 멀칭 (날아오는 진딧물 혼란)</li></ul></div>`,
    relatedQuestions:["q019","q020","q021"]
  },
  {
    id:"t009",level:"초급",subject:"농업해충학",topic:"벼 해충",
    title:"벼 해충 (이화명나방·벼멸구·애멸구)",
    summary:"벼 3대 해충의 특징과 방제법 - 시험에 자주 나오는 핵심",
    keywords:["이화명나방","벼멸구","애멸구","줄무늬잎마름병","벼","1~2화기"],
    content:`<div class="theory-section"><h4>이화명나방</h4><ul><li>분류: 인시목 명나방과</li><li>피해: 1화기 유충 → 줄기 속 갉아먹기(심고) / 2화기 → 이삭 피해(백수)</li><li>1년 2세대, 유충으로 줄기 속 월동</li><li>방제: 카보퓨란, 클로르피리포스 등</li></ul></div>
    <div class="theory-section"><h4>벼멸구</h4><ul><li>분류: 반시목 멸구과</li><li>피해: 집단으로 줄기 기부 흡즙 → 도복(쓰러짐)</li><li>국내에서는 월동 안 함 → 중국에서 비래(날아옴)</li><li>방제: 에토펜프록스, 부프로페진 등</li></ul></div>
    <div class="theory-section"><h4>애멸구</h4><ul><li>분류: 반시목 멸구과</li><li><strong>벼 줄무늬잎마름병 바이러스 매개</strong> (시험 빈출!)</li><li>국내 월동 가능 (성충·약충)</li><li>방제: 이미다클로프리드 등 초기 방제 중요</li></ul></div>
    <div class="theory-section"><h4>벼멸구 vs 애멸구 비교</h4><table class="compare-table"><tr><th>구분</th><th>벼멸구</th><th>애멸구</th></tr><tr><td>월동</td><td>국내 월동 불가 (비래해충)</td><td>국내 월동 가능</td></tr><tr><td>바이러스 매개</td><td>없음</td><td>줄무늬잎마름병</td></tr><tr><td>주요 피해</td><td>도복</td><td>생육 억제, 바이러스 전파</td></tr></table></div>`,
    relatedQuestions:["q022","q023"]
  },
  {
    id:"t010",level:"초급",subject:"잡초방제학",topic:"잡초 기초",
    title:"잡초란? 기초 분류",
    summary:"잡초가 왜 문제인지, 어떻게 나뉘는지 기본 개념 익히기",
    keywords:["잡초","1년생","다년생","화본과","광엽잡초","사초과"],
    content:`<div class="theory-section"><h4>잡초가 문제인 이유</h4><ul><li>작물과 <strong>광·수분·양분 경쟁</strong>으로 수량 감소</li><li>병해충의 중간 기주 역할</li><li>농작업 방해</li><li>타감작용(알레로파시): 일부 잡초가 독성 물질 분비</li></ul></div>
    <div class="theory-section"><h4>생존 기간에 따른 분류</h4><table class="compare-table"><tr><th>구분</th><th>특성</th><th>대표 잡초</th></tr><tr><td>1년생</td><td>봄 발아, 가을 결실 후 고사</td><td>바랭이, 쇠비름, 명아주, 여뀌</td></tr><tr><td>월년생</td><td>가을 발아, 봄~여름 결실</td><td>별꽃, 냉이, 뚝새풀</td></tr><tr><td>다년생</td><td>뿌리·지하경으로 다년 생존</td><td>쑥, 띠, 올방개, 토끼풀</td></tr></table></div>
    <div class="theory-section"><h4>잎 형태에 따른 분류 (제초제 선택 핵심!)</h4><table class="compare-table"><tr><th>구분</th><th>특징</th><th>대표 잡초</th></tr><tr><td>화본과(단자엽)</td><td>잎 가늘고 평행맥, 줄기 둥근 단면</td><td>바랭이, 강아지풀, 피</td></tr><tr><td>사초과(단자엽)</td><td>줄기 단면 <strong>삼각형</strong></td><td>올방개, 너도방동사니</td></tr><tr><td>광엽(쌍자엽)</td><td>넓은 잎, 그물맥</td><td>명아주, 쑥, 쇠비름</td></tr></table></div>`,
    relatedQuestions:["q024","q025","q026"]
  },
  {
    id:"t011",level:"초급",subject:"잡초방제학",topic:"논밭 잡초",
    title:"논·밭 주요 잡초",
    summary:"논과 밭에서 자주 나오는 잡초 이름과 특징 암기하기",
    keywords:["피","올방개","바랭이","쇠비름","논잡초","밭잡초"],
    content:`<div class="theory-section"><h4>주요 논잡초</h4><table class="compare-table"><tr><th>잡초명</th><th>분류</th><th>특징</th></tr><tr><td>피</td><td>화본과, 1년생</td><td>벼와 비슷해 초기 구별 어려움, 가장 문제 잡초</td></tr><tr><td>올방개</td><td>사초과, 다년생</td><td>지하에 괴경(덩이줄기) 형성, 방제 어려움</td></tr><tr><td>너도방동사니</td><td>사초과, 1년생</td><td>줄기 단면 삼각형</td></tr><tr><td>물달개비</td><td>닭의장풀과, 1년생</td><td>자주색 꽃, 광엽</td></tr><tr><td>가래</td><td>가래과, 다년생</td><td>물속 줄기에서 번식</td></tr></table></div>
    <div class="theory-section"><h4>주요 밭잡초</h4><table class="compare-table"><tr><th>잡초명</th><th>분류</th><th>특징</th></tr><tr><td>바랭이</td><td>화본과, 1년생</td><td>밭에서 가장 흔한 화본과 잡초</td></tr><tr><td>쇠비름</td><td>쇠비름과, 1년생</td><td>다육질, 건조에 강함</td></tr><tr><td>명아주</td><td>명아주과, 1년생</td><td>어린잎 분홍색</td></tr><tr><td>쑥</td><td>국화과, 다년생</td><td>독특한 향, 지하경으로 번식</td></tr><tr><td>토끼풀</td><td>콩과, 다년생</td><td>클로버, 포복경으로 번식</td></tr></table></div>`,
    relatedQuestions:["q027","q028"]
  },
  {
    id:"t012",level:"초급",subject:"농약학",topic:"농약 기초",
    title:"농약의 종류와 기본 개념",
    summary:"살균제·살충제·제초제·살비제 등 농약의 종류와 올바른 사용법 기초",
    keywords:["살균제","살충제","제초제","농약","PHI","보호구"],
    illustration:`<svg viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:340px">
      <rect width="340" height="190" fill="#fefce8" rx="12"/>
      <rect x="8" y="32" width="72" height="140" rx="8" fill="#fee2e2"/>
      <text x="44" y="55" text-anchor="middle" font-size="20" font-family="sans-serif">🍄</text>
      <text x="44" y="74" text-anchor="middle" font-size="10" fill="#991b1b" font-weight="bold" font-family="sans-serif">살균제</text>
      <text x="44" y="90" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif">곰팡이·세균</text>
      <text x="44" y="120" text-anchor="middle" font-size="8" fill="#777" font-family="sans-serif">만코제브</text>
      <text x="44" y="134" text-anchor="middle" font-size="8" fill="#777" font-family="sans-serif">보르도액</text>
      <rect x="88" y="32" width="72" height="140" rx="8" fill="#dcfce7"/>
      <text x="124" y="55" text-anchor="middle" font-size="20" font-family="sans-serif">🐛</text>
      <text x="124" y="74" text-anchor="middle" font-size="10" fill="#166534" font-weight="bold" font-family="sans-serif">살충제</text>
      <text x="124" y="90" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif">해충방제</text>
      <text x="124" y="120" text-anchor="middle" font-size="8" fill="#777" font-family="sans-serif">이미다클로</text>
      <text x="124" y="134" text-anchor="middle" font-size="8" fill="#777" font-family="sans-serif">프리드</text>
      <rect x="168" y="32" width="72" height="140" rx="8" fill="#fef9c3"/>
      <text x="204" y="55" text-anchor="middle" font-size="20" font-family="sans-serif">🌿</text>
      <text x="204" y="74" text-anchor="middle" font-size="10" fill="#854d0e" font-weight="bold" font-family="sans-serif">제초제</text>
      <text x="204" y="90" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif">잡초방제</text>
      <text x="204" y="120" text-anchor="middle" font-size="8" fill="#777" font-family="sans-serif">글리포세이트</text>
      <text x="204" y="134" text-anchor="middle" font-size="8" fill="#777" font-family="sans-serif">파라콰트</text>
      <rect x="248" y="32" width="84" height="140" rx="8" fill="#ede9fe"/>
      <text x="290" y="55" text-anchor="middle" font-size="20" font-family="sans-serif">🕷</text>
      <text x="290" y="74" text-anchor="middle" font-size="10" fill="#5b21b6" font-weight="bold" font-family="sans-serif">살비·살선충제</text>
      <text x="290" y="90" text-anchor="middle" font-size="8" fill="#555" font-family="sans-serif">응애·선충</text>
      <text x="290" y="120" text-anchor="middle" font-size="8" fill="#777" font-family="sans-serif">아바멕틴</text>
      <text x="290" y="134" text-anchor="middle" font-size="8" fill="#777" font-family="sans-serif">페나자퀸</text>
    </svg>`,
    content:`<div class="theory-section"><h4>농약의 정의</h4><p>농작물을 해치는 균, 해충, 잡초 등을 방제하거나 농작물 생장 조절에 사용하는 약제</p></div>
    <div class="theory-section"><h4>방제 대상에 따른 분류</h4><table class="compare-table"><tr><th>종류</th><th>방제 대상</th><th>주요 약제</th></tr><tr><td>살균제</td><td>곰팡이, 세균</td><td>만코제브, 보르도액, 프로피코나졸</td></tr><tr><td>살충제</td><td>해충</td><td>이미다클로프리드, 아세타미프리드, 클로르피리포스</td></tr><tr><td>제초제</td><td>잡초</td><td>글리포세이트, 파라콰트, 2,4-D</td></tr><tr><td>살비제</td><td>응애</td><td>아바멕틴, 페나자퀸, 헥시티아족스</td></tr><tr><td>살선충제</td><td>선충</td><td>카보퓨란, 포스티아제이트</td></tr></table></div>
    <div class="theory-section"><h4>농약 안전 사용 원칙</h4><ul><li>안전사용기준(PHI, 수확 전 사용 가능일수) 반드시 준수</li><li>보호장구 착용 (마스크, 장갑, 보호복)</li><li>적정 희석 배수 준수 (진하게 쓰면 약해 발생)</li><li>바람 부는 날, 고온 시 살포 금지</li><li>살포 후 비누로 손·얼굴 세척</li></ul></div>`,
    relatedQuestions:["q029","q030","q031"]
  },

  // ═══════════════════════════════════════
  // 중급
  // ═══════════════════════════════════════
  {
    id:"t013",level:"중급",subject:"식물병리학",topic:"바이러스병",
    title:"바이러스병 (모자이크병)",
    summary:"진딧물이 매개하는 바이러스병 - 치료 불가, 예방이 전부",
    keywords:["바이러스병","모자이크","CMV","TMV","TSWV","진딧물 매개","치료 불가"],
    content:`<div class="theory-section"><h4>바이러스병 특징</h4><ul><li>치료제 없음 → <strong>예방이 전부</strong></li><li>주요 전파 경로: 진딧물·총채벌레(매개충), 즙액 접촉, 종자</li><li>전신 감염 (한번 걸리면 식물 전체로 퍼짐)</li></ul></div>
    <div class="theory-section"><h4>주요 바이러스병 (시험 빈출!)</h4><table class="compare-table"><tr><th>병명</th><th>바이러스</th><th>매개</th><th>주요 피해</th></tr><tr><td>오이모자이크병</td><td>CMV</td><td>진딧물</td><td>오이, 호박, 고추</td></tr><tr><td>담배모자이크병</td><td>TMV</td><td>즙액 접촉</td><td>토마토, 고추</td></tr><tr><td>토마토황화잎말림병</td><td>TYLCV</td><td>담배가루이</td><td>토마토</td></tr><tr><td>토마토반점위조병</td><td>TSWV</td><td>총채벌레</td><td>토마토, 고추</td></tr><tr><td>벼 줄무늬잎마름병</td><td>RSV</td><td>애멸구</td><td>벼</td></tr></table></div>
    <div class="theory-section"><h4>병징</h4><ul><li>모자이크: 잎에 황록색 얼룩무늬</li><li>잎이 쪼그라들거나 기형 (위축, 奇形)</li><li>과실 기형, 착색 불량</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li>매개충 철저히 방제 (가장 중요!)</li><li>이병 식물 즉시 제거</li><li>작업 도구 소독, 저항성 품종 사용</li></ul></div>`,
    relatedQuestions:["q032","q033","q034"]
  },
  {
    id:"t014",level:"중급",subject:"식물병리학",topic:"세균병",
    title:"무름병·풋마름병·궤양병",
    summary:"세균병의 대표 3가지 - 병원균과 피해 작물 함께 암기하기",
    keywords:["무름병","풋마름병","궤양병","세균병","Ralstonia","Xanthomonas"],
    content:`<div class="theory-section"><h4>무름병 (연부병)</h4><ul><li>병원균: Pectobacterium carotovorum (구 Erwinia)</li><li>펙틴 분해 효소 분비 → 조직이 물러짐 + <strong>악취</strong></li><li>피해: 배추, 무, 감자, 양파 등 거의 모든 채소</li></ul></div>
    <div class="theory-section"><h4>풋마름병 (청고병)</h4><ul><li>병원균: <strong>Ralstonia solanacearum</strong></li><li>관다발(물관부)을 막아 물 이동 차단 → <strong>급격히 시들음</strong></li><li>잎이 푸른 채로 시드는 것이 특징 (청고: 푸를 청, 마를 고)</li><li>피해: 토마토, 고추, 가지, 감자</li><li>토양 전염, 고온다습 조건</li></ul></div>
    <div class="theory-section"><h4>궤양병</h4><ul><li>병원균: Xanthomonas속 세균</li><li>잎·과실에 궤양(움푹 파인) 병반 형성</li><li>피해: 감귤 궤양병 (검역 대상)</li></ul></div>
    <div class="theory-section"><h4>세균병 공통 방제법</h4><ul><li>상처 방지 (세균은 상처·기공으로 침입)</li><li>동제(구리제) 살포: 보르도액, 수산화동</li><li>항생제: 옥시테트라사이클린, 스트렙토마이신</li><li>저항성 품종, 토양 소독</li></ul></div>`,
    relatedQuestions:["q035","q036"]
  },
  {
    id:"t015",level:"중급",subject:"농업해충학",topic:"대표 해충",
    title:"응애·총채벌레·온실가루이",
    summary:"시설재배에서 문제되는 3대 미소 해충 - 방제법 차이 주의",
    keywords:["응애","총채벌레","온실가루이","살비제","청색 트랩","황색 트랩"],
    content:`<div class="theory-section"><h4>점박이응애</h4><ul><li>거미줄로 잎 뒷면에 집단 서식, 수액 흡즙 → 흰색 반점</li><li>고온건조 시 폭발적 증가</li><li>곤충이 아닌 거미류 → <strong>살충제 효과 없음, 살비제 사용!</strong></li><li>아바멕틴, 헥시티아족스, 페나자퀸 등</li><li>천적: 칠레이리응애</li></ul></div>
    <div class="theory-section"><h4>꽃노랑총채벌레</h4><ul><li>꽃·잎 흡즙, 은백색 반점·상흔</li><li><strong>TSWV(토마토반점위조바이러스)</strong> 매개</li><li><strong>청색 끈끈이트랩</strong> 이용 (총채벌레는 청색 선호)</li><li>스피노사드, 아세타미프리드 등</li><li>천적: 오이이리응애</li></ul></div>
    <div class="theory-section"><h4>온실가루이 (담배가루이 포함)</h4><ul><li>잎 뒷면에 흰 가루 같은 성충이 집단 서식</li><li>수액 흡즙 + 감로 분비(그을음병 유발)</li><li>담배가루이: TYLCV(토마토황화잎말림병바이러스) 매개</li><li><strong>황색 끈끈이트랩</strong> 이용</li><li>부프로페진, 이미다클로프리드 등</li></ul></div>
    <div class="theory-section"><h4>트랩 색깔 암기!</h4><table class="compare-table"><tr><th>해충</th><th>트랩 색</th></tr><tr><td>진딧물, 온실가루이</td><td>황색 (노란색)</td></tr><tr><td>총채벌레</td><td>청색 (파란색)</td></tr></table></div>`,
    relatedQuestions:["q037","q038","q039"]
  },
  {
    id:"t016",level:"중급",subject:"잡초방제학",topic:"제초제",
    title:"제초제의 종류와 선택",
    summary:"선택성·비선택성, 접촉형·이행형으로 나뉘는 제초제 완벽 정리",
    keywords:["선택성 제초제","비선택성 제초제","접촉형","이행형","글리포세이트","파라콰트"],
    content:`<div class="theory-section"><h4>선택성 vs 비선택성</h4><table class="compare-table"><tr><th>구분</th><th>선택성</th><th>비선택성</th></tr><tr><td>특성</td><td>특정 식물만 방제</td><td>모든 식물 방제</td></tr><tr><td>사용 시기</td><td>작물 생육 중 사용 가능</td><td>파종·이식 전 또는 비경작지</td></tr><tr><td>예</td><td>2,4-D, 이마자픽, 할록시폽</td><td>글리포세이트, 파라콰트</td></tr></table></div>
    <div class="theory-section"><h4>접촉형 vs 이행형</h4><table class="compare-table"><tr><th>구분</th><th>접촉형</th><th>이행형(침투이행형)</th></tr><tr><td>작용</td><td>약제 닿은 부위만 고사</td><td>식물 체내 이동, 뿌리까지 고사</td></tr><tr><td>다년생 효과</td><td>낮음 (뿌리 살아있음)</td><td>높음 (뿌리까지 고사)</td></tr><tr><td>예</td><td>파라콰트</td><td>글리포세이트</td></tr></table></div>
    <div class="theory-section"><h4>처리 시기에 따른 분류</h4><ul><li><strong>토양처리제</strong>: 잡초 발아 전 토양에 처리 (예방적 효과)</li><li><strong>경엽처리제</strong>: 이미 발아한 잡초의 잎에 직접 처리</li></ul></div>
    <div class="theory-section"><h4>주요 제초제 특징 (시험 빈출!)</h4><table class="compare-table"><tr><th>약제명</th><th>특성</th><th>주용도</th></tr><tr><td>글리포세이트</td><td>비선택성, 이행형</td><td>비경작지, 과수원</td></tr><tr><td>파라콰트</td><td>비선택성, 접촉형</td><td>비경작지 (맹독성!)</td></tr><tr><td>2,4-D</td><td>선택성, 광엽 방제</td><td>벼논 광엽 잡초</td></tr><tr><td>부타클로르</td><td>선택성, 토양처리</td><td>논 초기 방제</td></tr></table></div>`,
    relatedQuestions:["q040","q041","q042"]
  },
  {
    id:"t017",level:"중급",subject:"농약학",topic:"농약 제형·독성",
    title:"농약 제형과 독성 구분",
    summary:"유제·수화제·분제 등 제형의 특징과 독성 등급 완벽 정리",
    keywords:["유제","수화제","분제","입제","독성","LD50","맹독성"],
    content:`<div class="theory-section"><h4>주요 농약 제형</h4><table class="compare-table"><tr><th>제형</th><th>특징</th><th>희석</th></tr><tr><td>유제 (EC)</td><td>유기용매에 녹임, 잎에 잘 부착</td><td>물에 희석</td></tr><tr><td>수화제 (WP)</td><td>물에 현탁, 약효 지속</td><td>물에 희석</td></tr><tr><td>액상수화제 (SC)</td><td>분말 없는 현탁액, 사용 편리</td><td>물에 희석</td></tr><tr><td>분제 (D)</td><td>분말 형태, 그대로 살포</td><td>희석 불필요</td></tr><tr><td>입제 (G)</td><td>알갱이 형태, 토양 처리</td><td>희석 불필요</td></tr><tr><td>훈연제</td><td>연기 형태, 시설 내 사용</td><td>점화 사용</td></tr></table></div>
    <div class="theory-section"><h4>독성 구분 (LD50 기준, 경구)</h4><table class="compare-table"><tr><th>독성 등급</th><th>LD50 (mg/kg)</th><th>표시</th></tr><tr><td>맹독성</td><td>50 이하</td><td>적색 도해표시</td></tr><tr><td>고독성</td><td>50~500</td><td>적색 도해표시</td></tr><tr><td>보통독성</td><td>500~5000</td><td>황색 도해표시</td></tr><tr><td>저독성</td><td>5000 이상</td><td>녹색 도해표시</td></tr></table></div>
    <div class="theory-section"><h4>농약 라벨 읽기</h4><ul><li>농약명, 품목명, 등록번호 확인</li><li>작물명·적용 병해충 확인 (미등록 작물 사용 금지)</li><li>희석 배수, PHI(수확 전 안전일수) 반드시 확인</li><li>독성 표시 확인 후 적절한 보호구 착용</li></ul></div>`,
    relatedQuestions:["q043","q044","q045"]
  },
  {
    id:"t018",level:"중급",subject:"농약학",topic:"살충제",
    title:"살충제의 작용 기작과 계통",
    summary:"신경계 작용 기작에 따른 살충제 분류와 저항성 관리법",
    keywords:["유기인계","카바메이트계","피레스로이드계","네오니코티노이드계","작용 기작","저항성"],
    content:`<div class="theory-section"><h4>주요 살충제 계통</h4><table class="compare-table"><tr><th>계통</th><th>작용 기작</th><th>대표 약제</th></tr><tr><td>유기인계</td><td>콜린에스테라제 저해</td><td>클로르피리포스, 디메토에이트</td></tr><tr><td>카바메이트계</td><td>콜린에스테라제 저해</td><td>카보퓨란, 메티오카브</td></tr><tr><td>피레스로이드계</td><td>신경 Na채널 교란</td><td>사이퍼메트린, 델타메트린</td></tr><tr><td>네오니코티노이드계</td><td>니코틴성 수용체 자극</td><td>이미다클로프리드, 아세타미프리드</td></tr><tr><td>스피노신계</td><td>니코틴성 수용체 교란</td><td>스피노사드</td></tr><tr><td>다이아미드계</td><td>라이아노딘 수용체 활성화</td><td>클로란트라닐리프롤</td></tr></table></div>
    <div class="theory-section"><h4>저항성 관리 (중요!)</h4><ul><li>동일 계통 약제의 반복·연속 사용 → 저항성 해충 발생</li><li><strong>교호 살포</strong>: 작용 기작이 다른 계통을 번갈아 사용</li><li>천적 보호를 위해 선택성 농약 우선 사용</li></ul></div>`,
    relatedQuestions:["q046","q047"]
  },

  // ═══════════════════════════════════════
  // 고급
  // ═══════════════════════════════════════
  {
    id:"t019",level:"고급",subject:"식물병리학",topic:"병 종합",
    title:"병원체별 방제 전략 비교",
    summary:"곰팡이·세균·바이러스·선충별 방제법과 약제 선택 원칙",
    keywords:["살균제","항생제","바이러스","선충","보호살균제","치료살균제"],
    content:`<div class="theory-section"><h4>병원체별 방제 전략</h4><table class="compare-table"><tr><th>병원체</th><th>방제약</th><th>핵심 전략</th></tr><tr><td>곰팡이</td><td>살균제 (예방+치료)</td><td>예방 중심, 비오기 전 살포</td></tr><tr><td>세균</td><td>항생제, 동제</td><td>상처·기공 통해 침입 → 상처 관리</td></tr><tr><td>바이러스</td><td>치료제 없음</td><td>매개충 방제, 이병주 즉시 제거</td></tr><tr><td>선충</td><td>살선충제, 훈증제</td><td>토양 처리, 저항성 품종</td></tr></table></div>
    <div class="theory-section"><h4>살균제 분류</h4><table class="compare-table"><tr><th>구분</th><th>작용</th><th>대표 약제</th></tr><tr><td>보호살균제</td><td>병원균 침입 전 예방</td><td>만코제브, 보르도액, 클로로탈로닐</td></tr><tr><td>치료살균제</td><td>침입 후에도 방제 가능</td><td>베노밀, 트리플록시스트로빈</td></tr><tr><td>침투이행성</td><td>식물 체내 이동</td><td>프로피코나졸, 테부코나졸</td></tr></table></div>
    <div class="theory-section"><h4>동제(구리제)의 특징</h4><ul><li>보르도액(황산구리+석회), 수산화동 등</li><li>살균+살세균 효과</li><li>약해 주의 (어린 조직, 고온 시)</li><li>내성균 발달 느림 → 오래전부터 사용</li></ul></div>`,
    relatedQuestions:["q048","q049","q050"]
  },
  {
    id:"t020",level:"고급",subject:"농업해충학",topic:"해충 종합",
    title:"IPM - 종합적 해충 관리",
    summary:"화학·생물·물리·경종적 방제를 통합한 현대적 해충 관리",
    keywords:["IPM","ETL","경제적 피해 허용 수준","천적","생물적 방제"],
    content:`<div class="theory-section"><h4>IPM이란?</h4><p>Integrated Pest Management. 경제적 피해 수준 이하로 해충을 관리하기 위해 여러 방제법을 통합·활용하는 전략.</p></div>
    <div class="theory-section"><h4>방제 방법 우선순위</h4><ol style="padding-left:18px;font-size:14px;line-height:2;color:#40514e"><li><strong>경종적 방제</strong>: 저항성 품종, 윤작, 재배 시기 조절</li><li><strong>물리적 방제</strong>: 방충망, 끈끈이트랩, 열처리</li><li><strong>생물적 방제</strong>: 천적, 미생물 농약 (Bt제)</li><li><strong>화학적 방제</strong>: 최후 수단</li></ol></div>
    <div class="theory-section"><h4>경제적 피해 허용 수준 (ETL)</h4><p>방제 비용 = 피해 손실액이 되는 해충 밀도. 이 이하에서는 방제 불필요. 불필요한 농약 사용을 줄이는 핵심 개념.</p></div>
    <div class="theory-section"><h4>주요 천적 정리</h4><table class="compare-table"><tr><th>해충</th><th>천적</th></tr><tr><td>진딧물</td><td>무당벌레, 풀잠자리, 기생봉</td></tr><tr><td>점박이응애</td><td>칠레이리응애, 긴털이리응애</td></tr><tr><td>총채벌레</td><td>오이이리응애</td></tr><tr><td>온실가루이</td><td>온실가루이좀벌</td></tr><tr><td>나방류 유충</td><td>고치벌, 맵시벌</td></tr></table></div>`,
    relatedQuestions:["q051","q052"]
  },
  {
    id:"t021",level:"고급",subject:"잡초방제학",topic:"잡초방제 심화",
    title:"작물별 잡초방제 전략",
    summary:"논·밭·과수원별 주요 잡초 방제법과 제초제 저항성 관리",
    keywords:["논잡초","밭잡초","물리적 방제","멀칭","제초제 저항성"],
    content:`<div class="theory-section"><h4>논 잡초 방제</h4><ul><li>이앙 전: 경운, 써레질로 기계적 방제</li><li>이앙 직후: 토양처리제 (부타클로르, 벤설퓨론메틸 등)</li><li>이앙 후 2~3주: 경엽처리제</li><li>담수 유지가 피 방제에 효과적</li></ul></div>
    <div class="theory-section"><h4>밭 잡초 방제</h4><ul><li>흑색 멀칭 필름: 빛 차단으로 잡초 억제 (가장 효과적)</li><li>경운·중경: 기계적 제거</li><li>윤작: 특정 잡초 억제</li><li>선택성 제초제: 작물 종류에 맞게 선택</li></ul></div>
    <div class="theory-section"><h4>제초제 저항성 관리</h4><ul><li>동일 계통 제초제 반복 사용 → 저항성 잡초 발생</li><li>작용 기작 다른 제초제 교호 사용</li><li>기계적·물리적 방제 병행</li><li>저항성 잡초 발생 포장 격리 관리</li></ul></div>`,
    relatedQuestions:["q053","q054"]
  },
  {
    id:"t022",level:"고급",subject:"농약학",topic:"농약 심화",
    title:"약해·혼용 적부·잔류",
    summary:"약해 발생 원인, 혼용 가능 여부 판단, 농약 잔류 기준",
    keywords:["약해","혼용","잔류농약","MRL","PHI","안전성"],
    content:`<div class="theory-section"><h4>약해(藥害) 발생 원인</h4><ul><li>적정 희석 배수보다 <strong>고농도</strong> 사용</li><li>고온(30°C 이상) 시 살포</li><li>어린 식물체(유묘)에 강한 약제 사용</li><li>호환되지 않는 약제 혼용</li><li>살포 간격 너무 짧음</li></ul></div>
    <div class="theory-section"><h4>약해 증상</h4><ul><li>잎 끝·가장자리 갈변, 잎 전체 황화</li><li>잎 뒤틀림·기형</li><li>낙엽, 낙과</li><li>생육 억제, 기형 과실</li></ul></div>
    <div class="theory-section"><h4>농약 혼용</h4><ul><li>혼용 가능: 효과 증대, 작업 효율 향상</li><li>혼용 불가: 약효 저하, 약해 발생, 침전·분리</li><li>알칼리성 + 산성 농약 혼용 주의</li><li>반드시 혼용 가부표 확인 후 사용</li></ul></div>
    <div class="theory-section"><h4>농약 잔류 기준 (MRL)</h4><ul><li>MRL: Maximum Residue Limit (잔류 허용 기준)</li><li>PHI: 수확 전 안전일수 준수 → MRL 이하 보장</li><li>PLS(농약 허용 물질 목록 관리 제도): 등록되지 않은 농약 불검출 원칙</li></ul></div>`,
    relatedQuestions:["q055","q056","q057"]
  }
];
