import { BoardState, CellDigit } from '../../lib/types';

import { StyledBoard } from './Board.styles';

import DisplayCell from './Cell/DisplayCell/DisplayCell';
import EditCell from './Cell/EditCell/EditCell';

type BoardProps = {
  board: CellDigit[][];
  boardState: BoardState;
  updateCell: (row: number, column: number, digit: number) => void;
  clearMessage: () => void;
};

const Board = ({ board, boardState, updateCell, clearMessage }: BoardProps) => (
  <StyledBoard>
    {boardState === 'default'
      ? board.map((row, rowIdx) =>
          row.map((cell, columnIdx) => (
            <EditCell
              key={`${rowIdx}${columnIdx}`}
              row={rowIdx}
              column={columnIdx}
              digit={cell.digit}
              updateCell={updateCell}
              clearMessage={clearMessage}
            />
          ))
        )
      : board.map((row, rowIdx) =>
          row.map((cell, columnIdx) => (
            <DisplayCell
              key={`${rowIdx}${columnIdx}`}
              row={rowIdx}
              column={columnIdx}
              digit={cell.digit}
              state={cell.state}
            />
          ))
        )}
  </StyledBoard>
);

export default Board;
