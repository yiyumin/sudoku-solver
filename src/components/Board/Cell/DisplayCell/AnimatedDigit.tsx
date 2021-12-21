import { motion, AnimatePresence } from 'framer-motion';

type AnimatedDigitProps = {
  digit: number;
};

const AnimatedDigit = ({ digit }: AnimatedDigitProps) => {
  return (
    <AnimatePresence>
      {digit && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
        >
          {digit}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedDigit;
