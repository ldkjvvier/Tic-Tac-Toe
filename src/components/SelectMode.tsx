import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { renameUser } from '@/redux/localGameSlice';
import { Difficulty } from '@/models/types';
import { Modal } from './modal';
import { useNavigate } from 'react-router-dom';
export const SelectMode = () => {
  return (
    <div className="grid grid-flow-row place-items-center h-full flex-1">
      <div
        className="border border-transparent p-6 rounded-lg bg-secondary-bg max-w-md mx-auto"
        style={{
          boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.1), 0 0 25px 5px rgba(27, 38, 59, 0.5)'
        }}
      >
        <header className="w-full">
          <h2 className="text-3xl font-bold text-white mb-4">Tic Tac Toe</h2>
        </header>

        <section className="w-full flex flex-col gap-3">
          <Modal component={<LocalMode />}>
            <span>Jugar localmente</span>
          </Modal>
          <Modal component={<BotMode />}>
            <span>Jugar contra la máquina</span>
          </Modal>
        </section>
      </div>
    </div>
  );
};

export const BotMode = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value as Difficulty);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.location.href = `/bot/${difficulty}`;
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-flow-row gap-3 bg-primary-bg p-4 py-12">
        <section>
          <label htmlFor="difficulty" className="text-white">
            Dificultad
          </label>
          <select
            className="mt-2 p-3 w-full border-2 border-gray-500 rounded-md bg-[#1a2233] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="easy"
            onChange={handleSelect}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            {/* // TODO: NOT IMPLEMENTED */}
            {/* <option value="hard">Hard</option> */}
          </select>
        </section>
      </div>
      <footer className="p-4 border-t border-gray-400 flex w-full justify-end">
        <button
          type="submit"
          className="p-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
        >
          Start Game
        </button>
      </footer>
    </form>
  );
};

export const LocalMode = () => {
  const dispatch = useDispatch();
  const [user1, setUser1] = useState<string>('');
  const [user2, setUser2] = useState<string>('');

  const handleRename = (e: React.ChangeEvent<HTMLInputElement>, user: 'user1' | 'user2') => {
    if (user === 'user1') {
      setUser1(e.target.value);
    } else {
      setUser2(e.target.value);
    }
    dispatch(renameUser({ user, name: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const navigate = useNavigate();
    if (user1 && user2) {
      navigate('/local'); // Redirecciona sin recargar
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-flow-row gap-3 bg-primary-bg p-4 py-12">
        <section>
          <label htmlFor="user1" className="text-white">
            Player 1
          </label>
          <input
            className="mt-2 p-3 w-full border-2 border-gray-500 rounded-md bg-[#1a2233] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Player 1"
            id="user1"
            value={user1}
            onChange={(e) => handleRename(e, 'user1')}
            required
          />
        </section>
        <section>
          <label htmlFor="user2" className="text-white">
            Player 2
          </label>

          <input
            className="mt-2 p-3 w-full border-2 border-gray-500 rounded-md bg-[#1a2233] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="user2"
            placeholder="Player 2"
            value={user2}
            onChange={(e) => handleRename(e, 'user2')}
            required
          />
        </section>
      </div>

      <footer className="p-4 border-t border-gray-400 flex w-full justify-end">
        <button
          type="submit"
          className="p-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
        >
          Start Game
        </button>
      </footer>
    </form>
  );
};
