import { VStack, Stack } from '@chakra-ui/react';

import { BoardState } from '../../lib/types';
import ButtonControl from './ButtonControl';
import SwitchControl from './SwitchControl';
import SliderControl from './SliderControl';

type ControlsProps = {
  boardState: BoardState,
  visualSolveEnabled: boolean,
  toggleVisualSolve: () => void,
  buttonProps: {
    generateBoard: () => void,
    solve: () => void,
    pause: () => void,
    resume: () => void,
    clear: () => void
  },
  sliderProps: {
    solveSpeed: number,
    setSpeed: (sps: number) => void
  }
};

const Controls = ({ boardState, visualSolveEnabled, toggleVisualSolve, buttonProps, sliderProps }: ControlsProps) => {
  return (
    <VStack width='70vmin' mt='7' spacing='5'>
      <Stack width='100%' direction={['column', 'row']} alignItems='center' justifyContent='space-between'>
        <ButtonControl boardState={boardState} { ...buttonProps } />
        <SwitchControl boardState={boardState} visualSolveEnabled={visualSolveEnabled} toggleVisualSolve={toggleVisualSolve} />
      </Stack>

      {visualSolveEnabled && (
        <SliderControl { ...sliderProps } />
      )}
    </VStack>
  );
};

export default Controls;