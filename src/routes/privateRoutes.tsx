
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = () => {

  let signed = true

  return signed ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to='/' />
  )
}
