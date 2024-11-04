import { Cross, Circle } from './icons';
import { RootState } from '@/redux/store';

interface ScoreBoardProps {
  children: React.ReactNode;
  state: RootState['localGame'] | RootState['botGame'];
}

export const ScoreBoard = ({ children, state }: ScoreBoardProps) => {
  return (
    <>
      <section className="grid grid-cols-3 justify-items-center md:text-2xl">
        <div className="text-center flex items-center">
          <span className="w-4 h-4 inline-block">
            <Cross />
          </span>
          <span className="ml-1">{state.user1.name}:</span>
          <span className="ml-3">{state.user1.victories}</span>
        </div>
        <div className="text-center flex flex-col items-center">
          <p>-</p>
          <span>{state.draw}</span>
        </div>
        <div className="text-center flex items-center">
          <span className="w-4 h-4 inline-block">
            <Circle />
          </span>
          <span className="ml-1">{state.user2.name}:</span>
          <span className="ml-3">{state.user2.victories}</span>
        </div>
      </section>
      <div>{children}</div>
    </>
  );
};
