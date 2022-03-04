import React from 'react';

import { CellState } from '../../../../lib/types';
import { StyledDisplayCell } from './DisplayCell.styles';
import AnimatedDigit from './AnimatedDigit';

type DisplayCellProps = {
  row: number;
  column: number;
  digit: number;
  state: CellState;
};

const DisplayCell = ({ row, column, digit, state }: DisplayCellProps) => (
  <StyledDisplayCell row={row} column={column} state={state}>
    {state === 'default' ? <>{digit || ''}</> : <AnimatedDigit digit={digit} />}
  </StyledDisplayCell>
);

export default React.memo(DisplayCell);
