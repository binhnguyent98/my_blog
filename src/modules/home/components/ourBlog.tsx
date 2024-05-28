import clsx from 'clsx';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useMemo } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { CiCalendarDate } from 'react-icons/ci';
import { FaRegComment } from 'react-icons/fa';
import { RiExternalLinkFill } from 'react-icons/ri';

import { Section, Thumbnail } from '@/components';
import { Element } from '@/components/custom';
import { PATH } from '@/constants/path';
import styles from '@/styles/pages/home/section-our-blog.module.scss';

type BlogType = {
  thumbnail: string;
  date: string;
  title: string;
};

export const OurBlog = () => {
  const { t } = useTranslation('home');

  const blogs = useMemo(
    (): BlogType[] => [
      {
        thumbnail: '/images/pages/home/our-blog/1.jpg',
        date: '6 , AUG 2022',
        title: '12 unique examples of portfolio websites.',
      },
      {
        thumbnail: '/images/pages/home/our-blog/1.jpg',
        date: '6 , AUG 2022',
        title: '12 unique examples of portfolio websites.',
      },
      {
        thumbnail: '/images/pages/home/our-blog/1.jpg',
        date: '6 , AUG 2022',
        title: '12 unique examples of portfolio websites.',
      },
    ],
    []
  );

  return (
    <Section className={styles['section-our-blog']}>
      <div className={styles['section-our-blog__content']}>
        <div className={styles['section-our-blog__content__heading']}>
          <div>
            <Element.Typography fontWeight="bold" className={styles['section-our-service__content__title']}>
              {t('ourBlog.title')}
            </Element.Typography>
            <Element.Typography size="note" fontWeight="semibold" className={clsx(styles['section-our-service__content__sub-title'], 'mt-4')}>
              {t('ourBlog.subTitle')}
            </Element.Typography>
          </div>
          <Link href={PATH.POSTS} className="link flex justify-center items-center space-x-2">
            <span>{t('ourBlog.label.viewAll')}</span>
            <RiExternalLinkFill size={16} />
          </Link>
        </div>
        <div className={styles['section-our-blog__content__posts']}>
          {blogs?.map((item, index) => (
            <div key={index} className={styles['section-our-blog__content__posts__item']}>
              <Thumbnail src={item.thumbnail} width={314} height={251} className="mx-auto w-full" />
              <div className="px-4 -mt-6">
                <div className={styles['section-our-blog__content__posts__item__content']}>
                  <Element.Typography size="small" className={styles['section-our-blog__content__posts__item__content__date']}>
                    <CiCalendarDate size={16} />
                    <span>{item.date}</span>
                  </Element.Typography>
                  <Element.Typography fontWeight="semibold" size="body2" className="mt-3">
                    {item.title}
                  </Element.Typography>
                </div>
              </div>
              <div className={styles['section-our-blog__content__posts__item__content__footer']}>
                <div className="flex justify-center items-center space-x-1">
                  <FaRegComment />
                  <Element.Typography size="small">{'2 Comments'}</Element.Typography>
                </div>
                <Link href={''} className={styles['section-our-blog__content__posts__item__content__footer__read-more']}>
                  <span className="text-sm">{t('ourBlog.label.readMore')}</span>
                  <BiLinkExternal />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
