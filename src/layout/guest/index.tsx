import styles from '@/styles/layout/guest/index.module.scss';

import { FixedBtnComponent } from './components/fixedBtn';
import { Footer } from './components/footer';
import { Header } from './components/header';

export const GuestLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className={styles['app-layout-guest']}>
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
