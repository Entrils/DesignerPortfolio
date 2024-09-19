import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PublicRoutes } from '../routes';

export const AppRouter = () => {
  return (
    <Routes>
      {PublicRoutes.map(({path, Component}) =>
      <Route key={path} path={path} element={<Component/>} exact/>
    )}
    <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
export default AppRouter;