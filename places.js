// 오스틴 관광지·식당·술집·쇼핑 (좌표는 대략적인 위치)
// c: 카테고리 하나 [sight|food|bar|shop], sub: 쇼핑 세부 [mart|elec|cloth|mall|gift], late: 자정 넘어서도 영업, h: 영업시간(확인된 것만)
window.PLACES=[
 // ---------- 관광지 ----------
 {n:'텍사스 주의사당',en:'Texas State Capitol',c:['sight'],ll:[30.2747,-97.7404],a:'1100 Congress Ave',d:'오스틴의 대표 랜드마크. 무료로 들어가 볼 수 있고 숙소에서 가까움.'},
 {n:'UT 타워',en:'UT Tower (Main Building)',c:['sight'],ll:[30.2862,-97.7394],a:'110 Inner Campus Dr',d:'텍사스대 상징인 시계탑. 캠퍼스 산책 코스로 좋음.'},
 {n:'블랜튼 미술관',en:'Blanton Museum of Art',c:['sight'],ll:[30.2808,-97.7377],a:'200 E MLK Jr Blvd',d:'UT 캠퍼스 안 미술관. Bass Hall 근처.'},
 {n:'불럭 텍사스 역사박물관',en:'Bullock Texas State History Museum',c:['sight'],ll:[30.2803,-97.7391],a:'1800 Congress Ave',d:'텍사스 역사를 다루는 박물관. 블랜튼 미술관 바로 옆.'},
 {n:'6번가',en:'6th Street',c:['sight'],ll:[30.2671,-97.7392],a:'E 6th St (Congress Ave–I-35)',d:'바와 라이브 음악 클럽이 몰려 있는 밤 거리. 힐튼 바로 옆.',late:1,h:'바는 보통 새벽 2시까지'},
 {n:'레이니 스트리트',en:'Rainey Street',c:['sight'],ll:[30.2590,-97.7385],a:'Rainey St',d:'옛 주택을 개조한 바가 모인 거리. 학회장에서 걸어갈 수 있음.',late:1,h:'바는 보통 새벽 2시까지'},
 {n:'박쥐 다리 (콩그레스 애비뉴 브리지)',en:'Congress Avenue Bridge',c:['sight'],ll:[30.2617,-97.7451],a:'Congress Ave Bridge',d:'여름철 해 질 녘 박쥐 떼로 유명한 다리. 11월엔 박쥐가 거의 떠났을 수 있음.'},
 {n:'레이디 버드 레이크 보드워크',en:'Lady Bird Lake Boardwalk',c:['sight'],ll:[30.2482,-97.7296],a:'Ann and Roy Butler Trail',d:'호수 위로 난 산책로. 아침 산책이나 조깅에 좋음.'},
 {n:'사우스 콩그레스 (SoCo)',en:'South Congress',c:['sight'],ll:[30.2492,-97.7500],a:'S Congress Ave',d:'빈티지 가게, 벽화, 맛집이 모인 거리.'},
 {n:'컨티넨털 클럽',en:'The Continental Club',c:['sight'],ll:[30.2502,-97.7494],a:'1315 S Congress Ave',d:'SoCo에 있는 오래된 라이브 음악 클럽.',late:1,h:'공연 따라 새벽 2시 무렵까지'},
 {n:'질커 공원',en:'Zilker Park',c:['sight'],ll:[30.2669,-97.7729],a:'2100 Barton Springs Rd',d:'오스틴에서 가장 큰 도심 공원.'},
 {n:'바튼 스프링스 풀',en:'Barton Springs Pool',c:['sight'],ll:[30.2641,-97.7713],a:'2201 Barton Springs Rd',d:'1년 내내 수온이 20도 안팎인 천연 샘물 수영장.'},
 {n:'마운트 보넬',en:'Mount Bonnell',c:['sight'],ll:[30.3210,-97.7734],a:'3800 Mt Bonnell Rd',d:'강과 시내가 내려다보이는 언덕 전망대. 노을 명소.'},
 // ---------- 식당 ----------
 {n:'프랭클린 바비큐',en:'Franklin Barbecue',c:['food'],ll:[30.2701,-97.7313],a:'900 E 11th St',d:'오스틴에서 가장 유명한 브리스킷 집. 줄이 몇 시간씩 길어짐.'},
 {n:'테리 블랙스 바비큐 (오스틴)',en:"Terry Black's BBQ Austin",c:['food'],ll:[30.2594,-97.7547],a:'1003 Barton Springs Rd',d:'줄이 비교적 짧은 인기 바비큐 집.'},
 {n:'테리 블랙스 바비큐 (록하트 본점)',en:"Terry Black's BBQ Lockhart",c:['food'],ll:[29.8933,-97.6714],a:'900 N Colorado St, Lockhart',d:'텍사스 바비큐의 수도로 불리는 록하트에 있는 본점. 오스틴에서 차로 약 50분.',h:'일–목 10:30–20:00 · 금–토 10:30–21:00',tel:'+1 (512) 668-4617'},
 {n:'la Barbecue',en:'la Barbecue',c:['food'],ll:[30.2560,-97.7171],a:'2401 E Cesar Chavez St',d:'현지인이 많이 추천하는 바비큐 집.'},
 {n:'Veracruz All Natural',en:'Veracruz All Natural',c:['food'],ll:[30.2575,-97.7271],a:'1704 E Cesar Chavez St',d:'미가스 타코로 유명한 멕시칸 타코 집.'},
 {n:"Torchy's Tacos (SoCo)",en:"Torchy's Tacos South Congress",c:['food'],ll:[30.2465,-97.7510],a:'1822 S Congress Ave',d:'오스틴에서 시작한 타코 체인. SoCo 지점.'},
 {n:'Juan in a Million',en:'Juan in a Million',c:['food'],ll:[30.2558,-97.7198],a:'2300 E Cesar Chavez St',d:'큼직한 아침 타코로 유명한 집.'},
 {n:"Matt's El Rancho",en:"Matt's El Rancho",c:['food'],ll:[30.2459,-97.7808],a:'2613 S Lamar Blvd',d:'오래된 텍스멕스 노포.'},
 {n:'Uchi',en:'Uchi Austin',c:['food'],ll:[30.2577,-97.7597],a:'801 S Lamar Blvd',d:'오스틴 대표 고급 스시·퓨전 일식. 예약 추천.'},
 {n:'Kerbey Lane Cafe',en:'Kerbey Lane Cafe',c:['food'],ll:[30.2908,-97.7418],a:'2606 Guadalupe St (UT 지점)',d:'팬케이크와 퀘소로 유명한 캐주얼 식당. 숙소 근처. 시내에 지점이 여러 곳.'},
 {n:'Home Slice Pizza',en:'Home Slice Pizza',c:['food'],ll:[30.2493,-97.7496],a:'1415 S Congress Ave',d:'SoCo에 있는 뉴욕식 피자 집.'},
 {n:"Amy's Ice Creams",en:"Amy's Ice Creams South Congress",c:['food'],ll:[30.2508,-97.7491],a:'1301 S Congress Ave',d:'오스틴 토박이 아이스크림 가게.'},
 {n:"Jo's Coffee",en:"Jo's Coffee South Congress",c:['food'],ll:[30.2509,-97.7496],a:'1300 S Congress Ave',d:'SoCo의 커피집. "i love you so much" 벽화로 유명.'},
 {n:"Mattie's",en:"Mattie's Austin",c:['food'],ll:[30.2443,-97.7615],a:'811 W Live Oak St',d:'오래된 저택(Green Pastures)을 개조한 남부식 레스토랑. 정원이 예쁘고 분위기 있는 저녁 식사에 좋음.',tel:'+1 (512) 444-1888'},
 {n:'ThoroughBread',en:'ThoroughBread Austin',c:['food'],ll:[30.2483,-97.7790],a:'1709 Bluebonnet Ln',d:'오스틴 베이커리 추천 목록에 자주 오르는 빵집. 아침·브런치용.',h:'일 08:00–14:00 · 월–금 08:00–18:00 · 토 08:00–14:00',tel:'+1 (512) 822-7622'},
 {n:'Batch Craft Beer and Kolaches',en:'Batch Craft Beer and Kolaches',c:['food'],ll:[30.2846,-97.7090],a:'3220 Manor Rd',d:'체코식 빵 콜라치와 수제 맥주를 함께 파는 곳. 아침엔 빵집, 저녁엔 맥주집.',h:'일 09:00–22:00 · 월–목 08:00–22:00 · 금 08:00–23:00 · 토 09:00–23:00',tel:'+1 (512) 401-3025'},
 // ---------- 술집 ----------
 {n:'Roosevelt Room',en:'The Roosevelt Room Austin',c:['bar'],ll:[30.2675,-97.7458],a:'307 W 5th St',d:'시대별 클래식 칵테일 메뉴로 유명한 칵테일 바.',late:1,h:'보통 새벽 2시까지'},
 {n:'Elephant Room',en:'Elephant Room Austin',c:['bar'],ll:[30.2659,-97.7438],a:'315 Congress Ave',d:'지하에 있는 오래된 재즈 클럽. 숙소에서 걸어서 몇 분.',late:1,h:'보통 새벽 2시까지'},
 {n:'Firehouse Lounge',en:'Firehouse Lounge Austin',c:['bar'],ll:[30.2682,-97.7416],a:'605 Brazos St',d:'호스텔 책장 뒤에 숨은 스피크이지 바.',late:1,h:'보통 새벽 2시까지'},
 {n:'Nido (The Loren 호텔 루프탑)',en:'Nido The Loren Austin',c:['bar'],ll:[30.2599,-97.7578],a:'1211 W Riverside Dr',d:'레이디 버드 레이크와 시내 전망이 좋은 루프탑 바.'},
 {n:'The Driskill Bar',en:'The Driskill Bar',c:['bar'],ll:[30.2681,-97.7421],a:'604 Brazos St',d:'오스틴에서 가장 오래된 호텔의 클래식한 바. 피아노 연주.'},
 // ---------- 쇼핑 ----------
 {n:"Allen's Boots",en:"Allen's Boots",c:['shop'],sub:'cloth',ll:[30.2484,-97.7505],a:'1522 S Congress Ave',d:'카우보이 부츠가 벽을 가득 채운 대형 부츠 가게.'},
 {n:'University Co-op',en:'University Co-op',c:['shop'],sub:'gift',ll:[30.2867,-97.7421],a:'2246 Guadalupe St',d:'UT 롱혼 굿즈를 파는 대학 기념품점.'},
 {n:'BookPeople',en:'BookPeople Austin',c:['shop'],sub:'gift',ll:[30.2700,-97.7535],a:'603 N Lamar Blvd',d:'텍사스 최대 독립 서점.'},
 {n:'Waterloo Records',en:'Waterloo Records',c:['shop'],sub:'gift',ll:[30.2695,-97.7530],a:'600 N Lamar Blvd',d:'오스틴 음악 도시를 대표하는 레코드 가게.'},
 {n:'Whole Foods 본점',en:'Whole Foods Market Lamar',c:['shop'],sub:'mart',ll:[30.2706,-97.7533],a:'525 N Lamar Blvd',d:'오스틴에서 시작한 Whole Foods의 본점 매장. 간단한 식사도 가능.'},
 // 마트
 {n:'Target (UT 캠퍼스점)',en:'Target Austin Campus',c:['shop'],sub:'mart',ll:[30.2833,-97.7419],a:'2025 Guadalupe St',d:'생필품·간식·세면도구를 한 번에 살 수 있는 대형 마트. 숙소에서 걸어갈 수 있는 거리.'},
 {n:"Trader Joe's (Seaholm)",en:"Trader Joe's Seaholm",c:['shop'],sub:'mart',ll:[30.2683,-97.7521],a:'211 Seaholm Dr',d:'자체 브랜드 간식·견과류·에코백이 인기인 식료품점. 기념품 사기에도 좋음.'},
 {n:'H-E-B (Mueller)',en:'H-E-B Mueller',c:['shop'],sub:'mart',ll:[30.3021,-97.7027],a:'1801 E 51st St',d:'텍사스 대표 슈퍼마켓 체인. 텍사스 한정 소스·과자·H-E-B 굿즈가 많음.'},
 {n:'Central Market (North Lamar)',en:'Central Market North Lamar',c:['shop'],sub:'mart',ll:[30.3073,-97.7405],a:'4001 N Lamar Blvd',d:'H-E-B가 운영하는 고급 식료품점. 델리·베이커리·와인 코너가 큼.'},
 // 전자제품
 {n:'Apple The Domain',en:'Apple The Domain',c:['shop'],sub:'elec',ll:[30.4023,-97.7255],a:'11410 Century Oaks Terrace',d:'오스틴 북쪽 쇼핑 지구 The Domain에 있는 애플 스토어.'},
 {n:'Apple Barton Creek',en:'Apple Barton Creek',c:['shop'],sub:'elec',ll:[30.2570,-97.8083],a:'2901 S Capital of Texas Hwy',d:'Barton Creek Square 몰 안의 애플 스토어. 시내에서 가장 가까운 애플 매장.'},
 {n:'Best Buy (Gateway)',en:'Best Buy Gateway Austin',c:['shop'],sub:'elec',ll:[30.3920,-97.7477],a:'9607 Research Blvd',d:'노트북·카메라·충전기·케이블 등 전자제품 전문 대형 매장.'},
 // 옷·잡화
 {n:'Tecovas (SoCo)',en:'Tecovas South Congress',c:['shop'],sub:'cloth',ll:[30.2498,-97.7497],a:'1333 S Congress Ave',d:'오스틴에서 시작한 카우보이 부츠·웨스턴 의류 브랜드 매장.'},
 {n:'Kendra Scott (SoCo)',en:'Kendra Scott South Congress',c:['shop'],sub:'cloth',ll:[30.2495,-97.7488],a:'1400 S Congress Ave',d:'오스틴 출신 주얼리 브랜드의 플래그십 매장.'},
 {n:'Buffalo Exchange',en:'Buffalo Exchange Austin',c:['shop'],sub:'cloth',ll:[30.2955,-97.7419],a:'2904 Guadalupe St',d:'UT 근처 빈티지·중고 의류 가게.'},
 // 쇼핑몰·아웃렛
 {n:'The Domain',en:'The Domain Austin',c:['shop'],sub:'mall',ll:[30.4021,-97.7253],a:'11410 Century Oaks Terrace',d:'오스틴 북쪽의 야외형 쇼핑몰. 의류·명품·레스토랑이 모여 있음. 시내에서 차로 약 20분.'},
 {n:'Barton Creek Square',en:'Barton Creek Square Mall',c:['shop'],sub:'mall',ll:[30.2566,-97.8081],a:'2901 S Capital of Texas Hwy',d:'시내 서쪽의 실내 쇼핑몰. 백화점과 브랜드 매장이 모여 있음.'},
 {n:'San Marcos Premium Outlets',en:'San Marcos Premium Outlets',c:['shop'],sub:'mall',ll:[29.8279,-97.9837],a:'3939 S IH-35, San Marcos',d:'오스틴 남쪽의 대형 아웃렛. 차로 약 40분.'},
 {n:'Round Rock Premium Outlets',en:'Round Rock Premium Outlets',c:['shop'],sub:'mall',ll:[30.5652,-97.6886],a:'4401 N IH-35, Round Rock',d:'오스틴 북쪽의 아웃렛. 차로 약 30분.'}
];
