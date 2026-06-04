const THEORIES = [
  // ═══════════════════════════════════════
  // 초급
  // ═══════════════════════════════════════
  {
    id:"t001",level:"초급",subject:"식물병리학",topic:"병의 기초",
    title:"식물병의 기초 개념",
    summary:"병삼각형·병원체 종류·전염 경로까지 기출 핵심 정리",
    keywords:["식물병","병삼각형","전염성","비전염성","병원체"],
    content:`<div class="theory-section"><h4>병삼각형 (3요소)</h4><ul><li><strong>기주</strong>: 병에 걸리는 식물</li><li><strong>병원체</strong>: 곰팡이, 세균, 바이러스, 선충 등</li><li><strong>환경</strong>: 온도, 습도 등 발병 조건</li></ul><p>세 가지가 동시에 맞아야 발병해요!</p></div>
    <div class="theory-section"><h4>병원체 종류별 특징 (기출 빈출!)</h4><table class="compare-table"><tr><th>병원체</th><th>비율</th><th>특징</th><th>대표 병</th></tr><tr><td>곰팡이(진균)</td><td>70% 이상</td><td>포자로 전파, 살균제로 방제</td><td>역병, 탄저병, 도열병</td></tr><tr><td>세균</td><td>~10%</td><td>단세포, 항생제·동제로 방제</td><td>무름병, 풋마름병</td></tr><tr><td>바이러스</td><td>~10%</td><td>가장 작음, 치료제 없음</td><td>모자이크병</td></tr><tr><td>선충</td><td>~5%</td><td>동물계, 뿌리 주로 피해</td><td>뿌리혹선충병</td></tr></table></div>
    <div class="theory-section"><h4>전염 경로 (기출!)</h4><ul><li>토양 전염: 역병, 풋마름병, 뿌리혹선충</li><li>종자 전염: 도열병, 깨씨무늬병</li><li>충매 전염: 바이러스병 (진딧물, 총채벌레 매개)</li><li>기류(바람) 전염: 도열병, 흰가루병 포자</li><li>수매 전염: 무름병, 도열병 (빗물·관개수)</li></ul></div>
    <div class="theory-section"><h4>전염성 vs 비전염성</h4><table class="compare-table"><tr><th>전염성 병</th><th>비전염성 병</th></tr><tr><td>다른 식물로 전파 가능</td><td>전파 안 됨</td></tr><tr><td>병원체 존재</td><td>환경·영양 문제</td></tr><tr><td>역병, 탄저병 등</td><td>동해, 가뭄, 영양 결핍</td></tr></table></div>`,
    relatedQuestions:["q001","q002","q003","q004","q005"]
  },
  {
    id:"t002",level:"초급",subject:"식물병리학",topic:"곰팡이병",
    title:"역병",
    summary:"고온다습한 장마철 채소 최대 피해 병해 - 수침상 병반이 핵심",
    keywords:["역병","Phytophthora","수침상","난균류","고추","배수"],
    content:`<div class="theory-section"><h4>핵심 정보</h4><ul><li>병원균: <strong>Phytophthora capsici</strong> (난균류, 물곰팡이)</li><li>진균이 아닌 난균류 → 일부 살균제 효과 없음</li><li>조건: <strong>고온(25~30°C) + 다습</strong>, 장마철 집중</li></ul></div>
    <div class="theory-section"><h4>병징</h4><ul><li>잎·줄기: <strong>수침상(물에 젖은 듯) 병반</strong> → 갈변·고사</li><li>지제부: 잘록해지며 쓰러짐(입고병)</li><li>흰색 균사 표면 형성</li></ul></div>
    <div class="theory-section"><h4>주요 피해 작물</h4><p>고추, 토마토, 감자, 오이, 참외, 고구마</p></div>
    <div class="theory-section"><h4>방제</h4><ul><li>배수 개선, 이랑 높이기(가장 기본!)</li><li>저항성 품종 사용</li><li>메타락실, 만코제브, 포세틸알루미늄 등</li><li>이병 식물 즉시 제거</li></ul></div>`,
    relatedQuestions:["q006","q007","q008"]
  },
  {
    id:"t003",level:"초급",subject:"식물병리학",topic:"곰팡이병",
    title:"탄저병",
    summary:"동심원 무늬 병반이 특징인 고온다습성 곰팡이병",
    keywords:["탄저병","Colletotrichum","동심원","고온다습","분홍색 포자"],
    content:`<div class="theory-section"><h4>핵심 특징</h4><ul><li>병원균: <strong>Colletotrichum</strong>속</li><li>조건: 고온다습(25~30°C), 여름~초가을</li><li>특징: <strong>동심원(타깃) 무늬 + 분홍~주황색 포자 덩어리</strong></li></ul></div>
    <div class="theory-section"><h4>주요 피해 작물</h4><p>고추, 사과, 포도, 딸기, 수박, 참외, 강낭콩, 토마토</p></div>
    <div class="theory-section"><h4>방제</h4><ul><li>통풍 개선, 이병 과실 즉시 제거</li><li>만코제브, 디페노코나졸, 아족시스트로빈</li></ul></div>`,
    relatedQuestions:["q009","q010"]
  },
  {
    id:"t004",level:"초급",subject:"식물병리학",topic:"곰팡이병",
    title:"흰가루병",
    summary:"건조한 조건에서 잎 표면에 흰 가루가 생기는 곰팡이병",
    keywords:["흰가루병","분말상","자낭균","건조","잎 표면"],
    content:`<div class="theory-section"><h4>핵심 특징</h4><ul><li>병원균: 자낭균류 (Erysiphe, Sphaerotheca 등)</li><li>조건: <strong>건조하고 통풍 불량</strong> (다른 병과 반대!)</li><li>특징: 잎 <strong>표면</strong>에 흰색 <strong>분말상 균사</strong></li></ul></div>
    <div class="theory-section"><h4>주요 피해 작물</h4><p>오이, 딸기, 박과류, 장미, 사과, 보리, 밀</p></div>
    <div class="theory-section"><h4>병징</h4><ul><li>잎 표면에 흰색 가루 → 점차 확산</li><li>심하면 잎 황화, 조기 낙엽</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li>통풍 개선 (밀식 재배 금지)</li><li>황제 살균제, 트리플록시스트로빈, 마이클로뷰타닐</li></ul></div>`,
    relatedQuestions:["q011","q012"]
  },
  {
    id:"t005",level:"초급",subject:"식물병리학",topic:"곰팡이병",
    title:"잿빛곰팡이병",
    summary:"저온다습 시설재배에서 발생하는 회색 곰팡이병",
    keywords:["잿빛곰팡이병","Botrytis","저온다습","시설재배","회색"],
    content:`<div class="theory-section"><h4>핵심 특징</h4><ul><li>병원균: <strong>Botrytis cinerea</strong></li><li>조건: <strong>저온다습(15~20°C)</strong>, 시설재배에서 특히 문제</li><li>특징: 잎·꽃·과실에 <strong>회색(잿빛) 곰팡이</strong></li></ul></div>
    <div class="theory-section"><h4>발생 조건 비교 (기출 빈출!)</h4><table class="compare-table"><tr><th>병명</th><th>온도</th><th>습도</th></tr><tr><td>역병·탄저병</td><td>고온(25~30°C)</td><td>다습</td></tr><tr><td>잿빛곰팡이병</td><td><strong>저온(15~20°C)</strong></td><td>다습</td></tr><tr><td>흰가루병</td><td>중간(17~25°C)</td><td><strong>건조</strong></td></tr></table></div>
    <div class="theory-section"><h4>주요 피해 작물</h4><p>딸기, 토마토, 오이, 포도, 장미, 상추</p></div>
    <div class="theory-section"><h4>방제</h4><ul><li>환기 철저 (시설 내 습도 낮추기)</li><li>이프로디온, 플루디옥소닐, 보스칼리드</li><li>질소 과다 시비 금지</li></ul></div>`,
    relatedQuestions:["q013","q014"]
  },
  {
    id:"t006",level:"초급",subject:"식물병리학",topic:"곰팡이병",
    title:"노균병과 녹병",
    summary:"잎 뒷면 발생 곰팡이병 2종 비교 - 위치와 색깔로 구분",
    keywords:["노균병","녹병","잎 뒷면","황색","포자퇴","중간기주"],
    content:`<div class="theory-section"><h4>노균병</h4><ul><li>병원균: Peronospora, Plasmopara (난균류)</li><li>잎 앞면: 황색~연갈색 반점</li><li>잎 뒷면: <strong>회색~자줏빛 균사(노균)</strong></li><li>서늘하고 다습(15~20°C)</li><li>피해: 오이, 배추, 시금치, 양파, 포도</li></ul></div>
    <div class="theory-section"><h4>녹병</h4><ul><li>병원균: 담자균류 (Puccinia, Phragmidium)</li><li>잎 뒷면: <strong>황색~녹슨색 포자퇴(夏胞子堆)</strong></li><li>많은 종이 <strong>중간기주</strong> 필요</li><li>피해: 잔디, 보리, 밀, 사과(붉은별무늬병은 향나무가 중간기주)</li></ul></div>
    <div class="theory-section"><h4>노균병 vs 녹병 비교 (기출!)</h4><table class="compare-table"><tr><th>구분</th><th>노균병</th><th>녹병</th></tr><tr><td>병원균 분류</td><td>난균류</td><td>담자균</td></tr><tr><td>뒷면 병징 색</td><td>회색~자줏빛</td><td>황색~녹슨색</td></tr><tr><td>중간기주</td><td>불필요</td><td>많은 종에서 필요</td></tr></table></div>`,
    relatedQuestions:["q015","q016","q017"]
  },
  {
    id:"t007",level:"초급",subject:"식물병리학",topic:"벼 병해",
    title:"벼 주요 병해 (도열병·흰잎마름병·잎집무늬마름병)",
    summary:"벼 3대 병해 - 병원체 종류와 병징 차이 구분하기",
    keywords:["도열병","흰잎마름병","잎집무늬마름병","방추형","세균","Rhizoctonia"],
    content:`<div class="theory-section"><h4>도열병 (가장 중요!)</h4><ul><li>병원균: <strong>Magnaporthe oryzae</strong> (불완전균, 곰팡이)</li><li>잎 병징: <strong>방추형 회갈색 병반</strong>, 가장자리 황색</li><li>이삭 병징: 이삭목·가지 갈변 → 백수(흰 이삭)</li><li>서늘하고 다습, <strong>질소 과다 시 급격히 심해짐</strong></li><li>방제: 트리사이클라졸, 이소프로티올란</li></ul></div>
    <div class="theory-section"><h4>흰잎마름병 (세균병!)</h4><ul><li>병원균: <strong>Xanthomonas oryzae</strong> (세균)</li><li>병징: 잎 끝~가장자리에서 시작, <strong>물결 모양으로 황화·고사</strong></li><li>고온다습, 침관수 후 급증</li><li>방제: 동제, 항생제 (살균제 아님!)</li></ul></div>
    <div class="theory-section"><h4>잎집무늬마름병 (문고병)</h4><ul><li>병원균: <strong>Rhizoctonia solani</strong> (곰팡이)</li><li>병징: 줄기 아래 잎집에 <strong>구름 모양 무늬</strong> → 위로 확산</li><li>고온다습, 밀식·질소 과다 시 심해짐</li><li>방제: 프로피코나졸, 발리다마이신</li></ul></div>
    <div class="theory-section"><h4>3가지 비교 (기출 빈출!)</h4><table class="compare-table"><tr><th>병명</th><th>병원체</th><th>핵심 병징</th></tr><tr><td>도열병</td><td>곰팡이</td><td>방추형 병반</td></tr><tr><td>흰잎마름병</td><td><strong>세균</strong></td><td>잎 끝 황화</td></tr><tr><td>잎집무늬마름병</td><td>곰팡이</td><td>구름 무늬</td></tr></table></div>`,
    relatedQuestions:["q018","q019","q020","q021"]
  },
  {
    id:"t008",level:"초급",subject:"농업해충학",topic:"해충 기초",
    title:"해충의 분류와 변태",
    summary:"구기·변태 방식으로 해충을 나누는 기본 개념",
    keywords:["식엽해충","흡즙해충","완전변태","불완전변태","저작구","구침"],
    content:`<div class="theory-section"><h4>가해 방식에 따른 분류</h4><table class="compare-table"><tr><th>분류</th><th>구기</th><th>대표 해충</th></tr><tr><td>식엽해충</td><td>씹는 입(저작구)</td><td>나방류 유충, 딱정벌레류</td></tr><tr><td>흡즙해충</td><td>찌르는 입(구침)</td><td>진딧물, 응애, 총채벌레, 매미</td></tr><tr><td>굴식해충</td><td>씹는 입</td><td>굴파리류 (잎 속 가해)</td></tr><tr><td>천공해충</td><td>씹는 입</td><td>하늘소류 (줄기·목질부 가해)</td></tr></table></div>
    <div class="theory-section"><h4>변태 방식 (기출 빈출!)</h4><table class="compare-table"><tr><th>변태</th><th>단계</th><th>대표 해충</th></tr><tr><td>완전변태</td><td>알→유충→번데기→성충</td><td>나방, 나비, 딱정벌레, 파리, 벌</td></tr><tr><td>불완전변태</td><td>알→약충→성충 (번데기 없음)</td><td>진딧물, 매미, 노린재, 메뚜기</td></tr><tr><td>과변태</td><td>유충 시기에 형태 변화</td><td>가뢰류</td></tr></table></div>
    <div class="theory-section"><h4>응애는 해충이 아니다!</h4><p>응애는 <strong>곤충이 아닌 거미류(절지동물)</strong>예요. 다리가 8개이고 번데기 단계가 없어요. 살충제가 효과 없으므로 살비제를 사용해야 해요.</p></div>`,
    relatedQuestions:["q022","q023","q024"]
  },
  {
    id:"t009",level:"초급",subject:"농업해충학",topic:"대표 해충",
    title:"진딧물",
    summary:"바이러스 매개·그을음병 유발까지 피해 범위 넓은 흡즙해충",
    keywords:["진딧물","복숭아혹진딧물","바이러스 매개","감로","황색 트랩","천적"],
    content:`<div class="theory-section"><h4>주요 종류</h4><ul><li><strong>복숭아혹진딧물</strong>: 가장 많은 작물 피해, CMV·PVY 매개</li><li>목화진딧물: 오이·박과류, CMV 매개</li><li>배추진딧물: 십자화과 채소</li><li>보리수염진딧물: 보리·밀</li></ul></div>
    <div class="theory-section"><h4>3가지 피해 (기출!)</h4><ul><li>① 직접 흡즙 → 잎 황화·위축·기형</li><li>② <strong>바이러스병 매개</strong> (CMV, PVY 등)</li><li>③ <strong>감로 분비</strong> → 그을음병 유발</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li><strong>황색</strong> 끈끈이트랩</li><li>천적: 무당벌레, 풀잠자리, 기생봉(진디벌)</li><li>은박 멀칭 (빛 반사로 기피 유도)</li><li>이미다클로프리드, 아세타미프리드 (침투이행성)</li></ul></div>`,
    relatedQuestions:["q025","q026","q027"]
  },
  {
    id:"t010",level:"초급",subject:"농업해충학",topic:"나방류 해충",
    title:"나방류 해충 종합",
    summary:"배추좀나방·파밤나방·거세미나방·이화명나방 특징 비교",
    keywords:["배추좀나방","파밤나방","거세미나방","이화명나방","식엽","1년 다세대"],
    content:`<div class="theory-section"><h4>배추좀나방</h4><ul><li>피해: 배추·양배추 등 십자화과 잎 가해</li><li>특징: 연중 발생(10세대 이상), Bt제 저항성 발달</li><li>유충이 잎 표피만 남기고 갉아먹음</li></ul></div>
    <div class="theory-section"><h4>파밤나방</h4><ul><li>피해: 잡식성, 파·양파·배추·콩 등 가해</li><li>특징: 고온기(7~9월) 대발생, 농약 저항성 강함</li><li>유충이 잎에 구멍 내거나 표피 갉아먹음</li></ul></div>
    <div class="theory-section"><h4>거세미나방</h4><ul><li>피해: 지표면 근처 줄기 잘라 쓰러뜨림 (야행성)</li><li>특징: 낮에는 토양 속, 밤에 활동</li><li>가지(담배거세미나방): 과실 표면도 가해</li></ul></div>
    <div class="theory-section"><h4>이화명나방</h4><ul><li>피해: 벼 줄기 속 가해</li><li>1화기(6월): 분얼기 피해 → 심고(枯心)</li><li>2화기(8월): 출수기 피해 → 백수(白穗)</li><li>1년 2세대, 유충으로 월동</li></ul></div>
    <div class="theory-section"><h4>나방류 공통 방제</h4><ul><li>Bt제(바실루스 투링기엔시스): 생물적 방제</li><li>페로몬 트랩으로 성충 예찰</li><li>클로란트라닐리프롤, 에마멕틴벤조에이트 등</li></ul></div>`,
    relatedQuestions:["q028","q029","q030"]
  },
  {
    id:"t011",level:"초급",subject:"농업해충학",topic:"벼 해충",
    title:"벼 주요 해충",
    summary:"이화명나방·벼멸구·애멸구의 차이를 정확히 구분하기",
    keywords:["이화명나방","벼멸구","애멸구","비래해충","줄무늬잎마름병","도복"],
    content:`<div class="theory-section"><h4>벼멸구 vs 애멸구 비교 (기출 최빈출!)</h4><table class="compare-table"><tr><th>구분</th><th>벼멸구</th><th>애멸구</th></tr><tr><td>월동</td><td><strong>국내 월동 불가</strong> (비래해충)</td><td>국내 월동 가능</td></tr><tr><td>비래</td><td>중국 등지에서 매년 비래</td><td>해당 없음</td></tr><tr><td>주요 피해</td><td>집단 흡즙 → 도복(쓰러짐)</td><td>생육 억제</td></tr><tr><td>바이러스 매개</td><td>없음</td><td><strong>줄무늬잎마름병(RSV)</strong></td></tr></table></div>
    <div class="theory-section"><h4>흰등멸구</h4><ul><li>벼멸구와 비슷하나 국내 발생 적음</li><li>비래해충</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li>벼멸구: 에토펜프록스, 부프로페진</li><li>애멸구: 이미다클로프리드 (초기 방제 중요)</li><li>이화명나방: 카보퓨란 입제, 클로르피리포스</li></ul></div>`,
    relatedQuestions:["q031","q032"]
  },
  {
    id:"t012",level:"초급",subject:"잡초방제학",topic:"잡초 기초",
    title:"잡초 분류와 주요 잡초",
    summary:"생존기간·잎 형태별 잡초 분류와 논밭 대표 잡초 암기",
    keywords:["1년생","다년생","화본과","광엽","사초과","피","올방개","바랭이"],
    content:`<div class="theory-section"><h4>생존 기간별 분류</h4><table class="compare-table"><tr><th>구분</th><th>특성</th><th>대표 잡초</th></tr><tr><td>1년생 (춘계)</td><td>봄 발아 → 가을 고사</td><td>바랭이, 쇠비름, 여뀌, 명아주</td></tr><tr><td>월년생</td><td>가을 발아 → 이듬해 여름 고사</td><td>냉이, 별꽃, 뚝새풀</td></tr><tr><td>다년생</td><td>뿌리·지하경으로 다년 생존</td><td>쑥, 띠, 올방개, 토끼풀</td></tr></table></div>
    <div class="theory-section"><h4>잎 형태별 분류 (제초제 선택 기준!)</h4><table class="compare-table"><tr><th>구분</th><th>특징</th><th>대표</th></tr><tr><td>화본과(단자엽)</td><td>가늘고 긴 잎, 평행맥, 줄기 단면 원형</td><td>바랭이, 강아지풀, 피</td></tr><tr><td>사초과(단자엽)</td><td>줄기 단면 <strong>삼각형</strong></td><td>올방개, 너도방동사니</td></tr><tr><td>광엽(쌍자엽)</td><td>넓은 잎, 그물맥</td><td>명아주, 쑥, 쇠비름</td></tr></table></div>
    <div class="theory-section"><h4>논 주요 잡초</h4><p>피(화본과, 1년생), 올방개(사초과, 다년생), 너도방동사니, 물달개비, 가래</p></div>
    <div class="theory-section"><h4>밭 주요 잡초</h4><p>바랭이(화본과, 1년생), 쇠비름, 명아주, 쑥(다년생), 토끼풀(다년생)</p></div>`,
    relatedQuestions:["q033","q034","q035","q036"]
  },
  {
    id:"t013",level:"초급",subject:"농약학",topic:"농약 기초",
    title:"농약의 종류와 안전 사용",
    summary:"살균제·살충제·제초제 분류와 PHI·보호구 등 기본 안전 수칙",
    keywords:["살균제","살충제","제초제","PHI","LD50","보호구","약해"],
    content:`<div class="theory-section"><h4>방제 대상별 분류</h4><table class="compare-table"><tr><th>종류</th><th>대상</th><th>대표 약제</th></tr><tr><td>살균제</td><td>곰팡이·세균</td><td>만코제브, 보르도액</td></tr><tr><td>살충제</td><td>해충</td><td>이미다클로프리드, 클로르피리포스</td></tr><tr><td>살비제</td><td>응애</td><td>아바멕틴, 페나자퀸</td></tr><tr><td>제초제</td><td>잡초</td><td>글리포세이트, 파라콰트</td></tr><tr><td>살선충제</td><td>선충</td><td>카보퓨란, 포스티아제이트</td></tr><tr><td>식물생장조절제</td><td>생장 조절</td><td>에테폰, 지베렐린</td></tr></table></div>
    <div class="theory-section"><h4>독성 구분 (LD50 암기!)</h4><table class="compare-table"><tr><th>등급</th><th>경구 LD50</th></tr><tr><td>맹독성</td><td>50mg/kg 이하</td></tr><tr><td>고독성</td><td>50~500mg/kg</td></tr><tr><td>보통독성</td><td>500~5,000mg/kg</td></tr><tr><td>저독성</td><td>5,000mg/kg 이상</td></tr></table></div>
    <div class="theory-section"><h4>안전 사용 수칙</h4><ul><li>PHI(수확 전 안전일수) 반드시 준수</li><li>적정 희석 배수 준수 (진하면 약해 발생)</li><li>방제복·방제모·고무장갑·방독마스크 착용</li><li>바람 부는 날, 고온(30°C↑) 시 살포 금지</li><li>살포 후 비누로 세척, 30분 이상 환기</li></ul></div>`,
    relatedQuestions:["q037","q038","q039","q040"]
  },

  // ═══════════════════════════════════════
  // 중급
  // ═══════════════════════════════════════
  {
    id:"t014",level:"중급",subject:"식물병리학",topic:"바이러스병",
    title:"바이러스병 종합",
    summary:"바이러스-매개충 쌍 완벽 암기 + 방제 전략",
    keywords:["CMV","TMV","TSWV","TYLCV","RSV","진딧물","총채벌레","치료 불가"],
    content:`<div class="theory-section"><h4>주요 바이러스-매개충 쌍 (기출 최빈출!)</h4><table class="compare-table"><tr><th>바이러스</th><th>약칭</th><th>매개충</th><th>피해 작물</th></tr><tr><td>오이모자이크바이러스</td><td>CMV</td><td>진딧물</td><td>오이, 호박, 고추, 토마토</td></tr><tr><td>담배모자이크바이러스</td><td>TMV</td><td>즙액 접촉</td><td>토마토, 고추, 담배</td></tr><tr><td>토마토반점위조바이러스</td><td>TSWV</td><td><strong>총채벌레</strong></td><td>토마토, 고추</td></tr><tr><td>토마토황화잎말림바이러스</td><td>TYLCV</td><td><strong>담배가루이</strong></td><td>토마토</td></tr><tr><td>벼줄무늬잎마름바이러스</td><td>RSV</td><td><strong>애멸구</strong></td><td>벼</td></tr><tr><td>감자Y바이러스</td><td>PVY</td><td>진딧물</td><td>감자, 고추</td></tr></table></div>
    <div class="theory-section"><h4>바이러스병 공통 특징</h4><ul><li>치료제 없음 → 예방이 전부</li><li>전신 감염 (식물 전체로 퍼짐)</li><li>모자이크(황록색 얼룩), 위축, 기형 증상</li></ul></div>
    <div class="theory-section"><h4>방제 전략</h4><ul><li>매개충 철저 방제 (가장 중요!)</li><li>이병 식물 즉시 제거</li><li>작업 도구 소독 (TMV: 제3인산나트륨 처리)</li><li>저항성 품종 사용</li><li>은박 멀칭 (진딧물 기피)</li></ul></div>`,
    relatedQuestions:["q041","q042","q043","q044"]
  },
  {
    id:"t015",level:"중급",subject:"식물병리학",topic:"세균병",
    title:"세균병 종합",
    summary:"무름병·풋마름병·불마름병 비교와 방제법",
    keywords:["무름병","풋마름병","불마름병","Ralstonia","Erwinia","Xanthomonas","항생제"],
    content:`<div class="theory-section"><h4>세균병 3종 비교 (기출!)</h4><table class="compare-table"><tr><th>병명</th><th>병원균</th><th>특징</th><th>피해 작물</th></tr><tr><td>무름병</td><td>Pectobacterium carotovorum</td><td>조직 물러짐 + <strong>악취</strong></td><td>배추, 무, 감자, 양파</td></tr><tr><td>풋마름병</td><td>Ralstonia solanacearum</td><td>관다발 막힘 → <strong>푸른 채 시들음</strong></td><td>토마토, 고추, 가지</td></tr><tr><td>불마름병</td><td>Erwinia amylovora</td><td>불에 탄 듯 가지 검게 마름</td><td>사과, 배(장미과)</td></tr></table></div>
    <div class="theory-section"><h4>세균 침입 경로</h4><ul><li>상처 (수확·전정·해충 피해 후)</li><li>기공, 수공(잎 표면의 분비 구멍)</li><li>곤충 매개 (불마름병 → 꿀벌 등)</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li>동제(구리제): 보르도액, 수산화동 → 살균+살세균</li><li>항생제: 옥시테트라사이클린, 스트렙토마이신</li><li>상처 방지, 토양 소독, 저항성 품종</li></ul></div>`,
    relatedQuestions:["q045","q046","q047"]
  },
  {
    id:"t016",level:"중급",subject:"식물병리학",topic:"선충병",
    title:"뿌리혹선충병",
    summary:"뿌리에 혹이 생기는 선충 피해 - 검역 대상 포함",
    keywords:["뿌리혹선충","Meloidogyne","혹","토양","훈증","살선충제"],
    content:`<div class="theory-section"><h4>핵심 정보</h4><ul><li>병원체: <strong>Meloidogyne</strong>속 (뿌리혹선충, 동물계)</li><li>발생 부위: 뿌리에 <strong>혹(gall)</strong> 형성</li><li>피해: 뿌리 기능 저하 → 지상부 생육 불량, 시들음</li><li>토양 전염 (물·농기구·묘목 이동으로 확산)</li></ul></div>
    <div class="theory-section"><h4>주요 피해 작물</h4><p>토마토, 오이, 가지, 당근, 감자 등 거의 모든 채소·과채류</p></div>
    <div class="theory-section"><h4>방제</h4><ul><li>토양 훈증 소독 (메틸브로마이드 대체 약제)</li><li>살선충제: 카보퓨란, 포스티아제이트</li><li>저항성 품종 (특히 토마토)</li><li>객토, 태양열 소독</li></ul></div>`,
    relatedQuestions:["q048"]
  },
  {
    id:"t017",level:"중급",subject:"농업해충학",topic:"미소 해충",
    title:"응애·총채벌레·온실가루이 비교",
    summary:"시설재배 3대 미소 해충 - 방제법과 트랩 색깔 구분",
    keywords:["점박이응애","꽃노랑총채벌레","온실가루이","살비제","청색 트랩","황색 트랩"],
    content:`<div class="theory-section"><h4>3종 비교 (기출 최빈출!)</h4><table class="compare-table"><tr><th>구분</th><th>점박이응애</th><th>꽃노랑총채벌레</th><th>온실가루이</th></tr><tr><td>분류</td><td>거미류(절지동물)</td><td>총채벌레목</td><td>반시목(노린재목)</td></tr><tr><td>발생 조건</td><td>고온건조</td><td>시설재배</td><td>시설재배</td></tr><tr><td>피해</td><td>잎 뒷면 흡즙, 흰반점</td><td>꽃·잎 흡즙, TSWV 매개</td><td>잎 뒷면 흡즙, TYLCV 매개</td></tr><tr><td>끈끈이 트랩</td><td>-</td><td><strong>청색</strong></td><td><strong>황색</strong></td></tr><tr><td>방제</td><td>살비제(살충제 효과없음!)</td><td>스피노사드, 아세타미프리드</td><td>부프로페진, 이미다클로프리드</td></tr><tr><td>천적</td><td>칠레이리응애</td><td>오이이리응애</td><td>온실가루이좀벌</td></tr></table></div>
    <div class="theory-section"><h4>트랩 색깔 암기법!</h4><p>총채벌레 = <strong>청</strong>색 / 진딧물·온실가루이 = <strong>황</strong>색</p></div>`,
    relatedQuestions:["q049","q050","q051","q052"]
  },
  {
    id:"t018",level:"중급",subject:"농업해충학",topic:"기타 해충",
    title:"과수·채소 기타 해충",
    summary:"복숭아순나방·굴파리류·담배나방 등 기출 빈도 높은 해충",
    keywords:["복숭아순나방","굴파리","담배나방","고자리파리","잎굴파리"],
    content:`<div class="theory-section"><h4>복숭아순나방</h4><ul><li>피해: 신초·과실 속에 굴을 파고 가해</li><li>피해 작물: 복숭아, 사과, 배, 포도</li><li>1년 다세대(3~4세대)</li></ul></div>
    <div class="theory-section"><h4>잎굴파리류</h4><ul><li>유충이 잎 조직 속(엽육)을 굴을 파며 가해</li><li>피해 흔적: 잎에 구불구불한 흰색 줄무늬</li><li>피해 작물: 콩, 셀러리, 국화, 시금치</li></ul></div>
    <div class="theory-section"><h4>담배나방</h4><ul><li>피해: 고추·담배 과실 속을 가해</li><li>잡식성, 과실에 구멍 내고 과실 내부 가해</li></ul></div>
    <div class="theory-section"><h4>고자리파리</h4><ul><li>유충이 뿌리 또는 지제부를 가해</li><li>피해 작물: 파, 양파, 마늘, 배추</li><li>입제 살충제로 토양 처리</li></ul></div>`,
    relatedQuestions:["q053","q054"]
  },
  {
    id:"t019",level:"중급",subject:"잡초방제학",topic:"제초제",
    title:"제초제 분류와 주요 약제",
    summary:"선택성·비선택성·접촉형·이행형 완벽 정리 + 주요 제초제 특성",
    keywords:["선택성","비선택성","접촉형","이행형","글리포세이트","파라콰트","2,4-D"],
    content:`<div class="theory-section"><h4>선택성 vs 비선택성 (기출!)</h4><table class="compare-table"><tr><th>구분</th><th>선택성</th><th>비선택성</th></tr><tr><td>특성</td><td>특정 식물만 방제</td><td>모든 식물 방제</td></tr><tr><td>사용</td><td>작물 생육 중 가능</td><td>작물 없을 때 또는 비경작지</td></tr><tr><td>예</td><td>2,4-D, 할록시폽, 이마자픽</td><td>글리포세이트, 파라콰트</td></tr></table></div>
    <div class="theory-section"><h4>접촉형 vs 이행형 (기출!)</h4><table class="compare-table"><tr><th>구분</th><th>접촉형</th><th>이행형</th></tr><tr><td>작용</td><td>닿은 부위만 고사</td><td>식물 전체·뿌리까지 고사</td></tr><tr><td>다년생 효과</td><td>낮음</td><td>높음</td></tr><tr><td>예</td><td>파라콰트</td><td>글리포세이트</td></tr></table></div>
    <div class="theory-section"><h4>주요 제초제 특성 (기출 빈출!)</h4><table class="compare-table"><tr><th>약제</th><th>구분</th><th>특징</th></tr><tr><td>글리포세이트</td><td>비선택성, 이행형</td><td>EPSPS 효소 저해, 다년생 효과</td></tr><tr><td>파라콰트</td><td>비선택성, 접촉형</td><td>맹독성! 빛 있어야 효과</td></tr><tr><td>2,4-D</td><td>선택성, 광엽 방제</td><td>옥신계, 벼논 광엽 방제</td></tr><tr><td>부타클로르</td><td>선택성, 토양처리</td><td>논 화본과 초기 방제</td></tr><tr><td>할록시폽</td><td>선택성, 화본과</td><td>밭 화본과 잡초 방제</td></tr></table></div>
    <div class="theory-section"><h4>처리 시기별 분류</h4><ul><li>토양처리제: 발아 전 토양에 처리 (예방)</li><li>경엽처리제: 발아 후 잎에 직접 처리</li></ul></div>`,
    relatedQuestions:["q055","q056","q057","q058"]
  },
  {
    id:"t020",level:"중급",subject:"농약학",topic:"농약 제형",
    title:"농약 제형과 특성",
    summary:"유제·수화제·입제 등 제형별 특징과 사용법",
    keywords:["유제","수화제","입제","분제","액상수화제","훈연제","훈증제"],
    content:`<div class="theory-section"><h4>주요 제형 비교 (기출 빈출!)</h4><table class="compare-table"><tr><th>제형</th><th>약호</th><th>특징</th><th>희석</th></tr><tr><td>유제</td><td>EC</td><td>유기용매에 녹임, 잎 부착 우수</td><td>물에 희석</td></tr><tr><td>수화제</td><td>WP</td><td>물에 현탁, 지속성 좋음</td><td>물에 희석</td></tr><tr><td>액상수화제</td><td>SC</td><td>분말 없는 현탁액, 사용 편리</td><td>물에 희석</td></tr><tr><td>수용제</td><td>SP/SL</td><td>물에 완전 용해</td><td>물에 희석</td></tr><tr><td>분제</td><td>D</td><td>분말, 그대로 살포</td><td>희석 불필요</td></tr><tr><td>입제</td><td>G</td><td>알갱이, 토양 처리</td><td>희석 불필요</td></tr><tr><td>훈연제</td><td>FU</td><td>연기, 시설 내 사용</td><td>점화</td></tr><tr><td>훈증제</td><td>FP</td><td>가스, 토양·창고 소독</td><td>기화</td></tr></table></div>`,
    relatedQuestions:["q059","q060","q061"]
  },
  {
    id:"t021",level:"중급",subject:"농약학",topic:"살충제 계통",
    title:"살충제 계통별 작용 기작",
    summary:"유기인계·카바메이트·피레스로이드·네오니코티노이드 계통 구분",
    keywords:["유기인계","카바메이트계","피레스로이드계","네오니코티노이드","콜린에스테라제","저항성"],
    content:`<div class="theory-section"><h4>주요 살충제 계통 (기출!)</h4><table class="compare-table"><tr><th>계통</th><th>작용 기작</th><th>대표 약제</th><th>특징</th></tr><tr><td>유기인계</td><td>콜린에스테라제 저해</td><td>클로르피리포스, 디메토에이트</td><td>광범위 살충 효과</td></tr><tr><td>카바메이트계</td><td>콜린에스테라제 저해</td><td>카보퓨란, 메티오카브</td><td>유기인계와 교차 저항성</td></tr><tr><td>피레스로이드계</td><td>신경 Na채널 교란</td><td>사이퍼메트린, 델타메트린</td><td>저온에서 효과 높음</td></tr><tr><td>네오니코티노이드계</td><td>니코틴성 수용체 자극</td><td>이미다클로프리드, 아세타미프리드</td><td>침투이행성, 진딧물에 효과</td></tr><tr><td>스피노신계</td><td>니코틴성 수용체 교란</td><td>스피노사드</td><td>천적에 비교적 안전</td></tr><tr><td>다이아미드계</td><td>라이아노딘 수용체</td><td>클로란트라닐리프롤</td><td>나방류에 특히 효과</td></tr></table></div>
    <div class="theory-section"><h4>교호 살포 원칙</h4><p>유기인계 + 카바메이트계는 같은 작용점(콜린에스테라제)이므로 교호 살포 효과 없음. 작용 기작(MoA)이 다른 계통으로 번갈아 사용해야 저항성 관리 가능!</p></div>`,
    relatedQuestions:["q062","q063","q064"]
  },
  {
    id:"t022",level:"중급",subject:"농약학",topic:"살균제 계통",
    title:"살균제 분류와 주요 약제",
    summary:"보호살균제·치료살균제·침투이행성 살균제와 대표 약제 암기",
    keywords:["보호살균제","치료살균제","침투이행성","스트로빌루린","EBI계","만코제브"],
    content:`<div class="theory-section"><h4>살균제 분류</h4><table class="compare-table"><tr><th>구분</th><th>작용</th><th>대표 약제</th></tr><tr><td>보호살균제</td><td>침입 전 예방 (포자 발아 억제)</td><td>만코제브, 보르도액, 클로로탈로닐</td></tr><tr><td>치료살균제</td><td>침입 후에도 방제 가능</td><td>베노밀, 카벤다짐</td></tr><tr><td>침투이행성</td><td>식물 체내 이동하며 방제</td><td>트리플록시스트로빈, 프로피코나졸</td></tr></table></div>
    <div class="theory-section"><h4>주요 살균제 계통</h4><table class="compare-table"><tr><th>계통</th><th>작용 기작</th><th>대표 약제</th></tr><tr><td>EBI계(DMI)</td><td>에르고스테롤 합성 저해</td><td>테부코나졸, 프로피코나졸</td></tr><tr><td>스트로빌루린계</td><td>미토콘드리아 호흡 저해</td><td>아족시스트로빈, 트리플록시스트로빈</td></tr><tr><td>디카르복시미드계</td><td>세포막 합성 저해</td><td>이프로디온(잿빛곰팡이병 전용)</td></tr><tr><td>동제(구리제)</td><td>단백질 변성</td><td>보르도액, 수산화동</td></tr></table></div>
    <div class="theory-section"><h4>보르도액 제조 비율</h4><p>황산구리 : 생석회 : 물 = 4 : 4 : 100 (4-4식) 또는 6-6식, 8-8식</p></div>`,
    relatedQuestions:["q065","q066"]
  },

  // ═══════════════════════════════════════
  // 고급
  // ═══════════════════════════════════════
  {
    id:"t023",level:"고급",subject:"식물병리학",topic:"병 종합 진단",
    title:"병원체별 진단과 방제 전략",
    summary:"곰팡이·세균·바이러스·선충을 구분하여 올바른 방제법 선택",
    keywords:["살균제","항생제","치료 불가","동제","이행성 살균제"],
    content:`<div class="theory-section"><h4>병원체별 방제 전략 (기출!)</h4><table class="compare-table"><tr><th>병원체</th><th>방제약</th><th>핵심 전략</th></tr><tr><td>곰팡이</td><td>살균제</td><td>비 오기 전 예방 살포, 보호살균제 우선</td></tr><tr><td>세균</td><td>동제, 항생제</td><td>상처 통해 침입 → 상처 방지가 예방의 핵심</td></tr><tr><td>바이러스</td><td>치료제 없음</td><td>매개충 방제, 이병주 즉시 제거</td></tr><tr><td>선충</td><td>살선충제, 훈증제</td><td>토양 소독, 저항성 품종</td></tr></table></div>
    <div class="theory-section"><h4>곰팡이병 구분 요약</h4><table class="compare-table"><tr><th>병명</th><th>발생 조건</th><th>특징</th><th>분류</th></tr><tr><td>역병</td><td>고온다습</td><td>수침상</td><td>난균류</td></tr><tr><td>탄저병</td><td>고온다습</td><td>동심원 무늬</td><td>자낭균</td></tr><tr><td>흰가루병</td><td>건조</td><td>흰 가루(표면)</td><td>자낭균</td></tr><tr><td>잿빛곰팡이병</td><td>저온다습</td><td>회색 곰팡이</td><td>자낭균</td></tr><tr><td>노균병</td><td>서늘·다습</td><td>잎 뒷면 회색</td><td>난균류</td></tr><tr><td>녹병</td><td>적습</td><td>잎 뒷면 포자퇴</td><td>담자균</td></tr></table></div>`,
    relatedQuestions:["q067","q068","q069"]
  },
  {
    id:"t024",level:"고급",subject:"농업해충학",topic:"IPM 종합",
    title:"IPM과 천적 이용",
    summary:"종합적 해충 관리 전략과 주요 천적 정리",
    keywords:["IPM","ETL","천적","생물적 방제","Bt제","경제적 피해 허용 수준"],
    content:`<div class="theory-section"><h4>IPM 방제법 우선순위</h4><ol style="padding-left:18px;font-size:14px;line-height:2;color:var(--text-mid)"><li>경종적 방제: 저항성 품종, 윤작, 재배 시기 조절</li><li>물리적 방제: 방충망, 끈끈이트랩, 열처리</li><li>생물적 방제: 천적, Bt제, 핵다각체병바이러스</li><li>화학적 방제: 최후 수단, ETL 초과 시만 사용</li></ol></div>
    <div class="theory-section"><h4>주요 천적 (기출!)</h4><table class="compare-table"><tr><th>해충</th><th>천적</th></tr><tr><td>진딧물</td><td>무당벌레, 풀잠자리, 기생봉(진디벌)</td></tr><tr><td>점박이응애</td><td><strong>칠레이리응애</strong>, 긴털이리응애</td></tr><tr><td>꽃노랑총채벌레</td><td><strong>오이이리응애</strong></td></tr><tr><td>온실가루이</td><td><strong>온실가루이좀벌</strong></td></tr><tr><td>나방류 유충</td><td>고치벌, 맵시벌, 기생파리</td></tr></table></div>
    <div class="theory-section"><h4>ETL(경제적 피해 허용 수준)</h4><p>방제 비용 = 피해 손실액이 되는 해충 밀도. ETL 이하에서는 방제 불필요. IPM의 핵심 개념이에요.</p></div>`,
    relatedQuestions:["q070","q071","q072"]
  },
  {
    id:"t025",level:"고급",subject:"잡초방제학",topic:"잡초방제 심화",
    title:"작물별 잡초방제와 저항성 관리",
    summary:"논·밭 잡초방제 전략과 제초제 저항성 관리",
    keywords:["논잡초","밭잡초","멀칭","제초제 저항성","교호 사용"],
    content:`<div class="theory-section"><h4>논 잡초방제 체계</h4><ul><li>이앙 전: 경운·써레질로 기계적 방제</li><li>이앙 직후 7일 이내: 토양처리제 (부타클로르 등)</li><li>이앙 후 2~3주: 잔초 경엽처리제</li><li>담수 유지: 피 등 화본과 억제 효과</li></ul></div>
    <div class="theory-section"><h4>밭 잡초방제</h4><ul><li>흑색 필름 멀칭: 빛 차단으로 발아·광합성 억제 (가장 효과적)</li><li>경운·중경: 기계적 제거</li><li>윤작: 특정 잡초 억제</li><li>선택성 제초제: 작물·잡초 종류에 맞게 선택</li></ul></div>
    <div class="theory-section"><h4>제초제 저항성 관리</h4><ul><li>동일 계통 반복 → 저항성 잡초 발생</li><li>작용 기작 다른 제초제 교호 사용</li><li>저항성 잡초 발생 포장 격리 관리</li><li>비화학적 방제 병행</li></ul></div>
    <div class="theory-section"><h4>사초과 잡초 방제 주의!</h4><p>올방개(사초과)는 화본과 전용이나 광엽 전용 제초제로 방제 안 됨. 사초과를 포함하는 제초제 성분을 따로 확인해야 함.</p></div>`,
    relatedQuestions:["q073","q074"]
  },
  {
    id:"t026",level:"고급",subject:"농약학",topic:"약해·혼용·잔류",
    title:"약해·농약 혼용·잔류 기준",
    summary:"약해 원인과 증상, 혼용 주의사항, MRL·PLS까지 고급 정리",
    keywords:["약해","혼용","MRL","PLS","잔류농약","PHI"],
    content:`<div class="theory-section"><h4>약해 발생 원인 (기출!)</h4><ul><li>적정 희석 배수보다 <strong>고농도</strong> 사용</li><li>고온(30°C 이상) 시 살포</li><li>유묘·어린 조직에 강한 약제 사용</li><li>호환되지 않는 약제 혼용</li><li>동일 약제 단기간 내 반복 살포</li></ul></div>
    <div class="theory-section"><h4>약해 증상</h4><ul><li>잎 끝·가장자리 갈변, 반점</li><li>잎 황화, 낙엽, 생육 억제</li><li>과실 기형, 착색 불량</li></ul></div>
    <div class="theory-section"><h4>농약 혼용 주의사항</h4><ul><li>알칼리성 + 산성 약제: 중화반응 → 약효 저하, 약해</li><li>보르도액: 유기인계 살충제와 혼용 금지</li><li>혼용 전 반드시 혼용 가부표 확인</li></ul></div>
    <div class="theory-section"><h4>잔류 기준 관련 용어 (기출!)</h4><table class="compare-table"><tr><th>용어</th><th>의미</th></tr><tr><td>PHI</td><td>수확 전 안전일수 (마지막 살포 가능 일수)</td></tr><tr><td>MRL</td><td>잔류 허용 기준 (Maximum Residue Limit)</td></tr><tr><td>PLS</td><td>농약 허용 물질 목록 관리 제도 (미등록=0.01mg/kg 이하)</td></tr><tr><td>ADI</td><td>일일 섭취 허용량</td></tr></table></div>`,
    relatedQuestions:["q075","q076","q077","q078"]
  }
];
