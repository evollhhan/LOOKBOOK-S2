import { useState, useCallback } from 'react';
import Store from 'react-hookie-store';

let throttle: number = 0;

function useFramework () {
  const [tag ,setState] = useState(0);

  const update = useCallback(() => {
    const current = Date.now();
    if (current - throttle < 3200) {
      return;
    }
    throttle = current;
    setState(prev => prev + 1);
  }, []);

  return {
    tag,
    update
  }
}

export default Store.use(useFramework);
