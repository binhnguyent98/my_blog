import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import { SIZE_CONTAINER_DEFAULT } from '@/constants/default';
import styles from '@/styles/components/container/index.module.scss';

type Props = PropsWithChildren & {
  className?: string;
  size?: SizeScreen;
};

export const Container = ({ children, size, className }: Props) => {
  return (
    <div className={clsx(styles['app-container'], className)}>
      <div className={styles[`app-container__${size || SIZE_CONTAINER_DEFAULT}`]}>{children}</div>
    </div>
  );
};
