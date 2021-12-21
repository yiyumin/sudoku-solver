import styled from 'styled-components';

import { CellStateColor, CellCss } from '../styles';

const StyledEditCell = styled.div`
  ${CellCss};

  &:hover {
    background-color: rgba(${CellStateColor['default']}, 0.5);
    }

  &:focus-within {
    background-color: rgba(${CellStateColor['default']}, 0.25);
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0;
    text-align: center;
    border-width: 0;
    background-color: inherit;

    color: inherit;
    font: inherit;
    appearance: none;
    border-radius: 0;

    outline: none;
  }
`;

export { StyledEditCell };