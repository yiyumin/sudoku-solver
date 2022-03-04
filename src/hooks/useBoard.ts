import { useState, useEffect, useCallback } from 'react';

import { createBoard } from '../lib/boardHelper';
import { CellDigit, CellUpdate } from '../lib/types';

const useBoard = (currentUpdate: CellUpdate | null) => {
  const [board, setBoard] = useState(createBoard());

  useEffect(() => {
    if (
      !currentUpdate ||
      currentUpdate === 'solved' ||
      currentUpdate === 'unsolvable'
    ) {
      return;
    }

    const updateBoard = (prevBoard: CellDigit[][]) => {
      const newBoard = prevBoard.map((boardRow, rowIdx) => {
        return boardRow.map((cellDigit, columnIdx) => {
          return (
            rowIdx === currentUpdate.row && columnIdx === currentUpdate.column
              ? { digit: currentUpdate.digit, state: currentUpdate.state }
              : { ...cellDigit, state: 'default' }
          ) as CellDigit;
        });
      });

      return newBoard;
    };

    setBoard((prevBoard) => updateBoard(prevBoard));
  }, [currentUpdate]);

  const setCell = useCallback((row: number, column: number, digit: number) => {
    setBoard((prevBoard) =>
      prevBoard.map((boardRow, rowIdx) => {
        return boardRow.map((cellDigit, columnIdx) => {
          return (
            rowIdx === row && columnIdx === column
              ? { digit: digit, state: 'default' }
              : cellDigit
          ) as CellDigit;
        });
      })
    );
  }, []);

  const resetBoard = () => {
    setBoard(createBoard());
  };

  return [board, setBoard, setCell, resetBoard] as const;
};

export { useBoard };
