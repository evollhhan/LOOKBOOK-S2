import React, { useMemo } from 'react';
import style from './style.scss';
import ShowBorad from '../../component/Show-Board';
import useNav from '../../store/use-nav';

export default function Project () {
  const { showMobileNav } = useNav();

  const projectStatus = useMemo(() => {
    return showMobileNav ? style.fold : '';
  }, [showMobileNav]);

  return (
    <div className={`${style.project} ${projectStatus}`}>
      <ShowBorad />
    </div>
  )
}