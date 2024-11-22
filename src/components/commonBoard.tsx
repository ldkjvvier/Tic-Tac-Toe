// CommonBoard.tsx
import { ScoreBoard } from './ScoreBoard';
import { TurnsValue } from '@/utils';
import { BoardType, GameState, Turns } from '@/models/types';
import { Circle, Cross } from './icons';
import '../Board.css';

interface CommonBoardProps {
  board: BoardType[];
  turn: Turns;
  onUpdateBoard: (index: number) => void;
  isGameFinish: boolean;
  onRestart: () => void;
  onRestartScoreBoard: () => void;
  gameState: GameState;
  blockTurn?: boolean;
}

export const CommonBoard: React.FC<CommonBoardProps> = ({
  board,
  onUpdateBoard,
  isGameFinish,
  onRestart,
  onRestartScoreBoard,
  gameState,
  blockTurn = false
}: CommonBoardProps) => {
  return (
    <>
      <section className="flex justify-center">
        <div className="grid grid-cols-3 grid-rows-3">
          {board.map((_, index) => (
            <div
              className={`flex items-center justify-center w-[85px] h-[85px] xs:w-[110px] xs:h-[110px] md:w-[160px] md:h-[160px] font-bold text-6xl md:text-8xl square square-${index}`}
              onClick={
                !blockTurn
                  ? () => {
                      onUpdateBoard(index);
                    }
                  : undefined
              }
              key={index}
            >
              <span className="p-3 md:p-6">
                {board[index] === TurnsValue.X && <Cross />}
                {board[index] === TurnsValue.O && <Circle />}
              </span>
            </div>
          ))}
        </div>
      </section>
      <ScoreBoard state={gameState}>
        {isGameFinish && (
          <>
            <button className="bg-black fixed h-screen w-screen top-0 left-0 bg-opacity-30 z-40" onClick={onRestart}>
              <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
                <div className="text-center">
                  {/* Texto del ganador */}
                  {
                    <h2 className="text-3xl font-bold text-white">
                      {gameState.winner ? `¡${gameState.winner} ha ganado!` : '¡Empate!'}
                    </h2>
                  }
                </div>
              </div>
            </button>
          </>
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
