import { Button as ButtonAntd, ButtonProps } from 'antd';
import clsx from 'clsx';
import Link from 'next/link';

import style from '@/styles/components/element/button.module.scss';

declare const ButtonTypes: readonly ['primary', 'outlined', 'line-prefix', 'danger', 'none', 'text'];
declare const ButtonSizes: readonly ['xs', 'sm', 'md', 'lg'];

export interface BtnCustomProps extends Omit<ButtonProps, 'type' | 'size'> {
  type?: (typeof ButtonTypes)[number];
  size?: (typeof ButtonSizes)[number];
  link?: string;
}

const RenderBtn = ({ children, link }: { children: React.ReactNode; link?: string }) => {
  if (link) {
    <Link href={link}>{children}</Link>;
  }

  return children;
};

export const Button = (props: BtnCustomProps) => {
  const { type, size, link, className, children, ...rest } = props;
  const renderChildren = type === 'line-prefix' || 'outlined' ? <span className={style['button__render']}>{children}</span> : children;

  return (
    <RenderBtn link={link}>
      <ButtonAntd
        {...rest}
        className={clsx(style['button'], type && style[`button__type__${type}`], size && style[`button__size__${size}`], className)}
      >
        {renderChildren}
      </ButtonAntd>
    </RenderBtn>
  );
};
