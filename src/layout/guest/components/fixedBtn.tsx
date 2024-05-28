import { Element } from '@/components/custom';
import styles from '@/styles/layout/guest/fixed-btn.module.scss';

export const FixedBtnComponent = () => {
  return <div />;

  return (
    <div className={styles['fixed-btn']}>
      <Element.Button type="outlined">{'a'}</Element.Button>
    </div>
  );
};
