export interface MBTIType {
  type: string;
  title: string;
  emoji: string;
  color: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  loveStyle: string;
}

export const mbtiTypes: Record<string, MBTIType> = {
  INTJ: {
    type: 'INTJ',
    title: '전략가',
    emoji: '🧠',
    color: '#9B59B6',
    description: '독립적이고 분석적인 전략가. 높은 기준과 명확한 비전을 가지고 있으며, 효율성을 중시합니다.',
    strengths: ['전략적 사고', '독립심', '결단력', '지적 능력'],
    weaknesses: ['감정 표현 부족', '완벽주의', '융통성 부족'],
    loveStyle: '깊고 의미 있는 관계를 원하며, 파트너의 지적인 면에 끌립니다. 표현은 서툴지만 행동으로 사랑을 보여줍니다.'
  },
  INTP: {
    type: 'INTP',
    title: '논리술사',
    emoji: '🔬',
    color: '#3498DB',
    description: '호기심 많은 사색가. 논리와 이론에 관심이 많고, 복잡한 문제를 분석하는 것을 즐깁니다.',
    strengths: ['논리적 사고', '창의성', '객관성', '독창성'],
    weaknesses: ['현실 감각 부족', '감정 표현 어려움', '결정 장애'],
    loveStyle: '지적인 교감을 중요시하며, 같이 토론하고 아이디어를 나눌 수 있는 파트너를 원합니다.'
  },
  ENTJ: {
    type: 'ENTJ',
    title: '통솔자',
    emoji: '👔',
    color: '#8E44AD',
    description: '타고난 리더. 자신감 있고 결단력이 있으며, 목표를 향해 효율적으로 나아갑니다.',
    strengths: ['리더십', '자신감', '효율성', '결단력'],
    weaknesses: ['독선적', '감정 무시', '참을성 부족'],
    loveStyle: '파트너와 함께 성장하고 목표를 이루는 것을 중요시합니다. 직접적으로 애정을 표현합니다.'
  },
  ENTP: {
    type: 'ENTP',
    title: '변론가',
    emoji: '💡',
    color: '#E74C3C',
    description: '창의적인 아이디어 뱅크. 새로운 가능성을 탐구하고 토론하는 것을 즐깁니다.',
    strengths: ['창의성', '적응력', '지적 호기심', '유머감각'],
    weaknesses: ['집중력 부족', '논쟁적', '마무리 부족'],
    loveStyle: '재미있고 자극적인 관계를 원합니다. 지적인 대화와 새로운 경험을 함께 나누고 싶어합니다.'
  },
  INFJ: {
    type: 'INFJ',
    title: '옹호자',
    emoji: '🌟',
    color: '#1ABC9C',
    description: '이상주의적인 조력자. 깊은 통찰력으로 다른 사람을 이해하고 도우려 합니다.',
    strengths: ['통찰력', '이상주의', '헌신적', '창의성'],
    weaknesses: ['완벽주의', '과민함', '현실 도피'],
    loveStyle: '영혼의 동반자를 찾습니다. 깊고 의미 있는 정서적 연결을 중요시합니다.'
  },
  INFP: {
    type: 'INFP',
    title: '중재자',
    emoji: '🦋',
    color: '#2ECC71',
    description: '감성적인 이상주의자. 자신만의 가치관을 가지고 진정성 있는 삶을 추구합니다.',
    strengths: ['이상주의', '공감 능력', '창의성', '열정'],
    weaknesses: ['비현실적', '자기비판', '감정 기복'],
    loveStyle: '진정한 사랑을 꿈꿉니다. 상대방의 내면을 이해하고 깊은 감정적 유대를 원합니다.'
  },
  ENFJ: {
    type: 'ENFJ',
    title: '선도자',
    emoji: '🌈',
    color: '#F39C12',
    description: '카리스마 있는 리더. 다른 사람의 잠재력을 발견하고 이끌어주는 것을 좋아합니다.',
    strengths: ['리더십', '공감 능력', '소통 능력', '헌신'],
    weaknesses: ['과한 이타심', '비판에 민감', '자기희생'],
    loveStyle: '헌신적이고 로맨틱합니다. 파트너의 성장을 돕고 깊은 감정적 연결을 추구합니다.'
  },
  ENFP: {
    type: 'ENFP',
    title: '활동가',
    emoji: '🎨',
    color: '#E91E63',
    description: '열정적인 자유 영혼. 가능성을 보고 사람들에게 영감을 주는 것을 좋아합니다.',
    strengths: ['열정', '창의성', '사교성', '낙관주의'],
    weaknesses: ['집중력 부족', '과민함', '실용성 부족'],
    loveStyle: '진정성 있고 열정적인 사랑을 합니다. 함께 새로운 경험을 나누며 성장하기를 원합니다.'
  },
  ISTJ: {
    type: 'ISTJ',
    title: '현실주의자',
    emoji: '📋',
    color: '#34495E',
    description: '신뢰할 수 있는 책임자. 체계적이고 철저하며, 맡은 일을 끝까지 해냅니다.',
    strengths: ['책임감', '신뢰성', '꼼꼼함', '인내심'],
    weaknesses: ['융통성 부족', '변화 거부', '감정 표현 부족'],
    loveStyle: '진지하고 헌신적입니다. 말보다 행동으로 사랑을 표현하며 안정적인 관계를 추구합니다.'
  },
  ISFJ: {
    type: 'ISFJ',
    title: '수호자',
    emoji: '🛡️',
    color: '#27AE60',
    description: '따뜻한 수호자. 헌신적으로 가까운 사람들을 보살피고 지켜줍니다.',
    strengths: ['헌신', '신뢰성', '배려심', '인내심'],
    weaknesses: ['자기희생', '변화 거부', '거절 어려움'],
    loveStyle: '조용하지만 깊은 사랑을 합니다. 세심하게 챙기고 안정적인 가정을 꾸리고 싶어합니다.'
  },
  ESTJ: {
    type: 'ESTJ',
    title: '경영자',
    emoji: '📊',
    color: '#2C3E50',
    description: '조직적인 관리자. 질서와 체계를 중시하며, 효율적으로 일을 처리합니다.',
    strengths: ['조직력', '리더십', '결단력', '신뢰성'],
    weaknesses: ['융통성 부족', '독선적', '감정 무시'],
    loveStyle: '책임감 있고 헌신적입니다. 전통적인 가치를 중시하며 안정적인 관계를 원합니다.'
  },
  ESFJ: {
    type: 'ESFJ',
    title: '집정관',
    emoji: '🤗',
    color: '#FF6B6B',
    description: '사교적인 돌봄이. 다른 사람들의 필요를 파악하고 도우는 것을 좋아합니다.',
    strengths: ['친절함', '사교성', '협동심', '책임감'],
    weaknesses: ['인정 욕구', '비판에 민감', '자기희생'],
    loveStyle: '따뜻하고 헌신적입니다. 파트너를 세심하게 챙기며 화목한 관계를 추구합니다.'
  },
  ISTP: {
    type: 'ISTP',
    title: '장인',
    emoji: '🔧',
    color: '#7F8C8D',
    description: '실용적인 해결사. 논리적이고 현실적이며, 손으로 직접 문제를 해결합니다.',
    strengths: ['분석력', '실용성', '적응력', '침착함'],
    weaknesses: ['감정 표현 부족', '약속 부담', '무관심'],
    loveStyle: '자유롭고 독립적인 관계를 원합니다. 말보다 행동으로 사랑을 표현합니다.'
  },
  ISFP: {
    type: 'ISFP',
    title: '모험가',
    emoji: '🎭',
    color: '#16A085',
    description: '온화한 예술가. 현재를 즐기며 자신만의 방식으로 세상을 경험합니다.',
    strengths: ['감수성', '친절함', '유연성', '현재 집중'],
    weaknesses: ['계획성 부족', '자기표현 어려움', '갈등 회피'],
    loveStyle: '조용하지만 깊은 사랑을 합니다. 함께하는 순간순간을 소중히 여깁니다.'
  },
  ESTP: {
    type: 'ESTP',
    title: '사업가',
    emoji: '🏃',
    color: '#D35400',
    description: '활동적인 해결사. 현실적이고 행동력이 있으며, 즉흥적인 상황을 즐깁니다.',
    strengths: ['행동력', '현실감각', '적응력', '관찰력'],
    weaknesses: ['충동적', '장기계획 부족', '규칙 무시'],
    loveStyle: '재미있고 활기찬 관계를 원합니다. 함께 새로운 것을 경험하는 것을 좋아합니다.'
  },
  ESFP: {
    type: 'ESFP',
    title: '연예인',
    emoji: '🎉',
    color: '#FF9F43',
    description: '즉흥적인 엔터테이너. 사람들과 어울리며 현재의 즐거움을 만끽합니다.',
    strengths: ['사교성', '낙관주의', '실용성', '유연성'],
    weaknesses: ['계획성 부족', '집중력 부족', '장기 목표 어려움'],
    loveStyle: '즐겁고 애정표현이 풍부합니다. 함께 재미있는 경험을 나누며 사랑합니다.'
  }
};
