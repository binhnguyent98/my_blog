import { CarouselProps } from 'antd';

type Props = CarouselProps & {
  isCarousel?: boolean;
};

export const Carousel = ({ isCarousel = true, ...rest }: Props) => {
  return <Carousel {...rest} />;
};
