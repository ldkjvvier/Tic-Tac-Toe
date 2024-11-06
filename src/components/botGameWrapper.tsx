import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { BotGameBoard } from './botGameBoard';
import { Difficulty } from '@/models/types';

export const BotGameWrapper: React.FC = () => {
  const { difficulty } = useParams<{ difficulty: string }>();

  // Validar si `difficulty` es un valor válido de `Difficulty`
  const isValidDifficulty = ['easy', 'medium', 'hard'].includes(difficulty as Difficulty);

  return isValidDifficulty ? <BotGameBoard difficulty={difficulty as Difficulty} /> : <Navigate to="/" replace />;
};
