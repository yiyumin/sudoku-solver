import { Flex, Text, Image } from '@chakra-ui/react';

const Introduction = () => (
  <>
    <Text>
      This quick tutorial will walk you through all the features of this application.
    </Text>

    <Flex w='100%' justifyContent='space-around'>
      <Image w='40%' src='https://via.placeholder.com/200.png' alt='placeholder'/>
      <Image w='40%' src='https://via.placeholder.com/200.png' alt='placeholder'/>
    </Flex>
  </>
);

export default Introduction;