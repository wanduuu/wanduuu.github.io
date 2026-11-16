// 이름, 소개, 프로젝트, 연락처는 이 파일에서 수정하세요.
export const profile = {name:'YOUR NAME',role:'Level Designer',headline:['레벨 디자이너','김종완'],intro:'플레이어의 모든 발걸음이 즐거운 공간을 설계합니다.',email:'wan102745@gmail.com',phone:'010-4361-1109',location:'Seoul, South Korea'};
export const projects = [
{id:'01',videoId:'qiMtvcj3Dbw',title:'옛 제국 평원',subtitle:'옛 제국 평원',category:'오픈월드 ARPG',year:'2026',image:'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=85',tags:['Unreal Engine 5','오픈월드'],summary:'드넓은 평원을 무대로 오픈월드의 공간감을 활용한 레벨',role:'레벨 기획 · 블록아웃 · 전투 배치',duration:'8주 · 개인 프로젝트',goal:'먼저 보였지만 닿을 수 없던 장소에 도달하는 성취감을 만듭니다.',design:'중앙 탑을 랜드마크로 배치하고, 하층 정원에서 성벽으로 이어지는 순환 구조를 설계했습니다. 첫 전투에서는 엄폐를 학습하고, 상층에서는 높이 차를 활용하도록 구성했습니다.',test:'프로토타입 검증 계획: 첫 갈림길의 길 찾기, 지름길 인지 여부, 전투 사이 휴식 구간을 관찰합니다.',color:'#b8c8a4'},
{id:'02',title:'Echoes of the Deep',subtitle:'심연의 메아리',category:'액션 어드벤처',year:'2026',image:'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1400&q=85',tags:['Unreal Engine 5','Exploration','Environmental Storytelling'],summary:'버려진 해안 관측소를 탐험하며, 환경의 단서로 이야기를 발견하는 레벨.',role:'월드 구성 · 퍼즐 동선 · 환경 서사',duration:'6주 · 개인 프로젝트',goal:'명시적인 안내 없이 빛과 소리로 플레이어의 시선을 유도합니다.',design:'해안에서 관측소까지 세 개의 시야 프레임을 구성했습니다. 주요 경로는 차가운 자연광, 선택 탐험 구간은 따뜻한 인공광으로 구분하고 발견한 단서가 다음 공간의 의미를 바꾸도록 설계했습니다.',test:'프로토타입 검증 계획: 시선 유도 효과, 단서 발견 순서, 선택 구역 탐험 동기를 확인합니다.',color:'#99c4c9'},
{id:'03',videoId:'d5FCmbWcxy8',title:'그라운드 제로',subtitle:'그라운드 제로',category:'쿼터뷰 액션',year:'2026',image:'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1400&q=85',tags:['Unreal Engine 5','핵 앤 슬래시'],summary:'파괴된 도시를 배경으로, 재앙의 원인을 밝혀내기 위해 도시의 중심으로 나아가는 레벨.',role:'맵 레이아웃 · 시야 분석 · 그레이박스',duration:'4주 · 개인 프로젝트',goal:'각 진입로가 서로 다른 위험과 보상을 갖도록 구성합니다.',design:'중앙 교전 구역으로 연결되는 빠른 직선 경로, 안전한 외곽 경로, 시야 우위를 제공하는 상층 경로를 구성했습니다. 일방적인 사격 위치에는 우회 진입로를 두었습니다.',test:'프로토타입 검증 계획: 진영별 도달 시간과 시야 노출, 특정 경로로의 이동 집중을 비교합니다.',color:'#c8b19a'}
];



// 게임 이력 추가 형식: { title: '게임명', genre: '장르', platform: '플랫폼', period: '플레이 기간', insight: '플레이하며 얻은 인사이트' }
export const minimapUrl = 'https://minimap.net/user/wan102745/achievement/playstation/game?sort=LAST_PLAYED_TIME_DESC&l=kr';
// 미니맵 공개 기록에서 2026-11-15 확인. 자동 동기화되지 않는 스냅샷입니다.
// insight에 글을 입력하면 해당 게임 카드에 표시됩니다.
export const playHistory = [
 {title:'팬텀 블레이드 제로',group:'PC · 콘솔',platform:'PlayStation',time:'43시간 31분',completion:100,image:'/games/phantom-blade-zero.jpg',accent:'#bcad75',insight:''},
 {title:'몬스터 헌터 와일즈',group:'PC · 콘솔',platform:'PlayStation',time:'225시간 37분',completion:100,image:'/games/monster-hunter-wilds.jpg',accent:'#a8bf8b',insight:''},
 {title:'그랑블루 판타지 리링크',group:'PC · 콘솔',platform:'PlayStation',time:'356시간 20분',completion:100,image:'/games/granblue-fantasy-relink-header.jpg',accent:'#8fbede',insight:''},
 {title:'붉은사막',group:'PC · 콘솔',platform:'PlayStation',time:'222시간 46분',completion:45.71,image:'/games/crimson-desert.jpg',accent:'#c4a282',insight:''},
 {title:'젠레스 존 제로',group:'모바일',platform:'PC, 모바일',startDate:'2024.07.04',image:'/games/zenless-zone-zero.jpg',accent:'#c4ce7b',insight:''},
 {title:'명조',group:'모바일',platform:'PC, 모바일',startDate:'2026.05.25',image:'/games/wuthering-waves.jpg',accent:'#a4c5ce',insight:''},
 {title:'이환',group:'모바일',platform:'PC, 모바일',startDate:'2026.04.29',image:'/games/neverness-to-everness.jpg',accent:'#c5a5c8',insight:''},
 {title:'명일방주: 엔드필드',group:'모바일',platform:'PC, 모바일',startDate:'2026.01.22',image:'/games/arknights-endfield.jpg',accent:'#c6ce8a',insight:''}
];


