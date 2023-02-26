import axios from '../../axios'
import { useEffect, useState } from 'react'
import PageScrollUp from '../../components/PageScrollUp/PageScrollUp'
import classes from './Blogs.module.scss'
import LoadingCircle from '../../components/UI/LoadingCircle/LoadingCircle'
import { Link } from 'react-router-dom'
import Title from '../../components/UI/Title/Title'

interface IBlogs {
   _id: string
   fullName: string
   email: string
   passwordHash: string
   avatarUrl: string
   createdAt: string
   updatedAt: string
   postsCount: number
   totalViewsCount: number
}

const Blogs = () => {
   const [blogs, setBlogs] = useState<any>()
   const [isLoadingBlogs, setIsLoadingBlogs] = useState<boolean>(true)

   useEffect(() => {
      try {
         axios.get('/blogs').then((res) => {
            setBlogs(res.data)
            setIsLoadingBlogs(false)
         })
      } catch (err) {
         console.warn(err)
      }
   }, [])

   return (
      <div className={classes.container}>
         <Title
            title="Other blogs on the service"
            fontSize="2.6rem"
            justifyContent="flex-start"
         />
         <div className={classes.containerBlogs} id="blogsContainer">
            {isLoadingBlogs ? (
               <LoadingCircle />
            ) : (
               blogs.map((blog: IBlogs) => (
                  <div className={classes.blogContainer} key={blog._id}>
                     <img
                        src={`http://localhost:4444${blog.avatarUrl}`}
                        alt={blog.fullName}
                     />
                     <div className={classes.description}>
                        <Link to={`/blog/${blog._id}`}>{blog.fullName}</Link>
                        <div className={classes.total}>
                           <div className={classes.totalViews}>
                              <svg
                                 viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                              </svg>
                              <p>
                                 Total views:{' '}
                                 <span>{blog.totalViewsCount}</span>
                              </p>
                           </div>
                           <div className={classes.totalPosts}>
                              <svg
                                 version="1.1"
                                 id="Layer_1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 x="0px"
                                 y="0px"
                                 viewBox="0 0 115.77 122.88"
                              >
                                 <style type="text/css"></style>
                                 <g>
                                    <path d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z" />
                                 </g>
                              </svg>
                              <p>
                                 Total posts: <span>{blog.postsCount}</span>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               ))
            )}
         </div>
         <PageScrollUp />
      </div>
   )
}

export default Blogs
