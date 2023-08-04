import { createContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

interface ContextProps {
  user: any
  signed: boolean
  signIn: (payload: User.LoginFormData) => Promise<void>
  signOut: () => void
  checkUserAuth: () => void
}

export const AuthContext = createContext<ContextProps>({} as ContextProps)

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User.IUser | null | string>(null)

  const checkUserAuth = async () => {
    const storageData = localStorage.getItem('@Auth:user')
    
    if (storageData) {
      setUser(storageData)
    }
    return !!storageData
  }
  useEffect(() => {
    checkUserAuth()
  }, [checkUserAuth])

  const signIn = async (payload: User.LoginFormData) => {
    try {
      if (payload) {
        setUser(payload)
      }
    } catch (error) {
      console.log(error);
    }
    
  }

  const signOut = () => {
    localStorage.clear()
    setUser(null)
    return <Navigate to='/' />
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!localStorage.getItem('@Auth:user'),
        signIn,
        signOut,
        checkUserAuth
      }}>
      {children}
    </AuthContext.Provider>
  )
}
