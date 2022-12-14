import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { CV, PATHS } from '../../utils/urls';
import logo from '../../assets/img/mainLogo.png';
import './header.scss';

export const Header = () => {
  return (
    <header className="home__header header">
      <div className="container row">
        <nav className="header__top-menu menu-header">
          <ul className="menu-header__list list-header">
            <li className="list-header__item">
              <img
                className="header__logo"
                src={logo}
                alt="Logo"
                width={200}
                height={60}
              />
            </li>

            <li className="list-header__item">
              <NavLink to={PATHS.home}>Home</NavLink>
            </li>

            <li className="list-header__item">
              <NavLink to={PATHS.lesson()}>Search</NavLink>
            </li>

            <li className="list-header__item">
              <Link href={CV} target="_blank" rel="noreferrer">
                Team
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header__profile profile">
          {/* <a href="login.html">
            <button className="profile__auth button" type="button">
              Log In
            </button>
          </a> */}

          <div className="profile__notification">
            <i className="bx bxs-bell"></i>
            <span></span>
          </div>

          <div className="profile__avatar">
            <img
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/14/avatar.jpg?width=50"
              alt="avatar"
            />
            <i className="bx bx-caret-down"></i>
            <span className="profile__name">Привет, UserName!</span>
          </div>
        </div>
      </div>
    </header>
  );
};
