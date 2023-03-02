import { useSelector, useDispatch } from 'react-redux'
import { HTMLInputTypeAttribute, useEffect, useRef, useState } from 'react'
import { fetchRemovePost } from '../../redux/slices/posts'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import LoadingCircle from '../../components/UI/LoadingCircle/LoadingCircle'
import classes from './MyBlog.module.scss'
import './ShowConfirm.scss'
import './Transition.scss'
import { cutText, removeSymbols } from '../../utils/functions'
import TagsBlockAside from '../../components/Tags/TagsBlockAside'
import { selectIsAuth } from '../../redux/slices/auth'
import Title from '../../components/UI/Title/Title'
import PageScrollUp from '../../components/PageScrollUp/PageScrollUp'
import axios from '../../axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { BASEURL } from '../../utils/URL'

interface User {
   _id: string
   fullName: string
   email: string
   createdAt: string
   updatedAt: string
   __v: number
   postsCount: number
   totalViewsCount: number
   avatarUrl: string
}

interface IUserData {
   isAvatarLoading: boolean
   avatarUrl: string | null
   error: string | null
}

const MyBlog = () => {
   const [myPosts, setMyPosts] = useState<any>()
   const [isPostsLoading, setIsPostsLoading] = useState<boolean>(true)
   const [avatar, setAvatar] = useState<IUserData>({
      isAvatarLoading: true,
      avatarUrl: null,
      error: null,
   })

   const inputFileRef = useRef<any>(null)

   const isAuth = useSelector(selectIsAuth)

   const navigate = useNavigate()

   const dispatch = useDispatch<any>()

   const userData = useSelector((state: any) => state.auth)

   const isUserLoading: any = userData.status === 'loading'

   useEffect(() => {
      if (!isUserLoading && isPostsLoading) {
         const myId = userData?.data?._id

         axios
            .get(`/posts/user/${myId}`)
            .then((res) => {
               setMyPosts(res.data)
               setIsPostsLoading(false)
            })
            .catch((err) => {
               console.warn(err)
            })
      }
   }, [userData, isUserLoading, myPosts]) // eslint-disable-line react-hooks/exhaustive-deps

   if (!isPostsLoading) {
      var myTags = myPosts.reduce((obj: any, post: any) => {
         for (let i = 0; i < post.tags.length; i++) {
            if (!obj[post.tags[i]]) {
               obj[post.tags[i]] = post.tags[i]
            }
         }
         return obj
      }, {})
   }

   const onClickRemove = async (e: React.MouseEvent<HTMLParagraphElement>) => {
      const userId = userData.data._id
      const parentNode = e.currentTarget.parentNode as HTMLElement
      let id: string =
         parentNode.previousElementSibling instanceof HTMLInputElement
            ? parentNode.previousElementSibling.value
            : ''
      parentNode.style.pointerEvents = 'none'
      parentNode.classList.remove('active')
      if (!id) return
      try {
         await dispatch(fetchRemovePost({ id, userId }))
         const res = await axios.get(`/posts/user/${userId}`)
         setMyPosts(res.data)
      } catch (error) {
         console.log(error)
      }
   }

   const showConfirmWindow = (e: any) => {
      if (e.target.classList.contains('btn')) {
         e.target.previousElementSibling?.classList.toggle('active')
      } else if (e.target.classList.contains('path')) {
         e.target.parentNode.parentNode.previousElementSibling?.classList.toggle(
            'active'
         )
      } else if (e.target.classList.contains('svg')) {
         e.target.parentNode.previousElementSibling?.classList.toggle('active')
      }
   }

   const onClickEdit = (e: any) => {
      if (e.target.classList.contains('btn')) {
         let id: string = e.target.nextElementSibling.value
         return e !== undefined ? navigate(`/article/${id}/edit`) : null
      } else if (e.target.classList.contains('path')) {
         let id: string =
            e.target.parentNode.parentNode.nextElementSibling.value
         return e !== undefined ? navigate(`/article/${id}/edit`) : null
      } else if (e.target.classList.contains('svg')) {
         let id: string = e.target.parentNode.nextElementSibling.value
         return e !== undefined ? navigate(`/article/${id}/edit`) : null
      }
   }

   useEffect(() => {
      async function fetchMe() {
         try {
            const { data } = await axios.get('/auth/me')
            setAvatar({
               isAvatarLoading: false,
               avatarUrl: data.avatarUrl,
               error: null,
            })
         } catch (err) {
            setAvatar({
               isAvatarLoading: true,
               avatarUrl: null,
               error: `${err}`,
            })
         }
      }
      fetchMe()
   }, [])

   const changeAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isUserLoading) {
         const myId = userData.data._id
         const email = userData.data.email.replace(/\./g, '_')
         try {
            setAvatar((prevAvatar) => ({
               ...prevAvatar,
               isAvatarLoading: true,
            }))

            const formData = new FormData()
            const file = e.target.files![0]
            const fileExtension = file.name.split('.').pop()
            const random = Math.random().toString(36).substring(5)
            const newFileName = `${random}-${email}.${fileExtension}`

            formData.append('image', file, newFileName)

            const { data } = await axios.patch(
               `/avatar-update/${myId}`,
               formData
            )
            setAvatar((prevstate) => ({
               ...prevstate,
               avatarUrl: data.avatarUrl,
               isAvatarLoading: false,
               error: null,
            }))
         } catch (err) {
            setAvatar((prevAvatar) => ({
               ...prevAvatar,
               isAvatarLoading: false,
               error: `${err}`,
            }))
         }
      }
   }

   if (!isAuth && !window.localStorage.getItem('token')) {
      return <Navigate to="/" />
   }

   return (
      <>
         {isUserLoading ? (
            <LoadingCircle />
         ) : (
            <div className={classes.containerUserInfo} id="myBlogContainer">
               <div className={classes.userInfoPhoto}>
                  <div className={classes.userPhoto}>
                     <input
                        type="file"
                        ref={inputFileRef}
                        onChange={changeAvatar}
                        hidden
                     />
                     {avatar.isAvatarLoading ? (
                        <LoadingCircle />
                     ) : (
                        <div
                           style={
                              avatar.avatarUrl
                                 ? { border: 'none' }
                                 : { border: '1px solid #FF5C35' }
                           }
                        >
                           <img
                              src={
                                 avatar ? `${BASEURL}${avatar.avatarUrl!}` : ''
                              }
                              alt={userData.data.fullName}
                           />
                           <svg
                              onClick={() => inputFileRef.current.click()}
                              viewBox="0 0 32 32"
                              xmlns="http://www.w3.org/2000/svg"
                              className="svg"
                              style={
                                 avatar.avatarUrl
                                    ? { fill: '#6366fc', bottom: '10px' }
                                    : { fill: '#c9310b', bottom: '30px' }
                              }
                           >
                              <path
                                 className="path"
                                 d="M16,6 L12.75,9.25 L12,8.5 L16.5,4 L21,8.5 L20.25,9.25 L17,6 L17,17 L16,17 L16,6 L16,6 Z M21,19 L27.7750244,19 L23.4000244,12 L18,12 L18,11 L24,11 L29,19 L29,20 L29,28 L4,28 L4,19 L9,11 L15,11 L15,11 L15,12 L9.59997559,12 L5.22497559,19 L12,19 L12,21 C12,22.1045695 12.8958578,23 13.9973917,23 L19.0026083,23 C20.1057373,23 21,22.1122704 21,21 L21,19 L21,19 L21,19 Z"
                                 id="inbox-upload"
                              />
                           </svg>
                        </div>
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
                              <TransitionGroup>
                                 <CSSTransition
                                    key={post._id}
                                    timeout={500}
                                    classNames="post-transition-myBlog"
                                 >
                                    <div
                                       className={classes.myPost}
                                       key={post._id}
                                       id="myPost"
                                    >
                                       <div className={classes.description}>
                                          <div>
                                             <Link to={`/article/${post._id}`}>
                                                {post.title}
                                             </Link>
                                             <div
                                                className={classes.btnBlock}
                                                id="btnBlock"
                                             >
                                                <button
                                                   onClick={onClickEdit}
                                                   className="btn"
                                                >
                                                   <svg
                                                      className="svg"
                                                      viewBox="0 0 576 512"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                      <path
                                                         className="path"
                                                         d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
                                                      />
                                                   </svg>
                                                </button>
                                                <input
                                                   type="text"
                                                   value={post._id}
                                                   readOnly
                                                   hidden
                                                />
                                                <div className="confirmWindow">
                                                   <p
                                                      className="confirm"
                                                      onClick={onClickRemove}
                                                   >
                                                      Delete
                                                   </p>
                                                   <p
                                                      className="decline"
                                                      onClick={(e: any) =>
                                                         e.target.parentNode.classList.remove(
                                                            'active'
                                                         )
                                                      }
                                                   >
                                                      Skip
                                                   </p>
                                                </div>
                                                <button
                                                   className="btn"
                                                   onClick={showConfirmWindow}
                                                >
                                                   <svg
                                                      className="svg"
                                                      viewBox="0 0 48 48"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                      <path
                                                         className="path"
                                                         d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z"
                                                      />
                                                   </svg>
                                                </button>
                                             </div>
                                          </div>
                                          <p>
                                             {window.innerWidth < 500
                                                ? cutText(
                                                     removeSymbols(post.text),
                                                     80
                                                  )
                                                : cutText(
                                                     removeSymbols(post.text),
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
                                          <div
                                             className={classes.viewsComments}
                                          >
                                             <p className={classes.viewsCount}>
                                                <svg
                                                   id="svg"
                                                   viewBox="0 0 20 20"
                                                   xmlns="http://www.w3.org/2000/svg"
                                                >
                                                   <path d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                                                </svg>
                                                {post.viewsCount}
                                             </p>
                                             <p
                                                className={
                                                   classes.commentsCount
                                                }
                                             >
                                                <svg
                                                   className={
                                                      classes.commentsImg
                                                   }
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   viewBox="0 0 122.88 113.94"
                                                >
                                                   <path d="M3.77,0H119.11a3.79,3.79,0,0,1,3.77,3.77V80.94a3.79,3.79,0,0,1-3.77,3.78H61.44l-29.1,21.62c-9.61,9.13-16.08,11.45-15.15-1V84.72H3.77A3.79,3.79,0,0,1,0,80.94V3.77A3.79,3.79,0,0,1,3.77,0ZM62.92,34.34a7.12,7.12,0,1,1-7.12,7.11,7.11,7.11,0,0,1,7.12-7.11Zm27.19,0A7.12,7.12,0,1,1,83,41.45a7.11,7.11,0,0,1,7.11-7.11Zm-54.39,0a7.12,7.12,0,1,1-7.11,7.11,7.11,7.11,0,0,1,7.11-7.11Z" />
                                                </svg>
                                                {post.commentsCount}
                                             </p>
                                          </div>
                                       </div>
                                    </div>
                                 </CSSTransition>
                              </TransitionGroup>
                           ))
                        )}
                     </div>
                     {!isPostsLoading && myPosts.length !== 0 ? (
                        <div className={classes.wrapperSortBtn} id="tagsMyBlog">
                           <Title
                              fontSize="1.4rem"
                              justifyContent="flex-start"
                              title="#Tags"
                           />
                           <TagsBlockAside tags={Object.values(myTags)} />
                        </div>
                     ) : (
                        ''
                     )}
                  </div>
               </div>
               <PageScrollUp />
            </div>
         )}
      </>
   )
}

export default MyBlog
