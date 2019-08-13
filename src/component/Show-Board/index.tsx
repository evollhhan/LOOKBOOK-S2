import React, { memo } from 'react';
import style from './style.scss';
import useProject from '../../store/use-project';

const SideLeftBoard = memo(() => {
  return (
    <div className={style.sideLeftBoard}></div>
  )
});

const MainBoard = () => {
  return (
    <div className={style.mainBoard}>
      {/* <span className={style.projectTitle}></span> */}
      <div className={style.projectItem}>
        <div className={style.slogan}>MAKE IT INTERACTIVE</div>
      </div>
      <div className={style.projectItem}>
        <div className={style.slogan}>MAKE IT SURPRISE</div>
      </div>
      <div className={style.projectItem}>
        <div className={style.slogan}>MAKE IT FUN</div>
      </div>
      <div className={style.projectItem}>
        <div className={style.slogan}>MAKE IT MISTERY</div>
      </div>
      <div className={style.projectItem}>
        <div className={style.slogan}>MAKE IT POSSIBLE</div>
      </div>
    </div>
  )
};

const SideRightBoard = () => {
  return (
    <div className={style.sideRightBoard}>
      {/* <span className={style.projectTitle}>央视春晚明星拜年活动</span> */}
    </div>
  )
};

export default function ShowBorad() {
  const { selectedProject } = useProject();

  return (
    <div className={style.showboard}>
      <SideLeftBoard />
      <MainBoard />
      <SideRightBoard />
    </div>
  )
}
