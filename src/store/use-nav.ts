import Store from 'react-hookie-store';
import { useState, useCallback } from 'react';
import ObserveContent from '../component/ObserveContent';

function useNav () {
  const [selectedNav, updateSelectedNav] = useState('ABOUT');
  const [showMobileNav, setMobileNavStatus] = useState(false);
  const [nav] = useState([
    { title: 'PROFILE' },
    { title: 'PROJECT' },
    { title: 'ABOUT' }
  ]);

  const selectNav = useCallback((idx: number) => {
    setMobileNavStatus(false);
    updateSelectedNav(nav[idx].title);
    setTimeout(() => ObserveContent.forceUpdate());
  }, []);

  const toggleMobileNav = useCallback(() => {
    setMobileNavStatus(prev => !prev);
  }, []);

  return {
    nav,
    showMobileNav,
    toggleMobileNav,
    selectNav,
    selectedNav
  }
}

export default Store.use(useNav);
