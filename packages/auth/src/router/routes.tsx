import React from 'react';

import PrivateRoute from '../components/PrivateRoute';
import { useRouteError } from 'react-router-dom';

export function RootErrorBoundary() {
  let error = useRouteError() as Error;
  return (
    <div>
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <button onClick={() => (window.location.href = '/')}>
        Click here to reload the app
      </button>
    </div>
  );
}

const routes = (redirectTo = '/authenticated') => {
  return [
    {
      path: '/login',
      errorElement: <RootErrorBoundary />,
      async lazy() {
        let { default: Login } = await import('../views/Login');
        console.log(Login);

        return { element: <Login redirectTo={redirectTo} /> };
      },
    },
    {
      path: '/authenticated',
      errorElement: <RootErrorBoundary />,
      async lazy() {
        let { default: Authenticated } = await import('../views/Authenticated');
        return {
          element: (
            <PrivateRoute>
              <Authenticated />
            </PrivateRoute>
          ),
        };
      },
    },
    {
      path: '*',
      errorElement: <RootErrorBoundary />,
      async lazy() {
        let { default: Login } = await import('../views/Login');
        return { element: <Login redirectTo={redirectTo} /> };
      },
    },
  ];
};

export default routes;
