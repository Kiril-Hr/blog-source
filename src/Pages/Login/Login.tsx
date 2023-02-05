import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './Login.scss'

type Props = {}

const Login = (props: Props) => {
   const [userData, setUserData] = useState({})
   const { register, handleSubmit, watch } = useForm()

   const onSubmit = (userData: object) => {
      return setUserData(() => JSON.stringify(userData))
   }
   return (
      <>
         <div className="sin-up-in-login">
            <p>Don't have an account?</p>
            <Link to="/register">Sign Up</Link>
         </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label>
               <p>Email address</p>
               <input
                  {...register('email', {
                     required: true,
                  })}
               />
            </label>
            <label>
               <p>Password</p>
               <input
                  {...register('password', {
                     required: true,
                  })}
               />
            </label>
            <label className="remember-me">
               <input type="checkbox" />
               <p>Remember me</p>
            </label>
            <input className="submit" type="submit" value="Log in" />
         </form>
      </>
   )
}
export default Login
