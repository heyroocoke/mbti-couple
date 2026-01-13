import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

export function useSEO({ title, description }: SEOProps) {
  useEffect(() => {
    // 타이틀 설정
    document.title = `${title} | MBTI 궁합 테스트`;

    // 메타 설명 업데이트
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const twitterDescription = document.querySelector('meta[name="twitter:description"]');

      if (metaDescription) metaDescription.setAttribute('content', description);
      if (ogDescription) ogDescription.setAttribute('content', description);
      if (twitterDescription) twitterDescription.setAttribute('content', description);
    }

    // OG 타이틀 업데이트
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');

    if (ogTitle) ogTitle.setAttribute('content', `${title} | MBTI 궁합 테스트`);
    if (twitterTitle) twitterTitle.setAttribute('content', `${title} | MBTI 궁합 테스트`);
  }, [title, description]);
}
