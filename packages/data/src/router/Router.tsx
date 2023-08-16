import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import routes from './routes';
import authRoutes from 'auth/routes';
import { RouteFallback } from 'auth/RouteFallback';

const dataRoutes = routes();
const internalAuthRoutes = authRoutes('/search');
const fullRoutes = internalAuthRoutes.concat(dataRoutes);

const Router = () => {
  const browserRouter = createBrowserRouter(fullRoutes);

  return (
    <RouterProvider
      router={browserRouter}
      fallbackElement={<RouteFallback />}
    />
  );
};

export default Router;
