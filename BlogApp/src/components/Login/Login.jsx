import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from "../../store/features/authSlice"
import { useDispatch } from 'react-redux'
import { Button, Input, Logo} from "../index"
import authService from '../../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("")
        try {
            await authService.login(data.email, data.password)
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div>Login</div>
  )
}

export default Login