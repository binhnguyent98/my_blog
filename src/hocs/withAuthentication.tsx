import { useRouter } from 'next/router';

import { PATH } from '@/constants/path';
import { useSelector } from '@/store';

interface Props {
  children?: React.ReactNode;
}

export const withAuthentication = <T extends Props = Props>(Component: React.ComponentType<T>) => {
  const HOC: React.FC<T> = (props: T) => {
    const router = useRouter();
    const { auth } = useSelector((state) => ({ auth: state.auth, appLoader: state.app.appLoader }));
    const { accessToken, refreshToken } = auth;

    if (!accessToken || !refreshToken) {
      router.replace(PATH.LOGIN);

      return <></>;
    }

    return <Component {...props} />;
  };

  return HOC;
};
