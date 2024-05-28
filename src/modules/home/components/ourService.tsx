import useTranslation from 'next-translate/useTranslation';
import { useMemo } from 'react';

import { Container, Section, Thumbnail } from '@/components';
import { Element } from '@/components/custom';
import styles from '@/styles/pages/home/section-our-service.module.scss';

type MenuProp = {
  label: React.ReactNode;
  sectionTag: string;
};

export const OurService = () => {
  const { t } = useTranslation('home');
  const menu = useMemo(
    (): MenuProp[] => [
      {
        label: t('outService.menu.home'),
        sectionTag: 'home',
      },
      {
        label: t('outService.menu.service'),
        sectionTag: 'service',
      },
      {
        label: t('outService.menu.about'),
        sectionTag: 'about',
      },
      {
        label: t('outService.menu.contact'),
        sectionTag: 'contact',
      },
      {
        label: t('outService.menu.blog'),
        sectionTag: 'blog',
      },
    ],
    []
  );

  const services = useMemo(
    () => [
      {
        title: t('outService.content.services.webDesign'),
        preview: t('outService.content.services.webDesignPreview'),
        icon: '/images/pages/home/our-service/1.png',
      },
      {
        title: t('outService.content.services.webDesign'),
        preview: t('outService.content.services.webDesignPreview'),
        icon: '/images/pages/home/our-service/2.png',
      },
      {
        title: t('outService.content.services.uxUi'),
        preview: t('outService.content.services.uxUiPreview'),
        icon: '/images/pages/home/our-service/3.png',
      },
      {
        title: t('outService.content.services.webDesign'),
        preview: t('outService.content.services.webDesignPreview'),
        icon: '/images/pages/home/our-service/4.png',
      },
    ],
    []
  );

  return (
    <div className="-mt-2 md:mt-10">
      <Container>
        <div className={styles['section-our-service__bar']}>
          <div />
          <div className={styles['section-our-service']}>
            <ul className={styles['section-our-service__list']}>
              {menu?.map((item, index) => (
                <li key={index}>
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
            {t('outService.content.title')}
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
