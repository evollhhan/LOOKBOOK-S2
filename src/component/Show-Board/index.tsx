import React from 'react';
import style from './style.scss';

export default function ShowBorad() {
  return (
    <div className={style.showboard}>
      <div className={style.expendboard}></div>
      <div className={style.leftboard}>
        <span style={{ position: 'absolute', fontSize: '100px', right: '0%', top: '0%', color: '#fff' }}>HelloWorld</span>
      </div>
      <div className={style.rightboard}>
      </div>
    </div>
  )
}
