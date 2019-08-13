import style from './style.scss';
import React, { memo, useState } from 'react';
import useNav from '../../store/use-nav';

function Navbar () {
  const { nav, selectedNav, selectNav } = useNav();
  return (
    <div className={style.navbar}>
      <div className={style.logo}>LOOKBOOK S2</div>
      {
        nav.map((item, index) =>
          <div className={`${style.item} ${item.title === selectedNav ? style.active : ''}`}
            onClick={() => selectNav(item.title)}
            style={{ animationDelay: index * 0.1 + 's' }}
            key={item.title}>{item.title}</div>
        )
      }
    </div>
  )
}

export default memo(Navbar);
