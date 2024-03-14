import React from 'react';
import Login from '../pages/login';
import SignUp from '../pages/signUp';
import AcceptInvitation from '../pages/acceptInvitation';
import CompanyLanding from '../pages/companyLanding';
import ProgramDetails from '../pages/programDetails';
import Dashboard from '../pages/dashboard';

export const PublicRoutes = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: '/users/invitation/accept',
    element: <AcceptInvitation />
  },
];

export const CoachRoutes = [
  {
    path: 'dashboard',
    element: <Dashboard />,
  }
];

export const EmployeeRoutes = [
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
  {
    path: 'company/:company_slug',
    element: <CompanyLanding />
  },
  {
    path: 'company/:company_slug/program/:program_slug',
    element: <ProgramDetails />
  }
];
