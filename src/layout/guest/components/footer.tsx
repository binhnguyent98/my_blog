import useTranslation from 'next-translate/useTranslation';

import { Element } from '@/components/custom';

export const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <div className="text-center header-3-bold px-4 py-[30px]">
      <Element.Typography size="caption">{t('footer')}</Element.Typography>
    </div>
  );
};
