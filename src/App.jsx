import React, { useState } from 'react';

// ==========================================
// 텍스트 데이터 모음
// ==========================================
const SHORT_TEXTS = [
  "오늘도 당신의 하루가 반짝반짝 빛나길 바랍니다.",
  "노력은 결코 배신하지 않는다는 말을 믿어보세요.",
  "잠시 쉬어가는 것도 더 멀리 가기 위한 준비입니다.",
  "작은 습관들이 모여 우리의 위대한 미래를 만듭니다.",
  "따뜻한 차 한 잔과 함께 여유로운 오후를 즐기세요.",
  "가장 늦었다고 생각한 지금은 정말 가장 빠를 때입니다.",
  "지나간 일에 후회하기보다 다가올 내일을 꿈꾸세요.",
  "당신은 생각보다 훨씬 더 강하고 멋진 사람입니다.",
  "포기하지 않고 끝까지 걷는 사람이 목적지에 닿습니다.",
  "창밖으로 보이는 푸른 하늘이 마음을 편안하게 하네요.",
  "매일 조금씩 성장하는 나를 발견하는 기쁨을 느껴보세요.",
  "친절한 말 한마디가 누군가의 세상을 바꿀 수도 있습니다.",
  "실수는 성공으로 가는 길에 놓인 작은 조약돌일 뿐입니다.",
  "지금 이 순간에 최선을 다하는 것이 가장 중요합니다.",
  "우리는 모두 각자의 속도로 자신만의 꽃을 피웁니다.",
  "긍정적인 생각이 긍정적인 삶을 만드는 첫걸음입니다.",
  "당신이 꿈꾸는 모든 일이 마법처럼 이루어질 거예요.",
  "가끔은 아무 생각 없이 구름을 구경하는 것도 좋아요.",
  "함께 웃을 수 있는 사람이 곁에 있다는 것은 큰 행복입니다.",
  "오늘 하루도 정말 고생 많으셨습니다. 편안한 밤 되세요.",
  "행복은 습관이다, 그것을 몸에 익혀라.",
  "시작하는 모든 존재는 아프고 불안하다.",
  "어제보다 나은 내일은 오늘의 노력에서 시작된다.",
  "가장 큰 위험은 아무런 위험도 감수하지 않는 것이다.",
  "별을 보려면 어둠이 필요하다.", // <-- 빠졌던 따옴표 수정 완료!
  "물결이 일렁이는 바다 위로 은빛 달빛이 쏟아져 내렸다.",
  "다람쥐 헌 쳇바퀴에 타고파",
  "실패는 다시 시작할 수 있는 기회이며, 이번에는 더 현명하게 시작할 수 있다.",
  "당신이 할 수 있다고 믿든 할 수 없다고 믿든, 믿는 대로 될 것이다.",
  "폭풍우가 지나가기를 기다리는 것이 아니라, 빗속에서 춤추는 법을 배우는 것이다.",
  "작은 기쁨들이 모여 큰 행복을 만들고, 그 행복은 내일을 살아갈 힘이 된다.",
  "남과 비교하지 말고, 어제의 나보다 얼마나 성장했는지에 집중해보자.",
  "짙푸른 밤하늘에 수놓아진 은하수는 마치 흩뿌려진 보석처럼 빛나고 있었다.",
  "소리 없이 내리는 눈송이가 세상을 하얗게 덮으며 고요한 평화를 선물한다.",
  "해 질 녘 노을이 붉게 물든 바닷가는 말로 표현할 수 없는 감동을 선사한다.",
  "숲속에서 들려오는 산새들의 지저귐과 시냇물 소리가 마음을 맑게 씻어준다.",
  "따스한 봄바람이 코끝을 간지럽히면 벚꽃 잎이 눈꽃처럼 흩날리기 시작한다.",
  "오늘 걷지 않으면 내일은 뛰어야 한다는 말처럼 매일 조금씩 나아가자.",
  "계획만 세우기보다 일단 시작하는 용기가 당신의 인생을 바꿀 수 있다.",
  "복잡한 생각들로 머릿속이 가득할 때는 잠시 모든 것을 내려놓고 숨을 쉬어라.",
  "친절한 한 마디는 누군가의 하루를 밝히는 가장 따뜻한 햇살이 된다.",
  "진정한 휴식은 아무것도 하지 않는 것이 아닌 영혼을 채우는 활동이다.",
  "안녕하세요?라는 짧은 인사 속에서도 사람의 온기는 충분히 담길 수 있습니다.",
  "인생은 가까이서 보면 비극이지만, 멀리서 보면 희극이라는 말이 떠오른다.",
  "우리가 겪는 시련은 성장을 위한 밑거름이며, 결국 우리를 더 단단하게 만든다.",
  "끊임없이 질문하고 답을 찾아가는 과정 자체가 인생이라는 커다란 여행이다.",
  "기록하지 않는 기억을 금세 사라지지만, 적어 내려간 글자는 역사가 된다.",
  "내일은 내일의 태양이 뜰 거야.",
  "내가 꿈을 이루면, 나는 다시 누군가의 꿈이 된다.",
  "당신이 빛나면 당신 주변의 세상도 함께 환해지기 시작한다.",
  "배움은 멈추지 않는 한, 당신을 가장 높은 곳으로 인도할 것이다.",
  "오늘 흘린 땀방울은 내일 당신이 마주할 찬란한 미소가 된다.",
  "남들의 속도에 맞추지 말고, 당신만의 고유한 리듬으로 걸어가라.",
  "진정한 성공은 결과가 아니라, 그 과정에서 얻은 깨달음에 있다.",
  "작은 시내가 모여 바다를 이루듯, 사소한 습관이 위대한 인생을 만든다.",
  "당신은 당신이 생각하는 것보다 훨씬 더 강하고 지혜로운 사람이다.",
  "한계를 정하는 것은 당신의 능력이 아니라, 당신의 마음가짐이다.",
  "어제의 실패는 오늘의 나를 더 단단하게 만드는 소중한 거름이다.",
  "세상을 바꾸고 싶다면, 먼저 거울 속에 있는 나 자신부터 바꿔야 한다.",
  "당신의 가치는 타인의 평가가 아닌, 스스로에 대한 확신으로 결정된다.",
  "길을 잃는다는 것은, 새로운 길을 발견할 기회를 얻는 것과 같다.",
  "가슴 뛰는 일을 찾아라, 그것이 당신이 세상을 살아가는 이유가 된다.",
  "침묵 속에서도 끊임없이 정진하는 사람에게는 누구도 이길 수 없다.",
  "할 수 있다는 그 짧은 한마디가 불가능해 보이던 문을 여는 열쇠가 된다.",
  "지금 이 순간에 집중하는 것, 그것이 미래를 바꾸는 가장 빠른 방법이다.",
  "누군가의 삶에 긍정적인 발자국을 남기는 것보다 가치 있는 일은 없다.",
  "인생이라는 도화지에 당신만의 색깔로 가장 아름다운 그림을 그려보라,", // <-- 빠졌던 콤마 수정 완료!
  "당신이 걷는 모든 발걸음이 누군가에게는 희망의 이정표가 될 것이다.",
  "아직 꿈이 없다는 것은, 앞으로 가질 수 있는 꿈의 종류가 무한하다는 뜻이다.",
  "세상에는 아직 이름 붙여지지 않은 수많은 직업이 우리를 기다리고 있다.",
  "실패는 잘못된 길로 들어선 것이 아니라, 너에게 맞지 않는 길을 확인한 과정일 뿐이다.",
  "조급해하지 않아도 괜찮다. 꽃마다 피어나는 계절이 저마다 다르듯이 말이다.",
  "완벽한 선택을 하려 하기보다, 네가 한 선택을 완벽하게 만들어가는 태도가 중요하다.",
  "광주소프트웨어마이스터고등학교",
  "끝날 때까지는 끝난 게 아니다.",
  "슬럼프는 정신적인 것이 아니라, 통계적인 현상일 뿐이다.",
  "안타를 치지 못 했다고 해서 실망하지 마라, 당신에게는 다음 타석이 남아 있다.",
  "노력했다고 모두가 성공하는 것은 아니겠지, 하지만 성공한 사람은 모두 노력했다는 것을 명심해."
];

const LONG_TEXTS = {
  "별 헤는 밤 (윤동주)": [
    "계절이 지나가는 하늘에는 가을로 가득 차 있습니다.",
    "나는 아무 걱정도 없이 가을 속의 별들을 다 헤일 듯합니다.",
    "가슴 속에 하나둘 새겨지는 별을 이제 다 못 헤는 것은",
    "쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요,",
    "아직 나의 청춘이 다하지 않은 까닭입니다.",
    "별 하나에 추억과 별 하나에 사랑과",
    "별 하나에 쓸쓸함과 별 하나에 동경과",
    "별 하나에 시와 별 하나에 어머니, 어머니"
  ],
  "애국가 (1~4절)": [
    "동해 물과 백두산이 마르고 닳도록",
    "하느님이 보우하사 우리나라 만세.",
    "무궁화 삼천리 화려 강산",
    "대한 사람 대한으로 길이 보전하세.",
    "남산 위에 저 소나무 철갑을 두른 듯",
    "바람 서리 불변함은 우리 기상일세.",
    "가을 하늘 공활한데 높고 구름 없이",
    "밝은 달은 우리 가슴 일편단심일세.",
    "이 기상과 이 맘으로 충성을 다하여",
    "괴로우나 즐거우나 나라 사랑하세."
  ],
  "어린 왕자 (생텍쥐페리)": [
    "내 비밀은 이런 거야. 매우 간단한 거지.",
    "오로지 마음으로 보아야만 정확하게 볼 수 있다는 거야.",
    "가장 중요한 것은 눈에는 보이지 않는단다.",
    "네 장미꽃을 그렇게 소중하게 만든 것은,",
    "그 꽃을 위해 네가 소비한 시간이란다.",
    "사람들은 이 진리를 잊어버렸어.",
    "하지만 넌 그것을 잊어서는 안 돼.",
    "넌 네가 길들인 것에 대해 언제까지나 책임을 져야 하는 거야."
  ],
  "광주소프트웨어마이스터고등학교 교가": [
    "동백꽃 붉게 핀 금봉산따라",
    "우리의 빛나는 꿈을 키우자",
    "꿈꾸는 사람만이 세상을 바꾸리",
    "세상을 바꾸는건 우리가 할 수 있어",
    "소프트웨어에 꿈을 담은 우리는 세상의 주인",
    "더불어 나누고 서로서로 사랑하자",
    "우리의 배움터 광주소프트웨어마이스터고",
    "푸른 물결 영산강따라",
    "우리의 드높은 꿈을 펼치자",
    "꿈꾸는 사람만이 세상을 바꾸리",
    "세상을 바꾸는건 우리가 할 수 있어",
    "소프트웨어에 꿈을 담은 우리는 세상의 희망",
    "더불어 손잡고 새 희망을 노래하자",
    "우리의 배움터 광주소프트웨어마이스터고"
  ]
};

// ==========================================
// 배열에서 랜덤으로 N개를 뽑아주는 함수
// ==========================================
const getRandomSentences = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, array.length));
};

// ==========================================
// 한글 타수 계산 함수
// ==========================================
const calculateStrokes = (text) => {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if (code >= 44032 && code <= 55203) {
      const jong = (code - 44032) % 28;
      count += jong > 0 ? 3 : 2; 
    } else if (code !== 32) {
      count += 1;
    }
  }
  return count;
};

// ==========================================
// 메인 컴포넌트
// ==========================================
export default function App() {
  const [mode, setMode] = useState('menu'); 
  const [currentList, setCurrentList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputVal, setInputVal] = useState('');
  
  const [startTime, setStartTime] = useState(null);
  const [totalStrokes, setTotalStrokes] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [currentCpm, setCurrentCpm] = useState(0);

  const startGame = (textList) => {
    setCurrentList(textList);
    setCurrentIndex(0);
    setInputVal('');
    setStartTime(null);
    setTotalStrokes(0);
    setTotalDuration(0);
    setCurrentCpm(0);
    setMode('playing');
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!startTime && value.length === 1) {
      setStartTime(Date.now());
    }
    setInputVal(value);
    
    const targetText = currentList[currentIndex];
    if (value === targetText) {
      const endTime = Date.now();
      const durationSec = (endTime - startTime) / 1000;
      const strokes = calculateStrokes(targetText);
      
      const cpm = durationSec > 0 ? (strokes / durationSec) * 60 : 0;
      
      setTotalStrokes(prev => prev + strokes);
      setTotalDuration(prev => prev + durationSec);
      setCurrentCpm(Math.round(cpm));
      
      if (currentIndex + 1 < currentList.length) {
        setCurrentIndex(prev => prev + 1);
        setInputVal('');
        setStartTime(null);
      } else {
        setMode('result');
      }
    }
  };

  // 인라인 스타일 객체 (flexDirection: 'column' 추가 완료)
  const styles = {
    container: { 
      minHeight: '100vh', 
      backgroundColor: '#0f172a', 
      color: 'white', 
      display: 'flex', 
      flexDirection: 'column', // <-- 카드가 가로로 퍼지는 현상 해결 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'sans-serif', 
      padding: '20px' 
    },
    card: { 
      maxWidth: '700px', 
      width: '100%', 
      backgroundColor: '#1e293b', 
      borderRadius: '16px', 
      padding: '40px', 
      boxShadow: '0 10px 25px rgba(0,0,0,0.3)', 
      border: '1px solid #334155' 
    },
    title: { fontSize: '2.5rem', fontWeight: 'bold', color: '#38bdf8', marginBottom: '30px', textAlign: 'center' },
    button: { width: '100%', padding: '15px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px', transition: '0.2s' },
    input: { width: '100%', padding: '15px', fontSize: '1.2rem', borderRadius: '8px', border: '2px solid #3b82f6', backgroundColor: '#0f172a', color: 'white', textAlign: 'center', outline: 'none', boxSizing: 'border-box' },
    target: { fontSize: '1.4rem', color: '#4ade80', marginBottom: '25px', lineHeight: '1.6', wordBreak: 'keep-all' },
    stats: { display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.9rem', marginBottom: '10px' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        {/* 메뉴 화면 */}
        {mode === 'menu' && (
          <div style={{ textAlign: 'center' }}>
            <h1 style={styles.title}>타자 연습</h1>
            
            <button 
              style={styles.button} 
              onClick={() => {
                const random10 = getRandomSentences(SHORT_TEXTS, 10);
                startGame(random10);
              }}
            >
              1. 단문 연습 시작 (랜덤 10문장)
            </button>
            
            <div style={{ marginTop: '30px' }}>
              <h3 style={{ color: '#94a3b8', marginBottom: '15px' }}>2. 긴 글 연습 선택</h3>
              {Object.keys(LONG_TEXTS).map(title => (
                <button 
                  key={title} 
                  style={{ ...styles.button, backgroundColor: '#475569', fontSize: '1rem' }} 
                  onClick={() => startGame(LONG_TEXTS[title])}
                >
                  {title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 플레이 화면 */}
        {mode === 'playing' && (
          <div style={{ textAlign: 'center' }}>
            <div style={styles.stats}>
              <span>진행: {currentIndex + 1} / {currentList.length}</span>
              <span>최근 타수: {currentCpm} CPM</span>
            </div>
            <div style={styles.target}>{currentList[currentIndex]}</div>
            <input
              style={styles.input}
              value={inputVal}
              onChange={handleInputChange}
              onPaste={(e) => { e.preventDefault(); alert("붙여넣기 금지!"); }}
              autoFocus
              placeholder="위 문장을 똑같이 타이핑하세요"
              autoComplete="off"
            />
            <p style={{ marginTop: '20px', fontSize: '0.8rem', color: '#64748b' }}>오타 없이 정확히 입력하면 다음 문장으로 넘어갑니다.</p>
            <button 
              style={{ ...styles.button, backgroundColor: 'transparent', color: '#94a3b8', border: '1px solid #475569', marginTop: '20px', padding: '10px' }} 
              onClick={() => setMode('menu')}
            >
              포기하고 메뉴로 돌아가기
            </button>
          </div>
        )}

        {/* 결과 화면 */}
        {mode === 'result' && (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', color: '#fbbf24', marginBottom: '20px' }}>연습 완료! 🎉</h2>
            <div style={{ backgroundColor: '#0f172a', padding: '30px', borderRadius: '12px', marginBottom: '30px' }}>
              <p style={{ fontSize: '1.2rem', marginBottom: '15px' }}>총 타이핑 시간: {totalDuration.toFixed(2)}초</p>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4ade80' }}>평균 타수: {Math.round((totalStrokes / totalDuration) * 60)} CPM</p>
            </div>
            <button style={styles.button} onClick={() => setMode('menu')}>메인 메뉴로 돌아가기</button>
          </div>
        )}

      </div>

      {/* 푸터(제작자 정보) 영역 - 카드 바깥, 아래쪽으로 잘 배치됨! */}
      <footer style={{ 
        marginTop: '40px', 
        paddingTop: '20px', 
        borderTop: '1px solid #334155', 
        textAlign: 'center', 
        color: '#64748b', 
        fontSize: '0.85rem' 
      }}>
        <p>© 2026 Hyun. All rights reserved.</p>
        <p>Developed by <strong>조현</strong> (Gwangju Software Meister High School)</p>
        <p style={{ marginTop: '5px' }}>email: <span style={{ color: '#38bdf8' }}>s26063@gsm.hs.kr</span></p>
        <p style={{ marginTop: '5px' }}>GitHub: <span style={{ color: '#38bdf8' }}>mmHg-9060</span></p>
      </footer>
    </div>
  );
}