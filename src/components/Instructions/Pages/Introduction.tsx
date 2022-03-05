import { Text } from '@chakra-ui/react';

import Media from '../Media';

import sudokuSolverImage from '../../../assets/images/sudoku_solver.webp';

const Introduction = () => (
  <>
    <Text>
      This quick tutorial will walk you through all the features of this
      application.
    </Text>

    <Media>
      <Media.Image src={sudokuSolverImage} alt='Sudoku Solver' />
    </Media>

    <Text align='center' fontSize='sm' fontStyle='italic'>
      Solve sudoku puzzles with backtracking!
    </Text>
  </>
);

export default Introduction;
