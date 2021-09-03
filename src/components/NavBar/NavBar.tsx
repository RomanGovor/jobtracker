import React, { useState } from 'react';
import logoIcon from '../../assets/images/logobear.svg';
import logoGreenIcon from '../../assets/images/logobearGreen.svg';
import filterIcon from '../../assets/images/filter.svg';
import menuBurgerIcon from '../../assets/images/menu-burger.png';
import cancelIcon from '../../assets/images/cancel.svg';
import './navbar.scss';

const NavBar: React.FC = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const clickMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <header className={`navbar ${isOpenMenu ? 'navbar--open' : ''}`}>
      <img className="navbar__logo" src={isOpenMenu ? logoGreenIcon : logoIcon} alt="logobear" />
      <nav className="navbar__nav">
        <ul className="navbar__links-list">
          <li>
            <span className="navbar__link">jobs</span>
          </li>
          <li>
            <span className="navbar__link">info</span>
          </li>
          <li>
            <span className="navbar__link">contact us</span>
          </li>
        </ul>
        <div className="navbar__filter">
          <img src={filterIcon} alt="filter" />
        </div>
        <div className="navbar__menu">
          <img
            onClick={clickMenu}
            src={isOpenMenu ? cancelIcon : menuBurgerIcon}
            alt="menu burger"
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
