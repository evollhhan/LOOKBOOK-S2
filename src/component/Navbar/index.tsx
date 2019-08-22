import style from './style.scss';
import React, { memo, useMemo } from 'react';
import useNav from '../../store/use-nav';

function Navbar () {
  const { nav, selectedNav, selectNav, toggleMobileNav, showMobileNav } = useNav();

  const navbarStatus = useMemo(() => {
    return showMobileNav ? style.unFold : '';
  }, [showMobileNav]);

  return (
    <div className={`${style.navbar} ${navbarStatus}`}>
      <div className={style.logo}>LOOKBOOK</div>
      {
        nav.map((item, index) =>
          <div className={`${style.item} ${item.title === selectedNav ? style.active : ''}`}
            onClick={() => selectNav(index)}
            style={{ animationDelay: index * 0.1 + 's' }}
            key={item.title}>{item.title}</div>
        )
      }
      <div className={style.home} onClick={toggleMobileNav}>
        <div>{selectedNav}</div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 448">
          <path fill="#eee" d="M384 336v32c0 8.75-7.25 16-16 16h-352c-8.75 0-16-7.25-16-16v-32c0-8.75 7.25-16 16-16h352c8.75 0 16 7.25 16 16zM384 208v32c0 8.75-7.25 16-16 16h-352c-8.75 0-16-7.25-16-16v-32c0-8.75 7.25-16 16-16h352c8.75 0 16 7.25 16 16zM384 80v32c0 8.75-7.25 16-16 16h-352c-8.75 0-16-7.25-16-16v-32c0-8.75 7.25-16 16-16h352c8.75 0 16 7.25 16 16z"></path>
        </svg>
      </div>
    </div>
  )
}

export default memo(Navbar);
