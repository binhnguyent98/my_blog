type Props<T> = {
  listTagId: T[];
  wrapperScroll?: string;
};

export const useScrollSection = <T extends string>({ wrapperScroll }: Props<T>) => {
  const wrapperElement = wrapperScroll ? document.querySelector(wrapperScroll) : window;
  // const elSection = useMemo(() => listTagId?.map((item) => document.getElementById(item)), [listTagId]);

  const onScrollToSection = (currentTag: T) => {
    const currentSection = document.getElementById(currentTag);

    wrapperElement?.scroll({
      top: currentSection?.offsetTop,
      behavior: 'smooth',
    });
  };

  return {
    onScrollToSection,
  };
};
