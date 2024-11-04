import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { renameUser } from '@/redux/localGameSlice';
import { Mode } from '@/models/types';

interface SelectModeProps {
  onModeSelection: (mode: Mode) => void;
}

export const SelectMode = ({ onModeSelection }: SelectModeProps) => {
  const dispatch = useDispatch();
  const [user1, setUser1] = useState<string>('');
  const [user2, setUser2] = useState<string>('');
  const [gameMode, setGameMode] = useState<Mode>('local');

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGameMode(e.target.value as Mode);
  };

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
    onModeSelection(gameMode);
  };

  return (
    <div className="flex flex-col items-center border p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Select Mode</h2>
      <select
        className="mt-4 p-3 w-full border-2 border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleSelect}
        value={'local'}
      >
        <option value="local">Local</option>
        <option value="bot">Bot</option>
      </select>
      <form onSubmit={handleSubmit} className="w-full">
        {gameMode === 'local' && (
          <>
            <input
              className="mt-4 p-3 w-full border-2 border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Player 1"
              value={user1}
              onChange={(e) => handleRename(e, 'user1')}
              required
            />
            <input
              className="mt-4 p-3 w-full border-2 border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Player 2"
              value={user2}
              onChange={(e) => handleRename(e, 'user2')}
              required
            />
          </>
        )}
        {gameMode === 'bot' && (
          <>
            <input
              className="mt-4 p-3 w-full border-2 border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Player 1"
              value={user1}
              onChange={(e) => handleRename(e, 'user1')}
              required
            />
            <select
              className="mt-4 p-3 w-full border-2 border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="easy"
            >
              <option value="easy">Easy</option>
              {/* // TODO: NOT IMPLEMENTED */}
              {/* <option value="medium">Medium</option>
              <option value="hard">Hard</option> */}
            </select>
          </>
        )}
        <button
          type="submit"
          className="mt-6 w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
        >
          Start
        </button>
      </form>
    </div>
  );
};
