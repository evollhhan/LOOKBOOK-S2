import React, { memo } from 'react';
import style from './style.scss';
import { PROJECTS } from '../../store/use-project';
import Starter from '../Figures/Starter';
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
      <div className={style.projectItem}>
        <div className={style.titleArea}>
          <div className={style.sectionTitle}>PROJECTS</div>
          <div className={style.subTitle}>项目集</div>
        </div>
        <div className={style.projectDesc}>
          <p>一个好的作品不仅只是网页</p>
          <p>更是一次有温度的触碰</p>
          <p>一次眼、手与耳的旅行</p>
          <p>一种美学的探索</p>
        </div>
        <Starter />
      </div>
      {
        PROJECTS.map((item, index) =>
          <div className={style.projectItem} key={item.tag}>
            <div className={style.slogan}>
              <p className={style.primary}>{item.name}</p>
              <p className={style.secondary}>MAKE IT <span style={{ fontWeight: 'bold' }}>{item.tag}</span></p>
            </div>
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
