import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AddPost } from '../../components/AddPost/AddPost'
import { selectIsAuth } from '../../redux/slices/auth'
import classes from './CreatedArticle.module.scss'

const CreatedArticle = () => {
   const isAuth = useSelector(selectIsAuth)

   if (!window.localStorage.getItem('token') && !isAuth) {
      return <Navigate to="/" />
   }

   return (
      <div className={classes.editorPage}>
         <AddPost />
      </div>
   )
}

export default CreatedArticle
