import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Title from '../../components/UI/Title/Title'
import classes from './Article.module.scss'
import axios from '../../axios'
import LoadingCircle from '../../components/UI/LoadingCircle/LoadingCircle'
import UserInfo from '../../components/UserInfo/UserInfo'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../redux/slices/posts'
import TagsBlockAside from '../../components/Tags/TagsBlockAside'
import MarkDown from '../../components/MarkDown/MarkDown'
import Comments from '../../components/Comments/Comments'
import AddComment from '../../components/AddComment/AddComment'
import RelatedArticleTemplate from '../../components/ArticlesComponent/RelatedArticleTemplate'
import { SliderItemType } from '../../utils/types'

const Article = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch<any>()
   const { posts } = useSelector((state: any) => state.posts)

   const [data, setData] = useState<any>()
   const [comments, setComments] = useState<any>()
   const [isLoading, setIsLoading] = useState<boolean>(true)
   const [isLoadingComments, setIsLoadingComments] = useState<boolean>(true)

   const { id } = useParams()

   const isPostLoading: any = posts.status === 'loading'

   const popularPosts = structuredClone(posts.items).sort(
      (a: SliderItemType, b: SliderItemType) => b.viewsCount! - a.viewsCount!
   )
   popularPosts.length = 5

   useEffect(() => {
      dispatch(fetchPosts())
      axios
         .get(`/posts/${id}`)
         .then((res) => {
            setData(res.data)
            setIsLoading(false)
         })
         .catch((err) => {
            console.warn(err)
            alert('Failed to get post')
            navigate('/articles')
         })
      axios
         .get(`/comments/${id}`)
         .then((res) => {
            setComments(res.data)
            setIsLoadingComments(false)
         })
         .catch((err) => {
            console.warn(err)
         })
   }, []) // eslint-disable-line react-hooks/exhaustive-deps

   if (!isPostLoading) {
      try {
         const getThisPostFilter = posts.items.filter(
            (post: any) => post._id === id
         )

         const [thisPost] = getThisPostFilter

         var { user } = thisPost
      } catch (err) {
         window.location.reload()
      }
   }

   if (isLoading) {
      return <LoadingCircle />
   }

   return (
      <>
         <div className={classes.selectedArticle}>
            <Title
               title={`${data.title}`}
               fontSize={'3.25rem'}
               justifyContent={'flex-start'}
            />
            <div className={classes.authorBlock}>
               <UserInfo {...user} />
               <time>{data.createdAt.slice(0, 19).replace('T', ' ')}</time>
               <p>
                  <svg
                     className={classes.svg}
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                  {data.viewsCount}
               </p>
               <div className={classes.wrapperSortBtn}>
                  <Title
                     fontSize="1.4rem"
                     justifyContent="flex-end"
                     title="#Tags"
                  />
                  <TagsBlockAside tags={data.tags} isLoading={isLoading} />
               </div>
            </div>
            <div className={classes.imgOfMainArticlePlusRelatedArticles}>
               {window.innerWidth > 1850 ? (
                  <Title
                     title={'Related Articles'}
                     justifyContent={'flex-end'}
                     fontSize={'3.6rem'}
                  />
               ) : (
                  ''
               )}
               <div className={classes.containerSliderMainPhoto}>
                  <img
                     src={
                        data.imageUrl
                           ? `http://localhost:4444${data.imageUrl}`
                           : ''
                     }
                     alt={data.user.fullName}
                     className={classes.img}
                  />
                  {window.innerWidth > 1850 ? (
                     <div className={classes.relatedArticleContainer}>
                        {popularPosts.map((post: SliderItemType) => (
                           <RelatedArticleTemplate
                              _id={post._id}
                              imageUrl={post.imageUrl}
                              title={post.title}
                              text={post.text}
                              createdAt={post.createdAt}
                              user={post.user}
                           />
                        ))}
                     </div>
                  ) : (
                     ''
                  )}
               </div>
            </div>
            <MarkDown text={data.text} />
            <section className={classes.commentsSection}>
               <Title
                  title="Comments"
                  fontSize="2.5rem"
                  justifyContent="flex-start"
               />
               <div className={classes.writeCommentField}>
                  <AddComment postId={id!} />
               </div>
               <div className={classes.commentsBlock}>
                  {isLoadingComments ? (
                     <LoadingCircle />
                  ) : (
                     <Comments comments={comments} />
                  )}
               </div>
            </section>
         </div>
      </>
   )
}

export default Article
