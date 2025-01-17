import React from 'react'
import { useDispatch } from 'react-redux'
import authService from "../../appwrite/auth"
import { logout } from "../../store/features/authSlice"
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
            navigate('/')
        })
    };
  return (
    <button
        className='inline-block px-6 py-2 duration-200 text-xs font-medium leading-6 text-center uppercase transition bg-blue-500 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-100 focus:outline-none'
        onClick={logoutHandler}
    >
        Logout
    </button>
  )
}

export default LogoutBtn