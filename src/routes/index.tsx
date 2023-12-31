import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { PrivateRoutes } from './privateRoutes'
import { SignIn } from '../pages/SignIn'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Recovery } from '../pages/components/Recovery'
import { Agent } from '../pages/components/Agent'
import { LayoutLogin } from '../layouts/LayoutLogin'
import useAuth from '../hooks/useAuth'

export const AppRouter = () => {
  const { signed } = useAuth()

  return (
    <Router>
      {!signed && (
        <LayoutLogin>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/recovery' element={<Recovery />} />
            <Route path='/agent' element={<Agent />} />
          </Routes>
        </LayoutLogin>
      )}

      <Routes>
        <Route path='/home' element={<PrivateRoutes />}>
          <Route path='/home' element={<Home />} />
        </Route>
        <Route path='/profile' element={<PrivateRoutes />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/profile/:id' element={<PrivateRoutes />}>
          <Route path='/profile/:id' element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}
