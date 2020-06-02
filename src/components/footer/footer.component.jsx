import React from 'react';
import './footer.styles.scss';
import { Link } from 'react-router-dom';
import SHOP_DATA from '../../pages/shop/shop.data';

const Footer = () => (
  <footer className="footer">
    <Link to="/" className="logo-container">
      Crown Clothing ®
    </Link>
    <div className="footer-nav">
      <div className="sections-list">
        <h4>Sections</h4>
        <ul>
          {
            SHOP_DATA.map(item => (
              <li>
                <Link to={`/shop/${item.title.toLowerCase()}`}>{item.title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      <Link to="/shop">Shop</Link>
    </div>
  </footer>
)

export default Footer;