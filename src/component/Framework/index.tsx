import React, { memo, useCallback, useEffect, useState } from 'react';
import style from './style.scss';
import ObserveContent from '../ObserveContent';
import useFramework from '../../store/use-framework';
import useNav from '../../store/use-nav';

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
      <div className={style.vline}></div>
      <div className={style.line}></div>
    </div>
  )
});

const RightBoard = memo((props: IProps) => {
  return (
    <div className={`${style.board} ${style.rightBoard}`}>
      <div className={style.line}></div>
      <div className={style.content}>
        <ProjectSelector />
      </div>
      <div className={style.lineShort}></div>
      <div className={style.lineShort}></div>
      <div className={style.line}></div>
    </div>
  )
});

interface IArrowProps {
  direction: number;
}

const Arrow = memo((props: IArrowProps) => {
  const { update } = useFramework();
  const { selectedNav } = useNav();

  const move = useCallback(() => {
    if (selectedNav !== 'PROJECT') return;
    ObserveContent.setTransformPosition(props.direction);
    update();
  }, [selectedNav]);

  return (
    <div className={style.arrow} onClick={move}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 336 448">
        <path className={style.path} fill="#444" d="M292.75 75.25l-132.75 132.75 132.75 132.75c6.25 6.25 6.25 16.25 0 22.5l-41.5 41.5c-6.25 6.25-16.25 6.25-22.5 0l-185.5-185.5c-6.25-6.25-6.25-16.25 0-22.5l185.5-185.5c6.25-6.25 16.25-6.25 22.5 0l41.5 41.5c6.25 6.25 6.25 16.25 0 22.5z"></path>
      </svg>
    </div>
  )
})

const ProjectSelector = memo((props: IProps) => {
  return (
    <div className={style.selector}>
      <Arrow direction={1} />
      <Arrow direction={-1} />
    </div>
  )
})

export default function Framework (props: IProps) {
  const { tag } = useFramework(); 
  const [animationState, setState] = useState('');

  useEffect(() => {
    setState('');
    setTimeout(() => setState(style.enter), 50);
  }, [tag])

  return (
    <div className={`${style.framework} ${animationState}`}>
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