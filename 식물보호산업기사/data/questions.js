const QUESTIONS = [
  // ═══════════════════════════════════════════
  // 재배학 (35문제) - 실기 최대 비중 과목
  // ═══════════════════════════════════════════

  // ── 작물 분류(t001) ──
  {id:"q001",level:"초급",type:"ox",subject:"재배학",topic:"작물 분류",
   question:"C4작물은 C3작물보다 광호흡이 거의 없어 고온·강광 조건에서 광합성 효율이 높다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! C4작물(옥수수, 수수, 사탕수수 등)은 광호흡이 거의 없어 고온·강광 환경에서 C3작물보다 광합성 효율이 높아요.",linkedTheory:"t001"},

  {id:"q002",level:"초급",type:"ox",subject:"재배학",topic:"작물 분류",
   question:"옥수수, 수수, 사탕수수는 대표적인 C4작물이다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 옥수수·수수·사탕수수·기장은 대표적인 C4작물이에요. 벼·보리·콩 등 대부분의 작물은 C3작물이에요.",linkedTheory:"t001"},

  {id:"q003",level:"초급",type:"multiple",subject:"재배학",topic:"작물 분류",
   question:"다음 중 CAM 식물의 특징으로 옳은 것은?",
   choices:["낮에 기공을 열어 이산화탄소를 고정한다","광호흡이 매우 활발하다","밤에 기공을 열어 이산화탄소를 고정해 건조에 적응한다","고온다습한 환경에서만 생육한다","질소고정 능력이 뛰어나다"],
   answer:2,
   explanation:"CAM 식물(선인장, 파인애플, 돌나물과)은 밤에 기공을 열어 이산화탄소를 고정하고 낮에는 기공을 닫아 수분 손실을 막는 방식으로 건조 환경에 적응해요.",linkedTheory:"t001"},

  {id:"q004",level:"초급",type:"multiple",subject:"재배학",topic:"작물 분류",
   question:"공예작물로만 바르게 묶인 것은?",
   choices:["벼, 보리, 콩","목화, 담배, 사탕수수","배추, 무, 상추","사과, 배, 포도","진달래, 장미, 국화"],
   answer:1,
   explanation:"공예작물은 가공을 목적으로 재배하는 작물로 목화·담배·사탕수수·참깨 등이 있어요. 벼·보리·콩은 식용작물, 배추·무·상추는 원예작물(채소)이에요.",linkedTheory:"t001"},

  {id:"q005",level:"초급",type:"short",subject:"재배학",topic:"작물 분류",
   question:"탄소 3개 화합물(PGA)을 최초 광합성 산물로 생성하며 광호흡이 있는 광합성 경로의 명칭을 쓰시오.",
   answer:"C3(C3 광합성, 캘빈회로)",
   explanation:"C3 광합성은 이산화탄소가 캘빈회로를 통해 탄소 3개짜리 화합물(PGA)로 먼저 고정되는 경로로, 벼·보리·콩 등 대부분의 작물이 여기에 해당해요.",linkedTheory:"t001"},

  // ── 온도와 생육(t002) ──
  {id:"q006",level:"초급",type:"ox",subject:"재배학",topic:"온도와 생육",
   question:"유효적산온도는 일평균기온이 생육한계온도를 초과한 값을 생육기간 동안 누적한 것이다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 유효적산온도 = Σ(일평균기온 − 생육한계온도)로, 작물의 생육 단계 예측이나 수확기 추정에 활용돼요.",linkedTheory:"t002"},

  {id:"q007",level:"초급",type:"ox",subject:"재배학",topic:"온도와 생육",
   question:"서리에 의한 피해는 열해라고 부른다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 서리에 의한 피해는 상해(霜害)라고 해요. 열해는 고온에 의한 장해를 말해요.",linkedTheory:"t002"},

  {id:"q008",level:"초급",type:"multiple",subject:"재배학",topic:"온도와 생육",
   question:"빙점 이하의 저온으로 식물체 세포 내에 결빙이 일어나 조직이 파괴되는 장해는?",
   choices:["냉해","동해","상해","한해","습해"],
   answer:1,
   explanation:"동해는 빙점 이하의 온도에서 세포 내 결빙이 일어나 조직이 파괴되는 장해예요. 냉해는 빙점 이상의 이상저온에서 생리기능이 저하되는 것이에요.",linkedTheory:"t002"},

  {id:"q009",level:"초급",type:"multiple",subject:"재배학",topic:"온도와 생육",
   question:"0°C 이상의 이상저온으로 생리기능이 저하되는 여름철 벼의 대표적 저온장해는?",
   choices:["동해","상해","냉해","열해","한해"],
   answer:2,
   explanation:"냉해는 빙점 이상의 이상저온으로 생리기능이 저하되는 장해로, 벼의 냉해가 대표적이에요. 동해(빙점 이하 결빙)와 구분해야 해요.",linkedTheory:"t002"},

  {id:"q010",level:"초급",type:"short",subject:"재배학",topic:"온도와 생육",
   question:"작물의 생육 예측이나 수확기 추정에 활용되며, 일평균기온에서 생육한계온도를 뺀 값을 생육기간 동안 합산한 지표의 이름을 쓰시오.",
   answer:"유효적산온도",
   explanation:"유효적산온도는 작물의 생육 단계 진행을 예측하고 파종·수확 시기를 결정하는 데 널리 활용되는 지표예요.",linkedTheory:"t002"},

  // ── 수분과 재배(t003) ──
  {id:"q011",level:"초급",type:"ox",subject:"재배학",topic:"수분과 재배",
   question:"요수량은 건물 1g을 생산하는 데 필요한 수분량을 의미한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 요수량이 낮을수록 수분 이용 효율이 높은 작물이에요. C4작물이 대체로 요수량이 낮은 편이에요.",linkedTheory:"t003"},

  {id:"q012",level:"초급",type:"ox",subject:"재배학",topic:"수분과 재배",
   question:"습해는 토양 수분 부족으로 발생하는 장해이다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 습해는 토양 과습으로 뿌리가 산소 부족을 겪어 발생하는 장해예요. 수분 부족으로 인한 장해는 한해(가뭄피해)예요.",linkedTheory:"t003"},

  {id:"q013",level:"초급",type:"multiple",subject:"재배학",topic:"수분과 재배",
   question:"토양 과습으로 뿌리가 산소 부족을 겪어 갈변·부패하는 장해를 방지하는 대책으로 가장 적절한 것은?",
   choices:["관수량 증가","배수 개선 및 이랑 재배","질소 시비 증가","차광 재배","밀식 재배"],
   answer:1,
   explanation:"습해는 과습으로 인한 뿌리 산소 부족이 원인이므로, 배수를 개선하고 이랑을 높여 재배하는 것이 가장 기본적인 대책이에요.",linkedTheory:"t003"},

  {id:"q014",level:"초급",type:"short",subject:"재배학",topic:"수분과 재배",
   question:"작물이 건물 1g을 생산하는 데 필요한 수분량(g)을 가리키는 용어를 쓰시오.",
   answer:"요수량",
   explanation:"요수량은 작물별 수분 이용 효율을 비교하는 대표적인 지표예요.",linkedTheory:"t003"},

  // ── 토양(t004) ──
  {id:"q015",level:"중급",type:"ox",subject:"재배학",topic:"토양",
   question:"떼알구조(입단구조)는 홑알구조보다 통기성과 보수성이 모두 우수하다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 떼알구조는 토양 입자들이 뭉쳐 크고 작은 공극을 함께 가지므로 통기성·보수성·배수성이 모두 좋아요.",linkedTheory:"t004"},

  {id:"q016",level:"중급",type:"ox",subject:"재배학",topic:"토양",
   question:"대부분의 작물은 강산성 토양(pH 4 이하)에서 생육이 가장 왕성하다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 대부분의 작물은 pH 6~7(약산성~중성)에서 생육이 가장 좋아요. 강산성 토양은 양분 흡수를 방해해 생육에 불리해요.",linkedTheory:"t004"},

  {id:"q017",level:"중급",type:"multiple",subject:"재배학",topic:"토양",
   question:"산성화된 토양을 교정하기 위해 일반적으로 시용하는 자재는?",
   choices:["요소","석회(소석회)","황산암모늄","염화칼륨","과인산석회"],
   answer:1,
   explanation:"산성토양은 석회(소석회) 시용으로 pH를 높여 교정해요. 요소·황산암모늄 등 일부 질소질 비료는 오히려 토양을 산성화시킬 수 있어요.",linkedTheory:"t004"},

  {id:"q018",level:"중급",type:"multiple",subject:"재배학",topic:"토양",
   question:"양이온교환용량(CEC)이 높을수록 나타나는 특징으로 옳은 것은?",
   choices:["비료 성분의 보유력이 낮아진다","토양이 급격히 산성화된다","비료 성분을 붙잡아두는 능력이 커진다","통기성이 크게 나빠진다","작물 생육에 항상 불리하다"],
   answer:2,
   explanation:"CEC(양이온교환용량)가 높을수록 토양이 양분(양이온)을 붙잡아두는 능력이 커져 비료 유실이 줄고 지력이 좋아져요. 점토·부식질 함량이 높을수록 CEC가 커요.",linkedTheory:"t004"},

  {id:"q019",level:"중급",type:"short",subject:"재배학",topic:"토양",
   question:"점토와 부식질 함량이 높을수록 커지며, 토양이 비료 성분(양이온)을 흡착·보유하는 능력을 나타내는 용어의 약자를 쓰시오.",
   answer:"CEC(양이온교환용량)",
   explanation:"CEC가 높은 토양일수록 비료 성분을 오래 보유할 수 있어 시비 효율이 좋아요.",linkedTheory:"t004"},

  // ── 비료 3요소(t005) ──
  {id:"q020",level:"중급",type:"ox",subject:"재배학",topic:"비료 3요소",
   question:"질소가 부족하면 아래쪽(하위) 잎부터 황화 증상이 나타난다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 질소는 이동성이 커서 부족하면 식물체가 아래쪽 오래된 잎의 질소를 새 잎으로 재분배해요. 그래서 하위엽부터 황화 증상이 나타나요.",linkedTheory:"t005"},

  {id:"q021",level:"중급",type:"ox",subject:"재배학",topic:"비료 3요소",
   question:"칼리가 결핍되면 잎이 자주색(적자색)으로 변하는 것이 특징이다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 잎이 자주색으로 변하는 것은 인산 결핍의 특징이에요. 칼리가 부족하면 잎 가장자리가 황화·괴사하는 증상이 나타나요.",linkedTheory:"t005"},

  {id:"q022",level:"중급",type:"multiple",subject:"재배학",topic:"비료 3요소",
   question:"뿌리 발달과 개화·결실을 촉진하며 결핍 시 잎이 자주색으로 변하는 비료 성분은?",
   choices:["질소","인산","칼리","석회","마그네슘"],
   answer:1,
   explanation:"인산은 뿌리 발달과 개화·결실에 중요한 역할을 하며, 결핍되면 잎이 자주색(적자색)으로 변하는 것이 특징이에요.",linkedTheory:"t005"},

  {id:"q023",level:"중급",type:"short",subject:"재배학",topic:"비료 3요소",
   question:"잎 가장자리가 황화되고 괴사(마름) 증상이 나타나며, 줄기를 튼튼하게 하고 내병·내한성을 높이는 비료 3요소 중 하나를 쓰시오.",
   answer:"칼리(K, 칼륨)",
   explanation:"칼리는 줄기를 강화하고 내병성·내한성을 높이는 역할을 하며, 결핍 시 잎 가장자리 황화·괴사 증상이 나타나요.",linkedTheory:"t005"},

  // ── 종자와 발아(t006) ──
  {id:"q024",level:"중급",type:"ox",subject:"재배학",topic:"종자와 발아",
   question:"발아의 3요소는 수분, 온도, 산소이다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 발아에는 수분·온도·산소가 필수 3요소이며, 일부 작물은 광(빛) 조건도 발아에 영향을 줘요.",linkedTheory:"t006"},

  {id:"q025",level:"중급",type:"ox",subject:"재배학",topic:"종자와 발아",
   question:"상추 종자는 어두운 곳에서 발아가 촉진되는 혐광성 종자이다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 상추는 빛이 있어야 발아가 촉진되는 호광성(광발아성) 종자예요.",linkedTheory:"t006"},

  {id:"q026",level:"중급",type:"multiple",subject:"재배학",topic:"종자와 발아",
   question:"콩과 작물처럼 종피가 단단해 수분 흡수가 어려워 나타나는 휴면과, 그 타파 방법으로 옳은 것은?",
   choices:["생리적 휴면 - 저온처리","경실종자 휴면 - 종피 상처처리(스카리피케이션)","광휴면 - 차광처리","화학적 휴면 - 질소시비","기계적 휴면 - 밀식재배"],
   answer:1,
   explanation:"콩과 작물 등 종피가 단단한 종자는 경실종자 휴면에 해당하며, 종피에 상처를 내는 스카리피케이션이나 황산 처리로 휴면을 타파해요.",linkedTheory:"t006"},

  {id:"q027",level:"중급",type:"short",subject:"재배학",topic:"종자와 발아",
   question:"종피가 단단하여 수분 흡수가 어려워 발아가 지연되는 콩과 작물 등의 종자를 가리키는 용어를 쓰시오.",
   answer:"경실종자",
   explanation:"경실종자는 상처처리나 황산 처리로 종피의 수분 투과성을 높여 발아를 유도해요.",linkedTheory:"t006"},

  // ── 상적발육설(t007) ──
  {id:"q028",level:"고급",type:"ox",subject:"재배학",topic:"상적발육설",
   question:"보리, 밀과 같은 장일식물은 일장이 짧아지는 가을에 개화가 촉진된다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 장일식물은 일장이 길어지는 시기(늦봄~초여름)에 개화가 촉진돼요. 일장이 짧아질 때 개화하는 것은 단일식물이에요.",linkedTheory:"t007"},

  {id:"q029",level:"고급",type:"ox",subject:"재배학",topic:"상적발육설",
   question:"벼와 콩은 단일식물에 속한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 벼, 콩, 국화, 담배는 일장이 짧아질 때(가을) 개화가 촉진되는 단일식물이에요.",linkedTheory:"t007"},

  {id:"q030",level:"고급",type:"multiple",subject:"재배학",topic:"상적발육설",
   question:"일정 기간의 저온을 거쳐야 개화가 유도되는 현상을 무엇이라 하는가?",
   choices:["일장효과","춘화처리(버널리제이션)","경화처리","순화처리","광주기유도"],
   answer:1,
   explanation:"춘화처리(버널리제이션)는 생육 중 일정 기간 저온을 거쳐야 개화가 유도되는 현상으로, 보리·밀 등 월년생 작물에서 중요해요.",linkedTheory:"t007"},

  {id:"q031",level:"고급",type:"short",subject:"재배학",topic:"상적발육설",
   question:"일장과 관계없이 개화하는 식물 유형을 무엇이라 하며, 대표 작물 1가지를 쓰시오.",
   answer:"중성식물 (예: 토마토, 오이)",
   explanation:"중성식물은 일장의 길이와 관계없이 일정한 생육 단계에 도달하면 개화해요.",linkedTheory:"t007"},

  // ── 식물생장조절물질(t008) ──
  {id:"q032",level:"고급",type:"ox",subject:"재배학",topic:"식물생장조절물질",
   question:"지베렐린은 씨없는 포도 생산(단위결과)에 이용된다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 지베렐린 처리는 씨없는 포도(단위결과) 생산과 절간 신장, 휴면 타파, 발아 촉진 등에 활용돼요.",linkedTheory:"t008"},

  {id:"q033",level:"고급",type:"ox",subject:"재배학",topic:"식물생장조절물질",
   question:"에틸렌은 과실의 노화와 낙과를 억제하는 호르몬이다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 에틸렌은 과실의 후숙·노화·낙과를 촉진하는 호르몬이에요. 에테폰이 대표적인 에틸렌계 처리제예요.",linkedTheory:"t008"},

  {id:"q034",level:"고급",type:"multiple",subject:"재배학",topic:"식물생장조절물질",
   question:"기공을 닫아 수분 스트레스에 대응하고 휴면을 유도하는 식물호르몬은?",
   choices:["옥신","지베렐린","시토키닌","에틸렌","ABA(아브시스산)"],
   answer:4,
   explanation:"ABA(아브시스산)는 대표적인 스트레스 호르몬으로, 수분 스트레스 시 기공을 닫고 휴면을 유도하는 역할을 해요.",linkedTheory:"t008"},

  {id:"q035",level:"고급",type:"short",subject:"재배학",topic:"식물생장조절물질",
   question:"삽목 시 발근을 촉진하기 위해 처리하는 대표적인 식물생장조절물질(호르몬)의 이름을 쓰시오.",
   answer:"옥신(auxin, 예: IBA·NAA)",
   explanation:"옥신은 정단우세와 세포 신장 외에도 삽목 시 뿌리 발생(발근)을 촉진하는 데 널리 활용돼요.",linkedTheory:"t008"},

  // ═══════════════════════════════════════════
  // 식물병리학 (18문제)
  // ═══════════════════════════════════════════

  // ── 병 진단 기초(t009) ──
  {id:"q036",level:"초급",type:"ox",subject:"식물병리학",topic:"병 진단 기초",
   question:"곰팡이의 균사나 포자처럼 병원체 자체가 눈에 보이는 것을 표징이라 한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 표징은 병원체 자체가 육안으로 보이는 부분(균사, 포자, 균핵, 세균 점질물 등)을 말해요.",linkedTheory:"t009"},

  {id:"q037",level:"초급",type:"ox",subject:"식물병리학",topic:"병 진단 기초",
   question:"잎의 반점, 위축, 황화와 같은 식물체의 반응은 표징에 해당한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 반점·위축·황화처럼 식물체 자체가 나타내는 반응은 병징이에요. 표징은 병원체 자체가 보이는 것이에요.",linkedTheory:"t009"},

  {id:"q038",level:"초급",type:"multiple",subject:"식물병리학",topic:"병 진단 기초",
   question:"코흐의 원칙에서 가장 먼저 수행하는 단계는?",
   choices:["건전한 식물에 접종한다","병든 시료에서 병원체를 분리한다","순수배양한다","재분리하여 확인한다","약제를 처리한다"],
   answer:1,
   explanation:"코흐의 원칙은 ①병원체 분리 → ②순수배양 → ③접종하여 재현 → ④재분리 확인 순서로 진행돼요.",linkedTheory:"t009"},

  {id:"q039",level:"초급",type:"short",subject:"식물병리학",topic:"병 진단 기초",
   question:"식물체 자체가 나타내는 반점·위축·황화 등의 반응성 변화를 가리키는 용어를 쓰시오(병원체 자체가 보이는 표징과 구분).",
   answer:"병징",
   explanation:"병징과 표징을 구분하는 것은 병 진단의 가장 기초적인 개념이에요.",linkedTheory:"t009"},

  // ── 종합적 방제(t010) ──
  {id:"q040",level:"초급",type:"ox",subject:"식물병리학",topic:"종합적 방제",
   question:"윤작과 저항성 품종 재배는 경종적 방제에 해당한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 경종적 방제는 재배 관리를 통해 병 발생을 줄이는 방법으로 윤작, 저항성 품종, 합리적 시비, 배수 개선 등이 있어요.",linkedTheory:"t010"},

  {id:"q041",level:"초급",type:"ox",subject:"식물병리학",topic:"종합적 방제",
   question:"식물검역은 화학적 방제에 해당한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 식물검역은 법적 방제에 해당해요. 화학적 방제는 살균제 등 농약을 살포하는 것이에요.",linkedTheory:"t010"},

  {id:"q042",level:"초급",type:"multiple",subject:"식물병리학",topic:"종합적 방제",
   question:"태양열소독, 이병 잔재물 소각과 같은 방제법의 분류는?",
   choices:["경종적 방제","물리적 방제","생물적 방제","화학적 방제","법적 방제"],
   answer:1,
   explanation:"태양열소독이나 이병 잔재물 제거·소각은 물리적 방제에 해당해요.",linkedTheory:"t010"},

  {id:"q043",level:"초급",type:"short",subject:"식물병리학",topic:"종합적 방제",
   question:"병든 식물이나 종자의 국내 반입을 막기 위해 실시하는, 국가 차원의 방제법을 무엇이라 하는가?",
   answer:"법적 방제(식물검역)",
   explanation:"법적 방제는 식물검역 제도를 통해 국내 미발생 병해충의 유입을 차단하는 방법이에요.",linkedTheory:"t010"},

  // ── 토양전염병 관리(t011) ──
  {id:"q044",level:"중급",type:"ox",subject:"식물병리학",topic:"토양전염병 관리",
   question:"덩굴쪼김병 방제에는 저항성 대목을 이용한 접목재배가 효과적이다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 박과류의 덩굴쪼김병은 토양전염성이 강해 저항성 대목에 접목하는 재배법이 널리 쓰여요.",linkedTheory:"t011"},

  {id:"q045",level:"중급",type:"ox",subject:"식물병리학",topic:"토양전염병 관리",
   question:"연작지에서는 토양전염성 병해 발생이 감소하는 경향을 보인다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 연작지는 병원균 밀도가 누적되어 토양전염성 병해(역병, 덩굴쪼김병 등) 발생이 오히려 심해져요. 윤작이 필요한 이유예요.",linkedTheory:"t011"},

  {id:"q046",level:"중급",type:"multiple",subject:"식물병리학",topic:"토양전염병 관리",
   question:"여름철 비닐로 토양을 피복하여 고온으로 병원균 밀도를 낮추는 방법은?",
   choices:["객토","윤작","태양열소독","석회시용","배토"],
   answer:2,
   explanation:"태양열소독은 여름철 고온기에 비닐로 토양을 피복해 지온을 높여 병원균과 해충 밀도를 낮추는 방법이에요.",linkedTheory:"t011"},

  {id:"q047",level:"중급",type:"short",subject:"식물병리학",topic:"토양전염병 관리",
   question:"병원균이 없는 새로운 흙으로 표토를 교체하여 토양전염병을 관리하는 방법을 쓰시오.",
   answer:"객토",
   explanation:"객토는 병원균 밀도가 높은 토양을 새 흙으로 교체하는 물리적 관리법이에요.",linkedTheory:"t011"},

  // ── 저항성 품종과 검역(t012) ──
  {id:"q048",level:"중급",type:"ox",subject:"식물병리학",topic:"저항성 품종과 검역",
   question:"수직저항성은 특정 병원균 레이스에만 강하게 작용해 병원균 변이로 무너지기 쉽다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 수직저항성은 특정 레이스에 대해서만 강한 저항성을 보여, 병원균이 변이하면 저항성이 쉽게 무너질 수 있어요.",linkedTheory:"t012"},

  {id:"q049",level:"중급",type:"multiple",subject:"식물병리학",topic:"저항성 품종과 검역",
   question:"여러 병원균 레이스에 고르게 낮은 수준으로 저항성을 나타내어 지속성이 높은 저항성 유형은?",
   choices:["수직저항성","수평저항성","일시저항성","단일저항성","완전저항성"],
   answer:1,
   explanation:"수평저항성은 여러 레이스에 걸쳐 고르게 낮은 저항성을 나타내지만, 병원균 변이에 덜 취약해 지속성이 높아요.",linkedTheory:"t012"},

  {id:"q050",level:"중급",type:"short",subject:"식물병리학",topic:"저항성 품종과 검역",
   question:"국내에 발생하지 않는 병해충이 수입 식물을 통해 유입되는 것을 막기 위한 국가 제도를 쓰시오.",
   answer:"식물검역",
   explanation:"식물검역은 위험 병해충의 국내 유입을 차단하는 법적 방제 제도예요.",linkedTheory:"t012"},

  // ── 과수 병해(t013) ──
  {id:"q051",level:"고급",type:"ox",subject:"식물병리학",topic:"과수 병해",
   question:"사과 부란병은 줄기·가지에 적갈색 궤양이 생기고 알코올 냄새가 나는 것이 특징이다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 사과 부란병은 Valsa속 곰팡이가 원인이며, 줄기·가지의 적갈색 궤양과 특유의 알코올 냄새가 진단 포인트예요.",linkedTheory:"t013"},

  {id:"q052",level:"고급",type:"multiple",subject:"식물병리학",topic:"과수 병해",
   question:"저온다습한 봄철 개화기 전후에 사과·배의 잎과 과실에 검은 그을음 모양 반점을 일으키는 병은?",
   choices:["부란병","검은별무늬병","흰가루병","역병","탄저병"],
   answer:1,
   explanation:"검은별무늬병(Venturia속)은 저온다습한 봄철에 잎·과실에 검은 그을음 모양 반점을 형성해요.",linkedTheory:"t013"},

  {id:"q053",level:"고급",type:"short",subject:"식물병리학",topic:"과수 병해",
   question:"사과 부란병의 병원균이 속하는 곰팡이 속명을 쓰시오.",
   answer:"Valsa(발사속)",
   explanation:"사과 부란병은 Valsa속 자낭균에 의해 발생해요.",linkedTheory:"t013"},

  // ═══════════════════════════════════════════
  // 농림해충학 (14문제)
  // ═══════════════════════════════════════════

  // ── 해충 예찰(t014) ──
  {id:"q054",level:"초급",type:"ox",subject:"농림해충학",topic:"해충 예찰",
   question:"방제 비용과 피해액이 같아지는 밀도를 경제적피해수준이라 한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 경제적피해수준은 방제에 드는 비용과 방제하지 않았을 때의 피해액이 같아지는 해충 밀도예요.",linkedTheory:"t014"},

  {id:"q055",level:"초급",type:"ox",subject:"농림해충학",topic:"해충 예찰",
   question:"대부분의 해충은 노숙 유충(종령) 시기에 방제하는 것이 가장 효과적이다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 대부분 어린 유충(1~3령) 시기가 약제에 더 취약하고 피해가 확산되기 전이라 방제 효과가 가장 높아요.",linkedTheory:"t014"},

  {id:"q056",level:"초급",type:"multiple",subject:"농림해충학",topic:"해충 예찰",
   question:"특정 해충 성충을 유인해 발생 시기를 예찰하는 데 주로 쓰이는 도구는?",
   choices:["황색 끈끈이트랩","청색 끈끈이트랩","페로몬 트랩","포충망","유아등"],
   answer:2,
   explanation:"페로몬 트랩은 특정 해충의 성 페로몬으로 해당 종의 성충만 선택적으로 유인해 발생 시기를 예찰하는 데 쓰여요.",linkedTheory:"t014"},

  {id:"q057",level:"초급",type:"short",subject:"농림해충학",topic:"해충 예찰",
   question:"실제로 방제 조치를 시작해야 하는 밀도 기준으로, 경제적피해수준보다 낮게 설정하는 개념을 쓰시오.",
   answer:"방제한계밀도(경제적피해허용수준)",
   explanation:"방제한계밀도는 경제적피해수준에 도달하기 전에 미리 방제를 시작할 수 있도록 낮게 설정하는 실무적 기준이에요.",linkedTheory:"t014"},

  // ── 종합적 해충관리(t015) ──
  {id:"q058",level:"중급",type:"ox",subject:"농림해충학",topic:"종합적 해충관리",
   question:"IPM은 화학적 방제에만 의존하지 않고 여러 방제법을 종합적으로 병용하는 방식이다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! IPM(종합적 해충관리)은 경종적·물리적·생물적·화학적·법적 방제를 상황에 맞게 병용하는 체계예요.",linkedTheory:"t015"},

  {id:"q059",level:"중급",type:"ox",subject:"농림해충학",topic:"종합적 해충관리",
   question:"IPM에서는 천적을 보호하기 위해 선택적 약제보다 광범위 살충제를 우선 사용한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! IPM에서는 천적 보호를 위해 광범위 살충제보다 선택적(천적에 안전한) 약제를 우선 고려해요.",linkedTheory:"t015"},

  {id:"q060",level:"중급",type:"multiple",subject:"농림해충학",topic:"종합적 해충관리",
   question:"IPM(종합적 해충관리)의 목표로 가장 적절한 것은?",
   choices:["해충을 완전히 박멸한다","해충 밀도를 경제적피해수준 이하로 관리한다","화학적 방제만으로 최대 효과를 낸다","천적을 제거해 해충을 억제한다","예찰 없이 정기적으로 살포한다"],
   answer:1,
   explanation:"IPM의 목표는 해충을 완전히 없애는 것이 아니라, 경제적피해수준 이하로 밀도를 관리하는 것이에요.",linkedTheory:"t015"},

  {id:"q061",level:"중급",type:"short",subject:"농림해충학",topic:"종합적 해충관리",
   question:"경종적·물리적·생물적·화학적·법적 방제를 상황에 맞게 종합적으로 병용하는 해충 관리 체계의 영문 약자를 쓰시오.",
   answer:"IPM",
   explanation:"IPM(Integrated Pest Management)은 종합적 해충관리를 뜻해요.",linkedTheory:"t015"},

  // ── 저장해충·위생해충(t016) ──
  {id:"q062",level:"중급",type:"ox",subject:"농림해충학",topic:"저장해충·위생해충",
   question:"쌀바구미와 화랑곡나방은 대표적인 저장곡물해충이다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 쌀바구미, 화랑곡나방, 보리나방은 수확 후 저장 중인 곡물을 가해하는 대표적인 저장곡물해충이에요.",linkedTheory:"t016"},

  {id:"q063",level:"중급",type:"multiple",subject:"농림해충학",topic:"저장해충·위생해충",
   question:"질병 매개나 위생상의 문제를 주로 일으켜 작물 해충과 방제 목적이 다른 해충 그룹은?",
   choices:["저장해충","위생해충","돌발해충","이주해충","토양해충"],
   answer:1,
   explanation:"위생해충(모기, 파리, 바퀴 등)은 작물 피해보다 질병 매개·위생 문제가 주된 방제 이유예요.",linkedTheory:"t016"},

  {id:"q064",level:"중급",type:"short",subject:"농림해충학",topic:"저장해충·위생해충",
   question:"수확 후 저장 중인 곡물을 가해하는 대표적인 딱정벌레류 저장해충 1가지를 쓰시오.",
   answer:"쌀바구미(예시)",
   explanation:"쌀바구미 외에도 화랑곡나방, 보리나방 등이 저장곡물해충으로 자주 출제돼요.",linkedTheory:"t016"},

  // ── 생물적 방제 심화(t017) ──
  {id:"q065",level:"고급",type:"ox",subject:"농림해충학",topic:"생물적 방제 심화",
   question:"고치벌과 맵시벌은 기생성 천적에 해당한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 고치벌·맵시벌·진디벌은 해충 체내·체외에 알을 낳아 기생하는 대표적인 기생성 천적이에요.",linkedTheory:"t017"},

  {id:"q066",level:"고급",type:"multiple",subject:"농림해충학",topic:"생물적 방제 심화",
   question:"나방류 유충에 특이적으로 작용하며 천적과 인축에 안전한 미생물 살충제는?",
   choices:["글리포세이트","Bt제(바실루스 투링기엔시스)","보르도액","메타락실","이미다클로프리드"],
   answer:1,
   explanation:"Bt제는 나방류 유충에 특이적으로 작용하는 세균 살충제로, 천적·인축에 안전해 IPM에서 널리 쓰여요.",linkedTheory:"t017"},

  {id:"q067",level:"고급",type:"short",subject:"농림해충학",topic:"생물적 방제 심화",
   question:"천적을 방사한 포장에서 함께 사용하면 천적까지 피해를 입힐 수 있어 피해야 하는 약제 유형을 쓰시오.",
   answer:"광범위(비선택적) 살충제",
   explanation:"천적 활용 포장에서는 천적에 안전한 선택적 약제를 사용하는 것이 원칙이에요.",linkedTheory:"t017"},

  // ═══════════════════════════════════════════
  // 농약학 (14문제)
  // ═══════════════════════════════════════════

  // ── 농약 제형(t018) ──
  {id:"q068",level:"초급",type:"ox",subject:"농약학",topic:"농약 제형",
   question:"유제(EC)는 유기용제와 계면활성제를 이용해 물에 유화시켜 살포하는 제형이다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 유제(EC)는 유기용제에 원제를 녹이고 계면활성제를 더해 물에 타면 유화되어 살포되는 제형이에요.",linkedTheory:"t018"},

  {id:"q069",level:"초급",type:"ox",subject:"농약학",topic:"농약 제형",
   question:"입제(GR)는 물에 타서 살포해야 하는 분말 형태의 제형이다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 입제(GR)는 알갱이 형태로 물에 타지 않고 그대로 토양에 처리하는 제형이에요. 물에 타는 분말 제형은 수화제(WP)예요.",linkedTheory:"t018"},

  {id:"q070",level:"초급",type:"multiple",subject:"농약학",topic:"농약 제형",
   question:"이앙 동시 처리 등 토양처리용으로 널리 쓰이는 알갱이 형태의 제형 기호는?",
   choices:["WP","EC","SC","GR","DP"],
   answer:3,
   explanation:"입제(GR)는 알갱이 형태로 토양에 직접 처리하며, 이앙 동시 처리 등에 널리 쓰여요.",linkedTheory:"t018"},

  {id:"q071",level:"초급",type:"short",subject:"농약학",topic:"농약 제형",
   question:"물에 타서 살포하는 분말 형태의 제형으로, 기호 WP로 표기되는 제형의 이름을 쓰시오.",
   answer:"수화제",
   explanation:"수화제(WP, Wettable Powder)는 분말을 물에 타서 살포하는 가장 널리 쓰이는 제형 중 하나예요.",linkedTheory:"t018"},

  // ── 작용기작과 저항성(t019) ──
  {id:"q072",level:"중급",type:"ox",subject:"농약학",topic:"작용기작과 저항성",
   question:"같은 작용기작 그룹의 농약을 연용하면 저항성이 빨리 발달할 수 있다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 동일 작용기작 그룹을 연속 사용하면 그 방식에 강한 개체가 선발·증식되어 저항성이 빨리 발달해요.",linkedTheory:"t019"},

  {id:"q073",level:"중급",type:"ox",subject:"농약학",topic:"작용기작과 저항성",
   question:"제초제의 작용기작은 FRAC 코드로 분류한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 제초제의 작용기작 분류는 HRAC 코드예요. FRAC는 살균제, IRAC는 살충제의 작용기작 분류 체계예요.",linkedTheory:"t019"},

  {id:"q074",level:"중급",type:"multiple",subject:"농약학",topic:"작용기작과 저항성",
   question:"살충제의 작용기작을 분류하는 국제 체계는?",
   choices:["FRAC","HRAC","IRAC","PLS","GAP"],
   answer:2,
   explanation:"IRAC(Insecticide Resistance Action Committee)는 살충제의 작용기작을 그룹별로 분류하는 국제 체계예요.",linkedTheory:"t019"},

  {id:"q075",level:"중급",type:"short",subject:"농약학",topic:"작용기작과 저항성",
   question:"농약 저항성 발달을 늦추기 위해 서로 다른 작용기작 그룹의 약제를 번갈아 사용하는 방법을 쓰시오.",
   answer:"교대살포(로테이션 살포)",
   explanation:"작용기작이 다른 약제를 교대로 살포하면 특정 저항성 개체군의 선발·증식을 늦출 수 있어요.",linkedTheory:"t019"},

  // ── 혼용과 약해(t020) ──
  {id:"q076",level:"중급",type:"ox",subject:"농약학",topic:"혼용과 약해",
   question:"농약을 혼용하기 전에는 혼용가부표를 확인하는 것이 안전하다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 혼용가부표를 확인하면 침전·변색·약효 저하 같은 혼용 부작용을 사전에 예방할 수 있어요.",linkedTheory:"t020"},

  {id:"q077",level:"중급",type:"multiple",subject:"농약학",topic:"혼용과 약해",
   question:"혼용 시 약효가 단독 사용보다 오히려 떨어지는 현상을 무엇이라 하는가?",
   choices:["상승작용","길항작용","상가작용","독립작용","증강작용"],
   answer:1,
   explanation:"길항작용은 두 가지 약제를 혼용했을 때 오히려 효과가 감소하는 현상이에요. 반대로 효과가 커지면 상승작용이라고 해요.",linkedTheory:"t020"},

  {id:"q078",level:"중급",type:"short",subject:"농약학",topic:"혼용과 약해",
   question:"고온기 살포나 규정 이상의 고농도 처리 시 작물체에 나타날 수 있는 피해를 무엇이라 하는가?",
   answer:"약해",
   explanation:"약해는 농약 사용 부주의(고농도, 고온기 살포 등)로 작물체 자체에 발생하는 생리적 피해예요.",linkedTheory:"t020"},

  // ── 농약 등록과 PLS(t021) ──
  {id:"q079",level:"고급",type:"ox",subject:"농약학",topic:"농약 등록과 PLS",
   question:"PLS 제도에서는 해당 작물에 등록되지 않은 농약이 검출되면 잔류허용기준을 0.01ppm으로 일률 적용한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! PLS(농약허용물질목록관리제도)는 미등록 농약 성분이 검출되면 일률기준(0.01ppm)을 적용해 관리를 강화해요.",linkedTheory:"t021"},

  {id:"q080",level:"고급",type:"multiple",subject:"농약학",topic:"농약 등록과 PLS",
   question:"농약 안전사용기준의 3요소로 옳지 않은 것은?",
   choices:["사용 시기(수확 전 안전일수)","사용 횟수","희석배수·사용량","재배 면적","해당 없음"],
   answer:3,
   explanation:"농약 안전사용기준은 사용 시기(PHI), 사용 횟수, 희석배수·사용량 3가지가 핵심이에요. 재배 면적은 해당하지 않아요.",linkedTheory:"t021"},

  {id:"q081",level:"고급",type:"short",subject:"농약학",topic:"농약 등록과 PLS",
   question:"PLS의 정식 명칭(제도명)을 한글로 쓰시오.",
   answer:"농약허용물질목록관리제도",
   explanation:"PLS(Positive List System)의 한글 명칭은 농약허용물질목록관리제도예요.",linkedTheory:"t021"},

  // ═══════════════════════════════════════════
  // 잡초방제학 (9문제)
  // ═══════════════════════════════════════════

  // ── 잡초 생태(t022) ──
  {id:"q082",level:"초급",type:"ox",subject:"잡초방제학",topic:"잡초 생태",
   question:"매토종자(seed bank)는 토양 속에서 휴면 상태로 오래 생존하다가 조건이 맞으면 발아한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 매토종자는 토양 속에 오래 남아 휴면하다가 환경이 맞으면 발아하는 잡초 종자 집단이에요.",linkedTheory:"t022"},

  {id:"q083",level:"초급",type:"multiple",subject:"잡초방제학",topic:"잡초 생태",
   question:"경운으로 토양 속 잡초 종자가 표층에 노출되면 발아가 급증하는 이유와 관련 깊은 잡초 종자의 특성은?",
   choices:["혐광성","광발아성(호광성)","저온발아성","염분발아성","무발아성"],
   answer:1,
   explanation:"많은 잡초 종자는 광발아성(호광성)이라 빛을 받으면 발아가 촉진돼요. 경운으로 표층에 노출되면 발아가 급증하는 이유예요.",linkedTheory:"t022"},

  {id:"q084",level:"초급",type:"short",subject:"잡초방제학",topic:"잡초 생태",
   question:"토양 속에 남아 여러 해에 걸쳐 분산 발아하며 잡초 방제를 어렵게 만드는 종자 집단을 가리키는 용어를 쓰시오.",
   answer:"매토종자(seed bank)",
   explanation:"매토종자는 한 번에 모두 발아하지 않고 여러 해에 걸쳐 분산 발아해 방제를 까다롭게 만들어요.",linkedTheory:"t022"},

  // ── 제초제 저항성(t023) ──
  {id:"q085",level:"중급",type:"ox",subject:"잡초방제학",topic:"제초제 저항성",
   question:"같은 작용기작의 제초제를 여러 해 연속 사용하면 저항성 잡초가 선발될 수 있다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 동일 작용기작 제초제의 연속 사용은 그 성분에 강한 잡초 개체를 선발·증식시켜 저항성 집단을 형성할 수 있어요.",linkedTheory:"t023"},

  {id:"q086",level:"중급",type:"multiple",subject:"잡초방제학",topic:"제초제 저항성",
   question:"제초제 저항성 잡초 발생을 지연시키는 방법으로 가장 적절한 것은?",
   choices:["동일 제초제를 매년 동일 시기에 처리","서로 다른 작용기작의 제초제를 교대·혼합 처리","제초제 사용량을 줄이지 않고 유지","저항성 발생 여부와 무관하게 동일 처리 지속","윤작 없이 동일 작물만 재배"],
   answer:1,
   explanation:"서로 다른 작용기작의 제초제를 교대·혼합 처리하고 경종적 방제를 병행하는 것이 저항성 지연의 핵심이에요.",linkedTheory:"t023"},

  {id:"q087",level:"중급",type:"short",subject:"잡초방제학",topic:"제초제 저항성",
   question:"제초제 저항성 관리를 위해 경종적 방제(윤작, 담수관리 등)를 화학적 방제와 함께 쓰는 접근을 무엇이라 하는가?",
   answer:"종합적(병행) 잡초 관리",
   explanation:"화학적 방제에만 의존하지 않고 경종적 방제를 병행하는 것이 저항성 잡초 관리의 기본 원칙이에요.",linkedTheory:"t023"},

  // ── 논 잡초 방제체계(t024) ──
  {id:"q088",level:"고급",type:"ox",subject:"잡초방제학",topic:"논 잡초 방제체계",
   question:"이앙 전 처리에는 주로 토양처리제를 사용한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 이앙 전(써레질 후) 처리는 아직 발생하지 않은 잡초를 예방하는 토양처리제를 주로 사용해요.",linkedTheory:"t024"},

  {id:"q089",level:"고급",type:"multiple",subject:"잡초방제학",topic:"논 잡초 방제체계",
   question:"올방개, 너도방동사니처럼 지하부(괴경)로 번식하여 1년생 잡초용 제초제만으로 방제가 어려운 잡초 유형은?",
   choices:["1년생 잡초","월년생 잡초","다년생 잡초","광발아 잡초","외래 잡초"],
   answer:2,
   explanation:"다년생 잡초는 괴경 등 지하부로 번식해 1년생 잡초용 제초제로는 방제가 어려워 전용 체계 처리가 필요해요.",linkedTheory:"t024"},

  {id:"q090",level:"고급",type:"short",subject:"잡초방제학",topic:"논 잡초 방제체계",
   question:"이앙 후 이미 발생한 잡초를 방제하기 위해 잎에 직접 처리하는 제초제 유형을 쓰시오.",
   answer:"경엽처리제",
   explanation:"경엽처리제는 이미 난 잡초의 잎과 줄기에 직접 처리하여 방제하는 제초제예요.",linkedTheory:"t024"}
,
  {"id":"q091","level":"초급","type":"ox","subject":"재배학","topic":"파종·육묘와 이식","question":"육묘를 하면 본밭의 토지이용률을 높이고 종자를 절약할 수 있다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"육묘를 하면 본밭 점유기간이 짧아져 윤작·간작이 쉬워 토지이용률이 높아지고, 직파보다 종자량이 적게 든다.","linkedTheory":"t025"},
  {"id":"q092","level":"초급","type":"multiple","subject":"재배학","topic":"파종·육묘와 이식","question":"다음 중 육묘의 목적으로 보기 어려운 것은?","choices":["조기수확 및 증수","토지이용률 향상","저온·병해 등 재해 회피","종자 절약","연작장해를 완전히 없앰"],"answer":4,"explanation":"육묘는 조기수확, 토지이용률 향상, 재해 회피, 종자 절약 등에 효과가 있으나 연작장해(기지현상) 자체를 없애는 방법은 아니다.","linkedTheory":"t025"},
  {"id":"q093","level":"중급","type":"ox","subject":"재배학","topic":"파종·육묘와 이식","question":"경화(순화)는 정식 직전에 갑작스럽게 저온과 강한 광에 노출시켜 생육을 촉진하는 과정이다.","choices":["맞다 (O)","틀리다 (X)"],"answer":1,"explanation":"경화는 '갑작스러운' 노출이 아니라 저온·건조·강광에 '점진적으로' 적응시켜 외부환경 저항성을 높이는 과정이며, 생육 촉진이 목적이 아니라 활착률을 높이는 것이 목적이다.","linkedTheory":"t025"},
  {"id":"q094","level":"중급","type":"short","subject":"재배학","topic":"파종·육묘와 이식","question":"경화(순화, hardening)란 무엇인지 그 처리 조건과 목적을 포함하여 서술하시오.","answer":"정식 전 어린 모를 저온, 관수량 감소(건조), 강한 광 등에 점진적으로 노출시켜 세포액 농도를 높이고 큐티클층을 발달시킴으로써 내한성·내건성을 길러 정식 후 활착률을 높이는 과정이다.","explanation":"경화 처리는 모의 급격한 환경 변화 적응력을 키워 정식 몸살을 줄이는 것이 핵심이다.","linkedTheory":"t025"},
  {"id":"q095","level":"고급","type":"multiple","subject":"재배학","topic":"파종·육묘와 이식","question":"경화(순화) 처리에 따른 모의 생리적 변화로 옳지 않은 것은?","choices":["세포액의 삼투물질(당·아미노산 등) 농도 증가","큐티클층 발달로 수분 손실 억제","엽육 조직의 치밀화","내한성·내건성 증대","줄기와 잎의 급격한 웃자람(도장) 유도"],"answer":4,"explanation":"경화는 오히려 웃자람(도장)을 억제하고 조직을 치밀하게 하여 저항성을 높이는 과정이다.","linkedTheory":"t025"},
  {"id":"q096","level":"초급","type":"ox","subject":"재배학","topic":"재배관리(정지·전정, 적심·적과)","question":"적심(순지르기)은 생장점을 제거하여 곁가지 발생을 촉진하는 작업이다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"적심은 주경이나 곁가지의 생장점을 잘라 곁가지 발생을 촉진하고 초장 신장을 억제하는 작업이다.","linkedTheory":"t026"},
  {"id":"q097","level":"초급","type":"multiple","subject":"재배학","topic":"재배관리(정지·전정, 적심·적과)","question":"적과(열매솎기)의 주된 목적으로 가장 거리가 먼 것은?","choices":["남은 과실의 품질(당도·크기) 향상","해거리(격년결과) 방지","수체 양분 소모의 효율적 조절","과다 착과에 의한 가지 손상 방지","종자의 발아율 향상"],"answer":4,"explanation":"적과는 과실 품질 향상, 해거리 방지, 양분 조절, 가지 손상 방지가 목적이며 종자 발아율과는 관련이 없다.","linkedTheory":"t026"},
  {"id":"q098","level":"중급","type":"ox","subject":"재배학","topic":"재배관리(정지·전정, 적심·적과)","question":"전정의 목적 중 하나는 수관 내부의 통풍과 채광을 나쁘게 하여 병해충을 억제하는 것이다.","choices":["맞다 (O)","틀리다 (X)"],"answer":1,"explanation":"전정은 통풍과 채광을 '좋게' 하여 병해충 발생을 억제하는 것이 목적이다.","linkedTheory":"t026"},
  {"id":"q099","level":"중급","type":"short","subject":"재배학","topic":"재배관리(정지·전정, 적심·적과)","question":"적심과 적과의 차이를 대상과 목적 측면에서 비교하여 서술하시오.","answer":"적심(순지르기)은 가지의 생장점을 제거하여 곁가지 발생을 촉진하고 초장을 억제하며 개화결실을 유도하는 작업이고, 적과(열매솎기)는 이미 착과된 열매 중 일부를 솎아내어 남은 과실의 품질을 높이고 해거리를 방지하는 작업이다. 즉 적심은 '가지(생장점)'를, 적과는 '열매'를 대상으로 한다.","explanation":"둘 다 양분의 효율적 분배를 위한 작업이지만 대상 부위와 시행 시기가 다르다.","linkedTheory":"t026"},
  {"id":"q100","level":"고급","type":"multiple","subject":"재배학","topic":"재배관리(정지·전정, 적심·적과)","question":"전정 방법 중 노쇠한 가지를 잘라내고 새로운 가지로 세력을 갱신시키는 방법은?","choices":["절단전정","솎음전정(간정)","갱신전정","적심","적과"],"answer":2,"explanation":"갱신전정은 노쇠한 가지를 제거하고 새 가지로 수세를 회복시키는 전정법이다. 절단전정은 가지 중간을 자르는 것, 솎음전정은 가지 전체를 밑동에서 제거하는 것이다.","linkedTheory":"t026"},
  {"id":"q101","level":"초급","type":"ox","subject":"재배학","topic":"작부체계","question":"윤작이란 한 경지에 여러 작물을 일정한 순서로 순환하여 재배하는 방식이다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"윤작(돌려짓기)은 정의 그대로 여러 작물을 순환 재배하는 방식이다.","linkedTheory":"t027"},
  {"id":"q102","level":"초급","type":"multiple","subject":"재배학","topic":"작부체계","question":"주작물이 자라는 이랑 사이의 빈 공간에 다른 작물을 재배하는 작부체계는?","choices":["윤작","간작","혼작","이어짓기","단작"],"answer":1,"explanation":"간작(사이짓기)은 주작물의 이랑 사이에 다른 작물을 재배하여 토지이용률을 높이는 방식이다.","linkedTheory":"t027"},
  {"id":"q103","level":"중급","type":"ox","subject":"재배학","topic":"작부체계","question":"혼작에서 콩과작물을 함께 재배하면 뿌리혹박테리아의 질소고정 효과로 다른 작물에 도움이 될 수 있다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"콩과작물은 뿌리혹박테리아를 통해 공중질소를 고정하여 토양 질소를 늘리므로 혼작 시 다른 작물에도 유리하게 작용할 수 있다.","linkedTheory":"t027"},
  {"id":"q104","level":"중급","type":"short","subject":"재배학","topic":"작부체계","question":"윤작(돌려짓기)의 장점을 두 가지 이상 서술하시오.","answer":"지력 유지(양분 편중 소모 방지), 토양전염성 병해충 및 잡초 발생 경감, 토양 물리성 개선 등을 들 수 있다.","explanation":"윤작은 이어짓기로 인한 기지현상을 예방하는 대표적 방법이다.","linkedTheory":"t027"},
  {"id":"q105","level":"고급","type":"multiple","subject":"재배학","topic":"작부체계","question":"작부체계에 대한 설명으로 옳지 않은 것은?","choices":["윤작은 병해충 및 잡초 경감에 효과적이다","간작은 토지이용률을 높이는 방법이다","혼작은 생육 특성이 다른 작물을 함께 재배하여 위험을 분산한다","이어짓기(연작)는 기지현상 발생 위험이 낮아 권장된다","윤작에 콩과작물을 포함하면 지력 증진에 도움이 된다"],"answer":3,"explanation":"이어짓기(연작)는 오히려 기지현상(연작장해) 발생 위험이 높은 재배방식이다.","linkedTheory":"t027"},
  {"id":"q106","level":"초급","type":"ox","subject":"재배학","topic":"연작장해(기지현상)","question":"기지현상이란 같은 작물을 같은 땅에 계속 재배할 때 생육과 수량이 떨어지는 현상을 말한다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"기지현상(연작장해)의 정의 그대로이다.","linkedTheory":"t028"},
  {"id":"q107","level":"초급","type":"multiple","subject":"재배학","topic":"연작장해(기지현상)","question":"다음 중 일반적으로 연작장해(기지현상)가 심하게 나타나는 작물은?","choices":["벼","보리","옥수수","수박","고구마"],"answer":3,"explanation":"수박, 참외, 콩, 인삼, 감자, 딸기 등은 기지가 심한 작물로 알려져 있으며, 벼·맥류·옥수수·고구마는 비교적 연작에 강하다.","linkedTheory":"t028"},
  {"id":"q108","level":"중급","type":"ox","subject":"재배학","topic":"연작장해(기지현상)","question":"기지현상의 원인 중 하나로 작물 뿌리의 분비물 등에 의한 유독물질(타감작용) 축적을 들 수 있다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"타감작용(allelopathy)에 의한 유독물질 축적은 기지현상의 대표적 원인 중 하나이다.","linkedTheory":"t028"},
  {"id":"q109","level":"중급","type":"short","subject":"재배학","topic":"연작장해(기지현상)","question":"연작장해(기지현상)를 줄이기 위한 대책을 세 가지 이상 서술하시오.","answer":"윤작 실시, 객토 및 유기물 시용, 담수(논-밭 돌려짓기), 토양소독, 저항성 품종 이용, 접목재배 등을 들 수 있다.","explanation":"대책은 토양 개선, 병원균 밀도 저감, 품종·재배법 전환 등 여러 방향에서 접근한다.","linkedTheory":"t028"},
  {"id":"q110","level":"고급","type":"multiple","subject":"재배학","topic":"연작장해(기지현상)","question":"기지현상의 원인으로 보기 어려운 것은?","choices":["토양 중 특정 양분의 편중 소모","시설재배지의 염류집적","토양전염성 병해충 밀도 증가","작물 뿌리 분비물에 의한 유독물질 축적","윤작에 의한 지력 회복"],"answer":4,"explanation":"윤작에 의한 지력 회복은 기지현상의 '원인'이 아니라 오히려 '대책'에 해당한다.","linkedTheory":"t028"},
  {"id":"q111","level":"초급","type":"ox","subject":"재배학","topic":"시비 방법","question":"기비(밑거름)는 파종이나 정식 전에 토양에 시용하는 비료이다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"기비는 정식·파종 전 미리 토양에 시용하여 생육 전기간 서서히 양분을 공급하는 비료이다.","linkedTheory":"t029"},
  {"id":"q112","level":"초급","type":"multiple","subject":"재배학","topic":"시비 방법","question":"추비(웃거름)의 주된 목적은?","choices":["파종 전 토양 산도 교정","생육 도중 부족한 양분을 신속히 보충","종자의 발아율 향상","토양 병해충 소독","수확 후 저장성 향상"],"answer":1,"explanation":"추비는 생육 중 필요한 시기에 속효성 비료로 부족한 양분을 보충하는 것이 목적이다.","linkedTheory":"t029"},
  {"id":"q113","level":"중급","type":"ox","subject":"재배학","topic":"시비 방법","question":"엽면시비는 뿌리 흡수에 장해가 있거나 미량요소가 결핍되었을 때 응급 처방으로 효과적이다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"엽면시비는 잎에서 직접 양분을 흡수시키는 방법으로 뿌리 장해 시나 미량요소 결핍 시 신속한 효과를 낼 수 있다.","linkedTheory":"t029"},
  {"id":"q114","level":"중급","type":"short","subject":"재배학","topic":"시비 방법","question":"10a당 질소 성분량 10kg을 시비하고자 한다. 질소 함량 46%인 요소로 시비할 경우 실제 필요한 요소의 양(kg)을 구하시오. (소수 첫째자리까지)","answer":"약 21.7kg (10kg ÷ 0.46 ≈ 21.7kg)","explanation":"비료의 실제 시비량 = 필요한 성분량 ÷ 비료의 성분함량(%)으로 계산한다.","linkedTheory":"t029"},
  {"id":"q115","level":"고급","type":"multiple","subject":"재배학","topic":"시비 방법","question":"기비·추비·엽면시비에 대한 설명으로 옳지 않은 것은?","choices":["기비는 완효성·유기질 비료를 주로 사용한다","추비는 속효성 비료를 주로 사용한다","엽면시비는 뿌리 시비를 완전히 대체할 수 있어 기비를 생략해도 된다","엽면시비는 미량요소 보급에 효과적이다","추비는 생육 단계별 요구량에 맞추어 분시할 수 있다"],"answer":2,"explanation":"엽면시비는 소량의 응급·보조적 양분 공급 수단이며, 작물이 필요로 하는 전체 양분을 기비·추비 없이 대체할 수는 없다.","linkedTheory":"t029"},
  {"id":"q116","level":"초급","type":"ox","subject":"재배학","topic":"관수 방법과 멀칭","question":"점적관수는 가는 관을 통해 필요한 부위에 물방울 형태로 물을 공급하는 방식이다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"점적관수(drip irrigation)의 정의 그대로이며 물과 비료를 절약할 수 있다.","linkedTheory":"t030"},
  {"id":"q117","level":"초급","type":"multiple","subject":"재배학","topic":"관수 방법과 멀칭","question":"다음 중 멀칭의 효과로 보기 어려운 것은?","choices":["지온 조절","토양 수분 유지","잡초 발생 억제","비료 성분 유실 방지","작물의 광합성 산물을 직접 증가시킴"],"answer":4,"explanation":"멀칭은 지온·수분·잡초·비료유실 등 재배 환경을 개선하는 효과가 있으나, 광합성 산물을 직접 만들어내는 것은 아니다.","linkedTheory":"t030"},
  {"id":"q118","level":"중급","type":"ox","subject":"재배학","topic":"관수 방법과 멀칭","question":"멀칭은 강우 시 빗물이 토양에 튀는 것을 막아 토양전염병의 전파를 줄이는 효과가 있다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"멀칭은 빗물이 튀어 병원균이 잎이나 줄기로 옮겨가는 것을 막아 토양전염병 전파를 줄이는 효과가 있다.","linkedTheory":"t030"},
  {"id":"q119","level":"중급","type":"short","subject":"재배학","topic":"관수 방법과 멀칭","question":"점적관수로 10a당 1일 2톤씩 30일간 관수하였다. 이 기간의 총 관수량(톤)을 구하시오.","answer":"60톤 (2톤 × 30일 = 60톤)","explanation":"총 관수량은 1일 관수량에 관수 일수를 곱하여 구한다.","linkedTheory":"t030"},
  {"id":"q120","level":"고급","type":"multiple","subject":"재배학","topic":"관수 방법과 멀칭","question":"관수 방법에 대한 설명으로 옳지 않은 것은?","choices":["지표관수는 시설비가 저렴하나 토양 유실 우려가 있다","살수관수는 잎이 젖어 병 발생 우려가 있다","점적관수는 관비(관수+시비)가 가능하다","점적관수는 물 소모량이 지표관수보다 일반적으로 많다","살수관수는 스프링클러 등을 이용해 넓은 면적에 균일하게 관수할 수 있다"],"answer":3,"explanation":"점적관수는 필요한 부위에만 물을 공급하므로 일반적으로 지표관수보다 물 소모량이 적다.","linkedTheory":"t030"},
  {"id":"q121","level":"초급","type":"ox","subject":"재배학","topic":"시설원예·양액재배","question":"양액재배는 토양을 사용하지 않고 배양액으로 작물에 무기양분을 공급하는 재배법이다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"양액재배(수경재배)의 정의 그대로이다.","linkedTheory":"t031"},
  {"id":"q122","level":"초급","type":"multiple","subject":"재배학","topic":"시설원예·양액재배","question":"자연재배보다 수확 시기를 앞당기기 위해 인위적으로 생육을 촉진하는 재배법은?","choices":["억제재배","촉성재배","윤작재배","간작재배","연작재배"],"answer":1,"explanation":"촉성재배는 온도 등 환경을 조절하여 생육을 촉진, 자연재배보다 일찍 수확하는 재배법이다.","linkedTheory":"t031"},
  {"id":"q123","level":"중급","type":"ox","subject":"재배학","topic":"시설원예·양액재배","question":"양액재배는 토양을 사용하지 않으므로 연작장해를 회피하는 데 유리하다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"양액재배는 토양전염성 병해충이나 염류집적 문제에서 비교적 자유로워 연작장해 회피에 유리하다.","linkedTheory":"t031"},
  {"id":"q124","level":"중급","type":"short","subject":"재배학","topic":"시설원예·양액재배","question":"양액재배(수경재배)의 방식을 두 가지 이상 서술하시오.","answer":"뿌리를 배양액에 상시 담그는 담액수경(DFT), 얇은 막 형태로 배양액을 순환시키는 박막수경(NFT), 암면·펄라이트 등 고형배지에 배양액을 공급하는 고형배지경 등이 있다.","explanation":"양액재배는 배양액 공급 방식에 따라 여러 종류로 나뉜다.","linkedTheory":"t031"},
  {"id":"q125","level":"고급","type":"multiple","subject":"재배학","topic":"시설원예·양액재배","question":"시설원예 및 양액재배에 대한 설명으로 옳지 않은 것은?","choices":["시설원예는 온도·광·습도 등 환경을 인위적으로 조절할 수 있다","억제재배는 출하시기를 늦추기 위한 재배법이다","양액재배는 배양액의 완충능이 낮아 정밀한 관리가 필요하다","양액재배는 초기 시설투자비가 일반적으로 낮은 편이다","양액재배는 정전이나 펌프 고장 시 피해가 커질 수 있다"],"answer":3,"explanation":"양액재배는 시설·설비 투자가 필요하여 초기 시설비가 일반 토양재배보다 높은 편이다.","linkedTheory":"t031"},
  {"id":"q126","level":"초급","type":"ox","subject":"재배학","topic":"종자검사와 발아율 계산","question":"발아율은 정상발아 종자수를 파종(공시)종자수로 나눈 뒤 100을 곱하여 구한다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"발아율(%) = 정상발아 종자수 ÷ 공시(파종)종자수 × 100 이다.","linkedTheory":"t032"},
  {"id":"q127","level":"초급","type":"multiple","subject":"재배학","topic":"종자검사와 발아율 계산","question":"종자검사의 항목으로 보기 어려운 것은?","choices":["순도검사","발아검사","수분함량검사","천립중 조사","작물의 광합성 속도 측정"],"answer":4,"explanation":"종자검사는 순도, 발아율, 수분함량, 병해충, 천립중 등을 조사하며 광합성 속도는 해당하지 않는다.","linkedTheory":"t032"},
  {"id":"q128","level":"중급","type":"short","subject":"재배학","topic":"종자검사와 발아율 계산","question":"종자 200립을 파종하여 178립이 정상발아하였다. 발아율(%)을 구하시오.","answer":"89% (178 ÷ 200 × 100 = 89%)","explanation":"발아율 = 정상발아 종자수 ÷ 파종종자수 × 100의 공식을 적용한다.","linkedTheory":"t032"},
  {"id":"q129","level":"중급","type":"short","subject":"재배학","topic":"종자검사와 발아율 계산","question":"발아율이 90%인 종자 500립을 파종할 때 예상되는 정상발아 개체수를 구하시오.","answer":"450개 (500립 × 0.9 = 450개)","explanation":"예상 정상발아 개체수는 파종립수에 발아율을 곱하여 구한다.","linkedTheory":"t032"},
  {"id":"q130","level":"고급","type":"multiple","subject":"재배학","topic":"종자검사와 발아율 계산","question":"발아세(germination energy)에 대한 설명으로 가장 옳은 것은?","choices":["종자 1,000립의 무게를 의미한다","전체 시험기간이 끝난 후의 최종 발아율을 의미한다","규정된 초기 기간 내에 발아한 종자의 비율로, 발아의 속도(균일성)를 나타낸다","종자의 병해충 감염 여부를 나타내는 지표이다","토양 중 종자의 매몰 깊이를 나타내는 지표이다"],"answer":2,"explanation":"발아세는 최종 발아율과 달리 정해진 짧은 기간 내 발아한 종자의 비율로, 발아 속도와 균일성을 평가하는 지표이다.","linkedTheory":"t032"},
  {"id":"q131","level":"초급","type":"ox","subject":"재배학","topic":"수확 후 관리","question":"예냉은 수확 직후 청과물의 포장열과 호흡열을 신속히 제거하는 과정이다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"예냉의 정의 그대로이며 신선도 유지와 저장성 향상에 목적이 있다.","linkedTheory":"t033"},
  {"id":"q132","level":"초급","type":"multiple","subject":"재배학","topic":"수확 후 관리","question":"다음 중 예냉 방법에 해당하지 않는 것은?","choices":["강제통풍예냉","진공예냉","냉수예냉(수냉식)","고온건조예냉","차압통풍예냉"],"answer":3,"explanation":"예냉은 열을 신속히 '제거'하는 냉각 처리이므로 고온으로 건조시키는 방법은 예냉에 해당하지 않는다.","linkedTheory":"t033"},
  {"id":"q133","level":"중급","type":"ox","subject":"재배학","topic":"수확 후 관리","question":"CA저장은 저장고 내 산소 농도를 낮추고 이산화탄소 농도를 높여 호흡을 억제하는 저장법이다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"CA(controlled atmosphere)저장의 정의 그대로이다.","linkedTheory":"t033"},
  {"id":"q134","level":"중급","type":"short","subject":"재배학","topic":"수확 후 관리","question":"MA포장(modified atmosphere packaging)이 무엇인지 서술하시오.","answer":"필름 등 포장재를 이용하여 포장 내부의 산소·이산화탄소 등 가스 조성이 청과물의 호흡에 의해 자발적으로 변화하도록 함으로써 신선도를 유지하는 포장 방법이다.","explanation":"CA저장이 저장고 전체의 가스를 인위적으로 조절하는 것과 달리, MA포장은 개별 포장 단위에서 자발적 가스 조절이 일어난다는 차이가 있다.","linkedTheory":"t033"},
  {"id":"q135","level":"고급","type":"multiple","subject":"재배학","topic":"수확 후 관리","question":"수확 후 관리에 대한 설명으로 옳지 않은 것은?","choices":["예냉은 수확 후 호흡열을 신속히 제거하는 과정이다","진공예냉은 감압에 의한 수분 기화열을 이용한다","저온저장은 호흡 및 대사작용을 억제하여 노화를 지연시킨다","CA저장은 산소 농도를 높이고 이산화탄소 농도를 낮추는 저장법이다","MA포장은 포장재를 통한 자발적 가스 조성 변화를 이용한다"],"answer":3,"explanation":"CA저장은 반대로 산소 농도를 낮추고 이산화탄소 농도를 높여 호흡을 억제하는 저장법이다.","linkedTheory":"t033"},
  {"id":"q136","level":"초급","type":"ox","subject":"재배학","topic":"친환경·유기농업","question":"유기농업은 화학비료와 합성농약 등 화학자재를 사용하지 않고 작물을 재배하는 방식이다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"유기농업의 정의 그대로이다.","linkedTheory":"t034"},
  {"id":"q137","level":"초급","type":"multiple","subject":"재배학","topic":"친환경·유기농업","question":"유기농업에서 지력 증진을 위해 주로 활용하는 작물은?","choices":["벼과 단일작물의 연작","콩과작물을 포함한 윤작","화학비료 다량 시용 작물","제초제 저항성 작물","생장조절제 처리 작물"],"answer":1,"explanation":"콩과작물은 뿌리혹박테리아의 질소고정 작용으로 지력을 높이는 데 활용되며, 이를 포함한 윤작이 유기농업의 대표적 실천 방법이다.","linkedTheory":"t034"},
  {"id":"q138","level":"중급","type":"ox","subject":"재배학","topic":"친환경·유기농업","question":"IPM(병해충종합관리)에서는 화학 농약 대신 천적이나 생물적 방제 수단을 우선적으로 활용한다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"IPM은 천적·생물적 방제, 재배적 방제 등을 우선하고 화학적 방제는 최후 수단으로 활용하는 병해충 관리 방식이다.","linkedTheory":"t034"},
  {"id":"q139","level":"중급","type":"short","subject":"재배학","topic":"친환경·유기농업","question":"유기농업에서 지력 유지와 병해충 관리를 위해 활용하는 방법을 두 가지 이상 서술하시오.","answer":"콩과작물을 포함한 윤작, 녹비작물(헤어리베치, 자운영 등) 환원, 퇴비·구비 등 유기물 시용, 천적 및 생물적 방제(IPM) 등을 들 수 있다.","explanation":"유기농업은 화학자재 대신 생물적·경종적 방법으로 지력과 병해충을 관리한다.","linkedTheory":"t034"},
  {"id":"q140","level":"고급","type":"multiple","subject":"재배학","topic":"친환경·유기농업","question":"친환경·유기농업에 대한 설명으로 옳지 않은 것은?","choices":["유기농업은 합성 화학자재의 사용을 배제하는 것을 원칙으로 한다","녹비작물은 토양에 유기물과 질소를 공급하는 역할을 한다","무농약농산물은 국내 인증 기준상 합성농약을 사용하지 않는 것을 원칙으로 한다","유기농업에서는 화학비료를 대량으로 사용해 지력을 빠르게 높인다","IPM은 생물적·재배적 방제를 우선하고 화학적 방제는 최소화하는 방식이다"],"answer":3,"explanation":"유기농업은 화학비료 사용을 배제하거나 최소화하고, 대신 퇴비·윤작·녹비 등으로 지력을 유지하는 것이 원칙이다.","linkedTheory":"t034"},
  {"id":"q141","level":"초급","type":"ox","subject":"식물병리학","topic":"병원체 번식체(포자) 심화","question":"진균의 후벽포자(chlamydospore)는 세포벽이 두꺼워 불리한 환경에서 오래 생존하는 휴면포자이다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"후벽포자는 세포벽이 두꺼워져 저온·건조 등 불리한 환경에서도 오래 생존할 수 있는 내구성 포자이다.","linkedTheory":"t035"},
  {"id":"q142","level":"초급","type":"ox","subject":"식물병리학","topic":"병원체 번식체(포자) 심화","question":"유주자(유주포자)는 편모가 없어 물이 없어도 자유롭게 이동할 수 있다.","choices":["맞다 (O)","틀리다 (X)"],"answer":1,"explanation":"유주자는 편모를 가지고 있어 물속에서 이동하며, 물이 없으면 이동·감염이 어렵다.","linkedTheory":"t035"},
  {"id":"q143","level":"중급","type":"multiple","subject":"식물병리학","topic":"병원체 번식체(포자) 심화","question":"다음 중 유성포자가 아닌 것은?","choices":["난포자","접합포자","분생포자","자낭포자","담자포자"],"answer":2,"explanation":"분생포자(conidia)는 균사 끝에서 잘려 형성되는 대표적인 무성포자이다. 나머지는 모두 유성포자이다.","linkedTheory":"t035"},
  {"id":"q144","level":"초급","type":"short","subject":"식물병리학","topic":"병원체 번식체(포자) 심화","question":"세균이 진균과 달리 식물체에 침입할 때 반드시 거쳐야 하는 두 가지 경로를 쓰시오.","answer":"상처, 자연개구(기공·수공·피목 등)","explanation":"세균은 식물 표피를 뚫는 침입기관이 없어 상처나 자연개구를 통해서만 침입할 수 있다.","linkedTheory":"t035"},
  {"id":"q145","level":"고급","type":"multiple","subject":"식물병리학","topic":"병원체 번식체(포자) 심화","question":"바이러스의 특징으로 옳지 않은 것은?","choices":["핵산과 단백질 외피로 구성된다","살아있는 세포 내에서만 증식하는 절대기생체이다","광학현미경으로 직접 관찰할 수 있다","매개충을 통해 전반될 수 있다","모자이크·위축 등의 병징을 일으킨다"],"answer":2,"explanation":"바이러스는 크기가 매우 작아 광학현미경으로는 관찰할 수 없고 전자현미경이 있어야 관찰이 가능하다.","linkedTheory":"t035"},
  {"id":"q146","level":"초급","type":"ox","subject":"식물병리학","topic":"채소 세균병해","question":"무름병은 세균이 분비하는 펙틴분해효소에 의해 조직이 물러지는 병이다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"무름병균(Pectobacterium 등)은 펙틴분해효소를 분비해 세포벽을 녹여 조직을 연화시키고 악취를 유발한다.","linkedTheory":"t036"},
  {"id":"q147","level":"중급","type":"multiple","subject":"식물병리학","topic":"채소 세균병해","question":"풋마름병(청고병)의 특징으로 옳은 것은?","choices":["잎이 누렇게 변하며 서서히 시든다","병원균은 곰팡이(진균)이다","유관속(물관)이 막혀 식물체가 푸른 채로 급격히 시든다","저온건조 조건에서 주로 발생한다","종자소독만으로 완전 방제된다"],"answer":2,"explanation":"풋마름병(Ralstonia solanacearum)은 물관을 막아 수분 이동을 차단시켜 잎이 푸른 채로 급격히 위조·고사하게 만든다(청고).","linkedTheory":"t036"},
  {"id":"q148","level":"중급","type":"short","subject":"식물병리학","topic":"채소 세균병해","question":"풋마름병에 걸린 것으로 의심되는 토마토 줄기를 절단하여 맑은 물에 담갔을 때 나타나는 진단 소견을 쓰시오.","answer":"절단면에서 뿌연(우윳빛) 세균 점액이 흘러나온다.","explanation":"물관 속에 세균 덩어리가 가득 차 있어 절단면을 물에 담그면 뿌연 세균 점액이 흘러나오는 것을 관찰할 수 있다.","linkedTheory":"t036"},
  {"id":"q149","level":"고급","type":"multiple","subject":"식물병리학","topic":"채소 세균병해","question":"무름병과 풋마름병에 공통적으로 해당하는 설명으로 옳은 것은?","choices":["모두 바이러스에 의한 병이다","모두 편모가 있는 유주자로 전반된다","모두 세균이 원인이며 상처나 자연개구·물관 등을 통해 침입한다","모두 종자소독으로만 방제 가능하다","모두 저온에서만 발생한다"],"answer":2,"explanation":"두 병 모두 세균성 병으로, 상처·자연개구 또는 물관을 통해 침입하며 고온다습 조건에서 발생이 심해진다.","linkedTheory":"t036"},
  {"id":"q150","level":"초급","type":"ox","subject":"식물병리학","topic":"노균병 병원체 특성","question":"노균병균은 진균(곰팡이)과 동일한 분류군인 자낭균류에 속한다.","choices":["맞다 (O)","틀리다 (X)"],"answer":1,"explanation":"노균병균은 계통상 진균이 아닌 난균류(卵菌類)에 속한다.","linkedTheory":"t037"},
  {"id":"q151","level":"중급","type":"multiple","subject":"식물병리학","topic":"노균병 병원체 특성","question":"노균병 발생이 가장 심해지는 환경 조건은?","choices":["고온건조","저온건조","저온다습","고온다습","조건과 무관하다"],"answer":2,"explanation":"노균병균은 편모가 있는 유주자로 감염하므로 물기가 필요하며, 저온다습 조건(이슬·결로 등)에서 발생이 심해진다.","linkedTheory":"t037"},
  {"id":"q152","level":"중급","type":"short","subject":"식물병리학","topic":"노균병 병원체 특성","question":"노균병 방제를 위해 저항성 품종을 이용할 때 한 품종만 계속 재배하지 말아야 하는 이유를 간단히 쓰시오.","answer":"병원균의 레이스(race) 분화로 인해 저항성이 무너질(붕괴될) 수 있기 때문이다.","explanation":"병원균은 레이스 분화가 빠른 경우가 있어, 단일 저항성 품종을 계속 재배하면 저항성이 극복될 위험이 있다.","linkedTheory":"t037"},
  {"id":"q153","level":"초급","type":"ox","subject":"식물병리학","topic":"노균병 병원체 특성","question":"노균병에 걸린 잎의 뒷면에는 흰색~회색의 곰팡이(포자낭)가 형성되는 경우가 많다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"노균병은 잎 뒷면에 서리 모양의 흰색~회색 포자낭이 형성되는 것이 특징적인 병징이다.","linkedTheory":"t037"},
  {"id":"q154","level":"초급","type":"ox","subject":"식물병리학","topic":"종자전염병과 종자소독","question":"종자전염병은 병원체가 종자 표면뿐 아니라 종자 내부에도 잠복할 수 있다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"종자전염병 병원체는 종자 표면에 부착되거나 배·배유 등 내부 조직에 잠복하기도 한다.","linkedTheory":"t038"},
  {"id":"q155","level":"초급","type":"multiple","subject":"식물병리학","topic":"종자전염병과 종자소독","question":"종자소독 방법이 아닌 것은?","choices":["온탕침법","화학적 소독(분의처리)","건열소독","태양열소독(토양 비닐피복)","침지소독"],"answer":3,"explanation":"태양열소독(토양 비닐피복)은 토양전염병 관리에 쓰이는 방법으로, 종자소독법이 아니다.","linkedTheory":"t038"},
  {"id":"q156","level":"초급","type":"short","subject":"식물병리학","topic":"종자전염병과 종자소독","question":"온탕침법으로 종자를 소독할 때 반드시 지켜야 할 조건과, 이를 지키지 않을 경우의 문제점을 쓰시오.","answer":"온도와 침지 시간을 정확히 지켜야 하며, 온도가 높거나 시간이 길면 종자의 발아율이 저하될 수 있다.","explanation":"온탕침법은 병원균 사멸과 종자 발아력 보존 사이의 균형이 중요해 온도·시간 관리가 핵심이다.","linkedTheory":"t038"},
  {"id":"q157","level":"중급","type":"multiple","subject":"식물병리학","topic":"종자전염병과 종자소독","question":"벼 키다리병에 대한 설명으로 옳은 것은?","choices":["세균에 의한 병이다","대표적인 종자전염병으로 Fusarium(곰팡이)이 원인이다","바이러스에 의한 병으로 매개충으로 전반된다","저장 중에만 발생하는 생리장해이다","토양전염과 무관하다"],"answer":1,"explanation":"벼 키다리병은 Fusarium fujikuroi(곰팡이)에 의한 대표적인 종자전염병이다.","linkedTheory":"t038"},
  {"id":"q158","level":"초급","type":"ox","subject":"식물병리학","topic":"병 발생 예찰","question":"예찰이란 병해충의 발생 시기와 정도를 미리 관찰·예측하여 방제 시기를 결정하는 활동이다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"예찰(豫察)은 병해충 발생을 미리 관찰·예측하여 적기 방제를 가능하게 하는 활동이다.","linkedTheory":"t039"},
  {"id":"q159","level":"중급","type":"multiple","subject":"식물병리학","topic":"병 발생 예찰","question":"예찰포에 대한 설명으로 옳지 않은 것은?","choices":["대표 포장을 정해 정기적으로 병 발생 상황을 조사한다","이병주율·병반 수 등을 기록한다","조사 결과는 인근 농가의 방제 시기 결정에 활용된다","예찰포는 반드시 무병 상태를 유지해야 하며 병이 발생하면 즉시 폐기한다","지역의 발생 정보를 파악하는 역할을 한다"],"answer":3,"explanation":"예찰포는 병 발생 여부와 정도를 있는 그대로 관찰·기록하는 상시 관찰 포장으로, 병 발생 자체가 조사 대상이지 폐기 대상이 아니다.","linkedTheory":"t039"},
  {"id":"q160","level":"중급","type":"short","subject":"식물병리학","topic":"병 발생 예찰","question":"정기예찰과 수시예찰의 차이를 간단히 쓰시오.","answer":"정기예찰은 일정한 주기(정해진 시기)마다 실시하는 예찰이고, 수시예찰은 병 발생이 우려되거나 이상 징후가 있을 때 필요에 따라 실시하는 예찰이다.","explanation":"두 방법은 예찰의 시행 주기와 계기에서 차이가 있으며, 서로 보완적으로 활용된다.","linkedTheory":"t039"},
  {"id":"q161","level":"고급","type":"multiple","subject":"식물병리학","topic":"병 발생 예찰","question":"병 발생 예찰의 효과로 보기 어려운 것은?","choices":["적기 방제로 방제 효과를 높인다","불필요한 약제 살포를 줄여 방제비용을 절감한다","환경 부담을 낮추는 데 기여한다","기상자료를 활용해 발생 시기를 예측하는 데 도움을 준다","병원체의 유전자를 직접 변형시켜 발병력을 낮춘다"],"answer":4,"explanation":"예찰은 발생 시기·정도를 관찰·예측하여 방제 의사결정을 돕는 활동이며, 병원체의 유전자를 직접 조작하는 것과는 관련이 없다.","linkedTheory":"t039"},
  {"id":"q162","level":"초급","type":"ox","subject":"식물병리학","topic":"저장병해와 생리장해","question":"생리장해는 병원체 없이 환경이나 영양 요인에 의해 발생하며 전염성이 없다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"생리장해(비전염성병)는 병원체가 관여하지 않는 환경·영양성 이상으로, 다른 개체로 전염되지 않는다.","linkedTheory":"t040"},
  {"id":"q163","level":"중급","type":"multiple","subject":"식물병리학","topic":"저장병해와 생리장해","question":"다음 중 저장병해(전염성 병)에 해당하는 것은?","choices":["칼슘 결핍에 의한 배꼽썩음병","저장고 내 이산화탄소 과다 장해","에틸렌 축적에 의한 노화","잿빛곰팡이병(Botrytis)","저온장해"],"answer":3,"explanation":"잿빛곰팡이병(Botrytis)은 병원체(곰팡이)에 의해 발생하는 대표적인 저장병해이며, 나머지는 모두 병원체 없이 발생하는 생리장해이다.","linkedTheory":"t040"},
  {"id":"q164","level":"고급","type":"short","subject":"식물병리학","topic":"저장병해와 생리장해","question":"저장 중인 농산물에서 병징이 이웃 개체로 확산되는지 여부가 저장병해와 생리장해를 구분하는 근거가 되는 이유를 쓰시오.","answer":"저장병해는 병원체가 있어 전염성이 있으므로 인접 개체로 옮아갈 수 있지만, 생리장해는 병원체가 없는 비전염성 이상이므로 다른 개체로 전파되지 않기 때문이다.","explanation":"전염성 유무는 병원체 존재 여부와 직결되므로, 확산 양상 관찰이 두 유형을 구분하는 실질적 근거가 된다.","linkedTheory":"t040"},
  {"id":"q165","level":"중급","type":"multiple","subject":"식물병리학","topic":"저장병해와 생리장해","question":"저장 중 발생한 이상 증상이 생리장해일 가능성을 시사하는 소견으로 가장 적절한 것은?","choices":["병든 부위에서 곰팡이 균사나 세균 점액이 관찰된다","병반 주위 조직에서 병원체가 분리 배양된다","특정 저장고 내 여러 개체에서 동시다발적으로 유사한 증상이 나타나고 병원체가 검출되지 않는다","상처를 통해 침입한 흔적이 뚜렷하다","저장 기간이 길어질수록 병반이 인접 개체로 번져간다"],"answer":2,"explanation":"병원체가 검출되지 않으면서 저장 환경 조건에 따라 동시다발적으로 유사 증상이 나타나는 것은 환경·영양 요인에 의한 생리장해의 전형적 소견이다.","linkedTheory":"t040"},
  {"id":"q166","level":"초급","type":"ox","subject":"농림해충학","topic":"곤충의 외부형태 기초","question":"곤충의 몸은 두부(머리)·흉부(가슴)·복부(배)의 3부분으로 구분되며, 이는 해충 동정의 기본이 된다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"곤충강(Insecta)의 공통적인 외부형태 특징으로, 두부에는 촉각과 입틀, 흉부에는 다리와 날개, 복부에는 소화·생식 관련 구조가 위치한다.","linkedTheory":"t041"},
  {"id":"q167","level":"초급","type":"multiple","subject":"농림해충학","topic":"곤충의 외부형태 기초","question":"곤충의 다리를 몸에 가까운 쪽에서 먼 쪽 순서로 바르게 나열한 것은?","choices":["기절 - 전절 - 퇴절 - 경절 - 부절","전절 - 기절 - 경절 - 퇴절 - 부절","부절 - 경절 - 퇴절 - 전절 - 기절","퇴절 - 기절 - 전절 - 부절 - 경절","경절 - 퇴절 - 전절 - 기절 - 부절"],"answer":0,"explanation":"곤충의 다리는 몸에서 먼 순서로 기절(coxa)-전절(trochanter)-퇴절(femur)-경절(tibia)-부절(tarsus) 순으로 구성된다.","linkedTheory":"t041"},
  {"id":"q168","level":"중급","type":"multiple","subject":"농림해충학","topic":"곤충의 외부형태 기초","question":"메뚜기의 뒷다리처럼 퇴절이 굵고 발달하여 뛰는 데 알맞게 변형된 다리의 형태를 무엇이라 하는가?","choices":["도약다리","파악다리","굴착다리","보행다리","유영다리"],"answer":0,"explanation":"도약다리(jumping leg)는 퇴절이 굵고 근육이 발달하여 도약에 알맞은 다리로, 메뚜기·귀뚜라미 등에서 볼 수 있다. 사마귀의 앞다리는 파악다리, 땅강아지의 앞다리는 굴착다리이다.","linkedTheory":"t041"},
  {"id":"q169","level":"초급","type":"short","subject":"농림해충학","topic":"곤충의 외부형태 기초","question":"진딧물, 노린재류와 같이 식물체에 입을 찔러 넣어 즙액을 빨아먹는 형태의 입틀을 무엇이라 하는가?","answer":"자흡구(찌르고 빠는 입, 흡수구)","explanation":"자흡구는 상악과 하악이 가늘고 긴 침 모양으로 변형되어 식물 조직을 찔러 관다발의 즙액을 빨아들이는 구조로, 흡즙성 해충의 공통적인 입틀 형태이다.","linkedTheory":"t041"},
  {"id":"q170","level":"고급","type":"multiple","subject":"농림해충학","topic":"곤충의 외부형태 기초","question":"곤충 날개에 대한 설명으로 옳지 않은 것은?","choices":["딱정벌레목의 앞날개는 단단하게 경화되어 초시(鞘翅)를 이룬다.","노린재류의 앞날개는 기부는 단단하고 끝부분은 막질인 반초시 구조를 가진다.","파리목(양시류)은 뒷날개가 퇴화되어 평균곤(균형곤)으로 변형되어 있다.","모든 곤충은 예외 없이 앞날개와 뒷날개를 각각 한 쌍씩 가지고 있다.","나비목 성충의 날개는 인편(비늘가루)으로 덮여 있다."],"answer":3,"explanation":"이목(이)이나 벼룩류처럼 날개가 완전히 퇴화되어 없는 곤충도 있으며, 파리목은 뒷날개가 평균곤으로 변형되는 등 날개의 형태와 유무는 분류군에 따라 다양하다.","linkedTheory":"t041"},
  {"id":"q171","level":"초급","type":"ox","subject":"농림해충학","topic":"흡즙해충 심화(노린재류)","question":"노린재류는 저작형(씹는형) 입틀을 가지고 있어 잎을 갉아먹는 방식으로 작물을 가해한다.","choices":["맞다 (O)","틀리다 (X)"],"answer":1,"explanation":"노린재류는 자흡구를 가지고 있어 식물체에 침을 꽂아 즙액을 빨아먹으며, 잎을 갉아먹는 저작형 해충과는 가해 방식이 다르다.","linkedTheory":"t042"},
  {"id":"q172","level":"중급","type":"multiple","subject":"농림해충학","topic":"흡즙해충 심화(노린재류)","question":"콩과작물의 꼬투리를 흡즙하여 종실의 기형·쭈그러짐과 품질 저하를 일으키는 대표적인 노린재류 해충은?","choices":["톱다리개미허리노린재","복숭아혹진딧물","배나무이","점박이응애","벼멸구"],"answer":0,"explanation":"톱다리개미허리노린재는 콩 등 콩과작물의 꼬투리에 침을 꽂아 종실을 흡즙하며, 그 결과 종실이 기형화되거나 쭈그러들어 수량과 품질을 떨어뜨리는 주요 노린재류 해충이다.","linkedTheory":"t042"},
  {"id":"q173","level":"중급","type":"short","subject":"농림해충학","topic":"흡즙해충 심화(노린재류)","question":"노린재류에 의해 흡즙 피해를 입은 과실이나 종실에 나타나는 대표적인 피해 증상을 서술하시오.","answer":"흡즙 부위의 조직이 괴사하여 반점(흑변)이 생기고, 종실은 기형이 되거나 쭈그러들어 상품성과 수량이 저하된다.","explanation":"노린재류는 자흡구로 조직을 찔러 즙액을 빨아먹는 과정에서 흡즙 부위 세포가 괴사되고, 그 결과 반점·흑변·기형 등의 피해흔이 남는다.","linkedTheory":"t042"},
  {"id":"q174","level":"고급","type":"multiple","subject":"농림해충학","topic":"흡즙해충 심화(노린재류)","question":"진딧물류와 비교하여 노린재류 방제에서 특히 강조되어야 하는 사항으로 가장 옳은 것은?","choices":["군집 생활을 하므로 감로에 의한 그을음병 방제를 최우선으로 한다.","이동성과 비래성이 강하므로 유아등·포충망 등을 이용한 예찰 기반의 적기방제가 중요하다.","저작형 입틀을 가지므로 소화중독제 위주로 방제한다.","한 마리의 산자수가 극히 많으므로 살비제 교호살포가 필수적이다.","고착생활을 하므로 접촉성 약제만으로 충분히 방제된다."],"answer":1,"explanation":"노린재류는 진딧물과 달리 개체가 크고 비래성(이동성)이 강해 포장 간 이동이 잦으므로, 유아등이나 포충망 등을 통한 예찰로 발생시기와 밀도를 파악한 뒤 적기에 방제하는 것이 효과적이다.","linkedTheory":"t042"},
  {"id":"q175","level":"초급","type":"ox","subject":"농림해충학","topic":"나방류 종합관리(교미교란법)","question":"곤충의 성페로몬은 예찰을 위한 트랩뿐만 아니라 대량으로 방출하여 교미 자체를 방해하는 방제 방법(교미교란법)에도 이용된다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"성페로몬은 소량을 이용한 예찰트랩 외에도, 방출기를 통해 넓은 면적에 다량으로 지속 방출함으로써 수컷의 정위(orientation)를 방해하는 교미교란법에도 활용된다.","linkedTheory":"t043"},
  {"id":"q176","level":"중급","type":"multiple","subject":"농림해충학","topic":"나방류 종합관리(교미교란법)","question":"나방류 해충 방제에 이용되는 교미교란법의 방제 원리로 가장 적절한 것은?","choices":["살포된 페로몬이 해충을 직접 유인하여 트랩에 포살시킨다.","인위적으로 대기 중 성페로몬 농도를 균일하게 높여 수컷이 암컷의 위치(페로몬 농도구배)를 인식하지 못하게 한다.","페로몬이 유충의 소화기관에 직접 작용하여 섭식을 저해한다.","페로몬이 천적을 유인하여 해충을 포식하게 한다.","페로몬이 알의 부화를 물리적으로 차단한다."],"answer":1,"explanation":"교미교란법은 방출기를 통해 처리 지역 전체의 성페로몬 농도를 인위적으로 균일하게 높여, 수컷이 암컷이 방출하는 페로몬의 농도구배를 따라가지 못하게 함으로써 교미 기회 자체를 차단하는 원리이다.","linkedTheory":"t043"},
  {"id":"q177","level":"중급","type":"short","subject":"농림해충학","topic":"나방류 종합관리(교미교란법)","question":"교미교란법이 충분한 방제 효과를 나타내기 위해 필요한 조건을 1가지 서술하시오.","answer":"처리 면적이 충분히 넓어야 하며(최소 방제 면적 확보), 처리 전 해충의 초기 밀도가 낮을수록 효과적이다.","explanation":"처리 면적이 좁으면 주변 미처리 지역에서 이미 교미를 마친 암컷이 비래해 들어와 효과가 떨어지고, 초기 밀도가 높으면 교미교란만으로는 완전한 방제가 어려워 화학적 방제 병행이 필요하다.","linkedTheory":"t043"},
  {"id":"q178","level":"고급","type":"multiple","subject":"농림해충학","topic":"나방류 종합관리(교미교란법)","question":"나방류 해충의 교미교란법에 대한 설명으로 옳지 않은 것은?","choices":["천적이나 화분매개곤충 등 비표적 생물에 미치는 영향이 적다.","신경계에 직접 작용하는 살충 기작이 아니어서 약제 저항성 발달 위험이 낮다.","처리 초기 밀도가 매우 높은 포장에서도 단독 사용만으로 완전한 방제가 가능하다.","발생시기를 예측하기 위한 페로몬트랩 예찰과 병행하여 활용도가 높아진다.","인접 농가와 함께 광역·공동으로 설치할 때 방제 효과가 더 커진다."],"answer":2,"explanation":"초기 밀도가 높은 포장에서는 이미 교미를 마친 개체가 많아 교미교란법만으로는 방제 효과가 충분하지 않으므로 화학적 방제 등을 병행해야 한다.","linkedTheory":"t043"},
  {"id":"q179","level":"초급","type":"ox","subject":"농림해충학","topic":"응애류 방제 심화","question":"점박이응애와 같은 응애류는 세대기간이 짧고 번식력이 강해 동일한 작용기작의 살비제를 연속으로 사용하면 저항성이 빠르게 발달할 수 있다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"응애류는 세대기간이 매우 짧고 산자수가 많아 특정 약제에 대한 저항성 개체가 빠르게 선발·증가할 수 있으므로 약제 저항성 관리가 중요하다.","linkedTheory":"t044"},
  {"id":"q180","level":"중급","type":"multiple","subject":"농림해충학","topic":"응애류 방제 심화","question":"칠레이리응애(Phytoseiulus persimilis)에 대한 설명으로 가장 옳은 것은?","choices":["점박이응애 등 해충성 응애를 잡아먹는 포식성 천적응애이다.","작물의 즙액을 빨아먹어 반점 피해를 일으키는 해충성 응애이다.","나방류 해충의 알에 기생하는 기생봉의 일종이다.","저장곡물에 발생하는 대표적인 곤충 해충이다.","페로몬을 이용하여 교미교란을 일으키는 천적곤충이다."],"answer":0,"explanation":"칠레이리응애는 점박이응애 등을 포식하는 천적응애로, 시설재배지 등에서 방사하여 응애류 밀도를 억제하는 생물적 방제에 활용된다.","linkedTheory":"t044"},
  {"id":"q181","level":"중급","type":"short","subject":"농림해충학","topic":"응애류 방제 심화","question":"살비제에 대한 응애류의 저항성 발달을 지연시키기 위한 약제 살포 전략을 서술하시오.","answer":"작용기작(계통)이 서로 다른 살비제를 교호(순환)로 살포하여 동일 작용기작 약제의 연속 사용을 피한다.","explanation":"동일 작용기작 약제를 반복 사용하면 저항성 개체가 선발되어 빠르게 우점하므로, 작용기작이 다른 약제를 번갈아 사용하는 교호살포가 저항성 관리의 핵심 원칙이다.","linkedTheory":"t044"},
  {"id":"q182","level":"고급","type":"multiple","subject":"농림해충학","topic":"응애류 방제 심화","question":"칠레이리응애 등 천적을 이용한 응애류 생물적 방제를 실시할 때 병행 관리로 가장 옳은 것은?","choices":["천적 방사와 무관하게 광범위 잔류성 살비제를 정기적으로 살포한다.","천적에 안전한 약제를 선택하거나 화학적 살비제 사용을 최소화하여 천적의 밀도를 보호한다.","천적 방사 직후 동일 작용기작의 살비제를 살포하여 방제 효과를 높인다.","천적은 해충 밀도가 매우 높을 때만 방사하고 이후 화학 약제로 전량 방제한다.","천적 방사 시기와 무관하게 살비제 살포 시기를 결정한다."],"answer":1,"explanation":"천적을 이용한 생물적 방제의 효과를 극대화하려면 천적에 안전한(선택적) 약제를 사용하거나 화학적 살비제 사용을 최소화하여 천적 개체군이 유지되도록 관리해야 한다.","linkedTheory":"t044"},
  {"id":"q183","level":"초급","type":"ox","subject":"농림해충학","topic":"돌발·외래해충 개념","question":"돌발해충이란 평소에는 문제가 되지 않다가 특정 시기에 개체군이 급격히 증가하여 피해를 주는 해충을 말한다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"돌발해충은 기후 변화나 이상기상 등의 요인으로 평소 밀도가 낮던 해충이 특정 시기에 갑자기 대발생하여 문제를 일으키는 경우를 말한다.","linkedTheory":"t045"},
  {"id":"q184","level":"초급","type":"multiple","subject":"농림해충학","topic":"돌발·외래해충 개념","question":"미국선녀벌레, 갈색날개매미충과 같은 외래해충의 개체군이 국내에서 급격히 증가하는 주된 원인으로 가장 옳은 것은?","choices":["국내에 이들을 억제할 자연천적이 부족하거나 없기 때문이다.","이들 해충은 기주범위가 매우 좁아 특정 작물에만 한정되기 때문이다.","이들 해충은 저작형 입틀만을 가져 방제가 매우 쉽기 때문이다.","국내 기후가 이들 해충의 생존에 전혀 적합하지 않기 때문이다.","이들 해충은 월동이 불가능하여 매년 해외에서 재유입되기 때문이다."],"answer":0,"explanation":"외래해충은 원산지에서 개체군을 억제하던 천적이 함께 유입되지 않는 경우가 많아 국내에서는 자연적인 밀도 억제 기작이 약해 개체군이 급격히 증가하기 쉽다.","linkedTheory":"t045"},
  {"id":"q185","level":"중급","type":"short","subject":"농림해충학","topic":"돌발·외래해충 개념","question":"돌발·외래해충의 확산을 방지하기 위한 일반적인 대응 원칙을 서술하시오.","answer":"발생 초기 저밀도 단계에서 신속히 방제하고, 알덩어리 등 월동태를 이른 봄에 제거하며, 개별 농가 단독 방제의 한계를 극복하기 위해 인접 농가·지자체 단위의 광역 공동방제를 실시한다.","explanation":"돌발·외래해충은 확산 속도가 빠르고 개별 방제의 효과가 제한적이므로, 조기 발견과 초기 방제, 월동태 제거, 광역 공동방제가 핵심 대응 원칙이다.","linkedTheory":"t045"},
  {"id":"q186","level":"초급","type":"ox","subject":"농약학","topic":"농약 희석 계산","question":"희석에 필요한 물의 양은 원액의 농도가 높을수록, 희석하려는 농도가 낮을수록 더 많아진다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"소요 물량 = 소요약량 × (원액의 농도÷희석하려는 농도 − 1)이므로, 원액 농도가 높아지거나 희석하려는(목표) 농도가 낮아지면 괄호 안의 값이 커져 필요한 물의 양이 늘어난다.","linkedTheory":"t046"},
  {"id":"q187","level":"초급","type":"multiple","subject":"농약학","topic":"농약 희석 계산","question":"소요 물량(희석수량)을 구하는 공식으로 옳은 것은?","choices":["소요약량 × (원액의 농도 ÷ 희석하려는 농도 − 1)","소요약량 ÷ (원액의 농도 × 희석하려는 농도)","소요약량 × (희석하려는 농도 ÷ 원액의 농도 − 1)","소요약량 + (원액의 농도 − 희석하려는 농도)","소요약량 × 원액의 농도 × 희석하려는 농도"],"answer":0,"explanation":"표준 희석 공식은 '소요 물량 = 소요약량 × (원액의 농도÷희석하려는 농도 − 1)'이다. 원액농도를 희석농도로 나눈 값이 곧 희석배수이며, 여기서 1을 뺀 뒤 소요약량을 곱해 필요한 물의 양을 구한다.","linkedTheory":"t046"},
  {"id":"q188","level":"중급","type":"short","subject":"농약학","topic":"농약 희석 계산","question":"원액 함량이 10%인 살균제를 1%로 희석하여 사용하려 한다. 원액 200mL를 사용할 때 필요한 물의 양(mL)을 구하시오.","answer":"1,800mL(1.8L)","explanation":"물량 = 소요약량 × (원액농도÷희석농도 − 1) = 200 × (10÷1 − 1) = 200 × 9 = 1,800mL","linkedTheory":"t046"},
  {"id":"q189","level":"고급","type":"short","subject":"농약학","topic":"농약 희석 계산","question":"원액 농도 45%인 유제를 0.03%로 희석해서 사용하고자 한다. 소요약량이 60mL일 때 필요한 물의 양(L)을 구하시오.","answer":"89.94L(89,940mL)","explanation":"희석배수 = 45÷0.03 = 1,500. 물량 = 60 × (1,500 − 1) = 60 × 1,499 = 89,940mL = 89.94L","linkedTheory":"t046"},
  {"id":"q190","level":"중급","type":"short","subject":"농약학","topic":"농약 희석 계산","question":"1000배액을 만들려고 한다. 물 20L(20,000mL)에 필요한 원액의 양(mL)을 근사식으로 구하시오.","answer":"약 20mL","explanation":"근사식: 원액의 양 ≒ 물의 양 ÷ 희석배수 = 20,000 ÷ 1,000 = 20mL. (정밀식: 20,000÷999≒20.02mL로 근사값과 거의 같다.)","linkedTheory":"t046"},
  {"id":"q191","level":"초급","type":"short","subject":"농약학","topic":"농약 희석 계산","question":"500배액을 만들려면 물 5L(5,000mL)에 필요한 원액의 양(mL)은 얼마인가? (근사식 사용)","answer":"약 10mL","explanation":"근사식: 원액의 양 ≒ 물의 양 ÷ 희석배수 = 5,000 ÷ 500 = 10mL","linkedTheory":"t046"},
  {"id":"q192","level":"중급","type":"short","subject":"농약학","topic":"농약 희석 계산","question":"200배액을 만들려면 물 40L(40,000mL) 중 필요한 원액의 양(mL)은 얼마인가? (근사식 사용)","answer":"약 200mL","explanation":"근사식: 원액의 양 ≒ 물의 양 ÷ 희석배수 = 40,000 ÷ 200 = 200mL (정밀식으로는 40,000÷199≒201mL로 근사값과 큰 차이가 없다.)","linkedTheory":"t046"},
  {"id":"q193","level":"중급","type":"short","subject":"농약학","topic":"농약 희석 계산","question":"원액 함량이 20%인 농약을 0.02%로 희석하여 사용하고자 한다. 이때의 희석배수(몇 배액)를 구하시오.","answer":"1,000배","explanation":"희석배수 = 원액의 농도 ÷ 희석하려는 농도 = 20 ÷ 0.02 = 1,000. 따라서 1,000배액이다.","linkedTheory":"t046"},
  {"id":"q194","level":"중급","type":"short","subject":"농약학","topic":"농약 희석 계산","question":"어떤 살충제의 추천 사용량이 10a당 200mL이다. 이 농가가 25a의 면적에 방제하려 할 때 필요한 원액(제품)의 양(mL)을 구하시오.","answer":"500mL","explanation":"단위면적당 소요약량 = 소요약량(추천 사용량) × 면적 = 200 × (25÷10) = 200 × 2.5 = 500mL","linkedTheory":"t046"},
  {"id":"q195","level":"고급","type":"short","subject":"농약학","topic":"농약 희석 계산","question":"10a당 100mL 사용량 기준의 살균제를 30a에 살포하고자 한다. (1) 필요한 원액의 총량(mL)과 (2) 이 살균제를 1000배로 희석할 경우 필요한 물의 양(총 살포액 기준, 근사식)을 각각 구하시오.","answer":"원액 300mL, 물 약 300L(300,000mL)","explanation":"(1) 원액량 = 100 × (30÷10) = 100 × 3 = 300mL. (2) 근사식으로 물의 양 = 원액의 양 × 희석배수 = 300 × 1,000 = 300,000mL = 300L","linkedTheory":"t046"},
  {"id":"q196","level":"초급","type":"ox","subject":"농약학","topic":"유효성분 함량 계산","question":"농약의 유효성분량은 제품량에 함량(%)을 곱하여 구한다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"유효성분량 = 제품량 × 함량(%) ÷ 100 으로 계산하며, 개념적으로 '제품량에 함량(비율)을 곱한다'는 설명은 옳다.","linkedTheory":"t047"},
  {"id":"q197","level":"중급","type":"short","subject":"농약학","topic":"유효성분 함량 계산","question":"주성분 함량 50%인 수화제 4kg 중 유효성분(주성분)량은 몇 kg인가?","answer":"2kg","explanation":"유효성분량 = 제품량 × 함량(%) ÷ 100 = 4,000g × 50 ÷ 100 = 2,000g = 2kg","linkedTheory":"t047"},
  {"id":"q198","level":"중급","type":"short","subject":"농약학","topic":"유효성분 함량 계산","question":"유효성분 15g이 필요하다. 함량 30%인 제품을 사용할 때 필요한 제품량(g)을 구하시오.","answer":"50g","explanation":"제품 소요량 = 목표 유효성분량 ÷ (함량(%)÷100) = 15 ÷ 0.3 = 50g","linkedTheory":"t047"},
  {"id":"q199","level":"고급","type":"multiple","subject":"농약학","topic":"유효성분 함량 계산","question":"다음 중 농약의 유효성분 함량 표시에 대한 설명으로 옳지 않은 것은?","choices":["유효성분 함량은 제품 내 주성분의 비율(%)을 나타낸다.","같은 상표라도 제형이나 규격에 따라 유효성분 함량이 다를 수 있다.","유효성분량(g 또는 mL)은 제품량에 함량(%)을 곱하여 계산한다.","유효성분 함량이 높을수록 항상 사용량(제품량)을 늘려야 한다.","유효성분 함량은 농약 등록 시 표시가 의무화되어 있다."],"answer":3,"explanation":"유효성분 함량이 높으면 오히려 동일한 유효성분량을 얻기 위한 제품 사용량(제품량)은 줄어드는 경우가 많으므로, '항상 사용량을 늘려야 한다'는 설명은 옳지 않다.","linkedTheory":"t047"},
  {"id":"q200","level":"초급","type":"ox","subject":"농약학","topic":"물리화학적 성질","question":"고착성이 높은 농약일수록 강우(비)에 의해 쉽게 씻겨 내려간다.","choices":["맞다 (O)","틀리다 (X)"],"answer":1,"explanation":"고착성이란 살포된 약제가 작물체 표면에 잘 부착되어 비바람에도 쉽게 씻겨 내려가지 않는 성질을 말한다. 따라서 고착성이 높을수록 쉽게 씻겨 내려가지 않으므로 이 설명은 틀리다.","linkedTheory":"t048"},
  {"id":"q201","level":"중급","type":"multiple","subject":"농약학","topic":"물리화학적 성질","question":"다음 중 농약의 물리화학적 성질에 대한 설명으로 옳은 것은?","choices":["유화성 - 유제가 물에 희석되었을 때 균일한 유탁액(에멀전)을 형성하는 성질","수화성 - 살포액이 굳어 덩어리지는 성질","고착성 - 약제가 작물체 표면에서 쉽게 씻겨 내려가는 성질","확전성 - 살포액 방울이 퍼지지 않고 한곳에 뭉치는 성질","수화성 - 원제가 물에 잘 가라앉아 침전되는 성질"],"answer":0,"explanation":"유화성은 유제(오일 성분)가 물에 섞였을 때 미세한 유탁액을 형성하는 성질을 말하며 이 설명이 옳다. 나머지 선택지는 각각 수화성·고착성·확전성의 실제 의미와 반대로 서술되어 있다.","linkedTheory":"t048"},
  {"id":"q202","level":"초급","type":"short","subject":"농약학","topic":"물리화학적 성질","question":"농약을 물에 탔을 때 미세한 입자가 균일하게 분산되어 뿌옇게 되는 성질을 무엇이라 하는가?","answer":"수화성(습윤성)","explanation":"수화제 등 고체 입자가 물에 젖어 균일하게 분산되는 성질을 수화성(습윤성)이라 한다.","linkedTheory":"t048"},
  {"id":"q203","level":"중급","type":"multiple","subject":"농약학","topic":"독성구분과 잔류성","question":"급성경구 LD50 값을 기준으로 한 농약 독성 구분 중 독성이 가장 강한 등급은?","choices":["맹독성","고독성","보통독성","저독성","무독성"],"answer":0,"explanation":"LD50 값이 가장 작은 등급이 가장 강한 독성을 나타내며, 이를 맹독성이라 한다(예시 기준 LD50 5mg/kg 이하).","linkedTheory":"t049"},
  {"id":"q204","level":"초급","type":"ox","subject":"농약학","topic":"독성구분과 잔류성","question":"LD50 값이 작을수록 그 물질의 독성은 강하다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"LD50은 실험동물의 절반이 치사하는 데 필요한 양을 나타내므로, 이 값이 작을수록 적은 양으로도 치사에 이르러 독성이 강함을 의미한다.","linkedTheory":"t049"},
  {"id":"q205","level":"고급","type":"short","subject":"농약학","topic":"독성구분과 잔류성","question":"농약이 살포된 후 분해되지 않고 토양이나 작물체 내에 남아있는 성질을 무엇이라 하는가?","answer":"잔류성","explanation":"잔류성이란 농약이 분해되지 않고 작물체·토양·수계 등에 남아 있는 정도를 말하며, 반감기가 길수록 잔류성이 높다고 한다.","linkedTheory":"t049"},
  {"id":"q206","level":"중급","type":"ox","subject":"농약학","topic":"저항성 발달기구","question":"해충 체내에서 에스터라아제(esterase), 사이토크롬 P450 등 해독효소의 활성이 증가하면 살충제에 대한 저항성이 생길 수 있다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"해독효소의 활성 증가로 약제를 빠르게 분해·불활성화시키는 것은 대사적(생화학적) 저항성의 대표적인 기전이다.","linkedTheory":"t050"},
  {"id":"q207","level":"중급","type":"multiple","subject":"농약학","topic":"저항성 발달기구","question":"다음 중 농약저항성 발달기구에 해당하지 않는 것은?","choices":["대사적(생화학적) 저항성","표적부위 감수성 저하","침투저항성","행동적 저항성","공동방제(합동방제)"],"answer":4,"explanation":"공동방제(합동방제)는 저항성 발달을 늦추기 위한 관리 전략이지, 해충·병원균이 나타내는 저항성 발달기구 자체는 아니다.","linkedTheory":"t050"},
  {"id":"q208","level":"고급","type":"short","subject":"농약학","topic":"저항성 발달기구","question":"해충이 살충제와의 접촉을 피하기 위해 서식지를 옮기거나 행동 양식을 바꾸는 저항성 기전을 무엇이라 하는가?","answer":"행동적 저항성(행동적 회피)","explanation":"약제 처리 장소나 표면과의 접촉을 피하는 방향으로 행동이 바뀌어 노출 자체를 줄이는 기전을 행동적 저항성(행동적 회피)이라 한다.","linkedTheory":"t050"},
  {"id":"q209","level":"초급","type":"ox","subject":"농약학","topic":"보관·폐기와 방제장비","question":"농약은 직사광선을 피하고 서늘하고 건조한 장소에 원래 용기 그대로 보관해야 한다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"농약은 직사광선을 피해 서늘하고 건조한 곳에, 라벨이 유지된 원래 용기 그대로 보관하는 것이 원칙이다.","linkedTheory":"t051"},
  {"id":"q210","level":"고급","type":"multiple","subject":"농약학","topic":"보관·폐기와 방제장비","question":"다음 방제장비 중 넓은 과수원에서 송풍(바람)을 이용해 약액을 미립화하여 살포하는 데 주로 사용하는 것은?","choices":["배부식(등짐)분무기","스피드스프레이어(SS기)","휴대용 분무기","살분기","무인헬기(드론)"],"answer":1,"explanation":"스피드스프레이어(SS기)는 강한 송풍(바람)을 이용해 약액을 미립화하여 멀리, 넓게 살포할 수 있어 과수원 방제에 주로 사용된다.","linkedTheory":"t051"},
  {"id":"q211","level":"초급","type":"ox","subject":"잡초방제학","topic":"잡초 방제법의 종합적 분류","question":"잡초 방제법은 크게 경종적(재배적), 물리적(기계적), 화학적, 생물적 방제로 구분할 수 있다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"잡초 방제법은 예방적 방제를 기본으로 하여 경종적·물리적·화학적·생물적 방제의 4가지로 크게 분류하는 것이 일반적이다.","linkedTheory":"t052"},
  {"id":"q212","level":"초급","type":"multiple","subject":"잡초방제학","topic":"잡초 방제법의 종합적 분류","question":"다음 중 잡초의 물리적(기계적) 방제법에 해당하는 것은?","choices":["윤작을 통한 잡초 발생 억제","손제초(인력제초)를 통한 잡초 제거","선택성 제초제 살포","잡초 천적곤충 방사","제초제 저항성 품종 재배"],"answer":1,"explanation":"손제초, 예취, 경운, 화염제초, 멀칭 등 직접적인 물리적 힘이나 도구를 이용한 제거는 물리적(기계적) 방제에 해당한다. 윤작·저항성품종은 경종적 방제, 제초제 살포는 화학적 방제, 천적곤충 이용은 생물적 방제이다.","linkedTheory":"t052"},
  {"id":"q213","level":"중급","type":"short","subject":"잡초방제학","topic":"잡초 방제법의 종합적 분류","question":"논에서 우렁이를 이용하여 잡초를 방제하는 방법은 어떤 방제법에 해당하는지 쓰고, 그 방제 원리를 간단히 서술하시오.","answer":"생물적 방제에 해당하며, 우렁이가 논 표면의 잡초 유식물과 어린 새싹을 섭식(먹이활동)함으로써 잡초의 초기 정착과 생육을 억제하는 원리이다.","explanation":"우렁이농법·오리농법은 동물의 섭식·활동을 이용한 대표적인 생물적 방제 사례로, 화학적 방제를 대체하는 친환경 방제법으로 활용된다.","linkedTheory":"t052"},
  {"id":"q214","level":"중급","type":"multiple","subject":"잡초방제학","topic":"잡초 방제법의 종합적 분류","question":"다음 중 경종적(재배적) 방제법의 사례로 볼 수 없는 것은?","choices":["작물의 윤작을 통한 특정 잡초 발생 억제","밀식재배를 통한 작물의 잡초 경합력 강화","피복작물 재배를 통한 토양 피복 및 잡초 억제","화염방사기를 이용한 잡초 제거","시비·관개 관리를 통한 작물 생육 촉진 및 잡초 견제"],"answer":3,"explanation":"화염방사기(화염제초)를 이용한 잡초 제거는 열에너지를 이용해 잡초를 직접 고사시키는 물리적 방제법이며, 재배관리를 조정하는 경종적 방제와는 구분된다.","linkedTheory":"t052"},
  {"id":"q215","level":"고급","type":"short","subject":"잡초방제학","topic":"잡초 방제법의 종합적 분류","question":"하나의 방제 수단에만 의존하지 않고 경종적·물리적·화학적·생물적 방제를 상황에 맞게 조합하는 방제 개념의 명칭을 쓰고, 이러한 방식이 필요한 이유를 서술하시오.","answer":"종합적 잡초관리(IWM, Integrated Weed Management)라고 하며, 단일 방제법만 반복 사용할 경우 제초제 저항성 잡초의 출현, 방제효과의 한계, 환경 부담 증가 등의 문제가 발생하므로 여러 방제법을 상호 보완적으로 병행하여 지속가능하고 안정적인 방제효과를 얻기 위해 필요하다.","explanation":"IWM은 병해충의 IPM(종합적 해충관리)과 유사한 개념으로, 예방적 방제를 기본으로 경종적·물리적 방법을 우선 적용하고 화학적·생물적 방제를 상황에 맞게 조합하는 것을 원칙으로 한다.","linkedTheory":"t052"},
  {"id":"q216","level":"초급","type":"ox","subject":"잡초방제학","topic":"밭 잡초 방제체계","question":"밭에서는 논과 마찬가지로 담수처리를 이용하여 잡초를 방제하는 것이 일반적인 방법이다.","choices":["맞다 (O)","틀리다 (X)"],"answer":1,"explanation":"밭은 배수가 되는 토양 조건에서 재배되므로 논처럼 상시 담수를 유지할 수 없어 담수를 이용한 잡초 억제가 불가능하다. 이는 밭과 논의 잡초 방제체계가 근본적으로 다른 이유 중 하나이다.","linkedTheory":"t053"},
  {"id":"q217","level":"초급","type":"multiple","subject":"잡초방제학","topic":"밭 잡초 방제체계","question":"밭작물의 파종 후 작물과 잡초가 출아하기 전에 토양 표면에 처리하는 제초제 처리 방식을 무엇이라 하는가?","choices":["PPI(파종전처리)","PRE(파종후출아전처리)","POST(경엽처리)","휴간처리","전면처리"],"answer":1,"explanation":"PRE(Pre-emergence)는 파종 직후부터 작물·잡초 출아 전 사이에 토양 표면에 처리하여 처리층(barrier)을 형성하는 방식이다.","linkedTheory":"t053"},
  {"id":"q218","level":"중급","type":"multiple","subject":"잡초방제학","topic":"밭 잡초 방제체계","question":"밭 잡초 방제체계에서 파종 전 정지작업 시 제초제를 토양에 고르게 혼화시키는 처리 방식은?","choices":["PPI(파종전처리)","PRE(파종후출아전처리)","POST(경엽처리)","경엽살포","비닐멀칭"],"answer":0,"explanation":"PPI(Pre-Planting Incorporation)는 파종 전 단계에서 로터리 등 정지작업 시 제초제를 토양에 혼입하는 방식으로, 휘발성이나 광분해성이 큰 약제에 주로 적용된다.","linkedTheory":"t053"},
  {"id":"q219","level":"중급","type":"short","subject":"잡초방제학","topic":"밭 잡초 방제체계","question":"밭작물의 이랑(두둑)재배 시 제초제 처리와 함께 병행되는 대표적인 물리적 잡초 방제 방법을 쓰고, 그 작용 원리를 간단히 서술하시오.","answer":"비닐멀칭(피복재배)이며, 두둑을 비닐로 덮어 광을 차단함으로써 잡초 종자의 발아 및 초기 생육을 억제하는 원리이다.","explanation":"밭작물은 이랑재배가 일반적이며, 두둑에는 비닐멀칭으로 광발아성 잡초의 발아를 억제하고 고랑에는 제초제 처리나 중경제초를 병행하는 방식이 흔히 쓰인다.","linkedTheory":"t053"},
  {"id":"q220","level":"고급","type":"short","subject":"잡초방제학","topic":"밭 잡초 방제체계","question":"밭에서 문제가 되는 대표적인 화본과 잡초와 광엽잡초를 각각 1종 이상 예를 들어 설명하시오.","answer":"화본과 잡초로는 바랭이, 강아지풀 등이 있으며, 광엽잡초로는 명아주, 쇠비름, 깨풀 등이 있다. 이들은 발생 시기와 생리적 특성이 서로 달라 1회의 제초제 처리로는 완전 방제가 어렵다.","explanation":"밭은 논과 달리 담수에 의한 발생 억제가 없어 다양한 과의 잡초가 시기를 달리하여 발생하므로, 방제체계 수립 시 대상 잡초 종의 파악이 중요하다.","linkedTheory":"t053"},
  {"id":"q221","level":"초급","type":"ox","subject":"잡초방제학","topic":"제초제 처리 방법에 따른 분류","question":"전면처리는 포장 전체 면적에 고르게 제초제를 살포하는 방법이다.","choices":["맞다 (O)","틀리다 (X)"],"answer":0,"explanation":"전면처리는 작물의 이랑과 고랑을 구분하지 않고 포장 전체에 고르게 제초제를 살포하는 방식으로, 잡초가 포장 전반에 고르게 발생할 때 주로 적용한다.","linkedTheory":"t054"},
  {"id":"q222","level":"초급","type":"multiple","subject":"잡초방제학","topic":"제초제 처리 방법에 따른 분류","question":"휴간처리(줄처리)에 대한 설명으로 옳은 것은?","choices":["포장 전체 면적에 고르게 살포하는 방법이다","작물이 심긴 두둑은 피하고 고랑 부분에만 좁은 띠 모양으로 살포하는 방법이다","토양 속에 처리층을 형성하는 방법이다","잡초의 잎에만 직접 살포하는 방법이다","파종 전 정지작업 시 토양에 혼입하는 방법이다"],"answer":1,"explanation":"휴간처리는 작물열(두둑)을 피하고 잡초가 문제되는 고랑(휴간) 부분에만 좁게 살포하여 약량과 비용을 절감하는 방식이다.","linkedTheory":"t054"},
  {"id":"q223","level":"중급","type":"multiple","subject":"잡초방제학","topic":"제초제 처리 방법에 따른 분류","question":"토양처리 제초제가 효과를 제대로 발현하기 위해 처리 후 반드시 필요한 조건은?","choices":["강한 직사광선","처리 후 즉각적인 저온","적절한 강우 또는 관수","높은 습도의 바람","처리 직후의 고온 건조"],"answer":2,"explanation":"토양처리제는 살포 후 강우나 관수를 통해 약제가 토양 중에 고르게 스며들어야 처리층(barrier)이 형성되고, 이를 통과하는 잡초의 유근·유아가 약제를 흡수하여 효과가 나타난다. 가뭄 시에는 처리층 형성이 불량해져 효과가 떨어진다.","linkedTheory":"t054"},
  {"id":"q224","level":"중급","type":"short","subject":"잡초방제학","topic":"제초제 처리 방법에 따른 분류","question":"경엽처리 제초제를 살포할 때 전착제를 함께 사용하는 이유를 서술하시오.","answer":"전착제는 약액의 표면장력을 낮추어 잡초 잎 표면에 고르게 부착되도록 하고, 왁스층 등 표피 조직을 통한 약제의 흡수를 촉진하여 방제효과를 높이기 위해 사용한다.","explanation":"경엽처리제는 잎을 통해 흡수되어야 효과가 나타나므로, 약액이 잎 표면에서 흘러내리지 않고 고르게 퍼져 흡수되도록 전착제를 병용하는 것이 일반적이다.","linkedTheory":"t054"},
  {"id":"q225","level":"고급","type":"short","subject":"잡초방제학","topic":"제초제 처리 방법에 따른 분류","question":"토양처리제와 경엽처리제의 처리 시기 및 작용 기작상의 차이를 비교하여 설명하시오.","answer":"토양처리제는 잡초가 출현하기 전(파종 전후) 토양 표면에 처리층을 형성하여, 발아하는 잡초의 유근·유아가 이 처리층을 통과하며 약제를 흡수해 고사시키는 방식이다. 반면 경엽처리제는 잡초가 이미 출현한 생육 초기에 잎과 줄기에 직접 살포하여 표피를 통해 흡수된 후 식물체 내로 이행되거나(이행성) 접촉 부위만 고사시키는(접촉성) 방식으로 작용한다.","explanation":"두 처리 방식은 처리 시점(발생 전 vs 발생 후)과 흡수 경로(뿌리·유아 vs 잎)가 근본적으로 다르며, 실제 방제체계에서는 두 방식을 시기별로 조합하여 사용한다.","linkedTheory":"t054"}
];
