import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import {
   fetchPosts,
   fetchRemovePost,
   fetchTags,
} from '../../redux/slices/posts'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import LoadingCircle from '../../components/UI/LoadingCircle/LoadingCircle'
import classes from './MyBlog.module.scss'
import { cutText } from '../../utils/functions'
import TagsBlockAside from '../../components/Tags/TagsBlockAside'
import { selectIsAuth } from '../../redux/slices/auth'
import Title from '../../components/UI/Title/Title'

const MyBlog = () => {
   const isAuth = useSelector(selectIsAuth)

   const navigate = useNavigate()

   const dispatch = useDispatch<any>()

   const userData = useSelector((state: any) => state.auth)
   const { posts } = useSelector((state: any) => state.posts)

   const [isTagsLoading, setIsTagsLoading] = useState(true)
   const isUserLoading: any = userData.status === 'loading'
   const isPostsLoading: any = posts.status === 'loading'

   useEffect(() => {
      dispatch(fetchPosts())
      dispatch(fetchTags())
      setIsTagsLoading(false)
   }, []) // eslint-disable-line react-hooks/exhaustive-deps

   const myPosts = posts.items.filter(
      (post: any) => post.user._id === userData.data._id
   )
   const myTags = myPosts.reduce((obj: any, post: any) => {
      for (let i = 0; i < post.tags.length; i++) {
         if (!obj[post.tags[i]]) {
            obj[post.tags[i]] = post.tags[i]
         }
      }
      return obj
   }, {})

   const onClickRemove = (e: any) => {
      const id: string = e.target.parentNode.parentNode.nextElementSibling.value
      return e !== undefined ? dispatch(fetchRemovePost(id)) : null
   }

   const onClickEdit = (e: any) => {
      const id: string =
         e.target.parentNode.parentNode.nextElementSibling.nextElementSibling
            .value
      return e !== undefined ? navigate(`/article/${id}/edit`) : null
   }

   if (!isAuth && !window.localStorage.getItem('token')) {
      return <Navigate to="/" />
   }

   return (
      <>
         {isUserLoading ? (
            <LoadingCircle />
         ) : (
            <div className={classes.containerUserInfo}>
               <div className={classes.userInfoPhoto}>
                  <div className={classes.userPhoto}>
                     {userData.data.avatarUrl ? (
                        <img
                           src={userData.data.avatarUrl}
                           alt={userData.data.fullName}
                        />
                     ) : (
                        <div
                           style={{
                              background: 'grey',
                              width: '200px',
                              height: '250px',
                           }}
                        ></div>
                     )}
                  </div>
                  <div className={classes.userInfo}>
                     <h2>User details</h2>
                     <div>
                        Name:
                        <p>{userData.data.fullName}</p>
                     </div>
                     <div>
                        Email:
                        <p>{userData.data.email}</p>
                     </div>
                  </div>
               </div>
               <div className={classes.myArticlesBlock}>
                  <div className={classes.options}>
                     <button>
                        <Link to="/add-article">Create article</Link>
                     </button>
                  </div>
                  <div className={classes.containerArticlesTags}>
                     <div className={classes.myArticles}>
                        {isPostsLoading ? (
                           <LoadingCircle />
                        ) : (
                           myPosts.map((post: any) => (
                              <div className={classes.myPost} key={post._id}>
                                 <button onClick={onClickEdit}>
                                    <svg
                                       viewBox="0 0 576 512"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z" />
                                    </svg>
                                 </button>
                                 <button onClick={onClickRemove}>
                                    <svg
                                       height="48"
                                       viewBox="0 0 48 48"
                                       width="48"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z" />
                                       <path d="M0 0h48v48H0z" fill="none" />
                                    </svg>
                                 </button>
                                 <input
                                    type="text"
                                    value={post._id}
                                    readOnly
                                    hidden
                                 />
                                 <div className={classes.description}>
                                    <Link to={`/article/${post._id}`}>
                                       {post.title}
                                    </Link>
                                    <p>
                                       {cutText(
                                          post.text.replace(
                                             /./gi,
                                             (a: any, b: any, c: any) => {
                                                return a == '#' || a == '*'
                                                   ? ''
                                                   : a
                                             }
                                          ),
                                          150
                                       )}
                                    </p>
                                 </div>
                                 <div className={classes.dateAndViews}>
                                    <time dateTime={post.createdAt}>
                                       {post.createdAt
                                          .slice(0, 19)
                                          .replace('T', ' ')}
                                    </time>
                                    <p>
                                       <svg
                                          id="svg"
                                          viewBox="0 0 20 20"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                                       </svg>
                                       {post.viewsCount}
                                    </p>
                                 </div>
                              </div>
                           ))
                        )}
                     </div>
                     {myPosts.length !== 0 ? (
                        <div className={classes.wrapperSortBtn}>
                           <Title
                              fontSize="1.4rem"
                              justifyContent="flex-start"
                              title="#Tags"
                           />
                           <TagsBlockAside
                              tags={Object.values(myTags)}
                              isLoading={isTagsLoading}
                           />
                        </div>
                     ) : (
                        ''
                     )}
                  </div>
               </div>
            </div>
         )}
      </>
   )
}

export default MyBlog
