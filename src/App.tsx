import { Board } from './components/Board';

export const App = () => {
  return (
    <div className="grid grid-flow-row place-items-center landscape:mt-4  mt-16 md:mt-32">
      <section className="landscape:hidden landscape:lg:block mb-12 text-center text-3xl md:text-5xl">
        <h1>Tic Tac Toe</h1>
      </section>
      <Board />
    </div>
  );
};
