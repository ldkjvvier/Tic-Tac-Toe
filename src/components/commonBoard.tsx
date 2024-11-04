// CommonBoard.tsx
import { Square } from './Square';
import { ScoreBoard } from './ScoreBoard';
import { Turns } from '@/utils';
import { BoardType, GameState } from '@/models/types';
import { Circle, Cross } from './icons';

interface CommonBoardProps {
  board: BoardType[];
  turn: string;
  onUpdateBoard: (index: number) => void;
  isGameFinish: boolean;
  onRestart: () => void;
  onRestartScoreBoard: () => void;
  gameState: GameState;
}

export const CommonBoard: React.FC<CommonBoardProps> = ({
  board,
  onUpdateBoard,
  isGameFinish,
  onRestart,
  onRestartScoreBoard,
  gameState
}: CommonBoardProps) => {
  return (
    <>
      <section className="flex justify-center">
        <div className="grid grid-cols-3 grid-rows-3">
          {board.map((_, index) => (
            <Square key={index} index={index} updateBoard={() => onUpdateBoard(index)}>
              <span className="p-3 md:p-6">
                {board[index] === Turns.X && <Cross />}
                {board[index] === Turns.O && <Circle />}
              </span>
            </Square>
          ))}
        </div>
      </section>
      <ScoreBoard state={gameState}>
        {isGameFinish && (
          <button className="bg-black fixed h-screen w-screen top-0 left-0 bg-opacity-30" onClick={onRestart} />
        )}

        <button
          className="border transition hover:bg-gray-950 z-50 text-white font-bold py-2 px-4 rounded"
          onClick={onRestartScoreBoard}
        >
          Reiniciar ScoreBoard
        </button>
      </ScoreBoard>
    </>
  );
};
