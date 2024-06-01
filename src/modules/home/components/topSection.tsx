import clsx from 'clsx';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

import { Container, Section, Thumbnail } from '@/components';
import { Element } from '@/components/custom';
import { SECTION_TAG } from '@/layout/guest/menuData';
import styles from '@/styles/pages/home/index.module.scss';

export const TopSection = () => {
  const { t } = useTranslation('home');

  return (
    <div id={SECTION_TAG.TOP}>
      <Section className="rounded-tl-xl rounded-tr-xl rounded-br-xl overflow-hidden md:rounded-bl-xl">
        <div className={styles['home-page']}>
          <div className={styles['home-page__thumbnail']}>
            <div className={styles['home-page__thumbnail__box']}>
              <div className={styles['home-page__thumbnail__box__thumbnail']}>
                <Thumbnail src="/images/pages/home/thumbnail-info.jpg" width={306} height={305} className="md:!w-full" />
                <div className={clsx(styles['home-page__thumbnail__box__thumbnail__icon'], 'top-20 -left-4 rotate-12')}>
                  <Thumbnail src="/icons/icon1.png" width={27} height={27} />
                </div>
                <div className={clsx(styles['home-page__thumbnail__box__thumbnail__icon'], 'top-20 -right-4 rotate-12')}>
                  <Thumbnail src="/icons/icon2.png" width={27} height={27} />
                </div>
                <div className={clsx(styles['home-page__thumbnail__box__thumbnail__icon'], 'bottom-20 left-1/2 rotate-12')}>
                  <Thumbnail src="/icons/icon4.png" width={27} height={27} />
                </div>
              </div>
              <div className={styles['home-page__thumbnail__box__content']}>
                <Element.Typography size="body2">{t('topSection.info.name')}</Element.Typography>
                <Element.Typography size="note" className="caption-1">
                  {t('topSection.info.position')}
                </Element.Typography>
              </div>
            </div>
          </div>
          <div className={styles['home-page__info']}>
            <div className={styles['home-page__info__about']}>
              <Trans
                i18nKey="home:topSection.info.about"
                components={[<Element.Typography size="big" key="1" />, <span key="2" className="text-green-1" />, <span key="3" />, <br key="3" />]}
              />
            </div>
            <div className={styles['home-page__info__status']}>
              <div className={styles['home-page__info__status__content']}>
                <div className={styles['home-page__info__status__text']}>{t('topSection.info.status.numberOfExpired')}</div>
                <div className={styles['home-page__info__status__sub-text']}>{t('topSection.info.status.yearOfExpired')}</div>
              </div>
              <div className={styles['home-page__info__status__content']}>
                <div className={styles['home-page__info__status__text']}>{t('topSection.info.status.numberProject')}</div>
                <div className={styles['home-page__info__status__sub-text']}>{t('topSection.info.status.project')}</div>
              </div>
              <div className={styles['home-page__info__status__content']}>
                <Element.Button type="outlined" size="md" className="px-8">
                  {t('topSection.btnDownloadCv')}
                </Element.Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Container className="md:hidden">
        <div className={styles['home-page__bar']}>
          <div />
          <div />
        </div>
      </Container>
    </div>
  );
};
