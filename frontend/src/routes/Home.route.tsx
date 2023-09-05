import React from 'react';
import { SuspenseWrapper } from '~/components/common/suspense/SuspenseWrapper';

const HomePage = React.lazy(() => import('~/pages/HomePage'));

const homeRoutes = [
  {
    path: '/',
    element: (
      <SuspenseWrapper>
        <HomePage />
      </SuspenseWrapper>
    )
  }
]

export default homeRoutes;