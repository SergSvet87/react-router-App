import React from 'react';

import { MY_PORTFOLIO } from '../../utils/urls';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__copyright">
          &copy; {new Date().getFullYear()}  All rights reserved | This
          template was created with 
          <i className="material-icons">favorite</i> in
          <address className="footer__address">
            <a href={MY_PORTFOLIO} target="_blank" rel="noreferrer">
              Ukraine, Kharkiv
            </a>
          </address>
        </div>
      </div>
    </footer>
  );
};
