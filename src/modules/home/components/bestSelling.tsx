import clsx from 'clsx';
import useTranslation from 'next-translate/useTranslation';
import { useMemo } from 'react';
import { IoMdCheckboxOutline } from 'react-icons/io';

import { Section } from '@/components';
import { Element } from '@/components/custom';
import { SECTION_TAG } from '@/layout/guest/menuData';
import styles from '@/styles/pages/home/section-best-selling.module.scss';

type SellingType = {
  price: string;
  unit: string;
  content: string[];
};

export const BestSelling = () => {
  const { t } = useTranslation('home');

  const selling = useMemo(
    (): SellingType[] => [
      {
        price: '$19',
        unit: 'hour',
        content: ['Need your wireframe', 'Design with Figma, Framer', 'Implement with Webflow, React, WordPress, Laravel/PHP', 'Support 6 months'],
      },
      {
        price: '$19',
        unit: 'hour',
        content: ['Need your wireframe', 'Design with Figma, Framer', 'Implement with Webflow, React, WordPress, Laravel/PHP', 'Support 6 months'],
      },
      {
        price: '$19',
        unit: 'hour',
        content: ['Need your wireframe', 'Design with Figma, Framer', 'Implement with Webflow, React, WordPress, Laravel/PHP', 'Support 6 months'],
      },
    ],
    []
  );

  return (
    <div id={SECTION_TAG.SELLING}>
      <Section className={styles['section-best-selling']}>
        <div className={styles['section-best-selling__content']}>
          <div className={styles['section-best-selling__content__heading']}>
            <Element.Typography fontWeight="bold" className={styles['section-our-service__content__title']}>
              {t('bestSelling.title')}
            </Element.Typography>
            <Element.Typography size="note" fontWeight="semibold" className={clsx(styles['section-our-service__content__sub-title'], 'mt-4')}>
              {t('bestSelling.subTitle')}
            </Element.Typography>
          </div>
          <div className={styles['section-best-selling__content__list']}>
            {selling?.map((item, index) => (
              <div key={index} className={styles['section-best-selling__content__list__item']}>
                <div className={styles['section-best-selling__content__list__item__price']}>
                  <Element.Typography fontWeight="bold" size="medium" className="!text-green-1">
                    {item.price}
                  </Element.Typography>
                  <Element.Typography size="caption" className='before:content-["/"] before:mr-2'>
                    {item.unit}
                  </Element.Typography>
                </div>
                <div className={styles['section-best-selling__content__list__item__content']}>
                  {item.content.map((text, indexText) => (
                    <div key={indexText} className={styles['section-best-selling__content__list__item__content__text']}>
                      <IoMdCheckboxOutline className="text-green-1" width={20} />
                      <Element.Typography size="body" className="flex-1 ml-2">
                        {text}
                      </Element.Typography>
                    </div>
                  ))}
                </div>
                <div className={styles['section-best-selling__content__btn']}>
                  <Element.Button size="md" type="outlined" className="uppercase">
                    {t('bestSelling.btnGetStated')}
                  </Element.Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
