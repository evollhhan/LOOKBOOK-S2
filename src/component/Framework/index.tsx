import React, { memo } from 'react';
import style from './style.scss';

interface IProps {
  children?: any;
}

const LeftBoard = memo((props: IProps) => {
  return (
    <div className={style.leftBoard}></div>
  )
});

const MainBoard = memo((props: IProps) => {
  return (
    <div className={style.mainBoard}>
      { props.children }
    </div>
  )
});

const RightBoard = memo((props: IProps) => {
  return (
    <div className={style.rightBoard}>
    </div>
  )
});

export default function Framework (props: IProps) {
  return (
    <div className={style.framework}>
      <div className={style.camera}>
        <LeftBoard />
        <MainBoard>
          { props.children }
        </MainBoard>
        <RightBoard />
      </div>
    </div>
  )
}