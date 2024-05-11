import { MenuOutlined } from '@ant-design/icons';

const ReactIcon: Record<string, React.ReactElement> = {
  menu: <MenuOutlined />,
};

type IconCustom = 'logo';

type Props = {
  name: IconCustom | keyof typeof ReactIcon;
  width?: number;
  height?: number;
  className?: string;
};

export const Icon = (props: Props) => {
  const { name, className } = props;

  if (name in ReactIcon) {
    const keyName = name as keyof typeof ReactIcon;
    const render = ReactIcon[keyName];

    console.log(render.props);

    return render;
  }

  return <div />;
};
