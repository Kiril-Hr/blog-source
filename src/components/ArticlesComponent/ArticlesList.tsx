import './ArticleTemplate.scss'
import ArticleTemplate from './ArticleTemplate'
import { useDispatch, useSelector } from 'react-redux'
import { blogsArray } from '../../utils/ArticlesArray'
import { useEffect } from 'react'
import { fetchPosts, fetchTags } from '../../redux/slices/posts'
import { SliderItemType } from '../../types'
import Skeleton from './Skeleton'

type BlogsProps = SliderItemType

const ArticlesList = () => {
   const dispatch = useDispatch<any>()
   const { posts } = useSelector((state: any) => state.posts)
   const isPostLoading: any = posts.status === 'loading'

   useEffect(() => {
      dispatch(fetchPosts())
      dispatch(fetchTags())
   }, [])

   console.log(posts.items)

   return (
      <>
         {(isPostLoading ? blogsArray : posts.items).map((obj: BlogsProps) =>
            isPostLoading ? (
               <Skeleton />
            ) : (
               <ArticleTemplate
                  title={obj.title}
                  text={obj.text}
                  createdAt={obj.createdAt?.slice(0, 10)}
                  key={obj._id}
                  _id={obj._id}
                  viewsCount={obj.viewsCount}
                  user={obj.user}
                  tags={obj.tags.length > 3 ? obj.tags.slice(0, 3) : obj.tags}
               />
            )
         )}
      </>
   )
}
export default ArticlesList
