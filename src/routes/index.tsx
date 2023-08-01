import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { PrivateRoutes } from './privateRoutes'
import { SignIn } from '../pages/SignIn'
import { Home } from '../pages/Home'

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/home' element={<PrivateRoutes />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}
