import { Board } from './components/Board';
import { SelectMode } from './components/SelectMode';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

export const App = () => {
  const state = useSelector((state: RootState) => state.game);

  return (
    <div className="grid grid-flow-row place-items-center h-full flex-1 ">
      <section className="landscape:hidden landscape:lg:block mb-12 text-center text-3xl md:text-5xl">
        <h1>Tic Tac Toe</h1>
      </section>
      {!state.isGameStarted ? <SelectMode /> : <Board />}
    </div>
  );
};
