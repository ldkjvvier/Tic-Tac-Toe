import '../Board.css';

interface SquareProps {
  children: React.ReactNode;
  updateBoard: (index: number) => void;
  index: number;
}

export const Square = ({ children, updateBoard, index }: SquareProps) => {
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div
      className={`flex items-center justify-center w-[85px] h-[85px] xs:w-[110px] xs:h-[110px] md:w-[160px] md:h-[160px] font-bold text-6xl md:text-8xl square square-${index}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};
