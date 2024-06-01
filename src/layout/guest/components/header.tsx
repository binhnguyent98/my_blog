import clsx from 'clsx';
import Link from 'next/link';
import { useMemo } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { PiTelegramLogoLight } from 'react-icons/pi';

import { Container, Thumbnail } from '@/components';
import { Element } from '@/components/custom';
import { EMAIL_GLOBAL, SOCIAL_LINK } from '@/constants/app';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import style from '@/styles/layout/guest/header.module.scss';

import { MenuSmartPhone } from './menuSp';

type SocialType = {
  icon: React.ReactNode;
  link: string;
  target?: '_blank' | '_self';
};

export const Header = () => {
  const isMobile = useMediaQuery('(max-width: 980px)');
  const socialInfo = useMemo(
    (): SocialType[] => [
      {
        icon: <PiTelegramLogoLight />,
        link: SOCIAL_LINK.TELEGRAM,
      },
      {
        icon: <FaGithub />,
        link: SOCIAL_LINK.GIT_HUB,
      },
      {
        icon: <FaFacebook />,
        link: SOCIAL_LINK.FACEBOOK,
      },
    ],
    []
  );

  return (
    <Container className="relative">
      <div className={clsx(style['app-layout-guest-header'])}>
        <div className={style['app-layout-guest-header__logo']}>
          <Thumbnail src="/logo/logo.png" width={40} className="bg-red" height={40} />
        </div>
        <div className={style['app-layout-guest-header__social']}>
          {socialInfo?.map((item, index) => (
            <Link href={item.link} target={item?.link || '_self'} className={style['app-layout-guest-header__social__item']} key={index}>
              {item.icon}
            </Link>
          ))}
        </div>
        {!isMobile ? (
          <Link href={`mailto:${EMAIL_GLOBAL}`} className={clsx(style['app-layout-guest-header__email'], 'heading-4-bold')}>
            <Element.Typography size="small">{EMAIL_GLOBAL}</Element.Typography>
          </Link>
        ) : (
          <MenuSmartPhone />
        )}
      </div>
    </Container>
  );
};
