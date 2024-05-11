import { Icon, Thumbnail } from '@/components';
import style from '@/styles/layout/private/header.module.scss';

export const Header = () => {
  return (
    <div className={style['header-private']}>
      <Thumbnail className={style['header-private__logo']} src="/logo/logo.png" width={45} height={45} />
      <div className={style['header-private__content']}>
        <Icon name="menu" />
      </div>
    </div>
  );
};
