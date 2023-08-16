import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routes from './routes';
import authRoutes from 'auth/routes';
import { RouteFallback } from 'auth/RouteFallback';

const pokemonsRoutes = routes();
const internalAuthRoutes = authRoutes('/pokemons');
const fullRoutes = internalAuthRoutes.concat(pokemonsRoutes);

const Router = () => {
  const browserRouter = createBrowserRouter(fullRoutes);

  return (
    <RouterProvider router={browserRouter} fallbackElement={<RouteFallback />} />
  );
};

export default Router;
