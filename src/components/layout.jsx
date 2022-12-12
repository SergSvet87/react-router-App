import { Outlet, useNavigation } from 'react-router-dom';

import { Home } from './home/home';
import { Footer } from './footer/footer';
import { Loader } from './loader/loader';

export const Layout = () => {
  const { state } = useNavigation();

  return (
    <div className="wrapper">
      <Home />
      {state === 'loading' ? <Loader /> : null}
      <main className="page">
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};
