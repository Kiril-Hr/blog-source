import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectIsAuth } from '../../redux/slices/auth'

type Props = {
   avatarUrl: string
   fullName: string
   _id: string
   time?: string
}

const UserInfo = ({ avatarUrl, fullName, _id, time }: Props) => {
   const isAuth = useSelector(selectIsAuth)

   var userData = useSelector((state: any) => state.auth)

   return (
      <>
         <Link
            to={
               isAuth && userData.data._id === _id ? `/my-blog` : `/blog/${_id}`
            }
         >
            {fullName} <time dateTime={time}>{time}</time>
         </Link>

         <img
            src={
               `${process.env.REACT_APP_API_URL}${avatarUrl}` || '/noavatar.png'
            }
            alt={fullName}
         />
      </>
   )
}
export default UserInfo
