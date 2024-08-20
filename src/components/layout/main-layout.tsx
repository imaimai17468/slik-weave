import { Aurora } from "../parts/aurora";
import { Header } from "../parts/header";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props): React.ReactNode => {
  return (
    <>
      <Aurora />
      <Header />
      {children}
    </>
  );
};
