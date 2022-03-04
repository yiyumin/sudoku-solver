import { Box, IconButton } from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';

type HelpButtonProps = {
  onClick: () => void;
};

const HelpButton = ({ onClick }: HelpButtonProps) => {
  return (
    <Box pos='fixed' top={[5, 8, 12]} right={[5, 8, 16]}>
      <IconButton
        aria-label='View instructions'
        onClick={onClick}
        fontSize='2xl'
        icon={<QuestionIcon />}
      />
    </Box>
  );
};

export default HelpButton;
