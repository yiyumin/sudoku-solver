import { Flex, Text, Image } from '@chakra-ui/react';

const ColorCode = () => (
  <>
    <Text>
      While solving with the 'Show Solve?' mode toggled on, you may notice that cells are colored in a certain way.
    </Text>

    <Flex alignItems='center' justifyContent='space-between'>
      <Image w='15%' src='https://via.placeholder.com/200.png/90ee90' alt='success'/>
      <Text w='75%' fontSize='sm'>
        Green indicates that a possible digit has been found! Place digit and move on to the next cell.
      </Text>
    </Flex>

    <Flex alignItems='center' justifyContent='space-between'>
      <Image w='15%' src='https://via.placeholder.com/200.png/fbeb5d' alt='skip'/>
      <Text w='75%' fontSize='sm'>
        Yellow indicates that the digit conflicts with another cell in this row, column, or region. Try next digit.
      </Text>
    </Flex>

    <Flex alignItems='center' justifyContent='space-between'>
      <Image w='15%' src='https://via.placeholder.com/200.png/f88479' alt='backtrack'/>
      <Text w='75%' fontSize='sm'>
        Red indicates that no digits can go into this cell. Backtrack.
      </Text>
    </Flex>
  </>
);

export default ColorCode;