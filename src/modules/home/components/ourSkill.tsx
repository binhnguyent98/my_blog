import clsx from 'clsx';
import useTranslation from 'next-translate/useTranslation';
import { useMemo } from 'react';

import { Section, Thumbnail } from '@/components';
import { Element } from '@/components/custom';
import styles from '@/styles/pages/home/section-our-skill.module.scss';

type SkillItemType = {
  icon: string;
  label: string;
  percent: number;
};

type RewardItemType = {
  year: string;
  pathImage: string;
  label: string;
};

export const OurSkill = () => {
  const { t } = useTranslation('home');

  const skills = useMemo(
    (): SkillItemType[] => [
      {
        label: t('ourSkill.skill.uxUi'),
        icon: '/images/pages/home/our-skill/s1.png',
        percent: 80,
      },
      {
        label: t('ourSkill.skill.code'),
        icon: '/images/pages/home/our-skill/s2.png',
        percent: 82,
      },
      {
        label: t('ourSkill.skill.graphic'),
        icon: '/images/pages/home/our-skill/s3.png',
        percent: 80,
      },
      {
        label: t('ourSkill.skill.wp'),
        icon: '/images/pages/home/our-skill/s4.png',
        percent: 82,
      },
    ],
    []
  );

  const awards = useMemo(
    (): RewardItemType[] => [
      {
        label: '02x Designer Award',
        pathImage: '/images/pages/home/our-skill/award1.png',
        year: '2024',
      },
      {
        label: '02x Designer Award',
        pathImage: '/images/pages/home/our-skill/award2.png',
        year: '2024',
      },
      {
        label: '02x Designer Award',
        pathImage: '/images/pages/home/our-skill/award2.png',
        year: '2024',
      },
    ],
    []
  );

  const renderPercent = (percent: number) => {
    return <div className={clsx(styles['section-our-skill__content__skill__list__item__bottom-bar'], `before:w-[${percent}%]`)} />;
  };

  return (
    <Section className={styles['section-our-skill']}>
      <div className={styles['section-our-skill__content']}>
        <div className={styles['section-our-skill__content__skill']}>
          <div className={styles['section-our-skill__content__skill__heading']}>
            <Element.Typography fontWeight="bold" className="uppercase">
              {t('ourSkill.title')}
            </Element.Typography>
            <Element.Typography size="note" className="mt-4">
              {t('ourSkill.title')}
            </Element.Typography>
          </div>
          <div className={styles['section-our-skill__content__skill__list']}>
            {skills?.map((item, index) => (
              <div key={index} className={styles['section-our-skill__content__skill__list__item']}>
                <Thumbnail src={item.icon} width={40} height={40} />
                <Element.Typography fontWeight="semibold" size="large-body">
                  {item.label}
                </Element.Typography>
                <Element.Typography size="small" fontWeight="bold" className={styles['section-our-skill__content__skill__list__item__percent']}>
                  {item.percent + '%'}
                </Element.Typography>
                {renderPercent(item.percent)}
              </div>
            ))}
          </div>
        </div>
        <div className={styles['section-our-skill__content__award']}>
          {awards?.map((item, index) => (
            <div key={index} className={styles['section-our-skill__content__award__item']}>
              <Element.Typography fontWeight="semibold" size="note" className="text-right">
                {item.year}
              </Element.Typography>
              <Thumbnail src={item.pathImage} width={100} height={55} className="mt-4" />
              <Element.Typography fontWeight="semibold" size="body" className="mt-4">
                {item.label}
              </Element.Typography>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
