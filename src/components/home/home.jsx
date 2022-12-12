import React from 'react';

import { Header } from '../header/header';
import bg from '../../assets/img/bg-home.jpg';
import imgHome from '../../assets/img/img-home.png';

import './home.scss';

export const Home = () => {
  return (
    <section className="home">
      <img className="home__img" src={bg} alt="home background" />
      
      <div className="container home__container">
        <Header />

        <div className="home__description">
          <div className="home__left-wrapper">
            <h1 className="home__title title-h1">Love React JS?</h1>

            <p className="home__subtitle">
              Find classes for your soul, all classes are a little below
            </p>
          </div>

          <div className="home__right-wrapper">
            <img src={imgHome} alt="img-home" />
          </div>
        </div>
      </div>
    </section>
  );
};
