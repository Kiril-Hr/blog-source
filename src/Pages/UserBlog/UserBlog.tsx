import axios from '../../axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import classes from './UserBlog.module.scss'
import './Transition.scss'
import LoadingCircle from '../../components/UI/LoadingCircle/LoadingCircle'
import Title from '../../components/UI/Title/Title'
import TagsBlockAside from '../../components/Tags/TagsBlockAside'
import PageScrollUp from '../../components/PageScrollUp/PageScrollUp'
import { cutSlash, cutText, removeSymbols } from '../../utils/functions'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { BASEURL } from '../../utils/URL'

type User = {
   avatarUrl: string
   createdAt: string
   email: string
   fullName: string
   postsCount: number
   totalViewsCount: number
}

type Posts = {
   commentsCount: number
   createdAtL: string
   imageUrl: string
   text: string
   title: string
   updatedAt: string
   user: string
   viewsCount: number
   _id: string
}[]

const UserBlog = () => {
   const [data, setData] = useState<[User | null, Posts]>([null, []])

   const navigate = useNavigate()

   const [isLoading, setIsLoading] = useState<boolean>(true)

   const { id } = useParams()

   useEffect(() => {
      try {
         axios.get(`/user/${id}`).then((res) => {
            setData([res.data[0], res.data[1]])
         })
         setIsLoading(false)
      } catch (err) {
         console.warn(err)
         navigate('/')
         alert('User does not exist')
      }
   }, [])

   const [user, posts] = data

   if (!isLoading) {
      var myTags = posts.reduce((obj: any, post: any) => {
         for (let i = 0; i < post.tags.length; i++) {
            if (!obj[post.tags[i]]) {
               obj[post.tags[i]] = post.tags[i]
            }
         }
         return obj
      }, {})
   }

   return (
      <div className={classes.container}>
         {isLoading ? (
            <LoadingCircle />
         ) : (
            <div className={classes.containerUserInfo} id="myBlogContainer">
               <div className={classes.userInfoPhoto}>
                  <div className={classes.userPhoto}>
                     {user?.avatarUrl ? (
                        <img
                           src={
                              user.avatarUrl
                                 ? `${BASEURL}${cutSlash(user.avatarUrl)}`
                                 : ''
                           }
                           alt={user.fullName}
                        />
                     ) : (
                        <div
                           style={{
                              background: 'grey',
                              width: '250px',
                              height: '250px',
                              borderRadius: '50%',
                           }}
                        ></div>
                     )}
                  </div>
                  <div className={classes.userInfo}>
                     <h2>User details</h2>
                     <div>
                        Name:
                        <p>{user?.fullName}</p>
                     </div>
                     <div>
                        Email:
                        <p>{user?.email}</p>
                     </div>
                  </div>
               </div>
               <div className={classes.myArticlesBlock}>
                  <div className={classes.containerArticlesTags}>
                     <div className={classes.myArticles}>
                        {isLoading ? (
                           <LoadingCircle />
                        ) : (
                           posts.map((post: any) => (
                              <TransitionGroup>
                                 <CSSTransition
                                    key={post._id}
                                    timeout={500}
                                    classNames="post-transition-userBlog"
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
                     {!isLoading && posts.length !== 0 ? (
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
      </div>
   )
}
export default UserBlog
