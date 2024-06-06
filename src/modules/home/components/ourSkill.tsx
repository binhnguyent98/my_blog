import useTranslation from 'next-translate/useTranslation';
import { useMemo } from 'react';

import { Section, Thumbnail } from '@/components';
import { Element } from '@/components/custom';
import { SECTION_TAG } from '@/layout/guest/menuData';
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
        label: t('ourSkill.skill.html'),
        icon: '/images/pages/home/our-skill/html.png',
        percent: 80,
      },
      {
        label: t('ourSkill.skill.php'),
        icon: '/images/pages/home/our-skill/php.png',
        percent: 82,
      },
      {
        label: t('ourSkill.skill.react'),
        icon: '/images/pages/home/our-skill/react.png',
        percent: 80,
      },
      {
        label: t('ourSkill.skill.vuejs'),
        icon: '/images/pages/home/our-skill/vuejs.png',
        percent: 82,
      },
    ],
    []
  );

  const awards = useMemo(
    (): RewardItemType[] => [
      {
        label: 'Best employee of the year',
        pathImage: '/images/pages/home/our-skill/award2.png',
        year: '2022',
      },
      {
        label: 'Winner of 3 hackathons at Hybrid Technologies.',
        pathImage: '/images/pages/home/our-skill/hackathon.jpg',
        year: '2023',
      },
    ],
    []
  );

  return (
    <div id={SECTION_TAG.SKILL}>
      <Section className={styles['section-our-skill']}>
        <div className={styles['section-our-skill__content']}>
          <div className={styles['section-our-skill__content__skill']}>
            <div className={styles['section-our-skill__content__skill__heading']}>
              <Element.Typography fontWeight="bold" className="uppercase">
                {t('ourSkill.title')}
              </Element.Typography>
              <Element.Typography size="note" className="mt-4">
                {t('ourSkill.subTitle')}
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
                  <div className={styles['section-our-skill__content__skill__list__item__bottom-bar']} />
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
    </div>
  );
};
