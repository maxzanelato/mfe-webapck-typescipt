import React from 'react';

import PrivateRoute from 'auth/PrivateRoute';

const routes = () => {
  return [
    {
      path: '/search',
      async lazy() {
        let { default: Search } = await import("../views/Search");

        return { element: (
          <PrivateRoute>
            <Search />
          </PrivateRoute>
        ) };
      }
    },
  ];
};

export default routes;
