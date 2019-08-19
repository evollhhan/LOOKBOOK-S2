import Store from 'react-hookie-store';
import { useState, useCallback } from 'react';

interface IProject {
  name: string;
  tag: string;
}

export const PROJECTS: IProject[] = [
  { name: '双十二AR音乐互动', tag: 'INTERACTIVE' },
  { name: '央视春晚明星拜年', tag: 'SURPRISE' },
  { name: '造物节进店寻宝', tag: 'FUN' },
  { name: '心选门店智能货架', tag: 'MISTERY' },
]

function useProjectModule () {
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

export const useProject = Store.use(useProjectModule);
