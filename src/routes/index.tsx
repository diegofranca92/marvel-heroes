import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { PrivateRoutes } from './privateRoutes'
import { SignIn } from '../pages/SignIn'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/home' element={<PrivateRoutes />}>
          <Route path='/home' element={<Home />} />
        </Route>
        <Route path='/profile' element={<PrivateRoutes />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}
