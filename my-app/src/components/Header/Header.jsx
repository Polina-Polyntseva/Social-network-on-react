import React from 'react';
import s from './Header.module.css';
import logo from './img/header__logo.svg';

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt="logo"></img>
    </header>
  )
};

export default Header;