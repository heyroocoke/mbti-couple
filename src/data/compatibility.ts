export interface Compatibility {
  score: number; // 1-5
  title: string;
  description: string;
  tips: string[];
}

// 궁합 점수: 5=천생연분, 4=좋은궁합, 3=보통, 2=노력필요, 1=도전적
const compatibilityData: Record<string, Record<string, Compatibility>> = {
  INTJ: {
    INTJ: { score: 3, title: '지적 동반자', description: '서로를 잘 이해하지만, 감정 표현이 부족할 수 있어요.', tips: ['감정 표현 연습하기', '서로의 공간 존중하기'] },
    INTP: { score: 4, title: '논리적 파트너', description: '지적 대화가 끝없이 이어지는 관계예요.', tips: ['현실적인 계획 세우기', '감정도 나누기'] },
    ENTJ: { score: 4, title: '목표 지향 커플', description: '함께 큰 목표를 향해 나아갈 수 있어요.', tips: ['주도권 다툼 조심', '서로 인정하기'] },
    ENTP: { score: 5, title: '천생연분', description: '지적 호기심을 자극하는 완벽한 파트너예요!', tips: ['ENTP의 아이디어 지지하기', '유연성 기르기'] },
    INFJ: { score: 4, title: '깊은 이해', description: '서로의 내면을 깊이 이해하는 관계예요.', tips: ['감정 표현 노력하기', '이상과 현실 균형'] },
    INFP: { score: 3, title: '보완적 관계', description: '다른 점이 많지만 배울 것도 많아요.', tips: ['INFP 감정 존중하기', '비판 조심하기'] },
    ENFJ: { score: 5, title: '완벽한 균형', description: '서로에게 부족한 부분을 채워주는 관계예요!', tips: ['ENFJ의 감정 케어에 감사하기', '사회 활동 함께하기'] },
    ENFP: { score: 4, title: '영감의 원천', description: 'ENFP가 INTJ에게 새로운 시각을 열어줘요.', tips: ['ENFP의 자유로움 존중', '계획에 융통성 두기'] },
    ISTJ: { score: 3, title: '안정적 관계', description: '둘 다 신뢰와 책임을 중시해요.', tips: ['새로운 시도 함께하기', '감정 나누기'] },
    ISFJ: { score: 3, title: '돌봄과 전략', description: 'ISFJ의 세심함이 INTJ를 따뜻하게 해요.', tips: ['ISFJ 노력 인정하기', '감사 표현하기'] },
    ESTJ: { score: 3, title: '실행력 콤비', description: '목표를 향해 함께 나아갈 수 있어요.', tips: ['방법론 차이 존중', '유연하게 대화하기'] },
    ESFJ: { score: 2, title: '도전적 관계', description: '가치관 차이가 있지만 성장의 기회예요.', tips: ['ESFJ 감정 존중하기', '사회적 상황 함께하기'] },
    ISTP: { score: 3, title: '논리적 파트너', description: '서로의 독립성을 존중하는 관계예요.', tips: ['감정 교류 노력하기', '활동 함께하기'] },
    ISFP: { score: 2, title: '성장의 관계', description: '다른 세계관이 새로운 시각을 줘요.', tips: ['ISFP 감수성 존중', '비판 삼가기'] },
    ESTP: { score: 2, title: '도전적 만남', description: '다른 점이 많지만 자극이 되는 관계예요.', tips: ['ESTP의 즉흥성 이해하기', '함께 활동하기'] },
    ESFP: { score: 2, title: '정반대 매력', description: '다름이 매력이 될 수도 있어요.', tips: ['ESFP의 밝은 에너지 즐기기', '계획 강요 안 하기'] }
  },
  INTP: {
    INTJ: { score: 4, title: '논리적 파트너', description: '지적 대화가 끝없이 이어지는 관계예요.', tips: ['현실적인 계획 세우기', '감정도 나누기'] },
    INTP: { score: 3, title: '아이디어 천국', description: '끝없는 토론이 가능하지만 결론이 없을 수도...', tips: ['결정하는 연습하기', '현실 세계도 신경쓰기'] },
    ENTJ: { score: 5, title: '천생연분', description: 'ENTJ가 아이디어를 실현시켜주는 완벽한 파트너!', tips: ['ENTJ의 결단력 존중하기', '의견 적극 표현하기'] },
    ENTP: { score: 4, title: '무한 토론', description: '아이디어 배틀이 즐거운 관계예요.', tips: ['토론에서 감정 분리하기', '때로는 결론짓기'] },
    INFJ: { score: 4, title: '깊은 대화', description: '서로의 생각을 깊이 탐구하는 관계예요.', tips: ['INFJ 감정에 귀 기울이기', '이론만 말하지 않기'] },
    INFP: { score: 3, title: '내면의 교감', description: '둘 다 내면 세계가 풍부해요.', tips: ['감정 표현 연습하기', 'INFP 가치관 존중하기'] },
    ENFJ: { score: 4, title: '균형잡힌 관계', description: 'ENFJ가 사회적 연결을 도와줘요.', tips: ['ENFJ의 사회 활동 참여하기', '감정 나누기 노력하기'] },
    ENFP: { score: 4, title: '창의적 듀오', description: '함께 새로운 아이디어를 탐구해요.', tips: ['ENFP의 열정 지지하기', '때로는 즉흥적으로'] },
    ISTJ: { score: 2, title: '다른 세계', description: '접근 방식이 다르지만 배울 점이 있어요.', tips: ['ISTJ의 실용성 존중하기', '이론을 현실에 적용하기'] },
    ISFJ: { score: 2, title: '보완적 관계', description: 'ISFJ의 돌봄이 따뜻해요.', tips: ['ISFJ의 노력 인정하기', '감사 표현하기'] },
    ESTJ: { score: 2, title: '도전적 관계', description: '사고방식이 다르지만 성장할 수 있어요.', tips: ['ESTJ의 체계 존중하기', '현실적 의견도 듣기'] },
    ESFJ: { score: 2, title: '다른 언어', description: '소통 방식이 달라 노력이 필요해요.', tips: ['ESFJ 감정 공감하기', '사회적 상황 참여하기'] },
    ISTP: { score: 4, title: '분석적 파트너', description: '함께 문제를 분석하고 해결해요.', tips: ['때로는 행동으로 옮기기', '감정도 나누기'] },
    ISFP: { score: 2, title: '다른 세계관', description: '서로 다른 시각이 새로울 수 있어요.', tips: ['ISFP의 감수성 존중하기', '논리로만 대하지 않기'] },
    ESTP: { score: 3, title: '분석과 행동', description: 'ESTP가 행동력을 불어넣어줘요.', tips: ['함께 활동하기', '때로는 즉흥적으로'] },
    ESFP: { score: 2, title: '정반대 매력', description: '다름이 자극이 될 수 있어요.', tips: ['ESFP의 밝음 즐기기', '함께 놀아보기'] }
  },
  ENTJ: {
    INTJ: { score: 4, title: '목표 지향 커플', description: '함께 큰 목표를 향해 나아갈 수 있어요.', tips: ['주도권 다툼 조심', '서로 인정하기'] },
    INTP: { score: 5, title: '천생연분', description: 'INTP의 아이디어를 ENTJ가 실현시켜요!', tips: ['INTP의 생각하는 시간 존중', '감정 표현 노력하기'] },
    ENTJ: { score: 3, title: '파워 커플', description: '둘 다 리더라 조율이 필요해요.', tips: ['역할 분담하기', '서로 인정하기'] },
    ENTP: { score: 4, title: '역동적 파트너', description: '함께 새로운 도전을 해나가요.', tips: ['ENTP의 아이디어 경청하기', '때로는 유연하게'] },
    INFJ: { score: 4, title: '이상적 균형', description: 'INFJ가 감성적 균형을 맞춰줘요.', tips: ['INFJ의 통찰 존중하기', '감정에 귀 기울이기'] },
    INFP: { score: 5, title: '완벽한 보완', description: 'INFP가 ENTJ에게 감성을 선물해요!', tips: ['INFP의 가치관 존중하기', '강압적이지 않기'] },
    ENFJ: { score: 4, title: '리더 커플', description: '함께 세상을 바꿀 수 있는 팀이에요.', tips: ['주도권 나누기', '서로의 방식 존중'] },
    ENFP: { score: 4, title: '열정적 파트너', description: '함께 큰 꿈을 이룰 수 있어요.', tips: ['ENFP의 자유 존중하기', '유연하게 계획하기'] },
    ISTJ: { score: 3, title: '체계적 파트너', description: '함께 효율적으로 목표를 달성해요.', tips: ['ISTJ의 신중함 존중', '변화에 시간 주기'] },
    ISFJ: { score: 3, title: '돌봄과 리더십', description: 'ISFJ의 세심함이 관계를 따뜻하게 해요.', tips: ['ISFJ의 노력 인정하기', '감사 표현하기'] },
    ESTJ: { score: 3, title: '실행력 팀', description: '함께 일을 완수하는 파트너예요.', tips: ['방식 차이 조율하기', '서로 인정하기'] },
    ESFJ: { score: 3, title: '균형잡힌 관계', description: 'ESFJ가 사회적 조화를 도와줘요.', tips: ['ESFJ의 관계 중시 이해하기', '감정 나누기'] },
    ISTP: { score: 3, title: '분석과 실행', description: 'ISTP의 분석이 도움이 돼요.', tips: ['ISTP의 독립성 존중', '강요하지 않기'] },
    ISFP: { score: 2, title: '다른 가치관', description: '서로에게 새로운 시각을 줘요.', tips: ['ISFP의 감성 존중하기', '자유 주기'] },
    ESTP: { score: 4, title: '행동파 콤비', description: '함께 도전하고 성취해요.', tips: ['장기 계획도 세우기', '즐거움도 함께'] },
    ESFP: { score: 3, title: '일과 놀이', description: 'ESFP가 여유를 선물해요.', tips: ['ESFP의 즐거움 함께하기', '강요하지 않기'] }
  },
  ENTP: {
    INTJ: { score: 5, title: '천생연분', description: '지적 호기심을 자극하는 완벽한 파트너예요!', tips: ['INTJ의 계획 존중하기', '감정도 나누기'] },
    INTP: { score: 4, title: '무한 토론', description: '아이디어 배틀이 즐거운 관계예요.', tips: ['토론에서 감정 분리하기', '때로는 결론짓기'] },
    ENTJ: { score: 4, title: '역동적 파트너', description: '함께 새로운 도전을 해나가요.', tips: ['ENTJ의 결단력 존중', '마무리 잘하기'] },
    ENTP: { score: 3, title: '아이디어 폭발', description: '끝없는 토론이 즐거워요.', tips: ['때로는 실행하기', '서로 경청하기'] },
    INFJ: { score: 5, title: '완벽한 조합', description: 'INFJ가 깊은 이해와 균형을 줘요!', tips: ['INFJ의 감정 존중하기', '통찰에 귀 기울이기'] },
    INFP: { score: 4, title: '영감의 교환', description: '서로에게 새로운 시각을 선물해요.', tips: ['INFP의 감수성 존중', '논쟁 대신 대화하기'] },
    ENFJ: { score: 4, title: '열정적 파트너', description: '함께 사람들에게 영향을 줄 수 있어요.', tips: ['ENFJ의 감정 케어 감사하기', '관계도 신경쓰기'] },
    ENFP: { score: 4, title: '창의력 폭발', description: '함께 무한한 가능성을 탐구해요.', tips: ['때로는 현실도 보기', '서로 지지하기'] },
    ISTJ: { score: 2, title: '다른 접근법', description: '방식은 다르지만 배울 점이 있어요.', tips: ['ISTJ의 신중함 존중', '약속 지키기'] },
    ISFJ: { score: 2, title: '보완적 관계', description: 'ISFJ의 안정감이 도움이 돼요.', tips: ['ISFJ의 노력 인정하기', '감정 표현하기'] },
    ESTJ: { score: 2, title: '도전적 관계', description: '다른 시각이 성장의 기회예요.', tips: ['ESTJ의 체계 존중', '책임감 보여주기'] },
    ESFJ: { score: 2, title: '다른 가치관', description: '소통 노력이 필요한 관계예요.', tips: ['ESFJ 감정 공감하기', '관계 중시하기'] },
    ISTP: { score: 3, title: '분석적 파트너', description: '함께 문제를 탐구해요.', tips: ['ISTP의 공간 존중', '행동으로도 표현하기'] },
    ISFP: { score: 3, title: '감성과 논리', description: 'ISFP가 감성을 선물해요.', tips: ['ISFP의 감수성 존중', '강요하지 않기'] },
    ESTP: { score: 4, title: '모험 파트너', description: '함께 새로운 것을 시도해요.', tips: ['때로는 깊이도', '서로 자극하기'] },
    ESFP: { score: 3, title: '재미있는 관계', description: '함께 즐거운 시간을 보내요.', tips: ['가끔은 진지하게도', '에너지 함께 즐기기'] }
  },
  INFJ: {
    INTJ: { score: 4, title: '깊은 이해', description: '서로의 내면을 깊이 이해하는 관계예요.', tips: ['감정 표현 노력하기', '이상과 현실 균형'] },
    INTP: { score: 4, title: '깊은 대화', description: '서로의 생각을 깊이 탐구하는 관계예요.', tips: ['감정에도 귀 기울이기', '이론과 감정 균형'] },
    ENTJ: { score: 4, title: '이상적 균형', description: 'ENTJ가 비전을 현실로 만들어줘요.', tips: ['서로의 강점 인정하기', '소통 노력하기'] },
    ENTP: { score: 5, title: '완벽한 조합', description: 'ENTP가 새로운 시각과 재미를 줘요!', tips: ['때로는 가볍게', '서로의 다름 즐기기'] },
    INFJ: { score: 4, title: '영혼의 교감', description: '서로를 깊이 이해하는 관계예요.', tips: ['현실 세계도 함께하기', '각자 시간도 갖기'] },
    INFP: { score: 4, title: '이상주의자 동맹', description: '같은 가치를 추구하는 파트너예요.', tips: ['현실적 계획도 세우기', '서로 지지하기'] },
    ENFJ: { score: 4, title: '깊은 유대', description: '서로를 돌보고 이해하는 관계예요.', tips: ['각자 시간도 존중하기', '함께 성장하기'] },
    ENFP: { score: 5, title: '천생연분', description: 'ENFP가 밝은 에너지로 균형을 맞춰요!', tips: ['ENFP의 자유 존중하기', '함께 꿈꾸기'] },
    ISTJ: { score: 3, title: '안정과 이상', description: 'ISTJ가 현실적 균형을 줘요.', tips: ['서로의 방식 존중', '소통 노력하기'] },
    ISFJ: { score: 4, title: '따뜻한 관계', description: '서로를 세심하게 돌보는 관계예요.', tips: ['함께 새로운 것 시도하기', '깊은 대화 나누기'] },
    ESTJ: { score: 2, title: '다른 세계관', description: '방식은 다르지만 배울 점이 있어요.', tips: ['서로 존중하기', '소통에 노력하기'] },
    ESFJ: { score: 3, title: '돌봄의 관계', description: '서로를 챙기는 따뜻한 관계예요.', tips: ['깊은 대화도 나누기', '사회 활동 함께하기'] },
    ISTP: { score: 2, title: '다른 언어', description: '소통 방식이 다른 관계예요.', tips: ['서로의 방식 존중', '노력하면 성장'] },
    ISFP: { score: 3, title: '감성적 유대', description: '감성을 나누는 관계예요.', tips: ['함께 예술 즐기기', '현실도 함께 보기'] },
    ESTP: { score: 2, title: '도전적 관계', description: '다른 세계관이 성장의 기회예요.', tips: ['ESTP의 활력 함께하기', '서로 이해 노력하기'] },
    ESFP: { score: 3, title: '밝음과 깊이', description: 'ESFP가 밝은 에너지를 줘요.', tips: ['함께 즐거운 시간 보내기', '깊은 대화도 나누기'] }
  },
  INFP: {
    INTJ: { score: 3, title: '보완적 관계', description: '다른 점이 많지만 배울 것도 많아요.', tips: ['비판을 개인적으로 받아들이지 않기', '서로 존중하기'] },
    INTP: { score: 3, title: '내면의 교감', description: '둘 다 내면 세계가 풍부해요.', tips: ['감정 표현하기', '가치관 존중하기'] },
    ENTJ: { score: 5, title: '완벽한 보완', description: 'ENTJ가 꿈을 현실로 만들어줘요!', tips: ['ENTJ의 직접적 표현 이해하기', '자신의 가치 표현하기'] },
    ENTP: { score: 4, title: '영감의 교환', description: '서로에게 새로운 시각을 선물해요.', tips: ['논쟁을 개인적으로 받지 않기', '가치관 표현하기'] },
    INFJ: { score: 4, title: '이상주의자 동맹', description: '같은 가치를 추구하는 파트너예요.', tips: ['현실적 계획도 세우기', '서로 지지하기'] },
    INFP: { score: 3, title: '같은 영혼', description: '서로를 깊이 이해하지만 현실이 필요해요.', tips: ['현실 세계도 함께하기', '때로는 결정하기'] },
    ENFJ: { score: 5, title: '천생연분', description: 'ENFJ가 따뜻하게 이끌어줘요!', tips: ['ENFJ의 리더십 지지하기', '감정 표현하기'] },
    ENFP: { score: 4, title: '이상주의 듀오', description: '함께 꿈을 꾸고 공유하는 관계예요.', tips: ['현실도 함께 보기', '서로 응원하기'] },
    ISTJ: { score: 2, title: '다른 세계', description: '접근 방식이 다른 관계예요.', tips: ['서로의 강점 배우기', '소통 노력하기'] },
    ISFJ: { score: 4, title: '따뜻한 유대', description: '서로를 돌보는 따뜻한 관계예요.', tips: ['감사 표현하기', '꿈도 함께 나누기'] },
    ESTJ: { score: 2, title: '도전적 관계', description: '가치관이 다르지만 성장 가능해요.', tips: ['서로 존중하기', '장점 배우기'] },
    ESFJ: { score: 3, title: '돌봄과 이상', description: 'ESFJ의 돌봄이 따뜻해요.', tips: ['감사 표현하기', '내면도 나누기'] },
    ISTP: { score: 2, title: '다른 언어', description: '소통에 노력이 필요해요.', tips: ['서로의 방식 존중', '작은 것부터 공유'] },
    ISFP: { score: 4, title: '감성적 교감', description: '같은 감성을 공유하는 관계예요.', tips: ['함께 예술 즐기기', '현실도 함께 보기'] },
    ESTP: { score: 2, title: '정반대 매력', description: '다른 세계관이 자극이 될 수 있어요.', tips: ['ESTP의 활력 즐기기', '가치관 표현하기'] },
    ESFP: { score: 3, title: '밝음과 깊이', description: 'ESFP가 즐거움을 선물해요.', tips: ['함께 놀기', '깊은 대화도 나누기'] }
  },
  ENFJ: {
    INTJ: { score: 5, title: '완벽한 균형', description: '서로에게 부족한 부분을 채워주는 관계예요!', tips: ['서로의 방식 존중하기', '함께 성장하기'] },
    INTP: { score: 4, title: '균형잡힌 관계', description: 'INTP에게 감정적 균형을 줘요.', tips: ['INTP의 생각 시간 존중', '지적 대화 즐기기'] },
    ENTJ: { score: 4, title: '리더 커플', description: '함께 세상을 바꿀 수 있는 팀이에요.', tips: ['주도권 나누기', '서로의 방식 존중'] },
    ENTP: { score: 4, title: '열정적 파트너', description: '함께 사람들에게 영향을 줄 수 있어요.', tips: ['ENTP의 토론 즐기기', '감정도 나누기'] },
    INFJ: { score: 4, title: '깊은 유대', description: '서로를 돌보고 이해하는 관계예요.', tips: ['각자 시간도 존중하기', '함께 성장하기'] },
    INFP: { score: 5, title: '천생연분', description: '서로의 이상을 지지하는 완벽한 관계!', tips: ['INFP의 속도 존중하기', '함께 꿈꾸기'] },
    ENFJ: { score: 3, title: '같은 마음', description: '서로를 이해하지만 주도권 조율이 필요해요.', tips: ['역할 나누기', '자기 돌봄도 하기'] },
    ENFP: { score: 4, title: '열정적 듀오', description: '함께 세상에 영감을 줘요.', tips: ['때로는 현실도 보기', '서로 응원하기'] },
    ISTJ: { score: 3, title: '안정과 열정', description: 'ISTJ가 현실적 균형을 줘요.', tips: ['서로의 방식 존중', '소통 노력하기'] },
    ISFJ: { score: 5, title: '완벽한 조화', description: '서로를 돌보는 따뜻한 관계예요!', tips: ['감사 표현하기', '함께 봉사하기'] },
    ESTJ: { score: 3, title: '실행력 파트너', description: '함께 목표를 이뤄요.', tips: ['방식 차이 존중', '감정도 나누기'] },
    ESFJ: { score: 4, title: '돌봄의 팀', description: '함께 주변을 돌보는 관계예요.', tips: ['자기 돌봄도 하기', '깊은 대화 나누기'] },
    ISTP: { score: 2, title: '도전적 관계', description: '소통 방식이 다른 관계예요.', tips: ['ISTP의 공간 존중', '행동으로 표현하기'] },
    ISFP: { score: 4, title: '따뜻한 교감', description: '감성을 나누는 관계예요.', tips: ['ISFP의 속도 존중', '함께 예술 즐기기'] },
    ESTP: { score: 3, title: '활력과 깊이', description: 'ESTP가 활력을 줘요.', tips: ['함께 활동하기', '감정 나누기 노력'] },
    ESFP: { score: 4, title: '즐거운 관계', description: '함께 즐겁고 의미 있는 시간을 보내요.', tips: ['재미와 의미 균형', '서로의 에너지 즐기기'] }
  },
  ENFP: {
    INTJ: { score: 4, title: '영감의 원천', description: 'INTJ에게 새로운 시각을 열어줘요.', tips: ['INTJ의 계획 존중', '때로는 차분하게'] },
    INTP: { score: 4, title: '창의적 듀오', description: '함께 새로운 아이디어를 탐구해요.', tips: ['INTP의 생각 시간 존중', '감정도 나누기'] },
    ENTJ: { score: 4, title: '열정적 파트너', description: '함께 큰 꿈을 이룰 수 있어요.', tips: ['ENTJ의 계획에 협력', '자유도 유지하기'] },
    ENTP: { score: 4, title: '창의력 폭발', description: '함께 무한한 가능성을 탐구해요.', tips: ['때로는 현실도 보기', '서로 지지하기'] },
    INFJ: { score: 5, title: '천생연분', description: '깊은 이해와 밝은 에너지의 완벽한 조화!', tips: ['INFJ의 시간 존중하기', '깊은 대화 즐기기'] },
    INFP: { score: 4, title: '이상주의 듀오', description: '함께 꿈을 꾸고 공유하는 관계예요.', tips: ['현실도 함께 보기', '서로 응원하기'] },
    ENFJ: { score: 4, title: '열정적 듀오', description: '함께 세상에 영감을 줘요.', tips: ['때로는 현실도 보기', '서로 응원하기'] },
    ENFP: { score: 3, title: '열정 폭발', description: '에너지가 넘치지만 현실도 필요해요.', tips: ['때로는 계획 세우기', '서로 응원하기'] },
    ISTJ: { score: 2, title: '다른 세계', description: '방식은 다르지만 배울 점이 있어요.', tips: ['ISTJ의 안정감 배우기', '약속 지키기 노력'] },
    ISFJ: { score: 4, title: '따뜻한 균형', description: 'ISFJ가 안정감을 줘요.', tips: ['ISFJ의 노력 인정하기', '함께 새로운 것 시도'] },
    ESTJ: { score: 2, title: '도전적 관계', description: '가치관이 다르지만 성장 가능해요.', tips: ['ESTJ의 체계 배우기', '자유도 표현하기'] },
    ESFJ: { score: 4, title: '밝은 관계', description: '함께 사람들과 어울리는 즐거움이 있어요.', tips: ['ESFJ의 돌봄 감사하기', '깊은 대화도 나누기'] },
    ISTP: { score: 3, title: '자유로운 관계', description: '서로의 자유를 존중하는 관계예요.', tips: ['ISTP의 공간 존중', '활동 함께하기'] },
    ISFP: { score: 4, title: '감성적 교감', description: '함께 예술과 아름다움을 즐겨요.', tips: ['현재 순간 즐기기', '서로 응원하기'] },
    ESTP: { score: 4, title: '모험 파트너', description: '함께 새로운 경험을 즐겨요.', tips: ['가끔은 깊은 대화도', '에너지 함께 즐기기'] },
    ESFP: { score: 4, title: '파티 메이트', description: '함께 즐거운 시간을 만들어요.', tips: ['때로는 진지하게도', '서로의 에너지 즐기기'] }
  },
  ISTJ: {
    INTJ: { score: 3, title: '안정적 관계', description: '둘 다 신뢰와 책임을 중시해요.', tips: ['새로운 시도 함께하기', '감정 나누기'] },
    INTP: { score: 2, title: '다른 세계', description: '접근 방식이 다르지만 배울 점이 있어요.', tips: ['서로의 방식 존중', '현실과 이론 균형'] },
    ENTJ: { score: 3, title: '체계적 파트너', description: '함께 효율적으로 목표를 달성해요.', tips: ['서로의 리더십 존중', '소통 노력하기'] },
    ENTP: { score: 2, title: '다른 접근법', description: '방식은 다르지만 배울 점이 있어요.', tips: ['ENTP의 아이디어에 열린 마음', '안정감 제공하기'] },
    INFJ: { score: 3, title: '안정과 이상', description: 'INFJ가 새로운 시각을 줘요.', tips: ['감정에 귀 기울이기', '이상도 존중하기'] },
    INFP: { score: 2, title: '다른 세계', description: '접근 방식이 다른 관계예요.', tips: ['INFP 감정 존중하기', '서로 배우기'] },
    ENFJ: { score: 3, title: '안정과 열정', description: 'ENFJ가 따뜻함을 더해줘요.', tips: ['감정 표현 노력하기', '사회 활동 함께하기'] },
    ENFP: { score: 2, title: '다른 세계', description: '방식은 다르지만 배울 점이 있어요.', tips: ['ENFP의 활력 즐기기', '유연해지기'] },
    ISTJ: { score: 3, title: '안정적 동반자', description: '같은 가치를 공유하는 관계예요.', tips: ['새로운 것도 시도하기', '감정 나누기'] },
    ISFJ: { score: 4, title: '신뢰의 관계', description: '서로를 믿고 의지하는 관계예요.', tips: ['감사 표현하기', '감정도 나누기'] },
    ESTJ: { score: 4, title: '실행력 팀', description: '함께 목표를 달성하는 파트너예요.', tips: ['때로는 여유도', '서로 인정하기'] },
    ESFJ: { score: 5, title: '완벽한 조화', description: '서로를 보완하는 안정적인 관계예요!', tips: ['감정 표현 노력하기', 'ESFJ의 돌봄 감사하기'] },
    ISTP: { score: 3, title: '실용적 파트너', description: '함께 실용적으로 문제를 해결해요.', tips: ['감정도 나누기', '각자 시간 존중'] },
    ISFP: { score: 3, title: '조용한 동반자', description: '서로의 공간을 존중하는 관계예요.', tips: ['감정 표현 노력', 'ISFP의 감성 존중'] },
    ESTP: { score: 3, title: '행동 파트너', description: '함께 실제적인 일을 해나가요.', tips: ['ESTP의 즉흥성 이해', '계획도 세우기'] },
    ESFP: { score: 3, title: '안정과 재미', description: 'ESFP가 즐거움을 더해줘요.', tips: ['때로는 즐기기', 'ESFP의 자유 존중'] }
  },
  ISFJ: {
    INTJ: { score: 3, title: '돌봄과 전략', description: '서로를 보완하는 관계예요.', tips: ['INTJ 방식 이해하기', '자신의 필요도 표현'] },
    INTP: { score: 2, title: '보완적 관계', description: '다르지만 배울 점이 있어요.', tips: ['INTP의 공간 존중', '감정 표현 요청하기'] },
    ENTJ: { score: 3, title: '돌봄과 리더십', description: '서로를 보완하는 관계예요.', tips: ['자신의 필요 표현하기', 'ENTJ 인정하기'] },
    ENTP: { score: 2, title: '보완적 관계', description: '다르지만 새로운 시각을 줘요.', tips: ['ENTP의 아이디어 즐기기', '안정감 표현하기'] },
    INFJ: { score: 4, title: '따뜻한 관계', description: '서로를 세심하게 돌보는 관계예요.', tips: ['깊은 대화 나누기', '함께 성장하기'] },
    INFP: { score: 4, title: '따뜻한 유대', description: '서로를 돌보는 따뜻한 관계예요.', tips: ['꿈도 함께 나누기', '현실도 함께 보기'] },
    ENFJ: { score: 5, title: '완벽한 조화', description: '서로를 돌보는 따뜻한 관계예요!', tips: ['각자 시간도 갖기', '함께 봉사하기'] },
    ENFP: { score: 4, title: '따뜻한 균형', description: '서로에게 필요한 것을 줘요.', tips: ['ENFP의 에너지 즐기기', '새로운 것 시도하기'] },
    ISTJ: { score: 4, title: '신뢰의 관계', description: '서로를 믿고 의지하는 관계예요.', tips: ['감정도 나누기', '서로 감사하기'] },
    ISFJ: { score: 3, title: '같은 마음', description: '서로를 잘 이해하는 관계예요.', tips: ['자기 돌봄도 하기', '새로운 것 시도하기'] },
    ESTJ: { score: 4, title: '안정적 파트너', description: '함께 책임감 있게 관계를 이어가요.', tips: ['감정도 표현하기', '서로 인정하기'] },
    ESFJ: { score: 4, title: '돌봄의 팀', description: '서로와 주변을 돌보는 관계예요.', tips: ['자기 돌봄도 하기', '깊은 대화 나누기'] },
    ISTP: { score: 2, title: '다른 방식', description: '소통에 노력이 필요해요.', tips: ['ISTP의 공간 존중', '감정 표현 요청하기'] },
    ISFP: { score: 4, title: '조용한 교감', description: '서로의 공간을 존중하며 돌봐요.', tips: ['감정 나누기', '함께 시간 보내기'] },
    ESTP: { score: 2, title: '다른 세계', description: '접근 방식이 다른 관계예요.', tips: ['ESTP의 활력 이해', '안정감 유지하기'] },
    ESFP: { score: 4, title: '안정과 재미', description: 'ESFP가 즐거움을 줘요.', tips: ['함께 즐기기', '안정감 제공하기'] }
  },
  ESTJ: {
    INTJ: { score: 3, title: '실행력 콤비', description: '목표를 향해 함께 나아갈 수 있어요.', tips: ['방법론 차이 존중', '유연하게 대화하기'] },
    INTP: { score: 2, title: '도전적 관계', description: '사고방식이 다르지만 배울 점이 있어요.', tips: ['INTP의 아이디어 경청', '시간 주기'] },
    ENTJ: { score: 3, title: '실행력 팀', description: '함께 일을 완수하는 파트너예요.', tips: ['역할 분담하기', '서로 인정하기'] },
    ENTP: { score: 2, title: '도전적 관계', description: '다른 시각이 성장의 기회예요.', tips: ['ENTP 아이디어에 열린 마음', '유연해지기'] },
    INFJ: { score: 2, title: '다른 세계관', description: '방식은 다르지만 배울 점이 있어요.', tips: ['INFJ 감정 존중', '소통 노력하기'] },
    INFP: { score: 2, title: '도전적 관계', description: '가치관이 다르지만 성장 가능해요.', tips: ['INFP 감정 존중', '강요하지 않기'] },
    ENFJ: { score: 3, title: '실행력 파트너', description: '함께 목표를 이뤄요.', tips: ['감정에도 귀 기울이기', '소통하기'] },
    ENFP: { score: 2, title: '도전적 관계', description: '가치관이 다르지만 성장 가능해요.', tips: ['ENFP의 자유 존중', '유연해지기'] },
    ISTJ: { score: 4, title: '실행력 팀', description: '함께 목표를 달성하는 파트너예요.', tips: ['감정도 나누기', '서로 인정하기'] },
    ISFJ: { score: 4, title: '안정적 파트너', description: '함께 책임감 있게 관계를 이어가요.', tips: ['ISFJ의 노력 인정', '감정 표현하기'] },
    ESTJ: { score: 3, title: '같은 마음', description: '같은 가치를 공유해요.', tips: ['주도권 나누기', '감정도 나누기'] },
    ESFJ: { score: 4, title: '효율적 파트너', description: '함께 목표와 관계를 챙겨요.', tips: ['ESFJ 감정 존중', '감사 표현하기'] },
    ISTP: { score: 5, title: '완벽한 조화', description: '서로를 보완하는 효율적인 관계예요!', tips: ['ISTP의 공간 존중', '함께 활동하기'] },
    ISFP: { score: 2, title: '다른 가치관', description: '접근 방식이 다른 관계예요.', tips: ['ISFP 감성 존중', '강요하지 않기'] },
    ESTP: { score: 4, title: '행동파 콤비', description: '함께 효율적으로 일해요.', tips: ['장기 계획 세우기', '즐거움도 함께'] },
    ESFP: { score: 3, title: '일과 놀이', description: 'ESFP가 여유를 줘요.', tips: ['ESFP와 함께 즐기기', '유연해지기'] }
  },
  ESFJ: {
    INTJ: { score: 2, title: '도전적 관계', description: '가치관 차이가 있지만 성장의 기회예요.', tips: ['INTJ 방식 존중', '감정 표현 부탁하기'] },
    INTP: { score: 2, title: '다른 언어', description: '소통 방식이 달라 노력이 필요해요.', tips: ['INTP의 공간 존중', '감정 표현 부탁하기'] },
    ENTJ: { score: 3, title: '균형잡힌 관계', description: '서로를 보완할 수 있어요.', tips: ['자신의 필요 표현', 'ENTJ 인정하기'] },
    ENTP: { score: 2, title: '다른 가치관', description: '소통 노력이 필요한 관계예요.', tips: ['ENTP의 토론 이해', '자신의 감정 표현'] },
    INFJ: { score: 3, title: '돌봄의 관계', description: '서로를 챙기는 따뜻한 관계예요.', tips: ['깊은 대화 나누기', '함께 봉사하기'] },
    INFP: { score: 3, title: '돌봄과 이상', description: '서로를 돌보는 관계예요.', tips: ['INFP 내면 존중', '깊은 대화 나누기'] },
    ENFJ: { score: 4, title: '돌봄의 팀', description: '함께 주변을 돌보는 관계예요.', tips: ['자기 돌봄도 하기', '서로 인정하기'] },
    ENFP: { score: 4, title: '밝은 관계', description: '함께 사람들과 어울리는 즐거움이 있어요.', tips: ['깊은 대화도 나누기', '서로의 에너지 즐기기'] },
    ISTJ: { score: 5, title: '완벽한 조화', description: '서로를 보완하는 안정적인 관계예요!', tips: ['ISTJ 감정 표현 격려', '감사 표현하기'] },
    ISFJ: { score: 4, title: '돌봄의 팀', description: '서로와 주변을 돌보는 관계예요.', tips: ['자기 돌봄도 하기', '깊은 대화 나누기'] },
    ESTJ: { score: 4, title: '효율적 파트너', description: '함께 목표와 관계를 챙겨요.', tips: ['감정도 나누기', '서로 인정하기'] },
    ESFJ: { score: 3, title: '같은 마음', description: '서로를 잘 이해해요.', tips: ['자기 돌봄 하기', '깊은 대화 나누기'] },
    ISTP: { score: 5, title: '완벽한 보완', description: '서로에게 필요한 것을 줘요!', tips: ['ISTP의 공간 존중', '행동으로 사랑 표현'] },
    ISFP: { score: 4, title: '따뜻한 관계', description: '서로를 돌보는 관계예요.', tips: ['ISFP의 속도 존중', '함께 시간 보내기'] },
    ESTP: { score: 4, title: '활력과 따뜻함', description: '함께 즐겁고 따뜻한 관계예요.', tips: ['ESTP의 자유 존중', '감정 나누기'] },
    ESFP: { score: 4, title: '즐거운 관계', description: '함께 사람들과 어울리며 즐겨요.', tips: ['때로는 진지하게', '서로 돌보기'] }
  },
  ISTP: {
    INTJ: { score: 3, title: '논리적 파트너', description: '서로의 독립성을 존중하는 관계예요.', tips: ['감정 나누기 노력', '활동 함께하기'] },
    INTP: { score: 4, title: '분석적 파트너', description: '함께 문제를 분석하고 해결해요.', tips: ['감정도 나누기', '결정하기 연습'] },
    ENTJ: { score: 3, title: '분석과 실행', description: '함께 효율적으로 일해요.', tips: ['ENTJ의 계획 존중', '의견 표현하기'] },
    ENTP: { score: 3, title: '분석적 파트너', description: '함께 문제를 탐구해요.', tips: ['때로는 깊이도', '감정 나누기'] },
    INFJ: { score: 2, title: '다른 언어', description: '소통 방식이 다른 관계예요.', tips: ['감정 표현 노력', 'INFJ의 통찰 존중'] },
    INFP: { score: 2, title: '다른 언어', description: '소통에 노력이 필요해요.', tips: ['INFP 감정 존중', '작은 것부터 공유'] },
    ENFJ: { score: 2, title: '도전적 관계', description: '소통 방식이 다른 관계예요.', tips: ['감정 표현 노력하기', 'ENFJ의 열정 존중'] },
    ENFP: { score: 3, title: '자유로운 관계', description: '서로의 자유를 존중하는 관계예요.', tips: ['ENFP의 열정 즐기기', '감정 나누기'] },
    ISTJ: { score: 3, title: '실용적 파트너', description: '함께 실용적으로 문제를 해결해요.', tips: ['감정도 나누기', '각자 시간 존중'] },
    ISFJ: { score: 2, title: '다른 방식', description: '소통에 노력이 필요해요.', tips: ['ISFJ의 돌봄 감사하기', '감정 표현 노력'] },
    ESTJ: { score: 5, title: '완벽한 조화', description: '서로를 보완하는 효율적인 관계예요!', tips: ['ESTJ의 계획 존중', '의견 표현하기'] },
    ESFJ: { score: 5, title: '완벽한 보완', description: '서로에게 필요한 것을 줘요!', tips: ['ESFJ의 돌봄 감사하기', '감정 표현 노력'] },
    ISTP: { score: 3, title: '같은 마음', description: '서로를 잘 이해하는 관계예요.', tips: ['감정도 나누기', '함께 활동하기'] },
    ISFP: { score: 4, title: '자유로운 동반자', description: '서로의 공간을 존중하는 관계예요.', tips: ['감정 나누기 노력', '함께 시간 보내기'] },
    ESTP: { score: 4, title: '행동 파트너', description: '함께 활동하는 것을 즐겨요.', tips: ['감정도 나누기', '때로는 차분하게'] },
    ESFP: { score: 4, title: '활력 있는 관계', description: '함께 즐거운 시간을 보내요.', tips: ['ESFP의 에너지 즐기기', '감정 나누기'] }
  },
  ISFP: {
    INTJ: { score: 2, title: '성장의 관계', description: '다른 세계관이 새로운 시각을 줘요.', tips: ['INTJ 방식 이해하기', '자신의 감성 표현'] },
    INTP: { score: 2, title: '다른 세계관', description: '서로 다른 시각이 새로울 수 있어요.', tips: ['자신의 감정 표현', 'INTP의 논리 이해'] },
    ENTJ: { score: 2, title: '다른 가치관', description: '서로에게 새로운 시각을 줘요.', tips: ['ENTJ의 강함에 압도되지 않기', '자신 표현하기'] },
    ENTP: { score: 3, title: '감성과 논리', description: '서로 다른 시각을 나눠요.', tips: ['자신의 감성 표현', 'ENTP의 토론 이해'] },
    INFJ: { score: 3, title: '감성적 유대', description: '감성을 나누는 관계예요.', tips: ['깊은 대화 나누기', '현실도 함께 보기'] },
    INFP: { score: 4, title: '감성적 교감', description: '같은 감성을 공유하는 관계예요.', tips: ['현실도 함께 보기', '서로 응원하기'] },
    ENFJ: { score: 4, title: '따뜻한 교감', description: '감성을 나누는 관계예요.', tips: ['ENFJ의 리더십 지지', '자신의 속도 표현'] },
    ENFP: { score: 4, title: '감성적 교감', description: '함께 예술과 아름다움을 즐겨요.', tips: ['ENFP의 에너지 즐기기', '현재 순간 즐기기'] },
    ISTJ: { score: 3, title: '조용한 동반자', description: '서로의 공간을 존중하는 관계예요.', tips: ['감정 표현하기', '서로 이해 노력'] },
    ISFJ: { score: 4, title: '조용한 교감', description: '서로의 공간을 존중하며 돌봐요.', tips: ['감정 나누기', '감사 표현하기'] },
    ESTJ: { score: 2, title: '다른 가치관', description: '접근 방식이 다른 관계예요.', tips: ['ESTJ 방식 이해하기', '자신의 필요 표현'] },
    ESFJ: { score: 4, title: '따뜻한 관계', description: '서로를 돌보는 관계예요.', tips: ['ESFJ의 돌봄 감사하기', '자신의 속도 표현'] },
    ISTP: { score: 4, title: '자유로운 동반자', description: '서로의 공간을 존중하는 관계예요.', tips: ['감정 나누기 노력', '함께 활동하기'] },
    ISFP: { score: 3, title: '같은 영혼', description: '서로를 잘 이해하는 관계예요.', tips: ['때로는 결정하기', '현실도 함께 보기'] },
    ESTP: { score: 4, title: '자유로운 관계', description: '함께 현재를 즐기는 관계예요.', tips: ['ESTP의 활력 즐기기', '감정 나누기'] },
    ESFP: { score: 5, title: '천생연분', description: '함께 현재를 즐기는 완벽한 파트너!', tips: ['순간을 즐기기', '때로는 계획도 세우기'] }
  },
  ESTP: {
    INTJ: { score: 2, title: '도전적 만남', description: '다른 점이 많지만 자극이 되는 관계예요.', tips: ['INTJ의 계획 존중', '생각하는 시간 주기'] },
    INTP: { score: 3, title: '분석과 행동', description: '서로 다른 강점을 가져요.', tips: ['INTP의 생각 시간 존중', '함께 분석하기'] },
    ENTJ: { score: 4, title: '행동파 콤비', description: '함께 도전하고 성취해요.', tips: ['ENTJ의 계획 존중', '장기 목표도 세우기'] },
    ENTP: { score: 4, title: '모험 파트너', description: '함께 새로운 것을 시도해요.', tips: ['때로는 깊이 있게', '서로 자극하기'] },
    INFJ: { score: 2, title: '도전적 관계', description: '다른 세계관이 성장의 기회예요.', tips: ['INFJ의 감정 존중', '깊은 대화 노력'] },
    INFP: { score: 2, title: '정반대 매력', description: '다른 세계관이 자극이 될 수 있어요.', tips: ['INFP의 감정 존중', '부드럽게 표현하기'] },
    ENFJ: { score: 3, title: '활력과 깊이', description: '서로 다른 강점을 나눠요.', tips: ['ENFJ의 감정 존중', '관계에도 투자하기'] },
    ENFP: { score: 4, title: '모험 파트너', description: '함께 새로운 경험을 즐겨요.', tips: ['때로는 깊이 있게', '에너지 함께 즐기기'] },
    ISTJ: { score: 3, title: '행동 파트너', description: '함께 실제적인 일을 해나가요.', tips: ['ISTJ의 계획 존중', '책임감 보여주기'] },
    ISFJ: { score: 2, title: '다른 세계', description: '접근 방식이 다른 관계예요.', tips: ['ISFJ의 돌봄 감사하기', '안정감 주기 노력'] },
    ESTJ: { score: 4, title: '행동파 콤비', description: '함께 효율적으로 일해요.', tips: ['ESTJ의 계획 존중', '책임감 보여주기'] },
    ESFJ: { score: 4, title: '활력과 따뜻함', description: '함께 즐겁고 따뜻한 관계예요.', tips: ['ESFJ의 감정 존중', '관계에 투자하기'] },
    ISTP: { score: 4, title: '행동 파트너', description: '함께 활동하는 것을 즐겨요.', tips: ['때로는 대화도', '각자 시간 존중'] },
    ISFP: { score: 4, title: '자유로운 관계', description: '함께 현재를 즐기는 관계예요.', tips: ['ISFP의 감성 존중', '부드럽게 대하기'] },
    ESTP: { score: 3, title: '같은 에너지', description: '함께 활동하며 즐거워요.', tips: ['때로는 깊이 있게', '장기 계획 세우기'] },
    ESFP: { score: 4, title: '파티 메이트', description: '함께 즐거운 시간을 만들어요.', tips: ['때로는 진지하게', '서로 챙기기'] }
  },
  ESFP: {
    INTJ: { score: 2, title: '정반대 매력', description: '다름이 매력이 될 수도 있어요.', tips: ['INTJ의 조용함 존중', '계획에 협력하기'] },
    INTP: { score: 2, title: '정반대 매력', description: '다름이 자극이 될 수 있어요.', tips: ['INTP의 생각 시간 존중', '지적 대화도 해보기'] },
    ENTJ: { score: 3, title: '일과 놀이', description: '서로에게 균형을 줘요.', tips: ['ENTJ의 목표 지지', '여유도 선물하기'] },
    ENTP: { score: 3, title: '재미있는 관계', description: '함께 즐거운 시간을 보내요.', tips: ['때로는 깊이 있게', '아이디어 즐기기'] },
    INFJ: { score: 3, title: '밝음과 깊이', description: '서로에게 새로운 시각을 줘요.', tips: ['INFJ의 시간 존중', '깊은 대화 노력'] },
    INFP: { score: 3, title: '밝음과 깊이', description: '서로 다른 매력을 나눠요.', tips: ['INFP의 감성 존중', '깊은 대화 해보기'] },
    ENFJ: { score: 4, title: '즐거운 관계', description: '함께 즐겁고 의미 있는 시간을 보내요.', tips: ['ENFJ의 깊이 함께하기', '관계에 투자하기'] },
    ENFP: { score: 4, title: '파티 메이트', description: '함께 즐거운 시간을 만들어요.', tips: ['때로는 진지하게', '서로 응원하기'] },
    ISTJ: { score: 3, title: '안정과 재미', description: '서로에게 균형을 줘요.', tips: ['ISTJ의 계획 존중', '책임감 보여주기'] },
    ISFJ: { score: 4, title: '안정과 재미', description: '서로에게 필요한 것을 줘요.', tips: ['ISFJ의 돌봄 감사하기', '안정감 주기 노력'] },
    ESTJ: { score: 3, title: '일과 놀이', description: '서로에게 균형을 줘요.', tips: ['ESTJ의 체계 존중', '책임감 보여주기'] },
    ESFJ: { score: 4, title: '즐거운 관계', description: '함께 사람들과 어울리며 즐겨요.', tips: ['ESFJ의 돌봄 감사하기', '관계에 투자하기'] },
    ISTP: { score: 4, title: '활력 있는 관계', description: '함께 즐거운 시간을 보내요.', tips: ['ISTP의 공간 존중', '감정 나누기 노력'] },
    ISFP: { score: 5, title: '천생연분', description: '함께 현재를 즐기는 완벽한 파트너!', tips: ['순간을 즐기기', '때로는 계획도 세우기'] },
    ESTP: { score: 4, title: '파티 메이트', description: '함께 즐거운 시간을 만들어요.', tips: ['때로는 진지하게', '서로 챙기기'] },
    ESFP: { score: 3, title: '같은 에너지', description: '함께 즐거운 시간을 보내요.', tips: ['때로는 깊이 있게', '서로 돌보기'] }
  }
};

export function getCompatibility(type1: string, type2: string): Compatibility {
  return compatibilityData[type1]?.[type2] || {
    score: 3,
    title: '알 수 없는 궁합',
    description: '두 유형의 궁합 정보가 없습니다.',
    tips: ['서로를 알아가보세요']
  };
}

// 추천 궁합 (상위 3개 유형)
export function getBestMatches(type: string): { type: string; compatibility: Compatibility }[] {
  const matches = Object.entries(compatibilityData[type] || {})
    .map(([matchType, compatibility]) => ({ type: matchType, compatibility }))
    .sort((a, b) => b.compatibility.score - a.compatibility.score)
    .slice(0, 3);

  return matches;
}

// 모든 궁합 정보 (정렬된 목록)
export function getAllCompatibilities(type: string): { type: string; compatibility: Compatibility }[] {
  return Object.entries(compatibilityData[type] || {})
    .map(([matchType, compatibility]) => ({ type: matchType, compatibility }))
    .sort((a, b) => b.compatibility.score - a.compatibility.score);
}
