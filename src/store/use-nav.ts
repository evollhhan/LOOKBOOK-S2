import Store from 'react-hookie-store';
import { useState } from 'react';

function useNav () {
  const [selectedNav, selectNav] = useState('PROJECT');
  const [nav] = useState([
    { title: 'PROJECT' },
    { title: 'PROFILE' },
    { title: 'ABOUT' }
  ]);
  return {
    nav,
    selectNav,
    selectedNav
  }
}

export default Store.use(useNav);
