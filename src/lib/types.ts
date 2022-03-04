type BoardState = 'default' | 'solving' | 'finished' | 'paused';

type CellState = 'default' | 'place_digit' | 'skip_over_digit' | 'backtrack';

type UpdateFinishState = 'solved' | 'unsolvable';

type CellDigit = {
  digit: number;
  state: CellState;
};

type DigitUpdate = {
  row: number;
  column: number;
  digit: number;
  state: CellState;
};

type CellUpdate = DigitUpdate | UpdateFinishState;

export type { BoardState, CellState, CellDigit, CellUpdate };
