import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'
import clsx from 'clsx'


const ActiveLink =({ isActive }) => 
          clsx(css.headerLink, {
            [css.active] : isActive,
          }) 

          
const Navigation = () => {
  return (
     <header className={css.header}>
        <NavLink className={ActiveLink} to='/'> Home </NavLink>
        <NavLink className={ActiveLink} to='/movies' end > Movie </NavLink>
     </header> 
  
  )
}

export default Navigation