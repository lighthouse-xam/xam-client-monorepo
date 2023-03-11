import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import * as auth from '@screens/auth';
import * as common from '@screens/common';
import * as main from '@screens/main';

export function Router() {
  const router = createBrowserRouter([
    { path: '*', element: <common.NotFoundScreen /> },
    { path: '/', element: <main.HomeScreen /> },

    { path: 'auth/login', element: <auth.LoginScreen /> },

    { path: 'auth/login', element: <auth.LoginScreen /> },
    { path: 'auth/signup', element: <auth.SignupScreen /> },
    { path: 'auth/signup/success', element: <auth.SignupSuccessScreen /> },
  ]);

  return <RouterProvider router={router} />;
}
