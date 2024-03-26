import React, { useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import css from './Pages-css/NotFoundPage.module.css'



const NotFoundPage = () => {

  const location = useLocation();
  const backLinkHref = useRef(location.state ?? '/')

  return (
  
    <p>
      Not found page, please try again or 
      <NavLink className={css.backBtn} to={backLinkHref.current}> Go home </NavLink>
    </p> 
    
  )
}

export default NotFoundPage