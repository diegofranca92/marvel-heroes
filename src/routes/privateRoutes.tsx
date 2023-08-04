
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { LayoutIntern } from '../layouts/LayoutIntern';

export const PrivateRoutes = () => {
  const { signed } = useAuth()
  
  return signed ? <LayoutIntern><Outlet /></LayoutIntern> : <Navigate to="/" />;
}
