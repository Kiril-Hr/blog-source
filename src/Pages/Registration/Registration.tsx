import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { fetchRegister, selectIsAuth } from '../../redux/slices/auth'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

type Props = {}

const Registration = (props: Props) => {
   const isAuth = useSelector(selectIsAuth)

   const dispatch = useDispatch<any>()

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors, isValid },
   } = useForm({
      defaultValues: {
         fullName: '',
         email: '',
         password: '',
         confirm_password: '',
      },
      mode: 'onChange',
   })

   const onSubmit = async (values: object) => {
      const data = await dispatch(fetchRegister(values))

      if (!data.payload) {
         alert('Failed to registration')
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
            <p>Have an account?</p>
            <Link to="/login">Sign In</Link>
         </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label>
               <p>Your Full Name</p>
               <input
                  {...register('fullName', {
                     required: 'Write your fullName',
                  })}
               />
               <p className="errors-text">{errors.fullName?.message}</p>
            </label>
            <label>
               <p>Email address</p>
               <input
                  {...register('email', {
                     required: 'Write your email',
                  })}
               />
               <p className="errors-text">{errors.email?.message}</p>
            </label>
            <label>
               <p>Password</p>
               <input
                  {...register('password', {
                     required: 'Write your password',
                  })}
               />
               <p className="errors-text">{errors.password?.message}</p>
            </label>
            <label>
               <p>Conform password</p>
               <input
                  {...register('confirm_password', {
                     required: 'Confirm your password',
                     validate: (val: string) => {
                        if (watch('password') !== val) {
                           return 'Your passwords do not match'
                        }
                     },
                  })}
               />
               <p className="errors-text">{errors.confirm_password?.message}</p>
            </label>
            <button disabled={!isValid} className="submit" type="submit">
               Submit
            </button>
         </form>
      </>
   )
}
export default Registration
