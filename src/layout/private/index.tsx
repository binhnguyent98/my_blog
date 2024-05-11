import { Header } from './header';

export const PrivateLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
