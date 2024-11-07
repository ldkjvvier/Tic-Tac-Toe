import { createBrowserRouter } from 'react-router-dom';
import { SelectMode, LocalGameBoard, BotGameWrapper, Layout } from '@/components';

const routerConfig = [
  { path: '/', element: <SelectMode /> },
  {
    path: '/local',
    element: (
      <Layout>
        <LocalGameBoard />
      </Layout>
    )
  },
  {
    path: '/bot/:difficulty',
    element: (
      <Layout>
        <BotGameWrapper />
      </Layout>
    )
  },
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
export const router = createBrowserRouter(routerConfig);
