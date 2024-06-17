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
import { SECTION_TAG } from '@/layout/guest/menuData';
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
        thumbnail: '/images/pages/home/our-blog/web2.jpg',
        date: '6 , AUG 2022',
        title:
          'Web 2.0 represents a transformative era in the evolution of the internet, characterized by interactivity, collaboration, and user empowerment. By embracing these key highlights, businesses and individuals can leverage the full potential of Web 2.0 to connect, create, and thrive in the digital age.',
      },
      {
        thumbnail: '/images/pages/home/our-blog/rocket.jpg',
        date: '9 , June 2023',
        title: 'Elevate Your Online Presence: Let Us Build Your Dream Website',
      },
      {
        thumbnail: '/images/pages/home/our-blog/seo.jpg',
        date: '2 , September 2024',
        title: "Mastering SEO: Strategies to Boost Your Website's Visibility and Rank Higher",
      },
    ],
    []
  );

  return (
    <div id={SECTION_TAG.BLOG}>
      <Section className={styles['section-our-blog']}>
        <div className={styles['section-our-blog__content']}>
          <div className={styles['section-our-blog__content__heading']} data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="800">
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
          <div className={styles['section-our-blog__content__posts']} data-aos="zoom-out-left" data-aos-easing="linear" data-aos-duration="800">
            {blogs?.map((item, index) => (
              <div key={index} className={styles['section-our-blog__content__posts__item']}>
                <Thumbnail src={item.thumbnail} width={314} height={251} className="mx-auto w-full h-[400px] object-cover" />
                <div className="px-4 -mt-6">
                  <div className={styles['section-our-blog__content__posts__item__content']}>
                    <Element.Typography size="small" className={styles['section-our-blog__content__posts__item__content__date']}>
                      <CiCalendarDate size={16} />
                      <span>{item.date}</span>
                    </Element.Typography>
                    <Element.Typography fontWeight="semibold" size="body2" title={item?.title} className="mt-3 line-clamp-3">
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
    </div>
  );
};
