import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from './layout/Layout';
import { Home, Login, Join, EmailCheck } from './pages';
import { FindUser } from './pages/user/FindUser';

function App() {
  const router = createBrowserRouter([
    {
      path: '/layout',
      element: <Layout />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/join',
      element: <Join />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/email',
      element: <EmailCheck />,
    },
    {
      path: '/find',
      element: <FindUser />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
