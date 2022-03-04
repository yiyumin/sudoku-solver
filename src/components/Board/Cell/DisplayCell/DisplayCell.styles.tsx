import styled from 'styled-components';

import { CellState } from '../../../../lib/types';
import { CellStateColor, CellCss, CellCssProps } from '../styles';

type StyledDisplayCellProps = CellCssProps & {
  state: CellState;
};

const StyledDisplayCell = styled.div<StyledDisplayCellProps>`
  ${CellCss};
  background-color: rgba(${(props) => CellStateColor[props.state]}, 0.75);
`;

export { StyledDisplayCell };
