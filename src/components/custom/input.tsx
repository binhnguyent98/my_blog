import { Input as InputAntd, InputProps as InputAntdProps } from 'antd';
import { TextAreaProps } from 'antd/es/input';
import clsx from 'clsx';

import style from '@/styles/components/element/input.module.scss';

type InputProps = InputAntdProps & {
  variant?: 'black-fill' | 'white-fill';
};

const { TextArea } = InputAntd;

const Input = (props: InputProps) => {
  return <InputAntd {...props} />;
};

const NumberComponent = ({ className, ...rest }: InputProps) => {
  return <InputAntd {...rest} className={clsx(style['app-input'], className)} />;
};

const TextAreaComponent = ({ className, ...rest }: TextAreaProps) => {
  return <TextArea {...rest} className={clsx(style['app-input-area'], className)} />;
};

Input.Number = NumberComponent;
Input.Area = TextAreaComponent;

export { Input };
