const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// OG 이미지 크기 (1200x630 권장)
const width = 1200;
const height = 630;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// 배경 그라데이션
const gradient = ctx.createLinearGradient(0, 0, width, height);
gradient.addColorStop(0, '#FFE5EC');
gradient.addColorStop(0.5, '#E5E5FF');
gradient.addColorStop(1, '#E5FFFA');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, width, height);

// 장식 원들
ctx.globalAlpha = 0.3;

// 핑크 원
ctx.beginPath();
ctx.arc(150, 100, 150, 0, Math.PI * 2);
ctx.fillStyle = '#FFB6C1';
ctx.fill();

// 퍼플 원
ctx.beginPath();
ctx.arc(1100, 500, 120, 0, Math.PI * 2);
ctx.fillStyle = '#DDA0DD';
ctx.fill();

// 블루 원
ctx.beginPath();
ctx.arc(1000, 150, 80, 0, Math.PI * 2);
ctx.fillStyle = '#87CEEB';
ctx.fill();

// 민트 원
ctx.beginPath();
ctx.arc(200, 500, 100, 0, Math.PI * 2);
ctx.fillStyle = '#98FB98';
ctx.fill();

ctx.globalAlpha = 1;

// 하트 이모지들
ctx.font = '60px Arial';
ctx.fillText('💕', 100, 200);
ctx.fillText('✨', 1050, 180);
ctx.fillText('💫', 150, 480);
ctx.fillText('🌸', 1000, 520);
ctx.fillText('💖', 550, 120);
ctx.fillText('💑', 650, 550);

// 메인 타이틀
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// MBTI 텍스트 (그라데이션 효과)
ctx.font = 'bold 120px Arial, sans-serif';
const mbtiGradient = ctx.createLinearGradient(400, 250, 800, 250);
mbtiGradient.addColorStop(0, '#FF6B9D');
mbtiGradient.addColorStop(1, '#9B6BFF');
ctx.fillStyle = mbtiGradient;
ctx.fillText('MBTI', width / 2, 250);

// 궁합 테스트 텍스트
ctx.font = 'bold 80px Arial, sans-serif';
ctx.fillStyle = '#2D3436';
ctx.fillText('궁합 테스트', width / 2, 360);

// 서브타이틀
ctx.font = '36px Arial, sans-serif';
ctx.fillStyle = '#636E72';
ctx.fillText('나의 MBTI를 알아보고 연인과의 궁합을 확인하세요!', width / 2, 460);

// 하단 태그들
const tags = ['20문항 검사', '커플 궁합', '연애 팁'];
const tagWidth = 160;
const tagHeight = 50;
const tagGap = 30;
const startX = (width - (tags.length * tagWidth + (tags.length - 1) * tagGap)) / 2;

tags.forEach((tag, index) => {
  const x = startX + index * (tagWidth + tagGap);
  const y = 530;

  // 태그 배경
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.beginPath();
  ctx.roundRect(x, y, tagWidth, tagHeight, 25);
  ctx.fill();

  // 태그 그림자
  ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 4;

  // 태그 텍스트
  ctx.shadowColor = 'transparent';
  ctx.fillStyle = '#636E72';
  ctx.font = '24px Arial, sans-serif';
  ctx.fillText(tag, x + tagWidth / 2, y + tagHeight / 2 + 2);
});

// PNG로 저장
const buffer = canvas.toBuffer('image/png');
const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');
fs.writeFileSync(outputPath, buffer);

console.log(`✅ OG 이미지가 생성되었습니다: ${outputPath}`);
