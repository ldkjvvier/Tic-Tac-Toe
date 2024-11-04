import { useState } from 'react';
import { BotGameBoard, LocalGameBoard } from './components';
import { SelectMode } from './components/SelectMode';
import { Mode } from './models/types';

export const App = () => {
  // Estado para manejar el modo de juego
  const [gameMode, setGameMode] = useState<Mode>(null);

  // Función para manejar la selección del modo de juego
  const handleModeSelection = (mode: Mode): void => {
    setGameMode(mode);
  };
  if (!gameMode)
    return (
      <div className="flex flex-col h-full items-center justify-center">
        <section className="landscape:hidden landscape:lg:block mb-12 text-center text-3xl md:text-5xl">
          <h1>Tic Tac Toe</h1>
        </section>
        <SelectMode onModeSelection={handleModeSelection} />
      </div>
    );
  return (
    <div className="grid grid-flow-row place-items-center h-full flex-1">
      <section className="landscape:hidden landscape:lg:block mb-12 text-center text-3xl md:text-5xl">
        <h1>Tic Tac Toe</h1>
      </section>

      {gameMode === 'local' && <LocalGameBoard />}
      {gameMode === 'bot' && <BotGameBoard />}
    </div>
  );
};
