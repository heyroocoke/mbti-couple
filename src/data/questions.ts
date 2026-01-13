export interface Question {
  id: number;
  text: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  direction: 1 | -1; // 1: first letter, -1: second letter
}

export const questions: Question[] = [
  // E/I 차원 (5문항)
  {
    id: 1,
    text: "파티나 모임에 가면 에너지가 충전되는 편이다",
    dimension: 'EI',
    direction: 1
  },
  {
    id: 2,
    text: "새로운 사람을 만나는 것보다 친한 친구와 깊은 대화를 나누는 게 좋다",
    dimension: 'EI',
    direction: -1
  },
  {
    id: 3,
    text: "생각을 말로 표현하면서 정리하는 편이다",
    dimension: 'EI',
    direction: 1
  },
  {
    id: 4,
    text: "혼자만의 시간이 없으면 지치고 힘들다",
    dimension: 'EI',
    direction: -1
  },
  {
    id: 5,
    text: "모르는 사람에게 먼저 말을 거는 것이 어렵지 않다",
    dimension: 'EI',
    direction: 1
  },

  // S/N 차원 (5문항)
  {
    id: 6,
    text: "현실적이고 실용적인 것을 중요하게 생각한다",
    dimension: 'SN',
    direction: 1
  },
  {
    id: 7,
    text: "상상력이 풍부하고 가능성에 대해 생각하는 것을 좋아한다",
    dimension: 'SN',
    direction: -1
  },
  {
    id: 8,
    text: "세부사항에 주의를 기울이고 정확성을 중시한다",
    dimension: 'SN',
    direction: 1
  },
  {
    id: 9,
    text: "패턴이나 의미를 찾고 전체적인 그림을 보려고 한다",
    dimension: 'SN',
    direction: -1
  },
  {
    id: 10,
    text: "경험해보지 않은 새로운 방식보다 검증된 방법을 선호한다",
    dimension: 'SN',
    direction: 1
  },

  // T/F 차원 (5문항)
  {
    id: 11,
    text: "결정을 내릴 때 논리와 객관적 사실을 우선시한다",
    dimension: 'TF',
    direction: 1
  },
  {
    id: 12,
    text: "다른 사람의 감정과 상황을 먼저 고려하는 편이다",
    dimension: 'TF',
    direction: -1
  },
  {
    id: 13,
    text: "비판을 받으면 감정적으로 받아들이기보다 개선점으로 생각한다",
    dimension: 'TF',
    direction: 1
  },
  {
    id: 14,
    text: "갈등 상황에서 조화와 화합을 중요하게 생각한다",
    dimension: 'TF',
    direction: -1
  },
  {
    id: 15,
    text: "공정함과 정의가 친절함보다 더 중요하다고 생각한다",
    dimension: 'TF',
    direction: 1
  },

  // J/P 차원 (5문항)
  {
    id: 16,
    text: "계획을 세우고 그대로 실행하는 것을 좋아한다",
    dimension: 'JP',
    direction: 1
  },
  {
    id: 17,
    text: "상황에 따라 유연하게 대처하는 것을 선호한다",
    dimension: 'JP',
    direction: -1
  },
  {
    id: 18,
    text: "일을 미리미리 끝내두는 편이다",
    dimension: 'JP',
    direction: 1
  },
  {
    id: 19,
    text: "마감 직전에 더 집중이 잘 되고 아이디어가 떠오른다",
    dimension: 'JP',
    direction: -1
  },
  {
    id: 20,
    text: "규칙적이고 정돈된 환경에서 편안함을 느낀다",
    dimension: 'JP',
    direction: 1
  }
];
