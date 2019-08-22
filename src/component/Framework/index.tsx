import React, { memo } from 'react';
import style from './style.scss';

interface IProps {
  children?: any;
}

const LeftBoard = memo((props: IProps) => {
  return (
    <div className={`${style.board} ${style.leftBoard}`}>
      <div className={style.line}></div>
      <div className={style.content}></div>
      <div className={style.line}></div>
    </div>
  )
});

const MainBoard = memo((props: IProps) => {
  return (
    <div className={`${style.board} ${style.mainBoard}`}>
      <div className={style.line}></div>
      <div className={style.content}>
        { props.children }
      </div>
      <div className={style.line}></div>
    </div>
  )
});

const RightBoard = memo((props: IProps) => {
  return (
    <div className={`${style.board} ${style.rightBoard}`}>
      <div className={style.line}></div>
      <div className={style.content}></div>
      <div className={style.line}></div>
    </div>
  )
});

export default function Framework (props: IProps) {
  return (
    <div className={`${style.framework} ${style.enter}`}>
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