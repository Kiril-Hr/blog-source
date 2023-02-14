import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, fetchTags } from '../../redux/slices/posts'
import ArticlesList from '../../components/ArticlesComponent/ArticlesList'
import TagsBlockAside from '../../components/Tags/TagsBlockAside'
import Title from '../../components/UI/Title/Title'
import classes from './Articles.module.scss'

const Articles = () => {
   const dispatch = useDispatch<any>()

   const [isLoading, setIsLoading] = useState(true)
   const [filteredPostsByTag, setFilteredPostByTag] = useState<Array<object>>(
      []
   )
   const [showSelectedTag, setShowSelectedTag] = useState<string>('')

   const { tags, posts } = useSelector((state: any) => state.posts)

   const isPostLoading: any = posts.status === 'loading'

   useEffect(() => {
      dispatch(fetchPosts())
      dispatch(fetchTags())
      setIsLoading(false)
   }, []) // eslint-disable-line react-hooks/exhaustive-deps

   const filterPostsByTag = (e: React.ChangeEvent<HTMLButtonElement>) => {
      const filterTag = e.target.value
      const innerArray = structuredClone(posts.items)
      const filtered = []

      for (let i = 0; i < innerArray.length; i++) {
         for (let j = 0; j < innerArray[i].tags.length; j++) {
            if (innerArray[i].tags[j].trim().toLowerCase() === filterTag) {
               filtered.push(innerArray[i])
            }
         }
      }
      setShowSelectedTag(filterTag)
      setFilteredPostByTag(filtered)
   }

   const backToFirstState = () => {
      setFilteredPostByTag([])
      setShowSelectedTag('')
   }

   return (
      <div className={classes.containerArticlesPage}>
         <Title
            title="Articles"
            fontSize="2.65rem"
            justifyContent="flex-start"
            func={() => backToFirstState()}
         />
         <section className={classes.containerArticlesTagsSection}>
            <article>
               <ArticlesList
                  isPostLoading={isPostLoading}
                  posts={
                     filteredPostsByTag.length > 0
                        ? filteredPostsByTag
                        : posts.items
                  }
               />
            </article>
            <div className={classes.wrapperSortBtn}>
               {showSelectedTag === '' ? (
                  <Title
                     fontSize="1.6rem"
                     justifyContent="flex-start"
                     title="#Tags"
                  />
               ) : (
                  <Title
                     fontSize="1.6rem"
                     justifyContent="flex-start"
                     title={`#${showSelectedTag}`}
                  />
               )}

               <TagsBlockAside
                  tags={tags.items}
                  isLoading={isLoading}
                  filterPostsByTag={filterPostsByTag}
               />
            </div>
         </section>
      </div>
   )
}

export default Articles
