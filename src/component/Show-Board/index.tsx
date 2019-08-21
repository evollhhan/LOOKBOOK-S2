import React, { memo, useEffect, useState } from 'react';
import style from './style.scss';
import { PROJECTS } from '../../store/use-project';
import MusicAr from '../Figures/Music-Ar';
import NewYear from '../Figures/New-Year';
import Buyer from '../Figures/Buyer';
import ObserveContent from '../ObserveContent';
import ShelfRobot from '../Figures/Shelf-Robot';

const FIGURES: any[] = [
  MusicAr,
  NewYear,
  Buyer,
  ShelfRobot
];

const SideLeftBoard = memo(() => {
  return (
    <div className={style.sideLeftBoard}></div>
  )
});

interface ISlogan {
  name: string;
  tag: string;
  index: number;
}

const Slogan = memo((props: ISlogan) => {
  const key = 'slogan-' + props.index;
  const [status, updateStatus] = useState(false);

  useEffect(() => {
    const target = document.querySelector('.' + key)! as HTMLElement;
    const observer = new ObserveContent(target);
    observer.onShow = () => updateStatus(true);
    observer.onHide = () => updateStatus(false);
    observer.observe();
    return (() => {
      observer.unobserve();
    })
  }, []);

  return (
    <div className={`${style.slogan} ${key} ${status === true ? style.active : ''}`}>
      <p className={style.primary}>{props.name}</p>
      <p className={style.secondary}>MAKE IT <span style={{ fontWeight: 'bold' }}>{props.tag}</span></p>
    </div>
  )
})

const MainBoard = () => {
  return (
    <div id="main" className={style.mainBoard}>
      {/* <span className={style.projectTitle}>HELLO WORLD</span> */}
      {
        PROJECTS.map((item, index) =>
          <div className={style.projectItem} key={item.tag}>
            <Slogan name={item.name} tag={item.tag} index={index} />
            <div className={style.content}>
              {
                (() => {
                  const Fig = FIGURES[index];
                  return Fig ? <Fig title={item.name} /> : null;
                })()
              }
            </div>
          </div>
        )
      }
      <div className={`${style.projectItem} ${style.moreProject}`}>
        <p>And More...</p>
        <p>双十一回忆</p>
        <p>世界杯集卡活动</p>
        <p>野生小伙伴</p>
        <p>淘金币</p>
        <p>淘宝人生</p>
      </div>
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
