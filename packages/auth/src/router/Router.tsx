import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routes from './routes';
import { RouteFallback } from '../components/RouteFallback';

const authRoutes = routes();

const Router: React.FC = () => {
  const browserRouter = createBrowserRouter(authRoutes);

  return (
    <RouterProvider
      router={browserRouter}
      fallbackElement={<RouteFallback />}
    />
  );
};

export default Router;
