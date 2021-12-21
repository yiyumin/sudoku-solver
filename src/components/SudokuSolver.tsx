import { useState, useRef } from 'react';
import { Flex, useToast, Heading } from '@chakra-ui/react';

// custom hooks
import { useBoard } from '../hooks/useBoard';
import { useInterval } from '../hooks/useInterval';
import { useUpdate } from '../hooks/useUpdate';

// helper
import SudokuBoardManager from '../lib/sudokuBoardManager';
import { BoardState } from '../lib/types';

// components
import Board from './Board/Board';
import Controls from './Controls/Controls';

const SudokuSolver = () => {
  const toast = useToast({
    position: 'top-right',
    variant: 'subtle',
    isClosable: true
  });
  const boardManager = useRef(new SudokuBoardManager());

  const [boardState, setBoardState] = useState<BoardState>('default');
  const [isSolving, setIsSolving] = useState(false);
  const [visualSolveEnabled, setVisualSolveEnabled] = useState(false);
  const [solveInterval, setSolveInterval] = useState(250);

  const [currentUpdate, setUpdateList, resetUpdateList, incrementUpdate] = useUpdate();
  const [board, setBoard, setCell, resetBoard] = useBoard(currentUpdate);

  useInterval(() => {
    processUpdates();
  }, isSolving ? solveInterval : null);

  const processUpdates = () => {
    incrementUpdate();

    if (currentUpdate === 'solved') {
      setBoardState('finished');
      setIsSolving(false);

      clearMessage();
      toast({
        title: 'Solved!',
        status: 'success'
      });
    } else if (currentUpdate === 'unsolvable') {
      setBoardState('finished');
      setIsSolving(false);

      clearMessage();
      toast({
        title: 'Board is unsolvable!',
        status: 'error'
      });
    }
  };

  const pause = () => {
    setBoardState('paused');
    setIsSolving(false);
    toast.closeAll();
  };

  const resume = () => {
    setBoardState('solving');
    setIsSolving(true);

    clearMessage();
    toast({
      title: 'Solving...',
      status: 'info',
      isClosable: false,
      duration: null
    });
  };

  const quickSolve = () => {
    const solved = boardManager.current.solve();

    if (solved) {
      setBoard(boardManager.current.board.map((row, rowIdx) => row.map((digit, columnIdx) => ({ row: rowIdx,column: columnIdx, digit, state: 'default'}))));
      setBoardState('finished');

      clearMessage();
      toast({
        title: 'Solved!',
        status: 'success'
      });
    } else {
      setBoardState('finished');

      clearMessage();
      toast({
        title: 'Board is unsolvable!',
        status: 'error'
      });
    }
  };

  const visualSolve = () => {
    setUpdateList(boardManager.current.visualSolve());
    resume();
  };

  const solve = () => {
    if (visualSolveEnabled) {
      visualSolve();
    } else {
      quickSolve();
    }
  };

  const clear = () => {
    setBoardState('default');
    resetBoard();
    clearMessage();
    boardManager.current = new SudokuBoardManager();
    resetUpdateList();
    setIsSolving(false);
  };

  const clearMessage = () => {
    toast.closeAll();
  };

  const updateCell = (row: number, column: number, digit: number) => {
    if (digit === 0) {
      boardManager.current.removeDigit(row, column);
      setCell(row, column, digit);
    }
    else if (boardManager.current.canPlaceCoordinate(row, column, digit)) {
      boardManager.current.removeDigit(row, column);
      boardManager.current.placeDigit(row, column, digit);
      setCell(row, column, digit);
    } else if (boardManager.current.board[row][column] !== digit) {
      clearMessage();
      toast({
        title: `${digit} already exists in this row, column, or region`,
        status: 'error'
      });
    }
  };

  const generateBoard = () => {
    boardManager.current.generateSolvableBoard(17);
    setBoard(boardManager.current.board.map((row, rowIdx) => row.map((digit, columnIdx) => ({ row: rowIdx,column: columnIdx, digit, state: 'default'}))));
  };

  const toggleVisualSolve = () => {
    setVisualSolveEnabled(prev => !prev);
  };

  const setSpeed = (sps: number) => {
    setSolveInterval(1000 / sps);
  };

  return (
    <Flex h='100vh' flexDirection='column' justifyContent='center' bg='darkslategray'>
      <Flex h='10%' justifyContent='center' alignItems='center'>
        <Heading color='white'>Sudoku Solver</Heading>
      </Flex>
      <Flex justifyContent='center' alignItems='center'>
        <Board
            board={board}
            boardState={boardState}
            updateCell={updateCell}
            clearMessage={clearMessage}
        />
      </Flex>
        {/* solveSpeed={1000 / solveInterval} */}
      <Flex h='20%' justifyContent='center'>
        <Controls
          boardState={boardState}
          visualSolveEnabled={visualSolveEnabled}
          toggleVisualSolve={toggleVisualSolve}
          buttonProps={{ generateBoard, solve, pause, resume, clear }}
          sliderProps={{ solveSpeed: 1000 / solveInterval, setSpeed }}
        />
      </Flex>
    </Flex>
  );
};

export default SudokuSolver;