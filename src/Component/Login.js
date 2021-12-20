import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {login, logout} from '../actions/index';

function Login() {
  const isLogin = useSelector(state => state.auth)
  const dispatch = useDispatch();

  return (
    <>
    <p>Login User</p>
    <button onClick={()=> dispatch(login())}>Login</button>
    <button onClick={()=> dispatch(logout())}>Logout</button>
    {
      isLogin ? <p>The user is login</p> : null
    }
    </>
  )
}

export default Login
