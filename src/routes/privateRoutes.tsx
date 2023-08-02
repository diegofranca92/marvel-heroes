
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = () => {

  const signed = true

  return signed ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to='/' />
  )
}
