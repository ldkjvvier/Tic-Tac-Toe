import { useSelector } from 'react-redux';
import { Cross, Circle } from './icons';
interface ScoreBoardProps {
  children: React.ReactNode;
}
interface GameState {
  user: {
    Xwinner: number;
    Owinner: number;
    draw: number;
  };
}

export const ScoreBoard = ({ children }: ScoreBoardProps) => {
  const user = useSelector((state: GameState) => state.user);

  return (
    <>
      <section className="grid grid-cols-3 justify-items-center md:text-2xl">
        <div className="text-center flex items-center">
          <span className="w-4 h-4 inline-block">
            <Cross />
          </span>
          <span className="ml-1">JUGADOR:</span>
          <span className="ml-3">{user.Xwinner}</span>
        </div>
        <div className="text-center flex flex-col items-center">
          <p>-</p>
          <span>{user.draw}</span>
        </div>
        <div className="text-center flex items-center">
          <span className="w-4 h-4 inline-block">
            <Circle />
          </span>
          <span className="ml-1">JUGADOR:</span>
          <span className="ml-3">{user.Owinner}</span>
        </div>
      </section>
      <div>{children}</div>
    </>
  );
};
