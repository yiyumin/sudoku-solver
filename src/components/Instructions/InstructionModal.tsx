import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  VStack,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    tranition: {
      duration: '0.1',
      type: 'spring',
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
    tranition: {
      duration: '0.3',
    },
  },
};

type ModalProps = {
  header: string;
  children: React.ReactNode;
  prevPage: () => void;
  nextPage: () => void;
};

const InstructionModal = ({
  header,
  children,
  prevPage,
  nextPage,
}: ModalProps) => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xl'>
      <ModalOverlay />

      <ModalContent
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing='7'>{children}</VStack>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button onClick={prevPage}>
              <ArrowBackIcon />
            </Button>
            <Button onClick={nextPage}>
              <ArrowForwardIcon />
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InstructionModal;
