import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchPosts, fetchTags } from '../../redux/slices/posts'
import { Link } from 'react-router-dom'
import LoadingCircle from '../../components/LoadingCircle/LoadingCircle'
import classes from './MyBlog.module.scss'
import { cutText } from '../../utils/functions'
import TagsBlockAside from '../../components/Tags/TagsBlockAside'

const MyBlog = () => {
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
   }, [])

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
                                 <div className={classes.description}>
                                    <Link to={`/article/${post._id}`}>
                                       {post.title}
                                    </Link>
                                    <p>{cutText(post.text, 150)}</p>
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
                     <TagsBlockAside
                        tags={Object.values(myTags)}
                        isLoading={isTagsLoading}
                     />
                  </div>
               </div>
            </div>
         )}
      </>
   )
}

export default MyBlog
