import { useSEO } from '../hooks/useSEO';
import styles from './PrivacyPolicyPage.module.css';

export default function PrivacyPolicyPage() {
  useSEO({
    title: '개인정보처리방침 - MBTI 궁합 테스트',
    description: 'MBTI 궁합 테스트 개인정보처리방침'
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>개인정보처리방침</h1>
        <p className={styles.date}>시행일: 2026년 1월 13일</p>

        <section className={styles.section}>
          <h2>1. 개인정보의 처리 목적</h2>
          <p>
            MBTI 궁합 테스트(이하 "서비스")는 다음의 목적을 위하여 개인정보를 처리합니다.
            처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
            이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </p>
          <ul>
            <li>서비스 제공: MBTI 성격 유형 검사 및 궁합 결과 제공</li>
            <li>서비스 개선: 이용 통계 분석 및 서비스 품질 향상</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. 수집하는 개인정보 항목</h2>
          <p>
            본 서비스는 회원가입 없이 이용 가능하며, 별도의 개인정보를 직접 수집하지 않습니다.
            다만, 서비스 이용 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.
          </p>
          <ul>
            <li>접속 기기 정보 (브라우저 종류, 운영체제)</li>
            <li>접속 일시 및 서비스 이용 기록</li>
            <li>쿠키 정보</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. 개인정보의 보유 및 이용 기간</h2>
          <p>
            본 서비스는 회원가입 기능이 없으며, 테스트 결과는 사용자의 브라우저에만 저장됩니다.
            서버에 개인정보를 별도로 저장하지 않습니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. 쿠키(Cookie)의 사용</h2>
          <p>
            본 서비스는 사용자 경험 개선 및 광고 서비스 제공을 위해 쿠키를 사용합니다.
          </p>
          <h3>쿠키란?</h3>
          <p>
            쿠키는 웹사이트가 사용자의 브라우저에 저장하는 작은 텍스트 파일입니다.
          </p>
          <h3>쿠키 사용 목적</h3>
          <ul>
            <li>서비스 이용 분석 (Google Analytics)</li>
            <li>맞춤형 광고 제공 (Google AdSense)</li>
          </ul>
          <h3>쿠키 거부 방법</h3>
          <p>
            사용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.
            다만, 쿠키를 거부할 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. 광고 서비스</h2>
          <p>
            본 서비스는 Google AdSense를 통해 광고를 게재합니다.
            Google은 사용자의 관심사에 기반한 광고를 제공하기 위해 쿠키를 사용할 수 있습니다.
          </p>
          <p>
            Google의 광고 및 개인정보 처리에 대한 자세한 내용은{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google 개인정보처리방침
            </a>
            을 참조하시기 바랍니다.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. 개인정보 보호책임자</h2>
          <p>
            개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
            정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <ul>
            <li>책임자: Jang Eun Su</li>
            <li>이메일: contact@mbticouple.com</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. 개인정보처리방침의 변경</h2>
          <p>
            이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의
            추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
          </p>
        </section>
      </div>
    </div>
  );
}
