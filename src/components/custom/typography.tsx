import { Typography as TypographyAntd } from 'antd';
import clsx from 'clsx';

import styles from '@/styles/components/element/typography.module.scss';

declare const TypographySizes: readonly [
  'big',
  'large',
  'medium',
  'normal',
  'sub-normal',
  'large-body',
  'body',
  'body2',
  'caption',
  'small',
  'note',
  'minion'
];

type Props = {
  children?: React.ReactNode;
  className?: string;
  size?: (typeof TypographySizes)[number];
  color?: string;
  fontWeight?: string;
  title?: string;
};

export const Typography = (props: Props) => {
  const { children, className, size = 'normal', color = 'white', fontWeight, title } = props;

  return (
    <TypographyAntd.Paragraph
      className={clsx(
        styles['app-typography'],
        styles[`app-typography__variant--${size}`],
        styles[`app-typography__color--${color}`],
        fontWeight && `font-${fontWeight}`,
        className
      )}
      title={title}
    >
      {children}
    </TypographyAntd.Paragraph>
  );
};
