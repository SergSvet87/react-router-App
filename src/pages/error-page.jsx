import { NavLink, useRouteError } from 'react-router-dom';

import { Home } from '../components/home/home';
import { Footer } from '../components/footer/footer';
import { PATHS } from '../utils/urls';

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="wrapper">
      <Home />
      <main id="error-page" className="page error-page">
        <h3 className="title-h3">Oops!</h3>
        <p className="error-page__text">
          Sorry, an unexpected error has occurred.
        </p>
        <p>
          <i>{error.statusText || error.message}</i>
          <i
            style={{
              marginTop: '15px',
              display: 'block',
              fontSize: '38px',
              color: '#fd920f',
            }}
            className="bx bxs-down-arrow-alt"
          ></i>
        </p>
        <NavLink className="error-page__link" to={PATHS.home}>
          Home
        </NavLink>
      </main>
      <Footer />
    </div>
  );
};
