import { CellUpdate } from './types';

// row, column, digit
type CellDigit = [number, number, number];

class SudokuBoardManager {
  board: number[][];
  rows: Set<number>[];
  columns: Set<number>[];
  regions: Set<number>[];

  constructor() {
    this.board = Array.from(Array(9), () => new Array(9).fill(0));
    this.rows = Array.from(Array(9), () => new Set());
    this.columns = Array.from(Array(9), () => new Set());
    this.regions = Array.from(Array(9), () => new Set());
  }

  resetBoard() {
    this.board = Array.from(Array(9), () => new Array(9).fill(0));
    this.rows = Array.from(Array(9), () => new Set());
    this.columns = Array.from(Array(9), () => new Set());
    this.regions = Array.from(Array(9), () => new Set());
  }

  canPlaceCoordinate(row: number, column: number, digit: number): boolean {
    return (
      !this.rows[row].has(digit) &&
      !this.columns[column].has(digit) &&
      !this.regions[getRegion(row, column)].has(digit)
    );
  }

  placeDigit(row: number, column: number, digit: number): void {
    this.board[row][column] = digit;
    this.rows[row].add(digit);
    this.columns[column].add(digit);
    this.regions[getRegion(row, column)].add(digit);
  }

  removeDigit(row: number, column: number): void {
    this.rows[row].delete(this.board[row][column]);
    this.columns[column].delete(this.board[row][column]);
    this.regions[getRegion(row, column)].delete(this.board[row][column]);

    this.board[row][column] = 0;
  }

  solve(): boolean {
    const stack: CellDigit[] = [];
    let r: number = 0;
    let c: number = 0;
    let candidate: number = 1;

    while (r < 9 && c < 9) {
      if (this.board[r][c]) {
        [r, c] = incrementColumn(r, c);
      } else if (candidate > 9) {
        if (!stack.length) {
          return false;
        }

        [r, c, candidate] = stack.pop()!;
        this.removeDigit(r, c);
        candidate += 1;
      } else if (!this.canPlaceCoordinate(r, c, candidate)) {
        candidate += 1;
      } else {
        this.placeDigit(r, c, candidate);
        stack.push([r, c, candidate]);
        candidate = 1;
        [r, c] = incrementColumn(r, c);
      }
    }

    return true;
  }

  visualSolve(): CellUpdate[] {
    const stack: CellDigit[] = [];
    let r: number = 0;
    let c: number = 0;
    let candidate: number = 1;

    const updates: CellUpdate[] = [];

    while (r < 9 && c < 9) {
      if (this.board[r][c]) {
        [r, c] = incrementColumn(r, c);
      } else if (candidate > 9) {
        updates.push({ row: r, column: c, digit: 0, state: 'backtrack' });

        if (!stack.length) {
          updates.push('unsolvable');
          return updates;
        }

        [r, c, candidate] = stack.pop()!;
        this.removeDigit(r, c);
        candidate += 1;
      } else if (!this.canPlaceCoordinate(r, c, candidate)) {
        updates.push({
          row: r,
          column: c,
          digit: candidate,
          state: 'skip_over_digit',
        });
        candidate += 1;
      } else {
        this.placeDigit(r, c, candidate);
        stack.push([r, c, candidate]);
        updates.push({
          row: r,
          column: c,
          digit: candidate,
          state: 'place_digit',
        });
        candidate = 1;
        [r, c] = incrementColumn(r, c);
      }
    }

    updates.push('solved');
    return updates;
  }

  // generate fully solved board randomly and remove digits
  generateSolvableBoard = (n: number) => {
    this.resetBoard();

    // generate seed (random digit between 0 and 8) and increment (starting at 0, going up to 8) for each cell
    // cell candidate = (seed + increment) % 9 + 1
    const cellSeed = Array.from(Array(9), () =>
      new Array(9).fill(0).map(() => [randomDigit(), 0])
    );

    let r: number = 0;
    let c: number = 0;

    while (r < 9 && c < 9) {
      const increment = cellSeed[r][c][1];
      const candidate = ((cellSeed[r][c][0] + increment) % 9) + 1;

      if (increment > 8) {
        // tried all digits in this cell, backtrack to previous cell
        cellSeed[r][c][1] = 0;

        [r, c] = decrementColumn(r, c);
        this.removeDigit(r, c);
        cellSeed[r][c][1]++;
      } else if (!this.canPlaceCoordinate(r, c, candidate)) {
        cellSeed[r][c][1]++;
      } else {
        this.placeDigit(r, c, candidate);
        [r, c] = incrementColumn(r, c);
      }
    }

    // remove 81 - n digits from board randomly
    for (let i = 0; i < 81 - n; i++) {
      do {
        [r, c] = [randomDigit(), randomDigit()];
      } while (this.board[r][c] === 0);

      this.removeDigit(r, c);
    }
  };
}

const randomDigit = () => {
  return Math.floor(Math.random() * 9);
};

const getRegion = (row: number, column: number): number =>
  Math.floor(row / 3) * 3 + Math.floor(column / 3);

const incrementColumn = (row: number, column: number): [number, number] =>
  column < 8 ? [row, column + 1] : [row + 1, 0];

const decrementColumn = (row: number, column: number): [number, number] =>
  column > 0 ? [row, column - 1] : [row - 1, 8];

export default SudokuBoardManager;
