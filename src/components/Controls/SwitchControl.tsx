import { Switch } from '@chakra-ui/react';

import { BoardState } from '../../lib/types';

type SwitchControlProps = {
  boardState: BoardState;
  visualSolveEnabled: boolean;
  toggleVisualSolve: () => void;
};

const SwitchControl = ({
  boardState,
  visualSolveEnabled,
  toggleVisualSolve,
}: SwitchControlProps) => (
  <Switch
    display='flex'
    color='white'
    fontWeight='bold'
    isChecked={visualSolveEnabled}
    onChange={toggleVisualSolve}
    isDisabled={boardState !== 'default'}
  >
    Show Solve?
  </Switch>
);

export default SwitchControl;
