import { Flex, Text, Image } from '@chakra-ui/react';

const VisualSolve = () => (
  <>
    <Text>
      Alternatively, toggle on the 'Show Solve?' switch to see how the puzzle is
      being solved under the hood.
    </Text>

    <Flex w='100%' justifyContent='space-around'>
      <Image
        w='40%'
        src='https://via.placeholder.com/200.png'
        alt='placeholder'
      />
      <Image
        w='40%'
        src='https://via.placeholder.com/200.png'
        alt='placeholder'
      />
    </Flex>

    <Text>
      Play around with the slider that appears below to adjust the speed of the
      solve.
    </Text>

    <Text fontSize='xs'>
      *This application utilizes a backtracking algorithm to determine a
      solution to the puzzle.
    </Text>
  </>
);

export default VisualSolve;
