import { createBrowserRouter } from 'react-router-dom';
import * as React from 'react';

import { ErrorPage } from '@/resources/ErrorPage/ErrorPage';
import { EvSearchPage } from '@/components/EvSearchPage';

export const Router = createBrowserRouter(
  [
    {
      path: '/',
      element: <EvSearchPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'evsearch',
      element: <EvSearchPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'nb/evsearch',
      element: <EvSearchPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'sv/evsearch',
      element: <EvSearchPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'da/evsearch',
      element: <EvSearchPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'es/evsearch',
      element: <EvSearchPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'fr/evsearch',
      element: <EvSearchPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'de/evsearch',
      element: <EvSearchPage />,
      errorElement: <ErrorPage />,
    },
  ],
  { basename: '/' },
);
