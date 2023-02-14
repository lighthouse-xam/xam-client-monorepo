import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home, Login, Join, Verify } from './pages';
import { FeedWriteScreen } from './pages/feedWrite';

function App() {
  const router = createBrowserRouter([
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
      path: '/verify/:code',
      element: <Verify />,
    },
    { path: '', element: <FeedWriteScreen /> },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
