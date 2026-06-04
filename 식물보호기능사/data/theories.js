const THEORIES = [
  // ════════════════════════════════════════
  // 초급 (13개)
  // ════════════════════════════════════════
  {
    id:"t001",level:"초급",subject:"식물병리학",topic:"병의 기초",
    title:"식물병의 기초 개념",
    summary:"병삼각형·병원체 종류·전염 경로 - 시험 1번 단골 출제",
    keywords:["식물병","병삼각형","전염성","비전염성","병원체","전염경로"],
    content:`<div class="theory-section"><h4>병삼각형 (3요소)</h4><ul><li><strong>기주</strong>: 병에 걸리는 식물</li><li><strong>병원체</strong>: 곰팡이, 세균, 바이러스, 선충 등</li><li><strong>환경</strong>: 온도, 습도 등 발병 조건</li></ul><p>세 가지가 동시에 갖춰져야 발병해요!</p></div>
    <div class="theory-section"><h4>병원체 종류별 특징 (기출 최빈출!)</h4><table class="compare-table"><tr><th>병원체</th><th>비율</th><th>방제</th><th>대표 병</th></tr><tr><td>곰팡이(진균)</td><td>70% 이상</td><td>살균제</td><td>역병, 탄저병, 도열병</td></tr><tr><td>세균</td><td>~10%</td><td>항생제, 동제</td><td>무름병, 풋마름병</td></tr><tr><td>바이러스</td><td>~10%</td><td>치료제 없음</td><td>모자이크병</td></tr><tr><td>선충</td><td>~5%</td><td>살선충제</td><td>뿌리혹선충병</td></tr></table></div>
    <div class="theory-section"><h4>전염 경로 (기출!)</h4><table class="compare-table"><tr><th>전염 경로</th><th>대표 병해</th></tr><tr><td>토양 전염</td><td>역병, 풋마름병, 뿌리혹선충, 모잘록병</td></tr><tr><td>종자 전염</td><td>도열병, 깨씨무늬병, 검은줄무늬병</td></tr><tr><td>충매 전염</td><td>바이러스병 (진딧물, 총채벌레, 가루이)</td></tr><tr><td>기류(바람) 전염</td><td>도열병 포자, 흰가루병 포자</td></tr><tr><td>수매 전염</td><td>무름병, 도열병 (빗물·관개수)</td></tr><tr><td>즙액 접촉</td><td>TMV (담배모자이크)</td></tr></table></div>
    <div class="theory-section"><h4>전염성 vs 비전염성</h4><table class="compare-table"><tr><th>전염성 병</th><th>비전염성 병</th></tr><tr><td>병원체 존재, 다른 식물로 전파 가능</td><td>병원체 없음, 전파 안 됨</td></tr><tr><td>역병, 탄저병, 바이러스병</td><td>동해, 가뭄, 영양 결핍, 약해</td></tr></table></div>`,
    relatedQuestions:["q001","q002","q003","q004","q005"]
  },
  {
    id:"t002",level:"초급",subject:"식물병리학",topic:"곰팡이병",
    title:"역병 (Phytophthora)",
    summary:"고온다습 채소 최대 피해병 - 수침상 병반·난균류",
    keywords:["역병","Phytophthora","수침상","난균류","고온다습","메타락실"],
    content:`<div class="theory-section"><h4>핵심 정보</h4><ul><li>병원균: <strong>Phytophthora capsici</strong> (난균류, 물곰팡이)</li><li>조건: <strong>고온(25~30°C) + 다습</strong>, 장마철 집중</li><li>배수 불량 토양에서 급격히 확산</li></ul></div>
    <div class="theory-section"><h4>병징</h4><ul><li>잎·줄기: <strong>수침상(물에 젖은 듯) 병반</strong> → 갈변 고사</li><li>지제부 줄기가 잘록해지며 쓰러짐 (입고병)</li></ul></div>
    <div class="theory-section"><h4>주요 피해 작물</h4><p>고추, 토마토, 감자, 오이, 참외, 고구마</p></div>
    <div class="theory-section"><h4>방제</h4><ul><li><strong>배수 개선·이랑 높이기</strong> (가장 기본!)</li><li>메타락실, 만코제브, 포세틸알루미늄</li><li>저항성 품종, 이병 식물 즉시 제거</li></ul></div>`,
    relatedQuestions:["q006","q007","q008","q009"]
  },
  {
    id:"t003",level:"초급",subject:"식물병리학",topic:"곰팡이병",
    title:"탄저병",
    summary:"동심원 무늬 + 분홍색 포자 덩어리가 특징인 고온다습 병해",
    keywords:["탄저병","Colletotrichum","동심원","고온다습","분홍색 포자"],
    content:`<div class="theory-section"><h4>핵심 특징</h4><ul><li>병원균: <strong>Colletotrichum</strong>속</li><li>조건: <strong>고온다습(25~30°C)</strong></li><li>특징: <strong>동심원(타깃) 무늬 + 분홍~주황색 포자 덩어리</strong></li><li>포자는 빗물에 의해 전파</li></ul></div>
    <div class="theory-section"><h4>주요 피해 작물</h4><p>고추, 사과, 포도, 딸기, 수박, 참외, 강낭콩, 토마토</p></div>
    <div class="theory-section"><h4>방제</h4><ul><li>통풍 개선, 이병 과실 즉시 제거</li><li>만코제브, 디페노코나졸, 아족시스트로빈</li></ul></div>`,
    relatedQuestions:["q010","q011","q012"]
  },
  {
    id:"t004",level:"초급",subject:"식물병리학",topic:"곰팡이병",
    title:"흰가루병·잿빛곰팡이병·노균병·녹병 비교",
    summary:"헷갈리는 4가지 곰팡이병 - 발생 조건과 병징으로 구분",
    keywords:["흰가루병","잿빛곰팡이병","노균병","녹병","발생 조건 비교"],
    content:`<div class="theory-section"><h4>4종 비교표 (기출 최빈출!)</h4><table class="compare-table"><tr><th>병명</th><th>병원균</th><th>발생 조건</th><th>병징</th></tr><tr><td>흰가루병</td><td>자낭균</td><td><strong>건조</strong>, 17~25°C</td><td>잎 표면 흰 가루</td></tr><tr><td>잿빛곰팡이병</td><td>자낭균(Botrytis)</td><td><strong>저온(15~20°C)+다습</strong></td><td>회색 곰팡이</td></tr><tr><td>노균병</td><td>난균류</td><td>서늘(15~20°C)+다습</td><td>잎 뒷면 회~자줏빛</td></tr><tr><td>녹병</td><td>담자균</td><td>적당한 습도</td><td>잎 뒷면 황~녹슨색 포자퇴</td></tr></table></div>
    <div class="theory-section"><h4>흰가루병 피해 작물</h4><p>오이, 딸기, 박과류, 장미, 사과, 보리, 밀</p></div>
    <div class="theory-section"><h4>잿빛곰팡이병 피해 작물</h4><p>딸기, 토마토, 오이, 포도, 장미, 상추</p></div>
    <div class="theory-section"><h4>녹병 중간기주</h4><p>사과 붉은별무늬병(적성병) → 향나무가 중간기주</p></div>`,
    relatedQuestions:["q013","q014","q015","q016","q017"]
  },
  {
    id:"t005",level:"초급",subject:"식물병리학",topic:"벼 병해",
    title:"벼 3대 병해 (도열병·흰잎마름병·잎집무늬마름병)",
    summary:"벼 병해 빅3 - 병원체 종류 구분이 핵심",
    keywords:["도열병","흰잎마름병","잎집무늬마름병","방추형","세균","Rhizoctonia","Magnaporthe"],
    content:`<div class="theory-section"><h4>3종 비교 (기출 최빈출!)</h4><table class="compare-table"><tr><th>병명</th><th>병원체</th><th>핵심 병징</th><th>발생 조건</th></tr><tr><td>도열병</td><td>곰팡이(Magnaporthe oryzae)</td><td>방추형 회갈색 병반</td><td>서늘·다습, 질소 과다</td></tr><tr><td>흰잎마름병</td><td><strong>세균</strong>(Xanthomonas oryzae)</td><td>잎 끝서 황화·고사(물결 모양)</td><td>고온다습, 침관수 후</td></tr><tr><td>잎집무늬마름병</td><td>곰팡이(Rhizoctonia solani)</td><td>잎집에 구름 무늬</td><td>고온다습, 밀식</td></tr></table></div>
    <div class="theory-section"><h4>도열병 방제</h4><ul><li>트리사이클라졸, 이소프로티올란</li><li><strong>질소 비료 적정 시비</strong> (과다 금지!)</li><li>저항성 품종 사용</li></ul></div>
    <div class="theory-section"><h4>흰잎마름병 방제 (세균병!)</h4><ul><li>동제(보르도액, 수산화동), 항생제</li><li>살균제(만코제브 등) 사용 금지 → 세균에 효과 없음</li></ul></div>`,
    relatedQuestions:["q018","q019","q020","q021","q022"]
  },
  {
    id:"t006",level:"초급",subject:"식물병리학",topic:"기타 곰팡이병",
    title:"모잘록병·덩굴쪼김병·배추뿌리혹병",
    summary:"시험에 자주 나오는 토양 병해 3종 - 병원균과 증상 구분",
    keywords:["모잘록병","잘록병","덩굴쪼김병","배추뿌리혹병","Pythium","Fusarium","Plasmodiophora"],
    content:`<div class="theory-section"><h4>모잘록병 (잘록병)</h4><ul><li>병원균: <strong>Pythium</strong>속, Rhizoctonia solani</li><li>발생: 주로 육묘기·발아기</li><li>증상: 지제부가 <strong>잘록하게(잘록병)</strong> 썩으며 쓰러짐</li><li>조건: 과습 토양, 저온다습</li><li>방제: 종자 소독, 배수 개선, 포세틸알루미늄</li></ul></div>
    <div class="theory-section"><h4>덩굴쪼김병</h4><ul><li>병원균: <strong>Fusarium oxysporum</strong> (불완전균)</li><li>발생: 박과류 (오이, 수박, 참외)</li><li>증상: 지제부 줄기 갈변·세로로 쪼개짐(쪼김) → 시들음</li><li>조건: 토양 전염, 연작지에서 심각</li><li>방제: 접목 재배(저항성 대목), 토양 소독, 윤작</li></ul></div>
    <div class="theory-section"><h4>배추 뿌리혹병</h4><ul><li>병원균: <strong>Plasmodiophora brassicae</strong> (원생생물)</li><li>발생: 배추, 양배추 등 십자화과</li><li>증상: 뿌리에 <strong>혹(gall)</strong> 형성 → 지상부 황화·시들음</li><li>조건: <strong>산성 토양(pH 6 이하)</strong>에서 심각</li><li>방제: 석회 시용(pH 7 이상), 윤작(4년 이상), 저항성 품종</li></ul></div>`,
    relatedQuestions:["q023","q024","q025","q026"]
  },
  {
    id:"t007",level:"초급",subject:"농업해충학",topic:"해충 기초",
    title:"해충의 분류와 변태",
    summary:"해충 구기·변태 방식 - 방제법 선택의 기초",
    keywords:["저작구","흡수구","완전변태","불완전변태","응애","거미류"],
    content:`<div class="theory-section"><h4>구기(입) 분류</h4><table class="compare-table"><tr><th>구기</th><th>해충</th><th>피해 특징</th></tr><tr><td>저작구(씹는 입)</td><td>나방·나비 유충, 딱정벌레</td><td>잎에 구멍, 잎맥만 남음</td></tr><tr><td>흡수구(빠는 입)</td><td>진딧물, 매미, 노린재</td><td>수액 흡즙, 잎 황화</td></tr><tr><td>천자흡수구</td><td>응애, 총채벌레</td><td>찌르고 빨아먹음</td></tr></table></div>
    <div class="theory-section"><h4>변태 방식 (기출 빈출!)</h4><table class="compare-table"><tr><th>변태</th><th>단계</th><th>대표 해충</th></tr><tr><td>완전변태</td><td>알→유충→번데기→성충</td><td>나방, 나비, 딱정벌레, 파리, 벌</td></tr><tr><td>불완전변태</td><td>알→약충→성충 (번데기 없음)</td><td>진딧물, 매미, 노린재, 메뚜기</td></tr></table></div>
    <div class="theory-section"><h4>응애는 곤충이 아니다!</h4><p>응애 = 거미류(절지동물), 다리 8개<br>→ 살충제 효과 없음, <strong>살비제(acaricide)</strong> 사용</p></div>`,
    relatedQuestions:["q027","q028","q029","q030"]
  },
  {
    id:"t008",level:"초급",subject:"농업해충학",topic:"흡즙해충",
    title:"진딧물·응애·총채벌레·온실가루이 비교",
    summary:"시설재배 4대 미소 해충 - 트랩 색깔·방제법 구분 필수",
    keywords:["진딧물","응애","총채벌레","온실가루이","황색 트랩","청색 트랩","살비제"],
    content:`<div class="theory-section"><h4>4종 비교 (기출 최빈출!)</h4><table class="compare-table"><tr><th>해충</th><th>특징</th><th>트랩 색</th><th>바이러스 매개</th><th>방제</th></tr><tr><td>진딧물</td><td>수액 흡즙, 군집</td><td><strong>황색</strong></td><td>CMV, PVY</td><td>이미다클로프리드</td></tr><tr><td>점박이응애</td><td>거미류, 잎 뒷면</td><td>-</td><td>없음</td><td><strong>살비제</strong></td></tr><tr><td>꽃노랑총채벌레</td><td>꽃·잎 흡즙</td><td><strong>청색</strong></td><td>TSWV</td><td>스피노사드</td></tr><tr><td>온실가루이</td><td>잎 뒷면 흰 가루</td><td><strong>황색</strong></td><td>TYLCV(담배가루이)</td><td>부프로페진</td></tr></table></div>
    <div class="theory-section"><h4>천적 정리 (기출!)</h4><table class="compare-table"><tr><th>해충</th><th>천적</th></tr><tr><td>진딧물</td><td>무당벌레, 풀잠자리, 진디벌</td></tr><tr><td>점박이응애</td><td><strong>칠레이리응애</strong></td></tr><tr><td>꽃노랑총채벌레</td><td><strong>오이이리응애</strong></td></tr><tr><td>온실가루이</td><td><strong>온실가루이좀벌</strong></td></tr></table></div>`,
    relatedQuestions:["q031","q032","q033","q034","q035"]
  },
  {
    id:"t009",level:"초급",subject:"농업해충학",topic:"나방류 해충",
    title:"나방류 해충 종합",
    summary:"배추좀나방·파밤나방·거세미나방·이화명나방·담배나방 비교",
    keywords:["배추좀나방","파밤나방","거세미나방","이화명나방","담배나방","Bt제"],
    content:`<div class="theory-section"><h4>나방류 해충 비교 (기출!)</h4><table class="compare-table"><tr><th>해충</th><th>피해 작물</th><th>특징</th></tr><tr><td>배추좀나방</td><td>배추·양배추(십자화과)</td><td>연중 10세대 이상, Bt 저항성</td></tr><tr><td>파밤나방</td><td>파, 양파 등 잡식성</td><td>고온기(7~9월) 대발생</td></tr><tr><td>거세미나방</td><td>다양한 작물</td><td>야행성, 지면 줄기 절단</td></tr><tr><td>이화명나방</td><td>벼(심고, 백수)</td><td>1화기(심고), 2화기(백수)</td></tr><tr><td>담배나방</td><td>고추·담배 과실</td><td>과실 속 가해</td></tr></table></div>
    <div class="theory-section"><h4>나방류 공통 방제</h4><ul><li>Bt제(바실루스 투링기엔시스): 유충만 방제</li><li>페로몬 트랩으로 성충 예찰</li><li>클로란트라닐리프롤(다이아미드계): 나방류 특효</li></ul></div>`,
    relatedQuestions:["q036","q037","q038","q039"]
  },
  {
    id:"t010",level:"초급",subject:"농업해충학",topic:"벼 해충",
    title:"벼 주요 해충",
    summary:"이화명나방·벼멸구·애멸구·혹명나방 - 비래해충 구분 필수",
    keywords:["이화명나방","벼멸구","애멸구","혹명나방","비래해충","줄무늬잎마름병"],
    content:`<div class="theory-section"><h4>벼멸구 vs 애멸구 (기출 최빈출!)</h4><table class="compare-table"><tr><th>구분</th><th>벼멸구</th><th>애멸구</th></tr><tr><td>월동</td><td><strong>불가</strong>(비래해충)</td><td><strong>가능</strong>(토착)</td></tr><tr><td>바이러스 매개</td><td>없음</td><td><strong>줄무늬잎마름병(RSV)</strong></td></tr><tr><td>주요 피해</td><td>집단 흡즙 → 도복</td><td>바이러스 전파</td></tr></table></div>
    <div class="theory-section"><h4>혹명나방</h4><ul><li>비래해충 (중국에서 날아옴)</li><li>유충이 <strong>벼 잎을 세로로 말아 묶고 속에서 식해</strong></li><li>방제: 트리클로폰, 클로르피리포스</li></ul></div>
    <div class="theory-section"><h4>이화명나방 정리</h4><ul><li>1화기 피해: <strong>심고</strong>(心枯) - 분얼기 심부 고사</li><li>2화기 피해: <strong>백수</strong>(白穗) - 출수기 이삭 고사</li></ul></div>`,
    relatedQuestions:["q040","q041","q042"]
  },
  {
    id:"t011",level:"초급",subject:"잡초방제학",topic:"잡초 기초",
    title:"잡초 분류와 주요 잡초",
    summary:"생존기간·잎형태 분류와 논밭 대표 잡초 완벽 암기",
    keywords:["1년생","다년생","화본과","광엽","사초과","피","올방개","바랭이"],
    content:`<div class="theory-section"><h4>생존 기간별</h4><table class="compare-table"><tr><th>구분</th><th>특성</th><th>대표 잡초</th></tr><tr><td>1년생(춘계)</td><td>봄 발아, 가을 고사</td><td>바랭이, 쇠비름, 여뀌, 명아주</td></tr><tr><td>월년생</td><td>가을 발아, 이듬해 고사</td><td>냉이, 별꽃, 뚝새풀</td></tr><tr><td>다년생</td><td>지하부로 다년 생존</td><td>쑥, 띠, 올방개, 토끼풀</td></tr></table></div>
    <div class="theory-section"><h4>잎 형태별 분류 (제초제 선택 기준!)</h4><table class="compare-table"><tr><th>구분</th><th>줄기 단면</th><th>잎맥</th><th>대표 잡초</th></tr><tr><td>화본과(단자엽)</td><td>원형</td><td>평행맥</td><td>바랭이, 피, 강아지풀</td></tr><tr><td>사초과(단자엽)</td><td><strong>삼각형</strong></td><td>평행맥</td><td>올방개, 너도방동사니</td></tr><tr><td>광엽(쌍자엽)</td><td>원형</td><td>그물맥</td><td>명아주, 쑥, 쇠비름</td></tr></table></div>
    <div class="theory-section"><h4>논·밭 주요 잡초</h4><table class="compare-table"><tr><th>논 잡초</th><th>밭 잡초</th></tr><tr><td>피, 올방개, 너도방동사니, 물달개비, 가래</td><td>바랭이, 쇠비름, 명아주, 쑥, 토끼풀</td></tr></table></div>`,
    relatedQuestions:["q043","q044","q045","q046"]
  },
  {
    id:"t012",level:"초급",subject:"잡초방제학",topic:"제초제 기초",
    title:"제초제의 분류와 주요 약제",
    summary:"선택성/비선택성·접촉형/이행형·토양/경엽처리 완벽 정리",
    keywords:["선택성","비선택성","접촉형","이행형","글리포세이트","파라콰트","2,4-D"],
    content:`<div class="theory-section"><h4>선택성 vs 비선택성</h4><table class="compare-table"><tr><th>구분</th><th>특성</th><th>예</th></tr><tr><td>선택성</td><td>특정 식물만 방제</td><td>2,4-D, 할록시폽, 이마자픽</td></tr><tr><td>비선택성</td><td>모든 식물 방제</td><td>글리포세이트, 파라콰트</td></tr></table></div>
    <div class="theory-section"><h4>접촉형 vs 이행형</h4><table class="compare-table"><tr><th>구분</th><th>작용</th><th>다년생 효과</th><th>예</th></tr><tr><td>접촉형</td><td>닿은 부위만</td><td>낮음</td><td>파라콰트</td></tr><tr><td>이행형</td><td>뿌리까지</td><td>높음</td><td>글리포세이트</td></tr></table></div>
    <div class="theory-section"><h4>주요 제초제 특성 (기출 빈출!)</h4><table class="compare-table"><tr><th>약제</th><th>특성</th><th>주용도</th></tr><tr><td>글리포세이트</td><td>비선택성, 이행형</td><td>비경작지, 과수원</td></tr><tr><td>파라콰트</td><td>비선택성, 접촉형, <strong>맹독성</strong></td><td>비경작지</td></tr><tr><td>2,4-D</td><td>선택성, 광엽 방제</td><td>벼논 광엽잡초</td></tr><tr><td>부타클로르</td><td>선택성, 토양처리</td><td>논 초기 방제</td></tr></table></div>
    <div class="theory-section"><h4>처리 시기</h4><ul><li>토양처리제: 발아 전 토양에 처리 (예방)</li><li>경엽처리제: 발아 후 잎에 처리 (방제)</li></ul></div>`,
    relatedQuestions:["q047","q048","q049","q050"]
  },
  {
    id:"t013",level:"초급",subject:"농약학",topic:"농약 기초",
    title:"농약의 분류·독성·안전 사용",
    summary:"살균제/살충제/제초제 분류, LD50 독성 등급, PHI, 보호구",
    keywords:["살균제","살충제","제초제","LD50","PHI","맹독성","보호구"],
    content:`<div class="theory-section"><h4>방제 대상별 분류</h4><table class="compare-table"><tr><th>종류</th><th>방제 대상</th><th>주요 약제</th></tr><tr><td>살균제</td><td>곰팡이, 세균</td><td>만코제브, 보르도액, 트리사이클라졸</td></tr><tr><td>살충제</td><td>해충</td><td>이미다클로프리드, 클로르피리포스</td></tr><tr><td>살비제</td><td>응애</td><td>아바멕틴, 페나자퀸, 헥시티아족스</td></tr><tr><td>제초제</td><td>잡초</td><td>글리포세이트, 파라콰트</td></tr><tr><td>살선충제</td><td>선충</td><td>카보퓨란</td></tr><tr><td>식물생장조절제</td><td>생장 조절</td><td>에테폰, 지베렐린</td></tr></table></div>
    <div class="theory-section"><h4>독성 구분 (LD50 암기!)</h4><table class="compare-table"><tr><th>등급</th><th>경구 LD50 (mg/kg)</th></tr><tr><td>맹독성</td><td>50 이하</td></tr><tr><td>고독성</td><td>50~500</td></tr><tr><td>보통독성</td><td>500~5,000</td></tr><tr><td>저독성</td><td>5,000 이상</td></tr></table></div>
    <div class="theory-section"><h4>안전 사용 수칙</h4><ul><li>PHI(수확 전 안전일수) 준수</li><li>적정 희석 배수 준수 (진하면 약해 발생)</li><li>방제복·방독마스크·고무장갑 착용</li><li>바람 부는 날, 고온(30°C↑) 시 살포 금지</li><li>살포 후 비누로 세척, 30분 이상 환기</li></ul></div>`,
    relatedQuestions:["q051","q052","q053","q054"]
  },

  // ════════════════════════════════════════
  // 중급 (18개)
  // ════════════════════════════════════════
  {
    id:"t014",level:"중급",subject:"식물병리학",topic:"바이러스병",
    title:"바이러스병 종합 - 매개충 쌍 완벽 암기",
    summary:"CMV/TMV/TSWV/TYLCV/RSV/PVY 바이러스-매개충 쌍 완벽 정리",
    keywords:["CMV","TMV","TSWV","TYLCV","RSV","PVY","진딧물","총채벌레","가루이","애멸구"],
    content:`<div class="theory-section"><h4>바이러스-매개충 쌍 (기출 최빈출!)</h4><table class="compare-table"><tr><th>바이러스(약칭)</th><th>매개충</th><th>주요 피해</th></tr><tr><td>CMV (오이모자이크)</td><td>진딧물</td><td>오이, 호박, 고추</td></tr><tr><td>TMV (담배모자이크)</td><td><strong>즙액 접촉</strong>(매개충 없음)</td><td>토마토, 고추</td></tr><tr><td>TSWV (토마토반점위조)</td><td><strong>꽃노랑총채벌레</strong></td><td>토마토, 고추</td></tr><tr><td>TYLCV (토마토황화잎말림)</td><td><strong>담배가루이</strong></td><td>토마토</td></tr><tr><td>RSV (벼줄무늬잎마름)</td><td><strong>애멸구</strong></td><td>벼</td></tr><tr><td>PVY (감자Y)</td><td>진딧물</td><td>감자, 고추</td></tr><tr><td>WMV (수박모자이크)</td><td>진딧물</td><td>박과류</td></tr></table></div>
    <div class="theory-section"><h4>바이러스병 공통 특징</h4><ul><li>치료제 없음 → 예방이 전부</li><li>전신 감염, 모자이크·위축·기형 증상</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li>매개충 철저 방제 (최우선!)</li><li>이병주 즉시 제거, 작업 도구 소독</li><li>은박 멀칭(진딧물 기피), 저항성 품종</li></ul></div>`,
    relatedQuestions:["q055","q056","q057","q058","q059"]
  },
  {
    id:"t015",level:"중급",subject:"식물병리학",topic:"세균병",
    title:"세균병 종합 (무름병·풋마름병·불마름병)",
    summary:"세균병 3종 병원균·증상·방제 비교",
    keywords:["무름병","풋마름병","불마름병","Pectobacterium","Ralstonia","Erwinia","악취","청고","항생제"],
    content:`<div class="theory-section"><h4>세균병 3종 비교 (기출!)</h4><table class="compare-table"><tr><th>병명</th><th>병원균</th><th>특징</th><th>피해 작물</th></tr><tr><td>무름병(연부병)</td><td>Pectobacterium carotovorum</td><td>조직 물러짐 + <strong>악취</strong></td><td>배추, 무, 감자, 양파</td></tr><tr><td>풋마름병(청고병)</td><td>Ralstonia solanacearum</td><td>관다발 막힘 → <strong>푸른 채 시들음</strong></td><td>토마토, 고추, 가지</td></tr><tr><td>불마름병(화상병)</td><td>Erwinia amylovora</td><td>불에 탄 듯, 가지끝 갈고리</td><td>사과, 배(장미과)</td></tr></table></div>
    <div class="theory-section"><h4>세균병 방제</h4><ul><li>동제(보르도액, 수산화동): 살균+살세균</li><li>항생제: 옥시테트라사이클린, 스트렙토마이신</li><li>상처 방지 (세균 침입 경로)</li></ul></div>
    <div class="theory-section"><h4>보르도액 = 황산구리 + 소석회(생석회)</h4></div>`,
    relatedQuestions:["q060","q061","q062","q063"]
  },
  {
    id:"t016",level:"중급",subject:"식물병리학",topic:"기타 병해",
    title:"흰비단병·깨씨무늬병·과수 병해",
    summary:"흰비단병(균핵)·깨씨무늬병(벼)·사과 검은별무늬병·부란병",
    keywords:["흰비단병","Sclerotium","균핵","깨씨무늬병","검은별무늬병","부란병","Venturia"],
    content:`<div class="theory-section"><h4>흰비단병</h4><ul><li>병원균: <strong>Sclerotium rolfsii</strong></li><li>특징: 지제부에 흰 비단 같은 균사 + <strong>겨자씨(짙은갈색) 모양 균핵</strong></li><li>고온다습 조건</li><li>피해: 채소류, 화훼류</li></ul></div>
    <div class="theory-section"><h4>깨씨무늬병 (벼)</h4><ul><li>병원균: Cochliobolus miyabeanus</li><li>병징: 잎에 갈색 방추형~타원형 반점 (깨 씨앗처럼 보임)</li><li>도열병과 구분: 깨씨무늬병은 병반이 더 둥글고 갈색</li></ul></div>
    <div class="theory-section"><h4>사과 검은별무늬병 (사과 scab)</h4><ul><li>병원균: Venturia inaequalis (자낭균)</li><li>병징: 잎·과실에 검은 별 모양 반점, 과실 기형</li><li>조건: 봄~여름 비 많은 해에 심각</li></ul></div>
    <div class="theory-section"><h4>사과 부란병</h4><ul><li>병원균: Valsa ceratosperma</li><li>병징: 수피가 갈변·함몰, 알코올 냄새</li><li>방제: 도포제 처리, 병든 수피 제거</li></ul></div>`,
    relatedQuestions:["q064","q065"]
  },
  {
    id:"t017",level:"중급",subject:"식물병리학",topic:"선충병",
    title:"뿌리혹선충병",
    summary:"뿌리에 혹이 생기는 선충 피해 - 토양 소독이 핵심",
    keywords:["뿌리혹선충","Meloidogyne","혹","토양전염","살선충제","태양열 소독"],
    content:`<div class="theory-section"><h4>핵심 정보</h4><ul><li>병원체: <strong>Meloidogyne</strong>속 (뿌리혹선충, 동물계)</li><li>뿌리에 <strong>혹(gall)</strong> 형성 → 뿌리 기능 저하</li><li>토양 전염 (물·농기구·묘목 이동)</li></ul></div>
    <div class="theory-section"><h4>방제</h4><ul><li>토양 훈증 소독</li><li>살선충제: 카보퓨란, 포스티아제이트</li><li>저항성 품종 (토마토 저항성 품종)</li><li>태양열 토양 소독, 객토</li><li>윤작 (비기주 작물로)</li></ul></div>`,
    relatedQuestions:["q066","q067"]
  },
  {
    id:"t018",level:"중급",subject:"농업해충학",topic:"기타 해충",
    title:"복숭아순나방·복숭아심식나방·노린재류",
    summary:"과수·채소 가해 해충 추가 - 피해 부위 구분 필수",
    keywords:["복숭아순나방","복숭아심식나방","톱다리개미허리노린재","갈색날개노린재","과실 가해"],
    content:`<div class="theory-section"><h4>복숭아순나방 vs 복숭아심식나방</h4><table class="compare-table"><tr><th>구분</th><th>복숭아순나방</th><th>복숭아심식나방</th></tr><tr><td>피해 부위</td><td>신초·어린 과실</td><td>과실 내부</td></tr><tr><td>특징</td><td>신초 끝이 말리고 고사</td><td>과실 속에 구멍·배설물</td></tr><tr><td>발생</td><td>1년 다세대</td><td>1년 2~3세대</td></tr></table></div>
    <div class="theory-section"><h4>노린재류 해충</h4><ul><li>톱다리개미허리노린재: 콩·팥 등 두류 가해, 과실 흡즙</li><li>갈색날개노린재: 과수원 집단 가해 (외래해충)</li><li>특징: 악취(방귀벌레), 방제 어려움</li><li>방제: 클로르피리포스, 에토펜프록스</li></ul></div>`,
    relatedQuestions:["q068","q069"]
  },
  {
    id:"t019",level:"중급",subject:"농업해충학",topic:"IPM",
    title:"IPM과 천적 이용",
    summary:"종합적 해충 관리 - ETL 개념과 주요 천적 완벽 정리",
    keywords:["IPM","ETL","천적","Bt제","생물적 방제","경제적 피해 허용 수준"],
    content:`<div class="theory-section"><h4>IPM 방제 우선순위</h4><ol style="padding-left:18px;font-size:14px;line-height:2;color:var(--text-mid)"><li>경종적 방제: 저항성 품종, 윤작, 재배 시기 조절</li><li>물리적 방제: 방충망, 끈끈이트랩, 열처리</li><li>생물적 방제: 천적, Bt제, 핵다각체병바이러스</li><li>화학적 방제: 최후 수단, ETL 초과 시만</li></ol></div>
    <div class="theory-section"><h4>ETL</h4><p>방제 비용 = 피해 손실액이 되는 해충 밀도. ETL 이하 → 방제 불필요.</p></div>
    <div class="theory-section"><h4>주요 천적 (기출!)</h4><table class="compare-table"><tr><th>해충</th><th>천적</th></tr><tr><td>진딧물</td><td>무당벌레, 풀잠자리, 기생봉(진디벌)</td></tr><tr><td>점박이응애</td><td><strong>칠레이리응애</strong>, 긴털이리응애</td></tr><tr><td>꽃노랑총채벌레</td><td><strong>오이이리응애</strong></td></tr><tr><td>온실가루이</td><td><strong>온실가루이좀벌</strong></td></tr><tr><td>나방류 유충</td><td>고치벌, 맵시벌</td></tr></table></div>`,
    relatedQuestions:["q070","q071","q072"]
  },
  {
    id:"t020",level:"중급",subject:"잡초방제학",topic:"잡초방제 전략",
    title:"잡초 방제 방법 종합",
    summary:"물리적·생물적·경종적·화학적 방제 방법 비교",
    keywords:["물리적 방제","멀칭","생물적 방제","경종적 방제","타감작용","윤작"],
    content:`<div class="theory-section"><h4>방제 방법 비교</h4><table class="compare-table"><tr><th>방법</th><th>내용</th><th>장단점</th></tr><tr><td>경운·중경</td><td>기계로 토양 뒤집기</td><td>간단하지만 노동력 소요</td></tr><tr><td>멀칭</td><td>흑색 필름, 볏짚으로 빛 차단</td><td>효과 우수, 비용 발생</td></tr><tr><td>윤작</td><td>작물 교체로 특정 잡초 억제</td><td>장기적 효과</td></tr><tr><td>밀식 재배</td><td>작물이 잡초보다 빨리 피복</td><td>경합 억제</td></tr><tr><td>생물적 방제</td><td>천적·미생물 이용</td><td>친환경, 효과 느림</td></tr><tr><td>화학적 방제</td><td>제초제 살포</td><td>빠르고 효과적, 저항성 주의</td></tr></table></div>
    <div class="theory-section"><h4>논 잡초방제 체계</h4><ul><li>이앙 전: 경운·써레질</li><li>이앙 직후 7일 이내: 토양처리제 (부타클로르 등)</li><li>이앙 후 2~3주: 잔초 경엽처리</li></ul></div>`,
    relatedQuestions:["q073","q074","q075"]
  },
  {
    id:"t021",level:"중급",subject:"잡초방제학",topic:"제초제 저항성",
    title:"제초제 저항성 잡초 관리",
    summary:"저항성 발달 원인과 교호 사용 원칙",
    keywords:["제초제 저항성","글리포세이트 저항성","교호 사용","저항성 잡초"],
    content:`<div class="theory-section"><h4>저항성 발달 원인</h4><ul><li>동일 계통 제초제 반복 사용</li><li>세대가 짧은 1년생 잡초에서 빠르게 발달</li><li>우리나라: 물피, 올방개 등에서 저항성 문제</li></ul></div>
    <div class="theory-section"><h4>저항성 관리</h4><ul><li>작용 기작이 다른 제초제를 교호 사용</li><li>기계적 방제와 병행</li><li>저항성 잡초 포장 격리</li><li>적정 약량 준수</li></ul></div>`,
    relatedQuestions:["q076","q077"]
  },
  {
    id:"t022",level:"중급",subject:"농약학",topic:"농약 제형",
    title:"농약 제형과 특성",
    summary:"유제·수화제·입제 등 8가지 주요 제형 특징과 용도",
    keywords:["유제","수화제","입제","분제","액상수화제","훈연제","훈증제","수용제"],
    content:`<div class="theory-section"><h4>주요 제형 비교 (기출 빈출!)</h4><table class="compare-table"><tr><th>제형</th><th>약호</th><th>특징</th><th>희석</th></tr><tr><td>유제</td><td>EC</td><td>유기용매에 녹임, 부착성 우수</td><td>물에 희석</td></tr><tr><td>수화제</td><td>WP</td><td>물에 현탁, 지속성</td><td>물에 희석</td></tr><tr><td>액상수화제</td><td>SC</td><td>분말 없는 현탁액</td><td>물에 희석</td></tr><tr><td>수용제</td><td>SP/SL</td><td>물에 완전 용해</td><td>물에 희석</td></tr><tr><td>분제</td><td>D</td><td>분말, 그대로 살포</td><td>불필요</td></tr><tr><td>입제</td><td>G</td><td>알갱이, 토양 처리</td><td>불필요</td></tr><tr><td>훈연제</td><td>FU</td><td>연기, 시설 내</td><td>점화</td></tr><tr><td>훈증제</td><td>FP</td><td>가스, 토양·창고 소독</td><td>기화</td></tr></table></div>`,
    relatedQuestions:["q078","q079","q080"]
  },
  {
    id:"t023",level:"중급",subject:"농약학",topic:"살충제 계통",
    title:"살충제 계통별 작용 기작",
    summary:"유기인계·카바메이트·피레스로이드·네오니코티노이드 계통 완벽 구분",
    keywords:["유기인계","카바메이트계","피레스로이드계","네오니코티노이드","스피노신","다이아미드"],
    content:`<div class="theory-section"><h4>살충제 계통 (기출!)</h4><table class="compare-table"><tr><th>계통</th><th>작용 기작</th><th>대표 약제</th></tr><tr><td>유기인계</td><td>콜린에스테라제 저해</td><td>클로르피리포스, 디메토에이트</td></tr><tr><td>카바메이트계</td><td>콜린에스테라제 저해</td><td>카보퓨란, 메티오카브</td></tr><tr><td>피레스로이드계</td><td>신경 Na채널 교란</td><td>사이퍼메트린, 델타메트린</td></tr><tr><td>네오니코티노이드계</td><td>니코틴성 수용체 자극</td><td>이미다클로프리드, 아세타미프리드</td></tr><tr><td>스피노신계</td><td>니코틴성 수용체 교란</td><td>스피노사드</td></tr><tr><td>다이아미드계</td><td>라이아노딘 수용체</td><td>클로란트라닐리프롤</td></tr></table></div>
    <div class="theory-section"><h4>교호 살포 주의!</h4><p>유기인계 + 카바메이트계는 같은 작용점 → 교호 살포 효과 없음!</p></div>`,
    relatedQuestions:["q081","q082","q083"]
  },
  {
    id:"t024",level:"중급",subject:"농약학",topic:"살균제·제초제 계통",
    title:"살균제 분류와 제초제 작용 기작",
    summary:"보호/치료 살균제 구분, EBI/스트로빌루린/디카르복시미드, 제초제 작용점",
    keywords:["보호살균제","치료살균제","EBI계","스트로빌루린","디카르복시미드","보르도액","글리포세이트 작용 기작"],
    content:`<div class="theory-section"><h4>살균제 분류</h4><table class="compare-table"><tr><th>구분</th><th>작용</th><th>대표 약제</th></tr><tr><td>보호살균제</td><td>침입 전 예방</td><td>만코제브, 보르도액, 클로로탈로닐</td></tr><tr><td>치료살균제</td><td>침입 후에도 방제</td><td>베노밀, 카벤다짐</td></tr><tr><td>침투이행성</td><td>식물 체내 이동</td><td>프로피코나졸, 아족시스트로빈</td></tr></table></div>
    <div class="theory-section"><h4>살균제 계통</h4><table class="compare-table"><tr><th>계통</th><th>작용 기작</th><th>대표 약제</th></tr><tr><td>EBI계(DMI)</td><td>에르고스테롤 합성 저해</td><td>테부코나졸, 프로피코나졸</td></tr><tr><td>스트로빌루린계</td><td>미토콘드리아 호흡 저해</td><td>아족시스트로빈</td></tr><tr><td>디카르복시미드계</td><td>세포막 합성 저해</td><td>이프로디온(잿빛곰팡이병)</td></tr></table></div>
    <div class="theory-section"><h4>주요 제초제 작용 기작</h4><ul><li>글리포세이트: <strong>EPSPS 효소 저해</strong> (아미노산 합성 차단)</li><li>파라콰트: 광계 I 전자 가로채기 (활성산소 발생)</li><li>2,4-D: <strong>옥신 작용 교란</strong> (이상 생장 유발)</li><li>ALS 저해제(이마자픽 등): 아세토락테이트합성효소 저해</li></ul></div>`,
    relatedQuestions:["q084","q085","q086"]
  },
  {
    id:"t025",level:"중급",subject:"농약학",topic:"농약 중독·잔류",
    title:"농약 중독 증상·응급처치·잔류 기준",
    summary:"유기인계 중독 증상, 응급처치, PHI·MRL·PLS·ADI 완벽 정리",
    keywords:["유기인계 중독","콜린에스테라제","동공 축소","PHI","MRL","PLS","ADI"],
    content:`<div class="theory-section"><h4>유기인계·카바메이트 중독 증상 (기출!)</h4><ul><li>콜린에스테라제 저해 → 아세틸콜린 축적</li><li>증상: <strong>동공 축소(축동)</strong>, 과도한 분비(침·눈물·땀), 근육 경련</li><li>심하면: 호흡 곤란, 의식 저하</li></ul></div>
    <div class="theory-section"><h4>응급처치</h4><ul><li>신선한 공기 장소로 이동</li><li>오염된 의복 제거, 피부 세척</li><li>의식 있으면 옆으로 눕히기</li><li>즉시 119 연락, 해독제(아트로핀)</li></ul></div>
    <div class="theory-section"><h4>잔류 관련 용어 (기출!)</h4><table class="compare-table"><tr><th>용어</th><th>의미</th></tr><tr><td>PHI</td><td>수확 전 안전일수</td></tr><tr><td>MRL</td><td>잔류 허용 기준(최대)</td></tr><tr><td>ADI</td><td>일일 섭취 허용량(평생 안전)</td></tr><tr><td>PLS</td><td>허용 물질 목록 관리 (미등록=0.01mg/kg↓)</td></tr></table></div>`,
    relatedQuestions:["q087","q088","q089","q090"]
  },
  {
    id:"t026",level:"중급",subject:"농약학",topic:"농약 희석 계산",
    title:"농약 희석 배수 계산법",
    summary:"현장에서 바로 쓰는 농약 희석 계산 - 시험 출제 단골",
    keywords:["희석 배수","농약 계산","살포액","원액","농도"],
    content:`<div class="theory-section"><h4>기본 계산법</h4><p>농약 사용량(mL) = 살포액량(L) ÷ 희석 배수</p><p class="formula">예) 1000L의 살포액을 1000배 희석 시<br>농약량 = 1000L ÷ 1000배 = 1L (1000mL)</p></div>
    <div class="theory-section"><h4>자주 출제되는 문제 유형</h4><ul><li>500배 희석 → 100L 살포 시 농약 = 100÷500 = 0.2L = 200mL</li><li>2000배 희석 → 20L 살포 시 농약 = 20÷2000 = 0.01L = 10mL</li></ul></div>
    <div class="theory-section"><h4>농도 계산</h4><p>농도(%) = (원액량 ÷ 전체량) × 100<br>예) 1L에 5mL 넣으면 = (5÷1000)×100 = 0.5%</p></div>`,
    relatedQuestions:["q091","q092"]
  },
  {
    id:"t027",level:"중급",subject:"농약학",topic:"약해·혼용",
    title:"약해 원인·혼용 적부·보관법",
    summary:"약해 발생 조건, 혼용 시 주의사항, 농약 보관 방법",
    keywords:["약해","혼용","알칼리성","산성","보관","이중 잠금","어린이"],
    content:`<div class="theory-section"><h4>약해 발생 원인 (기출!)</h4><ul><li>적정 희석 배수 초과 (고농도)</li><li>고온(30°C↑) 시 살포</li><li>유묘기·어린 조직에 강한 약제</li><li>호환 안 되는 약제 혼용</li><li>동일 약제 단기간 반복 살포</li></ul></div>
    <div class="theory-section"><h4>혼용 주의사항</h4><ul><li>알칼리성 + 산성 → 중화반응, 약효 저하, 약해</li><li>보르도액 + 유기인계 살충제 → 혼용 금지</li><li>혼용 전 혼용 가부표 반드시 확인</li><li>혼용 테스트: 소량 먼저 혼합 후 이상 없으면 사용</li></ul></div>
    <div class="theory-section"><h4>농약 보관법 (기출!)</h4><ul><li>어린이 손 닿지 않는 곳, 이중 잠금</li><li>식품과 분리 보관</li><li>직사광선 피하고 서늘한 곳</li><li>원용기에 보관 (다른 용기 옮기기 금지)</li><li>음료수 병에 절대 옮기지 않기</li></ul></div>`,
    relatedQuestions:["q093","q094","q095"]
  },
  {
    id:"t028",level:"중급",subject:"농약학",topic:"저항성 관리",
    title:"살충제·살균제 저항성 관리",
    summary:"저항성 발달 메커니즘과 IRAC·FRAC 교호 살포 원칙",
    keywords:["저항성","교호 살포","IRAC","FRAC","작용 기작","MoA"],
    content:`<div class="theory-section"><h4>저항성 발달 원인</h4><ul><li>동일 계통 약제 반복 사용</li><li>응애·진딧물 등 세대 짧은 해충에서 빠르게 발달</li><li>고농도 사용 (저항성 개체 강한 선발압)</li></ul></div>
    <div class="theory-section"><h4>IRAC(살충제 저항성 관리위원회) 원칙</h4><ul><li>작용 기작(MoA) 분류가 다른 계통을 교호 사용</li><li>유기인계+카바메이트계는 같은 MoA → 교호 효과 없음</li><li>네오니코티노이드계와 스피노신계 교호 등</li></ul></div>
    <div class="theory-section"><h4>FRAC(살균제 저항성 관리)</h4><ul><li>스트로빌루린계: 저항성 발달 빠름 → 연속 사용 금지</li><li>EBI계(DMI)와 교호 사용 권장</li></ul></div>`,
    relatedQuestions:["q096","q097"]
  },

  // ════════════════════════════════════════
  // 고급 (10개)
  // ════════════════════════════════════════
  {
    id:"t029",level:"고급",subject:"식물병리학",topic:"병 종합 진단",
    title:"병원체별 진단·방제 전략 종합",
    summary:"곰팡이·세균·바이러스·선충을 정확히 구분하고 올바른 방제법 선택",
    keywords:["살균제","항생제","치료 불가","보호살균제","치료살균제"],
    content:`<div class="theory-section"><h4>병원체별 방제 전략 (기출!)</h4><table class="compare-table"><tr><th>병원체</th><th>방제약</th><th>핵심 전략</th></tr><tr><td>곰팡이</td><td>살균제</td><td>비 오기 전 예방 살포 우선</td></tr><tr><td>세균</td><td>동제, 항생제</td><td>상처 방지가 예방 핵심</td></tr><tr><td>바이러스</td><td>치료제 없음</td><td>매개충 방제, 이병주 즉시 제거</td></tr><tr><td>선충</td><td>살선충제, 훈증제</td><td>토양 소독, 저항성 품종</td></tr></table></div>
    <div class="theory-section"><h4>곰팡이병 분류 종합</h4><table class="compare-table"><tr><th>병명</th><th>조건</th><th>병원균 분류</th></tr><tr><td>역병, 노균병</td><td>고온·서늘+다습</td><td><strong>난균류</strong></td></tr><tr><td>탄저병, 흰가루병, 잿빛곰팡이병, 도열병</td><td>다양</td><td>자낭균·불완전균</td></tr><tr><td>녹병</td><td>적습</td><td><strong>담자균</strong></td></tr></table></div>`,
    relatedQuestions:["q098","q099","q100"]
  },
  {
    id:"t030",level:"고급",subject:"농업해충학",topic:"해충 종합",
    title:"작물별 주요 해충 종합 정리",
    summary:"벼·배추·고추·박과류·과수별 주요 해충과 방제법 총정리",
    keywords:["벼 해충","배추 해충","고추 해충","과수 해충","작물별 방제"],
    content:`<div class="theory-section"><h4>작물별 주요 해충</h4><table class="compare-table"><tr><th>작물</th><th>주요 해충</th><th>주요 방제법</th></tr><tr><td>벼</td><td>이화명나방, 벼멸구, 애멸구, 혹명나방</td><td>이앙 후 입제 처리, 항공 방제</td></tr><tr><td>배추·채소</td><td>배추좀나방, 파밤나방, 진딧물, 배추흰나비</td><td>Bt제, 배추좀나방 저항성 관리</td></tr><tr><td>고추·토마토</td><td>담배나방, 총채벌레, 진딧물, 응애</td><td>청색·황색 트랩, IPM</td></tr><tr><td>박과류</td><td>진딧물, 응애, 온실가루이, 굴파리</td><td>시설 방충망, 천적 방사</td></tr><tr><td>과수</td><td>복숭아순나방, 심식나방, 사과응애, 노린재</td><td>페로몬 트랩, 교미교란제</td></tr></table></div>`,
    relatedQuestions:["q101","q102"]
  },
  {
    id:"t031",level:"고급",subject:"잡초방제학",topic:"잡초방제 심화",
    title:"잡초 방제 종합 전략",
    summary:"작물별 잡초 방제 체계와 제초제 저항성 종합 관리",
    keywords:["논 방제 체계","밭 방제 체계","제초제 저항성","사초과 방제","멀칭"],
    content:`<div class="theory-section"><h4>논 잡초방제 체계</h4><ul><li>이앙 전: 경운·써레질</li><li>이앙 직후 7일: 토양처리제 (부타클로르 등)</li><li>2~3주 후: 잔초 경엽처리</li><li>사초과(올방개): 별도 성분 확인 필수!</li></ul></div>
    <div class="theory-section"><h4>밭 잡초방제</h4><ul><li>흑색 필름 멀칭: 빛 차단으로 발아 억제</li><li>화본과: 할록시폽 등 화본과 전용 제초제</li><li>광엽: 2,4-D 등 광엽 전용</li><li>비선택성: 글리포세이트 (작물 없을 때)</li></ul></div>
    <div class="theory-section"><h4>제초제 저항성 잡초 대응</h4><ul><li>작용 기작 다른 약제로 교체</li><li>기계적 방제 병행</li><li>저항성 포장 격리 관리</li></ul></div>`,
    relatedQuestions:["q103","q104"]
  },
  {
    id:"t032",level:"고급",subject:"농약학",topic:"농약 법규",
    title:"농약 관련 법규와 등록 제도",
    summary:"농약관리법·농약 등록·PLS 제도의 실무 적용",
    keywords:["농약관리법","농약 등록","PLS","농약 잔류 허용 기준","안전성 평가"],
    content:`<div class="theory-section"><h4>농약관리법 핵심</h4><ul><li>농약은 반드시 등록 후 판매·사용</li><li>등록된 작물·병해충에만 사용 (미등록 사용 금지)</li><li>안전사용기준(PHI) 준수 의무</li></ul></div>
    <div class="theory-section"><h4>PLS 제도 (기출!)</h4><ul><li>Positive List System</li><li>등록된 농약 → 등록된 기준 이하</li><li>미등록 농약 → 일률 기준 <strong>0.01mg/kg 이하</strong></li><li>목적: 안전한 농산물 공급</li></ul></div>
    <div class="theory-section"><h4>농약 안전성 시험 항목</h4><ul><li>급성독성 (LD50), 만성독성</li><li>잔류 시험, 환경 영향 평가</li><li>약효·약해 시험</li></ul></div>`,
    relatedQuestions:["q105","q106"]
  },
  {
    id:"t033",level:"고급",subject:"식물병리학",topic:"병 종합",
    title:"작물별 종합 방제 전략",
    summary:"벼·고추·토마토·배추별 주요 병해와 방제 전략",
    keywords:["벼 방제","고추 방제","토마토 방제","배추 방제","작물별 방제력"],
    content:`<div class="theory-section"><h4>벼 주요 병해 방제</h4><ul><li>도열병: 트리사이클라졸, 질소 적정 관리</li><li>흰잎마름병: 보르도액(세균병!)</li><li>잎집무늬마름병: 프로피코나졸</li></ul></div>
    <div class="theory-section"><h4>고추 주요 병해 방제</h4><ul><li>역병: 배수 개선, 메타락실</li><li>탄저병: 비 전 예방, 만코제브</li><li>바이러스병(CMV, TSWV): 진딧물·총채벌레 방제, 이병주 제거</li><li>무름병: 상처 방지, 동제</li></ul></div>
    <div class="theory-section"><h4>토마토 주요 병해</h4><ul><li>역병: 메타락실</li><li>풋마름병: 토양 소독, 저항성 품종</li><li>TYLCV: 담배가루이 방제, 황색 트랩</li><li>잿빛곰팡이병: 환기, 이프로디온</li></ul></div>`,
    relatedQuestions:["q107","q108"]
  },
  {
    id:"t034",level:"고급",subject:"농약학",topic:"종합 심화",
    title:"농약 사용 종합 심화",
    summary:"농약 표시사항 해독·혼용·잔류 관리·환경 영향 종합",
    keywords:["농약 라벨","혼용 가부","잔류 관리","천적 독성","환경 독성"],
    content:`<div class="theory-section"><h4>농약 라벨 필수 확인 사항</h4><ul><li>품목명, 농약명, 등록번호</li><li>적용 작물 및 병해충 (미등록 사용 금지!)</li><li>희석 배수, PHI</li><li>독성 등급, 보호구 착용 기준</li></ul></div>
    <div class="theory-section"><h4>천적에 독성이 낮은 살충제</h4><ul><li>Bt제, 스피노사드: 천적에 비교적 안전</li><li>피레스로이드계: 천적에 독성 강함</li><li>유기인계: 대부분 천적에 해로움</li></ul></div>
    <div class="theory-section"><h4>환경 독성</h4><ul><li>물고기 독성(LC50), 꿀벌 독성</li><li>수서생물 보호를 위해 수계 주변 살포 주의</li><li>꿀벌 활동 시간대 살포 금지</li></ul></div>`,
    relatedQuestions:["q109","q110"]
  },
  {
    id:"t035",level:"고급",subject:"잡초방제학",topic:"제초제 심화",
    title:"제초제 작용 기작 심화",
    summary:"EPSPS·ALS·광계 저해 등 주요 제초제 작용 기작",
    keywords:["EPSPS","ALS","광계I","광계II","옥신","지질합성 저해"],
    content:`<div class="theory-section"><h4>주요 제초제 작용 기작 (기출!)</h4><table class="compare-table"><tr><th>작용 기작</th><th>저해 효소/부위</th><th>대표 약제</th></tr><tr><td>EPSPS 저해</td><td>아미노산 합성</td><td>글리포세이트</td></tr><tr><td>ALS 저해</td><td>분지 아미노산 합성</td><td>이마자픽, 설포닐우레아</td></tr><tr><td>광계 I 저해</td><td>광합성 전자전달</td><td>파라콰트(빛 필요!)</td></tr><tr><td>광계 II 저해</td><td>광합성 차단</td><td>아트라진, 시마진</td></tr><tr><td>옥신 교란</td><td>이상 생장 유발</td><td>2,4-D, MCPA</td></tr><tr><td>지질합성 저해</td><td>세포막 합성</td><td>할록시폽(화본과 전용)</td></tr></table></div>`,
    relatedQuestions:["q111","q112"]
  },
  {
    id:"t036",level:"고급",subject:"식물병리학",topic:"식물병 진단",
    title:"식물병 진단법과 방제력 작성",
    summary:"체계적 병 진단 절차와 작물별 방제력 작성 원칙",
    keywords:["식물병 진단","병력 조사","육안 진단","실험실 진단","방제력"],
    content:`<div class="theory-section"><h4>식물병 진단 절차</h4><ol style="padding-left:18px;font-size:14px;line-height:2;color:var(--text-mid)"><li>문진: 언제, 어디서, 어떤 증상, 재배 이력</li><li>육안 진단: 수형·색깔·병징 전체 관찰</li><li>상세 관찰: 루페로 포자·균사 확인</li><li>토양 조사: pH, 배수, 뿌리 상태</li><li>실험실 진단: 병원균 분리 동정, PCR</li></ol></div>
    <div class="theory-section"><h4>방제력 작성 원칙</h4><ul><li>발생 예측 정보 활용 (기상, 예찰)</li><li>예방 위주 (보호살균제 우선)</li><li>저항성 관리 (교호 살포 계획)</li><li>PHI 준수 일정 수립</li></ul></div>`,
    relatedQuestions:["q113","q114"]
  },
  {
    id:"t037",level:"고급",subject:"농업해충학",topic:"해충 예찰",
    title:"해충 예찰과 방제 의사결정",
    summary:"페로몬 트랩·황색 트랩·성충 예찰 방법과 방제 의사결정",
    keywords:["예찰","페로몬 트랩","황색 트랩","요방제 수준","방제 의사결정"],
    content:`<div class="theory-section"><h4>예찰 방법</h4><ul><li>페로몬 트랩: 나방류 성충 발생 시기 파악</li><li>황색 끈끈이트랩: 진딧물, 온실가루이</li><li>청색 끈끈이트랩: 총채벌레</li><li>육안 조사: 잎당 해충 수 조사</li></ul></div>
    <div class="theory-section"><h4>방제 의사결정</h4><ul><li>해충 밀도 ≥ ETL → 방제 실시</li><li>ETL 이하 → 방제 불필요 (비용 절감)</li><li>예방적 방제는 IPM 원칙에 어긋남</li></ul></div>`,
    relatedQuestions:["q115","q116"]
  },
  {
    id:"t038",level:"고급",subject:"식물병리학",topic:"생물학적 방제",
    title:"생물적 방제와 친환경 방제",
    summary:"미생물 농약·식물 추출물 등 친환경 방제 방법",
    keywords:["생물적 방제","Trichoderma","미코라이자","Bacillus","식물추출물"],
    content:`<div class="theory-section"><h4>미생물 살균제</h4><ul><li>Trichoderma harzianum: 토양 병원균 억제</li><li>Bacillus subtilis: 잿빛곰팡이병, 흰가루병 억제</li><li>Bacillus thuringiensis(Bt): 해충 방제</li></ul></div>
    <div class="theory-section"><h4>생물적 방제 장단점</h4><table class="compare-table"><tr><th>장점</th><th>단점</th></tr><tr><td>친환경, 잔류 없음</td><td>효과 느림</td></tr><tr><td>저항성 발달 적음</td><td>환경 조건 까다로움</td></tr><tr><td>천적 안전</td><td>비용 높음</td></tr></table></div>`,
    relatedQuestions:["q117","q118"]
  }
];

THEORIES.push(
  {
    id:"t039",level:"고급",subject:"식물병리학",topic:"토양전염성 병해",
    title:"토양전염성 병해 관리 체계",
    summary:"연작 포장에서 반복되는 토양전염 병해의 진단과 통합 방제",
    keywords:["토양전염","연작장해","윤작","태양열소독","토양훈증","접목재배"],
    content:`<div class="theory-section"><h4>대표 토양전염 병해</h4><table class="compare-table"><tr><th>병해</th><th>원인</th><th>핵심 증상</th><th>주요 작물</th></tr><tr><td>역병</td><td>Phytophthora spp.</td><td>수침상 병반, 급성 시들음</td><td>고추, 토마토, 오이</td></tr><tr><td>풋마름병</td><td>Ralstonia solanacearum</td><td>푸른 채 시듦, 관다발 갈변</td><td>토마토, 가지, 고추</td></tr><tr><td>덩굴쪼김병</td><td>Fusarium oxysporum</td><td>도관 갈변, 지제부 쪼개짐</td><td>수박, 참외, 오이</td></tr><tr><td>뿌리혹선충병</td><td>Meloidogyne spp.</td><td>뿌리 혹 형성, 생육 위축</td><td>시설 채소 전반</td></tr></table></div>
    <div class="theory-section"><h4>통합 관리 5원칙</h4><ol style="padding-left:18px;font-size:14px;line-height:2;color:var(--text-mid)"><li>배수 개선: 암거·고랑 정비, 고휴 재배</li><li>윤작: 비기주 작물로 최소 2~3년 순환</li><li>건전 묘 사용: 정식 전 묘상 위생 관리</li><li>토양 소독: 태양열 소독 또는 훈증 소독</li><li>저항성 품종·접목재배 병행</li></ol></div>
    <div class="theory-section"><h4>시험 포인트</h4><ul><li>토양전염 병해는 약제 1회 살포로 해결되지 않는다.</li><li>경종적 방제(배수, 윤작)가 화학적 방제보다 우선된다.</li><li>시설재배는 연작 비율이 높아 토양전염성 병해 누적 위험이 크다.</li></ul></div>`,
    relatedQuestions:["q087","q075b","q066"]
  },
  {
    id:"t040",level:"고급",subject:"농업해충학",topic:"예찰·방제의사결정",
    title:"예찰 지표와 방제 의사결정 실무",
    summary:"트랩 자료와 포장 조사값으로 방제 시점을 결정하는 실전 프레임",
    keywords:["예찰","트랩","요방제수준","발생최성기","방제시점","밀도조사"],
    content:`<div class="theory-section"><h4>예찰 데이터 3종</h4><table class="compare-table"><tr><th>데이터</th><th>의미</th><th>활용</th></tr><tr><td>트랩 포획수</td><td>성충 유입·발생 피크</td><td>알 부화 전후 방제 시점 설정</td></tr><tr><td>포장 밀도조사</td><td>실제 피해 가능 수준</td><td>ETL 초과 여부 판단</td></tr><tr><td>기상 정보</td><td>증식·비래 가능성</td><td>경보 수준 조정</td></tr></table></div>
    <div class="theory-section"><h4>의사결정 절차</h4><ol style="padding-left:18px;font-size:14px;line-height:2;color:var(--text-mid)"><li>트랩 급증 확인</li><li>포장 표본조사(주당/엽당 밀도) 실시</li><li>ETL과 비교</li><li>ETL 초과 시 선택적 약제 또는 천적 방사</li><li>5~7일 후 재조사로 효과 검증</li></ol></div>
    <div class="theory-section"><h4>자주 나오는 함정</h4><ul><li>트랩 포획만으로 즉시 전면 방제 결정하지 않는다.</li><li>예방 살포를 반복하면 저항성만 키우고 천적을 줄인다.</li><li>방제 후 재조사 없이 동일 약제를 연속 사용하면 실패 확률이 높다.</li></ul></div>`,
    relatedQuestions:["q070","q072","q089"]
  },
  {
    id:"t041",level:"고급",subject:"농약학",topic:"현장 계산·안전관리",
    title:"현장 계산형 문제와 안전관리 총정리",
    summary:"희석배수, 살포량, PHI 계산과 중독 대응까지 한 번에 정리",
    keywords:["희석배수","살포량","PHI","중독응급처치","보호구","라벨해독"],
    content:`<div class="theory-section"><h4>계산형 기본식</h4><ul><li>원제량(L 또는 mL) = 살포액량(L) ÷ 희석배수</li><li>필요 살포액량 = 면적 × 단위면적 살포량</li><li>마지막 살포 가능일 = 수확예정일 - PHI</li></ul><p class="formula">예) 800L를 1000배로 만들 때 원제량 = 0.8L = 800mL</p></div>
    <div class="theory-section"><h4>안전관리 체크리스트</h4><table class="compare-table"><tr><th>단계</th><th>핵심 행동</th></tr><tr><td>살포 전</td><td>라벨(작물, 희석배수, PHI) 확인</td></tr><tr><td>살포 중</td><td>보호구 착용, 풍하 방향 작업 금지</td></tr><tr><td>살포 후</td><td>세척·환기·빈 용기 안전 처리</td></tr><tr><td>중독 의심 시</td><td>노출 차단, 세척, 즉시 의료기관 이송</td></tr></table></div>
    <div class="theory-section"><h4>시험 포인트</h4><ul><li>같은 약제라도 희석배수 위반 시 약해·잔류 위반이 발생한다.</li><li>PHI는 권장사항이 아니라 준수 의무 기준이다.</li><li>혼용 가능 여부는 경험이 아니라 라벨·혼용표로 판단한다.</li></ul></div>`,
    relatedQuestions:["q091","q092","q088"]
  }
);
