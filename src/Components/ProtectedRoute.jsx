import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuthContext'

const ProtectedRoute = ({ children }) => {
  let { user } = useUserAuth();

  if (!user) {
    return <Navigate to='/' />
  }
  return (
    children
  )
}

export default ProtectedRoute
