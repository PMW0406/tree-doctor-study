const THEORIES = [
  // ===================== 수목병리학 =====================
  {
    id: "t001",
    subject: "수목병리학",
    topic: "곰팡이병",
    title: "흰가루병",
    summary: "잎 표면에 흰색 분말상 균사가 나타나는 병",
    keywords: ["흰색 가루", "균사", "잎 표면", "분말상"],
    content: `
      <h3>흰가루병 (Powdery Mildew)</h3>
      <div class="theory-section">
        <h4>핵심 병징</h4>
        <ul>
          <li>잎 표면에 <strong>흰색 분말상 균사</strong>가 나타남</li>
          <li>초기에는 흰색 반점, 점차 잎 전체로 확산</li>
          <li>심하면 잎이 뒤틀리거나 조기 낙엽</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>발생 조건</h4>
        <ul>
          <li>건조하고 통풍이 나쁜 조건</li>
          <li>온도 17~25°C에서 잘 발생</li>
          <li>밀식 재배, 질소 과다 시 피해 증가</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>주요 피해 수종</h4>
        <p>장미, 단풍나무, 참나무류, 배롱나무, 사과나무</p>
      </div>
      <div class="theory-section">
        <h4>헷갈리는 병 비교</h4>
        <table class="compare-table">
          <tr><th>구분</th><th>흰가루병</th><th>녹병</th><th>그을음병</th></tr>
          <tr><td>병징 색</td><td>흰색 가루</td><td>황색·녹슨색</td><td>검은색</td></tr>
          <tr><td>발생 부위</td><td>잎 표면</td><td>잎 뒷면 주로</td><td>잎 표면</td></tr>
          <tr><td>원인</td><td>자낭균</td><td>담자균</td><td>곰팡이 + 해충</td></tr>
        </table>
      </div>
    `,
    relatedQuestions: ["q001", "q002"]
  },
  {
    id: "t002",
    subject: "수목병리학",
    topic: "세균병",
    title: "불마름병 (화상병)",
    summary: "꽃·잎이 마치 불에 탄 것처럼 검게 말라 죽는 세균병",
    keywords: ["화상병", "세균병", "Erwinia amylovora", "장미과"],
    content: `
      <h3>불마름병 (Fire Blight)</h3>
      <div class="theory-section">
        <h4>핵심 병징</h4>
        <ul>
          <li>꽃, 잎, 어린 가지가 <strong>불에 탄 것처럼</strong> 검게 마름</li>
          <li>가지 끝이 갈고리 모양으로 구부러짐 (목동이 지팡이 모양)</li>
          <li>습한 날씨에 세균 점액 분비</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>병원균</h4>
        <p><strong>Erwinia amylovora</strong> (세균)</p>
        <ul>
          <li>법정 식물검역대상 병해</li>
          <li>주요 전파 경로: 곤충, 바람, 비, 전정 도구</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>주요 피해 수종</h4>
        <p>사과나무, 배나무, 모과나무 등 <strong>장미과</strong> 식물</p>
      </div>
      <div class="theory-section">
        <h4>방제</h4>
        <ul>
          <li>감염된 가지 즉시 제거 (건전부 30cm 아래까지)</li>
          <li>전정 도구 소독 필수</li>
          <li>항생제 (옥시테트라사이클린) 살포</li>
        </ul>
      </div>
    `,
    relatedQuestions: ["q003"]
  },
  {
    id: "t003",
    subject: "수목병리학",
    topic: "수간병",
    title: "소나무재선충병",
    summary: "소나무재선충이 매개충을 통해 소나무를 급격히 고사시키는 병",
    keywords: ["재선충", "솔수염하늘소", "북방수염하늘소", "급격한 시들음", "소나무"],
    content: `
      <h3>소나무재선충병 (Pine Wilt Disease)</h3>
      <div class="theory-section">
        <h4>핵심 정보</h4>
        <ul>
          <li>병원체: <strong>Bursaphelenchus xylophilus</strong> (소나무재선충)</li>
          <li>매개충: <strong>솔수염하늘소</strong>, <strong>북방수염하늘소</strong></li>
          <li>감염 후 <strong>당해연도 내 고사</strong> (급격한 피해)</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>병징</h4>
        <ul>
          <li>잎이 급격히 시들고 갈변 (7~9월 주로 발견)</li>
          <li>수지 분비 급격히 감소 또는 소실</li>
          <li>나무 전체가 적갈색으로 변색 후 고사</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>전파 경로</h4>
        <p>매개충이 <strong>건강한 소나무 수피 후식</strong> → 재선충 감염 → 소나무 고사 → 매개충 산란 → 재선충 탈출</p>
      </div>
      <div class="theory-section">
        <h4>방제</h4>
        <ul>
          <li>감염목 즉시 벌채 후 소각 또는 파쇄</li>
          <li>예방약제 (아바멕틴계) 수간주사</li>
          <li>매개충 방제 (항공·지상 약제 살포)</li>
          <li>반출 금지 구역 지정</li>
        </ul>
      </div>
    `,
    relatedQuestions: ["q004", "q005"]
  },
  {
    id: "t004",
    subject: "수목병리학",
    topic: "뿌리병",
    title: "뿌리혹병 (근두암종병)",
    summary: "뿌리나 지제부에 암종 같은 혹이 생기는 세균병",
    keywords: ["근두암종병", "Agrobacterium", "혹", "뿌리", "세균"],
    content: `
      <h3>뿌리혹병 (Crown Gall)</h3>
      <div class="theory-section">
        <h4>핵심 정보</h4>
        <ul>
          <li>병원균: <strong>Agrobacterium tumefaciens</strong> (세균)</li>
          <li>발생 부위: 뿌리, 지제부, 줄기</li>
          <li>병징: 불규칙한 혹(암종) 형성</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>발생 원리</h4>
        <p>세균이 식물 세포에 Ti 플라스미드를 주입 → 세포 이상 증식 → 혹 형성</p>
      </div>
      <div class="theory-section">
        <h4>주요 피해 수종</h4>
        <p>장미, 사과나무, 포도나무, 복숭아나무 등 다수</p>
      </div>
      <div class="theory-section">
        <h4>방제</h4>
        <ul>
          <li>감염 묘목 사용 금지</li>
          <li>토양 소독</li>
          <li>Agrobacterium radiobacter K84 (생물적 방제)</li>
        </ul>
      </div>
    `,
    relatedQuestions: ["q006"]
  },
  {
    id: "t005",
    subject: "수목병리학",
    topic: "엽고병",
    title: "갈색무늬병 (갈반병)",
    summary: "잎에 갈색 반점이 생기는 곰팡이성 병",
    keywords: ["갈색반점", "엽고병", "갈반병", "곰팡이", "잎"],
    content: `
      <h3>갈색무늬병 (Brown Spot)</h3>
      <div class="theory-section">
        <h4>핵심 병징</h4>
        <ul>
          <li>잎에 <strong>갈색~황갈색 반점</strong> 형성</li>
          <li>반점 주변에 황색 테두리 (황색 운무)</li>
          <li>심하면 조기 낙엽</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>주요 피해 수종</h4>
        <p>소나무, 벚나무, 단풍나무, 플라타너스</p>
      </div>
      <div class="theory-section">
        <h4>방제</h4>
        <ul>
          <li>낙엽 제거 및 소각 (전염원 제거)</li>
          <li>만코제브, 클로로탈로닐 등 살균제 살포</li>
          <li>통풍 개선</li>
        </ul>
      </div>
    `,
    relatedQuestions: []
  },

  // ===================== 수목해충학 =====================
  {
    id: "t006",
    subject: "수목해충학",
    topic: "흡즙해충",
    title: "솔껍질깍지벌레",
    summary: "소나무 수피 밑에서 수액을 흡즙하여 소나무를 쇠약하게 만드는 해충",
    keywords: ["솔껍질깍지벌레", "소나무", "흡즙", "깍지벌레"],
    content: `
      <h3>솔껍질깍지벌레</h3>
      <div class="theory-section">
        <h4>기본 정보</h4>
        <ul>
          <li>분류: 반시목 깍지벌레과</li>
          <li>가해 수종: 소나무, 해송 등 소나무류</li>
          <li>피해: 수피 밑에서 수액 흡즙 → 수세 약화 → 고사</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>생활사</h4>
        <ul>
          <li>1년 1세대</li>
          <li>약충 월동 → 봄에 성충 우화 → 산란 → 약충 발생</li>
          <li>피해는 주로 수피에 흰색 분비물로 확인</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>방제</h4>
        <ul>
          <li>약충 발생 시기 (4~5월) 살충제 살포</li>
          <li>천적 이용 (기생봉)</li>
          <li>수간주사 (이미다클로프리드)</li>
        </ul>
      </div>
    `,
    relatedQuestions: ["q007"]
  },
  {
    id: "t007",
    subject: "수목해충학",
    topic: "식엽해충",
    title: "미국흰불나방",
    summary: "잡식성 식엽해충으로 활엽수 잎을 집단으로 가해하는 나방",
    keywords: ["미국흰불나방", "식엽", "잡식성", "거미줄 집", "활엽수"],
    content: `
      <h3>미국흰불나방 (Fall Webworm)</h3>
      <div class="theory-section">
        <h4>기본 정보</h4>
        <ul>
          <li>분류: 인시목 불나방과</li>
          <li>원산지: 북미 (외래해충)</li>
          <li>가해 수종: 300여 종 활엽수 (플라타너스, 벚나무, 포플러 등)</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>피해 특징</h4>
        <ul>
          <li><strong>거미줄 같은 망으로 잎을 싸고 집단 가해</strong></li>
          <li>1세대 (7월), 2세대 (9월) 피해</li>
          <li>유충이 잎을 먹어 나뭇가지만 남김</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>생활사</h4>
        <p>성충 산란 → 유충 집단 가해 → 번데기 (수피 틈) 월동 → 다음해 성충</p>
      </div>
      <div class="theory-section">
        <h4>방제</h4>
        <ul>
          <li>피해 가지 제거 및 소각</li>
          <li>유충 초기 살충제 (Bt제 등) 살포</li>
          <li>성충 유인 포살 (페로몬 트랩)</li>
        </ul>
      </div>
    `,
    relatedQuestions: ["q008"]
  },
  {
    id: "t008",
    subject: "수목해충학",
    topic: "천공해충",
    title: "솔수염하늘소",
    summary: "소나무재선충의 매개충으로 소나무류 줄기에 구멍을 뚫어 산란하는 해충",
    keywords: ["솔수염하늘소", "재선충 매개충", "천공", "소나무"],
    content: `
      <h3>솔수염하늘소</h3>
      <div class="theory-section">
        <h4>기본 정보</h4>
        <ul>
          <li>분류: 딱정벌레목 하늘소과</li>
          <li><strong>소나무재선충의 주요 매개충</strong></li>
          <li>가해 수종: 소나무, 해송, 잣나무</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>생활사</h4>
        <ul>
          <li>1년 1세대 (주로)</li>
          <li>성충 우화 (6~8월) → 건강한 소나무 신초 <strong>후식</strong> 시 재선충 전파</li>
          <li>쇠약목·고사목에 산란 → 유충이 목질부 가해 → 번데기 → 성충</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>재선충 전파 메커니즘</h4>
        <p>번데기 시기에 재선충이 성충 기관지에 침입 → 성충 후식 때 건강목에 전파</p>
      </div>
      <div class="theory-section">
        <h4>방제</h4>
        <ul>
          <li>우화 시기 항공 살충제 살포</li>
          <li>피해목 즉시 벌채 (성충 탈출 전)</li>
          <li>끈끈이 트랩, 페로몬 트랩</li>
        </ul>
      </div>
    `,
    relatedQuestions: ["q004", "q009"]
  },

  // ===================== 수목생리학 =====================
  {
    id: "t009",
    subject: "수목생리학",
    topic: "광합성",
    title: "광합성과 호흡",
    summary: "수목의 광합성과 호흡의 기본 원리와 영향 요인",
    keywords: ["광합성", "호흡", "광보상점", "광포화점", "엽록소"],
    content: `
      <h3>광합성과 호흡</h3>
      <div class="theory-section">
        <h4>광합성 기본 공식</h4>
        <p class="formula">6CO₂ + 12H₂O + 빛에너지 → C₆H₁₂O₆ + 6O₂ + 6H₂O</p>
      </div>
      <div class="theory-section">
        <h4>핵심 개념</h4>
        <ul>
          <li><strong>광보상점</strong>: 광합성량 = 호흡량이 되는 광도 → 양수 &gt; 음수</li>
          <li><strong>광포화점</strong>: 더 이상 광합성이 증가하지 않는 광도 → 양수 &gt; 음수</li>
          <li><strong>음수</strong>: 낮은 광도에서도 생장 가능 (광보상점, 광포화점 모두 낮음)</li>
          <li><strong>양수</strong>: 강한 빛에서 잘 자람 (광보상점, 광포화점 모두 높음)</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>양수 vs 음수</h4>
        <table class="compare-table">
          <tr><th>구분</th><th>양수</th><th>음수</th></tr>
          <tr><td>광보상점</td><td>높음</td><td>낮음</td></tr>
          <tr><td>광포화점</td><td>높음</td><td>낮음</td></tr>
          <tr><td>예시 수종</td><td>소나무, 은행나무, 자작나무</td><td>전나무, 주목, 비자나무</td></tr>
        </table>
      </div>
    `,
    relatedQuestions: ["q010"]
  },
  {
    id: "t010",
    subject: "수목생리학",
    topic: "수분생리",
    title: "수분 이동과 증산작용",
    summary: "뿌리에서 잎까지 물이 이동하는 원리와 기공의 역할",
    keywords: ["증산작용", "삼투압", "수분퍼텐셜", "기공", "물관"],
    content: `
      <h3>수분 이동과 증산작용</h3>
      <div class="theory-section">
        <h4>수분 흡수 경로</h4>
        <p>토양수 → 뿌리털 → 피층 → 내피 → 물관 → 줄기 물관 → 잎 물관 → 기공 → 대기</p>
      </div>
      <div class="theory-section">
        <h4>수분 이동 원리</h4>
        <ul>
          <li><strong>삼투압</strong>: 농도 차에 의한 물의 이동</li>
          <li><strong>응집력-장력설</strong>: 증산으로 물 분자가 연속적으로 당겨 올라옴</li>
          <li>수분퍼텐셜이 높은 곳 → 낮은 곳으로 이동</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>증산에 영향하는 요인</h4>
        <ul>
          <li>온도 높을수록 증가</li>
          <li>습도 낮을수록 증가</li>
          <li>바람이 강할수록 증가</li>
          <li>광도 높을수록 기공 열림 → 증가</li>
        </ul>
      </div>
    `,
    relatedQuestions: []
  },

  // ===================== 산림토양학 =====================
  {
    id: "t011",
    subject: "산림토양학",
    topic: "토양 물리성",
    title: "토양 구조와 토성",
    summary: "토양을 구성하는 입자의 크기와 토양 구조의 기본 개념",
    keywords: ["토성", "토양삼상", "모래", "미사", "점토", "토양구조"],
    content: `
      <h3>토양 구조와 토성</h3>
      <div class="theory-section">
        <h4>토양 삼상</h4>
        <ul>
          <li><strong>고상</strong> (무기물 + 유기물): 약 50%</li>
          <li><strong>액상</strong> (토양수): 약 25%</li>
          <li><strong>기상</strong> (토양공기): 약 25%</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>토양 입자 크기 (국제기준)</h4>
        <table class="compare-table">
          <tr><th>구분</th><th>직경</th></tr>
          <tr><td>자갈</td><td>2mm 이상</td></tr>
          <tr><td>모래 (조사~세사)</td><td>0.02~2mm</td></tr>
          <tr><td>미사 (실트)</td><td>0.002~0.02mm</td></tr>
          <tr><td>점토</td><td>0.002mm 이하</td></tr>
        </table>
      </div>
      <div class="theory-section">
        <h4>이상적인 산림 토양</h4>
        <ul>
          <li>양토~사양토 (모래 + 점토 적정 비율)</li>
          <li>유기물 함량 높음</li>
          <li>공극률 50% 이상</li>
          <li>pH 5.5~6.5</li>
        </ul>
      </div>
    `,
    relatedQuestions: ["q011"]
  },
  {
    id: "t012",
    subject: "산림토양학",
    topic: "토양 화학성",
    title: "토양 pH와 영양소",
    summary: "토양 산도가 수목 생육에 미치는 영향과 필수 영양소",
    keywords: ["pH", "산성 토양", "영양소", "질소", "인산", "칼륨"],
    content: `
      <h3>토양 pH와 영양소</h3>
      <div class="theory-section">
        <h4>토양 pH 영향</h4>
        <ul>
          <li>대부분 수목: pH 5.5~6.5 적합</li>
          <li>산성이 강하면 (pH 4 이하): Al, Mn 독성 증가</li>
          <li>알칼리성이면: Fe, Mn, Cu, Zn 불용화 → 결핍증</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>필수 대량원소 (NPK)</h4>
        <table class="compare-table">
          <tr><th>원소</th><th>역할</th><th>결핍 증상</th></tr>
          <tr><td>질소 (N)</td><td>단백질, 엽록소 합성</td><td>황화현상, 하위엽부터</td></tr>
          <tr><td>인산 (P)</td><td>에너지 대사, 뿌리 발달</td><td>자색~적자색, 하위엽부터</td></tr>
          <tr><td>칼륨 (K)</td><td>삼투조절, 효소 활성</td><td>잎 가장자리 황화·갈변</td></tr>
        </table>
      </div>
    `,
    relatedQuestions: ["q012"]
  },

  // ===================== 수목관리학 =====================
  {
    id: "t013",
    subject: "수목관리학",
    topic: "전정",
    title: "전정의 종류와 시기",
    summary: "수목의 목적에 맞는 전정 방법과 적절한 시기",
    keywords: ["전정", "정지", "솎음 전정", "절단 전정", "생장조절"],
    content: `
      <h3>전정의 종류와 시기</h3>
      <div class="theory-section">
        <h4>전정의 목적</h4>
        <ul>
          <li>수형 유지 및 미관 향상</li>
          <li>수세 조절 및 생장 촉진</li>
          <li>병해충 예방 (채광, 통풍 개선)</li>
          <li>개화·결실 조절</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>전정의 종류</h4>
        <table class="compare-table">
          <tr><th>종류</th><th>내용</th></tr>
          <tr><td>솎음 전정</td><td>가지를 분기점에서 제거, 수형 자연스럽게 유지</td></tr>
          <tr><td>절단 전정</td><td>가지 중간을 자름, 강한 생장 유도</td></tr>
          <tr><td>강전정</td><td>굵은 가지까지 대폭 제거, 수형 재구성</td></tr>
        </table>
      </div>
      <div class="theory-section">
        <h4>전정 시기</h4>
        <ul>
          <li><strong>낙엽수</strong>: 낙엽 후~이른 봄 (겨울 휴면기) 적합</li>
          <li><strong>상록수</strong>: 봄 신초 성장 후 (6월), 또는 가을</li>
          <li><strong>피해야 할 시기</strong>: 생장 왕성기, 혹서기, 혹한기</li>
          <li>개화 수종: 꽃이 진 직후 전정</li>
        </ul>
      </div>
    `,
    relatedQuestions: ["q013"]
  },
  {
    id: "t014",
    subject: "수목관리학",
    topic: "이식",
    title: "수목 이식 방법과 관리",
    summary: "수목 이식 시 뿌리돌림, 굴취, 운반, 식재, 사후관리 방법",
    keywords: ["이식", "뿌리돌림", "굴취", "분 만들기", "활착"],
    content: `
      <h3>수목 이식 방법과 관리</h3>
      <div class="theory-section">
        <h4>이식 순서</h4>
        <p>뿌리돌림 → 굴취 → 운반 → 식재 → 사후관리</p>
      </div>
      <div class="theory-section">
        <h4>뿌리돌림</h4>
        <ul>
          <li>이식 1~3년 전 실시</li>
          <li>세근(잔뿌리) 발달 유도</li>
          <li>굵은 뿌리는 절단, 가는 뿌리는 보존</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>적정 이식 시기</h4>
        <ul>
          <li><strong>최적</strong>: 봄 (이른 봄~새잎 나오기 전)</li>
          <li><strong>차선</strong>: 가을 (낙엽 후)</li>
          <li><strong>상록수</strong>: 장마철 이식도 가능</li>
          <li><strong>피해야 할 시기</strong>: 한여름 생장기, 한겨울</li>
        </ul>
      </div>
      <div class="theory-section">
        <h4>분의 크기 (일반 기준)</h4>
        <p>뿌리분 직경 = 근원직경의 <strong>4~6배</strong></p>
      </div>
    `,
    relatedQuestions: ["q014"]
  }
];
