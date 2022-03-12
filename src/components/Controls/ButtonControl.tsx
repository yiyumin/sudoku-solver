import { Button, ButtonGroup } from '@chakra-ui/react';

import { BoardState } from '../../lib/types';

type ButtonControlProps = {
  boardState: BoardState;
  generateBoard: () => void;
  solve: () => void;
  pause: () => void;
  resume: () => void;
  clear: () => void;
};

const ButtonControl = ({
  boardState,
  generateBoard,
  solve,
  pause,
  resume,
  clear,
}: ButtonControlProps) => {
  return (
    <>
      <ButtonGroup variant='solid' size='sm' isAttached>
        <Button
          onClick={generateBoard}
          isDisabled={boardState !== 'default'}
          outline='solid 1px darkslategray'
        >
          Random Board
        </Button>
        <Button
          onClick={solve}
          isDisabled={boardState !== 'default'}
          outline='solid 1px darkslategray'
        >
          Solve
        </Button>
        <Button
          onClick={boardState === 'solving' ? pause : resume}
          isDisabled={boardState !== 'solving' && boardState !== 'paused'}
          outline='solid 1px darkslategray'
        >
          {boardState === 'solving' ? 'Pause' : 'Resume'}
        </Button>
        <Button onClick={clear} outline='solid 1px darkslategray'>
          Reset
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ButtonControl;
