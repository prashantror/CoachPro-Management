import React from 'react';
import * as Pages from './../pages'

export const PublicRoutes = [
  {
    index: true,
    element: <p>Home</p>,
  },
  {
    path: "/login",
    element: <Pages.Login />,
  },
  {
    path: "/sign-up",
    element: <Pages.SignUp />,
  },
];

export const CoachRoutes = [
  {
    index: true,
    element: <p>Coach Home</p>,
  },
  {
    path: "/coach",
    element: <Pages.CoachHome />,
  },
];

export const EmployeeRoutes = [
  {
    index: true,
    element: <p>Employee Home</p>,
  },
];
