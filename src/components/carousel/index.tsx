import { CarouselProps } from 'antd';

type Props = CarouselProps & {
  isCarousel?: boolean;
};

export const Carousel = ({ ...rest }: Props) => {
  return <Carousel {...rest} />;
};
