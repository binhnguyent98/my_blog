import { Form } from 'antd';
import clsx from 'clsx';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useMemo } from 'react';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoLinkedin } from 'react-icons/io5';

import { CustomForm, Section } from '@/components';
import { Element } from '@/components/custom';
import { MY_PHONE_NUMBER } from '@/constants/app';
import { ContactReqDto } from '@/dto/request/contact';
import { useForm } from '@/hooks';
import styles from '@/styles/pages/home/section-contact.module.scss';

type SocialType = {
  label: string;
  icon: React.ReactNode;
  link: string;
};

export const Contact = () => {
  const { t } = useTranslation('home');
  const { control } = useForm<ContactReqDto>();

  const social = useMemo(
    (): SocialType[] => [
      {
        label: 'Facebook',
        icon: <FaSquareFacebook size={36} />,
        link: 'https://www.facebook.com/binhxikeno2/',
      },
      {
        label: 'Instagram',
        icon: <FiInstagram size={36} />,
        link: 'https://www.facebook.com/binhxikeno2/',
      },
      {
        label: 'Linkedin',
        icon: <IoLogoLinkedin size={36} />,
        link: 'https://www.facebook.com/binhxikeno2/',
      },
    ],
    []
  );

  return (
    <Section className={styles['section-contact']}>
      <div className={styles['section-contact__content']}>
        <div className={styles['section-contact__content__content']}>
          <div className={styles['section-contact__content__txt']}>
            <Element.Typography fontWeight="bold" className={styles['section-contact__content__title']}>
              {t('contact.title')}
            </Element.Typography>
            <Element.Typography size="note" fontWeight="semibold" className={clsx(styles['section-contact__content__sub-title'], 'mt-4')}>
              {t('contact.subTitle')}
            </Element.Typography>
            <Element.Typography size="body2" fontWeight="semibold" className={clsx(styles['section-contact__content__sub-title'], 'mt-8')}>
              {t('contact.note')}
            </Element.Typography>
            <Element.Typography size="body2" fontWeight="bold" className={clsx(styles['section-contact__content__sub-title'], 'mt-8 !text-green-1')}>
              {MY_PHONE_NUMBER}
            </Element.Typography>
          </div>
          <div className={styles['section-contact__content__social']}>
            {social.map((item, index) => (
              <Link href={item.link} key={index} className={styles['section-contact__content__social__item']}>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles['section-contact__content__form']}>
          <Form>
            <div className="flex-1 flex space-x-6">
              <CustomForm.Control
                name="name"
                required
                classes={{ root: 'w-full' }}
                control={control}
                render={({ field }) => {
                  return <Element.Input placeholder={t('contact.fields.name')} className="w-full" {...field} />;
                }}
              />
              <CustomForm.Control
                name="email"
                classes={{ root: 'w-full' }}
                required
                control={control}
                render={({ field }) => {
                  return <Element.Input placeholder={t('contact.fields.email')} className="w-full" {...field} />;
                }}
              />
            </div>
            <CustomForm.Control
              name="subject"
              required
              control={control}
              render={({ field }) => {
                return <Element.Input placeholder={t('contact.fields.subject')} className="w-full" {...field} />;
              }}
            />
            <CustomForm.Control
              name="name"
              required
              control={control}
              render={({ field }) => {
                return <Element.Input.Area rows={8} placeholder={t('contact.fields.message')} className="w-full" {...field} />;
              }}
            />
            <Element.Button type="line-prefix" size="md" className={clsx('w-full uppercase')}>
              {t('contact.submit')}
            </Element.Button>
          </Form>
        </div>
      </div>
    </Section>
  );
};
