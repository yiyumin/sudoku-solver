import { ChakraProvider, useDisclosure } from '@chakra-ui/react';

import theme from './theme';

import SudokuSolver from './components/SudokuSolver';
import InstructionModal from './components/Instructions/InstructionModal';
import HelpButton from './components/Instructions/HelpButton';

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <ChakraProvider theme={theme}>
      <SudokuSolver />
      <HelpButton onClick={onOpen} />
      <InstructionModal isOpen={isOpen} closeModal={onClose} />
    </ChakraProvider>
  );
};

export default App;
