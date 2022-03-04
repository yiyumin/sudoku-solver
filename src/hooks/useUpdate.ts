import { useState, useCallback, useRef } from 'react';

import { CellUpdate } from '../lib/types';

const useUpdate = () => {
  const updatesRef = useRef<CellUpdate[]>([]);
  const pointerRef = useRef(-1);
  const [update, setUpdate] = useState<CellUpdate | null>(null);

  const set = useCallback((updates: CellUpdate[]) => {
    updatesRef.current = updates;
    pointerRef.current = 0;
    setUpdate(updatesRef.current[pointerRef.current]);
  }, []);

  const clear = useCallback(() => {
    updatesRef.current = [];
    pointerRef.current = -1;
    setUpdate(null);
  }, []);

  const next = useCallback(() => {
    if (pointerRef.current >= updatesRef.current.length) {
      clear();
      return;
    }

    pointerRef.current++;
    setUpdate(updatesRef.current[pointerRef.current]);
  }, [clear]);

  return [update, set, clear, next] as const;
};

export { useUpdate };
