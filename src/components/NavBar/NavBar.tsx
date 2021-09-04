import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import logoIcon from '../../assets/images/logobear.svg';
import logoGreenIcon from '../../assets/images/logobearGreen.svg';
import filterIcon from '../../assets/images/filter.svg';
import filterNoActiveIcon from '../../assets/images/filterNoActive.svg';
import menuBurgerIcon from '../../assets/images/menu-burger.png';
import cancelIcon from '../../assets/images/cancel.svg';
import './navbar.scss';
import { PropsTypes } from './types';
import { actionsCommon } from '../../redux/commonReducer';

const NavBar: React.FC<PropsTypes> = (props) => {
  const { isFilterActive, isLogin } = props;
  const [isOpenMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();

  const onMenuClick = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const onFilterClick = () => {
    dispatch(actionsCommon.toggleFilterFlag(!isFilterActive));
  };

  useEffect(() => {
    if (isOpenMenu && isFilterActive) {
      onFilterClick();
    }
  }, [isOpenMenu]);

  return (
    <header className={`navbar ${isOpenMenu ? 'navbar--open' : ''}`}>
      <img className="navbar__logo" src={isOpenMenu ? logoGreenIcon : logoIcon} alt="logobear" />
      {isLogin && (
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
            <img
              onClick={onFilterClick}
              src={isFilterActive ? filterIcon : filterNoActiveIcon}
              alt="filter"
            />
          </div>
          <div className="navbar__menu">
            <img
              onClick={onMenuClick}
              src={isOpenMenu ? cancelIcon : menuBurgerIcon}
              alt="menu burger"
            />
          </div>
          {isOpenMenu && <div className="overlay-main" />}
        </nav>
      )}
    </header>
  );
};

export default NavBar;
