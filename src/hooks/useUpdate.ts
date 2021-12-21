import { useState, useCallback } from 'react';

import { CellUpdate } from '../lib/types';

const useUpdate = () => {
  const [updates, setUpdates] = useState<CellUpdate[]>([]);
  const [currentUpdate, setCurrentUpdate] = useState<CellUpdate | null>(null);
  const [index, setIndex] = useState(-1);

  const setUpdateList = (updateList: CellUpdate[]) => {
    setUpdates(updateList);
    setCurrentUpdate(updateList[0]);
    setIndex(0);
  };

  const resetUpdateList = useCallback(() => {
    setUpdates([]);
    setCurrentUpdate(null);
    setIndex(-1);
  }, []);

  const incrementUpdate = () => {
    setIndex(idx => idx + 1);

    if (!updates[index]) {
      resetUpdateList();
    } else {
      setCurrentUpdate(updates[index]);
    }
  };

  return [currentUpdate, setUpdateList, resetUpdateList, incrementUpdate] as const;
};

export { useUpdate };