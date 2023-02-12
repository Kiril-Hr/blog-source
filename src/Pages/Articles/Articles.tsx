import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, fetchTags } from '../../redux/slices/posts'
import ArticlesList from '../../components/ArticlesComponent/ArticlesList'
import TagsBlockAside from '../../components/Tags/TagsBlockAside'
import Title from '../../components/Title/Title'
import classes from './Articles.module.scss'

const Articles = () => {
   const dispatch = useDispatch<any>()
   const [isLoading, setIsLoading] = useState(true)

   const { tags, posts } = useSelector((state: any) => state.posts)

   const isPostLoading: any = posts.status === 'loading'

   const filteredTags = tags.items.reduce((obj: any, tag: string) => {
      if (!obj[tag]) {
         obj[tag] = tag
      }
      return obj
   }, {})

   useEffect(() => {
      dispatch(fetchPosts())
      dispatch(fetchTags())
      setIsLoading(false)
   }, []) // eslint-disable-line react-hooks/exhaustive-deps

   return (
      <div className={classes.containerArticlesPage}>
         <Title
            title="Articles"
            fontSize="2.65rem"
            justifyContent="flex-start"
         />
         <section className={classes.containerArticlesTagsSection}>
            <article>
               <ArticlesList
                  isPostLoading={isPostLoading}
                  posts={posts.items}
               />
            </article>
            <div className={classes.wrapperSortBtn}>
               <Title
                  fontSize="1.6rem"
                  justifyContent="flex-start"
                  title="#Tags"
               />
               <TagsBlockAside
                  tags={Object.values(filteredTags)}
                  isLoading={isLoading}
               />
            </div>
         </section>
      </div>
   )
}

export default Articles
