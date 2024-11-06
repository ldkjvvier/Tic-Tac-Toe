import { createBrowserRouter } from 'react-router-dom';
import { SelectMode, LocalGameBoard, BotGameWrapper } from '@/components';

const routerConfig = [
  { path: '/', element: <SelectMode /> },
  { path: '/local', element: <LocalGameBoard /> },
  { path: '/bot/:difficulty', element: <BotGameWrapper /> },
  {
    path: '*',
    element: (
      <>
        <h1 className="text-3xl font-bold text-white">404 Not Found</h1>
        <p className="text-white">The page you are looking for does not exist.</p>
      </>
    )
  }
];

// Añadir basename al crear el router
export const router = createBrowserRouter(routerConfig, { basename: '/Tic-Tac-Toe' });
