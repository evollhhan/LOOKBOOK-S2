import React, { useMemo } from 'react';
import style from './style.scss';
import useNav from '../../store/use-nav';

interface IContent {
  children?: any;
  index: number;
  name: string;
}

export default function Content (props: IContent) {
  const { selectedNav, showMobileNav } = useNav();

  const status = useMemo(() => {
    return showMobileNav ? style.fold : '';
  }, [showMobileNav]);

  const contentClassName = useMemo(() => {
    return `${style.content} ` + 
      `${style['section-' + props.index]} ` +
      `${props.name === selectedNav ? style.active : ''} ` +
      `${status}`
  }, [status, props.name]);

  return (
    <div className={`${contentClassName}`}>
      { props.children }
    </div>
  )
}