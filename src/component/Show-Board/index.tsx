import React, { memo } from 'react';
import style from './style.scss';
import { PROJECTS } from '../../store/use-project';
import MusicAr from '../Figures/Music-Ar';

const FIGURES: any[] = [
  MusicAr
];

const SideLeftBoard = memo(() => {
  return (
    <div className={style.sideLeftBoard}></div>
  )
});

const MainBoard = () => {
  return (
    <div className={style.mainBoard}>
      {/* <span className={style.projectTitle}>HELLO WORLD</span> */}
      {
        PROJECTS.map((item, index) =>
          <div className={style.projectItem} key={item.tag}>
            <div className={style.content}>
              {
                (() => {
                  const Fig = FIGURES[index];
                  return Fig ? <Fig title={item.name} /> : null;
                })()
              }
            </div>
            <div className={style.slogan}>
              <p>MAKE IT</p>
              <p>{item.tag}</p>
            </div>
          </div>
        )
      }
      <div className={`${style.projectItem} ${style.end}`}>
        MAKE IT POSSIBLE.
      </div>
    </div>
  )
};

const SideRightBoard = () => {
  return (
    <div className={style.sideRightBoard}>
      {/* <span className={style.projectTitle}>HELLO WORLD</span> */}
    </div>
  )
};

export default function ShowBorad() {
  return (
    <div className={style.showboard}>
      <SideLeftBoard />
      <MainBoard />
      <SideRightBoard />
    </div>
  )
}
