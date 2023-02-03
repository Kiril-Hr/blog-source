import './ArticleTemplate.scss'
import ArticleTemplate from './ArticleTemplate'
import { useDispatch, useSelector } from 'react-redux'
import { blogsArray } from '../../utils/ArticlesArray'
import { useEffect } from 'react'
import { fetchPosts } from '../../redux/slices/posts'

type BlogsProps = {
   id: number
   photo: string
   title: string
   description: string
   date: string
   author: string
   nickname: string
   authorPhoto: string
   chapter: string
   tags?: {
      [key: string]: string
   }
}
const ArticlesList = () => {
   const dispatch = useDispatch<any>()
   const { posts, tags } = useSelector((state: any) => state.posts)
   const isPostLoading = posts.status === 'loading'

   useEffect(() => {
      dispatch(fetchPosts())
   }, [])

   return (
      <>
         {(isPostLoading ? posts.items : blogsArray).map(
            ({
               id,
               photo,
               title,
               description,
               date,
               author,
               nickname,
               authorPhoto,
               chapter,
               tags,
            }: BlogsProps) =>
               isPostLoading ? (
                  <ArticleTemplate />
               ) : (
                  <ArticleTemplate
                     chapter={chapter}
                     photo={photo}
                     title={title}
                     description={description}
                     date={date}
                     author={author}
                     nickname={nickname}
                     authorPhoto={authorPhoto}
                     key={id}
                     id={id}
                     tags={tags}
                  />
               )
         )}
      </>
   )
}
export default ArticlesList
