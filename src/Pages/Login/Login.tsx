import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './Login.scss'
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth'

type Props = {}

const Login = (props: Props) => {
   const isAuth = useSelector(selectIsAuth)

   const dispatch = useDispatch<any>()

   const {
      register,
      handleSubmit,
      formState: { errors, isValid },
   } = useForm({
      defaultValues: {
         email: 'sanya@sanya.ua',
         password: '123123',
      },
   })

   const onSubmit = async (values: object) => {
      const data = await dispatch(fetchAuth(values))

      if (!data.payload) {
         alert('Failed to authorization')
      }

      if ('token' in data.payload) {
         window.localStorage.setItem('token', data.payload.token)
      }
   }

   if (isAuth) {
      return <Navigate to="/" />
   }

   return (
      <>
         <div className="sign-up-in-login">
            <p>Don't have an account?</p>
            <Link to="/register">Sign Up</Link>
         </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label>
               <p>Email address</p>
               <input
                  {...register('email', {
                     required: 'Write your email',
                  })}
                  type="email"
               />
               <p className="errors-text">{errors.email?.message}</p>
            </label>
            <label>
               <p>Password</p>
               <input
                  {...register('password', {
                     required: 'Write your password',
                  })}
                  type="password"
               />
               <p className="errors-text">{errors.password?.message}</p>
            </label>
            <label className="remember-me">
               <input type="checkbox" />
               <p>Remember me</p>
            </label>
            <button disabled={!isValid} className="submit" type="submit">
               Submit
            </button>
         </form>
      </>
   )
}
export default Login
