import clsx from 'clsx';
import useTranslation from 'next-translate/useTranslation';
import { useMemo } from 'react';

import styles from '@/styles/components/loading/app-loading.module.scss';

import { Element } from '../custom';

type Props = {
  appLoader: boolean;
  children: React.ReactElement;
};

export const AppLoading = ({ appLoader, children }: Props) => {
  const { t } = useTranslation('common');
  const loader = useMemo(() => {
    if (appLoader) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 4000);
      });
    }

    return appLoader;
  }, [appLoader]);

  return (
    <>
      <div className={clsx(styles['app-loading'], loader && styles['app-loaded'])}>
        <div className={styles['app-loading__overplay']}>
          <div className={styles['app-loading__loader']}>
            <div className={styles['app-loading__loader__inner']} />
          </div>
          <Element.Typography className={styles['app-loading__title']}>{t('label.loading')}</Element.Typography>
        </div>
      </div>
      {loader && <div className={styles['app-page']}>{children}</div>}
    </>
  );
};
