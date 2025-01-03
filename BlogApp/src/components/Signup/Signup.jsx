import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input, Logo} from "../index"
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { login as authLogin } from "../../store/features/authSlice"

function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const signup = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const user = await authService.getCurrentUser()
                if (user) {
                    dispatch(authLogin(user))
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className='flex items-center justify-center'>
        <div className={`mx-auto w-full max-x-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width='100%' />
                </span>
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to create an account</h2>
        </div>
    </div>
  )
}

export default Signup