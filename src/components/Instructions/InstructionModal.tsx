import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  VStack,
  ButtonGroup,
} from '@chakra-ui/react';

import ArrowButton from './ArrowButton';
import { pages } from './Pages';

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

type InstructionModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const InstructionModal = ({ isOpen, closeModal }: InstructionModalProps) => {
  const [page, setPage] = useState(0);

  const prevPage = () => {
    if (page < 1) return;
    setPage((currPage) => currPage - 1);
  };

  const nextPage = () => {
    if (page + 1 >= pages.length) return;
    setPage((currPage) => currPage + 1);
  };

  const onClose = () => {
    setPage(0);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xl'>
      <ModalOverlay />

      <ModalContent
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <ModalHeader>{pages[page].header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing='7' minHeight={[400, 450]}>
            {pages[page].content}
          </VStack>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <ArrowButton
              direction='back'
              isDisabled={page === 0}
              onClick={prevPage}
            />
            <ArrowButton
              direction='forward'
              isDisabled={page + 1 >= pages.length}
              onClick={nextPage}
            />
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InstructionModal;
