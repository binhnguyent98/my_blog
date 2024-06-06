import useTranslation from 'next-translate/useTranslation';
import { useMemo } from 'react';

import { Container, Section, Thumbnail } from '@/components';
import { Element } from '@/components/custom';
import { useScrollSection } from '@/hooks/useScrollSection';
import { getMenuData, SECTION_TAG } from '@/layout/guest/menuData';
import styles from '@/styles/pages/home/section-our-service.module.scss';

type MenuProp = {
  label: React.ReactNode;
  sectionTag: SECTION_TAG;
};

export const OurService = () => {
  const { t } = useTranslation('home');
  const { onScrollToSection } = useScrollSection<SECTION_TAG>({
    listTagId: [SECTION_TAG.HOME, SECTION_TAG.SKILL, SECTION_TAG.BLOG, SECTION_TAG.SELLING, SECTION_TAG.CONTACT],
  });
  const menu = useMemo((): MenuProp[] => getMenuData(t), []);

  const services = useMemo(
    () => [
      {
        title: t('outService.content.services.solution'),
        preview: t('outService.content.services.solutionPreviewIdeal'),
        icon: '/images/pages/home/our-service/1.png',
      },
      {
        title: t('outService.content.services.uxUi'),
        preview: t('outService.content.services.uxUiPreview'),
        icon: '/images/pages/home/our-service/3.png',
      },
      {
        title: t('outService.content.services.webDesign'),
        preview: t('outService.content.services.webDesignPreview'),
        icon: '/images/pages/home/our-service/2.png',
      },
      {
        title: t('outService.content.services.seoForSocial'),
        preview: t('outService.content.services.seoForSocialPreview'),
        icon: '/images/pages/home/our-service/4.png',
      },
    ],
    []
  );

  return (
    <div id={SECTION_TAG.HOME} className="-mt-2 md:mt-10">
      <Container>
        <div className={styles['section-our-service__bar']}>
          <div />
          <div className={styles['section-our-service']}>
            <ul className={styles['section-our-service__list']}>
              {menu?.map((item, index) => (
                <li key={index} onClick={() => onScrollToSection(item.sectionTag)}>
                  <Element.Typography size="body">{item.label}</Element.Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <Section className={styles['section-our-service__content']}>
        <div className={styles['section-our-service__content__inner']}>
          <Element.Typography fontWeight="bold" className={styles['section-our-service__content__title']}>
            {t('outService.content.title')}
          </Element.Typography>
          <Element.Typography size="note" fontWeight="semibold" className={styles['section-our-service__content__sub-title']}>
            {t('outService.content.subTitle')}
          </Element.Typography>
          <div className={styles['section-our-service__content__box']}>
            {services?.map((item, index) => (
              <div key={index} className={styles['section-our-service__content__box__item']}>
                <Thumbnail src={item.icon} width={70} height={70} className="sm:mx-auto" />
                <div className={styles['section-our-service__content__box__item__title']}>{item.title}</div>
                <div className={styles['section-our-service__content__box__item__preview']}>{item.preview}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
