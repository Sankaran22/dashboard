import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
// import SimpleLayout from './layouts/simple';
import AllCases from './sections/@dashboard/AllCases';
//
// import DashboardAppPage from './pages/DashboardAppPage';


// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <AllCases /> },
        { path: 'user' },
        { path: 'products'},
        { path: 'blog'},
      ],
    },
  ]);

  return routes;
}
