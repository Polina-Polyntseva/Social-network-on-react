import React from 'react';
import s from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}><Link className={s.link} to='/profile'>Profile</Link></li>
        <li className={s.item}><Link className={s.link} to='/dialogs'>Dialogs</Link></li>
        <li className={s.item}><Link className={s.link} to='/users'>Users</Link></li>
        <li className={s.item}><Link className={s.link} to='/news'>News</Link></li>
        <li className={s.item}><Link className={s.link} to='/music'>Music</Link></li>
        <li className={s.item}><Link className={s.link} to='/sefting'>Sefting</Link></li>
      </ul>
    </nav>
  )
};

export default Navbar;