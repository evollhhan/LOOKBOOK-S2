import Store from 'react-hookie-store';
import { useState, useCallback } from 'react';

interface IProject {
  name: string;

}
const PROJECTS: IProject[] = [
  { name: '双十二AR音乐互动' },
  { name: '央视春晚明星拜年' },
  { name: '造物节进店寻宝' },
  { name: '心选福利箱&智能货架' },
]

function useProject () {
  const [selectedProject, update] = useState<{ index: number; detail: null | IProject }>({
    index: -1,
    detail: null
  });

  const next = useCallback(() => {
    update(prev => {
      const index = prev.index + 1
      return {
        index,
        detail: PROJECTS[index]
      }
    });
  }, []);

  return {
    selectedProject,
    next
  }
}

export default Store.use(useProject);
