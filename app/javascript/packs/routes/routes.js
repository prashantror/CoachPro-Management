import React from 'react';
import Login from '../pages/login';
import SignUp from '../pages/signUp';
import CoachHome from '../pages/coach/coachHome';
import AcceptInvitation from '../pages/acceptInvitation';
import CompanyLanding from '../pages/companyLanding';

export const PublicRoutes = [
  {
    path:'/',
    element: <p>Home</p>,
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
    path: '/accept-invitation',
    element: <AcceptInvitation />
  }
];

export const CoachRoutes = [
  {
    path: "coach",
    element: <CoachHome />,
  },
];

export const EmployeeRoutes = [
  {
    path: 'company',
    element: <CompanyLanding />,
  },
  {
    path: 'company/:company_slug',
    element: <CompanyLanding />
  }
];
