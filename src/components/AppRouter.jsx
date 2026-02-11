import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PublicRoutes } from '../routes';

export const AppRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        {PublicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={<Component/>}/>
      )}
      <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  )
}
export default AppRouter;
