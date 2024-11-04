import { useState } from 'react';
import { LocalGameBoard } from './components/localGameBoard';
import { SelectMode } from './components/SelectMode';
import { Mode } from './models/types';

export const App = () => {
  // Estado para manejar el modo de juego
  const [gameMode, setGameMode] = useState<Mode>(null);

  // Función para manejar la selección del modo de juego
  const handleModeSelection = (mode: Mode): void => {
    setGameMode(mode);
  };
  return (
    <div className="grid grid-flow-row place-items-center h-full flex-1">
      <section className="landscape:hidden landscape:lg:block mb-12 text-center text-3xl md:text-5xl">
        <h1>Tic Tac Toe</h1>
      </section>
      {!gameMode && <SelectMode onModeSelection={handleModeSelection} />}

      {gameMode === 'local' && <LocalGameBoard />}
    </div>
  );
};
