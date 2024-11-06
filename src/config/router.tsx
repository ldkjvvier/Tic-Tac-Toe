import { createBrowserRouter } from 'react-router-dom';
import { SelectMode, LocalGameBoard, BotGameWrapper } from '@/components';
const routerConfig = [
  { path: '/Tic-Tac-Toe', element: <SelectMode /> },
  { path: '/Tic-Tac-Toe/local', element: <LocalGameBoard /> },
  { path: '/Tic-Tac-Toe/bot/:difficulty', element: <BotGameWrapper /> },
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

export const router = createBrowserRouter(routerConfig);
