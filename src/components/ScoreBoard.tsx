import { useSelector } from 'react-redux';

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
        <div className="text-center">
          <p>JUGADOR (x)</p>
          <span>{user.Xwinner}</span>
        </div>
        <div>
          <p>-</p>
          <span>{user.draw}</span>
        </div>
        <div className="text-center">
          <p>JUGADOR (O)</p>
          <span>{user.Owinner}</span>
        </div>
      </section>
      <section className="flex justify-center gap-3 mt-6">{children}</section>
    </>
  );
};
