import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import styles from '@/styles/components/section/index.module.scss';

import { Container } from '../container';

type SectionProps = PropsWithChildren & {
  size?: SizeScreen;
  className?: string;
};

export const Section = ({ className, children, size }: SectionProps) => {
  return (
    <Container size={size}>
      <div className={clsx(styles['app-section'], className)}>
        <div className={styles['app-section__content']}>{children}</div>
      </div>
    </Container>
  );
};
