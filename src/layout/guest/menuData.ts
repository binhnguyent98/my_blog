import { Translate } from 'next-translate';

export type MenuProp = {
  label: React.ReactNode;
  sectionTag: SECTION_TAG;
};

export enum SECTION_TAG {
  TOP = 'top',
  HOME = 'home',
  SKILL = 'skill',
  BLOG = 'blog',
  SELLING = 'selling',
  CONTACT = 'contact',
}

export const getMenuData = (t: Translate) => [
  {
    label: t('outService.menu.home'),
    sectionTag: SECTION_TAG.HOME,
  },
  {
    label: t('outService.menu.skill'),
    sectionTag: SECTION_TAG.SKILL,
  },
  {
    label: t('outService.menu.blog'),
    sectionTag: SECTION_TAG.BLOG,
  },
  {
    label: t('outService.menu.selling'),
    sectionTag: SECTION_TAG.SELLING,
  },
  {
    label: t('outService.menu.contact'),
    sectionTag: SECTION_TAG.CONTACT,
  },
];
