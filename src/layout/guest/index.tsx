import clsx from 'clsx';

import styles from '@/styles/layout/guest/index.module.scss';

import { FixedBtnComponent } from './components/fixedBtn';
import { Footer } from './components/footer';
import { Header } from './components/header';

export const GuestLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className={clsx(styles['app-layout-guest'], 'relative')}>
      <FixedBtnComponent />
      <div className={styles['app-layout-guest__lines']}>
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
