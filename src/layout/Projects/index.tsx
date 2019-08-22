import React, { memo } from 'react';
import ShowBorad from '../../component/Show-Board';
import style from './style.scss';

const SideLeftBoard = memo(() => {
  return (
    <div className={style.sideLeftBoard}></div>
  )
});

const SideRightBoard = () => {
  return (
    <div className={style.sideRightBoard}>
      {/* <span className={style.projectTitle}>HELLO WORLD</span> */}
    </div>
  )
};


export default function Projects () {
  return (
    <div className={style.project}>
      <SideLeftBoard />
      <ShowBorad />
      <SideRightBoard />
    </div>
  )
}