import { StyledEditCell } from './EditCell.styles';

type EditCellProps = {
  row: number;
  column: number;
  digit: number;
  updateCell: (row: number, column: number, digit: number) => void;
  clearMessage: () => void;
};

const EditCell = ({
  row,
  column,
  digit,
  updateCell,
  clearMessage,
}: EditCellProps) => {
  const onTextChange = (text: string): void => {
    clearMessage();
    const char = text.charAt(text.length - 1);

    // match a single digit or an empty string
    if (/^[1-9]$|^$/.test(char)) {
      updateCell(row, column, parseInt(char) || 0);
    }
  };

  return (
    <StyledEditCell row={row} column={column}>
      <input
        type='text'
        value={digit || ''}
        onChange={(e) => onTextChange(e.target.value)}
        onBlur={() => clearMessage()}
        inputMode='numeric'
      />
    </StyledEditCell>
  );
};

export default EditCell;
