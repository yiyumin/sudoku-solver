import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';

import SudokuSolver from './components/SudokuSolver';
import Instructions from './components/Instructions/Instructions';

const App = () => (
  <ChakraProvider theme={theme}>
    <SudokuSolver />
    <Instructions />
  </ChakraProvider>
);

export default App;
