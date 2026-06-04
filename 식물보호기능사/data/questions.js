const QUESTIONS = [
  // ═══════════════════════════════════════════
  // 초급 - O/X + 간단 객관식 (70문제)
  // ═══════════════════════════════════════════

  // ── 식물병리학 초급 ──
  {id:"q001",level:"초급",type:"ox",subject:"식물병리학",topic:"병의 기초",
   question:"식물병 원인 중 가장 많은 비율을 차지하는 것은 곰팡이(진균)이다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 식물병 원인의 70% 이상이 곰팡이(진균)예요. 세균·바이러스·선충 순으로 비율이 낮아져요.",linkedTheory:"t001"},

  {id:"q002",level:"초급",type:"ox",subject:"식물병리학",topic:"병의 기초",
   question:"바이러스병은 살균제를 살포하면 효과적으로 치료할 수 있다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 바이러스병은 치료제가 없어요. 살균제는 곰팡이에 효과가 있고, 바이러스에는 작용하지 않아요. 예방과 매개충 방제가 핵심이에요.",linkedTheory:"t001"},

  {id:"q003",level:"초급",type:"ox",subject:"식물병리학",topic:"병의 기초",
   question:"병삼각형에서 환경 조건만 불량하면 병원체 없이도 전염성 병이 발생한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 전염성 병은 기주·병원체·환경 3요소가 동시에 갖춰져야 발생해요. 환경이 아무리 나빠도 병원체가 없으면 전염성 병은 생기지 않아요.",linkedTheory:"t001"},

  {id:"q004",level:"초급",type:"multiple",subject:"식물병리학",topic:"병의 기초",
   question:"토양을 통해 전염되는 병해로 옳은 것은?",
   choices:["오이모자이크병","도열병 포자 전파","역병","담배모자이크병","벼 줄무늬잎마름병"],
   answer:2,
   explanation:"역병(Phytophthora)은 토양 전염성 병해예요. 오이모자이크병·줄무늬잎마름병은 충매 전염, 담배모자이크병은 즙액 접촉, 도열병 포자는 기류(바람) 전파예요.",linkedTheory:"t001"},

  {id:"q005",level:"초급",type:"multiple",subject:"식물병리학",topic:"병의 기초",
   question:"종자를 통해 전염되는 병해는?",
   choices:["역병","흰가루병","도열병","잿빛곰팡이병","노균병"],
   answer:2,
   explanation:"벼 도열병은 종자 전염이 가능해요. 감염된 종자를 파종하면 다음 세대에 병이 전파돼요. 나머지는 주로 토양·충매·기류 전염이에요.",linkedTheory:"t001"},

  {id:"q006",level:"초급",type:"ox",subject:"식물병리학",topic:"역병",
   question:"역병은 고온다습한 조건에서 주로 발생한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 역병(Phytophthora)은 고온(25~30°C)에 다습한 조건, 특히 장마철과 배수 불량 토양에서 급격히 발생해요.",linkedTheory:"t002"},

  {id:"q007",level:"초급",type:"multiple",subject:"식물병리학",topic:"역병",
   question:"역병의 병원균 분류로 옳은 것은?",
   choices:["자낭균","담자균","난균류(물곰팡이)","불완전균류","접합균"],
   answer:2,
   explanation:"역병 병원균(Phytophthora)은 난균류(물곰팡이)예요. 진짜 곰팡이(진균)가 아니라 조류에 더 가까운 분류로, 일부 살균제에 효과 차이가 있어요.",linkedTheory:"t002"},

  {id:"q008",level:"초급",type:"multiple",subject:"식물병리학",topic:"역병",
   question:"역병 방제에서 가장 기본적인 경종적(재배적) 방제법은?",
   choices:["질소 비료 과다 시비","밀식 재배","배수 개선과 이랑 높이기","관수량 증가","그늘 재배"],
   answer:2,
   explanation:"역병은 과습 조건에서 급격히 발생하므로 배수를 개선하고 이랑을 높여 뿌리 부근의 과습을 막는 것이 가장 기본적인 예방법이에요.",linkedTheory:"t002"},

  {id:"q009",level:"초급",type:"multiple",subject:"식물병리학",topic:"탄저병",
   question:"탄저병의 특징적인 병징으로 옳은 것은?",
   choices:["잎 뒷면에 회색 곰팡이 발생","잎 표면에 흰색 분말 형성","과실에 동심원 무늬 + 분홍색 포자 덩어리","조직이 물러지며 악취 발생","관다발 갈변으로 시들음"],
   answer:2,
   explanation:"탄저병은 과실·잎에 동심원(타깃) 무늬 병반이 생기고, 병반 위에 분홍~주황색 포자 덩어리(점질 포자)가 형성되는 것이 특징이에요.",linkedTheory:"t003"},

  {id:"q010",level:"초급",type:"ox",subject:"식물병리학",topic:"탄저병",
   question:"탄저병은 저온건조한 봄에 주로 발생한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 탄저병은 고온다습(25~30°C, 높은 습도)한 여름~초가을에 발생이 심해요. 저온건조에서 심한 것은 흰가루병(건조)이나 잿빛곰팡이병(저온다습)이에요.",linkedTheory:"t003"},

  {id:"q011",level:"초급",type:"ox",subject:"식물병리학",topic:"흰가루병",
   question:"흰가루병은 건조하고 통풍이 불량한 조건에서 잘 발생한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 흰가루병은 대부분의 곰팡이병과 달리 건조하고 통풍이 나쁜 조건에서 잘 발생해요. 이 점이 시험에서 자주 출제되는 핵심이에요.",linkedTheory:"t004"},

  {id:"q012",level:"초급",type:"multiple",subject:"식물병리학",topic:"흰가루병",
   question:"흰가루병의 병원균 분류로 옳은 것은?",
   choices:["난균류","담자균류","자낭균류","불완전균류","접합균류"],
   answer:2,
   explanation:"흰가루병 병원균(Erysiphe, Sphaerotheca 등)은 자낭균류예요. 역병·노균병(난균류), 녹병(담자균류)과 구분해야 해요.",linkedTheory:"t004"},

  {id:"q013",level:"초급",type:"ox",subject:"식물병리학",topic:"잿빛곰팡이병",
   question:"잿빛곰팡이병은 고온다습한 여름보다 저온다습한 조건에서 잘 발생한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 잿빛곰팡이병(Botrytis cinerea)은 15~20°C의 서늘하고 다습한 조건에서 잘 발생해요. 이 점이 역병·탄저병과 반대예요.",linkedTheory:"t005"},

  {id:"q014",level:"초급",type:"multiple",subject:"식물병리학",topic:"잿빛곰팡이병",
   question:"잿빛곰팡이병 방제를 위한 핵심 관리 방법은?",
   choices:["관수량 증가로 습도 유지","시설 내 환기로 습도 낮추기","밀식 재배로 생육 촉진","질소 비료 증량 시비","고온 처리"],
   answer:1,
   explanation:"잿빛곰팡이병은 다습 조건에서 발생하므로 시설 내 환기를 철저히 하여 습도를 낮추는 것이 핵심 예방법이에요.",linkedTheory:"t005"},

  {id:"q015",level:"초급",type:"multiple",subject:"식물병리학",topic:"노균병·녹병",
   question:"노균병과 흰가루병의 차이로 옳은 것은?",
   choices:["노균병은 잎 표면, 흰가루병은 잎 뒷면에 발생","노균병은 건조, 흰가루병은 다습 조건에서 발생","노균병은 잎 뒷면 회색 곰팡이, 흰가루병은 잎 표면 흰 가루가 특징","두 병 모두 자낭균이 원인","두 병의 방제 약제는 동일"],
   answer:2,
   explanation:"노균병은 잎 뒷면에 회색~자줏빛 곰팡이(노균)가 특징이고, 흰가루병은 잎 표면에 흰색 분말이 특징이에요. 발생 조건도 노균병(서늘·다습) vs 흰가루병(건조)으로 달라요.",linkedTheory:"t006"},

  {id:"q016",level:"초급",type:"ox",subject:"식물병리학",topic:"녹병",
   question:"사과 붉은별무늬병(적성병)의 중간기주는 향나무이다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 사과 붉은별무늬병(적성병)은 향나무가 중간기주예요. 녹병균의 생활사를 위해 두 종류의 기주가 필요하며, 향나무 주변 과수원에서 피해가 커요.",linkedTheory:"t006"},

  {id:"q017",level:"초급",type:"multiple",subject:"식물병리학",topic:"녹병",
   question:"녹병의 병원균 분류로 옳은 것은?",
   choices:["자낭균","난균류","담자균","불완전균","접합균"],
   answer:2,
   explanation:"녹병 병원균(Puccinia, Phragmidium 등)은 담자균류예요. 흰가루병(자낭균), 역병·노균병(난균류)과 구분해서 기억하세요.",linkedTheory:"t006"},

  {id:"q018",level:"초급",type:"multiple",subject:"식물병리학",topic:"벼 병해",
   question:"벼 도열병의 특징적인 잎 병징은?",
   choices:["원형의 흰색 병반","방추형(마름모꼴) 회갈색 병반","잎 끝에서 시작하는 황화","구름 모양 무늬","잎 뒷면의 녹슨색 포자퇴"],
   answer:1,
   explanation:"벼 도열병의 잎 병징은 방추형(마름모꼴) 회갈색 병반이에요. 병반 가장자리는 황색을 띠고, 중앙은 회백색으로 변해요.",linkedTheory:"t007"},

  {id:"q019",level:"초급",type:"ox",subject:"식물병리학",topic:"벼 병해",
   question:"질소 비료를 많이 주면 벼 도열병 발생이 심해진다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 질소 과다 시비는 벼 조직을 연약하게 하여 도열병에 더 취약하게 만들어요. 적정 질소 시비가 도열병 예방의 중요한 경종적 방제법이에요.",linkedTheory:"t007"},

  {id:"q020",level:"초급",type:"multiple",subject:"식물병리학",topic:"벼 병해",
   question:"벼 흰잎마름병의 병원균으로 옳은 것은?",
   choices:["Magnaporthe oryzae (곰팡이)","Rhizoctonia solani (곰팡이)","Xanthomonas oryzae (세균)","Botrytis cinerea (곰팡이)","Phytophthora (난균류)"],
   answer:2,
   explanation:"벼 흰잎마름병의 병원균은 Xanthomonas oryzae(세균)예요. 세균성 병이므로 살균제가 아닌 동제(구리제)나 항생제로 방제해요. 도열병(곰팡이)·잎집무늬마름병(곰팡이)과 구분하세요!",linkedTheory:"t007"},

  {id:"q021",level:"초급",type:"multiple",subject:"식물병리학",topic:"벼 병해",
   question:"벼 잎집무늬마름병(문고병)의 특징적인 병징은?",
   choices:["방추형 회갈색 병반","잎 끝에서 황화","줄기 아래 잎집에 구름 모양 무늬","잎 뒷면 녹슨색 포자","관다발 갈변"],
   answer:2,
   explanation:"잎집무늬마름병(문고병)의 특징은 줄기 아래 잎집에 구름 모양 무늬가 생기고 점차 위로 퍼지는 것이에요. 병원균은 Rhizoctonia solani(곰팡이)예요.",linkedTheory:"t007"},

  // ── 농업해충학 초급 ──
  {id:"q022",level:"초급",type:"ox",subject:"농업해충학",topic:"해충 기초",
   question:"응애는 곤충이므로 일반 살충제로 방제할 수 있다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 응애는 곤충이 아닌 거미류(절지동물)예요. 살충제는 주로 곤충의 신경계를 표적으로 하므로 응애에는 효과가 없어요. 살비제(acaricide)를 사용해야 해요.",linkedTheory:"t008"},

  {id:"q023",level:"초급",type:"multiple",subject:"농업해충학",topic:"해충 기초",
   question:"완전변태를 하는 해충으로만 묶인 것은?",
   choices:["진딧물, 매미, 노린재","나방, 나비, 딱정벌레","메뚜기, 귀뚜라미, 노린재","진딧물, 응애, 총채벌레","매미, 잠자리, 하루살이"],
   answer:1,
   explanation:"완전변태(알→유충→번데기→성충)를 하는 해충은 나방·나비·딱정벌레·파리·벌류예요. 진딧물·매미·노린재·메뚜기는 번데기 단계가 없는 불완전변태 해충이에요.",linkedTheory:"t008"},

  {id:"q024",level:"초급",type:"multiple",subject:"농업해충학",topic:"해충 기초",
   question:"씹는 입(저작구)을 가진 해충의 피해 특징으로 옳은 것은?",
   choices:["잎이 황화되며 위축","잎에 구멍이 생기거나 잎맥만 남음","모자이크 증상 발생","잎 표면에 흰 반점","줄기 속이 빈 구멍만 보임"],
   answer:1,
   explanation:"씹는 입(저작구) 해충(나방 유충, 딱정벌레 등)은 잎을 갉아먹어 구멍이 생기거나 잎맥만 남기는 것이 특징이에요. 잎 황화·모자이크는 흡즙해충의 피해예요.",linkedTheory:"t008"},

  {id:"q025",level:"초급",type:"multiple",subject:"농업해충학",topic:"진딧물",
   question:"진딧물이 일으키는 3가지 피해로 바르게 묶인 것은?",
   choices:["잎 갉아먹기, 줄기 천공, 뿌리 가해","수액 흡즙, 바이러스 매개, 감로로 인한 그을음병","잎 갉아먹기, 바이러스 매개, 토양 전염","뿌리 흡즙, 감로 분비, 천공 가해","모자이크 직접 발생, 수액 흡즙, 종자 오염"],
   answer:1,
   explanation:"진딧물의 3가지 피해: ①수액 직접 흡즙(위축·황화), ②바이러스병 매개(CMV, PVY 등), ③감로 분비로 그을음병 유발이에요. 이 세 가지가 기출 핵심이에요.",linkedTheory:"t009"},

  {id:"q026",level:"초급",type:"ox",subject:"농업해충학",topic:"진딧물",
   question:"진딧물 유인 끈끈이트랩으로 황색(노란색) 트랩이 효과적이다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 진딧물(유시충)은 황색에 유인되므로 황색 끈끈이트랩이 효과적이에요. 총채벌레는 청색 트랩이 효과적이에요. 색깔 구분은 반드시 외워두세요!",linkedTheory:"t009"},

  {id:"q027",level:"초급",type:"multiple",subject:"농업해충학",topic:"진딧물",
   question:"복숭아혹진딧물이 주로 매개하는 바이러스는?",
   choices:["TSWV","TYLCV","RSV","CMV","TMV"],
   answer:3,
   explanation:"복숭아혹진딧물은 CMV(오이모자이크바이러스), PVY(감자Y바이러스) 등을 주로 매개해요. TSWV는 총채벌레, TYLCV는 담배가루이, RSV는 애멸구가 매개해요.",linkedTheory:"t009"},

  {id:"q028",level:"초급",type:"multiple",subject:"농업해충학",topic:"나방류",
   question:"배추좀나방의 특징으로 옳은 것은?",
   choices:["1년 1~2세대만 발생","벼를 주로 가해","연중 10세대 이상 발생, Bt제 저항성 강함","유충이 지면 근처 줄기를 잘라 쓰러뜨림","2화기에 이삭을 가해하여 백수 발생"],
   answer:2,
   explanation:"배추좀나방은 연중 10세대 이상 발생하고, Bt제(생물농약)에 대한 저항성이 강하게 발달한 것이 특징이에요. 십자화과 채소(배추·양배추 등)를 주로 가해해요.",linkedTheory:"t010"},

  {id:"q029",level:"초급",type:"multiple",subject:"농업해충학",topic:"나방류",
   question:"거세미나방 유충의 피해 특징은?",
   choices:["잎 속에서 굴을 파며 가해","잎 표면만 갉아내는 창문형 피해","낮에는 토양 속에 숨고 밤에 지면 줄기를 잘라냄","이삭 속에 침입하여 가해","뿌리를 갉아먹어 고사"],
   answer:2,
   explanation:"거세미나방 유충은 야행성으로, 낮에는 토양 속에 숨어 있다가 밤에 나와 지면 근처 줄기를 잘라 쓰러뜨려요. 이런 피해 형태에서 '거세미'라는 이름이 붙었어요.",linkedTheory:"t010"},

  {id:"q030",level:"초급",type:"ox",subject:"농업해충학",topic:"나방류",
   question:"이화명나방 2화기 유충은 벼 이삭을 가해하여 백수(흰 이삭)를 발생시킨다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 이화명나방 1화기(6월)는 분얼기 피해(심고), 2화기(8월)는 출수기 이삭을 가해해 등숙이 안 되는 백수(흰 이삭)를 발생시켜요.",linkedTheory:"t010"},

  {id:"q031",level:"초급",type:"multiple",subject:"농업해충학",topic:"벼 해충",
   question:"벼멸구에 대한 설명으로 옳은 것은?",
   choices:["국내에서 월동하는 토착 해충이다","벼 줄무늬잎마름병을 매개한다","매년 중국 등지에서 비래하는 해충이다","1화기 유충이 벼 줄기 속을 가해한다","주로 잎 표면에 흰 반점을 발생시킨다"],
   answer:2,
   explanation:"벼멸구는 국내에서 월동이 불가능한 비래해충으로, 매년 중국·일본 등지에서 기류를 타고 날아와요. 애멸구는 국내 월동이 가능한 것과 구분하세요.",linkedTheory:"t011"},

  {id:"q032",level:"초급",type:"ox",subject:"농업해충학",topic:"벼 해충",
   question:"애멸구는 벼 줄무늬잎마름병 바이러스(RSV)를 매개한다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 애멸구는 벼 줄무늬잎마름병 바이러스(RSV)를 매개하는 주요 해충이에요. 벼멸구는 바이러스를 매개하지 않는 것과 구분하세요.",linkedTheory:"t011"},

  // ── 잡초방제학 초급 ──
  {id:"q033",level:"초급",type:"ox",subject:"잡초방제학",topic:"잡초 기초",
   question:"사초과 잡초는 줄기 단면이 삼각형인 것이 특징이다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 사초과 잡초(올방개, 너도방동사니 등)는 줄기 단면이 삼각형이에요. 화본과는 단면이 원형인 것과 구분되는 핵심 특징이에요.",linkedTheory:"t012"},

  {id:"q034",level:"초급",type:"multiple",subject:"잡초방제학",topic:"잡초 기초",
   question:"다년생 잡초 방제가 1년생보다 어려운 이유로 옳은 것은?",
   choices:["종자 생산량이 많기 때문","생육 속도가 빠르기 때문","뿌리·지하경·괴경으로도 번식하여 지상부 제거 후에도 다시 자라기 때문","독성 물질을 분비하기 때문","제초제에 저항성이 강하기 때문"],
   answer:2,
   explanation:"다년생 잡초(쑥, 올방개, 띠 등)는 뿌리·지하경·괴경 등으로 영양번식을 하기 때문에 지상부를 제거해도 지하부가 살아있어 다시 자라요. 이게 방제를 어렵게 하는 핵심 이유예요.",linkedTheory:"t012"},

  {id:"q035",level:"초급",type:"multiple",subject:"잡초방제학",topic:"논밭 잡초",
   question:"논에서 가장 문제가 되는 잡초로, 초기에 벼와 구분하기 어려운 것은?",
   choices:["올방개","너도방동사니","피(稗)","물달개비","가래"],
   answer:2,
   explanation:"'피'는 화본과 1년생 잡초로, 어린 시기에 벼와 매우 비슷하게 생겨 구별이 어려워요. 논에서 가장 방제하기 어려운 잡초 중 하나예요.",linkedTheory:"t012"},

  {id:"q036",level:"초급",type:"multiple",subject:"잡초방제학",topic:"논밭 잡초",
   question:"올방개에 대한 설명으로 옳은 것은?",
   choices:["화본과 1년생 잡초","광엽 다년생 잡초","사초과 다년생 잡초로 지하에 괴경 형성","화본과 다년생 잡초","사초과 1년생 잡초"],
   answer:2,
   explanation:"올방개는 사초과 다년생 잡초로, 지하에 괴경(덩이줄기)을 형성해요. 줄기 단면이 삼각형이고 괴경으로 번식해 방제가 매우 어려운 논의 악성 잡초예요.",linkedTheory:"t012"},

  // ── 농약학 초급 ──
  {id:"q037",level:"초급",type:"multiple",subject:"농약학",topic:"농약 기초",
   question:"농약 독성 LD50이 30mg/kg인 약제의 독성 등급은?",
   choices:["저독성","보통독성","고독성","맹독성","초저독성"],
   answer:3,
   explanation:"LD50 30mg/kg은 50mg/kg 이하이므로 맹독성이에요. 암기법: 맹독성(50↓) - 고독성(50~500) - 보통독성(500~5,000) - 저독성(5,000↑)",linkedTheory:"t013"},

  {id:"q038",level:"초급",type:"ox",subject:"농약학",topic:"농약 기초",
   question:"살충제는 곰팡이병에도 효과가 있으므로 살균제 대신 사용할 수 있다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 살충제와 살균제는 작용 기작이 완전히 달라요. 살충제는 해충(곤충·응애 등)에만, 살균제는 곰팡이·세균에만 효과가 있어요.",linkedTheory:"t013"},

  {id:"q039",level:"초급",type:"multiple",subject:"농약학",topic:"농약 기초",
   question:"농약 PHI(수확 전 안전일수)가 7일인 경우 옳은 설명은?",
   choices:["수확 7일 후부터 농약이 분해된다","수확 7일 전까지만 농약을 살포할 수 있다","7일마다 농약을 살포해야 한다","농약 개봉 후 7일 이내 사용해야 한다","수확 후 7일간 출하를 금지한다"],
   answer:1,
   explanation:"PHI 7일은 수확 예정일 7일 전 이전까지만 살포할 수 있다는 뜻이에요. 즉, 수확 7일 전이 마지막 살포 가능일이에요.",linkedTheory:"t013"},

  {id:"q040",level:"초급",type:"multiple",subject:"농약학",topic:"농약 기초",
   question:"농약 살포 시 옳지 않은 행동은?",
   choices:["방제복과 방독마스크를 착용한다","바람을 등지고 살포한다","이른 아침 서늘할 때 살포한다","고온 한낮(35°C 이상)에 집중 살포한다","살포 후 비누로 손과 얼굴을 세척한다"],
   answer:3,
   explanation:"고온 한낮에 살포하면 약해가 발생하기 쉽고, 농약 증기를 흡입할 위험도 높아요. 이른 아침이나 해질 무렵 서늘한 시간에 살포하는 것이 안전해요.",linkedTheory:"t013"},

  // 추가 초급 문제
  {id:"q041b",level:"초급",type:"ox",subject:"식물병리학",topic:"병의 기초",
   question:"식물병의 비전염성 병은 다른 식물로 전파되지 않는다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 비전염성 병(동해, 가뭄, 영양 결핍 등)은 병원체가 없으므로 다른 식물로 전파되지 않아요. 전파되는 것은 전염성 병만이에요.",linkedTheory:"t001"},

  {id:"q042b",level:"초급",type:"multiple",subject:"식물병리학",topic:"벼 병해",
   question:"벼 도열병 방제에 적합한 약제는?",
   choices:["보르도액","옥시테트라사이클린","트리사이클라졸","2,4-D","파라콰트"],
   answer:2,
   explanation:"트리사이클라졸은 벼 도열병 전용 살균제예요. 보르도액·옥시테트라사이클린은 세균병, 2,4-D·파라콰트는 제초제예요.",linkedTheory:"t007"},

  {id:"q043b",level:"초급",type:"ox",subject:"농업해충학",topic:"벼 해충",
   question:"벼멸구는 집단으로 벼 줄기 기부를 흡즙하여 벼를 쓰러뜨린다(도복).",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 벼멸구는 집단으로 벼 줄기 기부에서 수액을 흡즙해요. 심하면 벼가 쓰러지는 도복 현상이 나타나요.",linkedTheory:"t011"},

  {id:"q044b",level:"초급",type:"multiple",subject:"잡초방제학",topic:"잡초 기초",
   question:"밭에서 가장 흔히 볼 수 있는 화본과 1년생 잡초는?",
   choices:["쑥","토끼풀","올방개","바랭이","쇠비름"],
   answer:3,
   explanation:"바랭이는 밭에서 가장 흔한 화본과 1년생 잡초예요. 쑥·토끼풀은 다년생 광엽, 올방개는 사초과, 쇠비름은 광엽 1년생이에요.",linkedTheory:"t012"},

  {id:"q045b",level:"초급",type:"ox",subject:"농약학",topic:"농약 기초",
   question:"농약을 희석 배수보다 진하게 사용하면 방제 효과가 더 좋아진다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 적정 희석 배수보다 진하게 사용하면 약해(식물 피해)가 발생하고 잔류 농약 초과 문제도 생겨요. 반드시 라벨에 표시된 희석 배수를 지켜야 해요.",linkedTheory:"t013"},

  {id:"q046b",level:"초급",type:"multiple",subject:"농업해충학",topic:"나방류",
   question:"Bt제(바실루스 투링기엔시스)가 주로 방제하는 해충은?",
   choices:["진딧물류","응애류","나방·나비 유충","온실가루이","벼멸구"],
   answer:2,
   explanation:"Bt제는 나방·나비 유충(식엽성 해충)에 효과가 있는 생물적 방제제예요. 유충이 섭취하면 장내에서 독소가 작용해 죽어요. 진딧물·응애·온실가루이에는 효과가 없어요.",linkedTheory:"t010"},

  {id:"q047b",level:"초급",type:"ox",subject:"식물병리학",topic:"탄저병",
   question:"탄저병 병원균(Colletotrichum)은 주로 빗물에 의해 포자가 퍼진다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:0,
   explanation:"맞아요! 탄저병 포자는 점질(끈적한) 덩어리로 형성되어 빗물이나 관개수에 의해 주로 전파돼요. 비가 많은 시기에 급격히 확산되는 이유예요.",linkedTheory:"t003"},

  {id:"q048b",level:"초급",type:"multiple",subject:"농약학",topic:"농약 기초",
   question:"응애 방제에 살비제를 사용해야 하는 이유로 옳은 것은?",
   choices:["살비제가 더 저렴하기 때문","응애는 곤충이 아닌 거미류로 살충제의 작용점이 다르기 때문","살충제에 저항성이 생겼기 때문","살비제가 환경에 더 안전하기 때문","살충제는 응애 알에만 효과가 없기 때문"],
   answer:1,
   explanation:"응애는 곤충이 아닌 거미류예요. 살충제는 곤충의 신경계를 표적으로 하므로 응애에는 작용점이 달라 효과가 없어요. 살비제를 따로 사용해야 해요.",linkedTheory:"t013"},

  {id:"q049b",level:"초급",type:"multiple",subject:"잡초방제학",topic:"잡초 기초",
   question:"잡초가 작물 생산에 미치는 피해로 옳지 않은 것은?",
   choices:["광·수분·양분 경쟁으로 수량 감소","병해충의 중간 기주 역할","농작업 방해","토양의 침식 방지 효과 제공","타감작용으로 작물 생육 억제"],
   answer:3,
   explanation:"잡초가 토양 침식을 방지하는 면도 있지만, 이는 작물 재배 관점에서 '이점'으로 보기 어려워요. 나머지 ①②③⑤는 모두 잡초로 인한 피해예요.",linkedTheory:"t012"},

  {id:"q050b",level:"초급",type:"ox",subject:"식물병리학",topic:"흰가루병",
   question:"흰가루병은 주로 잎 뒷면에 흰색 가루가 생긴다.",
   choices:["맞다 (O)","틀리다 (X)"],answer:1,
   explanation:"틀렸어요! 흰가루병은 잎 '표면(앞면)'에 흰색 분말상 균사가 나타나요. 잎 뒷면에 주로 발생하는 것은 노균병이에요.",linkedTheory:"t004"},

  // ═══════════════════════════════════════════
  // 중급 - 5지선다 (80문제)
  // ═══════════════════════════════════════════

  // ── 식물병리학 중급 ──
  {id:"q041",level:"중급",type:"multiple",subject:"식물병리학",topic:"바이러스병",
   question:"CMV(오이모자이크바이러스)를 매개하는 주요 해충은?",
   choices:["이화명나방","점박이응애","복숭아혹진딧물","꽃노랑총채벌레","온실가루이"],
   answer:2,
   explanation:"CMV는 복숭아혹진딧물 등 진딧물류가 주요 매개충이에요. TSWV→총채벌레, TYLCV→담배가루이, RSV→애멸구로 외우세요.",linkedTheory:"t014"},

  {id:"q042",level:"중급",type:"multiple",subject:"식물병리학",topic:"바이러스병",
   question:"TSWV(토마토반점위조바이러스)를 매개하는 해충은?",
   choices:["복숭아혹진딧물","벼멸구","꽃노랑총채벌레","온실가루이","이화명나방"],
   answer:2,
   explanation:"TSWV는 꽃노랑총채벌레가 주요 매개충이에요. 청색 끈끈이트랩으로 총채벌레를 방제하면 TSWV 피해도 줄일 수 있어요.",linkedTheory:"t014"},

  {id:"q043",level:"중급",type:"multiple",subject:"식물병리학",topic:"바이러스병",
   question:"담배모자이크바이러스(TMV) 전파에 대한 설명으로 옳은 것은?",
   choices:["진딧물에 의해 매개된다","총채벌레에 의해 매개된다","작업자의 손이나 도구 접촉으로 즙액 전파가 주요 경로","종자로는 전파되지 않는다","토양 선충에 의해 매개된다"],
   answer:2,
   explanation:"TMV는 매개충이 아닌 즙액 접촉(작업자 손, 도구, 의류)으로 주로 전파돼요. 따라서 작업 도구 소독(제3인산나트륨 처리 등)이 중요한 방제법이에요.",linkedTheory:"t014"},

  {id:"q044",level:"중급",type:"multiple",subject:"식물병리학",topic:"바이러스병",
   question:"바이러스병 방제 방법으로 옳지 않은 것은?",
   choices:["매개충(진딧물·총채벌레 등) 철저 방제","이병 식물 즉시 제거·소각","살균제(만코제브)를 살포하여 치료","저항성 품종 사용","작업 도구 소독"],
   answer:2,
   explanation:"바이러스병은 치료제가 없어요. 살균제(만코제브)는 곰팡이 방제제이므로 바이러스에는 효과가 없어요. 매개충 방제·이병주 제거·저항성 품종이 핵심이에요.",linkedTheory:"t014"},

  {id:"q045",level:"중급",type:"multiple",subject:"식물병리학",topic:"세균병",
   question:"풋마름병(청고병)의 특징으로 옳은 것은?",
   choices:["잎에 방추형 회갈색 병반이 생긴다","조직이 물러지며 악취가 난다","관다발이 막혀 잎이 푸른 채로 급격히 시든다","잎 뒷면에 회색 곰팡이가 생긴다","과실에 동심원 무늬 병반이 생긴다"],
   answer:2,
   explanation:"풋마름병(청고병)은 Ralstonia solanacearum(세균)이 관다발을 막아 물 이동이 차단되므로, 잎이 푸른 채로(청고, 靑枯) 급격히 시드는 것이 특징이에요.",linkedTheory:"t015"},

  {id:"q046",level:"중급",type:"multiple",subject:"식물병리학",topic:"세균병",
   question:"무름병 방제 방법으로 옳지 않은 것은?",
   choices:["수확·운반 시 상처 방지","저장 전 건조 및 소독","저장고 환기, 적정 온도(0~4°C) 유지","이병 식물체 즉시 제거","살균제(만코제브)를 과도하게 살포"],
   answer:4,
   explanation:"만코제브는 곰팡이 방제용 보호살균제예요. 무름병은 세균(Pectobacterium)이 원인이므로 살균제 과다 살포는 효과가 없어요. 물리적 예방(상처 방지, 저온 저장)이 핵심이에요.",linkedTheory:"t015"},

  {id:"q047",level:"중급",type:"multiple",subject:"식물병리학",topic:"세균병",
   question:"세균병에 효과적인 방제 약제로 옳은 것은?",
   choices:["트리사이클라졸","이프로디온","아족시스트로빈","보르도액(황산구리+석회)","만코제브"],
   answer:3,
   explanation:"보르도액(구리제)은 살균+살세균 효과가 있어 세균병 방제에 효과적이에요. 나머지는 곰팡이 방제용 살균제예요. 항생제(스트렙토마이신, 옥시테트라사이클린)도 세균병에 사용해요.",linkedTheory:"t015"},

  {id:"q048",level:"중급",type:"multiple",subject:"식물병리학",topic:"선충병",
   question:"뿌리혹선충의 피해 증상으로 옳은 것은?",
   choices:["잎에 동심원 무늬 병반","뿌리에 혹(gall) 형성 및 지상부 생육 불량","줄기 기부 흡즙에 의한 쓰러짐","잎 뒷면에 회색 곰팡이","조직 물러짐과 악취"],
   answer:1,
   explanation:"뿌리혹선충(Meloidogyne)은 뿌리에 혹(gall)을 형성해요. 뿌리 기능이 저하되어 지상부가 황화·위축되고 생육이 불량해져요.",linkedTheory:"t016"},

  // ── 농업해충학 중급 ──
  {id:"q049",level:"중급",type:"multiple",subject:"농업해충학",topic:"미소 해충",
   question:"점박이응애에 대한 설명으로 옳지 않은 것은?",
   choices:["잎 뒷면에서 거미줄을 치며 집단 서식","고온건조 조건에서 폭발적 증가","살비제(아바멕틴, 헥시티아족스 등)로 방제","일반 살충제(클로르피리포스 등)로 효과적으로 방제","칠레이리응애가 주요 천적"],
   answer:3,
   explanation:"응애는 거미류로 일반 살충제로는 방제가 안 돼요. 살비제를 사용해야 해요. 저항성 발달이 빠르므로 작용 기작이 다른 살비제를 교호 살포해야 해요.",linkedTheory:"t017"},

  {id:"q050",level:"중급",type:"multiple",subject:"농업해충학",topic:"미소 해충",
   question:"꽃노랑총채벌레(TSWV 매개)를 방제하기 위한 끈끈이트랩 색깔은?",
   choices:["황색","적색","녹색","청색","백색"],
   answer:3,
   explanation:"총채벌레는 청색(파란색)에 유인되므로 청색 끈끈이트랩이 효과적이에요. 진딧물·온실가루이는 황색 트랩을 사용해요.",linkedTheory:"t017"},

  {id:"q051",level:"중급",type:"multiple",subject:"농업해충학",topic:"미소 해충",
   question:"온실가루이의 천적으로 옳은 것은?",
   choices:["칠레이리응애","무당벌레","오이이리응애","온실가루이좀벌","기생봉(진디벌)"],
   answer:3,
   explanation:"온실가루이의 천적은 온실가루이좀벌이에요. 칠레이리응애→응애, 무당벌레·진디벌→진딧물, 오이이리응애→총채벌레의 천적이에요.",linkedTheory:"t017"},

  {id:"q052",level:"중급",type:"multiple",subject:"농업해충학",topic:"미소 해충",
   question:"응애 방제 시 저항성 관리 방법으로 가장 적절한 것은?",
   choices:["같은 살비제를 고농도로 반복 사용","작용 기작이 다른 살비제를 교호 살포","살충제와 살비제를 혼용하여 사용","비가 올 때 집중 살포","한 가지 약제를 시즌 내내 사용"],
   answer:1,
   explanation:"응애는 저항성이 빠르게 발달하므로 작용 기작이 다른 살비제를 번갈아 사용(교호 살포)하는 것이 저항성 관리의 핵심이에요.",linkedTheory:"t017"},

  {id:"q053",level:"중급",type:"multiple",subject:"농업해충학",topic:"기타 해충",
   question:"잎굴파리류의 피해 특징으로 옳은 것은?",
   choices:["잎 표면에 흰색 가루 형성","잎 조직 속을 굴 파며 구불구불한 흰 선 형성","잎 뒷면에서 수액 흡즙","줄기 기부에서 수액 집단 흡즙","이삭 속에 침입하여 가해"],
   answer:1,
   explanation:"잎굴파리 유충은 잎 조직(엽육) 속에서 굴을 파며 가해해요. 잎 표면에 구불구불한 흰색 줄무늬가 생기는 것이 특징이에요.",linkedTheory:"t018"},

  {id:"q054",level:"중급",type:"multiple",subject:"농업해충학",topic:"기타 해충",
   question:"고자리파리의 유충이 가해하는 부위로 옳은 것은?",
   choices:["잎 표면","잎 조직 내부","뿌리 및 지제부","이삭","줄기 내부"],
   answer:2,
   explanation:"고자리파리 유충은 파·양파·마늘 등의 뿌리 및 지제부를 가해해요. 피해를 받은 식물은 황화·시들음 증상이 나타나요.",linkedTheory:"t018"},

  // ── 잡초방제학 중급 ──
  {id:"q055",level:"중급",type:"multiple",subject:"잡초방제학",topic:"제초제",
   question:"글리포세이트에 대한 설명으로 옳은 것은?",
   choices:["선택성 이행형 제초제","비선택성 이행형 제초제로 다년생 잡초에도 효과","비선택성 접촉형으로 지상부만 고사","화본과만 방제하는 선택성 제초제","토양처리제"],
   answer:1,
   explanation:"글리포세이트는 비선택성 이행형 제초제예요. 모든 식물에 작용하며 뿌리까지 고사시켜 다년생 잡초 방제에도 효과적이에요.",linkedTheory:"t019"},

  {id:"q056",level:"중급",type:"multiple",subject:"잡초방제학",topic:"제초제",
   question:"파라콰트(paraquat)의 특성으로 옳은 것은?",
   choices:["선택성 이행형","비선택성 접촉형, 맹독성","화본과 선택성","토양처리제로만 사용","다년생 잡초에 특히 효과"],
   answer:1,
   explanation:"파라콰트는 비선택성 접촉형 제초제로 맹독성이에요. 약제가 닿은 부위만 고사시키므로 다년생 잡초에는 불완전해요. 빛(광분해)이 있어야 효과가 나타나는 특징도 있어요.",linkedTheory:"t019"},

  {id:"q057",level:"중급",type:"multiple",subject:"잡초방제학",topic:"제초제",
   question:"2,4-D의 주요 적용 용도로 옳은 것은?",
   choices:["논 화본과(피) 방제","과수원 비선택성 제초","밭 사초과 잡초 방제","벼논 광엽 잡초 선택적 방제","비경작지 전면 방제"],
   answer:3,
   explanation:"2,4-D는 선택적으로 광엽 잡초(쌍자엽)를 방제하는 옥신계 제초제예요. 벼(화본과)에는 안전하고 논 광엽 잡초(물달개비 등)를 방제하는 데 주로 사용해요.",linkedTheory:"t019"},

  {id:"q058",level:"중급",type:"multiple",subject:"잡초방제학",topic:"제초제",
   question:"토양처리제와 경엽처리제의 차이로 옳은 것은?",
   choices:["토양처리제는 다년생에만, 경엽처리제는 1년생에만 효과","토양처리제는 발아 전 토양 처리, 경엽처리제는 발아 후 잎에 직접 처리","토양처리제는 비선택성, 경엽처리제는 선택성","두 가지는 동의어","토양처리제가 항상 독성이 높음"],
   answer:1,
   explanation:"토양처리제는 잡초 발아 전 토양에 처리해 발아를 억제하는 예방적 제초제이고, 경엽처리제는 이미 발아·생육 중인 잡초의 잎에 직접 살포하는 방제용 제초제예요.",linkedTheory:"t019"},

  // ── 농약학 중급 ──
  {id:"q059",level:"중급",type:"multiple",subject:"농약학",topic:"농약 제형",
   question:"물에 희석하지 않고 토양에 직접 처리하는 제형은?",
   choices:["유제(EC)","수화제(WP)","입제(G)","액상수화제(SC)","훈연제"],
   answer:2,
   explanation:"입제(G, Granule)는 알갱이 형태로 희석 없이 토양에 직접 처리해요. 토양 살선충제, 살충제 등에 사용해요.",linkedTheory:"t020"},

  {id:"q060",level:"중급",type:"multiple",subject:"농약학",topic:"농약 제형",
   question:"유제(EC)와 수화제(WP)의 차이로 옳은 것은?",
   choices:["유제는 희석 불필요, 수화제는 희석 필요","유제는 유기용매에 녹임, 수화제는 물에 현탁하여 사용","유제는 토양 처리용, 수화제는 경엽 처리용","유제는 입자가 크고, 수화제는 기체 형태","두 제형은 동일"],
   answer:1,
   explanation:"유제(EC)는 유효성분을 유기용매에 녹인 것이고, 수화제(WP)는 분말 형태로 물에 현탁해 사용해요. 둘 다 물에 희석해 사용하지만 물리적 상태가 달라요.",linkedTheory:"t020"},

  {id:"q061",level:"중급",type:"multiple",subject:"농약학",topic:"농약 제형",
   question:"시설(하우스) 내에서 연기 형태로 사용하는 제형은?",
   choices:["유제","수화제","입제","훈연제","분제"],
   answer:3,
   explanation:"훈연제(FU)는 점화하면 연기가 발생하여 시설 내 해충·균을 방제해요. 사람이 들어가지 않고 문을 닫은 상태에서 사용하므로 밀폐 시설에 적합해요.",linkedTheory:"t020"},

  {id:"q062",level:"중급",type:"multiple",subject:"농약학",topic:"살충제 계통",
   question:"유기인계와 카바메이트계 살충제의 공통 작용 기작은?",
   choices:["신경 Na채널 교란","니코틴성 수용체 자극","콜린에스테라제 저해","라이아노딘 수용체 활성화","GABA 수용체 차단"],
   answer:2,
   explanation:"유기인계와 카바메이트계 모두 아세틸콜린에스테라제(콜린에스테라제)를 저해해요. 같은 작용점이므로 두 계통 간에는 교호 살포 효과가 낮아요.",linkedTheory:"t021"},

  {id:"q063",level:"중급",type:"multiple",subject:"농약학",topic:"살충제 계통",
   question:"네오니코티노이드계 살충제(이미다클로프리드 등)의 특징으로 옳은 것은?",
   choices:["식물 체내로 이행 안 됨","담자균류에 효과적","니코틴성 아세틸콜린 수용체 자극, 침투이행성","신경 Na채널을 교란하여 작용","콜린에스테라제를 저해"],
   answer:2,
   explanation:"네오니코티노이드계는 니코틴성 아세틸콜린 수용체를 자극하는 신경계 살충제예요. 침투이행성이 있어 흡즙해충(진딧물 등) 방제에 특히 효과적이에요.",linkedTheory:"t021"},

  {id:"q064",level:"중급",type:"multiple",subject:"농약학",topic:"살충제 계통",
   question:"나방류 유충 방제에 특히 효과적인 살충제 계통은?",
   choices:["유기인계","피레스로이드계","네오니코티노이드계","다이아미드계(클로란트라닐리프롤)","스피노신계만"],
   answer:3,
   explanation:"다이아미드계(클로란트라닐리프롤 등)는 라이아노딘 수용체를 활성화해 근육 수축을 유발하며 나방류 유충에 특히 효과적이에요.",linkedTheory:"t021"},

  {id:"q065",level:"중급",type:"multiple",subject:"농약학",topic:"살균제",
   question:"잿빛곰팡이병 방제에 적합한 살균제 계통으로 옳은 것은?",
   choices:["동제(보르도액)","트리사이클라졸","이프로디온(디카르복시미드계)","파라콰트","글리포세이트"],
   answer:2,
   explanation:"이프로디온(디카르복시미드계)은 잿빛곰팡이병(Botrytis) 방제에 효과적인 살균제예요. 보르도액은 세균병·일반 곰팡이, 트리사이클라졸은 도열병, 파라콰트·글리포세이트는 제초제예요.",linkedTheory:"t022"},

  {id:"q066",level:"중급",type:"multiple",subject:"농약학",topic:"살균제",
   question:"보르도액의 조성으로 옳은 것은?",
   choices:["황산구리 + 유황","황산구리 + 소석회(생석회)","황산동 + 알코올","질산구리 + 석회","황산구리 + 황산암모늄"],
   answer:1,
   explanation:"보르도액은 황산구리(CuSO₄)와 소석회(Ca(OH)₂, 생석회)를 물에 혼합한 것이에요. 구리 이온이 살균·살세균 효과를 내요.",linkedTheory:"t022"},

  // 추가 중급 문제
  {id:"q067b",level:"중급",type:"multiple",subject:"식물병리학",topic:"곰팡이병",
   question:"벼 잎집무늬마름병(문고병)의 방제 약제로 적합한 것은?",
   choices:["트리사이클라졸","프로피코나졸","옥시테트라사이클린","파라콰트","이미다클로프리드"],
   answer:1,
   explanation:"잎집무늬마름병(문고병, Rhizoctonia solani)은 프로피코나졸, 발리다마이신 등 살균제로 방제해요. 트리사이클라졸은 도열병 전용, 옥시테트라사이클린은 세균병, 나머지는 다른 용도예요.",linkedTheory:"t007"},

  {id:"q068b",level:"중급",type:"multiple",subject:"농업해충학",topic:"해충 기초",
   question:"불완전변태를 하는 해충만으로 묶인 것은?",
   choices:["나방, 파리, 벌","진딧물, 매미, 메뚜기","나방, 나비, 딱정벌레","파리, 벌, 딱정벌레","모기, 나방, 벌"],
   answer:1,
   explanation:"불완전변태(알→약충→성충, 번데기 없음)를 하는 해충은 진딧물, 매미, 메뚜기, 노린재 등이에요. 나방·나비·딱정벌레·파리·벌은 완전변태예요.",linkedTheory:"t008"},

  {id:"q069b",level:"중급",type:"multiple",subject:"잡초방제학",topic:"제초제",
   question:"논에서 이앙 직후 초기 잡초 방제에 가장 효과적인 방법은?",
   choices:["경엽처리제를 잡초 발생 후 살포","이앙 직후 담수 상태에서 토양처리제 처리","이앙 1개월 후 경엽처리","경운만으로 방제","잡초가 30cm 이상 자란 후 방제"],
   answer:1,
   explanation:"논 초기 방제는 이앙 직후 7일 이내 담수 상태에서 토양처리제를 처리하는 것이 가장 효과적이에요. 담수 유지로 약효가 지속되고 피(화본과) 등 초기 발생도 억제돼요.",linkedTheory:"t019"},

  {id:"q070b",level:"중급",type:"multiple",subject:"농약학",topic:"살충제",
   question:"피레스로이드계 살충제의 작용 기작은?",
   choices:["콜린에스테라제 저해","니코틴성 수용체 자극","신경 나트륨(Na) 채널 교란","라이아노딘 수용체 활성화","GABA 수용체 차단"],
   answer:2,
   explanation:"피레스로이드계(사이퍼메트린, 델타메트린 등)는 신경세포의 나트륨(Na) 채널을 교란하여 신경을 과흥분시켜요. 저온에서 효과가 높은 특징도 있어요.",linkedTheory:"t021"},

  {id:"q071b",level:"중급",type:"multiple",subject:"식물병리학",topic:"세균병",
   question:"불마름병(화상병)에 대한 설명으로 옳은 것은?",
   choices:["병원균이 곰팡이이다","주로 벼에 피해를 준다","Erwinia amylovora(세균)가 원인, 장미과 식물 피해","살균제로 효과적으로 치료 가능","잎에 동심원 무늬 병반이 특징"],
   answer:2,
   explanation:"불마름병은 Erwinia amylovora(세균)가 원인이고, 사과·배 등 장미과 식물에 피해를 줘요. 가지 끝이 갈고리 모양으로 구부러지고 불에 탄 것처럼 검게 마르는 것이 특징이에요.",linkedTheory:"t015"},

  {id:"q072b",level:"중급",type:"multiple",subject:"잡초방제학",topic:"잡초 기초",
   question:"밭에서 흑색 필름 멀칭의 잡초 억제 원리는?",
   choices:["토양 온도를 낮춰 발아 억제","빛을 차단하여 잡초 발아·광합성 억제","독성 물질 방출","토양 수분 제거","토양 pH 변화"],
   answer:1,
   explanation:"흑색 필름 멀칭은 햇빛을 차단하여 잡초의 광합성과 발아를 억제하는 물리적 방제법이에요. 토양 수분도 유지되고 지온도 높아져 작물 생육에 유리해요.",linkedTheory:"t025"},

  {id:"q073b",level:"중급",type:"multiple",subject:"농약학",topic:"농약 제형",
   question:"훈증제의 주요 사용 목적으로 옳은 것은?",
   choices:["시설 내 연기로 경엽 방제","토양 내 병원균·해충 가스 소독","잎 표면 살포","물에 희석하여 관주","종자 소독"],
   answer:1,
   explanation:"훈증제는 가스(기체) 형태로 토양·창고 내 병원균·해충·선충을 방제해요. 토양 훈증 소독으로 연작 피해 줄이기, 창고 내 저장 해충 방제 등에 사용해요.",linkedTheory:"t020"},

  {id:"q074b",level:"중급",type:"multiple",subject:"농업해충학",topic:"대표 해충",
   question:"진딧물 방제 시 은박 멀칭을 사용하는 이유는?",
   choices:["진딧물이 은색을 싫어하기 때문","반사광이 유시충의 비행 방향을 교란하기 때문","은박이 독성 물질을 방출하기 때문","토양 온도를 낮추기 때문","진딧물 천적을 유인하기 때문"],
   answer:1,
   explanation:"은박 멀칭은 빛을 반사하여 날아오는 유시충(날개 있는 진딧물)의 비행을 교란시켜 포장에 내려앉지 못하게 해요. 이를 통해 진딧물 및 진딧물이 매개하는 바이러스 피해를 줄일 수 있어요.",linkedTheory:"t009"},

  {id:"q075b",level:"중급",type:"multiple",subject:"식물병리학",topic:"선충병",
   question:"뿌리혹선충 방제 방법으로 옳지 않은 것은?",
   choices:["토양 훈증 소독","살선충제(카보퓨란 등) 토양 처리","저항성 품종 사용","태양열 토양 소독","병든 잎에 살균제 살포"],
   answer:4,
   explanation:"뿌리혹선충은 토양 내 선충이 원인이에요. 병든 잎에 살균제를 살포하는 것은 전혀 효과가 없어요. 토양 소독, 살선충제, 저항성 품종이 효과적인 방제법이에요.",linkedTheory:"t016"},

  // ═══════════════════════════════════════════
  // 고급 - 복합·심화 문제 (40문제)
  // ═══════════════════════════════════════════

  {id:"q067",level:"고급",type:"multiple",subject:"식물병리학",topic:"병 종합",
   question:"다음 중 발생 조건이 '저온다습'인 병해는?",
   choices:["역병","탄저병","흰가루병","잿빛곰팡이병","도열병"],
   answer:3,
   explanation:"잿빛곰팡이병(Botrytis cinerea)은 15~20°C의 저온다습 조건에서 발생이 심해요. 역병·탄저병(고온다습), 흰가루병(건조), 도열병(서늘·다습)과 구분하세요.",linkedTheory:"t023"},

  {id:"q068",level:"고급",type:"multiple",subject:"식물병리학",topic:"병 종합",
   question:"살균제 계통과 방제 대상 병해의 연결이 옳지 않은 것은?",
   choices:["만코제브(보호살균제) → 역병·탄저병 예방","트리사이클라졸 → 벼 도열병","이프로디온(디카르복시미드계) → 잿빛곰팡이병","보르도액(구리제) → 세균병·곰팡이병","베노밀(치료살균제) → 역병 치료"],
   answer:4,
   explanation:"베노밀은 자낭균류·불완전균류에 효과적인 치료살균제예요. 역병(난균류)에는 효과가 없어요. 역병에는 메타락실, 포세틸알루미늄 등 난균류 전용 약제를 사용해야 해요.",linkedTheory:"t023"},

  {id:"q069",level:"고급",type:"multiple",subject:"식물병리학",topic:"병 종합",
   question:"곰팡이병 방제에서 '보호살균제'를 사용하기 가장 적절한 시기는?",
   choices:["병이 심하게 발생한 후","이병 식물을 제거한 후","병원균 침입 전, 강우 전 예방적 살포","수확 직전","잎이 모두 황화된 후"],
   answer:2,
   explanation:"보호살균제(만코제브, 보르도액 등)는 병원균이 침입하기 전에 식물 표면을 코팅해 침입을 막아요. 따라서 병 발생 전, 특히 강우(병원균 전파) 전에 예방적으로 살포하는 것이 가장 효과적이에요.",linkedTheory:"t023"},

  {id:"q070",level:"고급",type:"multiple",subject:"농업해충학",topic:"IPM",
   question:"IPM에서 화학적 방제를 적용하는 원칙으로 옳은 것은?",
   choices:["해충이 1마리라도 발견되면 즉시 살포","작물 생육 기간 내내 예방적으로 살포","경제적 피해 허용 수준(ETL)을 초과할 때만 사용","천적이 없는 경우에만 사용","비가 오기 전에 무조건 살포"],
   answer:2,
   explanation:"IPM에서 화학적 방제는 해충 밀도가 ETL(경제적 피해 허용 수준)을 초과할 때만 적용하는 최후 수단이에요. 불필요한 살포를 줄여 천적을 보호하고 저항성 발달을 억제해요.",linkedTheory:"t024"},

  {id:"q071",level:"고급",type:"multiple",subject:"농업해충학",topic:"IPM",
   question:"생물적 방제제인 Bt제(바실루스 투링기엔시스)의 특징으로 옳은 것은?",
   choices:["진딧물·응애에 특히 효과적","나방류 성충에만 효과","나방·나비 유충이 섭취 후 장내 독소로 사망, 천적에 안전","토양 중에 오래 잔류하며 지속 효과","인체에 매우 독성이 강함"],
   answer:2,
   explanation:"Bt제는 나방·나비 유충이 섭취하면 장내에서 독소 단백질이 활성화되어 죽어요. 천적·포유류에는 독성이 없어 친환경 방제에 많이 사용되는 생물적 방제제예요.",linkedTheory:"t024"},

  {id:"q072",level:"고급",type:"multiple",subject:"농업해충학",topic:"IPM",
   question:"해충의 경제적 피해 허용 수준(ETL)에 대한 설명으로 옳은 것은?",
   choices:["해충 밀도가 ETL 이상일 때 방제를 중단한다","방제 비용과 피해 손실액이 같아지는 해충 밀도로, 이 이하에서는 방제 불필요","ETL은 모든 해충에 동일하게 적용","ETL이 낮을수록 농약을 많이 써야 한다","ETL은 수확량이 0이 되는 시점의 해충 밀도"],
   answer:1,
   explanation:"ETL은 방제 비용과 해충으로 인한 피해 손실이 같아지는 해충 밀도예요. ETL 이하에서는 방제해도 이익이 없으므로 방제 불필요, ETL 초과 시 방제가 경제적으로 타당해요.",linkedTheory:"t024"},

  {id:"q073",level:"고급",type:"multiple",subject:"잡초방제학",topic:"잡초방제 심화",
   question:"논의 사초과 잡초(올방개, 너도방동사니)를 방제할 때 주의사항으로 옳은 것은?",
   choices:["화본과 전용 제초제(할록시폽 등)로 방제","광엽 전용 제초제(2,4-D)로 방제","사초과를 포함하는 혼합 성분의 제초제를 선택","모든 제초제에 효과가 없으므로 손 제초만 가능","화본과와 광엽 제초제를 혼용"],
   answer:2,
   explanation:"사초과 잡초(올방개 등)는 화본과도 광엽도 아닌 별개의 분류여서 각각의 전용 제초제로는 방제가 안 돼요. 사초과까지 포함하는 적용 범위의 제초제 성분을 선택해야 해요.",linkedTheory:"t025"},

  {id:"q074",level:"고급",type:"multiple",subject:"잡초방제학",topic:"잡초방제 심화",
   question:"제초제 저항성 잡초 발생을 예방하기 위한 방법으로 옳지 않은 것은?",
   choices:["작용 기작이 다른 제초제를 교호 사용","제초제와 기계적 방제 병행","동일 계통 제초제를 매년 반복 사용","저항성 개체가 확인된 포장 격리 관리","제초제 최소량 사용"],
   answer:2,
   explanation:"동일 계통 제초제를 매년 반복 사용하면 저항성 잡초가 더 빠르게 발달해요. 저항성 관리의 핵심은 작용 기작이 다른 약제를 교호로 사용하는 것이에요.",linkedTheory:"t025"},

  {id:"q075",level:"고급",type:"multiple",subject:"농약학",topic:"약해·혼용",
   question:"농약 약해가 발생하기 쉬운 조건으로만 묶인 것은?",
   choices:["적정 희석 배수 사용, 이른 아침 살포","고농도 사용, 고온 살포, 호환 안 되는 약제 혼용","저독성 약제 단독 사용","강수 직전 살포, 저온 사용","적정 사용량, 천적 병행"],
   answer:1,
   explanation:"약해는 고농도(적정 배수 초과) 사용, 고온(30°C 이상) 시 살포, 호환되지 않는 약제 혼용, 유묘에 강한 약제 사용 시 발생하기 쉬워요.",linkedTheory:"t026"},

  {id:"q076",level:"고급",type:"multiple",subject:"농약학",topic:"잔류",
   question:"PLS(농약 허용 물질 목록 관리 제도)에 대한 설명으로 옳은 것은?",
   choices:["등록된 농약은 모든 작물에 사용 가능","미등록 농약은 일률 기준 0.01mg/kg 이하로 관리","PLS는 살충제에만 적용","기준이 없으면 어떤 농약도 사용 가능","농약 잔류는 PHI와 무관"],
   answer:1,
   explanation:"PLS제도는 해당 작물에 등록·고시되지 않은 농약은 불검출 수준(일률 기준 0.01mg/kg) 이하로 관리해요. 등록되지 않은 농약은 극미량도 검출 시 위반이에요.",linkedTheory:"t026"},

  {id:"q077",level:"고급",type:"multiple",subject:"농약학",topic:"약해·혼용",
   question:"알칼리성 농약과 산성 농약의 혼용 시 문제점으로 옳은 것은?",
   choices:["두 약제의 효과가 배가된다","중화반응으로 약효 저하, 침전, 약해 발생 가능","pH 중화로 오히려 안전해진다","항상 혼용 가능하다","혼용 시 독성이 사라진다"],
   answer:2,
   explanation:"알칼리성 약제(보르도액, 석회유황합제 등)와 산성 약제를 혼용하면 중화 반응으로 약효가 떨어지거나 침전이 생겨 노즐이 막히고, 약해가 발생할 수 있어요.",linkedTheory:"t026"},

  {id:"q078",level:"고급",type:"multiple",subject:"농약학",topic:"잔류",
   question:"ADI(일일 섭취 허용량)와 MRL(잔류 허용 기준)의 관계로 옳은 것은?",
   choices:["ADI가 MRL보다 항상 높게 설정된다","MRL은 ADI를 근거로 설정하여 섭취량이 ADI를 초과하지 않도록 한다","두 기준은 서로 무관하다","MRL이 ADI보다 항상 높다","ADI는 농약에만 적용된다"],
   answer:1,
   explanation:"MRL(잔류 허용 기준)은 ADI(일일 섭취 허용량)를 초과하지 않도록 설정해요. 다양한 식품을 통해 섭취하는 총량이 ADI 이하가 되도록 각 작물별 MRL을 산정해요.",linkedTheory:"t026"},

  // 추가 고급 문제
  {id:"q079",level:"고급",type:"multiple",subject:"식물병리학",topic:"병 종합",
   question:"다음 중 난균류(물곰팡이)가 원인인 병해로만 묶인 것은?",
   choices:["탄저병, 흰가루병","역병, 노균병","잿빛곰팡이병, 녹병","도열병, 잎집무늬마름병","흰가루병, 노균병"],
   answer:1,
   explanation:"역병(Phytophthora)과 노균병(Peronospora, Plasmopara)은 모두 난균류(물곰팡이)가 원인이에요. 나머지는 자낭균(흰가루병, 탄저병, 잿빛곰팡이병), 담자균(녹병), 불완전균(도열병)이에요.",linkedTheory:"t023"},

  {id:"q080",level:"고급",type:"multiple",subject:"농업해충학",topic:"저항성",
   question:"살충제 저항성 발달을 가속시키는 요인으로 옳지 않은 것은?",
   choices:["동일 계통 약제의 반복 사용","해충의 짧은 세대 기간","선택적 살충제 사용으로 천적 보호","고농도 약제 사용","대면적 동시 방제"],
   answer:2,
   explanation:"선택적 살충제 사용으로 천적을 보호하는 것은 저항성 관리에 도움이 되는 좋은 방법이에요. 동일 계통 반복, 짧은 세대, 고농도, 대면적 방제는 저항성 발달을 가속시키는 요인이에요.",linkedTheory:"t024"},

  {id:"q081",level:"고급",type:"multiple",subject:"잡초방제학",topic:"제초제",
   question:"글리포세이트가 다년생 잡초에 효과적인 이유는?",
   choices:["광분해가 빨라 지상부만 고사","비선택성 접촉형으로 즉각 고사","침투이행형으로 뿌리까지 이동하여 고사","토양 중에 잔류하며 뿌리 흡수 방해","포자를 파괴하기 때문"],
   answer:2,
   explanation:"글리포세이트는 침투이행형(systemic)이라 잎에 살포하면 식물 체내로 흡수되어 뿌리까지 이행하므로, 지상부만 고사시키는 접촉형과 달리 뿌리까지 고사시켜 다년생 잡초에도 효과적이에요.",linkedTheory:"t019"},

  {id:"q082",level:"고급",type:"multiple",subject:"농약학",topic:"종합",
   question:"다음 중 농약 사용에 관한 설명으로 옳지 않은 것은?",
   choices:["PHI를 준수하면 잔류 농약을 MRL 이하로 관리할 수 있다","살충제와 살균제는 혼용해도 항상 안전하다","같은 작용 기작의 약제를 반복 사용하면 저항성이 발달한다","PLS 제도에서 미등록 농약은 0.01mg/kg 이하로 관리된다","약해는 고온 시 살포 또는 고농도 사용 시 발생할 수 있다"],
   answer:1,
   explanation:"살충제와 살균제를 혼용해도 항상 안전한 것은 아니에요. 보르도액(살균제)은 유기인계 살충제와 혼용 금지이고, 혼용 시 약효 저하·침전·약해가 발생할 수 있어요. 혼용 전 반드시 가부표를 확인해야 해요.",linkedTheory:"t026"},

  {id:"q083",level:"고급",type:"multiple",subject:"식물병리학",topic:"병 종합",
   question:"세균병과 곰팡이병의 방제 약제 선택으로 옳은 것은?",
   choices:["세균병 - 만코제브, 곰팡이병 - 옥시테트라사이클린","세균병 - 보르도액·항생제, 곰팡이병 - 살균제(만코제브 등)","두 병 모두 동일한 약제로 방제 가능","세균병 - 살비제, 곰팡이병 - 살충제","세균병 - 글리포세이트, 곰팡이병 - 파라콰트"],
   answer:1,
   explanation:"세균병은 보르도액(구리제)이나 항생제(옥시테트라사이클린, 스트렙토마이신)로 방제하고, 곰팡이병은 살균제(만코제브, 트리플록시스트로빈 등)로 방제해요.",linkedTheory:"t023"},

  {id:"q084",level:"고급",type:"multiple",subject:"농업해충학",topic:"IPM",
   question:"IPM의 경종적 방제법으로 옳지 않은 것은?",
   choices:["해충에 저항성이 있는 품종 재배","윤작을 통해 특정 해충의 기주 식물 제거","재배 시기를 조절하여 해충 발생 최성기 회피","살충제를 예방적으로 전면 살포","건강한 묘목·종자 사용"],
   answer:3,
   explanation:"살충제 예방적 전면 살포는 화학적 방제이지 경종적 방제가 아니에요. 경종적 방제는 재배 방법을 조절하여 병해충 발생을 줄이는 방법이에요.",linkedTheory:"t024"},

  {id:"q085",level:"고급",type:"multiple",subject:"농약학",topic:"살균제",
   question:"스트로빌루린계 살균제(아족시스트로빈 등)의 작용 기작으로 옳은 것은?",
   choices:["콜린에스테라제 저해","에르고스테롤 합성 저해","미토콘드리아 전자전달계 저해(Qo 저해)","세포벽 합성 저해","DNA 합성 저해"],
   answer:2,
   explanation:"스트로빌루린계는 미토콘드리아의 전자전달계(Qo site)를 저해하여 에너지 생산을 차단해요. 광범위한 살균 스펙트럼을 가지지만 저항성이 빠르게 발달해 교호 사용이 중요해요.",linkedTheory:"t022"},

  {id:"q086",level:"고급",type:"multiple",subject:"잡초방제학",topic:"제초제 저항성",
   question:"제초제 저항성 잡초가 발생했을 때 적절한 대응으로 옳지 않은 것은?",
   choices:["같은 계통 제초제를 더 고농도로 살포","작용 기작이 다른 제초제로 교체","기계적 방제(경운)와 병행","저항성 개체가 확인된 포장을 격리 관리","비선택성 이행형 제초제로 전환"],
   answer:0,
   explanation:"저항성 잡초에 같은 계통 제초제를 더 고농도로 살포하면 저항성이 더 심화되고 약해가 발생할 수 있어요. 작용 기작이 다른 약제로 교체하거나 기계적 방제를 병행해야 해요.",linkedTheory:"t025"},

  {id:"q087",level:"고급",type:"multiple",subject:"식물병리학",topic:"병 종합",
   question:"다음 중 종자 소독이 가장 효과적인 방제법인 병해는?",
   choices:["토양 전염성 역병","매개충에 의한 바이러스병","종자 전염성 도열병","공기 중 포자로 전파되는 흰가루병","토양 내 뿌리혹선충"],
   answer:2,
   explanation:"도열병은 종자 전염이 가능하므로 종자 소독이 효과적인 예방법이에요. 역병·선충은 토양 소독, 바이러스는 매개충 방제, 흰가루병은 포자 비산 방지가 핵심이에요.",linkedTheory:"t007"},

  {id:"q088",level:"고급",type:"multiple",subject:"농약학",topic:"종합",
   question:"농약 관련 용어와 설명이 옳지 않게 연결된 것은?",
   choices:["LD50 - 실험동물 50%를 치사시키는 약량","PHI - 수확 전 마지막 살포 가능일수","MRL - 농산물에 허용되는 최대 잔류 기준","ADI - 평생 매일 섭취해도 안전한 하루 섭취량","PLS - 비선택성 제초제의 분류 체계"],
   answer:4,
   explanation:"PLS(Positive List System)는 비선택성 제초제의 분류가 아니라, '농약 허용 물질 목록 관리 제도'예요. 등록된 농약만 기준치 이하로 허용하고, 미등록 농약은 불검출(0.01mg/kg) 원칙으로 관리해요.",linkedTheory:"t026"},

  {id:"q089",level:"고급",type:"multiple",subject:"농업해충학",topic:"저항성",
   question:"해충 저항성 관리에서 IRAC(살충제 저항성 관리위원회) 기준의 핵심 원칙은?",
   choices:["같은 약제를 연속 3회 이상 사용","가장 고가의 약제를 선택","작용 기작(MoA) 분류가 다른 약제를 교호 사용","국내 등록 약제만 사용","천연물 농약만 사용"],
   answer:2,
   explanation:"IRAC 저항성 관리 지침의 핵심은 작용 기작(Mode of Action, MoA) 분류가 다른 약제를 번갈아 사용(교호 살포)하는 것이에요. 약제명이 달라도 같은 계통이면 교호 효과가 없어요.",linkedTheory:"t024"},

  {id:"q090",level:"고급",type:"multiple",subject:"식물병리학",topic:"병 종합",
   question:"벼의 3대 병해(도열병, 흰잎마름병, 잎집무늬마름병)의 원인이 바르게 연결된 것은?",
   choices:["도열병-세균, 흰잎마름병-곰팡이, 잎집무늬마름병-바이러스","도열병-곰팡이, 흰잎마름병-세균, 잎집무늬마름병-곰팡이","도열병-바이러스, 흰잎마름병-선충, 잎집무늬마름병-세균","세 병 모두 곰팡이가 원인","세 병 모두 세균이 원인"],
   answer:1,
   explanation:"도열병: 곰팡이(Magnaporthe oryzae), 흰잎마름병: 세균(Xanthomonas oryzae), 잎집무늬마름병: 곰팡이(Rhizoctonia solani)예요. 흰잎마름병만 세균성 병인 것이 시험 핵심이에요.",linkedTheory:"t007"}
];

// 대량 확장 문제 세트 (기존 문제 유지 + 추가 생성)
(function buildExpandedQuestionBank() {
  const extra = [];
  let seq = 1001;

  const nextId = () => `qx${seq++}`;

  function pickWrong(pool, correct, count, seed) {
    const src = pool.filter(v => v !== correct);
    const out = [];
    for (let i = 0; i < src.length && out.length < count; i++) {
      const idx = (seed + i * 3) % src.length;
      const v = src[idx];
      if (!out.includes(v)) out.push(v);
    }
    for (let i = 0; i < src.length && out.length < count; i++) {
      if (!out.includes(src[i])) out.push(src[i]);
    }
    return out.slice(0, count);
  }

  function makeChoices(correct, pool, seed) {
    const wrong = pickWrong(pool, correct, 4, seed);
    const choices = [correct, ...wrong];
    const shift = seed % choices.length;
    const rotated = choices.slice(shift).concat(choices.slice(0, shift));
    return { choices: rotated, answer: rotated.indexOf(correct) };
  }

  const virusVector = [
    ["CMV", "진딧물", "오이모자이크병의 대표 전파 경로는 진딧물 매개예요."],
    ["PVY", "진딧물", "감자Y바이러스도 주로 진딧물류가 매개해요."],
    ["TSWV", "꽃노랑총채벌레", "TSWV는 총채벌레 매개가 핵심이에요."],
    ["TYLCV", "담배가루이", "TYLCV는 담배가루이가 대표 매개충이에요."],
    ["RSV", "애멸구", "벼 줄무늬잎마름병은 애멸구 매개예요."],
    ["TMV", "즙액 접촉", "TMV는 작업 도구·손 접촉으로 전파돼요."],
    ["WMV", "진딧물", "수박모자이크바이러스도 진딧물 매개 비중이 높아요."]
  ];
  const vectorPool = ["진딧물", "꽃노랑총채벌레", "담배가루이", "애멸구", "벼멸구", "즙액 접촉", "종자 전염", "토양 전염"];

  virusVector.forEach(([virus, vector, exp], i) => {
    const c1 = makeChoices(vector, vectorPool, i + 1);
    extra.push({
      id: nextId(), level: "중급", type: "multiple", subject: "식물병리학", topic: "바이러스병",
      question: `${virus}의 대표 전파 경로(매개)로 옳은 것은?`,
      choices: c1.choices, answer: c1.answer,
      explanation: exp, linkedTheory: "t014"
    });

    const c2 = makeChoices(virus, virusVector.map(v => v[0]), i + 11);
    extra.push({
      id: nextId(), level: "중급", type: "multiple", subject: "식물병리학", topic: "바이러스병",
      question: `대표 매개가 ${vector}인 바이러스로 옳은 것은?`,
      choices: c2.choices, answer: c2.answer,
      explanation: `${vector} 매개 바이러스-작물 조합은 시험에서 반복 출제돼요.`, linkedTheory: "t014"
    });

    extra.push({
      id: nextId(), level: "중급", type: "ox", subject: "식물병리학", topic: "바이러스병",
      question: `${virus}는 ${vector}에 의해 주로 전파된다.`,
      choices: ["맞다 (O)", "틀리다 (X)"], answer: 0,
      explanation: exp, linkedTheory: "t014"
    });
  });

  const diseaseAgent = [
    ["역병", "난균류", "t002"], ["노균병", "난균류", "t004"], ["흰가루병", "자낭균", "t004"],
    ["녹병", "담자균", "t004"], ["도열병", "곰팡이", "t005"], ["흰잎마름병", "세균", "t005"],
    ["잎집무늬마름병", "곰팡이", "t005"], ["탄저병", "곰팡이", "t003"], ["무름병", "세균", "t015"],
    ["풋마름병", "세균", "t015"], ["불마름병", "세균", "t015"], ["뿌리혹선충병", "선충", "t017"],
    ["모잘록병", "곰팡이", "t006"], ["덩굴쪼김병", "곰팡이", "t006"], ["배추뿌리혹병", "원생생물", "t006"],
    ["잿빛곰팡이병", "곰팡이", "t004"], ["사과 검은별무늬병", "곰팡이", "t016"], ["사과 부란병", "곰팡이", "t016"],
    ["벼 깨씨무늬병", "곰팡이", "t016"], ["흰비단병", "곰팡이", "t016"]
  ];
  const agentPool = ["난균류", "자낭균", "담자균", "곰팡이", "세균", "바이러스", "선충", "원생생물"];

  diseaseAgent.forEach(([disease, agent, theory], i) => {
    const c1 = makeChoices(agent, agentPool, i + 21);
    extra.push({
      id: nextId(), level: "중급", type: "multiple", subject: "식물병리학", topic: "병원체 구분",
      question: `${disease}의 원인 병원체 분류로 옳은 것은?`,
      choices: c1.choices, answer: c1.answer,
      explanation: `${disease}는 ${agent}성 병해로 분류하는 문제가 자주 나와요.`, linkedTheory: theory
    });

    const c2 = makeChoices(disease, diseaseAgent.map(v => v[0]), i + 31);
    extra.push({
      id: nextId(), level: "고급", type: "multiple", subject: "식물병리학", topic: "병원체 역추적",
      question: `${agent}성 병해로 가장 적절한 것은?`,
      choices: c2.choices, answer: c2.answer,
      explanation: `병해를 병원체군으로 묶어 외우면 방제약 선택 실수를 줄일 수 있어요.`, linkedTheory: theory
    });

    extra.push({
      id: nextId(), level: i % 2 === 0 ? "중급" : "고급", type: "ox", subject: "식물병리학", topic: "병원체 구분",
      question: `${disease}는 ${agent}이(가) 원인이다.`,
      choices: ["맞다 (O)", "틀리다 (X)"], answer: 0,
      explanation: `핵심 병해-병원체 쌍은 반복 암기가 가장 효율적이에요.`, linkedTheory: theory
    });
  });

  const pestFact = [
    ["진딧물", "황색 트랩", "바이러스 매개", "t008"],
    ["꽃노랑총채벌레", "청색 트랩", "TSWV 매개", "t008"],
    ["온실가루이", "황색 트랩", "TYLCV 매개", "t008"],
    ["점박이응애", "살비제", "거미류", "t008"],
    ["배추좀나방", "Bt제", "십자화과 가해", "t009"],
    ["파밤나방", "다이아미드계", "고온기 다발", "t009"],
    ["거세미나방", "야행성", "지제부 절단", "t009"],
    ["이화명나방", "심고/백수", "벼 가해", "t010"],
    ["벼멸구", "비래해충", "집단 흡즙", "t010"],
    ["애멸구", "RSV 매개", "월동 가능", "t010"],
    ["혹명나방", "비래해충", "벼 잎 말림", "t010"],
    ["복숭아심식나방", "과실 가해", "과실 내부 피해", "t018"],
    ["복숭아순나방", "신초 가해", "신초 고사", "t018"],
    ["갈색날개노린재", "흡즙 해충", "과수 피해", "t018"],
    ["온실가루이좀벌", "천적", "가루이 방제", "t019"],
    ["칠레이리응애", "천적", "응애 방제", "t019"],
    ["오이이리응애", "천적", "총채벌레 방제", "t019"],
    ["무당벌레", "천적", "진딧물 방제", "t019"]
  ];
  const pestPool = pestFact.map(v => v[0]);
  const traitPool = ["황색 트랩", "청색 트랩", "살비제", "Bt제", "비래해충", "RSV 매개", "과실 가해", "신초 가해", "천적", "야행성"];

  pestFact.forEach(([name, key1, key2, theory], i) => {
    const c1 = makeChoices(key1, traitPool, i + 41);
    extra.push({
      id: nextId(), level: "중급", type: "multiple", subject: "농업해충학", topic: "해충 특징",
      question: `${name}의 대표 특징으로 가장 적절한 것은?`,
      choices: c1.choices, answer: c1.answer,
      explanation: `${name}는 ${key1}로 연결해 외우면 실전에서 빠르게 정답을 고를 수 있어요.`, linkedTheory: theory
    });

    const c2 = makeChoices(name, pestPool, i + 51);
    extra.push({
      id: nextId(), level: "고급", type: "multiple", subject: "농업해충학", topic: "해충 매칭",
      question: `${key2} 설명과 가장 관련이 깊은 해충(또는 천적)은?`,
      choices: c2.choices, answer: c2.answer,
      explanation: `${name} - ${key2} 조합은 출제자가 보기 함정으로 자주 바꿔 내요.`, linkedTheory: theory
    });

    extra.push({
      id: nextId(), level: i % 2 === 0 ? "중급" : "고급", type: "ox", subject: "농업해충학", topic: "해충 특징",
      question: `${name}의 핵심 식별 포인트는 '${key1}'이다.`,
      choices: ["맞다 (O)", "틀리다 (X)"], answer: 0,
      explanation: `${name}의 표준 키워드는 ${key1}, ${key2}예요.`, linkedTheory: theory
    });
  });

  const herbicideFact = [
    ["글리포세이트", "비선택성", "이행형", "EPSPS 저해", "t012"],
    ["파라콰트", "비선택성", "접촉형", "광계 I 저해", "t012"],
    ["2,4-D", "선택성", "이행형", "옥신 교란", "t012"],
    ["부타클로르", "선택성", "토양처리", "초기 논잡초", "t012"],
    ["할록시폽", "선택성", "경엽처리", "화본과 방제", "t031"],
    ["이마자픽", "선택성", "이행형", "ALS 저해", "t035"],
    ["아트라진", "선택성", "토양처리", "광계 II 저해", "t035"],
    ["MCPA", "선택성", "경엽처리", "옥신 교란", "t035"],
    ["시마진", "선택성", "토양처리", "광계 II 저해", "t035"],
    ["설포닐우레아계", "선택성", "이행형", "ALS 저해", "t035"]
  ];
  const herbPool = herbicideFact.map(v => v[0]);
  const mechPool = ["EPSPS 저해", "광계 I 저해", "광계 II 저해", "ALS 저해", "옥신 교란", "지질합성 저해", "세포막 파괴"];

  herbicideFact.forEach(([name, sel, move, mech, theory], i) => {
    const c1 = makeChoices(mech, mechPool, i + 61);
    extra.push({
      id: nextId(), level: "중급", type: "multiple", subject: "잡초방제학", topic: "제초제 작용기작",
      question: `${name}의 주요 작용 기작으로 옳은 것은?`,
      choices: c1.choices, answer: c1.answer,
      explanation: `${name}는 ${mech} 계열로 분류돼요.`, linkedTheory: theory
    });

    const c2 = makeChoices(name, herbPool, i + 71);
    extra.push({
      id: nextId(), level: "고급", type: "multiple", subject: "잡초방제학", topic: "제초제 분류",
      question: `${sel}·${move} 특성을 모두 만족하는 제초제로 가장 적절한 것은?`,
      choices: c2.choices, answer: c2.answer,
      explanation: `제초제는 선택성/비선택성, 접촉형/이행형을 동시에 묻는 복합 문제가 자주 나와요.`, linkedTheory: theory
    });

    extra.push({
      id: nextId(), level: i % 2 === 0 ? "중급" : "고급", type: "ox", subject: "잡초방제학", topic: "제초제 작용기작",
      question: `${name}는 ${mech}로 잡초를 방제한다.`,
      choices: ["맞다 (O)", "틀리다 (X)"], answer: 0,
      explanation: `${name}의 작용점은 ${mech}로 정리하세요.`, linkedTheory: theory
    });
  });

  const pesticideFact = [
    ["유기인계", "콜린에스테라제 저해", "클로르피리포스", "t023"],
    ["카바메이트계", "콜린에스테라제 저해", "카보퓨란", "t023"],
    ["피레스로이드계", "Na채널 교란", "사이퍼메트린", "t023"],
    ["네오니코티노이드계", "니코틴성 수용체 자극", "이미다클로프리드", "t023"],
    ["다이아미드계", "라이아노딘 수용체", "클로란트라닐리프롤", "t023"],
    ["스트로빌루린계", "미토콘드리아 호흡 저해", "아족시스트로빈", "t024"],
    ["EBI(DMI)계", "에르고스테롤 합성 저해", "테부코나졸", "t024"],
    ["디카르복시미드계", "세포막 기능 교란", "이프로디온", "t024"],
    ["보호살균제", "예방 중심", "만코제브", "t024"],
    ["치료살균제", "침입 후 효과", "베노밀", "t024"]
  ];
  const classPool = pesticideFact.map(v => v[0]);
  const moaPool = ["콜린에스테라제 저해", "Na채널 교란", "니코틴성 수용체 자극", "라이아노딘 수용체", "미토콘드리아 호흡 저해", "에르고스테롤 합성 저해", "예방 중심", "침입 후 효과"];

  pesticideFact.forEach(([klass, moa, example, theory], i) => {
    const c1 = makeChoices(moa, moaPool, i + 81);
    extra.push({
      id: nextId(), level: "중급", type: "multiple", subject: "농약학", topic: "농약 계통",
      question: `${klass}의 작용 특징으로 옳은 것은?`,
      choices: c1.choices, answer: c1.answer,
      explanation: `${klass}의 대표 작용은 ${moa}예요.`, linkedTheory: theory
    });

    const c2 = makeChoices(klass, classPool, i + 91);
    extra.push({
      id: nextId(), level: "고급", type: "multiple", subject: "농약학", topic: "농약 계통",
      question: `${example}이(가) 속하는 계통으로 가장 적절한 것은?`,
      choices: c2.choices, answer: c2.answer,
      explanation: `${example}은(는) ${klass} 대표 약제예요.`, linkedTheory: theory
    });

    extra.push({
      id: nextId(), level: i % 2 === 0 ? "중급" : "고급", type: "ox", subject: "농약학", topic: "농약 계통",
      question: `${klass} 계열은 ${moa} 기작으로 분류된다.`,
      choices: ["맞다 (O)", "틀리다 (X)"], answer: 0,
      explanation: `계통-작용기작-대표약제 3점 연결 학습이 고득점에 유리해요.`, linkedTheory: theory
    });
  });

  const calcFact = [
    ["1000배", "500L", "500mL"], ["500배", "200L", "400mL"], ["2000배", "100L", "50mL"],
    ["400배", "80L", "200mL"], ["800배", "160L", "200mL"], ["250배", "50L", "200mL"],
    ["1250배", "250L", "200mL"], ["100배", "20L", "200mL"], ["750배", "150L", "200mL"],
    ["300배", "60L", "200mL"]
  ];

  calcFact.forEach(([dil, water, expected]) => {
    extra.push({
      id: nextId(), level: "고급", type: "multiple", subject: "농약학", topic: "희석 계산",
      question: `${dil} 희석으로 ${water} 살포액을 만들 때 필요한 원제량은?`,
      choices: [expected, "100mL", "300mL", "500mL", "1,000mL"],
      answer: 0,
      explanation: `계산식: 원제량 = 살포액량 ÷ 희석배수. 계산형은 단위 환산(mL/L) 실수에 주의하세요.`, linkedTheory: "t041"
    });

    extra.push({
      id: nextId(), level: "고급", type: "ox", subject: "농약학", topic: "희석 계산",
      question: `${dil} 희석 ${water} 살포액의 원제량을 ${expected}로 계산하는 것은 타당하다.`,
      choices: ["맞다 (O)", "틀리다 (X)"], answer: 0,
      explanation: `원제량 계산 정확도가 실제 살포 안전성에 직결돼요.`, linkedTheory: "t041"
    });
  });

  QUESTIONS.push(...extra);
})();
