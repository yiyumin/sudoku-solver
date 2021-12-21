import styled from 'styled-components';

import { BOARD_SIZE } from '../../lib/boardHelper';
import { borderColor } from '../shared/styles';

const StyledBoard = styled.div`
  display: grid;
  grid-template-rows: repeat(${BOARD_SIZE}, calc(70vmin / ${BOARD_SIZE}));
  grid-template-columns: repeat(${BOARD_SIZE}, 1fr);
  width: 70vmin;
  border: solid 3px ${borderColor};
`;

export { StyledBoard };