import React from 'react'
import {useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard'

function PrivateRoute() {
    const {currentUser} = useSelector((state) => state.user);
    
  return (
    currentUser ? <Dashboard /> : <Navigate to="/sign-in" />
  )
}

export default PrivateRoute