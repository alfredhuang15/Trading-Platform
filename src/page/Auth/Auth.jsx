import React from 'react'
import "./Auth.css"
import SignupForm from './SignupForm'
import { Button } from '../../components/ui/button'
import { useLocation, useNavigate } from 'react-router-dom'
import ForgotPasswordForm from './ForgotPasswordForm'
import SigninForm from './SigninForm'

const Auth = () => {
    const navigate = useNavigate()
    const location = useLocation()
  return (
<div className='h-screen authContainer'>
  <div className='bgBlurred flex flex-col justify-center items-center h-[35rem] w-[30rem] rounded-md z-50 bg-black bg-opacity-50 shadow-2xl shadow-white px-10'>
    <h1 className='text-5xl font-bold pb-9 text-center'>Lightning Trading</h1>
    {location.pathname=="/signup" ? <section className='w-full'>
      <SignupForm />
      <div className='flex items-center justify-center'>
        <span>Sign up</span>
        <Button onClick={() => navigate("/signin")} variant="ghost">
          Sign in
        </Button>
      </div>
    </section>: location.pathname=="/forgot-password"?<section className='w-full'>
            <ForgotPasswordForm/>
            <div className='flex items-center justify-center mt-2'>
        <span>back to login</span>
        <Button onClick={() => navigate("/signin")} variant="ghost">
          Sign in
        </Button>
      </div>
    </section>:<section className='w-full'>
        <SigninForm/>
        <div className='flex items-center justify-center'>
        <span>{"Don't have account?"}</span>
        <Button onClick={() => navigate("/signup")} variant="ghost">
          Sign up
        </Button>
      </div>
      <div className='mt-10'>
        <Button className="w-full py-5" onClick={() => navigate("/forgot-password")} variant="outline">
          Forgot Password
        </Button>
      </div>
        </section>}
  </div>
</div>

  )
}

export default Auth
