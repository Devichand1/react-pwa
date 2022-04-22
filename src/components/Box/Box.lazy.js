import React, { lazy, Suspense } from 'react';

const LazyBox = lazy(() => import('./Box'));

const Box = props => (
  <Suspense fallback={null}>
    <LazyBox {...props} />
  </Suspense>
);

export default Box;
