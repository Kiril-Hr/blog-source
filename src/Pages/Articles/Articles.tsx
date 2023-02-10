import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTags } from '../../redux/slices/posts'
import ArticlesList from '../../components/ArticlesComponent/ArticlesList'
import TagsBlockAside from '../../components/Tags/TagsBlockAside'
import Title from '../../components/Title/Title'
import './Articles.scss'

const Articles = () => {
   const dispatch = useDispatch<any>()
   const [isLoading, setIsLoading] = useState(true)

   const { tags } = useSelector((state: any) => state.posts)

   const filteredTags = tags.items.reduce((obj: any, tag: string) => {
      if (!obj[tag]) {
         obj[tag] = tag
      }
      return obj
   }, {})

   useEffect(() => {
      dispatch(fetchTags())
      setIsLoading(false)
   }, [])

   return (
      <div className="container-articles-page">
         <Title
            title="Articles"
            fontSize="2.65rem"
            justifyContent="flex-start"
         />
         <section className="container-articles-tags-section">
            <article>
               <ArticlesList />
            </article>
            <TagsBlockAside
               tags={Object.values(filteredTags)}
               isLoading={isLoading}
            />
         </section>
      </div>
   )
}

export default Articles
