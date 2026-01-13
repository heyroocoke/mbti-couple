import { useSEO } from '../hooks/useSEO';
import styles from './PrivacyPolicyPage.module.css';

export default function TermsPage() {
  useSEO({
    title: '이용약관 - MBTI 궁합 테스트',
    description: 'MBTI 궁합 테스트 이용약관'
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>이용약관</h1>
        <p className={styles.date}>시행일: 2026년 1월 13일</p>

        <section className={styles.section}>
          <h2>제1조 (목적)</h2>
          <p>
            본 약관은 MBTI 궁합 테스트(이하 "서비스")가 제공하는 모든 서비스의 이용조건 및 절차,
            이용자와 서비스의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>제2조 (서비스의 내용)</h2>
          <p>본 서비스는 다음과 같은 기능을 제공합니다.</p>
          <ul>
            <li>MBTI 성격 유형 검사 (20문항)</li>
            <li>MBTI 유형별 상세 설명</li>
            <li>MBTI 유형 간 궁합 정보</li>
            <li>테스트 결과 공유 기능</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>제3조 (서비스 이용)</h2>
          <p>
            본 서비스는 회원가입 없이 누구나 무료로 이용할 수 있습니다.
            서비스 이용 시 별도의 회원가입이나 로그인이 필요하지 않습니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>제4조 (서비스 이용 제한)</h2>
          <p>다음의 경우 서비스 이용이 제한될 수 있습니다.</p>
          <ul>
            <li>서비스의 정상적인 운영을 방해하는 행위</li>
            <li>다른 이용자의 서비스 이용을 방해하는 행위</li>
            <li>서비스를 이용하여 불법적인 행위를 하는 경우</li>
            <li>기타 관련 법령에 위반되는 행위</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>제5조 (면책조항)</h2>
          <p>
            본 서비스에서 제공하는 MBTI 검사 결과 및 궁합 정보는 참고용으로만 활용되어야 하며,
            전문적인 심리 상담이나 진단을 대체할 수 없습니다.
          </p>
          <p>
            서비스에서 제공하는 정보의 정확성, 완전성, 유용성에 대해 보증하지 않으며,
            이용자는 본인의 판단과 책임 하에 서비스를 이용해야 합니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>제6조 (지적재산권)</h2>
          <p>
            서비스에 포함된 모든 콘텐츠(텍스트, 이미지, 디자인 등)에 대한 저작권 및
            지적재산권은 서비스 운영자에게 있습니다.
          </p>
          <p>
            이용자는 서비스를 이용하여 얻은 정보를 개인적인 용도로만 사용할 수 있으며,
            상업적 목적으로 무단 복제, 배포, 전송하는 것은 금지됩니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>제7조 (광고 게재)</h2>
          <p>
            본 서비스는 운영을 위해 서비스 내에 광고를 게재할 수 있습니다.
            이용자는 서비스 이용 시 노출되는 광고 게재에 대해 동의합니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>제8조 (서비스 변경 및 중단)</h2>
          <p>
            서비스 운영자는 필요한 경우 서비스의 내용을 변경하거나 중단할 수 있습니다.
            중요한 변경사항이 있는 경우 사전에 공지합니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>제9조 (약관의 변경)</h2>
          <p>
            본 약관은 필요한 경우 변경될 수 있으며, 변경된 약관은 서비스 내 공지를 통해 효력이 발생합니다.
            변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단할 수 있습니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>제10조 (문의)</h2>
          <p>서비스 이용에 관한 문의사항은 아래 연락처로 문의해 주시기 바랍니다.</p>
          <ul>
            <li>이메일: contact@mbticouple.com</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
