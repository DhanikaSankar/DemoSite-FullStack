import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { newContext } from '../contexts/ContextProvider';

function GuestLayout() {
    const {token} = useContext(newContext);

    // if(token){
    //     return <Navigate to='/' />
    // }

  return (
    <div>
        <Outlet />
    </div>
  )
}

export default GuestLayout
