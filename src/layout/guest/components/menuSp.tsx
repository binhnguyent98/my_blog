import { Drawer } from 'antd';
import { DrawerClassNames } from 'antd/es/drawer/DrawerPanel';
import clsx from 'clsx';
import useTranslation from 'next-translate/useTranslation';
import { useMemo, useState } from 'react';
import { MdMenuOpen } from 'react-icons/md';

import { Element } from '@/components/custom';
import { useScrollSection } from '@/hooks/useScrollSection';
import style from '@/styles/layout/guest/menu-smart-phone.module.scss';

import { getMenuData, SECTION_TAG } from '../menuData';

export const MenuSmartPhone = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { t } = useTranslation('home');
  const menu = useMemo(() => getMenuData(t), []);
  const { onScrollToSection } = useScrollSection<SECTION_TAG>({
    listTagId: [SECTION_TAG.HOME, SECTION_TAG.SKILL, SECTION_TAG.BLOG, SECTION_TAG.SELLING, SECTION_TAG.CONTACT],
  });

  const drawerClassNames: DrawerClassNames = {
    body: style['guest-layout-menu-smart-phone__drawer__body'],
    mask: style['guest-layout-menu-smart-phone__drawer__mask'],
    header: style['guest-layout-menu-smart-phone__drawer__header'],
    footer: style['guest-layout-menu-smart-phone__drawer'],
    content: style['guest-layout-menu-smart-phone__drawer__content'],
  };

  const handleScroll = (tag: SECTION_TAG) => {
    setOpenDrawer(false);
    onScrollToSection(tag);
  };

  return (
    <div className={clsx(style['guest-layout-menu-smart-phone'], 'md:fixed md:top-5 md:right-[16px] md:bg-primary md:z-50')}>
      <Element.Button type="text" onClick={() => setOpenDrawer((prev) => !prev)}>
        <MdMenuOpen color="white" size={32} className={clsx(openDrawer && 'rotate-180', 'bg-primary p-1 rounded-lg')} />
      </Element.Button>
      <Drawer
        title={
          <Element.Button className="!text-white " type="text" onClick={() => onScrollToSection(SECTION_TAG.TOP)}>
            {t('common:header.menu')}
          </Element.Button>
        }
        closeIcon={<MdMenuOpen color="white" className="rotate-180" size={26} />}
        width="60%"
        onClose={() => setOpenDrawer(false)}
        classNames={drawerClassNames}
        open={openDrawer}
      >
        <div className={style['guest-layout-menu-smart-phone__menu']}>
          <ul className={style['guest-layout-menu-smart-phone__menu__list']}>
            {menu?.map((item, index) => (
              <li key={index} onClick={() => handleScroll(item.sectionTag)}>
                <Element.Typography size="body">{item.label}</Element.Typography>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </div>
  );
};
