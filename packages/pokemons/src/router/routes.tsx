import React from 'react';

import PrivateRoute from 'auth/PrivateRoute';


const routes = () => {
  return [
    {
      path: '/pokemons',
      async lazy() {
        let { default: Pokemons } = await import("../views/Pokemons");

        return { element: (
          <PrivateRoute>
            <Pokemons />
          </PrivateRoute>
        ) };
      }
    },
  ];
};

export default routes;
