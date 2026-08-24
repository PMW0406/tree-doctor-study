const THEORIES = [
  // ════════════════════════════════════════
  // 재배학 (8개) - 실기 출제 비중 1위 과목!
  // ════════════════════════════════════════
  {
    id:"t001",level:"초급",subject:"재배학",topic:"작물 분류",
    title:"작물의 분류와 광합성 유형(C3·C4·CAM)",
    summary:"용도별 분류 + 광합성 경로 3종 비교 - 재배학 1번 단골 출제",
    keywords:["식용작물","공예작물","C3작물","C4작물","CAM식물","광호흡"],
    mnemonic:"덥고 강렬하면 C4(옥수수·수수), 평범하면 C3(벼·콩), 밤에 몰래 열면 CAM(선인장)!",
    content:`<div class="theory-section"><h4>용도별 분류</h4><table class="compare-table"><tr><th>구분</th><th>대표 작물</th></tr><tr><td>식용작물</td><td>벼, 보리, 콩, 감자, 옥수수</td></tr><tr><td>공예작물</td><td>목화, 담배, 사탕수수, 참깨</td></tr><tr><td>사료작물</td><td>옥수수(사일리지), 알팔파, 티모시</td></tr><tr><td>원예작물</td><td>채소, 과수, 화훼</td></tr></table></div>
    <div class="theory-section"><h4>광합성 경로 3종 비교 (기출 최빈출!)</h4><table class="compare-table"><tr><th>구분</th><th>최초 산물</th><th>광호흡</th><th>특징</th><th>대표 작물</th></tr><tr><td>C3</td><td>탄소 3개(PGA)</td><td>있음(효율↓)</td><td>저온·저광에 유리</td><td>벼, 보리, 콩, 대부분 작물</td></tr><tr><td>C4</td><td>탄소 4개(OAA)</td><td>거의 없음</td><td>고온·강광에서 광합성 효율↑</td><td>옥수수, 수수, 사탕수수, 기장</td></tr><tr><td>CAM</td><td>탄소 4개(밤에 고정)</td><td>거의 없음</td><td>밤에 기공 열어 건조 적응</td><td>선인장, 파인애플, 돌나물과</td></tr></table></div>
    <div class="theory-section"><h4>생육 계절별 분류</h4><ul><li><strong>하작물(여름작물)</strong>: 봄 파종·여름 생육 - 벼, 콩, 옥수수</li><li><strong>동작물(겨울작물)</strong>: 가을 파종·겨울 월동 - 보리, 밀</li></ul></div>`,
    relatedQuestions:["q001","q002","q003","q004","q005"]
  },
  {
    id:"t002",level:"초급",subject:"재배학",topic:"온도와 생육",
    title:"온도와 작물 생육(유효적산온도·기상재해)",
    summary:"생육 3온도·유효적산온도 개념 + 냉해·동해·상해 구분",
    keywords:["유효적산온도","생육한계온도","냉해","동해","상해","열해"],
    mnemonic:"0도 넘어 아픈 건 냉해, 얼어붙어 죽는 건 동해, 서리 맞은 건 상해!",
    content:`<div class="theory-section"><h4>생육 3온도</h4><p>작물마다 <strong>최저온도·최적온도·최고온도</strong>가 있으며, 최적온도 부근에서 생육이 가장 왕성해요.</p></div>
    <div class="theory-section"><h4>유효적산온도(GDD)</h4><div class="formula">유효적산온도 = Σ(일평균기온 − 생육한계온도)</div><p>생육기간 동안 기준온도를 초과한 값을 누적한 것으로, 작물의 생육 단계 예측·수확기 추정에 사용돼요.</p></div>
    <div class="theory-section"><h4>저온·고온 장해 비교 (기출!)</h4><table class="compare-table"><tr><th>장해</th><th>발생 조건</th><th>특징</th></tr><tr><td>냉해</td><td>생육기 이상저온(0°C 이상)</td><td>생리기능 저하, 벼 냉해가 대표적</td></tr><tr><td>동해</td><td>빙점 이하</td><td>세포 내 결빙으로 조직 파괴</td></tr><tr><td>상해</td><td>서리(늦서리·이른서리)</td><td>과수 개화기 늦서리 피해 큼</td></tr><tr><td>열해</td><td>고온</td><td>단백질 변성, 광합성 저하</td></tr></table></div>`,
    relatedQuestions:["q006","q007","q008","q009","q010"]
  },
  {
    id:"t003",level:"초급",subject:"재배학",topic:"수분과 재배",
    title:"수분과 재배(요수량·한해·습해)",
    summary:"요수량 개념과 가뭄·과습 피해 구분",
    keywords:["요수량","한해","습해","관개","배수"],
    mnemonic:"물 모자라면 한해, 물 넘치면 습해 - 정반대로 기억하자!",
    content:`<div class="theory-section"><h4>요수량</h4><p>작물이 <strong>건물(마른 물질) 1g을 생산하는 데 필요한 수분량(g)</strong>이에요. 작물별로 차이가 크며 옥수수 등 C4작물이 대체로 낮아요(수분 이용 효율↑).</p></div>
    <div class="theory-section"><h4>한해(가뭄피해) vs 습해(과습피해)</h4><table class="compare-table"><tr><th>구분</th><th>원인</th><th>증상</th><th>대책</th></tr><tr><td>한해</td><td>수분 부족</td><td>위조·생육 정지</td><td>관개, 멀칭, 내건성 품종</td></tr><tr><td>습해</td><td>토양 과습·산소 부족</td><td>뿌리 갈변·부패, 생육 불량</td><td>배수 개선, 이랑 재배</td></tr></table></div>`,
    relatedQuestions:["q011","q012","q013","q014"]
  },
  {
    id:"t004",level:"중급",subject:"재배학",topic:"토양",
    title:"토양의 물리성과 화학성(토성·pH·CEC)",
    summary:"토성 3요소, 입단구조, 토양반응, 양이온교환용량 완전 정리",
    keywords:["토성","입단구조","토양산도","CEC","석회시용"],
    mnemonic:"떼알구조는 숨 쉬는 흙, CEC 크면 비료를 꽉 붙잡는 흙!",
    content:`<div class="theory-section"><h4>토성(입경 조성)</h4><p>모래(사)·미사(silt)·점토(clay)의 비율로 <strong>사토·양토·식토</strong> 등으로 구분돼요. 양토는 물리성이 균형 잡혀 대부분의 작물 재배에 적합해요.</p></div>
    <div class="theory-section"><h4>입단구조(떼알구조)</h4><p>단립(홑알)구조보다 <strong>떼알구조</strong>가 통기성·보수성·배수성이 모두 좋아 작물 생육에 유리해요. 유기물 시용, 석회 시용으로 입단화가 촉진돼요.</p></div>
    <div class="theory-section"><h4>토양반응(pH)과 CEC (기출 빈출!)</h4><table class="compare-table"><tr><th>항목</th><th>내용</th></tr><tr><td>적정 pH</td><td>대부분 작물 pH 6~7(약산성~중성)</td></tr><tr><td>산성토양 교정</td><td>석회(소석회) 시용</td></tr><tr><td>CEC(양이온교환용량)</td><td>점토·부식질↑ → CEC↑ → 비료 보유력↑</td></tr></table></div>`,
    relatedQuestions:["q015","q016","q017","q018","q019"]
  },
  {
    id:"t005",level:"중급",subject:"재배학",topic:"비료 3요소",
    title:"비료 3요소(질소·인산·칼리)와 결핍증상",
    summary:"N-P-K 각 역할과 결핍 증상 비교 - 계산 문제도 자주 출제",
    keywords:["질소","인산","칼리","결핍증상","비료 3요소"],
    mnemonic:"질소=잎줄기, 인산=뿌리꽃, 칼리=줄기튼튼 - '잎뿌리줄' 순서로 외우자!",
    content:`<div class="theory-section"><h4>비료 3요소 비교 (기출 최빈출!)</h4><table class="compare-table"><tr><th>요소</th><th>주요 역할</th><th>결핍 증상</th></tr><tr><td>질소(N)</td><td>잎·줄기 생장, 엽록소 구성</td><td>하위엽부터 황화, 생육 부진</td></tr><tr><td>인산(P)</td><td>뿌리 발달, 개화·결실 촉진</td><td>잎이 자주색(적자색)으로 변색</td></tr><tr><td>칼리(K)</td><td>줄기 강화, 내병·내한성 증대</td><td>잎 가장자리 황화·괴사(마름)</td></tr></table></div>
    <div class="theory-section"><h4>주의</h4><ul><li>질소 과다: 웃자람, 도복·병해충에 취약</li><li>인산: 생육 초기(뿌리 활착기)에 특히 중요</li></ul></div>`,
    relatedQuestions:["q020","q021","q022","q023"]
  },
  {
    id:"t006",level:"중급",subject:"재배학",topic:"종자와 발아",
    title:"종자 발아의 3요소와 휴면",
    summary:"발아 필수조건과 경실종자·호광성/혐광성 종자 구분",
    keywords:["발아 3요소","경실종자","호광성","혐광성","휴면타파"],
    mnemonic:"발아엔 '물온산'(수분·온도·산소), 콩은 껍질이 딱딱해 상처를 내야 싹튼다!",
    content:`<div class="theory-section"><h4>발아의 3요소</h4><p><strong>수분·온도·산소</strong>가 기본 3요소이며, 일부 작물은 <strong>광(빛)</strong>도 발아에 영향을 줘요.</p></div>
    <div class="theory-section"><h4>광에 따른 종자 구분</h4><table class="compare-table"><tr><th>구분</th><th>특징</th><th>예</th></tr><tr><td>호광성(광발아) 종자</td><td>빛이 있어야 발아 촉진</td><td>상추, 담배</td></tr><tr><td>혐광성 종자</td><td>어두워야 발아 촉진</td><td>가지, 토마토(일부)</td></tr></table></div>
    <div class="theory-section"><h4>종자 휴면</h4><ul><li><strong>경실종자</strong>: 콩과 작물처럼 종피가 단단해 물 흡수가 어려운 경우 → 상처처리(스카리피케이션), 황산 처리로 휴면 타파</li><li><strong>생리적 휴면</strong>: 저온처리(층적) 등 후숙으로 타파</li></ul></div>`,
    relatedQuestions:["q024","q025","q026","q027"]
  },
  {
    id:"t007",level:"고급",subject:"재배학",topic:"상적발육설",
    title:"상적발육설 - 춘화처리와 감광성",
    summary:"저온·일장에 따른 개화 유도 메커니즘, 장일/단일/중성식물 구분",
    keywords:["춘화처리","버널리제이션","감광성","장일식물","단일식물","중성식물"],
    mnemonic:"보리·밀은 길어야(장일) 피고, 벼·콩은 짧아야(단일) 핀다!",
    content:`<div class="theory-section"><h4>춘화처리(버널리제이션)</h4><p>생육 중 <strong>일정 기간 저온</strong>을 거쳐야 개화가 유도되는 현상이에요. 보리·밀 등 월년생(겨울)작물에서 중요해요.</p></div>
    <div class="theory-section"><h4>감광성(일장 반응) 3분류 (기출 최빈출!)</h4><table class="compare-table"><tr><th>구분</th><th>개화 조건</th><th>대표 작물</th></tr><tr><td>장일식물</td><td>일장이 길어질 때(초여름) 개화</td><td>보리, 밀, 시금치</td></tr><tr><td>단일식물</td><td>일장이 짧아질 때(가을) 개화</td><td>벼, 콩, 국화, 담배</td></tr><tr><td>중성식물</td><td>일장과 무관하게 개화</td><td>토마토, 오이</td></tr></table></div>`,
    relatedQuestions:["q028","q029","q030","q031"]
  },
  {
    id:"t008",level:"고급",subject:"재배학",topic:"식물생장조절물질",
    title:"식물생장조절물질 5종 완전 정리",
    summary:"옥신·지베렐린·시토키닌·에틸렌·ABA 기능 비교 - 서술형 단골",
    keywords:["옥신","지베렐린","시토키닌","에틸렌","ABA","에테폰"],
    mnemonic:"옥신(신장)-지베렐린(휴면타파)-시토키닌(분열)-에틸렌(노화)-ABA(스트레스) 순서로 외우자!",
    content:`<div class="theory-section"><h4>생장조절물질 5종 비교 (기출 최빈출!)</h4><table class="compare-table"><tr><th>물질</th><th>주요 작용</th></tr><tr><td>옥신(auxin)</td><td>정단우세, 세포 신장, 삽목 발근 촉진</td></tr><tr><td>지베렐린(GA)</td><td>절간 신장, 휴면 타파, 발아 촉진, 단위결과(씨없는 포도)</td></tr><tr><td>시토키닌</td><td>세포분열 촉진, 잎의 노화(엽록소 분해) 지연</td></tr><tr><td>에틸렌</td><td>과실 후숙·노화·낙과 촉진 (에테폰이 대표 처리제)</td></tr><tr><td>ABA(아브시스산)</td><td>스트레스 호르몬 - 기공 폐쇄, 휴면 유도</td></tr></table></div>
    <div class="theory-section"><h4>실전 활용 예</h4><ul><li>씨없는 포도: 지베렐린 처리</li><li>과실 후숙 촉진(바나나 등): 에테폰(에틸렌계) 처리</li><li>삽목 발근 촉진: 옥신계(IBA, NAA) 처리</li></ul></div>`,
    relatedQuestions:["q032","q033","q034","q035"]
  },

  // ════════════════════════════════════════
  // 식물병리학 (5개)
  // ════════════════════════════════════════
  {
    id:"t009",level:"초급",subject:"식물병리학",topic:"병 진단 기초",
    title:"병 진단의 기초 - 병징 vs 표징, 코흐의 원칙",
    summary:"병 판별 실무의 출발점 - 용어 구분이 서술형에 자주 출제",
    keywords:["병징","표징","코흐의 원칙","병원체 분리"],
    mnemonic:"병징은 식물이 아픈 티, 표징은 병원체가 남긴 흔적!",
    content:`<div class="theory-section"><h4>병징(symptom) vs 표징(sign)</h4><table class="compare-table"><tr><th>구분</th><th>정의</th><th>예</th></tr><tr><td>병징</td><td>식물체 자체가 나타내는 반응·변화</td><td>반점, 위축, 황화, 시들음</td></tr><tr><td>표징</td><td>병원체 자체가 육안으로 보이는 부분</td><td>곰팡이 균사·포자, 균핵, 세균 점질물</td></tr></table></div>
    <div class="theory-section"><h4>코흐의 원칙(4단계) - 병원체 확정 절차</h4><ul><li>① 병든 시료에서 의심 병원체를 분리한다</li><li>② 순수 배양한다</li><li>③ 건전한 식물에 접종하여 같은 병을 재현한다</li><li>④ 재현된 병에서 동일한 병원체를 재분리·확인한다</li></ul></div>`,
    relatedQuestions:["q036","q037","q038","q039"]
  },
  {
    id:"t010",level:"초급",subject:"식물병리학",topic:"종합적 방제",
    title:"식물병의 종합적 방제법",
    summary:"경종적·물리적·생물적·화학적·법적 방제 5가지 완전 정리",
    keywords:["경종적 방제","물리적 방제","생물적 방제","화학적 방제","법적 방제"],
    mnemonic:"'경물생화법' - 경종·물리·생물·화학·법적 방제 순서로 암기!",
    content:`<div class="theory-section"><h4>방제법 5분류 (기출 최빈출!)</h4><table class="compare-table"><tr><th>방제법</th><th>내용</th></tr><tr><td>경종적 방제</td><td>윤작, 저항성 품종, 합리적 시비, 배수 개선</td></tr><tr><td>물리적 방제</td><td>태양열소독, 열탕처리, 이병 잔재물 제거·소각</td></tr><tr><td>생물적 방제</td><td>길항미생물, 천적 이용</td></tr><tr><td>화학적 방제</td><td>살균제 등 농약 살포</td></tr><tr><td>법적 방제</td><td>식물검역 - 병든 식물·종자의 국내 반입 금지</td></tr></table></div>
    <div class="theory-section"><h4>실기 포인트</h4><p>여러 방법을 종합적으로 병행하는 것을 <strong>종합적 방제(IPM 개념)</strong>라 하며, 화학적 방제에만 의존하지 않는 것이 최근 출제 흐름이에요.</p></div>`,
    relatedQuestions:["q040","q041","q042","q043"]
  },
  {
    id:"t011",level:"중급",subject:"식물병리학",topic:"토양전염병 관리",
    title:"토양전염성 병의 종합관리",
    summary:"윤작·객토·태양열소독·접목재배로 연작장해성 병해 억제",
    keywords:["윤작","객토","태양열소독","저항성 대목","토양소독"],
    mnemonic:"'윤객태접소' - 윤작·객토·태양열소독·접목재배·토양소독!",
    content:`<div class="theory-section"><h4>토양전염병 관리 핵심 기법</h4><ul><li><strong>윤작</strong>: 다른 작물과 돌려짓기하여 병원균 밀도 감소</li><li><strong>객토</strong>: 병원균 없는 새 흙으로 교체</li><li><strong>태양열소독</strong>: 여름철 비닐 피복 후 고온으로 토양 소독</li><li><strong>저항성 대목 접목</strong>: 덩굴쪼김병 등 방제에 활용</li><li><strong>약제 토양소독(훈증)</strong>: 파종 전 처리</li></ul></div>
    <div class="theory-section"><h4>대표 토양전염병</h4><p>역병, 덩굴쪼김병, 모잘록병, 배추뿌리혹병 등 - 배수 불량·연작지에서 심각해요.</p></div>`,
    relatedQuestions:["q044","q045","q046","q047"]
  },
  {
    id:"t012",level:"중급",subject:"식물병리학",topic:"저항성 품종과 검역",
    title:"저항성 품종과 식물검역병해",
    summary:"수직/수평저항성 개념과 국가 검역 제도 이해",
    keywords:["수직저항성","수평저항성","식물검역","금지병해충"],
    mnemonic:"수직저항성은 한 방에 무너지고, 수평저항성은 은은하게 오래간다!",
    content:`<div class="theory-section"><h4>저항성 품종의 두 가지 유형</h4><table class="compare-table"><tr><th>구분</th><th>특징</th></tr><tr><td>수직저항성</td><td>특정 레이스에만 강한 저항성 - 병원균 변이로 무너지기 쉬움</td></tr><tr><td>수평저항성</td><td>여러 레이스에 고르게 낮은 저항성 - 지속성이 높음</td></tr></table></div>
    <div class="theory-section"><h4>식물검역</h4><p>국내 미발생 병해충의 유입을 막기 위해 수입 식물·종자에 대해 검역을 실시하며, 위험 병해충은 <strong>수입 금지 또는 소독 의무화</strong> 대상이 돼요.</p></div>`,
    relatedQuestions:["q048","q049","q050"]
  },
  {
    id:"t013",level:"고급",subject:"식물병리학",topic:"과수 병해",
    title:"주요 과수 병해 - 부란병·검은별무늬병",
    summary:"사과·배 대표 병해 2종의 병징과 방제 심화",
    keywords:["부란병","검은별무늬병","궤양","자낭각"],
    mnemonic:"부란병은 술냄새 나는 궤양, 검은별무늬병은 까만 그을음 반점!",
    content:`<div class="theory-section"><h4>사과 부란병</h4><ul><li>병원균: <strong>Valsa</strong>속(자낭균)</li><li>병징: 줄기·가지에 적갈색 궤양, 알코올 냄새, 수피 부풀어 오름</li><li>방제: 상처 도포, 궤양부 제거·소각, 동제 살포</li></ul></div>
    <div class="theory-section"><h4>사과·배 검은별무늬병</h4><ul><li>병원균: <strong>Venturia</strong>속(자낭균)</li><li>병징: 잎·과실에 검은 그을음 모양 반점</li><li>발생: 저온다습한 봄철(개화기 전후) 심함</li><li>방제: 만코제브 등 보호살균제 예방 살포</li></ul></div>`,
    relatedQuestions:["q051","q052","q053"]
  },

  // ════════════════════════════════════════
  // 농림해충학 (4개)
  // ════════════════════════════════════════
  {
    id:"t014",level:"초급",subject:"농림해충학",topic:"해충 예찰",
    title:"해충 예찰과 방제 적기",
    summary:"경제적피해수준·방제한계밀도 개념과 예찰 방법",
    keywords:["경제적피해수준","방제한계밀도","페로몬트랩","방제적기"],
    mnemonic:"경제적피해수준에 닿기 전, 방제한계밀도에서 미리 막는다!",
    content:`<div class="theory-section"><h4>핵심 개념</h4><ul><li><strong>경제적피해수준</strong>: 방제 비용과 피해액이 같아지는 밀도 - 이를 넘으면 방제 이익 발생</li><li><strong>방제한계밀도(경제적피해허용수준)</strong>: 실제 방제를 시작해야 하는 밀도 기준 (경제적피해수준보다 낮게 설정)</li></ul></div>
    <div class="theory-section"><h4>예찰 방법</h4><ul><li>페로몬 트랩: 특정 해충 성충 유인·밀도 조사</li><li>황색·청색 끈끈이트랩: 진딧물·총채벌레 등 예찰</li><li>포장 예찰: 정기적 육안 조사</li></ul></div>
    <div class="theory-section"><h4>방제 적기</h4><p>대부분의 해충은 <strong>알에서 갓 부화한 어린 유충(1~3령)</strong> 시기에 방제 효과가 가장 높아요.</p></div>`,
    relatedQuestions:["q054","q055","q056","q057"]
  },
  {
    id:"t015",level:"중급",subject:"농림해충학",topic:"종합적 해충관리",
    title:"종합적 해충관리(IPM)의 원리",
    summary:"여러 방제법 병용 + 천적 보호의 통합적 접근",
    keywords:["IPM","천적 보호","방제 병용","최소 화학적 방제"],
    mnemonic:"화학적 방제는 최후의 카드, 천적부터 보호하자!",
    content:`<div class="theory-section"><h4>IPM(Integrated Pest Management)이란</h4><p>경종적·물리적·생물적·화학적·법적 방제를 <strong>상황에 맞게 종합적으로 병용</strong>하여 해충을 경제적피해수준 이하로 관리하는 체계예요.</p></div>
    <div class="theory-section"><h4>핵심 원리</h4><ul><li>화학적 방제(농약)에 대한 의존도를 낮춤</li><li>천적을 보호·활용하는 방향으로 방제 시기·약제 선택</li><li>선택적(천적에 안전한) 약제 우선 사용</li><li>예찰에 기반한 방제 시기 결정</li></ul></div>`,
    relatedQuestions:["q058","q059","q060","q061"]
  },
  {
    id:"t016",level:"중급",subject:"농림해충학",topic:"저장해충·위생해충",
    title:"저장곡물해충과 위생해충 구분",
    summary:"작물 재배 중 해충과 저장·위생 해충의 차이",
    keywords:["쌀바구미","화랑곡나방","위생해충","모기","저장해충"],
    mnemonic:"저장해충은 곡식을 파먹고, 위생해충은 사람을 괴롭힌다!",
    content:`<div class="theory-section"><h4>저장곡물해충</h4><p>수확 후 저장 중인 곡물·농산물을 가해하는 해충이에요. 대표: <strong>쌀바구미, 화랑곡나방, 보리나방</strong></p></div>
    <div class="theory-section"><h4>위생해충</h4><p>작물 피해보다 <strong>질병 매개나 위생상 문제</strong>를 일으키는 해충이에요. 대표: 모기, 파리, 바퀴 - 농작물 해충과는 방제 목적이 다름</p></div>`,
    relatedQuestions:["q062","q063","q064"]
  },
  {
    id:"t017",level:"고급",subject:"농림해충학",topic:"생물적 방제 심화",
    title:"천적과 생물적 방제 심화",
    summary:"포식성·기생성 천적과 미생물 농약(Bt제) 활용법",
    keywords:["포식성천적","기생성천적","Bt제","천적 도입 유의점"],
    mnemonic:"포식성은 잡아먹고, 기생성은 알을 낳고, Bt제는 나방 유충 전용!",
    content:`<div class="theory-section"><h4>천적의 종류</h4><table class="compare-table"><tr><th>구분</th><th>방식</th><th>예</th></tr><tr><td>포식성 천적</td><td>먹이 해충을 직접 잡아먹음</td><td>무당벌레, 풀잠자리, 칠레이리응애</td></tr><tr><td>기생성 천적</td><td>해충 체내·체외에 알을 낳아 기생</td><td>고치벌, 맵시벌, 진디벌</td></tr></table></div>
    <div class="theory-section"><h4>미생물 농약</h4><p><strong>Bt제(바실루스 투링기엔시스)</strong>는 나방류 유충에 특이적으로 작용하는 세균 살충제로, 천적·인축에 안전해 IPM에서 널리 활용돼요.</p></div>
    <div class="theory-section"><h4>천적 도입시 유의점</h4><p>광범위 살충제와 함께 쓰면 천적까지 죽으므로, 천적을 방사한 포장에서는 <strong>선택적 약제</strong>를 쓰거나 화학적 방제 시기를 조정해야 해요.</p></div>`,
    relatedQuestions:["q065","q066","q067"]
  },

  // ════════════════════════════════════════
  // 농약학 (4개)
  // ════════════════════════════════════════
  {
    id:"t018",level:"초급",subject:"농약학",topic:"농약 제형",
    title:"농약 제형의 종류",
    summary:"수화제·유제·입제 등 제형별 특징 - 기호 암기 필수",
    keywords:["수화제","유제","입제","액상수화제","분제"],
    mnemonic:"WP(수화제)는 물에 타고, EC(유제)는 기름처럼 섞이고, GR(입제)은 알갱이 그대로!",
    content:`<div class="theory-section"><h4>주요 제형 비교 (기출 빈출!)</h4><table class="compare-table"><tr><th>제형</th><th>기호</th><th>특징</th></tr><tr><td>수화제</td><td>WP</td><td>물에 타서 살포, 분말</td></tr><tr><td>유제</td><td>EC</td><td>유기용제+계면활성제, 물에 유화시켜 살포</td></tr><tr><td>액상수화제</td><td>SC</td><td>미분말을 액체에 현탁, 수화제 개선형</td></tr><tr><td>입제</td><td>GR</td><td>알갱이 형태, 토양처리·이앙 동시처리용</td></tr><tr><td>분제</td><td>DP</td><td>그대로 살분, 비산 우려</td></tr><tr><td>액제</td><td>SL</td><td>수용성 원제를 물에 희석</td></tr></table></div>`,
    relatedQuestions:["q068","q069","q070","q071"]
  },
  {
    id:"t019",level:"중급",subject:"농약학",topic:"작용기작과 저항성",
    title:"농약 작용기작 분류와 저항성 관리",
    summary:"IRAC/FRAC/HRAC 그룹 개념과 계통 교대살포 원칙",
    keywords:["IRAC","FRAC","HRAC","작용기작","교대살포","저항성"],
    mnemonic:"살충제=IRAC, 살균제=FRAC, 제초제=HRAC - 같은 계통 연달아 치면 저항성만 키운다!",
    content:`<div class="theory-section"><h4>작용기작 분류 체계</h4><table class="compare-table"><tr><th>대상</th><th>분류 체계</th></tr><tr><td>살충제</td><td>IRAC 그룹</td></tr><tr><td>살균제</td><td>FRAC 그룹</td></tr><tr><td>제초제</td><td>HRAC 그룹</td></tr></table><p>같은 그룹은 작용 방식이 같아 <strong>같은 계통을 연용하면 저항성이 빨리 발달</strong>해요.</p></div>
    <div class="theory-section"><h4>저항성 관리 원칙</h4><ul><li>서로 다른 작용기작 그룹을 <strong>교대(로테이션) 살포</strong></li><li>동일 계통 연속 사용 자제</li><li>방제 필요 시기에만 적기 방제(불필요한 살포 자제)</li></ul></div>`,
    relatedQuestions:["q072","q073","q074","q075"]
  },
  {
    id:"t020",level:"중급",subject:"농약학",topic:"혼용과 약해",
    title:"농약의 혼용과 상승효과, 약해",
    summary:"혼용가부표 확인법과 약해 발생 조건",
    keywords:["혼용가부표","상승작용","길항작용","약해"],
    mnemonic:"혼용가부표 확인 안 하면 상승작용 대신 길항작용!",
    content:`<div class="theory-section"><h4>농약 혼용</h4><p>서로 다른 농약을 섞어 쓸 때는 <strong>혼용가부표</strong>를 확인해 침전·변색·약효 저하가 없는지 점검해야 해요.</p></div>
    <div class="theory-section"><h4>상승작용 vs 길항작용</h4><table class="compare-table"><tr><th>구분</th><th>의미</th></tr><tr><td>상승작용</td><td>혼용시 효과가 단독 사용보다 커짐</td></tr><tr><td>길항작용</td><td>혼용시 효과가 오히려 떨어짐</td></tr></table></div>
    <div class="theory-section"><h4>약해 발생 조건</h4><ul><li>고농도 살포, 규정 이상 희석배수 미준수</li><li>고온기(30°C 이상) 살포</li><li>감수성이 높은 작물·생육단계에 살포</li></ul></div>`,
    relatedQuestions:["q076","q077","q078"]
  },
  {
    id:"t021",level:"고급",subject:"농약학",topic:"농약 등록과 PLS",
    title:"농약 등록 제도와 PLS(농약허용물질목록관리제도)",
    summary:"등록 농약 사용 원칙과 잔류허용기준 일률기준",
    keywords:["농약 등록","PLS","잔류허용기준","안전사용기준"],
    mnemonic:"등록 안 된 농약이 검출되면 무조건 0.01ppm(PLS)!",
    content:`<div class="theory-section"><h4>PLS(Positive List System)</h4><p>해당 작물에 <strong>등록되지 않은 농약</strong>이 검출되면, 잔류허용기준을 <strong>일률적으로 0.01ppm</strong>으로 엄격 적용하는 제도예요. 등록된 농약만 안전사용기준에 맞춰 사용해야 해요.</p></div>
    <div class="theory-section"><h4>안전사용기준 3요소</h4><ul><li>사용 시기(수확 전 안전일수, PHI)</li><li>사용 횟수(총 살포 횟수 제한)</li><li>희석배수·사용량</li></ul></div>`,
    relatedQuestions:["q079","q080","q081"]
  },

  // ════════════════════════════════════════
  // 잡초방제학 (3개)
  // ════════════════════════════════════════
  {
    id:"t022",level:"초급",subject:"잡초방제학",topic:"잡초 생태",
    title:"잡초의 생태적 특성과 종자 휴면",
    summary:"매토종자(seed bank)와 잡초 종자의 생존 전략",
    keywords:["매토종자","seed bank","잡초 휴면","광발아 잡초"],
    mnemonic:"땅속에 숨어 있다가 빛을 보면 깨어난다 - 매토종자!",
    content:`<div class="theory-section"><h4>매토종자(seed bank)</h4><p>토양 속에 오랫동안 살아남아 있는 잡초 종자 집단이에요. 불량 환경에서도 <strong>휴면 상태로 생존</strong>했다가 조건이 맞으면 발아해 방제를 어렵게 만들어요.</p></div>
    <div class="theory-section"><h4>잡초 종자의 특징</h4><ul><li>대부분 <strong>광발아성</strong>(빛을 받으면 발아 촉진) - 경운으로 종자가 표층에 노출되면 발아 급증</li><li>휴면성이 강해 여러 해에 걸쳐 분산 발아(방제 실패의 원인)</li></ul></div>`,
    relatedQuestions:["q082","q083","q084"]
  },
  {
    id:"t023",level:"중급",subject:"잡초방제학",topic:"제초제 저항성",
    title:"제초제 저항성 잡초 관리",
    summary:"동일 계통 연용의 위험성과 저항성 지연 전략",
    keywords:["제초제 저항성","작용기작 교대","혼합처리"],
    mnemonic:"같은 제초제만 계속 치면 잡초도 똑똑해진다 - 작용기작을 돌려쳐라!",
    content:`<div class="theory-section"><h4>저항성 잡초의 발생</h4><p>같은 작용기작(HRAC 그룹)의 제초제를 <strong>여러 해 연속 사용</strong>하면 그 성분에 강한 잡초 개체가 선발·증식되어 저항성 잡초 집단이 형성돼요.</p></div>
    <div class="theory-section"><h4>관리 전략</h4><ul><li>서로 다른 작용기작의 제초제를 <strong>교대·혼합 처리</strong></li><li>경종적 방제(윤작, 담수 관리)를 병행</li><li>저항성 발생 포장은 조기 발견·집중 방제</li></ul></div>`,
    relatedQuestions:["q085","q086","q087"]
  },
  {
    id:"t024",level:"고급",subject:"잡초방제학",topic:"논 잡초 방제체계",
    title:"논 잡초 방제 체계(이앙 전후 처리)",
    summary:"토양처리제와 경엽처리제의 처리 시기 구분",
    keywords:["이앙 전 처리","이앙 후 처리","토양처리제","경엽처리제","다년생 잡초"],
    mnemonic:"이앙 전엔 토양처리, 이앙 후엔 경엽처리!",
    content:`<div class="theory-section"><h4>처리 시기별 체계</h4><table class="compare-table"><tr><th>시기</th><th>제초제 유형</th><th>목적</th></tr><tr><td>이앙 전(써레질 후)</td><td>토양처리제</td><td>초기 발생 억제(예방)</td></tr><tr><td>이앙 후 초~중기</td><td>경엽처리제</td><td>이미 난 잡초 방제</td></tr></table></div>
    <div class="theory-section"><h4>다년생 잡초 별도 관리</h4><p>올방개, 너도방동사니 같은 다년생 잡초는 지하부(괴경)로 번식하므로 <strong>1년생 잡초용 제초제만으로는 방제가 어려워</strong> 전용 약제·체계 처리가 필요해요.</p></div>`,
    relatedQuestions:["q088","q089","q090"]
  }
,
  {"id":"t025","level":"초급","subject":"재배학","topic":"파종·육묘와 이식","title":"육묘와 이식 - 경화(순화)의 원리","summary":"어린 모를 온상·묘상에서 미리 길러(육묘) 본밭에 옮겨 심는(이식) 재배법과, 정식 전 모를 외부환경에 서서히 적응시키는 경화(순화) 과정의 목적과 원리를 정리한다.","keywords":["육묘","이식","경화","순화","가식","정식","묘상"],"mnemonic":"경화 3형제 - 저온·건조·강광에 미리 '담금질'해야 웃자람 없는 튼튼한 모종이 된다! (저온·건조·강광 = 스트레스를 미리 맛보게 하는 것)","content":"<div class=\"theory-section\"><h4>육묘의 목적</h4><ul><li>발아 및 초기생육을 안전한 환경(온상·묘상)에서 관리하여 <strong>조기수확·증수</strong>를 꾀함</li><li>본밭 이용기간을 단축시켜 <strong>토지이용률 향상</strong>(윤작·간작 가능)</li><li>직파에 비해 <strong>종자 절약</strong> 및 병해충·저온 등 <strong>재해 회피</strong></li><li>결핍지·본밭 조건이 불량할 때 시간을 벌어 재배 가능</li></ul></div>\n    <div class=\"theory-section\"><h4>이식의 종류</h4><table class=\"compare-table\"><tr><th>구분</th><th>내용</th></tr><tr><td>가식(假植)</td><td>정식 전 임시로 얕게 심어두는 것, 뿌리 활착 촉진·정식 시기 조절 목적</td></tr><tr><td>정식(定植)</td><td>최종적으로 본밭에 옮겨 심는 것</td></tr></table></div>\n    <div class=\"theory-section\"><h4>경화(순화, hardening·acclimatization)</h4><p>온실·묘상 등 보호된 환경에서 자란 어린 모를 정식하기 1~2주 전부터 <strong>저온, 관수량 감소(건조), 강한 광</strong>에 점진적으로 노출시켜 외부환경 적응력을 높이는 과정이다.</p><ul><li>세포액 농도(당·아미노산 등 삼투물질) 증가로 <strong>내한성·내건성 증대</strong></li><li>큐티클층 발달, 엽육 조직 치밀화로 <strong>수분 손실 억제</strong></li><li>급격히 정식할 경우 발생하는 <strong>정식 몸살(활착 지연, 위조)</strong>을 예방</li></ul><p>경화하지 않은 연약한 모는 정식 후 저온·건조·강풍에 노출되면 활착이 늦고 고사율이 높아진다.</p></div>","relatedQuestions":["q091","q092","q093","q094","q095"]},
  {"id":"t026","level":"중급","subject":"재배학","topic":"재배관리(정지·전정, 적심·적과)","title":"정지·전정과 적심·적과","summary":"수형을 구성하고 통풍·채광을 개선하는 정지·전정, 생장점을 잘라 곁가지 발생과 개화결실을 촉진하는 적심, 과다 착과된 열매를 솎아 품질을 높이는 적과의 목적과 차이를 비교한다.","keywords":["정지","전정","적심","순지르기","적과","열매솎기","해거리"],"mnemonic":"적심은 '심'는 끝(생장점)을 자르는 것, 적과는 '과'실을 솎는 것! - 순지르기(적심)=가지 끝, 열매솎기(적과)=열매","content":"<div class=\"theory-section\"><h4>정지와 전정</h4><p>정지(整枝)는 수목·과수의 골격이 되는 가지의 배치를 정하는 것이고, 전정(剪定)은 불필요한 가지를 잘라내는 작업이다. 목적은 다음과 같다.</p><ul><li>수관 내부까지 <strong>통풍·채광</strong>을 좋게 하여 병해충 발생 억제</li><li>결과지를 고르게 배치하여 <strong>결실을 조절</strong>하고 품질 향상</li><li>수세(樹勢) 안정 및 작업(방제·수확) 편의성 확보</li></ul><table class=\"compare-table\"><tr><th>전정 종류</th><th>내용</th></tr><tr><td>절단전정</td><td>가지의 중간을 잘라 새 가지 발생 유도</td></tr><tr><td>솎음전정(간정)</td><td>가지 전체를 밑동에서 제거하여 밀생 해소</td></tr><tr><td>갱신전정</td><td>노쇠한 가지를 잘라 새 가지로 세력을 갱신</td></tr></table></div>\n    <div class=\"theory-section\"><h4>적심(순지르기, pinching)</h4><p>주경이나 곁가지의 생장점을 제거하는 것으로, 토마토·참깨·목화·담배 등에서 실시한다.</p><ul><li>곁가지(측지) 발생을 촉진하고 <strong>초장 신장을 억제</strong></li><li>양분이 영양생장 대신 <strong>개화·결실 쪽으로 전환</strong>되도록 유도</li></ul></div>\n    <div class=\"theory-section\"><h4>적과(열매솎기, thinning)</h4><p>착과가 과다한 경우 일부 어린 과실을 솎아내는 것으로 사과·배·감귤 등 과수에서 널리 실시한다.</p><ul><li>남은 과실에 양분을 집중시켜 <strong>당도·크기(품질) 향상</strong></li><li>해거리(격년결과) 방지 - 과다 결실로 인한 수체 양분 고갈을 막음</li><li>과다 착과에 따른 가지 손상 방지</li></ul></div>","relatedQuestions":["q096","q097","q098","q099","q100"]},
  {"id":"t027","level":"중급","subject":"재배학","topic":"작부체계","title":"작부체계 - 윤작·간작·혼작·이어짓기","summary":"한 경지에서 작물을 배치하는 방식인 윤작(돌려짓기), 간작(사이짓기), 혼작(섞어짓기), 이어짓기(연작)의 정의와 장단점을 비교한다.","keywords":["윤작","간작","혼작","이어짓기","연작","작부체계"],"mnemonic":"이름 그대로 외우기 - 돌려짓기=윤작, 사이짓기=간작, 섞어짓기=혼작, 이어짓기=연작! 한글 뜻풀이가 곧 정의다.","content":"<div class=\"theory-section\"><h4>작부체계 4가지 비교</h4><table class=\"compare-table\"><tr><th>구분</th><th>정의</th><th>주요 장점</th><th>주요 단점</th></tr>\n    <tr><td>윤작(돌려짓기)</td><td>일정한 순서로 다른 작물을 순환 재배</td><td>지력 유지, 병해충·잡초 경감</td><td>작목 전환에 시간적 제약</td></tr>\n    <tr><td>간작(사이짓기)</td><td>주작물 이랑 사이에 다른 작물을 재배</td><td>토지이용률 향상, 수입 증대</td><td>양쪽 작물 간 양분·광 경합</td></tr>\n    <tr><td>혼작(섞어짓기)</td><td>생육 특성이 다른 두 작물을 같은 포장에 함께 재배</td><td>상호 보완(예: 콩과작물의 질소 공급), 위험 분산</td><td>개별 작물 관리(약제·수확)가 어려움</td></tr>\n    <tr><td>이어짓기(연작)</td><td>같은 포장에 같은 작물을 계속 재배</td><td>재배기술·설비의 전문화 용이</td><td><strong>기지현상(연작장해)</strong> 발생 위험</td></tr>\n    </table></div>\n    <div class=\"theory-section\"><h4>보충 설명</h4><ul><li>윤작 시 <strong>콩과작물</strong>을 포함시키면 뿌리혹박테리아의 질소고정으로 지력이 향상된다.</li><li>간작·혼작은 좁은 면적에서 <strong>단위면적당 총수량과 소득을 높이는</strong> 데 유리하다.</li></ul></div>","relatedQuestions":["q101","q102","q103","q104","q105"]},
  {"id":"t028","level":"중급","subject":"재배학","topic":"연작장해(기지현상)","title":"연작장해(기지현상)의 원인과 대책","summary":"같은 작물을 같은 땅에 계속 재배할 때 생육과 수량이 떨어지는 기지현상의 원인(양분 편중소모, 염류집적, 토양전염병해충, 유독물질 축적)과 대책(윤작, 객토, 담수, 유기물, 소독, 저항성품종, 접목)을 정리한다.","keywords":["기지현상","연작장해","염류집적","타감작용","윤작","객토","접목재배"],"mnemonic":"기지현상 대책 = '윤·객·담·유·소·저·접' - 윤작, 객토, 담수, 유기물시용, 토양소독, 저항성품종, 접목재배! 앞글자만 따서 외우자.","content":"<div class=\"theory-section\"><h4>기지현상이란</h4><p>동일한 작물(또는 근연작물)을 같은 포장에 계속 재배할 때 생육 장해와 수량 감소가 나타나는 현상을 <strong>기지현상(연작장해)</strong>이라 한다.</p></div>\n    <div class=\"theory-section\"><h4>원인</h4><ul><li>특정 양분의 편중된 소모로 인한 <strong>토양양분 불균형</strong></li><li>시설재배지 등에서의 <strong>염류집적</strong></li><li>특정 병원균·선충 등 <strong>토양전염성 병해충의 밀도 증가</strong></li><li>작물 뿌리의 분비물 등에 의한 <strong>유독물질(타감작용, allelopathy) 축적</strong></li><li>같은 깊이 경운 반복 등에 의한 <strong>토양물리성 악화</strong></li></ul></div>\n    <div class=\"theory-section\"><h4>작물별 기지 정도(예시)</h4><table class=\"compare-table\"><tr><th>구분</th><th>작물 예</th></tr><tr><td>기지가 심한 작물</td><td>콩, 완두, 수박, 참외, 인삼, 딸기, 토마토, 감자 등</td></tr><tr><td>기지에 강한(연작 가능) 작물</td><td>벼, 맥류, 옥수수, 고구마 등</td></tr></table></div>\n    <div class=\"theory-section\"><h4>대책</h4><ul><li><strong>윤작</strong>: 다른 작물과 순환 재배</li><li><strong>객토·유기물 시용</strong>: 토양 물리·화학성 개선</li><li><strong>담수</strong>: 밭을 논 상태로 돌려 염류·병원균 제거(논-밭 돌려짓기)</li><li><strong>토양소독</strong>: 태양열소독, 훈증 등으로 병해충 밀도 저감</li><li><strong>저항성 품종 이용</strong></li><li><strong>접목재배</strong>: 박·호박 등 저항성 대목에 접목(수박, 오이 등)</li></ul></div>","relatedQuestions":["q106","q107","q108","q109","q110"]},
  {"id":"t029","level":"초급","subject":"재배학","topic":"시비 방법","title":"시비 방법 - 기비·추비·엽면시비","summary":"파종·정식 전 밑거름으로 주는 기비, 생육 중 부족분을 보충하는 추비(웃거름), 잎에 직접 살포하는 엽면시비의 목적과 특징, 성분량 환산 계산법을 정리한다.","keywords":["기비","추비","엽면시비","밑거름","웃거름","비료성분량"],"mnemonic":"기비는 기초(밑거름), 추비는 추가(웃거름), 엽면시비는 응급실(잎으로 즉효)!","content":"<div class=\"theory-section\"><h4>시비 방법 비교</h4><table class=\"compare-table\"><tr><th>구분</th><th>시기</th><th>비료 종류</th><th>목적</th></tr>\n    <tr><td>기비(밑거름)</td><td>파종·정식 전 토양에 시용</td><td>완효성·유기질 비료 위주</td><td>생육 전 기간에 걸쳐 서서히 양분 공급</td></tr>\n    <tr><td>추비(웃거름)</td><td>생육 도중 필요 시기에 시용</td><td>속효성 화학비료 위주</td><td>생육 단계별 부족한 양분을 신속히 보충</td></tr>\n    <tr><td>엽면시비</td><td>생육 중 필요시 잎에 살포</td><td>희석한 액상 비료(미량요소 포함)</td><td>뿌리 흡수 장해 시, 미량요소 결핍 시 <strong>응급 영양공급</strong></td></tr>\n    </table></div>\n    <div class=\"theory-section\"><h4>비료 성분량 계산</h4><p>비료의 실제 시비량은 <strong>성분량 ÷ 비료의 성분 함량(%)</strong>으로 구한다.</p><p>예) 질소 성분량 10kg을 요소(질소함량 46%)로 주려면: 10 ÷ 0.46 ≈ <strong>21.7kg</strong>의 요소가 필요하다.</p></div>","relatedQuestions":["q111","q112","q113","q114","q115"]},
  {"id":"t030","level":"초급","subject":"재배학","topic":"관수 방법과 멀칭","title":"관수 방법과 멀칭의 효과","summary":"지표관수·살수관수·점적관수 등 관수 방법의 특징과, 지온조절·수분유지·잡초억제 등 멀칭의 효과를 정리한다.","keywords":["점적관수","살수관수","멀칭","지온조절","수분유지","잡초억제"],"mnemonic":"멀칭효과 = '지·수·잡·비·토' - 지온조절, 수분유지, 잡초억제, 비료유실방지, 토양유실방지!","content":"<div class=\"theory-section\"><h4>관수 방법</h4><table class=\"compare-table\"><tr><th>구분</th><th>방식</th><th>특징</th></tr>\n    <tr><td>지표관수</td><td>고랑·전면에 물을 흘려보냄</td><td>시설비 저렴하나 물 소모 많고 토양 유실 우려</td></tr>\n    <tr><td>살수관수</td><td>스프링클러 등으로 뿌려 줌</td><td>넓은 면적에 균일 관수, 잎이 젖어 병 발생 우려</td></tr>\n    <tr><td>점적관수</td><td>가는 관을 통해 필요한 부위에 물방울로 공급</td><td><strong>물·비료 절약</strong>, 잎이 젖지 않아 <strong>병 발생 감소</strong>, 양액·비료를 함께 줄 수 있어(관비) 정밀관리에 유리</td></tr>\n    </table></div>\n    <div class=\"theory-section\"><h4>멀칭(mulching)의 효과</h4><ul><li><strong>지온 조절</strong>: 비닐 색에 따라 지온을 높이거나(투명·흑색) 낮춤(백색)</li><li><strong>토양 수분 유지</strong>: 증발 억제</li><li><strong>잡초 발생 억제</strong>(특히 흑색·녹색 필름)</li><li><strong>비료 성분 유실 방지</strong> 및 강우에 의한 <strong>토양 유실 방지</strong></li><li>빗물 튐에 의한 <strong>토양전염병 전파 경감</strong></li></ul></div>","relatedQuestions":["q116","q117","q118","q119","q120"]},
  {"id":"t031","level":"중급","subject":"재배학","topic":"시설원예·양액재배","title":"시설원예와 양액재배의 기초","summary":"비닐하우스·유리온실 등에서 계절과 무관하게 재배하는 시설원예(촉성·억제재배)와, 토양 없이 배양액으로 재배하는 양액재배(수경재배)의 종류와 장단점을 정리한다.","keywords":["시설원예","양액재배","수경재배","촉성재배","억제재배","담액수경","박막수경"],"mnemonic":"양액재배 장점 = '연·자·균' - 연작장해 없고, 자동화 쉽고, 생육이 균일하다!","content":"<div class=\"theory-section\"><h4>시설원예의 특징</h4><ul><li>온도·광·습도·CO2 등 환경을 인위적으로 조절하여 계절에 관계없이 재배 가능</li><li><strong>촉성재배</strong>: 인위적으로 생육을 촉진하여 자연재배보다 <strong>일찍 수확</strong></li><li><strong>억제재배</strong>: 생육을 늦추어 자연재배보다 <strong>늦게 수확</strong>(출하시기 조절)</li></ul></div>\n    <div class=\"theory-section\"><h4>양액재배(수경재배)</h4><p>토양을 사용하지 않고 작물 생육에 필요한 무기양분을 용액(배양액) 상태로 공급하는 재배법이다.</p><table class=\"compare-table\"><tr><th>방식</th><th>내용</th></tr><tr><td>담액수경(DFT)</td><td>뿌리를 배양액에 상시 담가 재배</td></tr><tr><td>박막수경(NFT)</td><td>얇은 막 형태로 배양액을 순환시켜 뿌리 일부만 접촉</td></tr><tr><td>고형배지경</td><td>암면·펄라이트 등 고형배지에 배양액을 공급</td></tr></table>\n    <p><strong>장점</strong>: 토양 없이 재배하므로 연작장해 회피, 생육 균일, 관수·시비 자동화 용이.<br><strong>단점</strong>: 초기 시설비가 높고, 배양액의 완충능이 낮아 정밀한 관리가 필요(정전·펌프고장 시 피해 큼).</p></div>","relatedQuestions":["q121","q122","q123","q124","q125"]},
  {"id":"t032","level":"초급","subject":"재배학","topic":"종자검사와 발아율 계산","title":"종자검사와 발아율 계산","summary":"종자의 품질을 판정하는 종자검사 항목(순도, 발아율, 수분함량, 병해충, 천립중)과 발아율·발아세 계산법을 다룬다.","keywords":["종자검사","발아율","발아세","순도검사","천립중"],"mnemonic":"발아율 = 정상발아 ÷ 파종종자 × 100! '정 나누기 파, 백을 곱해라'로 외우자.","content":"<div class=\"theory-section\"><h4>종자검사의 주요 항목</h4><ul><li><strong>순도검사</strong>: 품종 순도, 이물질·이종종자 혼입 여부</li><li><strong>발아검사</strong>: 발아율·발아세 측정</li><li><strong>수분함량검사</strong>: 저장성 판단</li><li><strong>병해충검사</strong>: 종자전염성 병해충 유무</li><li><strong>천립중(千粒重)</strong>: 종자 1,000립의 무게로 종자의 충실도를 나타냄</li></ul></div>\n    <div class=\"theory-section\"><h4>발아율과 발아세 계산</h4><table class=\"compare-table\"><tr><th>용어</th><th>계산식</th><th>의미</th></tr>\n    <tr><td>발아율(%)</td><td>정상발아 종자수 ÷ 파종(공시)종자수 × 100</td><td>전체 종자 중 정상 발아한 비율</td></tr>\n    <tr><td>발아세(%)</td><td>규정된 초기 기간 내 발아 종자수 ÷ 공시종자수 × 100</td><td>발아의 <strong>초기 속도(균일성)</strong>를 나타내는 지표</td></tr>\n    </table><p>예) 200립을 파종하여 178립이 정상발아하였다면 발아율 = 178÷200×100 = <strong>89%</strong></p></div>","relatedQuestions":["q126","q127","q128","q129","q130"]},
  {"id":"t033","level":"중급","subject":"재배학","topic":"수확 후 관리","title":"수확 후 관리 - 예냉과 저장 조건","summary":"수확 직후 포장열·호흡열을 빠르게 제거하는 예냉의 목적과 방법, 저온저장·CA저장·MA포장 등 저장 중 품질 유지 기술을 정리한다.","keywords":["예냉","저온저장","CA저장","MA포장","포장열","호흡열"],"mnemonic":"예냉 3형제 - 강제통풍, 진공, 냉수(수냉)! 열을 빨리 뺄수록 신선도가 오래간다.","content":"<div class=\"theory-section\"><h4>예냉(pre-cooling)</h4><p>수확 직후 청과물이 지닌 <strong>포장열(밭열)과 호흡열을 신속히 제거</strong>하여 품질 저하 속도를 늦추고 신선도·저장성을 높이는 과정이다.</p><table class=\"compare-table\"><tr><th>방법</th><th>내용</th></tr><tr><td>강제(차압)통풍예냉</td><td>냉풍을 강제로 통과시켜 냉각</td></tr><tr><td>진공예냉</td><td>감압하여 수분을 기화시켜 기화열로 냉각(엽채류 등에 효과적)</td></tr><tr><td>냉수예냉(수냉식)</td><td>냉수에 침지 또는 살수하여 냉각</td></tr></table></div>\n    <div class=\"theory-section\"><h4>저장 중 품질 유지 기술</h4><ul><li><strong>저온저장</strong>: 호흡 및 대사작용 억제로 노화 지연</li><li><strong>CA저장(controlled atmosphere)</strong>: 저장고 내 산소 농도를 낮추고 이산화탄소 농도를 높여 호흡을 억제</li><li><strong>MA포장(modified atmosphere packaging)</strong>: 필름 포장재를 이용해 포장 내부의 가스 조성이 자발적으로 변화하도록 하여 신선도 유지</li></ul></div>","relatedQuestions":["q131","q132","q133","q134","q135"]},
  {"id":"t034","level":"초급","subject":"재배학","topic":"친환경·유기농업","title":"친환경·유기농업 재배 기초","summary":"화학비료·합성농약 등 화학자재를 사용하지 않고 지속가능한 방식으로 작물을 재배하는 유기농업의 원칙(윤작, 두과작물 이용, 천적 이용 방제)을 정리한다.","keywords":["유기농업","친환경농업","윤작","녹비작물","천적","IPM"],"mnemonic":"유기농업 3대 원칙 - 화학없이(무화학자재), 돌려짓기(윤작), 천적활용(생물적 방제)!","content":"<div class=\"theory-section\"><h4>유기농업의 정의와 목적</h4><p>화학비료, 합성농약, 생장조절제 등 <strong>합성 화학자재를 사용하지 않고</strong> 유기물과 자연 자재를 이용하여 작물을 재배하는 방식이다. 토양의 생산력을 지속적으로 보전하고 환경 오염을 줄이며 안전한 농산물을 생산하는 것을 목적으로 한다.</p></div>\n    <div class=\"theory-section\"><h4>주요 실천 방법</h4><ul><li><strong>윤작</strong>: 콩과작물을 포함한 작부체계로 <strong>지력 유지</strong> 및 병해충·잡초 경감</li><li><strong>녹비작물 이용</strong>: 헤어리베치, 자운영 등을 재배 후 토양에 환원하여 유기물·질소 공급</li><li><strong>천적·생물적 방제(IPM)</strong>: 화학 농약 대신 천적이나 생물농약을 이용한 병해충 관리</li><li><strong>퇴비·구비 등 유기물 시용</strong>으로 토양 물리성 개선</li></ul><p>국내 인증제도상 <strong>유기농산물</strong>은 일정 전환기간 이상 합성농약과 화학비료를 사용하지 않고 재배한 농산물을, <strong>무농약농산물</strong>은 합성농약을 사용하지 않고 화학비료는 권장량의 일정 비율 이하로 사용한 농산물을 말한다.</p></div>","relatedQuestions":["q136","q137","q138","q139","q140"]},
  {"id":"t035","level":"중급","subject":"식물병리학","topic":"병원체 번식체(포자) 심화","title":"진균 포자의 구분과 세균·바이러스 재정리","summary":"진균의 무성포자(분생포자·유주자·후벽포자)와 유성포자(난포자·접합포자·자낭포자·담자포자)를 구분하고, 세균·바이러스의 침입 경로와 증식 특성을 정리한다.","keywords":["분생포자","유주자","후벽포자","세균","바이러스","무성생식"],"mnemonic":"무성포자는 '분유후'(분생·유주·후벽), 유성포자는 '난접자담'(난포자·접합포자·자낭포자·담자포자)로 균류 진화 순서(조균류→접합균류→자낭균류→담자균류)와 함께 암기한다.","content":"<div class=\"theory-section\"><h4>진균 번식체(포자)의 구분</h4><p>진균은 균사로 생장하다가 다양한 형태의 <strong>포자</strong>를 만들어 번식과 전반(퍼짐)을 담당한다. 포자는 만들어지는 방식에 따라 무성포자와 유성포자로 나뉜다.</p>\n<table class=\"compare-table\"><tr><th>구분</th><th>종류</th><th>특징</th></tr><tr><td rowspan=\"3\">무성포자</td><td>분생포자(conidia)</td><td>균사 끝에서 잘록하게 잘려 형성, 공기 전반의 대표적 형태</td></tr><tr><td>유주자(유주포자, zoospore)</td><td><strong>편모</strong>가 있어 물속에서 스스로 이동하며, 다습·물이 고인 조건에서 감염원 역할을 한다(노균병·역병균 등)</td></tr><tr><td>후벽포자(chlamydospore)</td><td>세포벽이 두꺼워 저온·건조 등 불리한 환경에서 오래 <strong>휴면·생존</strong>하는 내구성 포자</td></tr><tr><td rowspan=\"4\">유성포자</td><td>난포자(oospore)</td><td>난균류(역병균·노균병균 등)의 유성포자, 토양 중 장기 생존</td></tr><tr><td>접합포자(zygospore)</td><td>접합균류(빵곰팡이류)의 유성포자</td></tr><tr><td>자낭포자(ascospore)</td><td>자낭균류(주머니 모양 자낭 속에 형성)</td></tr><tr><td>담자포자(basidiospore)</td><td>담자균류(담자기 표면에 외생)</td></tr></table></div>\n<div class=\"theory-section\"><h4>세균(bacteria)의 특징</h4><ul><li>핵막이 없는 <strong>원핵생물</strong>로, 대부분 막대 모양(간균)이며 편모로 운동한다.</li><li>진균과 달리 식물체 표피를 직접 뚫는 침입기관이 없어, <strong>상처나 자연개구(기공·수공·피목)</strong>를 통해서만 침입한다.</li><li>주로 세포와 세포 사이(세포간극)나 물관에서 증식한다.</li></ul></div>\n<div class=\"theory-section\"><h4>바이러스(virus)의 특징</h4><ul><li>핵산(DNA 또는 RNA)과 단백질 껍질로만 이루어져, 살아있는 세포 안에서만 증식하는 <strong>절대기생체</strong>이다.</li><li>광학현미경으로는 볼 수 없고 전자현미경으로만 관찰된다.</li><li>매개충(진딧물·총채벌레 등), 즙액접촉, 종자·영양번식체 등을 통해 전반되며 모자이크·위축·황화 병징을 일으킨다.</li></ul></div>","relatedQuestions":["q141","q142","q143","q144","q145"]},
  {"id":"t036","level":"중급","subject":"식물병리학","topic":"채소 세균병해","title":"무름병과 풋마름병(청고병)","summary":"채소류에 큰 피해를 주는 대표적 세균병인 무름병과 풋마름병(청고병)의 병징·진단·방제법을 정리한다.","keywords":["무름병","풋마름병","청고병","세균병","도관"],"mnemonic":"무름병=물러 썩는다(펙틴분해효소), 풋마름병=풋풋한 채 마른다(청고, 유관속 막힘)로 병징 이름 그대로 암기한다.","content":"<div class=\"theory-section\"><h4>무름병(연부병)</h4><p>Pectobacterium(구 Erwinia)속 세균에 의해 발생하며, 배추·무·양배추 등 십자화과 채소에서 흔하다.</p><ul><li>세균이 분비하는 <strong>펙틴분해효소</strong>가 세포벽(중층)을 녹여 조직이 물러지고 심한 <strong>악취</strong>가 난다.</li><li>고온다습 조건, 상처(해충 피해·기계적 상처)를 통해 침입하며 저장·유통 중에도 계속 진행된다.</li></ul></div>\n<div class=\"theory-section\"><h4>풋마름병(청고병)</h4><p>Ralstonia solanacearum에 의해 발생하며 토마토·감자·담배·고추 등 가지과 작물에 피해가 크다.</p><ul><li>세균이 <strong>물관(유관속)</strong>을 막아 수분 이동이 차단되어, 잎이 누렇게 변하지 않고 <strong>푸른 채로 급격히 시들어 죽는다(청고)</strong>.</li><li>진단법: 줄기 절단면을 맑은 물에 담그면 <strong>뿌연 세균 점액</strong>이 흘러나오는 것을 관찰할 수 있다.</li><li>토양전염성이며 고온다습·연작지에서 발생이 심하다.</li></ul></div>\n<div class=\"theory-section\"><h4>세균병 공통 방제</h4><ul><li>배수 개선 및 상처 최소화, 저항성 품종·윤작 활용, 건전 종자·종묘 사용, 등록 약제(구리제 등) 살포</li></ul></div>","relatedQuestions":["q146","q147","q148","q149"]},
  {"id":"t037","level":"중급","subject":"식물병리학","topic":"노균병 병원체 특성","title":"노균병 - 병원체 특성과 저항성 품종","summary":"노균병균이 난균류에 속한다는 계통학적 특성과 발생 환경, 저항성 품종 이용 시 유의점을 정리한다.","keywords":["노균병","난균류","유주자","저항성품종","시설재배"],"mnemonic":"노균병=이슬(露) 맞은 듯 잎 뒷면에 곰팡이가 생기고, 난균류라 물이 있어야 유주자가 이동해 감염된다고 암기한다.","content":"<div class=\"theory-section\"><h4>노균병균의 병원체 특성</h4><ul><li>노균병을 일으키는 Peronospora, Pseudoperonospora, Plasmopara 등은 분류학적으로 <strong>난균류(卵菌類)</strong>에 속하여, 일반 진균(곰팡이)과는 계통이 다르다.</li><li>편모가 있는 <strong>유주자</strong>를 형성하여 물기가 있어야 이동·감염하므로, <strong>저온다습</strong> 환경(이슬·잦은 강우·시설 내 결로)에서 발생이 급격히 늘어난다.</li><li>잎 뒷면에 흰색~회색의 곰팡이(포자낭)가 서리처럼 형성되고, 잎 앞면에는 잎맥으로 경계 지어진 얼룩덜룩한 병반이 생긴다.</li></ul></div>\n<div class=\"theory-section\"><h4>노균병 저항성 품종</h4><ul><li>오이·상추·포도 등에서 노균병 저항성 품종이 육성·보급되어 있으며, 저항성 품종 이용은 화학적 방제 의존도를 낮추는 핵심 수단이다.</li><li>다만 병원균의 레이스(race) 분화가 빠른 경우가 있어, 한 저항성 품종만 계속 재배하면 저항성이 무너질 수 있어 품종을 돌려가며 재배하는 것이 바람직하다.</li></ul></div>\n<div class=\"theory-section\"><h4>방제</h4><ul><li>환기·제습으로 습도를 낮추고 질소 과용을 피하며, 윤작과 저항성 품종, 등록 약제를 함께 사용하는 종합적방제가 필요하다.</li></ul></div>","relatedQuestions":["q150","q151","q152","q153"]},
  {"id":"t038","level":"초급","subject":"식물병리학","topic":"종자전염병과 종자소독","title":"종자전염병과 종자소독법","summary":"종자를 통해 전염되는 병의 개념과 온탕침법을 포함한 주요 종자소독법을 정리한다.","keywords":["종자전염병","종자소독","온탕침법","건열소독","키다리병"],"mnemonic":"온탕침법은 '온도·시간 엄수' - 너무 뜨겁거나 오래 담그면 병은 잡아도 싹까지 죽는다고 암기한다.","content":"<div class=\"theory-section\"><h4>종자전염병</h4><p>병원체가 종자의 표면에 묻어 있거나 종자 내부(배·배유)에 잠복해 있다가 발아 후 발병을 일으키는 병을 말한다. 대표적으로 <strong>벼 키다리병</strong>(Fusarium fujikuroi), 벼 도열병 등이 있으며, 종자를 통해 다음 세대·다른 지역으로 병원체가 옮겨가는 통로가 된다.</p></div>\n<div class=\"theory-section\"><h4>종자소독법</h4><table class=\"compare-table\"><tr><th>방법</th><th>내용</th></tr><tr><td>온탕침법(온탕소독)</td><td>일정 온도의 물에 종자를 일정 시간 담가 병원균을 사멸시키는 방법. 작물·병해별로 정해진 <strong>온도와 시간을 반드시 지켜야</strong> 하며, 온도가 높거나 시간이 길면 발아율이 떨어질 수 있다. 약제를 쓰지 않아 친환경적이다.</td></tr><tr><td>화학적 소독</td><td>살균제를 종자에 분의(가루 코팅)하거나 침지하여 소독하는 방법</td></tr><tr><td>건열소독</td><td>고온의 건조한 열을 가해 소독하는 물리적 방법</td></tr></table></div>\n<div class=\"theory-section\"><h4>기타 예방</h4><ul><li>무병지에서 채종하거나 검역·검사를 거친 건전 종자를 사용하는 것이 근본적인 예방책이다.</li></ul></div>","relatedQuestions":["q154","q155","q156","q157"]},
  {"id":"t039","level":"초급","subject":"식물병리학","topic":"병 발생 예찰","title":"병 발생 예찰과 예찰포 운영","summary":"적기 방제의 기반이 되는 예찰의 개념, 예찰포 운영 방식, 발생 예측의 기본 원리를 정리한다.","keywords":["예찰","예찰포","발생예측","적기방제","상시관찰"],"mnemonic":"예찰(豫察)=미리 살핀다 - 예찰포는 병의 발생 상황을 늘 지켜보는 '정기검진소'라고 암기한다.","content":"<div class=\"theory-section\"><h4>예찰의 개념</h4><p><strong>예찰(豫察)</strong>이란 병해충의 발생 시기·정도를 미리 관찰·예측하여 방제 여부와 시기를 합리적으로 결정하기 위한 활동이다. 방제는 병이 퍼지기 전, 적절한 시점에 이루어져야 효과가 크므로 예찰은 종합적방제(IPM)의 출발점이다.</p></div>\n<div class=\"theory-section\"><h4>예찰포 운영</h4><ul><li>예찰포는 특정 지역의 대표 포장을 정하여 <strong>정기적으로 병 발생 상황</strong>(이병주율, 병반 수, 발생 시기 등)을 조사·기록하는 관찰 포장이다.</li><li>예찰포 조사 결과는 인근 농가에 발생 정보와 방제 시기를 안내하는 자료로 활용된다.</li></ul></div>\n<div class=\"theory-section\"><h4>발생 예측의 기본 개념</h4><ul><li>온도·습도·강우 등 <strong>기상 조건</strong>은 병 발생과 밀접한 관계가 있으므로, 기상자료를 분석하여 발생 시기를 예측한다(기상예찰).</li><li>예찰 방법은 일정 주기로 실시하는 <strong>정기예찰</strong>과 발생이 우려될 때 실시하는 <strong>수시예찰</strong>로 나뉜다.</li><li>정확한 예찰은 불필요한 약제 살포를 줄여 방제비용과 환경 부담을 함께 낮추는 효과가 있다.</li></ul></div>","relatedQuestions":["q158","q159","q160","q161"]},
  {"id":"t040","level":"중급","subject":"식물병리학","topic":"저장병해와 생리장해","title":"저장병해(수확 후 병) vs 생리장해(비전염성병)","summary":"저장 중 발생하는 전염성 저장병해와 병원체 없이 발생하는 비전염성 생리장해를 구분한다.","keywords":["저장병해","생리장해","비전염성병","수확후관리","저온장해"],"mnemonic":"옮으면 저장병해(전염성), 저 혼자 아프면 생리장해(비전염성)라고 구분해서 암기한다.","content":"<div class=\"theory-section\"><h4>저장병해(수확 후 병해)</h4><p>수확 후 저장·유통 과정에서 곰팡이·세균 등 <strong>병원체에 의해</strong> 발생하는 부패성 병으로, 무름병(세균), 잿빛곰팡이병(Botrytis), 저장 중 탄저병 등이 대표적이다. 상처나 부적절한 저장 환경(고온다습)에서 심해지며, 저온저장·큐어링(치유)·적정 습도 관리·소독 등으로 방제한다.</p></div>\n<div class=\"theory-section\"><h4>생리장해(비전염성병)</h4><p>병원체 없이 <strong>환경·영양 요인</strong>만으로 발생하는 장해로, 저온장해·고온장해, 칼슘 결핍에 의한 배꼽썩음병, 저장고 내 가스(이산화탄소 과다·산소 부족) 장해, 에틸렌 축적에 의한 노화 촉진 등이 있다.</p>\n<table class=\"compare-table\"><tr><th>구분</th><th>저장병해(전염성)</th><th>생리장해(비전염성)</th></tr><tr><td>원인</td><td>병원체(곰팡이·세균)</td><td>환경·영양 요인</td></tr><tr><td>전염성</td><td>있음(주변으로 확산)</td><td>없음</td></tr><tr><td>병원체 분리</td><td>가능</td><td>불가능</td></tr><tr><td>방제</td><td>소독·저온저장·상처 방지</td><td>저장 환경(온습도·가스조성) 및 영양 관리</td></tr></table></div>","relatedQuestions":["q162","q163","q164","q165"]},
  {"id":"t041","level":"초급","subject":"농림해충학","topic":"곤충의 외부형태 기초","title":"곤충 외부형태의 기본 구조 - 두흉복 3부분과 부속지","summary":"곤충의 몸은 머리(두부)·가슴(흉부)·배(복부) 3부분으로 구분되며, 촉각·다리·날개·입틀 등 부속지의 형태는 해충 종 동정과 가해 방식 파악의 기초가 된다.","keywords":["두흉복","촉각","다리마디","입틀","날개"],"mnemonic":"두촉, 흉다날, 복소생 - 머리엔 촉각·입, 가슴엔 다리·날개, 배엔 소화·생식","content":"<div class=\"theory-section\"><h4>1. 몸의 3부분(두흉복)</h4><p>곤충강(Insecta)의 몸은 <strong>두부(머리)·흉부(가슴)·복부(배)</strong> 3부분으로 뚜렷이 구분되는 것이 특징이다.</p><ul><li><strong>두부(머리)</strong>: 촉각 1쌍, 겹눈·홑눈, 입틀이 위치</li><li><strong>흉부(가슴)</strong>: 전흉·중흉·후흉 3마디로 구성, 각 마디에 다리 1쌍씩 총 3쌍, 중흉·후흉에 날개가 있는 경우 각 1쌍씩 부착</li><li><strong>복부(배)</strong>: 여러 마디로 구성, 소화·생식·호흡 관련 기관과 생식기(산란관 등)가 위치, 다리는 없음</li></ul></div>\n<div class=\"theory-section\"><h4>2. 촉각과 다리의 구조</h4><p>촉각은 실모양·방울(곤봉)모양·톱니모양·깃털모양 등 형태가 다양하여 해충 동정의 중요한 형질로 쓰인다.</p><p>다리는 몸에 가까운 쪽부터 <strong>기절(coxa) - 전절(trochanter) - 퇴절(femur) - 경절(tibia) - 부절(tarsus)</strong> 순서의 마디로 구성된다.</p><table class=\"compare-table\"><tr><th>변형 다리</th><th>대표 예시</th><th>특징</th></tr><tr><td>도약다리</td><td>메뚜기·귀뚜라미 뒷다리</td><td>퇴절이 굵고 발달하여 도약에 적합</td></tr><tr><td>파악다리</td><td>사마귀 앞다리</td><td>먹이를 붙잡기에 알맞게 변형</td></tr><tr><td>굴착다리</td><td>땅강아지 앞다리</td><td>땅을 파기에 알맞게 변형</td></tr></table></div>\n<div class=\"theory-section\"><h4>3. 입틀과 날개의 형태</h4><p>입틀은 가해 방식과 직결되는데, <strong>저작형(씹는형)</strong>은 잎을 갉아먹는 나방 유충·딱정벌레 등에서, <strong>자흡구(찌르고 빠는형)</strong>는 진딧물·노린재류 등 흡즙성 해충에서 나타난다. 입틀 형태에 따라 접촉독제·소화중독제·침투성 약제 등 방제약제의 선택 방향이 달라지므로 해충 동정의 출발점이 된다.</p><p>날개는 흉부의 중흉·후흉에 각 1쌍씩 있으며, 딱정벌레목은 앞날개가 단단하게 경화된 <strong>초시</strong>, 노린재류는 기부는 단단하고 끝부분은 막질인 <strong>반초시</strong> 구조를 가진다. 파리목은 뒷날개가 퇴화되어 평형기(평균곤)로 변형되어 있다.</p></div>","relatedQuestions":["q166","q167","q168","q169","q170"]},
  {"id":"t042","level":"중급","subject":"농림해충학","topic":"흡즙해충 심화(노린재류)","title":"노린재류 등 흡즙해충의 가해 특징과 피해 진단","summary":"노린재목 해충은 자흡구로 식물체를 찔러 즙액을 빨아 먹으며, 진딧물과 달리 반점·괴사·종실 기형 등 특유의 피해흔을 남긴다.","keywords":["자흡구","반점피해","톱다리개미허리노린재","비래성","적기방제"],"mnemonic":"노린재는 찌르고 빤다 - 찔린 자리엔 반점, 종실은 기형","content":"<div class=\"theory-section\"><h4>1. 노린재류의 특징</h4><p>노린재류는 노린재목(Hemiptera) 노린재아목에 속하며 진딧물과 마찬가지로 <strong>자흡구(찌르고 빠는 입)</strong>를 가지고 식물체에 침을 꽂아 즙액을 빨아 먹는다. 다만 진딧물보다 몸집이 크고 이동성(비래성)이 강한 것이 특징이다.</p><ul><li>대표종: 톱다리개미허리노린재(콩과작물 꼬투리 가해), 알락수염노린재·썩덩나무노린재(과수 흡즙)</li></ul></div>\n<div class=\"theory-section\"><h4>2. 피해 특징 - 반점·기형</h4><p>흡즙 부위의 조직이 괴사하여 <strong>반점(斑點)과 흑변</strong>이 나타나며, 콩 등의 종실을 흡즙하면 <strong>종실이 기형화되거나 쭈그러들어</strong> 수량과 품질이 크게 저하된다. 과실을 흡즙하면 표면이 함몰되거나 괴저 반점이 생기기도 한다.</p></div>\n<div class=\"theory-section\"><h4>3. 진딧물류와의 비교 및 방제</h4><table class=\"compare-table\"><tr><th>구분</th><th>진딧물류</th><th>노린재류</th></tr><tr><td>생활 방식</td><td>군집 생활, 이동성 낮음</td><td>개체 분산, 비래성(이동성) 강함</td></tr><tr><td>대표 피해</td><td>감로 분비로 그을음병 유발</td><td>반점·기형 등 조직 괴사형 피해</td></tr><tr><td>방제 강조점</td><td>초기 군집 방제</td><td>예찰(유아등·포충망) 기반 적기방제</td></tr></table><p>노린재류는 포장 간 이동이 잦으므로 유아등이나 포충망 등을 이용한 예찰로 발생시기와 밀도를 파악하여 <strong>적기에 방제</strong>하는 것이 중요하며, 월동처가 되는 주변 잡초·기주식물 관리도 병행해야 한다.</p></div>","relatedQuestions":["q171","q172","q173","q174"]},
  {"id":"t043","level":"중급","subject":"농림해충학","topic":"나방류 종합관리(교미교란법)","title":"나방류 해충의 페로몬 교미교란법을 이용한 방제","summary":"곤충 성페로몬은 예찰(트랩)뿐 아니라 대량 방출을 통한 교미교란(mating disruption)으로 나방류 해충 방제에 직접 활용된다.","keywords":["교미교란","성페로몬","정위교란","복숭아순나방","공동방제"],"mnemonic":"교란은 넓게, 낮은 밀도에 강하다","content":"<div class=\"theory-section\"><h4>1. 예찰용 트랩과 교미교란법의 차이</h4><p>성페로몬을 소량 이용하여 수컷을 유인·포살함으로써 발생시기와 밀도를 파악하는 것이 <strong>예찰트랩</strong>이라면, <strong>교미교란법</strong>은 방출기(디스펜서)를 이용해 처리 지역 전체에 다량의 성페로몬을 지속적으로 방출하여 방제 효과를 얻는 응용 기술이다.</p></div>\n<div class=\"theory-section\"><h4>2. 교미교란법의 원리</h4><p>정상적으로는 암컷이 방출하는 성페로몬의 <strong>농도구배</strong>를 따라 수컷이 정위(orientation)하여 암컷을 찾아간다. 교미교란법은 대기 중 페로몬 농도를 인위적으로 균일하게 높여 이 농도구배를 없앰으로써 수컷이 암컷의 위치를 인식하지 못하게 하여 <strong>교미 자체를 저해</strong>한다.</p><p>대상 해충: 복숭아순나방, 복숭아심식나방, 사과 코드링나방 등 과수 인시목(나방류) 해충</p></div>\n<div class=\"theory-section\"><h4>3. 장점과 한계</h4><ul><li>장점: 천적·화분매개곤충 등 비표적 생물에 미치는 영향이 적음, 신경계 직접 독성 기작이 아니어서 약제 저항성 발달 위험이 낮음, 잔류 문제가 없음</li><li>한계: 처리 면적이 좁으면 주변 미처리지에서 비래한 개체로 효과가 떨어져 <strong>최소 처리 면적</strong> 확보가 필요, 초기 밀도가 높은 포장에서는 단독 사용만으로는 부족하여 화학적 방제 병행 필요</li></ul><p>실제 현장에서는 예찰트랩으로 발생시기를 파악한 뒤 교미교란제 설치 시기를 결정하고, 필요시 화학적 방제를 보완하는 <strong>IPM(종합적해충관리)</strong> 체계로 활용하는 것이 바람직하다.</p></div>","relatedQuestions":["q175","q176","q177","q178"]},
  {"id":"t044","level":"중급","subject":"농림해충학","topic":"응애류 방제 심화","title":"응애류 방제 심화 - 살비제 저항성 관리와 천적 활용","summary":"응애류는 세대기간이 짧고 약제 저항성 발달이 빨라 작용기작이 다른 살비제의 교호살포와 칠레이리응애 등 포식성 천적 활용이 중요하다.","keywords":["살비제저항성","작용기작교호","칠레이리응애","포식성천적","점박이응애"],"mnemonic":"같은 약 연달아 치면 응애가 이긴다 - 기작 다른 약으로 돌려쳐라","content":"<div class=\"theory-section\"><h4>1. 응애류의 저항성 발달 위험</h4><p>점박이응애 등 응애류는 세대기간이 매우 짧고(약 1주 내외) 산자수가 많아 특정 살비제에 대한 저항성 개체가 매우 빠르게 선발·증가할 수 있다. 이 때문에 응애류는 다른 해충군보다 약제 저항성 관리가 특히 중요하다.</p></div>\n<div class=\"theory-section\"><h4>2. 저항성 관리 원칙</h4><ul><li>동일 <strong>작용기작(MoA)</strong> 살비제의 연속 사용을 지양한다.</li><li>작용기작이 다른 계통의 약제를 <strong>교호(순환) 살포</strong>한다.</li><li>한 세대 내에서 동일 계통 약제의 반복 사용을 최소화한다.</li><li>등록된 사용법(권장 살포횟수·희석배수)을 준수한다.</li></ul></div>\n<div class=\"theory-section\"><h4>3. 천적을 이용한 생물적 방제</h4><p><strong>칠레이리응애(Phytoseiulus persimilis)</strong>는 점박이응애 등 해충성 응애를 포식하는 대표적인 천적응애로, 시설재배지 등에서 방사하여 응애류 개체군을 억제하는 데 활용된다.</p><p>천적을 이용한 생물적 방제의 효과를 높이려면 천적 방사 전후로 <strong>잔류성 살비제 사용을 자제</strong>하거나 천적에 안전한(선택적) 약제를 선택해야 하며, 응애의 서식처가 되는 잡초 관리와 하우스 내 온·습도 관리 등 경종적 방법도 함께 병행해야 한다.</p></div>","relatedQuestions":["q179","q180","q181","q182"]},
  {"id":"t045","level":"고급","subject":"농림해충학","topic":"돌발·외래해충 개념","title":"돌발·외래해충의 일반적 특징과 대응 원칙","summary":"미국선녀벌레·갈색날개매미충 등 최근 문제되는 돌발·외래해충은 천적 부재로 개체군이 급격히 증가하며 광역적·예방적 공동방제가 요구된다.","keywords":["돌발해충","외래해충","천적부재","월동태제거","광역공동방제"],"mnemonic":"낯선 놈일수록 천적이 없다 - 초기에 함께 잡아라","content":"<div class=\"theory-section\"><h4>1. 돌발해충과 외래해충의 개념</h4><p><strong>돌발해충</strong>이란 평소에는 발생량이 적어 문제되지 않던 해충이 이상기온 등 특정 조건에서 갑자기 대발생하여 피해를 주는 해충을 말한다. <strong>외래해충</strong>은 국내 미기록·외국에서 유입된 종으로, 이 둘은 흔히 겹쳐서 나타난다.</p></div>\n<div class=\"theory-section\"><h4>2. 외래해충 개체군 급증의 원인</h4><ul><li>원산지에서 개체군을 억제하던 자연천적이 함께 유입되지 않아 국내에는 <strong>천적이 부재하거나 부족</strong>하다.</li><li>기주범위가 넓어 다양한 활엽수·과수 등에 적응하며 확산 속도가 빠르다.</li></ul><p>대표 예로 <strong>미국선녀벌레, 갈색날개매미충</strong> 등이 있으며, 이들은 흡즙과 함께 감로(단물)를 분비하여 그을음병을 유발하고, 산란 시 가지에 상처를 내어 생육을 저해한다.</p></div>\n<div class=\"theory-section\"><h4>3. 확산 방지를 위한 대응 원칙</h4><ul><li>발생 초기, 밀도가 낮은 단계에서 신속히 방제하는 것이 가장 효과적이다.</li><li>알덩어리 등 <strong>월동태를 이른 봄에 제거</strong>한다.</li><li>개별 농가 단독 방제는 효과에 한계가 있으므로 인접 농가·지자체 단위의 <strong>광역 공동방제</strong>가 필요하다.</li><li>예찰을 강화하여 신규 유입 및 확산을 조기에 발견한다.</li></ul></div>","relatedQuestions":["q183","q184","q185"]},
  {"id":"t046","level":"중급","subject":"농약학","topic":"농약 희석 계산","title":"농약 희석 계산법(희석배수·소요약량·소요물량)","summary":"농약을 살포농도에 맞게 물로 희석할 때 필요한 물의 양과 원액의 양을 구하는 핵심 공식과, 단위면적당 소요약량 및 배액(倍液) 계산의 실무 간편식을 정리한다.","keywords":["희석배수","소요약량","소요물량","배액계산","단위면적당 소요약량"],"mnemonic":"공식 순서 암기: '원 나누기 희, 하나 빼고, 약 곱하기' → (원액농도÷희석농도−1)×소요약량=소요물량. 배액 문제는 거꾸로 '물 나누기 배수 = 원액량'로 빠르게!","content":"<div class=\"theory-section\"><h4>희석 계산의 기본 공식</h4><p>농약을 방제에 사용하기 위해 물로 희석할 때는 다음 공식을 이용하여 필요한 물의 양(소요 물량)을 구한다.</p><div class=\"formula\">소요 물량(희석수량) = 소요약량 × (원액의 농도 ÷ 희석하려는 농도 − 1)</div><p><strong>소요약량</strong>은 실제로 사용할 원제(원액 또는 원분)의 양이고, <strong>원액의 농도</strong>는 제품에 표시된 주성분 함량(%), <strong>희석하려는 농도</strong>는 방제 지침에서 정한 살포 농도(%)이다.</p><h4>worked example(농도 기준)</h4><p>주성분 함량 10%인 살균제를 1%로 희석하여 사용하고자 한다. 원액 200mL를 사용할 때 필요한 물의 양은?</p><div class=\"formula\">물량 = 200 × (10 ÷ 1 − 1) = 200 × 9 = 1,800mL</div><h4>단위면적당 소요약량</h4><div class=\"formula\">단위면적당 소요약량 = 소요약량(추천 사용량) × 면적(방제 대상 면적 ÷ 기준 면적)</div><p>예를 들어 추천 사용량이 10a당 200mL인 약제를 25a에 살포한다면, 소요약량 = 200 × (25 ÷ 10) = 500mL이다.</p><h4>배액(倍液) 계산 - 실무 간편식</h4><p>'몇 배액'으로 표시되는 희석배수는 정확히는 (배수 − 1)로 계산해야 하지만, 배수가 수백~수천 배로 큰 경우 실무에서는 다음의 간편식으로 근사할 수 있다.</p><div class=\"formula\">원액의 양 ≒ 물(살포액)의 양 ÷ 희석배수</div><p>예를 들어 1000배액을 만들 때 물 1L(1,000mL)에 필요한 원액의 양은 1,000 ÷ 1,000 = 1mL(근사값, 정밀값은 1,000÷999≒1.001mL)이다.</p></div>","relatedQuestions":["q186","q187","q188","q189","q190","q191","q192","q193","q194","q195"]},
  {"id":"t047","level":"중급","subject":"농약학","topic":"유효성분 함량 계산","title":"농약 유효성분 함량 계산","summary":"제품량과 주성분 함량(%)으로부터 실제 유효성분량을 구하거나, 반대로 목표 유효성분량에 필요한 제품량을 환산하는 계산법을 정리한다.","keywords":["유효성분","함량계산","주성분 함량(%)","제품량 환산"],"mnemonic":"함량 계산은 '전체×퍼센트=성분', 거꾸로는 '성분÷퍼센트=전체'로 뒤집기만 하면 된다.","content":"<div class=\"theory-section\"><h4>유효성분 함량 계산의 기본 공식</h4><div class=\"formula\">유효성분량 = 제품량 × 함량(%) ÷ 100</div><p>예를 들어 주성분 함량 50%인 수화제 4kg 중 유효성분량은 4,000g × 0.5 = 2,000g(2kg)이다.</p><h4>반대로 필요한 제품량을 구하는 경우</h4><div class=\"formula\">제품 소요량 = 목표 유효성분량 ÷ (함량(%) ÷ 100)</div><p>유효성분 15g이 필요하고 제품의 함량이 30%라면, 제품 소요량 = 15 ÷ 0.3 = 50g이다.</p><h4>참고</h4><p>동일한 상표의 제품이라도 제형이나 규격에 따라 유효성분 함량이 다를 수 있으므로, 반드시 포장지의 표시 함량을 확인한 후 계산해야 한다.</p></div>","relatedQuestions":["q196","q197","q198","q199"]},
  {"id":"t048","level":"초급","subject":"농약학","topic":"물리화학적 성질","title":"농약의 물리화학적 성질(수화성·유화성·고착성·확전성)","summary":"농약 제형의 품질과 방제 효과를 좌우하는 주요 물리화학적 성질의 의미와 관련 보조제를 정리한다.","keywords":["수화성","유화성","고착성","확전성","물리화학적 성질"],"mnemonic":"수화-유화-고착-확전: '수유고확' 순서로 외우고, 고착은 '안 씻김', 확전은 '잘 퍼짐'으로 짝지어 기억.","content":"<div class=\"theory-section\"><h4>농약의 주요 물리화학적 성질</h4><table class=\"compare-table\"><tr><th>성질</th><th>의미</th><th>관련 제형/특징</th></tr><tr><td>수화성(습윤성)</td><td>수화제 등 고체 입자가 물에 젖어 균일하게 분산되는 성질</td><td>수화제(WP), 입상수화제(WG)</td></tr><tr><td>유화성</td><td>유제(오일 성분)가 물에 섞였을 때 미세한 유탁액(에멀전)을 형성하는 성질</td><td>유제(EC)</td></tr><tr><td>고착성</td><td>살포된 약제가 작물체 표면에 잘 부착되어 비바람에 쉽게 씻겨 내려가지 않는 성질</td><td>전착제·고착제 첨가로 향상</td></tr><tr><td>확전성(전착성)</td><td>살포액 방울이 작물체 표면에서 얇고 고르게 퍼지는 성질</td><td>전착제 첨가로 향상, 방제 효과와 직결</td></tr></table><p><strong>참고:</strong> 이러한 물리화학적 성질은 농약 제형 설계 시 전착제·유화제·고착제 등의 보조제를 첨가하여 조절한다.</p></div>","relatedQuestions":["q200","q201","q202"]},
  {"id":"t049","level":"중급","subject":"농약학","topic":"독성구분과 잔류성","title":"농약 독성구분(LD50)과 잔류성 개념 심화","summary":"급성경구 LD50 값을 기준으로 한 독성 등급 구분과, 농약이 환경·작물체에 남아있는 정도를 나타내는 잔류성 개념을 정리한다.","keywords":["LD50","독성구분","맹독성","잔류성","MRL"],"mnemonic":"LD50 값은 작을수록 강하다 - '적은 양으로 죽으면 독한 것'으로 기억.","content":"<div class=\"theory-section\"><h4>급성독성 구분(LD50 기준)</h4><p>농약의 급성독성은 흰쥐 등을 이용한 급성경구·경피 LD50(반수치사량, mg/kg) 시험값을 기준으로 등급을 구분한다. 일반적으로 교재에서 제시하는 기준(고체 원제, 경구 기준 예시)은 다음과 같다.</p><table class=\"compare-table\"><tr><th>독성 구분</th><th>급성경구 LD50(mg/kg, 예시)</th></tr><tr><td>맹독성</td><td>5 이하</td></tr><tr><td>고독성</td><td>5 초과 ~ 50 이하</td></tr><tr><td>보통독성</td><td>50 초과 ~ 500 이하</td></tr><tr><td>저독성</td><td>500 초과</td></tr></table><p><strong>LD50 값이 작을수록 소량으로도 치사에 이르므로 독성이 강하다</strong>는 것을 의미한다. 경구·경피, 고체·액체 제형에 따라 세부 기준값은 다를 수 있다.</p><h4>잔류성 개념</h4><p>잔류성이란 농약이 살포된 후 분해되지 않고 작물체·토양·수계 등에 남아 있는 정도를 말한다. 반감기(잔류 농약이 절반으로 줄어드는 데 걸리는 시간)가 길수록 잔류성이 높다고 하며, 잔류허용기준(MRL)을 초과하지 않도록 안전사용기준(수확 전 최종 살포일수, 사용 횟수 등)을 지켜야 한다.</p></div>","relatedQuestions":["q203","q204","q205"]},
  {"id":"t050","level":"고급","subject":"농약학","topic":"저항성 발달기구","title":"농약저항성의 생화학적·행동적 발달기구","summary":"해충·병원균이 농약에 저항성을 나타내는 기전을 대사적(생화학적) 저항성, 표적부위 저항성, 침투저항성, 행동적 저항성으로 구분하여 정리한다.","keywords":["생화학적 저항성","해독효소","표적부위 저항성","행동적 저항성","침투저항성"],"mnemonic":"저항기전 4형: 대사(효소분해)·표적(구조변이)·침투(장벽강화)·행동(회피) → '대표침행'으로 암기.","content":"<div class=\"theory-section\"><h4>농약저항성의 생화학적·행동적 발달기구</h4><p>해충이나 병원균이 농약에 대해 저항성을 나타내는 기전은 크게 다음과 같이 구분할 수 있다.</p><ul><li><strong>대사적(생화학적) 저항성</strong>: 에스터라아제(esterase), 사이토크롬 P450 모노옥시게나아제, 글루타치온 S-전이효소(GST) 등 해독효소의 활성이 증가하여 약제를 빠르게 분해·불활성화시킨다.</li><li><strong>표적부위 감수성 저하(표적부위 저항성)</strong>: 약제가 작용하는 효소나 수용체의 구조가 변이되어 약제가 결합하지 못하거나 결합력이 낮아진다.</li><li><strong>침투저항성</strong>: 큐티클(표피층)이 두꺼워지거나 조성이 변하여 약제의 체내 침투 속도가 느려진다.</li><li><strong>행동적 저항성(행동적 회피)</strong>: 약제가 처리된 장소나 표면과의 접촉을 피하는 방향으로 행동 양식이 바뀌어 노출 자체를 줄인다.</li></ul><p>실제 저항성 개체군에서는 이러한 기전이 단독 또는 복합적으로 작용하는 경우가 많다.</p></div>","relatedQuestions":["q206","q207","q208"]},
  {"id":"t051","level":"초급","subject":"농약학","topic":"보관·폐기와 방제장비","title":"농약의 안전한 보관·폐기와 방제 장비(분무기)","summary":"농약의 올바른 보관·폐기 방법과 배부식 분무기, 스피드스프레이어(SS기) 등 주요 방제 장비의 특징을 정리한다.","keywords":["농약보관","농약폐기","삼중세척","분무기","스피드스프레이어"],"mnemonic":"보관은 '서늘·건조·원래용기·잠금', 폐기는 '3회헹굼(삼중세척) 후 전용수거함'으로 암기.","content":"<div class=\"theory-section\"><h4>농약의 안전한 보관</h4><ul><li>직사광선을 피하고 서늘하며 건조하고 환기가 잘 되는 장소에 보관한다.</li><li>반드시 원래의 용기·포장에 라벨을 유지한 채 보관하며, 다른 용기에 옮겨 담지 않는다.</li><li>식품·사료·종자 등과 함께 보관하지 않으며, 어린이나 일반인의 접근을 막기 위해 잠금장치가 있는 곳에 보관한다.</li><li>유효기한을 확인하고 오래된 약제는 우선 사용하거나 규정에 따라 폐기한다.</li></ul><h4>농약의 안전한 폐기</h4><ul><li>사용 후 빈 용기는 물로 3회 이상 헹구는 삼중세척(트리플린싱)을 실시하고, 헹군 물은 방제액에 섞어 사용한다.</li><li>세척된 빈 용기는 일반 쓰레기와 분리하여 전용 수거함(농약 빈용기 수거함)에 배출한다.</li><li>남은 약제나 오염된 폐기물은 임의로 하천·토양에 버리지 않고 폐기물관리 관련 규정에 따라 처리한다.</li></ul><h4>방제 장비(분무기)의 종류</h4><div class=\"formula\">배부식(등짐)분무기 · 동력분무기 · 스피드스프레이어(SS기) · 미스트기(미립자 살포) · 무인헬기·드론(항공방제)</div><p>배부식 분무기는 소규모 밭작물에, 스피드스프레이어(SS기)는 송풍(바람)을 이용해 약액을 미립화하여 넓은 과수원에 주로 사용된다.</p></div>","relatedQuestions":["q209","q210"]},
  {"id":"t052","level":"초급","subject":"잡초방제학","topic":"잡초 방제법의 종합적 분류","title":"경종적·물리적·화학적·생물적 방제의 구분과 특징","summary":"잡초 방제법은 예방적 방제를 기본으로 하여 경종적(재배적)·물리적(기계적)·화학적·생물적 방제로 크게 나뉘며, 실제 현장에서는 이들을 병행하는 종합적 잡초관리(IWM)가 원칙이다.","keywords":["경종적방제","물리적방제","화학적방제","생물적방제","종합적잡초관리"],"mnemonic":"경·물·화·생 — 「경운하고, 물리적으로 뽑고, 화학약제 치고, 생물(천적)로 마무리」 순서로 외우면 4대 분류가 헷갈리지 않는다.","content":"<div class=\"theory-section\">\n<h4>1. 잡초 방제법의 4대 분류</h4>\n<p>잡초 방제는 단일 수단으로 완전 방제가 어렵기 때문에 여러 방법을 조합하는 것이 원칙이며, 병해충 방제와 유사하게 <strong>예방적 방제</strong>를 기본 전제로 하고 실제 실행 단계에서 아래 4가지로 구분한다.</p>\n<table class=\"compare-table\">\n<tr><th>구분</th><th>정의</th><th>주요 예시</th></tr>\n<tr><td>경종적(재배적) 방제</td><td>재배관리 방법을 조정하여 작물의 경합력을 높이고 잡초 발생을 억제</td><td>윤작, 밀식재배, 방제이앙, 피복작물 재배, 시비·관개 관리, 경합력 강한 품종 선택</td></tr>\n<tr><td>물리적(기계적) 방제</td><td>기계적·물리적 힘이나 환경조건을 이용해 잡초를 직접 제거</td><td>경운(쟁기질), 손제초(인력제초), 예취(베기), 화염제초, 피복재배(멀칭), 담수처리(논)</td></tr>\n<tr><td>화학적 방제</td><td>제초제를 이용하여 잡초의 생리작용을 저해·고사</td><td>토양처리제, 경엽처리제, 선택성·비선택성 제초제</td></tr>\n<tr><td>생물적 방제</td><td>잡초의 천적(곤충·병원균·동물) 또는 타감작용(알렐로파시)을 이용</td><td>우렁이농법, 오리농법, 잡초 전문 곤충·병원균 이용, 헤어리베치 등 피복작물의 타감물질</td></tr>\n</table></div>\n<div class=\"theory-section\"><h4>2. 방법별 특징 비교</h4>\n<ul>\n<li><strong>경종적 방제</strong>는 예방 효과는 크지만 이미 발생한 잡초에 대한 즉각적 방제력은 낮다.</li>\n<li><strong>물리적 방제</strong>는 약제 저항성 잡초에도 효과적이나 노동력과 비용 소모가 크고 반복작업이 필요하다.</li>\n<li><strong>화학적 방제</strong>는 방제효과가 빠르고 넓은 면적에 적용이 쉬우나 저항성 잡초 발생과 환경오염 우려가 있다.</li>\n<li><strong>생물적 방제</strong>는 친환경적이나 방제 속도가 느리고 효과가 환경조건에 좌우된다.</li>\n</ul></div>\n<div class=\"theory-section\"><h4>3. 종합적 잡초관리(IWM)</h4>\n<p>실제 영농현장에서는 어느 한 방법에 의존하지 않고 경종적 방법으로 잡초 발생 자체를 줄이면서, 물리적·화학적 방제를 조합하고, 필요시 생물적 방제를 보조 수단으로 활용하는 <strong>종합적 잡초관리(Integrated Weed Management, IWM)</strong>가 지속가능한 방제 원칙으로 강조된다.</p></div>","relatedQuestions":["q211","q212","q213","q214","q215"]},
  {"id":"t053","level":"중급","subject":"잡초방제학","topic":"밭 잡초 방제체계","title":"밭작물 제초제 처리 시기와 방법 (논과의 차이)","summary":"밭은 논과 달리 담수를 이용한 잡초 억제가 불가능하므로 파종전처리(PPI)·파종후출아전처리(PRE)·경엽처리(POST)의 시기 구분과 이랑재배·멀칭 등 물리적 방법의 병행이 핵심이다.","keywords":["밭잡초","PPI","PRE","POST","이랑재배","비닐멀칭"],"mnemonic":"밭은 물을 못 채우니 「전-전-후」로 외운다: 파종前혼화(PPI) → 파종後출아前(PRE) → 생육後경엽(POST).","content":"<div class=\"theory-section\"><h4>1. 밭과 논의 근본적 차이</h4>\n<p>논은 담수(물 채우기) 자체가 강력한 물리적 잡초 억제 수단이 되지만, <strong>밭은 상시 담수가 불가능</strong>하여 토양 표면이 건조·다습을 반복하므로 잡초 발생 양상이 다양하고 발생 시기도 여러 차례로 나뉜다. 이 때문에 밭에서는 제초제의 처리 시기 구분이 더욱 중요하다.</p></div>\n<div class=\"theory-section\"><h4>2. 밭 잡초 방제체계의 처리 시기 구분</h4>\n<table class=\"compare-table\">\n<tr><th>구분</th><th>영문 약어</th><th>처리 시점</th><th>특징</th></tr>\n<tr><td>파종전처리(토양혼화)</td><td>PPI (Pre-Planting Incorporation)</td><td>파종 전, 정지작업 시 토양에 혼화</td><td>휘발성·광분해성이 큰 약제에 적용, 균일 혼입이 중요</td></tr>\n<tr><td>파종후 출아전처리</td><td>PRE (Pre-emergence)</td><td>파종 직후 ~ 작물·잡초 출아 전</td><td>토양 표면에 처리층(barrier) 형성, 발아 잡초의 유근·유아 흡수 저해</td></tr>\n<tr><td>생육기 경엽처리</td><td>POST (Post-emergence)</td><td>작물·잡초 출아 후 생육기</td><td>이미 출현한 잡초의 잎·줄기에 직접 처리, 선택성 확보가 중요</td></tr>\n</table></div>\n<div class=\"theory-section\"><h4>3. 물리적 방법의 병행</h4>\n<ul>\n<li>밭작물은 <strong>이랑(두둑)재배</strong>가 일반적이므로 두둑에는 비닐멀칭을 병행하고, 고랑에는 제초제 처리나 중경제초를 실시하는 방식으로 구획을 나누어 관리한다.</li>\n<li>비닐멀칭은 차광 효과로 잡초 발아를 억제하는 물리적 방제이며 제초제 처리와 함께 쓰이는 경우가 많다.</li>\n<li>밭에서 문제가 되는 주요 잡초는 화본과의 바랭이·강아지풀, 광엽잡초의 명아주·쇠비름·깨풀 등이며, 이들은 발생시기가 서로 달라 1회 처리로는 방제가 어렵다.</li>\n</ul></div>","relatedQuestions":["q216","q217","q218","q219","q220"]},
  {"id":"t054","level":"중급","subject":"잡초방제학","topic":"제초제 처리 방법에 따른 분류","title":"전면처리·휴간처리와 토양처리·경엽처리의 실제 살포 방식","summary":"제초제 처리는 살포 범위에 따라 전면처리·휴간(줄)처리로, 작용 부위에 따라 토양처리·경엽처리로 구분되며 각각 요구되는 처리 조건과 살포 요령이 다르다.","keywords":["전면처리","휴간처리","토양처리제","경엽처리제","전착제"],"mnemonic":"토양처리=「땅에 막(barrier) 치고 비 기다리기」, 경엽처리=「잎에 붙여서 온몸으로 퍼뜨리기」로 구분해서 외운다.","content":"<div class=\"theory-section\"><h4>1. 살포 범위에 따른 분류</h4>\n<table class=\"compare-table\">\n<tr><th>구분</th><th>정의</th><th>적용 상황</th></tr>\n<tr><td>전면처리</td><td>포장 전체 면적에 고르게 제초제를 살포</td><td>잡초가 포장 전체에 고르게 발생하거나 예방적으로 처리할 때</td></tr>\n<tr><td>휴간처리(줄처리)</td><td>작물이 심긴 두둑(휴)은 피하고 고랑(휴간) 부분에만 좁은 띠 모양으로 살포</td><td>작물열 사이 잡초만 문제될 때, 약제 사용량 절감이 필요할 때</td></tr>\n</table>\n<p>휴간처리는 전면처리에 비해 약량과 비용을 줄일 수 있으나, 작물열 내 잡초는 별도의 인력제초 등으로 보완해야 하는 경우가 많다.</p></div>\n<div class=\"theory-section\"><h4>2. 작용 부위에 따른 분류: 토양처리제 vs 경엽처리제</h4>\n<table class=\"compare-table\">\n<tr><th>구분</th><th>토양처리제</th><th>경엽처리제</th></tr>\n<tr><td>처리 대상</td><td>토양 표면(주로 미출아 잡초 종자·유식물)</td><td>이미 출현한 잡초의 잎과 줄기</td></tr>\n<tr><td>처리 시기</td><td>파종 전후, 잡초 발생 전</td><td>잡초 출현 후 생육 초기(보통 3~5엽기)</td></tr>\n<tr><td>작용 기작</td><td>토양 중 처리층(barrier)을 형성해 발아하는 잡초의 유근·유아가 통과하며 흡수</td><td>잎의 표피를 통해 흡수되어 식물체 내로 이행(전신형) 또는 접촉 부위만 고사(접촉형)</td></tr>\n<tr><td>효과 발현 조건</td><td>처리 후 적절한 강우 또는 관수로 약제가 토양에 스며들어야 효과 발현</td><td>살포 시 잡초 잎 표면에 고르게 부착되어야 하며, 전착제 병용으로 부착·흡수 촉진</td></tr>\n<tr><td>기상 영향</td><td>가뭄 시 처리층 형성 불량으로 효과 저하</td><td>강우 시 씻겨나가 효과 저하, 살포 후 일정 시간 무강우 필요</td></tr>\n</table></div>\n<div class=\"theory-section\"><h4>3. 실제 살포상의 유의점</h4>\n<ul>\n<li>토양처리제는 입제 또는 유제 형태로 균일하게 살포하는 것이 중요하며, 살포 후 얕게 혼입하거나 강우를 기다려 처리층을 형성시킨다.</li>\n<li>경엽처리제는 잡초의 생육단계(엽수)가 진행될수록 흡수·이행 효율이 떨어지므로 적기 살포가 방제효과를 좌우한다.</li>\n<li>전면처리와 휴간처리, 토양처리와 경엽처리는 서로 다른 기준(범위/부위)의 분류이므로 실제로는 \"휴간부에 토양처리제를 전면 살포\"하는 등 조합하여 사용한다.</li>\n</ul></div>","relatedQuestions":["q221","q222","q223","q224","q225"]}
];
