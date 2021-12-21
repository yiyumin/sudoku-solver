import { Text, Image } from '@chakra-ui/react';

const HowToInput = () => (
  <>
    <Text>
      Start by entering digits into the board. Click on a cell and enter a digit between 1 and 9.
    </Text>
    <Image w='60%' src='https://via.placeholder.com/200.png' alt='placeholder'/>
    <Text fontSize='xs' color='tomato'>
      *Digits may not be duplicated across any row, column, or region.
    </Text>
  </>
);

export default HowToInput;