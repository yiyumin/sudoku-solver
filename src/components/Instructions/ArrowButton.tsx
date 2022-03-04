import { Button } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

type ArrowButtonProps = {
  direction: 'back' | 'forward';
  isDisabled: boolean;
  onClick: () => void;
};

const ArrowButton = ({ direction, isDisabled, onClick }: ArrowButtonProps) => {
  return (
    <Button isDisabled={isDisabled} onClick={onClick}>
      {direction === 'back' ? <ArrowBackIcon /> : <ArrowForwardIcon />}
    </Button>
  );
};

export default ArrowButton;
