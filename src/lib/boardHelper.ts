import { CellDigit } from './types';

const BOARD_SIZE = 9;

const createBoard = (): CellDigit[][] =>
  Array.from(Array(BOARD_SIZE), () =>
    new Array(BOARD_SIZE).fill({ digit: 0, state: 'default' })
  );

export { BOARD_SIZE, createBoard };
