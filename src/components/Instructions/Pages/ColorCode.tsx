import { Flex, Text, Box, AspectRatio } from '@chakra-ui/react';

const ColorCode = () => (
  <>
    <Text>
      While solving with the 'Show Solve?' mode toggled on, you may notice that
      cells are colored in a certain way.
    </Text>

    <Flex alignItems='center' w='full' justifyContent='space-between'>
      <AspectRatio w='15%' ratio={1 / 1}>
        <Box bgColor='#90ee90' w='full' h='full'>
          7
        </Box>
      </AspectRatio>
      <Text w='75%' fontSize='sm'>
        Green indicates that a possible digit has been found! Place digit and
        move on to the next cell.
      </Text>
    </Flex>

    <Flex alignItems='center' w='full' justifyContent='space-between'>
      <AspectRatio w='15%' ratio={1 / 1}>
        <Box bgColor='#fbeb5d' w='full' h='full'>
          8
        </Box>
      </AspectRatio>
      <Text w='75%' fontSize='sm'>
        Yellow indicates that the digit conflicts with another cell in this row,
        column, or region. Try next digit.
      </Text>
    </Flex>

    <Flex alignItems='center' w='full' justifyContent='space-between'>
      <AspectRatio w='15%' ratio={1 / 1}>
        <Box bgColor='#f88479' w='full' h='full'>
          9
        </Box>
      </AspectRatio>
      <Text w='75%' fontSize='sm'>
        Red indicates that no digits can go into this cell. Backtrack.
      </Text>
    </Flex>
  </>
);

export default ColorCode;
