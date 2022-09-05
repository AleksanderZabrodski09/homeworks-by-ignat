import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
import s from './Header.module.css';


function Header() {
  return (
    <div className={s.header}>
      <div>
        <NavLink to={PATH.PRE_JUNIOR} className={`${s.nav} ${s.active}`}>pre-junior</NavLink>
        <NavLink to={PATH.JUNIOR} className={`${s.nav} ${s.active}`}>junior</NavLink>
        <NavLink to={PATH.JUNIOR_PLUS} className={`${s.nav} ${s.active}`}>junior-plus</NavLink>
      </div>
      <div className={s.block}>menu</div>
    </div>
  )
}

export default Header
