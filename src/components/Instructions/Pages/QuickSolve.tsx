import { Text } from '@chakra-ui/react';

import Media from '../Media';

import quickSolveWebm from '../../../assets/videos/quick_solve.webm';
import quickSolveMp4 from '../../../assets/videos/quick_solve.mp4';

const QuickSolve = () => (
  <>
    <Text>Next, click 'Solve' to instantly solve your sudoku puzzle!</Text>
    <Media>
      <Media.Gif>
        <Media.GifSource src={quickSolveWebm} type='video/webm' />
        <Media.GifSource src={quickSolveMp4} type='video/mp4' />
      </Media.Gif>
    </Media>
  </>
);

export default QuickSolve;
