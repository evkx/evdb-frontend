import { createBrowserRouter } from 'react-router-dom';
import * as React from 'react';

import { ErrorPage } from '@/resources/ErrorPage/ErrorPage';
import { EvSearchPage } from '@/components/EvSearchPage';

export const Router = createBrowserRouter(
  [
    {
      path: '/',
      errorElement: <ErrorPage />,
    },
    {
      path: 'evsearch',
      element: <EvSearchPage />,
      errorElement: <ErrorPage />,
    },
  ],
  { basename: '/' },
);
