import { Text, Image } from '@chakra-ui/react';

const RandomBoard = () => (
  <>
    <Text>
      Alternatively, you can click on 'Random Board' to have the application
      generate a board for you.
    </Text>
    <Image
      w='60%'
      src='https://via.placeholder.com/200.png'
      alt='placeholder'
    />
  </>
);

export default RandomBoard;
