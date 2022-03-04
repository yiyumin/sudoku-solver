import { useState } from 'react';

import InstructionModal from './InstructionModal';
import { pages } from './Pages';

const Instructions = () => {
  const [page, setPage] = useState(0);

  const prevPage = () => {
    setPage((currPage) => (currPage + pages.length - 1) % pages.length);
  };

  const nextPage = () => {
    setPage((currPage) => (currPage + 1) % pages.length);
  };

  return (
    <InstructionModal
      header={pages[page].header}
      prevPage={prevPage}
      nextPage={nextPage}
    >
      {pages[page].content}
    </InstructionModal>
  );
};

export default Instructions;
