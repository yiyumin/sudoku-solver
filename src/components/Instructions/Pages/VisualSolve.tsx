import { Text, Tooltip } from '@chakra-ui/react';

import Media from '../Media';

import visualSolveWebm from '../../../assets/videos/visual_solve.webm';
import visualSolveMp4 from '../../../assets/videos/visual_solve.mp4';

const VisualSolve = () => (
  <>
    <Text>
      Or, toggle on the 'Show Solve?' switch before clicking 'Solve' to see{' '}
      <Tooltip
        label='*This application utilizes a backtracking algorithm to determine a
      solution to the puzzle.'
      >
        <Text as='span' textDecoration='underline dotted'>
          how
        </Text>
      </Tooltip>{' '}
      the puzzle is being solved under the hood.
    </Text>

    <Media>
      <Media.Gif>
        <Media.GifSource src={visualSolveWebm} type='video/webm' />
        <Media.GifSource src={visualSolveMp4} type='video/mp4' />
      </Media.Gif>
    </Media>

    <Text fontSize='sm'>
      Play around with the slider that appears below to adjust the speed of the
      solve.
    </Text>
  </>
);

export default VisualSolve;
