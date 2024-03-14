import React from 'react';
import {
  createBrowserRouter,
} from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './route';
import { PublicRoutes, CoachRoutes, EmployeeRoutes } from './routes';
import ErrorBoundary from '../constants/ErrorBoundary'
import PageNotFound from '../constants/PageNotFound';

const router = createBrowserRouter([
  {
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <PublicRoute />,
        children: PublicRoutes
      },
      {
        path: 'coach',
        element: <PrivateRoute type='coach' />,
        children: CoachRoutes
      },
      {
        path: 'employee',
        element: <PrivateRoute type='employee' />,
        children: EmployeeRoutes
      }
    ]
  },
  {
    path: '*',
    element: <PageNotFound />
  }
]);

export default router