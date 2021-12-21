import Introduction from './Introduction';
import HowToInput from './HowToInput';
import RandomBoard from './RandomBoard';
import QuickSolve from './QuickSolve';
import VisualSolve from './VisualSolve';
import ColorCode from './ColorCode';

const pages = [{
  header: 'Welcome to Sudoku Solver!',
  content: <Introduction />
}, {
  header: 'How to Begin',
  content: <HowToInput />
}, {
  header: 'Random Board',
  content: <RandomBoard />
}, {
  header: 'Quick Solve',
  content: <QuickSolve />
}, {
  header: 'Visual Solve',
  content: <VisualSolve />
}, {
  header: 'Color Code',
  content: <ColorCode />
}];

export { pages };