import { useSelector } from 'react-redux';
import { Cross, Circle } from './icons';
interface ScoreBoardProps {
  children: React.ReactNode;
}

export const ScoreBoard = ({ children }: ScoreBoardProps) => {
  interface RootState {
    // TODO CHANGE THIS
    user: {
      Xwinner: number;
      draw: number;
      Owinner: number;
    };
  }

  const user = useSelector((state: RootState) => state.user);

  return (
    <>
      <section className="grid grid-cols-3 justify-items-center md:text-2xl mt-12 md:max-w-[65%] ">
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
      <section className="flex justify-center gap-3 mt-6">{children}</section>
    </>
  );
};
