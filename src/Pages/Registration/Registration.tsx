import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

type Props = {}

const Registration = (props: Props) => {
   const [userData, setUserData] = useState({})
   const { register, handleSubmit, watch } = useForm()

   const onSubmit = (userData: object) => {
      return setUserData(() => JSON.stringify(userData))
   }

   return (
      <>
         <div className="sin-up-in-login">
            <p>Have an account?</p>
            <Link to="/login">Sign In</Link>
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
            <label>
               <p>Conform password</p>
               <input
                  {...register('confirm_password', {
                     required: true,
                     validate: (val: string) => {
                        if (watch('password') != val) {
                           return 'Your passwords do not match'
                        }
                     },
                  })}
               />
            </label>
            <label className="remember-me">
               <input type="checkbox" />
               <p>Remember me</p>
            </label>
            <input className="submit" type="submit" value="Submit" />
         </form>
      </>
   )
}
export default Registration
