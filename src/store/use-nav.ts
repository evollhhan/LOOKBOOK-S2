import Store from 'react-hookie-store';
import { useState, useCallback } from 'react';

function useNav () {
  const [selectedNav, updateSelectedNav] = useState('PROJECT');
  const [showMobileNav, setMobileNavStatus] = useState(false);
  const [nav] = useState([
    { title: 'PROFILE' },
    { title: 'PROJECT' },
    { title: 'ABOUT' }
  ]);

  const selectNav = useCallback((idx: number) => {
    setMobileNavStatus(false);
    updateSelectedNav(nav[idx].title);
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
