import Image, { ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'alt'> & {
  alt?: string;
  className?: string;
  width: number;
  height: number;
};

export const Thumbnail = (props: Props) => {
  return <Image {...props} alt={props.alt || ''} />;
};
