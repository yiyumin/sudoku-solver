import { css } from 'styled-components';

import { CellState } from '../../../lib/types';
import { borderColor } from '../../shared/styles';

const CellStateColor: { [key in CellState]: string } = {
  default: '227, 230, 217',
  place_digit: '144, 238, 144',
  skip_over_digit: '251, 236, 93',
  backtrack: '248, 131, 121',
};

export type CellCssProps = {
  row: number;
  column: number;
};

const CellCss = css<CellCssProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(227, 230, 217, 0.749);

  font-size: 1.25em;
  font-weight: 500;

  border: 1px solid ${borderColor};
  border-bottom: ${(props) =>
    props.row === 2 || props.row === 5
      ? `3px solid ${borderColor}`
      : `1px solid ${borderColor}`};
  border-right: ${(props) =>
    props.column === 2 || props.column === 5
      ? `3px solid ${borderColor}`
      : `1px solid ${borderColor}`};
`;

export { CellStateColor, CellCss };
